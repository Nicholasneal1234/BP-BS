import React from 'react';
import { au } from './firebase';
import * as styled from './style';
import { Link, Redirect } from 'react-router-dom';

function Register(){
    const accountRef=React.useRef();
    const passwordRef=React.useRef();
    const [register, setRegister]=React.useState(false);

    function handleClick(account, password){
        try{
            au.createUserWithEmailAndPassword(account, password)
            .then(()=>{
                setRegister(true);
            })
        }
        catch{
            alert("輸入格式有誤")
        }
    }

    return(
        <React.Fragment>
            {register?<Redirect to="/login"></Redirect>:
                <div style={{marginTop:"50px", display:"flex", flexDirection:"column"}}>
                    <label style={{display:"block", textAlign:"center", fontSize:"30px"}}>帳號</label>
                    <input type="email" style={{display:"block", margin:"auto", top:"0", bottom:"0", width:"20%", height:"20px"}} 
                    ref={accountRef}></input>
                    <label style={{display:"block", textAlign:"center", fontSize:"30px"}}>密碼</label>
                    <input type="password"style={{display:"block", margin:"auto", top:"0", bottom:"0", width:"20%", height:"20px"}} 
                    ref={passwordRef}></input>
                    <styled.LoginButton onClick={()=>{handleClick(accountRef.current.value, passwordRef.current.value)}}>註冊</styled.LoginButton>
                    <Link to="/login"><div style={{textAlign:"center"}}>前往登入頁面</div></Link>
                </div>
            }
        </React.Fragment>
    )
}

export default Register;