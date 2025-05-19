const p1 = document.getElementById("user_password");
const p2 = document.getElementById("user_password1");

document.querySelector("form").addEventListener("submit", function(e) {
    if (p1.value !== p2.value) {
        e.preventDefault(); // prevent form submission
        alert("Password not matching, please type again");
    }
});

