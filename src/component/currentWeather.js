import React from 'react';

function CurrentWeather(){

    const[country, setCountry] = React.useState("");//res.sys.country
    const[temp, setTemp] = React.useState();//res.main.temp
    const[feelTemp, setFeelTemp] = React.useState();//res.main.feels_like
    const[weatherIcon, setWeatherIcon] = React.useState("");//res.weather[0].icon
    const[description, setDescription] = React.useState("");//res.weather[0].description
    const inputRef=React.useRef();
    const[imgUrl, setImgUrl] = React.useState("");

    React.useEffect(()=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=tainan&appid=6625c26be6cd2ababbf5c28da79850a6&lang=zh_tw&units=metric')
        .then((res)=>{
            const data = res.json();
            data.then((res)=>{
                console.log(res)
                setCountry(res.sys.country);
                setTemp(res.main.temp);
                setFeelTemp(res.main.feels_like);
                setWeatherIcon(res.weather[0].icon);
                setDescription(res.weather[0].description);
            })
        })
        .catch((err)=>{
            alert(err);
        })
    },[])

    React.useEffect(()=>{
        setImgUrl("http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png");
    },[weatherIcon])

    function handleClick(value){
        if(!value){
            return
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=6625c26be6cd2ababbf5c28da79850a6&lang=zh_tw&units=metric`)
        .then((res)=>{
            const data = res.json();
            data.then((res)=>{
                setCountry(res.sys.country);
                setTemp(res.main.temp);
                setFeelTemp(res.main.feels_like);
                setWeatherIcon(res.weather[0].icon);
                setDescription(res.weather[0].description);
            })
        })
        .catch(()=>{
            alert("連線失敗");
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12" style={{display:"flex", justifyContent:"center"}}>
                    <input type="text" style={{height:"40%", width:"70%", marginTop:"50px"}} placeholder="請輸入城市或國家(英文的)/目前的天氣狀況" ref={inputRef}></input>
                    <button style={{height:"40%", width:"20%", marginTop:"50px", marginLeft:"10px"}} onClick={()=>{handleClick(inputRef.current.value)}}>確認</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12" style={{marginTop:"50px"}}>
                    <h1 style={{textAlign:"center", margin:"0px"}}>國家: {country}</h1>
                    <h1 style={{textAlign:"center", margin:"0px"}}>溫度: {temp}/體感溫度: {feelTemp}</h1>
                    <h1 style={{textAlign:"center", margin:"0px"}}>{description}</h1>
                    <div style={{textAlign:"center"}}>
                        <img src={imgUrl} style={{width:"50%"}}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;