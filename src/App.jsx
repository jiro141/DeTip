// import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './Routes';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
