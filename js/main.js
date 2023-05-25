let signupNameInput=document.getElementById('signupNameInput')
let signupEmailInput=document.getElementById('signupEmailInput')
let signupPasswordInput=document.getElementById('signupPasswordInput')
let signUbButton=document.getElementById('signUbButton')
let signUbMessage=document.getElementById('signUbMessage')
let signUbMessageSuccess=document.getElementById('signUbMessageSuccess')

let allUsers=[]

if(localStorage.getItem('users')!=null)
{
    allUsers = JSON.parse(localStorage.getItem('users'))
}

function signUp(){

    let user={
        name:signupNameInput.value,
        email:signupEmailInput.value,
        password:signupPasswordInput.value
    }
    if(signupNameInput.value=="" || signupEmailInput.value=="" || signupPasswordInput.value=="")
    {
        signUbMessage.classList.replace('d-none','d-block')  
    }
    else if(oldEmail())
    {
        signUbMessage.classList.replace('d-none','d-block')  
    }
    else
    {
        allUsers.push(user)
        localStorage.setItem('users',JSON.stringify(allUsers))
        signUbMessageSuccess.classList.replace('d-none','d-block')
    }


}



function oldEmail(){

    for(let i=0 ; i<allUsers.length ; i++)
    {
        if(signupEmailInput.value == allUsers[i].email)
        {
            return true;
        }
    }
    return false
}
if(signUbButton != null){
signUbButton.addEventListener('click',signUp)

}
 ////////////////////////////////////

 let loginEmailInput=document.getElementById('loginEmailInput')
 let loginPasswordInput=document.getElementById('loginPasswordInput')
 let loginMessege=document.getElementById('loginMessege')
 let loginButton=document.getElementById('loginButton')
let loginMessegeSucces=document.getElementById('loginMessegeSucces')

 function login(){
    
    // console.log(loginEmailInput.value, loginPasswordInput.value);
    if(loginEmailInput.value=="" || loginPasswordInput.value=="")
    {
        loginMessege.classList.replace('d-none','d-block')

        // if(loginEmailInput.value=='' || loginPasswordInput.value=='')
    }
    else if(isOldUser() == false)
    {
        loginMessege.classList.replace('d-none','d-block')
        // loginButton.href='home.html'
    }
    else
    {
        loginButton.href='home.html'
        // loginMessegeSucces.classList.replace('d-none','d-block')
        
    }
 }
 

function isOldUser(){
    for(let i=0 ;i<allUsers.length ; i++)
    {
        if(loginEmailInput.value == allUsers[i].email && loginPasswordInput.value ==allUsers[i].password)
        {   
            localStorage.setItem('currentUser',JSON.stringify(allUsers[i].name))
            return true;
        }   
    }
    return false
}

if(loginButton != null){
 loginButton.addEventListener('click',login)

}

///// home ///////// 
let homeParagraph=document.getElementById('homeParagraph')

if(homeParagraph != null){
    var username=JSON.parse(localStorage.getItem('currentUser'))
    homeParagraph.innerHTML= `welcome ${username} `
}



