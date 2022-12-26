import axios from "axios";
  axios.defaults.baseURL = 'https://dogsapi.origamid.dev/json';

//auth requests
export function createLoginOptions(name,password){
  return { 
    method: "POST",
    url: `/jwt-auth/v1/token`,
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
    url: `/api/password/lost`,
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
    url: `/api/user`,
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
    url: `/api/password/reset`, 
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


//modal requests and feed request

export function createCommentOptions(comment,localToken,idModal){
  return {
    method: "POST",
    url: `/api/comment/${idModal}`,
    headers: {
      "Content-type" : "application/json",
      Authorization: `Bearer ${localToken}`
    },
    data: {  
      comment: comment
    }
  }
}


export function createDeletePostOptions(idModal, localToken){
  return {
    method: "DELETE",
    url: `/api/photo/${idModal}`,
    headers: {
      Authorization: `Bearer ${localToken}`
    }
  
  }
}

export function createPostPhotoOptions(formData,localToken){
  return {
    method: "POST",
    url: `/api/photo`,
    headers: {
      authorization: `Bearer ${localToken}`    
    },
    data: formData
  }
}


export function createRequestPicturesOptions(currentPage, user , localToken){
  return { 
    method: "GET", 
    url: `/api/photo/?_page=${currentPage}&_total=6&_user=${user?.id}`,
    headers: {
      "Content-type": "application/json", 
      authorization: `Bearer ${localToken}`
    }
  }
}

export function createValidateTokenOptions(localToken){
  return { 
    method: "POST", 
    url: `/jwt-auth/v1/token/validate`, 
    headers: {
      "Content-type": "application/json", 
      authorization: `Bearer ${localToken}`
    },
  }
}

export function createUserAuthOptions(localToken){
  return {
    method: "GET",
    url: `/api/user`,
    headers: {
      "Content-type": "application/json", 
      authorization: `Bearer ${localToken}`
    }
  }
}

