//Navbar responsive

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");


toggleBtn.onclick = function() {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
}

const toggleWlm = document.querySelector(".boton-welcome");
const toggleWlmIcon = document.querySelector(".boton-welcome i");
const mostrarWelcome = document.querySelector(".bienvenidas-comando");

toggleWlm.onclick = function() {
    mostrarWelcome.classList.toggle("open");
    const isOpenWLM = mostrarWelcome.classList.contains("open");


    toggleWlmIcon.classList = isOpenWLM
    ? "fa-regular fa-folder-open"
    : "fa-solid fa-folder"
}

const toggleGdb = document.querySelector(".boton-goodbye");
const toggleGdbIcon = document.querySelector(".boton-goodbye i");
const mostrarGoodbye = document.querySelector(".goodbye-comando");

toggleGdb.onclick = function() {
    mostrarGoodbye.classList.toggle("open");
    const isOpenGdb = mostrarGoodbye.classList.contains("open");

    toggleGdbIcon.classList = isOpenGdb
    ? "fa-regular fa-folder-open"
    : "fa-solid fa-folder"
    
}

const toggleVrf = document.querySelector(".boton-verify");
const toggleVrfIcon = document.querySelector(".boton-verify i");
const mostrarVerify = document.querySelector(".verify-comando");

toggleVrf.onclick = function() {
    mostrarVerify.classList.toggle("open");
    const isOpenVrf = mostrarVerify.classList.contains("open");

    toggleVrfIcon.classList = isOpenVrf
    ? "fa-regular fa-folder-open"
    : "fa-solid fa-folder"
}

