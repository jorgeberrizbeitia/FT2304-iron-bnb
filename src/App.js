import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AptList from './pages/AptList';
import AptAddForm from './pages/AptAddForm';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

import { useContext } from 'react';
import { ThemeContext } from './context/theme.context';

function App() {

  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={isDarkMode === true ? "App app-dark" : "App app-light"}>

      <button className={isDarkMode === true ? "btn-dark" : "btn-light"} onClick={toggleTheme}>Cambiar tema</button>

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/pisos/list" element={ <AptList/> }/>
        <Route path="/pisos/add" element={ <AptAddForm /> }/>

        {/* error handlers */}
        <Route path="/error" element={ <Error /> }/>
        <Route path="*" element={ <NotFound /> }/>
      

      </Routes>



    </div>
  );
}

export default App;
