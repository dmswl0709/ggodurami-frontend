import React from 'react';
import styled from 'styled-components';

const MapSection: React.FC = () => {
  return (
    <MapContainer>
      <MapWrapper>
        <MapPlaceholder>
          <MapText>한국 지도</MapText>
          <MapMarkers>
            {/* 임시 마커들 */}
            <Marker style={{ top: '20%', left: '45%' }}>📍</Marker>
            <Marker style={{ top: '35%', left: '40%' }}>📍</Marker>
            <Marker style={{ top: '50%', left: '35%' }}>📍</Marker>
            <Marker style={{ top: '65%', left: '30%' }}>📍</Marker>
            <Marker style={{ top: '70%', left: '55%' }}>📍</Marker>
            <Marker style={{ top: '80%', left: '50%' }}>📍</Marker>
          </MapMarkers>
          <Tooltip>
            버 충전시설 변해충 발생
          </Tooltip>
          <KakaoCredit>64km kakao</KakaoCredit>
        </MapPlaceholder>
      </MapWrapper>
    </MapContainer>
  );
};

const MapContainer = styled.section`
  padding: 20px;
  background-color: #f9f7f4;
`;

const MapWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
    to bottom,
    #87ceeb 0%,
    #87ceeb 30%,
    #98fb98 30%,
    #98fb98 70%,
    #87ceeb 70%,
    #87ceeb 100%
  );
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border: 2px solid #ddd;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const MapText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #666;
  font-weight: bold;
  opacity: 0.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MapMarkers = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Marker = styled.div`
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 60%;
  right: 15%;
  background: white;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  color: #333;
  border: 1px solid #ddd;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
  }

  @media (max-width: 768px) {
    right: 10%;
    font-size: 10px;
  }
`;

const KakaoCredit = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 12px;
  color: #666;
  background: rgba(255, 255, 255, 0.8);
  padding: 2px 6px;
  border-radius: 3px;
`;

export default MapSection;