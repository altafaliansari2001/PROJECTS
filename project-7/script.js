var form = document.querySelector('form');
var inp1 = document.querySelector('#username'); // Updated to match HTML
var inp2 = document.querySelector('#email');
var inp3 = document.querySelector('#password'); // Updated to match HTML
var h4 = document.querySelector('#error'); // Changed to target the error message

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    h4.textContent = ''; // Clear previous error message

    // Validate inputs
    if (inp1.value  === '' || inp2.value === '') {
        h4.textContent = 'Please complete your fill name , email and password';
        h4.style.color = 'red';
    } else {
        // Handle successful submission (optional)
        h4.textContent =  'Registration successful!'
        h4.style.color = 'green';
        // Optionally reset the form
      
    }
});
