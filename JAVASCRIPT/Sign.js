const form = document.querySelector('.js-form');
const password =  document.querySelector('.js-password');

function login(){
  const username = document.querySelector('.js-username').value;
  if(username === '' || password === ''){
    alert('Please Enter Username and password ')
  }else{

    document.querySelector('.js-form').style.display = 'none';

    document.querySelector('.welcome-container').style.display = 'inline-block';

    document.querySelector('.welcome-message')
      .innerHTML = `Welcome Back, ${username}!`; 
  }
}

function register(){

  document.querySelector('.js-form').style.display = 'none';

  document.querySelector('.register-form').style.display = 'inline-block'
}

function newMember(){
  const newUsername = document.querySelector('.new-username').value;
  if(newUsername === ''){
    alert('Please Enter Username and password ')
  }else{

    document.querySelector('.register-form').style.display = 'none';

    document.querySelector('.welcome-container').style.display = 'inline-block';

    document.querySelector('.welcome-message')
      .innerHTML = `Welcome to Ani<span>Sphere</span>, ${newUsername}!`; 
  }
}