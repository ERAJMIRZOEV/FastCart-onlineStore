import { jwtDecode } from 'jwt-decode';

function getToken(){
    return jwtDecode(localStorage.getItem("access_token"))
}

function saveToken(token){
    localStorage.setItem("access_token",token)
}

function removeToken(token){
    localStorage.removeItem("access_token")
}

export {saveToken,removeToken,getToken}