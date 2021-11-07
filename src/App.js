import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import Details from './Pages/Home/Deatails/Details';
import Login from './Login/Login/Login';
import Doctors from './Pages/Doctors/Doctors';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Register from './Login/Register/Register';

function App() {
  return (
    <div >
     <AuthProvider> <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home"><Home></Home></Route>
          <Route path="/about"><About></About></Route>
          <Route path="/services"><Services></Services></Route>
          <PrivateRoute path="/service/:_id"><Details></Details></PrivateRoute>
          <Route path="/experts"><Experts></Experts></Route>
          <PrivateRoute path="/doctors"><Doctors></Doctors></PrivateRoute>
          <Route path="/doctor/:_id"><Details></Details></Route>
          <Route path="/contact"><Contact></Contact></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/register"><Register></Register></Route>

          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router></AuthProvider>

    </div>
  );
}

export default App;
