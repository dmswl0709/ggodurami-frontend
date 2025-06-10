import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import AlertBanner from './components/AlertBanner/AlertBanner';
import NewsSection from './components/NewsSection/NewsSection';
import Container from './components/Common/Container';
import styled from 'styled-components'; // 추가

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Container>
          <MainWrapper>
            <Map />
            <AlertBanner />
            <NewsSection />
          </MainWrapper>
        </Container>
      </div>
    </>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default App;