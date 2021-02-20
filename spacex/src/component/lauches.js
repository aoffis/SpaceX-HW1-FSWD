import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
function Lauches() {
  const [launch, setLaunch] = useState([]);

  useEffect(() => {
    const fetchLaunch = async () => {
      const res = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await res.json();

      console.log(data);
      setLaunch(data);
    };
    fetchLaunch();
  }, []);
  return launch.map((launch) => (
    <div class="col">
      <div class="card" style={{ width: "18rem" }}>
        <img src={launch.links.mission_patch} class="card-img-top"></img>
        <div class="card-body">
          <h5 key="launch.flight_number" class="card-title">
            {launch.mission_name}
          </h5>
          <span
            class={
              launch.launch_success ? "badge bg-success" : "badge bg-danger"
            }
          >
            {launch.launch_success ? "Success" : "Fail"}
          </span>
          <p class="card-text">
            {launch.launch_year}
            <br></br>
            {launch.launch_date_local}
          </p>

          <a onclick={launch.details} class="btn btn-primary">
            See more
          </a>
        </div>
      </div>
    </div>
  ));
}

function launch() {
  return (
    <div class="row">
      <Lauches></Lauches>
    </div>
  );
}

export default launch;
