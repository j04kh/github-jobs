import { useState , useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/App.scss';
import SearchBox from './components/SearchBox';
import List from './components/List';
import JobDesc from './components/JobDesc';
import WorldIcon from "./assets/world-icon.png";


function App() {

const [jobs, setJobs] = useState();

const [fullTime, setFullTime] = useState('false');

const [city, setCity] = useState('new york');

const [jobSearch, setJobSearch] = useState('');

const [locationSearch, setLocationSearch] = useState('');

const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
const targetUrl = `https://jobs.github.com/positions.json?description=${jobSearch}&location=${city}&full_time=${fullTime}&page=1`;

const getPositions = () => {
  fetch(proxyUrl + targetUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setJobs(data);
  });
};

const locationSearchHandler = (e) => {
  e.preventDefault();
  setCity(locationSearch);
  getPositions();
  setLocationSearch('');
}

const searchBoxHandler = (e) => {
  e.preventDefault();
  getPositions();
  setJobSearch('');
}

useEffect(()=> getPositions() , []);  // eslint-disable-line react-hooks/exhaustive-deps

useEffect(()=> getPositions() , [city, fullTime]);  // eslint-disable-line react-hooks/exhaustive-deps

const fullTimeHandler = () => {
  fullTime === 'false' ? setFullTime('true') : setFullTime('false');
}

  return (

    <Router>
      <Switch>
      <Route exact path="/" >
        <div className="App">
          <h1 className="title">Github <span className="title light">Jobs</span></h1>
          <SearchBox search={jobSearch} setInput={setJobSearch} submit={searchBoxHandler} />
          <div className="main-container">

            <div className="container-left">
              <label class="container-rect">Full time
                <input type="checkbox" onChange={e => fullTimeHandler(e)} name="rect-radio"/>
                <span class="checkmark-rect"></span>
              </label>
              
              <p id="location-label">LOCATION</p>
              <form className="location-search-rectangle" onChange={e => setLocationSearch(e.target.value)} onSubmit={e => locationSearchHandler(e)}>
                <img className="icon" src={WorldIcon} alt="icon"/>
                <input placeholder="City, state, zip code or country" className="text-input-left" value={locationSearch} />      
              </form>
              <div className="city-checkboxes">
                <label class="container">London
                  <input type="radio" checked={city === 'london'} onClick={e => setCity('london')} name="radio"/>
                  <span class="checkmark"></span>
                </label>
                <label class="container">Amsterdam
                  <input type="radio" checked={city === 'amsterdam'} onClick={e => setCity('amsterdam')} name="radio"/>
                  <span class="checkmark"></span>
                </label>
                <label class="container">New York
                  <input type="radio" checked={city === 'new york'} onClick={e => setCity('new york')} name="radio"/>
                  <span class="checkmark"></span>
                </label>
                <label class="container">Berlin
                  <input type="radio" checked={city === 'berlin'} onClick={e => setCity('berlin')} name="radio"/>
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="container-right">
              {jobs && <List list={jobs}/>}
            </div>
          <p className="footer"> Joaquín Hernández @ DevChallenges.io </p>
          </div>
          
        </div>
      </Route>

      <Route path="/job/:id" component={JobDesc} />
    </Switch>  
    </Router>

    
  );
}

export default App;
