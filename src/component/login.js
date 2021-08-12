import React from 'react';
import { au } from './firebase';
import * as styled from './style';
import { Link, Redirect } from 'react-router-dom';
import { AuthState } from './auth';

function Login(){

    const accountRef=React.useRef();
    const passwordRef=React.useRef();
    const [account, setAccount]=React.useState();
    const [password, setPassword]=React.useState();
    const [login, setLogin]=React.useState(false);
    const user=localStorage.getItem("login")
    console.log(login)

    function handleClick(account, password){
        try{
            au.signInWithEmailAndPassword(account, password)
            .then(()=>{
                const user=au.currentUser;
                user?setLogin(true):setLogin(false)
            })
        }catch{
            alert("帳號或密碼有誤")
        }
        
    }

    React.useEffect(()=>{
        console.log(user)
        setLogin(user);
    },[user])


    return(
        <React.Fragment>
            {login?<Redirect to="/"></Redirect>:
            <div style={{marginTop:"50px", display:"flex", flexDirection:"column"}}>
                <label style={{display:"block", textAlign:"center", fontSize:"30px"}}>帳號</label>
                <input type="email" style={{display:"block", margin:"auto", top:"0", bottom:"0", width:"20%", height:"20px"}} 
                ref={accountRef} onChange={(e)=>{setAccount(e.target.value)}}></input>
                <label style={{display:"block", textAlign:"center", fontSize:"30px"}}>密碼</label>
                <input type="password"style={{display:"block", margin:"auto", top:"0", bottom:"0", width:"20%", height:"20px"}} 
                ref={passwordRef} onChange={(e)=>{setPassword(e.target.value)}}></input>
                <styled.LoginButton onClick={()=>{handleClick(accountRef.current.value, passwordRef.current.value)}}>登入</styled.LoginButton>
                <Link to="register"><div style={{textAlign:"center"}}>還沒註冊？前往註冊頁面</div></Link>
            </div>
            }
        </React.Fragment>
    )
}

export default Login;