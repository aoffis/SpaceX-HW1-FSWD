import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
function InfoLauch() {
  let { Id } = useParams();
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    const FetchLaunch = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${Id}`
      );
      const data = await response.json();
      setLaunch(data);
      console.log(data);
    };
    FetchLaunch();
  });
  return (
    <>
      <div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}
export default InfoLauch;
