import { useState } from 'react';
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import  Login  from './pages/Login';

import SendItem from './pages/SendItem';
import Footer from './components/Footer';
import { Signup } from './pages/Signup';
import About from './pages/About';
import Details from './pages/Details';
import OrderForm from './pages/OrderForm';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#27296d', 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/Home' element={<Home />} />
          <Route path='/pages/Login' element={<Login />} />
          <Route path='/pages/Signup' element={<Signup />} />
          <Route path='/pages/SendItem' element={<SendItem />} />
          <Route path='/pages/About'element={<About/>}/>
          <Route path='/pages/Details'element={<Details/>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
