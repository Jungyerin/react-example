import React from 'react';

// import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

const App: React.FC = () => {
  const name : string = '리액트';
    return (
        /* 주석 테스트 */
        <>
            {name === '리액트' ? (<div className="react">리액트 입니다.</div>) : (<div className="react">리액트가 아닙니다.</div>)}
            <MyComponent favoriteNumber={1}>
                리액트
            </MyComponent>
          <Counter/>
          <Say />
        </>
    );
};

export default App;
