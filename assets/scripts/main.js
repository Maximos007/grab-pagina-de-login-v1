const button = document.querySelector('.button')

button.addEventListener('click',function(event){
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const divEmail = document.querySelector('.email')
    const divPassword = document.querySelector('.password')
    
    email.value === ''? divEmail.classList.add('wrong') : divEmail.classList.remove('wrong')
    password.value === ''? divPassword.classList.add('wrong') : divPassword.classList.remove('wrong')
    
})