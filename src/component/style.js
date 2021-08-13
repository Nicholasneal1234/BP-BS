import styled from 'styled-components';

export const HeadWrap = styled.div`
    display:flex;
    width:100%;
    background-color:#000;
    font-size:0px;
    justify-content:center;
`;

export const HeadItem = styled.button`
    display:inline-block;
    margin:0;
    width:100px;
    height:50px;
    background-color:#000;
    border:none;
    color:white;
    font-size:20px;
    :hover{
        background-color:#aaa;
        cursor:pointer;
    }
`;

export const SearchInput = styled.input`
    display:inline-block;
    position:absolute;
    margin:auto;
    top:0px;
    bottom:0px;
    height:30px;
    width:200px;
    padding:0px;
    border:1px solid;
`;

export const ConfirmButton = styled.button`
    display:inline-block;
    margin:20px auto;
    top:0px;
    bottom:0px;
    padding:0px;
    border:1px solid;
    width:100%;
    height:30px;
    background-color:red;
    :hover{
        cursor:pointer;
        background-color:gray;
    }
`;

export const LoginButton = styled.button`
    display:inline-block;
    margin:auto;
    top:0;
    bottom:0;
    width:20.5%;
    height:30px;
    margin-top:30px;
    padding:1px 2px;
    :hover{
        cursor:pointer;
        color:gray;
    }
`;

export const Ul = styled.ul`
    display:block;
    position:relative;
    list-style-type: none;
    background-color:gray;
    width:100%;
    padding:0px;
    margin:auto;
    top:0px;
    bottom:0px;
    z-index:1;
`;

export const TimeFace = styled.div`
    position:relative;
    width:100%;
    height:100%;
    transform: translateY(-3px);
`;

export const Hand = styled.div`
    position:absolute:
    width:100%;
    height:100%;
    &.hour{
        background:yellow;
        z-index:1;
    }
    &.min{
        background:green;
        z-index:2;
    }
    &.second{
        background:black;
        z-index:3;
    }
`;