import React, { useRef } from "react";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import calender from "../images/calendar-mono.png";
import location from "../images/location.png";

const PackageDeals = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  return (
    <Container style={{ marginTop: "50px" }}>
      <div className="heading-icon">
        <div>
          <h2 style={{ fontSize: "40px" }}>Packages Lighting Deals</h2>
        </div>
        <div style={{ marginRight: "8px" }}>
          <span
            style={{ padding: "0 8px 0 0" }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <i
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
              className="fas fa-arrow-left"
            ></i>
          </span>
          <span
            style={{ padding: "0 0 0 18px" }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <i
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
              className="fas fa-arrow-right"
            ></i>
          </span>
        </div>
      </div>
      <div className="slider-main">
        <Slider ref={sliderRef} slidesToShow={4} slidesToScroll={4}>
          <div className="single-slide">
            <div className="container">
              <img src={img3} alt="img3" />
              <div className="time-div"></div>
            </div>
            <h5
              style={{
                marginTop: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Uniquely Singapore, Amazing Thailand With Indonesia…
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
                color: "#4c4c4c",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span>
                  <i
                    class="far fa-calendar-check"
                    style={{ fontSize: "16px", color: "#4c4c4c" }}
                  ></i>
                </span>
                <p
                  style={{
                    lineHeight: "20px",
                    marginLeft: "5px",
                    fontSize: "13px",
                  }}
                >
                  3 Day
                </p>

                <span>
                  <i
                    class="fas fa-map-marker-alt"
                    style={{
                      fontSize: "16px",
                      color: "#4c4c4c",
                      marginLeft: "10px",
                    }}
                  ></i>
                </span>
                <p
                  style={{
                    lineHeight: "17px",
                    marginLeft: "5px",
                    fontSize: "13px",
                  }}
                >
                  Singapore, Singapore…
                </p>
              </div>
            </div>
          </div>

          <div className="single-slide">
            <div className="container">
              <img src={img2} alt="img2" />
              <div className="time-div"></div>
            </div>
            <h5
              style={{
                marginTop: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Uniquely Singapore, Amazing Thailand With Indonesia…
            </h5>
          </div>

          <div>
            <div className="container">
              <img src={img4} alt="img4" />
              <div className="time-div"></div>
            </div>
            <h5
              style={{
                marginTop: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Uniquely Singapore, Amazing Thailand With Indonesia…
            </h5>
          </div>

          <div className="single-slide">
            <div className="container">
              <img src={img1} alt="img1" />
              <div className="time-div"></div>
            </div>
            <h5
              style={{
                marginTop: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Uniquely Singapore, Amazing Thailand With Indonesia…
            </h5>
          </div>

          <div className="single-slide">
            <div className="container">
              <img src={img5} alt="img5" />
              <div className="time-div"></div>
            </div>
            <h5
              style={{
                marginTop: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Uniquely Singapore, Amazing Thailand With Indonesia…
            </h5>
          </div>

          <div className="single-slide">
            <div className="container">
              <img src={img6} alt="img6" />
              <div className="time-div"></div>
            </div>
            <h5
              style={{
                marginTop: "16px",
                lineHeight: "24px",
                fontWeight: "600",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Uniquely Singapore, Amazing Thailand With Indonesia…
            </h5>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default PackageDeals;
