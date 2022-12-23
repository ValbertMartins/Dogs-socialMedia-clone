

export function createLoginOptions(name,password){
  return { 
    method: "POST",
    url: `https://dogsapi.origamid.dev/json/jwt-auth/v1/token`,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      username: name,
      password: password 
    }
  }
}


export function createLostPasswordOptions(login){
  return { 
    method: "POST", 
    url: `https://dogsapi.origamid.dev/json/api/password/lost`,
    headers: {
      "Content-type" : "application/json"
    },
    data: {
      login : login, 
      url: "http://localhost:3000/login/reset"
    }
  }
}


export function createRegisterOptions(username,password,email){ 
  return { 
    method: "POST",
    url: `https://dogsapi.origamid.dev/json/api/user`,
    headers: {"Content-type": "application/json"},
    data: {
        username: username,
        password: password,
        email: email
    }
  }
}

export function createResetPasswordOptions(login, key, newPassword){
  return { 
    method: "POST",
    url: `https://dogsapi.origamid.dev/json/api/password/reset`, 
    headers: { 
      "Content-type": "application/json"
    },
    data: {
      login: login,
      key: key, 
      password: newPassword
    }
  } 
}