function validate()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != "" && password != "")
    {
        alert("Congratulations! Login Successful");
    }
    else
    {
        alert("Error! Kindly enter username and password")
    }
};

let button = document.getElementById("btn");
button.addEventListener("click", validate);