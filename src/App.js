
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/App.scss';
import JobDesc from './components/JobDesc';
import Home from './components/Home';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/github-jobs" component={Home} />
        <Route path="/job/:id" component={JobDesc} />
      </Switch>  
    </Router>
  );
}

export default App;
