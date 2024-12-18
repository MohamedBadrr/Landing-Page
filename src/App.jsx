import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home/Home'
import FeaturesPage from './pages/Features/FeaturesPage'
import AboutUs from './pages/AboutUs/AboutUs'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import SignIn from './pages/signin/SignIn'
import { ContextProvider } from './components/Auth'
import RequireAuth from './components/RequireAuth'
 
function App() {
  return ( 
    <>
    <BrowserRouter>
      <ContextProvider >
          <Header />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/features' element={<FeaturesPage />}/>
              <Route path='/aboutus' element={<RequireAuth><AboutUs /></RequireAuth>}/>
              <Route path='/signin' element={<SignIn />}/>
          </Routes>
          <Footer />
          </ContextProvider> 
    </BrowserRouter>
    </>
  ) 
}

export default App
