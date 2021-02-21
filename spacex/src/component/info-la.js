import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function InfoLaunch() {
    const [eLaunch, setLaunch] = useState([]);
    const [loaded, setLoad] = useState(false);
    useEffect(() => {
        const fetchLaunch = async () => {
            const res = await fetch("https://api.spacexdata.com/v3/launches/1");
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
            <div class="row">
                <div class="col-sm">
                    <button type="button" class="btn btn-light m-4"> Back </button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-4">
                    <div class="card text-white bg-black mb-3">
                        <div class="card-body">
                            <h2 class="card-title">{eLaunch.mission_name}</h2>
                            <h6 class={eLaunch.launch_success
                                    ? "badge rounded-pill bg-success"
                                    : "badge rounded-pill bg-danger "}>
                                    {eLaunch.active ? "Success" : "Failed"}</h6>
                            <p class="card-text mt-3">Year : {eLaunch.launch_year}</p>
                            <p class="card-text">Rocket : {eLaunch.rocket.rocket_name}</p>
                            <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {eLaunch.details}</p>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            </>)}
        </>
    );
}
export default InfoLaunch