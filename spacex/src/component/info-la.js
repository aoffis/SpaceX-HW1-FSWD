import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Link } from "react-router-dom";

function InfoLaunch() {
  const [eLaunch, setLaunch] = useState([]);
  const [loaded, setLoad] = useState(false);
  let { Id } = useParams();
  useEffect(() => {
    const fetchLaunch = async () => {
      const res = await fetch(`https://api.spacexdata.com/v3/launches/${Id}`);
      const data = await res.json();
      console.log(data);
      setLaunch(data);
      setLoad(true);
    };
    fetchLaunch();
  }, []);
  return (
    <>
      {loaded && (
        <>
          <div class="row mt-4">
            <div class="col-sm-3"></div>
            <div class="col-sm-1.5" >
              <Link to="/lauches">
                <button type="button" class="btn btn-light border-secondary bg-black text-light m-2"
                >
                  {" "}
                  {"<"} Back{" "}
                </button>
              </Link>
            </div>
            <div class="col-sm-4">
              <div class="card card border-secondary text-light bg-black mb-3">
                <div class="card-body">
                  <img
                    src={eLaunch.links.mission_patch}
                    class="card-img-top center"
                    style={{ width: "100%",maxWidth:"300px"}}
                  ></img>
                  <h2 class="card-title mt-2">{eLaunch.mission_name}</h2>
                  <h6
                    class={
                      eLaunch.launch_success
                        ? "badge rounded-pill bg-success"
                        : "badge rounded-pill bg-danger "
                    }
                  >
                    {eLaunch.active ? "Success" : "Failed"}
                  </h6>
                  <p class="card-text mt-2">Year : {eLaunch.launch_year}</p>
                  <span class="card-text">
                    Rocket :
                    <Link to={`/info-ro/${eLaunch.rocket.rocket_id}`}>
                      <button type="button" class="btn btn-link">
                        {eLaunch.rocket.rocket_name}
                      </button>
                    </Link>
                  </span>
                  <p class="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {eLaunch.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default InfoLaunch;
