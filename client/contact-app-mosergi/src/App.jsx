import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import SectionIndexPage from './components/sectionIndexPage';
import Register from './components/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Header /> <SectionIndexPage /></>}></Route>
        <Route path='/Register' element={<><Header /> <Register /></>}></Route>
        <Route path='/Login' element={<><Header /></>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
