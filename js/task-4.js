const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit" ,(event) => {
event.preventDefault();
const userEmail = loginForm.elements.email.value;
   const userPassword = loginForm.elements.password.value;
   
    if (userEmail.trim() === "" || userPassword.trim() === "") {
        alert("All form fields must be filled in");
        return;}
    
const formData  = {
    email: userEmail.trim(),
    password: userPassword.trim(),

};
console.log(formData);
loginForm.reset();
})
