

const getLogin = async (credentials)=>{
    const username = credentials.email;
    const password = credentials.password;

    const response = await fetch(`http://localhost:8000/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password}),
    });
    const data = await response.json();
    return data;
}

export default getLogin;