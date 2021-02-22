import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Rocket(props) {
  return (
    <div class="card bg-black border-secondary">
      <img
        src={props.data.flickr_images}
        class="card-img"
        alt="rocket"
        style={{ height: "42vh", objectFit: "cover" }}
      ></img>
      <div class="card-img-overlay">
        <div style={{ display: "absolute",paddingTop: "45%"}}>
          <h2 class="card-title d-inline text-light">{props.data.rocket_name}</h2>
          <span
            class={
              props.data.active
                ? "badge rounded-pill bg-success text-white ml-2 mb-2"
                : "badge rounded-pill bg-secondary text-white ml-2 mb-2"
            }
          >
            {props.data.active ? "Active" : "Inactive"}
          </span>
          <br></br>
        </div>
        <Link
          to={{
            pathname: `/info-ro/${props.data.rocket_id}`,
          }}
        >
          <button type="button" class="btn btn-light border-secondary bg-black text-light">
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
    <><div class="container">
      {aRocket.length >= 1 && (
        <>
          <div class="row">
            <div class="col-sm-6 mt-3">
              <Rocket data={aRocket[0]}></Rocket>
            </div>
            
            <div class="col-sm-6 mt-3">
              <Rocket data={aRocket[1]}></Rocket>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 mt-3">
              <Rocket data={aRocket[2]}></Rocket>
            </div>
            <div class="col-sm-6 mt-3">
              <Rocket data={aRocket[3]}></Rocket>
            </div>
            <br></br>
          </div>
        </>
      )}</div>
    </>
  );
}

export default App;
