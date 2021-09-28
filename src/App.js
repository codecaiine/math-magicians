import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './pages/Navbar';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
