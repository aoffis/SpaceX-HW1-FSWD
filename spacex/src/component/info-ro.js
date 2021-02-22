import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Link } from "react-router-dom";

function InfoRocket() {
  const [eRocket, setRocket] = useState([]);
  const [loaded, setLoad] = useState(false);
  let { rocketId } = useParams();
  useEffect(() => {
    const fetchLaunch = async () => {
      const res = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocketId}`
      );
      const data = await res.json();
      console.log(data);
      setRocket(data);
      setLoad(true);
    };
    fetchLaunch();
  }, []);
  return (
    <>
      {loaded && (
        <><div class="container">
          
          <div class="row mt-4">
            <div class="col-sm-1"></div>
            <div class="col-sm-1.5" >
              <Link to="/rocket">
                <button type="button" class="btn btn-light border-secondary bg-black text-light m-2"
                >
                  {" "}
                  {"<"} Back{" "}
                </button>
              </Link>
            </div>
            <div class="col-sm-8">
              <div class="card border-secondary text-light bg-black mb-3">
                <div class="card-body">
                  <img
                    src={eRocket.flickr_images}
                    class="card-img-top"
                    style={{ height: "25vw", objectFit: "cover" }}
                  ></img>
                  <h2 class="card-title mt-4">{eRocket.rocket_name}</h2>
                  <h6
                    class={
                      eRocket.active
                        ? "badge rounded-pill bg-success"
                        : "badge rounded-pill bg-secondary text-white "
                    }
                  >
                    {eRocket.active ? "Active" : "Inactive"}
                  </h6>
                  <p class="card-text">
                    Success Rate : {eRocket.success_rate_pct}%
                  </p>
                  <p class="card-text">First Flight : {eRocket.first_flight}</p>
                  <p class="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {eRocket.description}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>
          </div>
        </>
      )}
    </>
  );
}
export default InfoRocket;
