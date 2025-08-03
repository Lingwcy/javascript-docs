
const postLogin = (username:string,password:string) => {
    if(username == "admin" && password == "123"){
        return {
            status:200,
            accessToken:1564156165,
            refreshToken:455614545,
        }
    }
    else return {status:404}
}

export {
    postLogin
}