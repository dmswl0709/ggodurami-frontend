// src/Components/FindLocal/FindLocal.tsx
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// 카카오 맵 타입 선언
declare global {
  interface Window {
    kakao: any;
  }
}

// 타입 정의를 먼저 export
export interface SelectedLocation {
  address: string;
  lat: number;
  lng: number;
}

interface FindLocalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (location: SelectedLocation) => void;
}

// 카카오 지도 API 로드
const loadKakaoMapAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.kakao?.maps?.services) {
      resolve();
      return;
    }

    const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        if (window.kakao?.maps) {
          window.kakao.maps.load(() => resolve());
        } else {
          reject(new Error('카카오 지도 API 로딩 실패'));
        }
      });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=b74908d0327634ff8eff0c8309007f61&autoload=false&libraries=services';
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => resolve());
    };
    script.onerror = () => {
      reject(new Error('카카오 지도 API 로딩 실패'));
    };
    document.head.appendChild(script);
  });
};

const FindLocal: React.FC<FindLocalProps> = ({ isOpen, onClose, onLocationSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  
  // 마커 참조를 위한 ref 추가
  const markerRef = useRef<any>(null);

  // 기존 마커를 확실히 제거하는 함수
  const clearExistingMarker = () => {
    // 상태에서 관리하는 마커 제거
    if (marker) {
      marker.setMap(null);
      setMarker(null);
    }
    
    // ref로 관리하는 마커 제거
    if (markerRef.current) {
      markerRef.current.setMap(null);
      markerRef.current = null;
    }
    
    console.log('모든 기존 마커 제거 완료');
  };

  // 새 마커를 생성하는 함수
  const createNewMarker = (lat: number, lng: number) => {
    if (!map) return null;

    // 기존 마커 완전 제거
    clearExistingMarker();

    // 새 마커 생성
    const position = new window.kakao.maps.LatLng(lat, lng);
    const newMarker = new window.kakao.maps.Marker({
      position: position,
      map: map
    });

    // 상태와 ref 모두에 저장
    setMarker(newMarker);
    markerRef.current = newMarker;
    
    console.log('새 마커 생성 완료:', lat, lng);
    return newMarker;
  };

  // 지도 초기화
  useEffect(() => {
    if (!isOpen || !mapContainer.current) return;

    const initializeMap = async () => {
      try {
        console.log('지도 초기화 시작...');
        
        // 초기화 시 모든 마커 정리
        clearExistingMarker();
        setSelectedLocation(null);
        setIsMapReady(false);
        
        await loadKakaoMapAPI();

        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심
          level: 8
        };

        const kakaoMap = new window.kakao.maps.Map(mapContainer.current, mapOption);
        setMap(kakaoMap);
        
        // 지도가 완전히 로드된 후 준비 상태로 설정
        setTimeout(() => {
          setIsMapReady(true);
          console.log('지도 준비 완료');
        }, 1000);

      } catch (error) {
        console.error('지도 초기화 실패:', error);
      }
    };

    initializeMap();

    // cleanup 함수
    return () => {
      clearExistingMarker();
    };
  }, [isOpen]);

  // 지도가 준비되면 클릭 이벤트 등록
  useEffect(() => {
    if (!map || !isMapReady) return;

    console.log('지도 클릭 이벤트 등록');

    // 클릭 이벤트 핸들러
    const clickHandler = (mouseEvent: any) => {
      const latlng = mouseEvent.latLng;
      const lat = latlng.getLat();
      const lng = latlng.getLng();
      console.log('지도 클릭됨:', lat, lng);
      handleMapClick(lat, lng);
    };

    // 이벤트 등록
    window.kakao.maps.event.addListener(map, 'click', clickHandler);

    // cleanup 함수
    return () => {
      console.log('지도 클릭 이벤트 제거');
      window.kakao.maps.event.removeListener(map, 'click', clickHandler);
    };
  }, [map, isMapReady]);

  // 지도 클릭 처리
  const handleMapClick = async (lat: number, lng: number) => {
    if (!map) return;

    try {
      console.log('지도 클릭 처리 시작:', lat, lng);

      // 새 마커 생성 (기존 마커는 자동으로 제거됨)
      createNewMarker(lat, lng);

      // 지도 중심 이동
      const position = new window.kakao.maps.LatLng(lat, lng);
      map.setCenter(position);

      // 좌표를 주소로 변환
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2Address(lng, lat, (result: any[], status: string) => {
        console.log('지오코딩 상태:', status);
        
        if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
          const address = result[0];
          let addressName = '';

          if (address.road_address) {
            addressName = address.road_address.address_name;
          } else if (address.address) {
            addressName = address.address.address_name;
          }

          console.log('주소 변환 완료:', addressName);

          setSelectedLocation({
            address: addressName,
            lat,
            lng
          });
        } else {
          console.log('주소 변환 실패, 좌표만 저장');
          setSelectedLocation({
            address: `위도: ${lat.toFixed(6)}, 경도: ${lng.toFixed(6)}`,
            lat,
            lng
          });
        }
      });

    } catch (error) {
      console.error('지도 클릭 처리 실패:', error);
      setSelectedLocation({
        address: `위도: ${lat.toFixed(6)}, 경도: ${lng.toFixed(6)}`,
        lat,
        lng
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
    
    places.keywordSearch(searchKeyword, (data: any[], status: string) => {
      console.log('검색 상태:', status);
      
      if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
        const firstPlace = data[0];
        const targetLat = parseFloat(firstPlace.y);
        const targetLng = parseFloat(firstPlace.x);
        
        console.log('검색 결과로 이동:', targetLat, targetLng);
        
        // 지도 중심 이동
        const moveLatLng = new window.kakao.maps.LatLng(targetLat, targetLng);
        map.setCenter(moveLatLng);
        map.setLevel(3);
        
        // 검색 결과 위치에 마커 표시
        handleMapClick(targetLat, targetLng);
      } else {
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
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        console.log('현재 위치:', lat, lng);
        
        // 지도 중심 이동
        const moveLatLng = new window.kakao.maps.LatLng(lat, lng);
        map.setCenter(moveLatLng);
        map.setLevel(3);
        
        // 현재 위치에 마커 표시
        handleMapClick(lat, lng);
      }, (error) => {
        console.error('위치 가져오기 오류:', error);
        alert('현재 위치를 가져올 수 없습니다.');
      });
    } else {
      alert('브라우저에서 위치 서비스를 지원하지 않습니다.');
    }
  };

  // 위치 선택 확인
  const handleConfirmLocation = () => {
    if (selectedLocation) {
      console.log('위치 선택 확인:', selectedLocation);
      onLocationSelect(selectedLocation);
      handleCancel(); // 상태 초기화와 함께 닫기
    } else {
      alert('지도에서 위치를 선택해주세요.');
    }
  };

  // 취소 시 상태 초기화
  const handleCancel = () => {
    console.log('위치 선택 취소');
    
    // 모든 상태 초기화
    setSelectedLocation(null);
    setSearchKeyword('');
    setIsMapReady(false);
    
    // 모든 마커 제거
    clearExistingMarker();
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <MapOverlay>
      <MapPopupContainer>
        <MapHeader>
          <MapTitle>📍 위치 찾기</MapTitle>
          <CloseButton onClick={handleCancel}>✕</CloseButton>
        </MapHeader>

        <SearchSection>
          <SearchGuide>
            🔍 장소를 검색하거나 지도를 직접 클릭하여 위치를 선택하세요
          </SearchGuide>
          <SearchInputGroup>
            <SearchInput
              type="text"
              placeholder="장소명이나 주소를 검색하세요 (예: 강남역, 서울시청)"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <SearchButton onClick={handleSearch}>🔍 검색</SearchButton>
          </SearchInputGroup>
          <CurrentLocationButton onClick={handleCurrentLocation}>
            📍 현재 위치로 이동
          </CurrentLocationButton>
        </SearchSection>

        <MapContainer ref={mapContainer}>
          {!isMapReady && (
            <MapLoadingText>지도를 불러오는 중...</MapLoadingText>
          )}
        </MapContainer>

        {selectedLocation && (
          <SelectedLocationInfo>
            <InfoTitle>✅ 선택된 위치:</InfoTitle>
            <InfoAddress>{selectedLocation.address}</InfoAddress>
            <InfoCoords>
              위도: {selectedLocation.lat.toFixed(6)}, 경도: {selectedLocation.lng.toFixed(6)}
            </InfoCoords>
          </SelectedLocationInfo>
        )}

        <MapFooter>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <ConfirmButton 
            onClick={handleConfirmLocation}
            disabled={!selectedLocation}
          >
            이 위치로 선택
          </ConfirmButton>
        </MapFooter>

        <HelpText>
          💡 지도에서 원하는 위치를 클릭하면 마커가 표시됩니다
        </HelpText>
      </MapPopupContainer>
    </MapOverlay>
  );
};

// 스타일 컴포넌트들
const MapOverlay = styled.div`
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

const MapPopupContainer = styled.div`
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

const MapHeader = styled.div`
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

const MapTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CloseButton = styled.button`
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

const SearchSection = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SearchGuide = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
  background-color: #e3f2fd;
  padding: 8px 12px;
  border-radius: 6px;
  border-left: 4px solid #2196f3;
`;

const SearchInputGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #FBBF77;
  }
`;

const SearchButton = styled.button`
  padding: 10px 16px;
  background-color: #FBBF77;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover {
    background-color: #E6AB65;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CurrentLocationButton = styled.button`
  padding: 8px 12px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    background-color: #5a6268;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const MapLoadingText = styled.div`
  color: #666;
  font-size: 0.9rem;
  text-align: center;
  padding: 20px;
`;

const SelectedLocationInfo = styled.div`
  padding: 15px 20px;
  background-color: #e8f5e8;
  border-top: 1px solid #eee;
  border-left: 4px solid #4caf50;

  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`;

const InfoTitle = styled.div`
  font-weight: 600;
  color: #2e7d2e;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const InfoAddress = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 3px;
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InfoCoords = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const MapFooter = styled.div`
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

const CancelButton = styled.button`
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

const ConfirmButton = styled.button`
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

const HelpText = styled.div`
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

// 기본 export로 변경
export default FindLocal;