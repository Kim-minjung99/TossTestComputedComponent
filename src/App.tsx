import './App.css';
import TossBankErrorPage from './components/ErrorBoundary/TossBankErrorPage';
import AsyncComponent from './components/AsyncComponent/AsyncComponent';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

// lazy
const Detail = React.lazy(()=>import ('./pages/Detail'));
const Cart = React.lazy(()=>import ('./pages/Cart'));
const ErrorboundaryTest = React.lazy(()=>import ('./pages/ErrorboundaryTest'));


function App() {
  return(
    <AsyncComponent errorFallback={<TossBankErrorPage/>} suspenseFallback={<div>now Loading...</div>}>
      <Routes>
        <Route path='/error/test' element={<ErrorboundaryTest/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AsyncComponent>
  );
}

export default App;
