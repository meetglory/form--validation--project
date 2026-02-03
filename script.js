// Tieh Eleanor's contribution
//create a function called validate form that will be executed once the register button is clicked
function validateForm() {
    // get access to the different html elements by their specidied IDs inthe html code
            const fName = document.getElementById("firstName").value;
            const lName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const pass = document.getElementById('password').value
            const confirmPass = document.getElementById('confirmPassword').value

            // write the conditional statements to validate the different fields in the form
            //ensure first name and last name isnt empty, email has the @ and . characters, 
            //finally ensure the password is not empty and has at least 8 character, also check to be sure the confirm password is same as password
            if (fName === ""|| lName===""){
                alert("please fill in your name");
            } if (email === "" || !email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
            }if (pass === "" || pass.length < 8) {
                alert("Please enter a password with at least 6 characters.");
            } if(confirmPass === "" || confirmPass !== pass){
                alert("Passwords do not match")
            } else{
                alert("form submitted successfully");
            }
        }