import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/about us/About';
import Apply from './component/apply now/Apply';
import Footer from './component/footer/Footer';
import Header from './component/Header/Header';
import Home from './component/home/Home';
import News from './component/news/News';
import NotFound from './component/not found/NotFound';
import Services from './component/services/Services';

function App() {
  return (
    <Router>
      {/* Header component */}
      <Header></Header>

      {/* switching component */}
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/news'>
          <News></News>
        </Route>
        <Route path='/apply'>
          <Apply></Apply>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>

      {/* footer component */}
      <Footer></Footer>

    </Router>
  );
}

export default App;
