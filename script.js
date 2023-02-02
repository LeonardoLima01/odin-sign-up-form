const checkFirstName = () => {
    let firstName = document.querySelector('#firstName')
    let errorMessage = document.querySelector('#firstName+p')

    firstName.addEventListener('input', () =>{
        if (firstName.value == ''){
            errorMessage.style.cssText = 'visibility: visible'
        }
        else{
            errorMessage.style.cssText = 'visibility: hidden'
        }
    })
}

const checkLastName = () => {
    let lastName = document.querySelector('#lastName')
    let errorMessage = document.querySelector('#lastName+p')

    lastName.addEventListener('input', () =>{
        if (lastName.value == ''){
            errorMessage.style.cssText = 'visibility: visible'
        }
        else{
            errorMessage.style.cssText = 'visibility: hidden'
        }
    })
}

const checkEmail = () => {
    let emailInput = document.querySelector('#email')
    let errorMessage = document.querySelector('#email+p')

    emailInput.addEventListener('input', () =>{
        if (!emailInput.checkValidity()){
            errorMessage.style.visibility = 'visible'
        }
        else{
            errorMessage.style.visibility = 'hidden'
        }
    })
}   

const checkPhone = () =>{
    let phoneNumber = document.querySelector('#phoneNumber')
    let errorMessage = document.querySelector('#phoneNumber+p')

    phoneNumber.addEventListener('input', () =>{
        let count = 0;

        // Counts amount of numbers
        for (let i = 0; i < phoneNumber.value.length; i++){
            if (!isNaN(+(phoneNumber.value[i]))){
                count++;
            }
        }

        if (count != 10){
            errorMessage.style.visibility = 'visible';
        }
        else{
            errorMessage.style.visibility = 'hidden';
        }
    })
    return 0;
}

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

const checkPasswords = () =>{
    let password1 = document.querySelector('#password')
    let password2 = document.querySelector('#confirmPassword')
    let errorMessage1 = document.querySelector('#password+p')
    let errorMessage2 = document.querySelector('#confirmPassword+p')


    password1.addEventListener('input', ()  =>{

        // If password size < 8
        if (password1.value.length < 8){
            errorMessage2.style.cssText = 'visibility: hidden'
            errorMessage1.textContent = 'password must have at least 8 characters'
            errorMessage1.style.cssText = 'visibility: visible'
        }
        // If passwords don't match
        else if (password1.value != password2.value){
            errorMessage1.textContent = 'Passwords do not match'
            errorMessage2.textContent = 'Passwords do not match'
            errorMessage1.style.cssText = 'visibility: visible'
            errorMessage2.style.cssText = 'visibility: visible'
        }
        // If password is all lowercase
        else if (containsUppercase(password1.value) == false){
            errorMessage2.style.cssText = 'visibility: hidden'
            errorMessage1.textContent = 'Missing 1 capital letter'
            errorMessage1.style.cssText = 'visibility: visible'
        }
        // If ok
        else{
            errorMessage1.style.cssText = 'visibility: hidden'
            errorMessage2.style.cssText = 'visibility: hidden'
        }
    })

    password2.addEventListener('input', ()  =>{

        // If password size < 8
        if (password2.value.length < 8){
            errorMessage1.style.cssText = 'visibility: hidden'
            errorMessage2.textContent = 'password must have at least 8 characters'
            errorMessage2.style.cssText = 'visibility: visible'
        }
        // If password is all lowercase
        else if (password1.value != password2.value){
            errorMessage1.textContent = 'Passwords do not match'
            errorMessage2.textContent = 'Passwords do not match'
            errorMessage1.style.cssText = 'visibility:  visible'
            errorMessage2.style.cssText = 'visibility: visible'
        }
        // If password is all lowercase
        else if (containsUppercase(password1.value) == false){
            errorMessage1.style.cssText = 'visibility: hidden'
            errorMessage2.textContent = 'Missing 1 capital letter'
            errorMessage2.style.cssText = 'visibility: visible'
        }
        // If ok
        else{
            errorMessage1.style.cssText = 'visibility: hidden'
            errorMessage2.style.cssText = 'visibility: hidden'
        }
    })
}

checkFirstName();
checkLastName();
checkEmail();
checkPhone();
checkPasswords();