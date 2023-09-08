// import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './Routes';
import Footer from './components/Footer';
import { NosotrosProvider } from './assets/context/nosotrosConstext';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <NosotrosProvider>
        <AppRoutes />
      </NosotrosProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
