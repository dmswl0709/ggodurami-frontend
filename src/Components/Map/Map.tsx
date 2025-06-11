import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapSection: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (!mapContainer.current || !window.kakao?.maps) return;

      // ✅ 카카오맵 그려지는 div 스타일 강제 지정
      mapContainer.current.style.width = '100%';
      mapContainer.current.style.height = '500px';
      mapContainer.current.style.backgroundColor = '#FFEFD5';

      const map = new window.kakao.maps.Map(mapContainer.current, {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 8,
      });

      const markerPositions = [
        { lat: 37.5665, lng: 126.9780, title: '서울' },
        { lat: 35.1796, lng: 129.0756, title: '부산' },
        { lat: 35.8714, lng: 128.6014, title: '대구' },
        { lat: 37.4563, lng: 126.7052, title: '인천' },
        { lat: 35.1595, lng: 126.8526, title: '광주' },
        { lat: 36.3504, lng: 127.3845, title: '대전' },
      ];

      markerPositions.forEach(({ lat, lng, title }) => {
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(lat, lng),
          title,
        });
        marker.setMap(map);

        const infoWindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;">${title} 충전소</div>`,
        });

        window.kakao.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(map, marker);
        });
      });
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
  }, []);

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
      </MapWrapper>
    </MapContainer>
  );
};

const MapContainer = styled.section`
  padding: 20px;
  background-color: #FFEFD5;
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const MapDiv = styled.div`
  width: 100% !important;
  height: 500px !important;
  background-color: #FFEFD5 !important;
`;

const LoadingText = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
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

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default MapSection;