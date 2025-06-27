// Components/Map/Map.tsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import redMarker from '../../assets/images/red_marker.png';
import blueMarker from '../../assets/images/blue_marker.png';

declare global {
  interface Window {
    kakao: any;
  }
}

interface ReportData {
  title: string;
  main_category: string;
  sub_category: string;
  latitude: string;
  longitude: string;
  id?: string; // ID 추가
}

interface MapProps {
  reports?: ReportData[];
  onMarkerClick?: (reportId: string) => void; // 마커 클릭 콜백 추가
}

const MapSection: React.FC<MapProps> = ({ reports = [], onMarkerClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (!mapContainer.current || !window.kakao?.maps) return;

      // 지도 컨테이너 스타일 설정
      mapContainer.current.style.width = '100%';
      mapContainer.current.style.height = '500px';
      mapContainer.current.style.backgroundColor = '#FFEFD5';

      const map = new window.kakao.maps.Map(mapContainer.current, {
        center: new window.kakao.maps.LatLng(36.5, 127.8), // 대한민국 중심 좌표
        level: 13, // 대한민국 전체가 보이는 레벨 (13-14 정도가 적당)
      });

      // reports 데이터에서 위도/경도가 있는 것들만 필터링 (빈 문자열도 제외)
      const validReports = reports.filter(report => 
        report.latitude && 
        report.longitude && 
        report.latitude !== "" && 
        report.longitude !== "" &&
        report.latitude.trim() !== "" &&
        report.longitude.trim() !== ""
      );

      console.log('Valid reports with coordinates:', validReports); // 디버깅용

      if (validReports.length > 0) {
        // 실제 신고 데이터로 마커 생성
        validReports.forEach((report, index) => {
          const lat = parseFloat(report.latitude);
          const lng = parseFloat(report.longitude);
          
          console.log(`Creating marker ${index}:`, {
            title: report.title,
            id: report.id,
            lat,
            lng,
            category: report.main_category
          });
          
          // 유효한 좌표인지 확인 (한국 영역 내 좌표인지도 체크)
          if (!isNaN(lat) && !isNaN(lng) && lat > 33 && lat < 39 && lng > 125 && lng < 130) {
            
            // 카테고리에 따른 마커 색상 결정
            let markerImageSrc = '';
            let markerColor = '';
            let imageSize = null;
            
            if (report.main_category === '재난' || report.main_category === '재해' || 
                report.main_category.includes('재난') || report.main_category.includes('재해')) {
              // 재난/재해: 빨간색 마커 (로컬 이미지)
              markerImageSrc = redMarker;
              markerColor = '빨간색 (재난/재해)';
              imageSize = new window.kakao.maps.Size(32, 45); // 빨간색 마커 크기
            } else if (report.main_category === '병해충' || report.main_category.includes('병해')) {
              // 병해충: 파란색 마커 (로컬 이미지)
              markerImageSrc = blueMarker;
              markerColor = '파란색 (병해충)';
              imageSize = new window.kakao.maps.Size(28, 40); // 파란색 마커 크기 (조금 작게)
            } else {
              // 기타: 기본 빨간색 마커
              markerImageSrc = redMarker;
              markerColor = '기본';
              imageSize = new window.kakao.maps.Size(32, 45); // 기본 크기
            }

            // 마커 이미지 설정
            const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, imageSize);

            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(lat, lng),
              title: report.title || `신고 ${index + 1}`,
              image: markerImage
            });
            marker.setMap(map);

            // 정보창 내용 구성
            const categoryDisplay = report.main_category || '미분류';
            const subCategoryDisplay = report.sub_category ? ` - ${report.sub_category}` : '';
            
            const infoContent = `
              <div style="padding:12px; min-width:220px; max-width:300px; border-radius: 8px;">
                <strong style="color: #d32f2f; font-size: 15px; margin-bottom: 8px; display: block;">
                  ${report.title || '신고 내용'}
                </strong>
                <div style="margin-bottom: 6px;">
                  <span style="font-size: 13px; color: #666; background: #f5f5f5; padding: 2px 6px; border-radius: 4px;">
                    ${categoryDisplay}${subCategoryDisplay}
                  </span>
                </div>
                <div style="font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 6px; margin-top: 6px;">
                  📍 위도: ${lat.toFixed(6)} | 경도: ${lng.toFixed(6)}<br/>
                  🎯 마커: ${markerColor}
                </div>
              </div>
            `;

            const infoWindow = new window.kakao.maps.InfoWindow({
              content: infoContent,
            });

            // 마커 클릭 시 정보창 표시 및 상세 정보 요청
            window.kakao.maps.event.addListener(marker, 'click', () => {
              console.log('Marker clicked:', {
                title: report.title,
                id: report.id,
                hasOnMarkerClick: !!onMarkerClick
              });
              
              infoWindow.open(map, marker);
              
              // 상세 정보 요청
              if (onMarkerClick) {
                if (report.id) {
                  console.log(`Calling onMarkerClick with ID: ${report.id}`);
                  onMarkerClick(report.id);
                } else {
                  // ID가 없는 경우 임시로 인덱스나 제목 기반 ID 생성
                  const tempId = `temp_${index}_${report.title.replace(/\s/g, '_')}`;
                  console.warn(`Report ID missing, using temporary ID: ${tempId}`);
                  onMarkerClick(tempId);
                }
              } else {
                console.warn('onMarkerClick callback not provided');
              }
            });
          } else {
            console.warn(`Invalid coordinates for report: ${report.title}, lat: ${lat}, lng: ${lng}`);
          }
        });

        // 대한민국 전체 뷰 유지 (개별 신고 위치로 이동하지 않음)
        console.log(`✅ ${validReports.length}개의 신고가 지도에 표시되었습니다.`);

      } else {
        // 신고 데이터가 없거나 위도/경도가 없는 경우 기본 마커들 표시
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
        } else {
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
  }, [reports, onMarkerClick]); // reports와 onMarkerClick이 변경될 때마다 지도를 다시 그림

  return (
    <MapContainer>
      <MapWrapper>
        <MapDiv ref={mapContainer}>
          <LoadingText>지도를 불러오는 중...</LoadingText>
        </MapDiv>
        <MapControls>
          <ControlButton onClick={() => window.location.reload()}>
            🔄 새로고침
          </ControlButton>
        </MapControls>
        {/* 범례와 신고 수 표시 */}
        {reports.length > 0 && (
          <>
            <ReportCounter>
              <CounterText>총 {reports.length}건의 신고</CounterText>
              <CounterSubText>
                (위치 정보: {reports.filter(r => r.latitude && r.longitude && r.latitude !== "" && r.longitude !== "").length}건)
              </CounterSubText>
            </ReportCounter>
            
            <Legend>
              <LegendTitle>범례</LegendTitle>
              <LegendItem>
                <RedMarker>●</RedMarker>
                <LegendText>재난/재해</LegendText>
              </LegendItem>
              <LegendItem>
                <BlueMarker>●</BlueMarker>
                <LegendText>병해충</LegendText>
              </LegendItem>
            </Legend>
          </>
        )}
      </MapWrapper>
    </MapContainer>
  );
};

const MapContainer = styled.section`
  padding: 20px;
  background-color: #FFEFD5;
`;

const MapWrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #fff;
  
  @media (max-width: 768px) {
    width: 95vw; /* 모바일에서 지도 크기 확대 */
  }
  
  @media (max-width: 480px) {
    width: 98vw; /* 작은 모바일에서 더 크게 */
  }
`;

const MapDiv = styled.div`
  width: 100% !important;
  height: 500px !important;
  background-color: #FFEFD5 !important;
  
  @media (max-width: 768px) {
    height: 400px !important; /* 모바일에서 적당한 높이 유지 */
  }
  
  @media (max-width: 480px) {
    height: 350px !important; /* 작은 모바일에서 높이 조정 */
  }
`;

const LoadingText = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  padding-top: 240px;
`;

const MapControls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

const ControlButton = styled.button`
  background: white;
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
`;

const ReportCounter = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const CounterText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #d32f2f;
  margin-bottom: 2px;
`;

const CounterSubText = styled.div`
  font-size: 11px;
  color: #666;
`;

const Legend = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const LegendTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const RedMarker = styled.span`
  color: #ff4444;
  font-size: 16px;
  margin-right: 6px;
  font-weight: bold;
`;

const BlueMarker = styled.span`
  color: #4285f4;
  font-size: 16px;
  margin-right: 6px;
  font-weight: bold;
`;

const LegendText = styled.span`
  font-size: 11px;
  color: #666;
`;

export default MapSection;