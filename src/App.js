import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
import Footer from './components/Home/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <SignUpPage></SignUpPage>
          </Route>
          <Route exact path="/details/:serviceId">
            <Details></Details>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
