



const form = document.querySelector("#form");
const form_type = document.querySelector("#form_type");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

const popupBox = document.querySelector("#popup-box");





// Main fuction for form submition

form.addEventListener('submit',function(e){
    // console.log("from submit button");
    if(form_type.value=='login_form'){
        
        if(!login_validateInputs()){ //this if condition call login_validateInputs
            e.preventDefault();
        }
        else{ // if all inputs valid this section is execute
            setPopupMessage(); // its call  PopupMessage() functoin for set a popup message
            popupOpen(); //its call popupOpen() function for show the popup message 
            form.reset(); // its rest() the form input values 
            e.preventDefault();
        }
    }

    // console.log("from submit button");
    else if(form_type.value=='registration_form'){
        
        e.preventDefault();
        if(!registration_validateInputs()){ //this if condition call login_validateInputs
            e.preventDefault();
        }
        else{
            setPopupMessage(); // its call  PopupMessage() functoin for set a popup message
            popupOpen(); //its call popupOpen() function for show the popup message 
            form.reset(); // its rest() the form input values 
            e.preventDefault();
        }
    }
})


// validation function for login form
function login_validateInputs(){
    /*
        this function call  validateEmail() and validatePassword() functions
        and its return boolean value if all inputs valid its return true else any one input not valid 
        its return false.
    */

    // all input trimed values store in variable
    const emailVal = email.value.trim(); 
    const passwordVal = password.value.trim();
    
    
    let emailSuccess = validateEmail(emailVal); // validateEmail() function calling and store returned value in variale 
    let passwordSuccess = validatePassword(passwordVal); // validatePassword() function calling and store returned value in variale 
    
    if(emailSuccess && passwordSuccess){ // this if condition check all inputs valid or not if any one input not valid its not execute 
        return true;
    }
    else{ //if any one input not valid its execute
        return false;
    }    
}

// validation function for registration form
function registration_validateInputs(){
    /*
        this function call  
        validateUsername(),validateEmail(),validatePhone(),validatePassword() and validateCpassword() 
        functions and its return boolean value if all inputs valid its return true else any one input not valid 
        its return false.
    */
    // all input trimed values store in variable
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    

    let usernameSuccess = validateUsername(usernameVal); // validateUsername() function calling and store returned value in variale 
    let emailSuccess = validateEmail(emailVal); // validateEmail() function calling and store returned value in variale 
    let phoneSuccess = validatePhone(phoneVal); // validatePhone() function calling and store returned value in variale 
    let passwordSuccess = validatePassword(passwordVal); // validatePassword() function calling and store returned value in variale 
    let cpasswordSuccess = validateCpassword(cpasswordVal,passwordVal); // validateCpassword() function calling and store returned value in variale 
   
    if(usernameSuccess && emailSuccess && phoneSuccess && passwordSuccess && cpasswordSuccess){
        // this if condition check all inputs valid or not if any one input not valid its not execute 
        return true;
    }
    else{
        //if any one input not valid its execute
        return false;
    }
}


// Username validation function definition 
function validateUsername(usernameVal){
    /*
        this function validate usernameVal if usernameVal is valid its call setSuccess() function
        and return true.
        else usernameVal is invalid its call setError() function and return false. 
    */
    
    if(usernameVal === ''){ // this if condition check usernameVal is empty. if usernameVal empty its execute
        setError(username,'Username is Required');
        return false;
    }
    else if(usernameVal.length<4){ // this if condition check usernameVal length. if usernameVal length less then 4 its execute
        setError(username,'Minimum 4 characters Required');
        return false;
    }
    else{ // if  usernameVal not empty and  usernameVal length greater then 4 is valid its execute 
        setSuccess(username);
        return true;
    }
}


// Email validation function definition 
function validateEmail(emailVal){

    /*
        this function validate emailVal. if emailVal is valid its call setSuccess() function
        and return true.
        else emailVal is invalid its call setError() function and return false. 
    */

    if(emailVal === ''){ // this if condition check emailVal is empty. if emailVal empty its execute
        setError(email,'Email is Required');
        return false;
    }
    else if(!validateEmailFormat(emailVal)){ 
        /*
        this if condition call validateEmailFormat() 
        if validateEmailFormat() returns true its not execute  
        else validateEmailFormat() returns false its execute
        */
        setError(email,'Please Enter valid Email');
        return false;
    }
    else{
        /* 
        this section
        if validateEmailFormat() returns true its  execute  
        else validateEmailFormat() returns false its not execute
        */
        setSuccess(email);
        return true;
    }
}



// Email Format validation function
function validateEmailFormat(emailVal){
    /*
    this get one argument that is called emailVal its check this value 
    valid email format or not. if emailVal valid format its return true else its return false
    */

    // Regular Expression for email format
    const email_format = /^([a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;

    if(emailVal.match(email_format)){
        // this if condition check email format emailVal is valid format its execute
        return true;
    }
    // this if condition check email format emailVal is not valid format its execute
    return false;
}




// Phone number validation function definition 
function validatePhone(phoneVal){

    /*
        this function validate emailVal. if emailVal is valid its call setSuccess() function
        and return true.
        else emailVal is invalid its call setError() function and return false. 
    */

    if(phoneVal === ''){ // this if condition check emailVal is empty. if emailVal empty its execute
        setError(phone,'Phone number is Required');
        return false;
    }
    else if(!validatePhoneFormat(phoneVal)){ 
        /*
        this if condition call validateEmailFormat() 
        if validateEmailFormat() returns true its not execute  
        else validateEmailFormat() returns false its execute
        */
        setError(phone,'Please Enter valid phone number');
        return false;
    }
    else{
        /* 
        this section
        if validateEmailFormat() returns true its  execute  
        else validateEmailFormat() returns false its not execute
        */
        setSuccess(phone);
        return true;
    }
}




// Phone number format validation function
function validatePhoneFormat(PhoneVal){
    /*
    this function get one argument that is called PhoneVal its check this value 
    valid phone number format or not. if PhoneVal valid format its return true else its return false
    */

    // Regular Expression for phone number format
    // must 10 digits number
    const Phone_format = /^\d{10}$/;

    if(PhoneVal.match(Phone_format)){
        // this if condition check phone number format PhoneVal is valid format its execute
        return true;
    }
    // this if condition check phone number format PhoneVal is not valid format its execute
    return false;
}


// Password validation function definition 
function validatePassword(passwordVal){
    /*
        this function get one argument that is called passwordVal.
        its check passwordVal  is not empty and minimun length 6.
        if passwordVal satisfy this condition its call setError() function andreturn true.
        else its call setSuccess() function and  return false.
    */
    if(passwordVal === ''){
        //this condition check passwordVal is empty or not empty
        setError(password,'Password is Required');
        return false;
    }
    else if(passwordVal.length<6){
        //this condition check passwordVal length
        setError(password,'Minimum 6 characters Required');
        return false;
    }
    else{
        setSuccess(password);
        return true;
    }
}


// Confirm Password validation function definition 
function validateCpassword(cpasswordVal,passwordVal){

    /*
        this function get two argument that is called cpasswordVal and passwordVal.

            * its check passwordVal  is not empty.
            * cpasswordVal and passwordVal this two valus must be same.
            * cpasswordVal minimun length 6.
            
        if cpasswordVal satisfy this condition its call setError() function andreturn true.
        else its call setSuccess() function and  return false.
    */
    
    if(cpasswordVal === ''){
        // its check passwordVal  is not empty.
        setError(cpassword,'Confirm Password is Required');
        return false;
    }
    
    else if(!(cpasswordVal===passwordVal)){
        // its check cpasswordVal and passwordVal this two valus must be same.
        setError(cpassword,'Password Mismatch');
        return false;
    }
    else if(cpasswordVal.length<6){
        // its check cpasswordVal minimun length 6.
        setError(cpassword,'Minimum 6 characters Required');
        return false;
    }
    else{
        setSuccess(cpassword);
        return true;
    }
}



// set error function
function setError(element,message){
    /*
        this function get two arguments one is called element another one is message.
        message argumet contain error message.
        element argument indicated which element is invalid.
        then we will get that element's parent element this element is inputGroup.

        using inputGroup element we will get original error element
        after that we will set error message in errorElement.
        we set style for errorElement visibility = "visible".
        we add class 'error' in inputGroup element for styling
    */
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    errorElement.style.visibility = "visible";
    inputGroup.classList.add('error');
}

// set success function
function setSuccess(element){
    /*
        this function get one arguments is called element.
        
        element argument indicated which element is valid.
        then we will get that element's parent element this element is inputGroup.

        using inputGroup element we will get original success element

        after that we will set success message in errorElement.
        we set style for errorElement visibility = "hidden".
        we remove class 'error' in inputGroup element for styling.
    */

    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = "success";
    errorElement.style.visibility = "hidden";
    inputGroup.classList.remove('error');
}





// Hide Password function 

let password_state = false; // this variablr indicates password hidden or visible
/*
    when this function is calling password is hidden its change visible or 
    password is visible its change hidden. its act like a togle button
*/
function hidePassword(){

    // password eye icon element
    let eye = document.querySelector("#eyePassword");

    if(password_state){
        // here password is visible its change hidden
        password.setAttribute("type","password");
        password_state = false;
        eye.classList.add("fa-eye-slash");
        eye.classList.remove("fa-eye");
    }
    else{
        // here password is hidden its change visible
        password.setAttribute("type","text");
        password_state = true;
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}


// Hide Confirm Password function
let Cpassword_state = false; // this variablr indicates password hidden or visible
/*
    when this function is calling Confirm Password is hidden its change visible or 
    Confirm Password is visible its change hidden. its act like a togle button
*/

function hideCpassword(){
    let eye = document.querySelector("#eyeCpassword");
    if(Cpassword_state){
        // here password is visible its change hidden
        cpassword.setAttribute("type","password");
        Cpassword_state = false;
        eye.classList.add("fa-eye-slash");
        eye.classList.remove("fa-eye");
    }
    else{
        // here password is hidden its change visible
        cpassword.setAttribute("type","text");
        Cpassword_state = true;
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}



// page redirect function
function pageRedirect(){
    // this function for page redirect in registration popup page
    location.replace("login.html");
    popupClose();
}


// popup box open function
function popupOpen(){
    popupBox.classList.add('open-popup');
    popupBox.classList.remove('close-popup');
}

// popup box close function
function popupClose(){
    popupBox.classList.remove('open-popup');
    popupBox.classList.add('close-popup');
}



// set popup message
function setPopupMessage(){
    // its get togle button value customer or retailer
    let check_toggle = document.querySelector('input[name="customer-or-retailer"]:checked');

    // its get popup-mesage element
    let popupMessage = document.querySelector('#popup-message');
    
    // set message for login form
    if(form_type.value=='login_form'){
        let message = `${check_toggle.value} - ${email.value} Sign In Successfully`;
        console.log(message);
        popupMessage.innerText=message;
    }

    // set message for registration form
    if(form_type.value=='registration_form'){
        let message = `${check_toggle.value} - ${username.value} Sign Up Successfully`;
        console.log(message);
        popupMessage.innerText=message;
    }
}




// Restrict  Phone number on input time

function phoneNumberOnly(input){

    var regex = /[^0-9]/;

   input.value = input.value.replace(regex, "");
}


// eyeHide function

function eyeHide(element,id){
    let eye =document.querySelector(id);
    if(element.value==""){
        eye.style.visibility = "hidden";
    }
    else{
        eye.style.visibility = "visible";
    }
}

















