function addUser(){
    username = document.getElementById("User_name").value;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
}