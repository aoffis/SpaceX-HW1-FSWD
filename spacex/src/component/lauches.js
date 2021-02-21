import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Lauches() {
  const [launch, setLaunch] = useState([]);
  const [year, setYear] = useState("");
  const [rocketName, setRocketName] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  useEffect(() => {
    const fetchLaunch = async () => {
      const res = await fetch(
        "https://api.spacexdata.com/v3/launches?limit=100&launch_year=" +
          year +
          "&rocket_id=" +
          rocketName +
          "&launch_success=" +
          launchSuccess
      );
      const data = await res.json();
      console.log(data);
      setLaunch(data);
    };
    fetchLaunch();
  }, [year, rocketName, launchSuccess]);
  console.log(rocketName);
  const launchItems = launch.map((launch) => {
    return (
      <>
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={launch.links.mission_patch} class="card-img-top"></img>
            <div class="card-body">
              <h5 key="launch.flight_number" class="card-title">
                {launch.mission_name}
              </h5>
              <span
                class={
                  launch.launch_success
                    ? "badge bg-success"
                    : "badge bg-danger "
                }
              >
                {launch.launch_success ? "Success" : "Fail"}
              </span>
              <p class="card-text">
                {launch.launch_year}
                <br></br>
                {launch.launch_date_local}
              </p>
              <Link to="/info-l">
                <a class="btn btn-primary">See more</a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <h1>Launches</h1>
      <select
        onChange={(e) => {
          setYear(e.target.value);
        }}
        value={year}
      >
        <option value="" selected disabled hidden>
          Select Year
        </option>
        <option value="2006">2007</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
      </select>
      <select
        onChange={(e) => {
          setRocketName(e.target.value);
        }}
        value={rocketName}
      >
        <option value="" selected disabled hidden>
          Select Rocket Name
        </option>

        <option value="falcon1">Falcon 1</option>
        <option value="falcon9">Falcon 9</option>
        <option value="falconheavy">Falcon Heavy</option>
        <option value="starship">Starship</option>
      </select>
      <select
        onChange={(e) => {
          setLaunchSuccess(e.target.value);
        }}
        value={launchSuccess}
      >
        <option value="" selected disabled hidden>
          Select Launch Success
        </option>

        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <div class="row">{launchItems}</div>
    </>
  );
}

export default Lauches;
