alert('Chào mừng bạn đến với web của tôi');
alert('Web rất đơn giản còn sơ sài');
alert('Chỉ bấm được chỗ đăng nhập thôi,chứ không đăng nhập được đâu');
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
const iconClose = document.querySelector(".icon-close");

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup"); //chú ý dấu cách
});
