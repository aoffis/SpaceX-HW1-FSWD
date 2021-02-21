import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Rocket(props) {
  return (
    <div class="card bg-dark text-white">
      <img
        src={props.data.flickr_images}
        class="card-img"
        alt="rocket"
        style={{ height: "45vh", objectFit: "cover" }}
      ></img>
      <div class="card-img-overlay">
        <div>
          <h2 class="card-title d-inline">{props.data.rocket_name}</h2>
          <span
            class={
              props.data.active
                ? "badge rounded-pill bg-success ml-2 mb-2"
                : "badge rounded-pill bg-danger  ml-2 mb-2"
            }
          >
            {props.data.active ? "Success" : "Failed"}
          </span>
          <br></br>
        </div>
        <Link to="/info-ro">
          <button type="button" class="btn btn-info">
            see more
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [aRocket, setRocket] = useState([]);
  useEffect(() => {
    const fetchLaunch = async () => {
      const res = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await res.json();
      console.log(data);
      setRocket(data);
    };
    fetchLaunch();
  }, []);

  return (
    <>
      {aRocket.length >= 1 && (
        <>
          <br></br>
          <div class="row">
            <div class="col-sm-6">
              <Rocket data={aRocket[0]}></Rocket>
            </div>
            <div class="col-sm-6">
              <Rocket data={aRocket[1]}></Rocket>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-sm-6">
              <Rocket data={aRocket[2]}></Rocket>
            </div>
            <div class="col-sm-6">
              <Rocket data={aRocket[3]}></Rocket>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
