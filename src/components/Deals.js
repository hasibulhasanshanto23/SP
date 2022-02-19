import React, { useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import timer from "../images/timer mono.png";
import thunder from "../images/Path 12121.png";
import discountMono from "../images/discount-mono.png";
import currency from "../images/currency.png";

const Deals = () => {
  let sliderRef = useRef(null);
  let imgArr = [img1, img2, img3, img4, img5, img6];

  // useEffect(()=>{
  //   console.log(sliderRef.current);
  // })

  var settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    swipe: true,
    swipeToSlide: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 1247,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
          speed: 300,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="location-slider-section section-padding" style={{marginTop:'60px'}}>
      <Container>
        <div className="section-title d-flex align-items-end justify-content-between">
          <div className="title-left st-animate">
            <h2 className="fw-500">Packages Lightning Deals</h2>
          </div>
          <div className="arrows lighting-deals-arrows d-none d-sm-flex align-items-center justify-content-center">
            <div
              className="arrow-prev"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <i className="fas fa-arrow-left"></i>
            </div>
            <div onClick={() => sliderRef.current.slickNext()}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="section-content mt-4">
          <Slider
            ref={sliderRef}
            {...settings}
            className="row st-location-slider ff2"
          >
            {imgArr.map((img, index) => {
              return (
                <div className="package-item cursor-pointer" key={index}>
                  <div className="image-area">
                    <div className="image">
                      <img className="slide-img" src={img} alt="img2" />
                    </div>
                    <div className="taglines d-flex  align-items-center justify-content-between">
                      <div className="timer d-flex align-items-center  fontz primary-tag">
                        <img
                          src={timer}
                          className="icon mr-2 mt--1"
                          alt="timer"
                        />
                        <span style={{ marginLeft: "5px" }}>12:14:34:27</span>
                      </div>

                      <div className="tag d-flex align-items-center fontz primary-tag">
                        <img src={thunder} alt="thunder" />
                        <span style={{ marginLeft: "12px" }}>Trending</span>
                      </div>
                    </div>
                  </div>
                  <h6 className="title fw-400 black-color">
                    Uniquely Singapore, Amazing Thailand With Indonesia…
                  </h6>
                  <div className="tour-info d-flex align-items-center justify-content-start">
                    <div
                      style={{ marginRight: "8px" }}
                      className="duration d-flex align-items-center mr-2 text-nowrap"
                    >
                      <i
                        className="mdi mdi-calendar mr-2"
                        style={{ marginRight: "5px" }}
                      ></i>
                      <div style={{ fontSize: "12px", marginBottom: "2px" }}>
                        3 days
                      </div>
                    </div>
                    <div className="loacation d-flex align-items-center">
                      <i
                        className="mdi mdi-map-marker mr-1"
                        style={{ marginRight: "5px" }}
                      ></i>
                      <div
                        style={{ fontSize: "12px", marginBottom: "2px" }}
                        className="text-ellipsis"
                      >
                        Singapore, Singapore…
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "12px", lineHeight: "14px" }}>
                    Starts from ( with Airfare)
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <span
                      style={{ marginRight: "3px" }}
                      className="text-red mr-2 d-flex align-items-center"
                    >
                      <img
                        className="mr-2"
                        style={{ marginRight: "3px" }}
                        src={discountMono}
                      />
                      <span style={{ fontSize: "10px", color: "#FF5A00" }}>
                        30%
                      </span>
                    </span>
                    <span className="line-through mr-2">60,800</span>
                    <span
                      style={{
                        color: "#1F1F1F",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                      className="fz16 fw-600"
                    >
                      BDT 48,000 /
                      <small
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#000",
                        }}
                      >
                        person
                      </small>
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-1 black-color">
                    <img
                      style={{
                        marginRight: "10px",
                        width: "18px",
                        height: "16px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={currency}
                      className="icon mr-2 mt--1"
                    />
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      4800
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <div style={{cursor:'pointer'}} className="d-flex align-items-center" >
            <div>
              <span style={{color:'#1882FF',fontWeight:'500'}}>Show All Offers</span>
            </div>
            <div style={{marginTop:'4px',marginLeft:'10px'}}>
              <i style={{color:'#1882FF'}} className="mdi mdi-chevron-right"></i>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Deals;
