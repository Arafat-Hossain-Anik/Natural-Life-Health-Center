import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
import Footer from './components/Home/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Details from './components/Details/Details';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/register">
              <SignUpPage></SignUpPage>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/article">
              <Articles></Articles>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
