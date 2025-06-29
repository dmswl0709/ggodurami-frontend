import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/Components/FindLocal/FindLocal.tsx
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// 🔥 지도 API 매니저 클래스 (싱글톤 패턴)
class KakaoMapAPIManager {
    constructor() {
        Object.defineProperty(this, "isLoaded", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "isLoading", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "loadPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    static getInstance() {
        if (!KakaoMapAPIManager.instance) {
            KakaoMapAPIManager.instance = new KakaoMapAPIManager();
        }
        return KakaoMapAPIManager.instance;
    }
    async ensureLoaded() {
        if (this.isLoaded && window.kakao?.maps?.services) {
            console.log('✅ 카카오맵 API 이미 로드됨');
            return Promise.resolve();
        }
        if (this.isLoading && this.loadPromise) {
            console.log('⏳ 카카오맵 API 로딩 대기 중...');
            return this.loadPromise;
        }
        this.isLoading = true;
        this.loadPromise = this.loadKakaoMapAPI();
        try {
            await this.loadPromise;
            this.isLoaded = true;
            console.log('🎉 카카오맵 API 로드 완료');
        }
        catch (error) {
            console.error('❌ 카카오맵 API 로드 실패:', error);
            this.isLoading = false;
            this.loadPromise = null;
            throw error;
        }
    }
    loadKakaoMapAPI() {
        return new Promise((resolve, reject) => {
            // 이미 로드된 경우
            if (window.kakao?.maps?.services) {
                console.log('카카오맵 API 이미 존재');
                resolve();
                return;
            }
            // 기존 스크립트 확인
            const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
            if (existingScript) {
                console.log('카카오맵 스크립트 대기 중...');
                const checkReady = () => {
                    if (window.kakao?.maps) {
                        window.kakao.maps.load(() => {
                            if (window.kakao.maps.services) {
                                resolve();
                            }
                            else {
                                setTimeout(checkReady, 100);
                            }
                        });
                    }
                    else {
                        setTimeout(checkReady, 100);
                    }
                };
                checkReady();
                return;
            }
            // 새 스크립트 로드
            console.log('🔄 카카오맵 API 스크립트 새로 로드');
            const script = document.createElement('script');
            script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=b74908d0327634ff8eff0c8309007f61&autoload=false&libraries=services';
            script.async = true;
            script.onload = () => {
                console.log('📦 카카오맵 스크립트 로드됨');
                if (window.kakao?.maps) {
                    window.kakao.maps.load(() => {
                        console.log('🗺️ 카카오맵 라이브러리 초기화 완료');
                        // services 라이브러리 로드 대기
                        const checkServices = () => {
                            if (window.kakao.maps.services) {
                                resolve();
                            }
                            else {
                                setTimeout(checkServices, 50);
                            }
                        };
                        checkServices();
                    });
                }
                else {
                    reject(new Error('카카오 객체를 찾을 수 없습니다'));
                }
            };
            script.onerror = (error) => {
                console.error('❌ 카카오맵 스크립트 로드 실패:', error);
                reject(new Error('카카오맵 스크립트 로드 실패'));
            };
            document.head.appendChild(script);
            // 타임아웃 설정 (20초)
            setTimeout(() => {
                if (!this.isLoaded) {
                    reject(new Error('카카오맵 API 로드 타임아웃'));
                }
            }, 20000);
        });
    }
    isMapReady() {
        return this.isLoaded && window.kakao?.maps?.services;
    }
}
const FindLocal = ({ isOpen, onClose, onLocationSelect }) => {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isMapLoading, setIsMapLoading] = useState(false);
    const [mapError, setMapError] = useState(null);
    const [isMapReady, setIsMapReady] = useState(false);
    const markerRef = useRef(null);
    const apiManager = KakaoMapAPIManager.getInstance();
    // 🔥 컴포넌트 마운트 시 API 미리 로드
    useEffect(() => {
        const preloadAPI = async () => {
            try {
                console.log('🚀 컴포넌트 마운트 - API 미리 로드 시작');
                await apiManager.ensureLoaded();
                console.log('✅ API 미리 로드 성공');
            }
            catch (error) {
                console.error('❌ API 미리 로드 실패:', error);
            }
        };
        preloadAPI();
    }, []); // 컴포넌트 마운트 시 한 번만 실행
    // 기존 마커를 확실히 제거하는 함수
    const clearExistingMarker = () => {
        if (marker) {
            marker.setMap(null);
            setMarker(null);
        }
        if (markerRef.current) {
            markerRef.current.setMap(null);
            markerRef.current = null;
        }
        console.log('모든 기존 마커 제거 완료');
    };
    // 새 마커를 생성하는 함수
    const createNewMarker = (latitude, longitude) => {
        if (!map)
            return null;
        clearExistingMarker();
        const position = new window.kakao.maps.LatLng(latitude, longitude);
        const newMarker = new window.kakao.maps.Marker({
            position: position,
            map: map
        });
        setMarker(newMarker);
        markerRef.current = newMarker;
        console.log('새 마커 생성 완료:', latitude, longitude);
        return newMarker;
    };
    // 🔥 지도 초기화 - 최적화된 버전
    useEffect(() => {
        if (!isOpen || !mapContainer.current)
            return;
        const initializeMap = async () => {
            try {
                console.log('🗺️ 지도 초기화 시작...');
                setIsMapLoading(true);
                setMapError(null);
                setIsMapReady(false);
                // 기존 상태 초기화
                clearExistingMarker();
                setSelectedLocation(null);
                // API 로드 확인 (이미 미리 로드되어 있어야 함)
                if (!apiManager.isMapReady()) {
                    console.log('⏳ API 로드 대기...');
                    await apiManager.ensureLoaded();
                }
                // 지도 생성
                const mapOption = {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                    level: 8
                };
                console.log('🔨 지도 인스턴스 생성...');
                const kakaoMap = new window.kakao.maps.Map(mapContainer.current, mapOption);
                // 지도 로드 완료 대기
                await new Promise((resolve) => {
                    const checkMapReady = () => {
                        try {
                            kakaoMap.getCenter(); // 지도가 준비되었는지 확인
                            resolve();
                        }
                        catch (error) {
                            setTimeout(checkMapReady, 100);
                        }
                    };
                    checkMapReady();
                });
                setMap(kakaoMap);
                setIsMapReady(true);
                console.log('✅ 지도 초기화 완료');
            }
            catch (error) {
                console.error('❌ 지도 초기화 실패:', error);
                setMapError('지도를 불러오는데 실패했습니다. 새로고침 후 다시 시도해주세요.');
            }
            finally {
                setIsMapLoading(false);
            }
        };
        initializeMap();
        return () => {
            clearExistingMarker();
        };
    }, [isOpen]);
    // 지도가 준비되면 클릭 이벤트 등록
    useEffect(() => {
        if (!map || !isMapReady)
            return;
        console.log('👆 지도 클릭 이벤트 등록');
        const clickHandler = (mouseEvent) => {
            const latlng = mouseEvent.latLng;
            const latitude = latlng.getLat();
            const longitude = latlng.getLng();
            console.log('지도 클릭됨:', latitude, longitude);
            handleMapClick(latitude, longitude);
        };
        window.kakao.maps.event.addListener(map, 'click', clickHandler);
        return () => {
            console.log('지도 클릭 이벤트 제거');
            window.kakao.maps.event.removeListener(map, 'click', clickHandler);
        };
    }, [map, isMapReady]);
    // 지도 클릭 처리
    const handleMapClick = async (latitude, longitude) => {
        if (!map)
            return;
        try {
            console.log('지도 클릭 처리 시작:', latitude, longitude);
            createNewMarker(latitude, longitude);
            const position = new window.kakao.maps.LatLng(latitude, longitude);
            map.setCenter(position);
            // 좌표를 주소로 변환
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.coord2Address(longitude, latitude, (result, status) => {
                console.log('지오코딩 상태:', status);
                if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
                    const address = result[0];
                    let addressName = '';
                    if (address.road_address) {
                        addressName = address.road_address.address_name;
                    }
                    else if (address.address) {
                        addressName = address.address.address_name;
                    }
                    console.log('주소 변환 완료:', addressName);
                    setSelectedLocation({
                        address: addressName,
                        latitude,
                        longitude
                    });
                }
                else {
                    console.log('주소 변환 실패, 좌표만 저장');
                    setSelectedLocation({
                        address: `위도: ${latitude.toFixed(6)}, 경도: ${longitude.toFixed(6)}`,
                        latitude,
                        longitude
                    });
                }
            });
        }
        catch (error) {
            console.error('지도 클릭 처리 실패:', error);
            setSelectedLocation({
                address: `위도: ${latitude.toFixed(6)}, 경도: ${longitude.toFixed(6)}`,
                latitude,
                longitude
            });
        }
    };
    // 키워드 검색
    const handleSearch = () => {
        if (!map || !searchKeyword.trim()) {
            console.log('지도 객체가 없거나 검색어가 비어있습니다.');
            return;
        }
        console.log('검색 시작:', searchKeyword);
        const places = new window.kakao.maps.services.Places();
        places.keywordSearch(searchKeyword, (data, status) => {
            console.log('검색 상태:', status);
            if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
                const firstPlace = data[0];
                const targetLatitude = parseFloat(firstPlace.y);
                const targetLongitude = parseFloat(firstPlace.x);
                console.log('검색 결과로 이동:', targetLatitude, targetLongitude);
                const moveLatLng = new window.kakao.maps.LatLng(targetLatitude, targetLongitude);
                map.setCenter(moveLatLng);
                map.setLevel(3);
                handleMapClick(targetLatitude, targetLongitude);
            }
            else {
                console.log('검색 결과가 없습니다.');
                alert('검색 결과가 없습니다. 다른 키워드로 검색해보세요.');
            }
        });
    };
    // 현재 위치로 이동
    const handleCurrentLocation = () => {
        if (!map) {
            console.log('지도 객체가 없습니다.');
            return;
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log('현재 위치:', latitude, longitude);
                const moveLatLng = new window.kakao.maps.LatLng(latitude, longitude);
                map.setCenter(moveLatLng);
                map.setLevel(3);
                handleMapClick(latitude, longitude);
            }, (error) => {
                console.error('위치 가져오기 오류:', error);
                alert('현재 위치를 가져올 수 없습니다.');
            });
        }
        else {
            alert('브라우저에서 위치 서비스를 지원하지 않습니다.');
        }
    };
    // 위치 선택 확인
    const handleConfirmLocation = () => {
        if (selectedLocation) {
            console.log('위치 선택 확인 - 전달할 데이터:', selectedLocation);
            onLocationSelect(selectedLocation);
            handleCancel();
        }
        else {
            alert('지도에서 위치를 선택해주세요.');
        }
    };
    // 취소 시 상태 초기화
    const handleCancel = () => {
        console.log('위치 선택 취소');
        setSelectedLocation(null);
        setSearchKeyword('');
        setIsMapReady(false);
        setMapError(null);
        clearExistingMarker();
        onClose();
    };
    // 🔥 재시도 함수 개선
    const handleRetry = async () => {
        console.log('🔄 지도 새로고침 시작');
        setMapError(null);
        setIsMapLoading(true);
        setIsMapReady(false);
        setMap(null);
        clearExistingMarker();
        setSelectedLocation(null);
        try {
            // API 상태 초기화
            const apiManager = KakaoMapAPIManager.getInstance();
            // 강제로 API 재로드
            if (window.kakao?.maps) {
                console.log('🔄 기존 카카오맵 API 재초기화');
            }
            // 약간의 지연 후 다시 시도
            setTimeout(async () => {
                try {
                    await apiManager.ensureLoaded();
                    if (mapContainer.current) {
                        const mapOption = {
                            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                            level: 8
                        };
                        console.log('🔨 지도 인스턴스 재생성...');
                        const kakaoMap = new window.kakao.maps.Map(mapContainer.current, mapOption);
                        await new Promise((resolve) => {
                            const checkMapReady = () => {
                                try {
                                    kakaoMap.getCenter();
                                    resolve();
                                }
                                catch (error) {
                                    setTimeout(checkMapReady, 100);
                                }
                            };
                            checkMapReady();
                        });
                        setMap(kakaoMap);
                        setIsMapReady(true);
                        setIsMapLoading(false);
                        console.log('✅ 지도 새로고침 완료');
                    }
                }
                catch (error) {
                    console.error('❌ 지도 새로고침 실패:', error);
                    setMapError('지도 새로고침에 실패했습니다. 페이지를 새로고침해주세요.');
                    setIsMapLoading(false);
                }
            }, 500);
        }
        catch (error) {
            console.error('❌ 새로고침 중 오류:', error);
            setMapError('새로고침 중 오류가 발생했습니다.');
            setIsMapLoading(false);
        }
    };
    if (!isOpen)
        return null;
    return (_jsx(MapOverlay, { children: _jsxs(MapPopupContainer, { children: [_jsxs(MapHeader, { children: [_jsx(MapTitle, { children: "\uD83D\uDCCD \uC704\uCE58 \uCC3E\uAE30" }), _jsx(CloseButton, { onClick: handleCancel, children: "\u2715" })] }), _jsxs(SearchSection, { children: [_jsx(SearchGuide, { children: "\uD83D\uDD0D \uC7A5\uC18C\uB97C \uAC80\uC0C9\uD558\uAC70\uB098 \uC9C0\uB3C4\uB97C \uC9C1\uC811 \uD074\uB9AD\uD558\uC5EC \uC704\uCE58\uB97C \uC120\uD0DD\uD558\uC138\uC694" }), _jsxs(SearchInputGroup, { children: [_jsx(SearchInput, { type: "text", placeholder: "\uC7A5\uC18C\uBA85\uC774\uB098 \uC8FC\uC18C\uB97C \uAC80\uC0C9\uD558\uC138\uC694 (\uC608: \uAC15\uB0A8\uC5ED, \uC11C\uC6B8\uC2DC\uCCAD)", value: searchKeyword, onChange: (e) => setSearchKeyword(e.target.value), onKeyPress: (e) => e.key === 'Enter' && handleSearch(), disabled: !isMapReady }), _jsx(SearchButton, { onClick: handleSearch, disabled: !isMapReady, children: "\uD83D\uDD0D \uAC80\uC0C9" })] }), _jsx(CurrentLocationButton, { onClick: handleCurrentLocation, disabled: !isMapReady, children: "\uD83D\uDCCD \uD604\uC7AC \uC704\uCE58\uB85C \uC774\uB3D9" })] }), _jsx(MapContainer, { ref: mapContainer, children: isMapLoading ? (_jsxs(MapLoadingOverlay, { children: [_jsx(LoadingSpinner, {}), _jsxs(MapLoadingText, { children: ["\uC9C0\uB3C4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4...", _jsx("br", {}), _jsx("small", { children: "\uCD5C\uCD08 \uB85C\uB4DC \uC2DC \uC2DC\uAC04\uC774 \uAC78\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4." })] }), _jsx(RefreshButton, { onClick: handleRetry, children: "\uD83D\uDD04 \uC0C8\uB85C\uACE0\uCE68" })] })) : mapError ? (_jsxs(MapErrorOverlay, { children: [_jsx(ErrorIcon, { children: "\u26A0\uFE0F" }), _jsx(ErrorMessage, { children: mapError }), _jsx(RefreshButton, { onClick: handleRetry, children: "\uD83D\uDD04 \uB2E4\uC2DC \uC2DC\uB3C4" })] })) : !isMapReady ? (_jsxs(MapInitOverlay, { children: [_jsx(InitIcon, { children: "\uD83D\uDDFA\uFE0F" }), _jsxs(InitMessage, { children: ["\uC9C0\uB3C4\uB97C \uC900\uBE44\uD558\uB294 \uC911\uC785\uB2C8\uB2E4...", _jsx("br", {}), _jsx("small", { children: "\uC9C0\uB3C4\uAC00 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC0C8\uB85C\uACE0\uCE68\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694" })] }), _jsx(RefreshButton, { onClick: handleRetry, children: "\uD83D\uDD04 \uC0C8\uB85C\uACE0\uCE68" })] })) : (_jsxs(MapReadyOverlay, { children: [_jsx(ReadyMessage, { children: "\u2705 \uC9C0\uB3C4 \uC900\uBE44 \uC644\uB8CC" }), _jsx(RefreshButtonCorner, { onClick: handleRetry, children: "\uD83D\uDD04" })] })) }), selectedLocation && (_jsxs(SelectedLocationInfo, { children: [_jsx(InfoTitle, { children: "\u2705 \uC120\uD0DD\uB41C \uC704\uCE58:" }), _jsx(InfoAddress, { children: selectedLocation.address }), _jsxs(InfoCoords, { children: ["\uC704\uB3C4: ", selectedLocation.latitude.toFixed(6), ", \uACBD\uB3C4: ", selectedLocation.longitude.toFixed(6)] })] })), _jsxs(MapFooter, { children: [_jsx(CancelButton, { onClick: handleCancel, children: "\uCDE8\uC18C" }), _jsx(ConfirmButton, { onClick: handleConfirmLocation, disabled: !selectedLocation, children: "\uC774 \uC704\uCE58\uB85C \uC120\uD0DD" })] }), _jsx(HelpText, { children: "\uD83D\uDCA1 \uC9C0\uB3C4\uC5D0\uC11C \uC6D0\uD558\uB294 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uBA74 \uB9C8\uCEE4\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4 \uD83D\uDD04 \uC9C0\uB3C4\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uAC70\uB098 \uB85C\uB529\uC774 \uAE38\uC5B4\uC9C0\uBA74 \uD398\uC774\uC9C0 \uC0C8\uB85C\uACE0\uCE68\uC744 \uD574\uC8FC\uC138\uC694." })] }) }));
};
// 🔥 추가된 스타일 컴포넌트들
const MapLoadingOverlay = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 10;
`;
const LoadingSpinner = styled.div `
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #FBBF77;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
const MapErrorOverlay = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 10;
  text-align: center;
  padding: 20px;
`;
const ErrorIcon = styled.div `
  font-size: 48px;
`;
const ErrorMessage = styled.div `
  color: #dc3545;
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
`;
const MapInitOverlay = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(248, 249, 250, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 10;
  text-align: center;
  padding: 20px;
`;
const InitIcon = styled.div `
  font-size: 48px;
`;
const InitMessage = styled.div `
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
  
  small {
    font-size: 12px;
    color: #999;
  }
`;
const MapReadyOverlay = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
`;
const ReadyMessage = styled.div `
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(76, 175, 80, 0.9);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  animation: fadeOut 2s ease-in-out forwards;
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    70% { opacity: 1; }
    100% { opacity: 0; }
  }
`;
const RefreshButton = styled.button `
  padding: 10px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E6AB65;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
const RefreshButtonCorner = styled.button `
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background-color: rgba(251, 191, 119, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  pointer-events: all;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: rgba(230, 171, 101, 0.9);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
// 기존 스타일 컴포넌트들
const MapOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const MapPopupContainer = styled.div `
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }
`;
const MapHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: #FBBF77;
  color: white;
  border-radius: 12px 12px 0 0;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;
const MapTitle = styled.h2 `
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const CloseButton = styled.button `
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const SearchSection = styled.div `
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;
const SearchGuide = styled.div `
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
  background-color: #e3f2fd;
  padding: 8px 12px;
  border-radius: 6px;
  border-left: 4px solid #2196f3;
`;
const SearchInputGroup = styled.div `
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;
const SearchInput = styled.input `
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #FBBF77;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
  }
`;
const SearchButton = styled.button `
  padding: 10px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background-color: #E6AB65;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const CurrentLocationButton = styled.button `
  padding: 8px 12px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover:not(:disabled) {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const MapContainer = styled.div `
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;
const MapLoadingText = styled.div `
  color: #666;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  
  small {
    font-size: 14px;
    color: #999;
  }
`;
const SelectedLocationInfo = styled.div `
  padding: 15px 20px;
  background-color: #e8f5e8;
  border-top: 1px solid #eee;
  border-left: 4px solid #4caf50;

  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`;
const InfoTitle = styled.div `
  font-weight: 600;
  color: #2e7d2e;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;
const InfoAddress = styled.div `
  font-size: 1rem;
  color: #333;
  margin-bottom: 3px;
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const InfoCoords = styled.div `
  font-size: 0.8rem;
  color: #666;
`;
const MapFooter = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const CancelButton = styled.button `
  flex: 1;
  padding: 12px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background-color: #5a6268;
  }
`;
const ConfirmButton = styled.button `
  flex: 2;
  padding: 12px 20px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;

  &:hover:not(:disabled) {
    background-color: #E6AB65;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const HelpText = styled.div `
  text-align: center;
  padding: 10px 20px;
  font-size: 0.8rem;
  color: #666;
  background-color: #f8f9fa;
  border-radius: 0 0 12px 12px;

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.75rem;
  }
`;
export default FindLocal;
