// pages/Home.tsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import AlertBanner from '../Components/AlertBanner/AlertBanner';
import NewsSection from '../Components/NewsSection/NewsSection';
import Container from '../Components/Common/Container';
import TopBar from '../Components/TopBar/TopBar';
import MapSection from '../Components/Map/Map';



const Home: React.FC = () => {
    const navigate = useNavigate(); // 훅 설정
  
    return (
      <>
        <TopBar />
        <Header />
        <Container>
          <MainWrapper>
            <MapSection />
            <AlertBanner />
            <NewsSection />
          </MainWrapper>
        </Container>
      </>
    );
  };

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Home;