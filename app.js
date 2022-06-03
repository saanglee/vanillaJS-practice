// Modal
const cards = document.querySelectorAll(".main_item");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close_btn");
const modalOverlay = document.querySelector(".modal_overlay");
const content = document.getElementById("content");

const openModal = (img, alt, title, content) => {
  let modalImg = document.querySelector(".modal_img");
  let modalTitle = document.querySelector(".modal_title");
  let modalText = document.querySelector(".modal_text");
  modalImg.src = img;
  modalImg.alt = alt;
  modalTitle.innerText = title;
  modalText.innerText = content;
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};

cards.forEach((item) => {
  item.addEventListener("click", function (e) {
    let imgSrc = item.querySelector("img").src;
    let imgAlt = item.querySelector("img").alt;
    let itemTitle = item.querySelector(".item_title").innerText;
    let itemContent = item.querySelector(".item_content").innerText;
    openModal(imgSrc, imgAlt, itemTitle, itemContent);
    console.log(itemTitle.innerText); // 지우기
  });
});

closeButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// Side Menu
const burger = document.querySelector("#burger");
const sidemenu = document.querySelector(".sidemenu");
const sidemenuLink = document.querySelectorAll(".sidemenu ul li a");

const toggleMenu = () => {
  burger.classList.toggle("active");
  sidemenu.classList.toggle("active");
};

sidemenuLink.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
burger.addEventListener("click", toggleMenu);

// Dark Mode
const toggle = document.querySelector("#toggle");
let isDarkMode = false;
let checkbox = document.querySelector("input[name=checkbox]");

const SwitchMode = () => {
  isDarkMode = !isDarkMode;
  let root = document.body;
  isDarkMode ? (toggle.innerText = "🌚") : (toggle.innerText = "🌞");
  root.classList.toggle("darkMode");
};

checkbox.addEventListener("change", function () {
  SwitchMode();
});

// Scroll
function goUp() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
