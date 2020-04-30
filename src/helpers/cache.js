
const key="auth_user_";

export const saveInCache =(data)  => {
    localStorage.setItem(key,JSON.stringify(data));
}

export const getFromCache=()=>{
    return JSON.parse(localStorage.getItem(key));
}

export const removeFromCache=()=>{
    localStorage.removeItem(key);
}