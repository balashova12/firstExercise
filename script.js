document.getElementById("actionButton").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("actionButton").addEventListener("click", function() {
    document.getElementById("description").classList.toggle('nonvisible');
});