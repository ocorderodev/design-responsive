const menu = document.getElementById("menu");
const modal = document.getElementById("modal");

const spanMenu = document.getElementById("close-menu");
spanMenu.addEventListener("click", () => menu.style.display = "none");
const spanModal = document.getElementById("close");
spanModal.addEventListener("click", () => modal.style.display = "none");

const showMenu = () => menu.style.display = "flex";
const hiddenMenu = () => menu.style.display = "none";

const showModal = () => modal.style.display = "block";
const hiddenModal = () => modal.style.display = "none";

hiddenMenu();
hiddenModal();