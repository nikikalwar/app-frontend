import logo from './logo.svg';
import './App.css';
import { SignUp } from './components/SignUp';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,BrowserRouter,Routes
} from "react-router-dom";
import { Home } from './components/Home';
import { ReVerifyUser } from './components/ReverifyUser';
import { ForgotPassword } from './components/ForgotPassword';
import { SignIn } from './components/SignIn';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route exact path='/'  element={<Home/>} />
       <Route  path='/signup'  element={<SignUp/>} />
       <Route  path='/reverify-user'  element={<ReVerifyUser/>} />
       <Route  path='/forgot-password'  element={<ForgotPassword/>} />
       <Route  path='/signin'  element={<SignIn/>} />
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
