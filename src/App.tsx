import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import AlertBanner from './components/AlertBanner/AlertBanner';
import NewsSection from './components/NewsSection/NewsSection';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <main>
          <Map/>
          <AlertBanner />
          <NewsSection />
        </main>
      </div>
    </>
  );
}

export default App;