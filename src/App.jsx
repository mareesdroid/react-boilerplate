import React, { Component, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes, Link, useLocation
  } from 'react-router-dom';
import PrimaryLoader from './components/PrimaryLoader';
import { useSelector } from 'react-redux';
import Routers from './Routers';



const App = (props) => {
   const {loading} = useSelector(state => state.ui)
   const location = useLocation();

useEffect(() => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
},[]);
 
  return (
   <>
     {loading && <PrimaryLoader /> }
     {/* {
       typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined') && <WalletListeners />
     } */}
     <Suspense fallback={<div className="loading" />}> 
      <Routers />
     </Suspense>
</>
  );
  }
  
  export default App;