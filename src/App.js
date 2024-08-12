import './App.css';
//import Countries from './components/country/Countries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//import Todo from './components/todo/Todo';
import Home from './components/Main/Home';
//import PageNotFound from './components/Main/PageNotFound';
//import RootLayout from './components/Main/NavBar';
//import NavBar from './components/Main/NavBar';
//import Footer from './components/Main/Footer';

import { Link } from 'react-router-dom';
import RootLayout from './components/Main/RootLayout';

function App() {
  return (
    <div>
    <RootLayout/>   
 </div>
  );
}
 export default App