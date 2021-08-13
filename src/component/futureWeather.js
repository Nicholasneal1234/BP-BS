import React from 'react';

function FutureWeather(){

    const [data, setData]=React.useState([]);
    const [icon, setIcon]=React.useState([]);
    const [img, setImg]=React.useState([]);
    const [country, setCountry]=React.useState("目前沒有資料");
    const [city, setCity]=React.useState("目前沒有資料");
    const [population, setPopulation]=React.useState("目前沒有資料");
    const inputRef=React.useRef();

    React.useEffect(()=>{
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=tainan&appid=6625c26be6cd2ababbf5c28da79850a6&lang=zh_tw&cnt=5&units=metric")
        .then((res)=>{
            const data = res.json();
            data.then((res)=>{
                console.log(res);
                setCountry(res.city.country);
                setCity(res.city.name);
                setPopulation(res.city.population);
                setData(res.list);
            })
        })
        .catch(()=>{
            alert("連線失敗");
        })
    },[])

    React.useEffect(()=>{
        console.log(data)
        const i=[];
        data.forEach((item)=>{
            i.push(item.weather[0].icon);
        })
        setIcon(i);
    },[data])

    React.useEffect(()=>{
        const imgSrc=icon.map((item, index)=>{
            return `http://openweathermap.org/img/wn/${item}@2x.png`
        })

        setImg(imgSrc);
    },[icon])

    function handleClick(value){
        if(!value){
            return
        }
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=6625c26be6cd2ababbf5c28da79850a6&lang=zh_tw&cnt=5&units=metric`)
        .then((res)=>{
            const data = res.json();
            data.then((res)=>{
                setCountry(res.city.country);
                setCity(res.city.name);
                setPopulation(res.city.population);
                setData(res.list);
            })
        })
        .catch(()=>{
            alert("連線失敗");
        })
    }

    return(
        <React.Fragment>
            <div className="container" style={{padding:"0px"}}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12" style={{display:"flex", justifyContent:"center"}}>
                        <input type="text" style={{height:"40%", width:"70%", marginTop:"50px"}} placeholder="請輸入城市或國家(英文的)/未來12小時的天氣狀況" ref={inputRef}></input>
                        <button style={{height:"40%", width:"20%", marginTop:"50px", marginLeft:"10px"}} onClick={()=>{handleClick(inputRef.current.value)}}>確認</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12" style={{display:"flex", justifyContent:"center", marginTop:"50px"}}>
                        <h1>國家: {country}/城市: {city}<br/>人口: {population}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12" style={{marginTop:"50px", padding:"0px"}}>
                        <table style={{border:"3px black solid"}} border="1">
                        <tr>
                            {
                                data?
                                data.map((item)=>{
                                    return <th key={item.dt_txt} style={{backgroundColor:"black", color:"white", fontSize:"20px"}}>{item.dt_txt}</th>
                                })
                                :0
                            }
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            {
                                data?
                                data.map((item, index)=>{
                                    return index%2===1?<td key={item.dt_txt} style={{backgroundColor:"gray", color:"white", fontSize:"18px"}}>溫度: {item.main.temp}<br/>體感溫度:{item.main.feels_like}</td>:<td style={{fontSize:"18px"}} key={item.dt_txt}>溫度: {item.main.temp}<br/>體感溫度:{item.main.feels_like}</td>
                                })
                                :0
                            }
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            {
                                data?
                                data.map((item, index)=>{
                                    return index%2===0?<td key={item.dt_txt} style={{backgroundColor:"gray", color:"white", fontSize:"18px"}}>濕度: {item.main.humidity}%</td>:<td style={{fontSize:"18px"}} key={item.dt_txt}>濕度: {item.main.humidity}%</td>
                                })
                                :0
                            }
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            {
                                data?
                                data.map((item, index)=>{
                                    return index%2===1?<td key={item.dt_txt} style={{backgroundColor:"gray", color:"white", fontSize:"18px"}}>{item.weather[0].description}</td>:<td style={{fontSize:"18px"}} key={item.dt_txt}>{item.weather[0].description}</td>
                                })
                                :0
                            }
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            {
                                img?
                                img.map((item, index)=>{
                                    return index%2===0?<td key={item.dt_txt} style={{backgroundColor:"gray", color:"white", padding:"0px"}}><img src={item} style={{width:"100%"}}></img></td>:<td style={{backgroundColor:"wheat"}} key={item.dt_txt}><img src={item} style={{width:"50%"}}></img></td>
                                })
                                :0
                            }
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FutureWeather;