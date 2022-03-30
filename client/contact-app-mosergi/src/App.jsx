import './styles/App.css';
//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//react redux
import { createStore } from "redux";
import { Provider } from 'react-redux';
import loginReducer from "./reducers/loginReducer.js";
//componentes
import Header from './components/header';
import SectionIndexPage from './components/sectionIndexPage';
import Register from './components/register';
import Login from './components/login';
import Profile from './components/profile';

function App() {

  const store = createStore(loginReducer);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<><Header /> <SectionIndexPage /></>}></Route>
          <Route path='/Register' element={<><Header /> <Register /></>}></Route>
          <Route path='/Login' element={<><Header /> <Login /></>}></Route>
          <Route path="/Profile" element={<><Header /> <Profile /></>}></Route>
          <Route path="/Contacts" element={<><Header /></>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
