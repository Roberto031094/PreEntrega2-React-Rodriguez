import React from 'react';
import "./App.css";
import Header from './components/Header';
import { ContadorProvider } from './components/ContadorContext';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ContadorProvider>
        <NavBar />
        <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<h1>404 Not found</h1>} />
         </Routes>
      </ContadorProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
