// pages/SupportDetail.tsx
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Components/Logo/Logo';
import Container from '../Components/Common/Container';
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #FFEFD5;
  padding: 5px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto 5px auto;
  
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
  margin-top: 2px;
  margin-bottom: -50px;
  
  @media (max-width: 768px) {
    margin-top: 1px;
  }
  
  @media (max-width: 480px) {
    margin-top: 1px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #333;
  margin: 15px 0 0 40px;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 12px 0 0 40px;
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

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto 40px auto;
  
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

const TitleSection = styled.div`
  margin-bottom: 35px;
  padding-bottom: 25px;
  border-bottom: 2px solid #f0f0f0;
  
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
    padding-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding-bottom: 12px;
  }
`;

const MainTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.4;
  
  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
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

const InfoSection = styled.div`
  margin-bottom: 35px;
  
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

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const InfoTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const InfoTableHeader = styled.td`
  background-color: #D2B48C;
  padding: 15px 20px;
  font-weight: 600;
  color: #333;
  width: 150px;
  border-right: 1px solid #bbb;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    width: 120px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    width: 100px;
    font-size: 14px;
  }
`;

const InfoTableCell = styled.td`
  padding: 15px 20px;
  color: #555;
  font-size: 16px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 35px;
  
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

const ContentTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 12px;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  
  @media (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;

const AttachmentSection = styled.div`
  margin-top: 35px;
  padding-top: 25px;
  border-top: 2px solid #f0f0f0;
  
  @media (max-width: 1024px) {
    margin-top: 30px;
    padding-top: 20px;
  }
  
  @media (max-width: 768px) {
    margin-top: 25px;
    padding-top: 15px;
  }
  
  @media (max-width: 480px) {
    margin-top: 20px;
    padding-top: 12px;
  }
`;

const AttachmentContainer = styled.div`
  background-color: #D2B48C;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 8px;
  }
`;

const AttachmentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AttachmentIcon = styled.span`
  font-size: 20px;
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const AttachmentText = styled.span`
  color: #333;
  font-weight: 500;
  font-size: 16px;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const AttachmentActions = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ActionButton = styled.button`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
    border-color: #ccc;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

interface SupportDetailData {
  title: string;
  subtitle: string;
  manager: string;
  contact: string;
  period: string;
  announcementNumber: string;
  content: string;
  attachmentName: string;
  attachmentSize: string;
}

export const SupportDetail: React.FC = () => {
  const supportData: SupportDetailData = {
    title: '지원금 및 세미나',
    subtitle: '스마트 농업 현장 문제점 찾아 지원금 지급 공고',
    manager: '농업지원과',
    contact: '063-222-2222',
    period: '2025-06-02~2025-06-30',
    announcementNumber: '김제시 공고 제2025-626호',
    content: `'25년 소규모 사업장 방지시설 설치 지원사업 시행(추가) 공고

- 사물인터넷(IoT) 측정기기 부착 지원 -

「대기환경보전법」 제81조의 규정에 따라 추진하는 2025년도 소규모 대기오염 방지시설 설치지원 사업시설지원터넷 (IoT) 측정기기 부착지원」을 아래와 같이 추가로 공고오니 사업 참여 희망 사업장은 공고내용에 따라 신청서를 제출하 여 주시기 바랍니다.

2025년 6월 2일

김 제 시 장`,
    attachmentName: '지원금제안서양식표.hwpx',
    attachmentSize: '58 kb'
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderTitle>지원금 및 세미나</HeaderTitle>
      </Header>
      
      <Container>
        <ContentWrapper>
          <TitleSection>
            <MainTitle>{supportData.subtitle}</MainTitle>
            <SubTitle>농업지원과 2025.06.03</SubTitle>
          </TitleSection>
          
          <InfoSection>
            <InfoTable>
              <tbody>
                <InfoTableRow>
                  <InfoTableHeader>담당부서</InfoTableHeader>
                  <InfoTableCell>{supportData.manager}</InfoTableCell>
                </InfoTableRow>
                <InfoTableRow>
                  <InfoTableHeader>연락처</InfoTableHeader>
                  <InfoTableCell>{supportData.contact}</InfoTableCell>
                </InfoTableRow>
                <InfoTableRow>
                  <InfoTableHeader>공시/공고 기간</InfoTableHeader>
                  <InfoTableCell>{supportData.period}</InfoTableCell>
                </InfoTableRow>
              </tbody>
            </InfoTable>
          </InfoSection>
          
          <ContentSection>
            <ContentText>{supportData.announcementNumber}</ContentText>
            <ContentText style={{ whiteSpace: 'pre-line' }}>
              {supportData.content}
            </ContentText>
          </ContentSection>
          
          <AttachmentSection>
            <AttachmentContainer>
              <AttachmentInfo>
                <AttachmentIcon>📄</AttachmentIcon>
                <AttachmentText>
                  {supportData.attachmentName} [{supportData.attachmentSize}]
                </AttachmentText>
              </AttachmentInfo>
              <AttachmentActions>
                <ActionButton>다운로드</ActionButton>
                <ActionButton>미리보기</ActionButton>
              </AttachmentActions>
            </AttachmentContainer>
          </AttachmentSection>
        </ContentWrapper>
      </Container>
    </PageContainer>
  );
};

export default SupportDetail;