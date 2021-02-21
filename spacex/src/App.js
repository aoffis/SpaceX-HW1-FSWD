import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import RocketPage from './component/rocket.js';
import LauchPage from './component/lauches';
import HomePage from './component/home';

function App() {
  return(
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">SpaceX</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Rockets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lauches</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
      <RocketPage></RocketPage>
      </div>
      </>
    );
}

export default App;
