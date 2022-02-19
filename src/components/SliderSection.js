import React, { useEffect,useRef } from "react";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import discount from '../images/discount.jpg'
import domestic from '../images/domestic.png'
import makka from '../images/makka.jpg'


const SliderSection = () => {

  let settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:2}} style={{margin:'0 auto'}}>
       <Grid item xs={12} sm={6} md={4} >
           <div className="slider-shadow">
           <Slider {...settings}>
             <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={discount} alt="discount"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              
              </div>
            </div>


            <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={domestic} alt="domestic"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              </div>
            </div>

            <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={makka} alt="makka"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              </div>
            </div>


            </Slider>
           </div>
        </Grid>

        

        <Grid item xs={12} sm={6} md={4}>
           <div className="slider-shadow">
           <Slider {...settings}>
             <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={discount} alt="discount"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              
              </div>
            </div>


            <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={domestic} alt="domestic"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              </div>
            </div>

            <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={makka} alt="makka"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              </div>
            </div>


            </Slider>
           </div>
        </Grid>



        <Grid item xs={12} sm={6} md={4}>
           <div className="slider-shadow">
           <Slider {...settings}>
             <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={discount} alt="discount"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              
              </div>
            </div>


            <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={domestic} alt="domestic"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              </div>
            </div>

            <div className="slide-div d-flex align-items-center ">
              <div className="img-div">
                <img className="slide-img2" src={makka} alt="makka"/>
              </div>
            
              <div style={{padding:'0 48px 0 24px',position:'relative'}}>
                <p style={{fontSize:'14px',margin:'0 0 4px'}}>All over Bangladesh at the best rates</p>
                 <h3 style={{fontSize:'20px',lineHeight:'25px'}}>Fly with Biman Bangladesh Airlines</h3>
              </div>
            </div>


            </Slider>
           </div>
        </Grid>


      </Grid>
    </Container>
  );
};

export default SliderSection;
