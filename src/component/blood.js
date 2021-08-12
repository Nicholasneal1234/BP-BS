import React from 'react';
import fb from './firebase';
import { AuthState } from './auth';
import * as styled from './style';
import { Redirect } from 'react-router';

export function regExp(value){
    return new RegExp(value,'g');
}

function BloodInput(){

    const bpRef=React.useRef();
    const [bp, setBp]=React.useState("");
    const bsRef=React.useRef();
    const [bs,setBs]=React.useState("");
    const yearRef=React.useRef();
    const [year, setYear]=React.useState("");
    const monthRef=React.useRef();
    const [month, setMonth]=React.useState("");
    const dateRef=React.useRef();
    const [date, setDate]=React.useState("");
    const user=React.useContext(AuthState).uid;
    const login=React.useContext(AuthState).login;
    const [data, setData]=React.useState([]);
    const [matchData, setMatchData]=React.useState();
    const [search, setSearch]=React.useState();
    const searchRef=React.useRef();
    console.log(data);
    console.log(matchData)

    React.useEffect(()=>{
        if(user){
            fb.firestore().collection("user").doc("data").collection(user).get()
            .then((docs)=>{
                const d=[]
                docs.forEach((doc)=>{
                    d.push(doc.data());
                })
                setData(d);
            })
        }
        
    },[user])

    function handleClick(years, months, dates, bps, bss){
        const id=year+month+date+bps+bss;

        fb.firestore().collection("user").doc("data").collection(user).doc(id)
        .set({
            year:years,
            month:months,
            date:dates,
            bp:bps,
            bs:bss
        })
        .then(()=>{
            
            yearRef.current.value="";
            monthRef.current.value="";
            dateRef.current.value="";
            bpRef.current.value="";
            bsRef.current.value="";

        })
    }

    function matchItem(value){
        console.log(value);
        if(!value){
            value=-1;
        }
        const li=data.filter((item)=>{
            return item.year.match(regExp(value))||item.month.match(regExp(value))||item.date.match(regExp(value))
        })
        setMatchData(li);
    }

    return(
        login?
        <React.Fragment>
            <div style={{display:"flex", justifyContent:"center", margin:"0px", padding:"0px"}} className="container">
                <div className="row" style={{margin:"0px", padding:"0px"}}>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div style={{display:"flex", justifyContent:"flex-start"}}>
                            <label style={{height:"20px", fontSize:"20px", margin:"6px"}}>年:</label>
                            <input type="text" style={{height:"25px", width:"30%", margin:"10px"}} value={year} placeholder="EX:1995" ref={yearRef} onChange={(e)=>{setYear(e.target.value)}}></input>
                            <label style={{height:"20px", fontSize:"20px", margin:"6px"}}>月:</label>
                            <input type="text" style={{height:"25px", width:"20%", margin:"10px"}} placeholder="EX:06" ref={monthRef} onChange={(e)=>{setMonth(e.target.value)}}></input>
                            <label style={{height:"20px", fontSize:"20px", margin:"6px"}}>日:</label>
                            <input type="text" style={{height:"25px", width:"20%", margin:"10px"}} placeholder="EX:30" ref={dateRef} onChange={(e)=>{setDate(e.target.value)}}></input>
                        </div>
                        <label style={{display:"block", lineHeight:"45px", fontSize:"30px", marginTop:"10px", textAlign:"center"}}>請輸入血壓</label>
                        <input type="text" style={{margin:"auto", top:"0", bottom:"0px", height:"30px", width:"100%", boxSizing:"border-box"}} ref={bpRef} onChange={(e)=>{setBp(e.target.value)}}></input>
                        <label style={{display:"block", lineHeight:"45px", fontSize:"30px", textAlign:"center"}}>請輸入血糖</label>
                        <input type="text" style={{margin:"auto", top:"0", bottom:"0px", height:"30px", width:"100%", boxSizing:"border-box"}} ref={bsRef} onChange={(e)=>{setBs(e.target.value)}}></input>
                        <styled.ConfirmButton onClick={()=>{handleClick(yearRef.current.value, monthRef.current.value, dateRef.current.value, bpRef.current.value, bsRef.current.value)}}>確認</styled.ConfirmButton>
                        <hr></hr>
                        <label style={{display:"block", lineHeight:"45px", fontSize:"30px", margin:"auto", top:"0px", bottom:"0px", textAlign:"center"}}>輸入日期查詢紀錄</label>
                        <input type="text" style={{margin:"auto", marginTop:"10px", top:"0", left:"0", height:"30px", width:"100%", boxSizing:"border-box"}} placeholder="查詢日期" ref={searchRef} onChange={(e)=>{
                            matchItem(e.target.value);
                            setSearch(e.target.value);
                            }}>
                        </input>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <styled.Ul>
                            {
                                matchData?matchData.map((item, index)=>{
                                    return <li key={index} style={{margin:"10px"}}>{item.year}, {item.month}, {item.date}, 血壓{item.bp}, 血糖{item.bs}</li>
                                })
                                :data.map((item, index)=>{
                                    return <li key={index} style={{margin:"10px"}}>{item.year}, {item.month}, {item.date}, 血壓{item.bp}, 血糖{item.bs}</li>
                                })
                            }
                        </styled.Ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
        :<Redirect to="/login"></Redirect>
    )
}

export default BloodInput;