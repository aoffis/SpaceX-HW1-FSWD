import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRouteMatch } from "react";
import { Link } from "react-router-dom";

function Lauches() {
  const [launch, setLaunch] = useState([]);
  const [year, setYear] = useState("");
  const [rocketName, setRocketName] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  useEffect(() => {
    const fetchLaunch = async () => {
      const res = await fetch(
        "https://api.spacexdata.com/v3/launches?limit=200&launch_year=" +
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
        <div class="col-sm-4">
          <div class="card card border-secondary text-light bg-black mb-3" style={{ height: "40vh"}}>
            <img src={launch.links.mission_patch} class="card-img-top mt-2 center"
              style={{ maxWidth: "20vh" ,width:"100%" }}></img>
            <div class="card-body" style={{ position: "absolute",top: "55%"}}>
              <h5 key="launch.flight_number" class="card-title d-inline">
                {launch.mission_name}
                <span
                  class={
                    launch.launch_success
                      ? "badge bg-success text-light ml-2"
                      : "badge bg-danger text-light ml-2"
                  }
                >
                  {launch.launch_success ? "Success" : "Fail"}
                </span>
              </h5>
              <p class="card-text"></p>
              <Link
                to={{
                  pathname: `/info-la/${launch.flight_number}`,
                }}
              >
                <button class="btn btn-primary">See more</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <><div class="container">
      <h1 class="text-light mt-4">Launches</h1>
      <div class="row">
        <div class="col-sm-2">
          <select class="form-control mt-1"
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
            <option value="2020">2020</option>
          </select></div>
        <div class="col-sm-3">
          <select class="form-control mt-1"
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
          </select></div>
        <div class="col-sm-3">
          <select class="form-control mt-1"
            onChange={(e) => {
              setLaunchSuccess(e.target.value);
            }}
            value={launchSuccess}
          >
            <option value="" selected disabled hidden>
              Select Launch Success
        </option>

            <option value="true">Success</option>
            <option value="false">Fail</option>
          </select></div>
      </div>
      <hr class="bg-white"></hr>
      <div class="row">{launchItems}</div>
      <div class="mb-4"></div>
    </div>
    </>
  );
}

export default Lauches;
