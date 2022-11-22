import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from "react-icons/fi"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Employees, Stacked, Pyramid, Customers, Area, Bar, Pie, Financial, Restaurants } from "./pages";
import { useStateContext } from './contexts/ContextProvider';
import './App.css'
const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative w-full dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

               <Routes>
            {/* Dashboard Links */}
            <Route path='/' element={<Ecommerce />} />
            <Route path='/ecommerce' element={<Ecommerce />} />
        
            {/* Pages */}

            <Route path='/orders' element={<Orders/>} />
            <Route path='/employees' element={<Employees/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/restaurants' element={<Restaurants/>} />

        
            {/* Charts */}

            {/* <Route path='/line' element={<Line />} /> */}
            <Route path='/area' element={<Area/>} />
            <Route path='/bar' element={<Bar/>} />
            <Route path='/pie' element={<Pie/>} />
            <Route path='/financial' element={<Financial/>} />
            <Route path='/Pyramid' element={<Pyramid/>} />
            <Route path='/stacked' element={<Stacked/>} />

            {/* Error Page*/}
            <Route path='*' element="404"/>
          </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App
