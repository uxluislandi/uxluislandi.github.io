function validatePassword() {
    var enteredPassword = document.getElementById("password-input").value;
    var correctPassword = "Ilikethepizzamargherita"; // Replace with your desired password

    if (enteredPassword === correctPassword) {
        // Password is correct, show the iframe or perform further actions
        var iframeContainer = document.getElementById("iframe-container");
        var passwordInput = document.getElementById("password-input");
        var submitButton = document.getElementById("submit-button");
        var passwordStatus = document.getElementById("password-status");
        var passwordText = document.getElementById("password-text");

        iframeContainer.style.display = "block";
        passwordInput.style.display = "none";
        submitButton.style.display = "none";
        passwordStatus.style.display = "block";
        passwordText.style.display = "none";

        // Clear the first error message
        var firstPasswordStatus = document.getElementById("password-status");
        firstPasswordStatus.textContent = "";
    } else {
        // Password is incorrect, display an error message or perform other actions
        var passwordStatus = document.getElementById("password-status");
        passwordStatus.style.display = "block";
        passwordStatus.innerHTML = `Incorrect password. Try again or <a href="mailto:ux@luislandi.com?subject=I would like to see know more about your work!&body=Hi, I would like to have a look at your work, could you share with me the password of your prototype?">contact me</a> to request the password.`;
    }
}

document.getElementById("submit-button").addEventListener("click", validatePassword);
