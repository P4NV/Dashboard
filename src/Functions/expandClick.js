const button = document.getElementById("expandBTN");
const sidebar = document.querySelector(".sidebar");

export default function expandClick() {
    button.addEventListener("toggle", function(){

        sidebar.classList.toggle("active")

    })
}