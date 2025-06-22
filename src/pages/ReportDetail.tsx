// pages/ReportDetail.tsx
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Components/Logo/Logo';
import  Map  from '../Components/Map/Map';
import Container from '../Components/Common/Container';
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0; /* 기존 20px에서 5px로 대폭 축소 */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px; /* 기존 20px에서 5px로 대폭 축소 */
  padding: 0 10px;
  max-width: 1200px; /* 기존 800px에서 1200px로 확대 */
  margin: 0 auto 5px auto; /* 마진도 동일하게 축소 */
  
  @media (max-width: 1024px) {
    max-width: 95%;
    margin-bottom: 3px;
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1px;
    padding: 0 5px;
  }
`;

const LogoContainer = styled.div`
  margin-top: 2px; /* 기존 5px에서 2px로 더 축소 */
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 25px; /* 기존 28px에서 32px로 확대 */
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px; /* 왼쪽 마진을 200px로 크게 설정하여 오른쪽으로 이동 */
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px; /* 반응형에서는 조금 줄임 */
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 10px 0 0 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 8px 0 0 50px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 450px; /* 기존 400px에서 450px로 확대 */
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  max-width: 1200px; /* 기존 800px에서 1200px로 확대 */
  margin: 0 auto 30px auto;
  padding: 0 20px;
  box-sizing: border-box;
  
  iframe, 
  > div {
    width: 100% !important;
    height: 100% !important;
  }
  
  @media (max-width: 1024px) {
    max-width: 95%;
    height: 400px;
    padding: 0 15px;
    margin: 0 auto 25px auto;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    padding: 0 10px;
    margin: 0 auto 20px auto;
  }
  
  @media (max-width: 480px) {
    height: 280px;
    padding: 0 5px;
    margin: 0 auto 15px auto;
  }
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 50px; /* 기존 40px에서 50px로 확대 */
  max-width: 1200px; /* 기존 800px에서 1200px로 확대 */
  margin: 0 auto 40px auto; /* 아래쪽 마진 40px 추가 */
  
  @media (max-width: 1024px) {
    max-width: 95%;
    padding: 40px 30px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 0 10px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0 5px;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 35px; /* 기존 30px에서 35px로 확대 */
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px; /* 기존 15px에서 18px로 확대 */
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 12px;
  }
`;

const InfoLabel = styled.span`
  font-size: 18px; /* 기존 16px에서 18px로 확대 */
  font-weight: 600;
  color: #333;
  min-width: 140px; /* 기존 120px에서 140px로 확대 */
  margin-right: 15px; /* 기존 10px에서 15px로 확대 */
  
  @media (max-width: 1024px) {
    font-size: 17px;
    min-width: 130px;
    margin-right: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    min-width: 120px;
    margin-right: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 5px;
    min-width: auto;
    margin-right: 0;
  }
`;

const InfoValue = styled.span`
  font-size: 18px; /* 기존 16px에서 18px로 확대 */
  color: #555;
  line-height: 1.5;
  
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ImageSection = styled.div`
  margin-bottom: 35px; /* 기존 30px에서 35px로 확대 */
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const ImageLabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px; /* 기존 15px에서 18px로 확대 */
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 12px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px; /* 기존 400px에서 500px로 확대 */
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 1024px) {
    max-width: 450px;
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const ReportImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 2px solid #ddd;
  margin-bottom: 12px; /* 기존 10px에서 12px로 확대 */
`;

const ImageCaption = styled.p`
  font-size: 16px; /* 기존 14px에서 16px로 확대 */
  color: #666;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const DetailSection = styled.div`
  margin-top: 25px; /* 기존 20px에서 25px로 확대 */
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

const DetailContent = styled.p`
  font-size: 18px; /* 기존 16px에서 18px로 확대 */
  color: #555;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

interface ReportDetailData {
  pestType: string;
  diseaseType: string;
  location: string;
  reportContent: string;
  reportTime: string;
  detailContent: string;
  imageUrl: string;
  imageCaption: string;
}

export const ReportDetail: React.FC = () => {
  // 실제로는 API나 props로 받아올 데이터
  const reportData: ReportDetailData = {
    pestType: '병해충',
    diseaseType: '노균병',
    location: '전북특별자치도 전주시 완산구 망내로 28',
    reportContent: '벼 줄자 전염 병해충이 발견 됐어요.',
    reportTime: '',
    detailContent: '최근 대규모 공동육묘장이 증가하고, 모 기르는(육묘) 기간의 단축, 벼씨 소독 기술 교육과 홍보 등으로 모판에서의 키다리병 발생이 점차 줄어드는 추세 인 것 같아요',
    imageUrl: 'https://via.placeholder.com/400x300/90EE90/000000?text=벼+키다리병(못자리)',
    imageCaption: '벼 키다리병(못자리)'
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>신고상황 세부 페이지</HeaderTitle>
      </Header>
      
      <MapContainer>
        <Map />
      </MapContainer>
      
      <Container>
        <ContentWrapper>
          <InfoSection>
            <InfoItem>
              <InfoLabel>발생 유형 :</InfoLabel>
              <InfoValue>{reportData.pestType}</InfoValue>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>병해충명 :</InfoLabel>
              <InfoValue>{reportData.diseaseType}</InfoValue>
            </InfoItem>
            
            <InfoItem>
              <InfoLabel>발생 지역 주소 :</InfoLabel>
              <InfoValue>{reportData.location}</InfoValue>
            </InfoItem>
  
            <ImageSection>
              <ImageLabelContainer>
                <InfoLabel>접수된 신고 사진 :</InfoLabel>
              </ImageLabelContainer>
              <ImageContainer>
                <ReportImage 
                  src={reportData.imageUrl} 
                  alt={reportData.imageCaption}
                />
                <ImageCaption>{reportData.imageCaption}</ImageCaption>
              </ImageContainer>
            </ImageSection>
          </InfoSection>
          
          <DetailSection>
            <InfoItem>
              <InfoLabel>접수된 신고 내용:</InfoLabel>
            </InfoItem>
            <DetailContent>
              {reportData.detailContent}
            </DetailContent>
          </DetailSection>
        </ContentWrapper>
      </Container>
    </PageContainer>
  );
};

export default ReportDetail;