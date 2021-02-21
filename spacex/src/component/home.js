import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
function app() {
  return (
    <>
      <div
        id="carousel-example-generic"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class="pic1">
              <div class="carousel-caption">
                <h3>This is the first slide.</h3>
                <p>
                  You can add whatever you want. Even buttons (you will see them
                  in the second slide)
                </p>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="pic2">
              <div class="carousel-caption">
                <h1>Headings can be of any size.</h1>
                <p>
                  We added a button to link to another website. But, again, it
                  is up to you. The third slide does not contain any information
                  (but you can add it)
                </p>
                <Link to="/info">
                  <button type="button" class="btn btn-info">
                    Click for more information
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="pic3">
              <div class="carousel-caption"></div>
            </div>
          </div>
        </div>

        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
export default app;
