import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// Components/Map/Map.tsx
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import redMarker from '../../assets/images/red_marker.png';
import blueMarker from '../../assets/images/blue_marker.png';
// 🔥 안전한 문자열 변환 함수 추가
const safeToString = (value) => {
    if (value === null || value === undefined)
        return '';
    return String(value);
};
// 🔥 유효한 좌표인지 확인하는 함수 추가
const isValidCoordinate = (lat, lng) => {
    const latStr = safeToString(lat);
    const lngStr = safeToString(lng);
    if (!latStr || !lngStr || latStr.trim() === '' || lngStr.trim() === '') {
        return false;
    }
    const latNum = parseFloat(latStr);
    const lngNum = parseFloat(lngStr);
    return !isNaN(latNum) && !isNaN(lngNum) &&
        latNum > 33 && latNum < 39 &&
        lngNum > 125 && lngNum < 130;
};
const MapSection = ({ reports = [], onMarkerClick, selectedReport, // 🔥 새로운 prop
onReportBoxClick // 🔥 새로운 prop
 }) => {
    const mapContainer = useRef(null);
    const mapInstanceRef = useRef(null); // 🔥 지도 인스턴스 참조 추가
    const infoWindowRef = useRef(null); // 🔥 InfoWindow 참조 추가
    // 🔥 selectedReport 변경 시 InfoWindow 업데이트
    useEffect(() => {
        console.log('🔄 selectedReport useEffect 실행:', {
            selectedReport: selectedReport?.title,
            hasMapInstance: !!mapInstanceRef.current,
            hasInfoWindow: !!infoWindowRef.current
        });
        if (mapInstanceRef.current && infoWindowRef.current) {
            console.log('🔄 selectedReport 변경됨, InfoWindow 업데이트:', selectedReport?.title);
            // 약간의 지연을 두고 실행 (지도가 완전히 로드된 후)
            setTimeout(() => {
                updateInfoWindow();
            }, 50);
        }
    }, [selectedReport, onReportBoxClick]);
    // 🔥 InfoWindow 업데이트 함수
    const updateInfoWindow = () => {
        const map = mapInstanceRef.current;
        const infoWindow = infoWindowRef.current;
        console.log('🔄 updateInfoWindow 호출됨:', {
            hasMap: !!map,
            hasInfoWindow: !!infoWindow,
            selectedReport: selectedReport?.title
        });
        if (!map || !infoWindow) {
            console.warn('⚠️ map 또는 infoWindow가 준비되지 않음');
            return;
        }
        if (selectedReport) {
            console.log('✅ InfoWindow 표시 시작:', selectedReport.title);
            const lat = parseFloat(safeToString(selectedReport.latitude));
            const lng = parseFloat(safeToString(selectedReport.longitude));
            console.log('📍 좌표:', { lat, lng });
            if (!isValidCoordinate(lat, lng)) {
                console.warn('❌ 유효하지 않은 좌표:', lat, lng);
                return;
            }
            const position = new window.kakao.maps.LatLng(lat, lng);
            // 🔥 클릭 가능한 InfoWindow 내용 생성 (두 번째 사진과 동일하게)
            const content = `
        <div style="
          padding: 12px; 
          background: white; 
          border-radius: 8px; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          min-width: 220px;
          max-width: 300px;
          cursor: pointer;
          border: 1px solid #ddd;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        " 
        onmouseover="this.style.boxShadow='0 6px 16px rgba(0,0,0,0.2)';"
        onmouseout="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';"
        onclick="window.handleReportBoxClick && window.handleReportBoxClick()">
          <div style="
            color: #d32f2f; 
            font-size: 15px; 
            font-weight: bold; 
            margin-bottom: 8px;
            border-bottom: 1px solid #eee;
            padding-bottom: 6px;
          ">${selectedReport.title}</div>
          <div style="
            font-size: 13px; 
            color: #666; 
            background: #f5f5f5; 
            padding: 4px 8px; 
            border-radius: 4px;
            margin-bottom: 8px;
            display: inline-block;
          ">${selectedReport.main_category} - ${selectedReport.sub_category}</div>
          <div style="
            font-size: 11px; 
            color: #999; 
            border-top: 1px solid #eee; 
            padding-top: 6px;
            line-height: 1.4;
          ">
            📍 위도: ${lat.toFixed(6)} | 경도: ${lng.toFixed(6)}<br/>
            🎯 마커: ${selectedReport.main_category === '재난' ? '빨간색 (재난/재해)' : '파란색 (병해충)'}
          </div>
        </div>
      `;
            // 🔥 전역 함수로 클릭 핸들러 등록
            window.handleReportBoxClick = onReportBoxClick;
            // 🔥 InfoWindow 설정 및 표시
            infoWindow.setContent(content);
            infoWindow.setPosition(position);
            infoWindow.setMap(map);
            // 해당 위치로 지도 중심 이동 (부드럽게)
            map.panTo(position);
            console.log('✅ InfoWindow 표시 완료', {
                position: { lat, lng },
                content: content.substring(0, 100) + '...'
            });
        }
        else {
            console.log('🔄 InfoWindow 숨김');
            // selectedReport가 없으면 InfoWindow 숨김
            infoWindow.setMap(null);
            // 전역 함수 정리
            delete window.handleReportBoxClick;
        }
    };
    useEffect(() => {
        const loadKakaoMap = () => {
            if (!mapContainer.current || !window.kakao?.maps)
                return;
            mapContainer.current.style.width = '100%';
            mapContainer.current.style.height = '500px';
            mapContainer.current.style.backgroundColor = '#FFEFD5';
            const map = new window.kakao.maps.Map(mapContainer.current, {
                center: new window.kakao.maps.LatLng(36.5, 127.8),
                level: 13,
            });
            // 🔥 지도와 InfoWindow 인스턴스 저장
            mapInstanceRef.current = map;
            infoWindowRef.current = new window.kakao.maps.InfoWindow({
                zIndex: 1000,
                removable: false
            });
            console.log('✅ 지도 및 InfoWindow 초기화 완료');
            // 🔥 지도 클릭 시 InfoWindow 닫기
            window.kakao.maps.event.addListener(map, 'click', () => {
                console.log('🗺️ 지도 클릭됨, InfoWindow 닫기');
                if (onMarkerClick) {
                    onMarkerClick(''); // 빈 문자열로 selectedReport 초기화
                }
            });
            // 🔥 지도 초기화 완료 후 selectedReport가 있으면 InfoWindow 표시
            if (selectedReport) {
                setTimeout(() => {
                    updateInfoWindow();
                }, 100);
            }
            const validReports = reports.filter(report => {
                try {
                    return isValidCoordinate(report.latitude, report.longitude);
                }
                catch (error) {
                    console.warn('좌표 검증 중 오류:', error, report);
                    return false;
                }
            });
            console.log('=== 지도 데이터 처리 ===');
            console.log('전체 신고 수:', reports.length);
            console.log('유효한 좌표를 가진 신고 수:', validReports.length);
            console.log('유효한 신고 데이터:', validReports);
            if (validReports.length > 0) {
                validReports.forEach((report, index) => {
                    try {
                        const latStr = safeToString(report.latitude);
                        const lngStr = safeToString(report.longitude);
                        const lat = parseFloat(latStr);
                        const lng = parseFloat(lngStr);
                        console.log(`마커 ${index + 1} 생성:`, {
                            title: report.title,
                            id: report.id,
                            originalLat: report.latitude,
                            originalLng: report.longitude,
                            convertedLat: lat,
                            convertedLng: lng,
                            category: report.main_category
                        });
                        if (isValidCoordinate(lat, lng)) {
                            let markerImageSrc = '';
                            let markerColor = '';
                            let imageSize = null;
                            const mainCategory = safeToString(report.main_category).toLowerCase();
                            if (mainCategory.includes('재난') || mainCategory.includes('재해') ||
                                mainCategory === '재난' || mainCategory === '재해') {
                                markerImageSrc = redMarker;
                                markerColor = '빨간색 (재난/재해)';
                                imageSize = new window.kakao.maps.Size(32, 45);
                            }
                            else if (mainCategory.includes('병해충') || mainCategory.includes('병해') ||
                                mainCategory === '병해충') {
                                markerImageSrc = blueMarker;
                                markerColor = '파란색 (병해충)';
                                imageSize = new window.kakao.maps.Size(28, 40);
                            }
                            else {
                                markerImageSrc = redMarker;
                                markerColor = '기본';
                                imageSize = new window.kakao.maps.Size(32, 45);
                            }
                            const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, imageSize);
                            const marker = new window.kakao.maps.Marker({
                                position: new window.kakao.maps.LatLng(lat, lng),
                                title: safeToString(report.title) || `신고 ${index + 1}`,
                                image: markerImage
                            });
                            marker.setMap(map);
                            // 🔥 마커 클릭 시 onMarkerClick 호출 (InfoWindow는 selectedReport로 관리)
                            window.kakao.maps.event.addListener(marker, 'click', () => {
                                console.log('🖱️ 마커 클릭:', {
                                    title: report.title,
                                    id: report.id,
                                    hasOnMarkerClick: !!onMarkerClick
                                });
                                if (onMarkerClick) {
                                    if (report.id) {
                                        console.log(`✅ onMarkerClick 호출 - ID: ${report.id}`);
                                        onMarkerClick(report.id);
                                    }
                                    else {
                                        const safeTitle = safeToString(report.title).replace(/\s/g, '_');
                                        const tempId = `temp_${index}_${safeTitle}`;
                                        console.warn(`⚠️ Report ID 없음, 임시 ID 사용: ${tempId}`);
                                        onMarkerClick(tempId);
                                    }
                                }
                                else {
                                    console.warn('⚠️ onMarkerClick 콜백이 제공되지 않음');
                                }
                            });
                            console.log(`✅ 마커 ${index + 1} 생성 완료`);
                        }
                        else {
                            console.warn(`❌ 유효하지 않은 좌표: ${report.title}, lat: ${lat}, lng: ${lng}`);
                        }
                    }
                    catch (error) {
                        console.error(`❌ 마커 ${index + 1} 생성 중 오류:`, error, report);
                    }
                });
                console.log(`🗺️ 총 ${validReports.length}개의 신고가 지도에 표시되었습니다.`);
            }
            else {
                console.log('📍 유효한 신고 데이터가 없어 기본 마커 표시');
                const defaultMarkerPositions = [
                    { lat: 37.5665, lng: 126.9780, title: '서울' },
                    { lat: 35.1796, lng: 129.0756, title: '부산' },
                    { lat: 35.8714, lng: 128.6014, title: '대구' },
                    { lat: 37.4563, lng: 126.7052, title: '인천' },
                    { lat: 35.1595, lng: 126.8526, title: '광주' },
                    { lat: 36.3504, lng: 127.3845, title: '대전' },
                ];
                defaultMarkerPositions.forEach(({ lat, lng, title }) => {
                    const marker = new window.kakao.maps.Marker({
                        position: new window.kakao.maps.LatLng(lat, lng),
                        title,
                    });
                    marker.setMap(map);
                    const infoWindow = new window.kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;">${title} 지역</div>`,
                    });
                    window.kakao.maps.event.addListener(marker, 'click', () => {
                        infoWindow.open(map, marker);
                    });
                });
            }
        };
        const createScript = () => {
            const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
            if (existingScript) {
                if (window.kakao?.maps) {
                    window.kakao.maps.load(loadKakaoMap);
                }
                else {
                    existingScript.addEventListener('load', () => {
                        window.kakao.maps.load(loadKakaoMap);
                    });
                }
                return;
            }
            const script = document.createElement('script');
            script.src =
                'https://dapi.kakao.com/v2/maps/sdk.js?appkey=b74908d0327634ff8eff0c8309007f61&autoload=false';
            script.async = true;
            script.onload = () => {
                window.kakao.maps.load(loadKakaoMap);
            };
            script.onerror = () => {
                console.error('❌ 카카오 지도 API 로딩 실패');
            };
            document.head.appendChild(script);
        };
        createScript();
        // 🔥 컴포넌트 언마운트 시 정리
        return () => {
            if (infoWindowRef.current) {
                infoWindowRef.current.setMap(null);
            }
            delete window.handleReportBoxClick;
        };
    }, [reports, onMarkerClick]);
    const validReportsCount = reports.filter(report => {
        try {
            return isValidCoordinate(report.latitude, report.longitude);
        }
        catch {
            return false;
        }
    }).length;
    return (_jsx(MapContainer, { children: _jsxs(MapWrapper, { children: [_jsx(MapDiv, { ref: mapContainer, children: _jsx(LoadingText, { children: "\uC9C0\uB3C4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..." }) }), _jsx(MapControls, { children: _jsx(ControlButton, { onClick: () => window.location.reload(), children: "\uD83D\uDD04 \uC0C8\uB85C\uACE0\uCE68" }) }), reports.length > 0 && (_jsxs(_Fragment, { children: [_jsxs(ReportCounter, { children: [_jsxs(CounterText, { children: ["\uCD1D ", reports.length, "\uAC74\uC758 \uC2E0\uACE0"] }), _jsxs(CounterSubText, { children: ["(\uC704\uCE58 \uC815\uBCF4: ", validReportsCount, "\uAC74)"] })] }), _jsxs(Legend, { children: [_jsx(LegendTitle, { children: "\uBC94\uB840" }), _jsxs(LegendItem, { children: [_jsx(RedMarker, { children: "\u25CF" }), _jsx(LegendText, { children: "\uC7AC\uB09C/\uC7AC\uD574" })] }), _jsxs(LegendItem, { children: [_jsx(BlueMarker, { children: "\u25CF" }), _jsx(LegendText, { children: "\uBCD1\uD574\uCDA9" })] })] })] }))] }) }));
};
// 🔥 개선된 반응형 스타일
const MapContainer = styled.section `
  padding: 20px;
  background-color: #FFEFD5;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;
const MapWrapper = styled.div `
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #fff;
  
  @media (min-width: 1400px) {
    width: 60vw;
  }
  
  @media (max-width: 1399px) {
    width: 80vw;
  }
  
  @media (max-width: 768px) {
    width: 95vw;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    border-radius: 6px;
    margin: 0;
  }
`;
const MapDiv = styled.div `
  width: 100% !important;
  height: 500px !important;
  background-color: #FFEFD5 !important;
  
  @media (max-width: 1024px) {
    height: 450px !important;
  }
  
  @media (max-width: 768px) {
    height: 400px !important;
  }
  
  @media (max-width: 640px) {
    height: 350px !important;
  }
  
  @media (max-width: 480px) {
    height: 300px !important;
  }
  
  @media (max-width: 360px) {
    height: 280px !important;
  }
`;
const LoadingText = styled.div `
  font-size: 16px;
  color: #666;
  text-align: center;
  padding-top: 240px;
  
  @media (max-width: 768px) {
    padding-top: 190px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding-top: 140px;
    font-size: 13px;
  }
`;
const MapControls = styled.div `
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  
  @media (max-width: 480px) {
    top: 5px;
    right: 5px;
  }
`;
const ControlButton = styled.button `
  background: skyblue;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 11px;
  }
`;
const ReportCounter = styled.div `
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  @media (max-width: 480px) {
    bottom: 5px;
    left: 5px;
    padding: 8px 10px;
    border-radius: 6px;
  }
`;
const CounterText = styled.div `
  font-size: 14px;
  font-weight: 600;
  color: #d32f2f;
  margin-bottom: 2px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const CounterSubText = styled.div `
  font-size: 11px;
  color: #666;
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
const Legend = styled.div `
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
  
  @media (max-width: 480px) {
    top: 5px;
    left: 5px;
    padding: 8px;
    border-radius: 6px;
    max-width: 120px;
  }
`;
const LegendTitle = styled.div `
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;
const LegendItem = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 3px;
  }
`;
const RedMarker = styled.span `
  color: #ff4444;
  font-size: 16px;
  margin-right: 6px;
  font-weight: bold;
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-right: 4px;
  }
`;
const BlueMarker = styled.span `
  color: #4285f4;
  font-size: 16px;
  margin-right: 6px;
  font-weight: bold;
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-right: 4px;
  }
`;
const LegendText = styled.span `
  font-size: 11px;
  color: #666;
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
// 🔥 디버깅용 스타일 제거
export default MapSection;
