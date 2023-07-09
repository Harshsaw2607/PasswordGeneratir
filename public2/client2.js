const UserInput=document.querySelector('#UserInput')
const Encrypt=document.querySelector('.Encrypt')
const SecretKey=document.querySelector('#SecretKey')
const passwordInput=document.querySelector('.password-input')
Encrypt.addEventListener('click',(event) => {
    
     if(UserInput.value!="" && SecretKey.value!="") {
        event.preventDefault()
        UserInput.validationMessage = ""; 
        const password=UserInput.value
        const Key=SecretKey.value 

        UserInput.value=""
        SecretKey.value=""
        const index=Math.floor(password.length/2)

        const newPassword=password.substring(0,index)+Key+password.substring(index)
        const hash=CryptoJS.SHA256(newPassword)
        const encryptedPassword=hash.toString(CryptoJS.enc.Hex)
        passwordInput.innerText=encryptedPassword
        console.log(encryptedPassword)

    }

})




