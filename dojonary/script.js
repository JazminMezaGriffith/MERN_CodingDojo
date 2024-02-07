function toggleLogin(button) {
    if (button.innerText === "Login") {
        button.innerText = "Logout";
    } else {
        button.innerText = "Login";
    }
}

function showAlert(text){
    alert(text);
}

function removeElement(button) {
    button.remove();
}