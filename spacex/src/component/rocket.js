import "bootstrap/dist/css/bootstrap.min.css";

function Rocket() {
  return (
    <div class="card bg-dark text-white">
      <img src="https://via.placeholder.com/300x200" class="card-img" alt="..."></img>
      <div class="card-img-overlay">
        <h2 class="card-title">name</h2>
        <span class="badge rounded-pill bg-dark">status</span><br></br>
        <button>more detail</button>
      </div>
    </div>

  )
}

function App() {
  return (
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
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-5">
            <Rocket></Rocket>
          </div>
          <div class="col-sm-5">
            <Rocket></Rocket>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-5">
            <Rocket></Rocket>
          </div>
          <div class="col-sm-5">
            <Rocket></Rocket>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
    </>
  );
}

export default App;
