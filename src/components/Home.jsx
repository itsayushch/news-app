import React from 'react';
import logo from '../assests/logo.svg';
import { Button } from 'antd';
import News from './News';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            News App
          </h1>
          <span>
            <span>The Ultimate Web News Application</span><br /><br />
            <span>
              <Button type="primary" size='large' shape="round" onClick={() => window.location.assign('/#news')}>
                Explore News
              </Button>
            </span>
          </span>
        </header>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 200'>
          <path fill='#d8b4fe' fillOpacity='1' d='M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,74.7C672,96,768,128,864,133.3C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
        </svg>
      </div>
      <div id="news">
          <br/><br/>
          <h1 style={{ fontSize: '40px', textAlign: 'center' }}>News</h1>
          <News />
      </div>
    </>
  );
}

export default App;
