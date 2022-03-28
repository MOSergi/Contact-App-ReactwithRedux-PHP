import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import Header from './components/header';
import SectionIndexPage from './components/sectionIndexPage';
import Register from './components/register';
import Login from './components/login';
import loginReducer from "./reducers/loginReducer.js";

function App() {


  const store = createStore(loginReducer);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<><Header /> <SectionIndexPage /></>}></Route>
          <Route path='/Register' element={<><Header /> <Register /></>}></Route>
          <Route path='/Login' element={<><Header /> <Login /></>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
