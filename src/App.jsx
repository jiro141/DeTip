// import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './Routes';
import Footer from './components/Footer';
import { NosotrosProvider } from './assets/context/nosotrosConstext';
import { LanguageProvider } from './assets/context/IdiomaContext';
import './App.css'
// import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Index from './view/Index';
function App() {

  return (
    <BrowserRouter>
      <LanguageProvider>
        {/* <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes> */}
        <NavBar />
        <NosotrosProvider>
          <AppRoutes className="contenedor"  />
        </NosotrosProvider>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
