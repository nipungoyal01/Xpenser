import './App.css';
import Home from './Pages/Home'
import Header from './components/Header'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import AddExpense from './Pages/Add-expense';
import Footer from './components/Footer';

function App() {
  return (
<Router>
<Header/>
<Routes>
<Route path='/'  element={<Home/>} />
<Route path='/add-expense' element={<AddExpense/>} />
</Routes>
<Footer/>
</Router>
  );
}

export default App;
