
import './App.css';
import Header from './component/header/header';
import Login from './pages/login';
import Register from './pages/register';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Movies from './pages/movies';
import Favorites from './pages/favorites';
import NotFound from './pages/notFound';
import Home from './pages/home';

function App() {
  return (
   <BrowserRouter>
   <Header/>
  <Switch>
  <Route path={"/"} exact component={Home}/>
  <Route path={"/movie/:id"} exact component={Movies}/>
   <Route path={"/favorite"} exact component={Favorites}/>
   <Route path={"/login"} exact component= {Login}/>
   <Route path={"/register"} exact component = {Register}/>
   <Route path={"*"} exact component = {NotFound}/>
  </Switch>
   </BrowserRouter>
  );
}

export default App;
