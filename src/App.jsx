// import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './Routes';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
