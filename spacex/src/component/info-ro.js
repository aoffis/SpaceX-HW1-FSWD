import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function InfoRocket() {
    const [eRocket, setRocket] = useState([]);
    const [loaded, setLoad] = useState(false);
    useEffect(() => {
        const fetchLaunch = async () => {
            const res = await fetch("https://api.spacexdata.com/v3/rockets/falcon9");
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
            <>
            <div class="row">
                <div class="col-sm">
                    <button type="button" class="btn btn-light m-4"> Back </button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="card text-white bg-black mb-3">
                        <div class="card-body">
                            <h2 class="card-title">{eRocket.rocket_name}</h2>
                            <h6 class={eRocket.active
                                    ? "badge rounded-pill bg-success"
                                    : "badge rounded-pill bg-secondary "}>
                                    {eRocket.active ? "Active" : "Inactive"}</h6>
                            <p class="card-text">Success Rate : {eRocket.success_rate_pct}%</p>
                            <p class="card-text">First Flight : {eRocket.first_flight}</p>
                            <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {eRocket.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-3">
                    <br></br>
                    <img src={eRocket.flickr_images[0]}
                        class="card-img"
                        alt="rocket"
                        style={{ height: "30vh", objectFit: "cover" }}></img>
                </div>
                <div class="col-sm-3">
                <br></br>
                    <img src={eRocket.flickr_images[1]}
                        class="card-img"
                        alt="rocket"
                        style={{ height: "30vh", objectFit: "cover" }}></img>
                </div>
                <div class="col-sm-3"><br></br></div>
            </div>
            </>)}
        </>
    );
}
export default InfoRocket