import React from 'react';
import * as styled from './style';
import CurrentWeather from './currentWeather';
import FutureWeather from './futureWeather';

function Home(){

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <img src="https://picsum.photos/250?random=1&grayscale" style={{width:"20%", height:"250px", padding:"0px"}}></img>
                    <img src="https://picsum.photos/250?random=2&grayscale" style={{width:"20%", height:"250px", padding:"0px"}}></img>
                    <img src="https://picsum.photos/250?random=3&grayscale" style={{width:"20%", height:"250px", padding:"0px"}}></img>
                    <img src="https://picsum.photos/250?random=4&grayscale" style={{width:"20%", height:"250px", padding:"0px"}}></img>
                    <img src="https://picsum.photos/250?random=5&grayscale" style={{width:"20%", height:"250px", padding:"0px"}}></img>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <CurrentWeather></CurrentWeather>
                        <hr></hr>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <FutureWeather></FutureWeather>
                        <hr></hr>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2" style={{marginTop:"50px"}}>
                        <ul>
                            <li><a href="https://www.cdc.gov.tw/" style={{lineHeight:"50px", color:"black"}}>衛生福利部疾病管制署</a></li>
                            <li><a href="https://www.mohw.gov.tw/mp-1.html" style={{lineHeight:"50px", color:"black"}}>衛生福利部</a></li>
                            <li><a href="https://www.hosp.ncku.edu.tw/nckm/" style={{lineHeight:"50px", color:"black"}}>成大醫院</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;