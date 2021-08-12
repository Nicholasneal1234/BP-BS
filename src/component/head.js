import React from 'react';
import * as styled from './style';
import { Link } from 'react-router-dom';
import fb, { au } from './firebase';
import { AuthState } from './auth';

function Head(){

    const parser = new DOMParser();

    const [data, setData]=React.useState([]);
    let user=React.useContext(AuthState);

    function handleSignout(){
        au.signOut();
    }


    React.useEffect(()=>{
        if(user.uid){
            fb.firestore().collection("user").doc("data").collection(user.uid).get()
            .then((docs)=>{
                const d=[]
                docs.forEach((doc)=>{
                    d.push(doc.data());
                })
                setData(d);
            })
        }
        
    },[user.uid])

    return(
        <React.Fragment>
            <styled.HeadWrap>
                <Link to="/"><styled.HeadItem>首頁</styled.HeadItem></Link>
                <Link to="/input"><styled.HeadItem>填寫血壓</styled.HeadItem></Link>
                {user.login?<styled.HeadItem onClick={handleSignout}>登出</styled.HeadItem>:<Link to="/login"><styled.HeadItem>登入</styled.HeadItem></Link>}
            </styled.HeadWrap>
        </React.Fragment>
    )
}

export default Head;