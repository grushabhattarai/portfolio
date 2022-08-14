/* Slider */
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
/* Slider */

/* Validation */

function setError(e, s) {
  const r = e.parentElement,
    t = r.querySelector(".error");
  (t.innerText = s), r.classList.add("error"), r.classList.remove("success");
}
function setSuccess(e) {
  const s = e.parentElement,
    r = s.querySelector(".error");
  (r.innerText = ""), s.classList.add("success"), s.classList.remove("error");
}
function isValidEmail(e) {
  const s =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return s.test(String(e).toLowerCase());
}
function validateInputs() {
  const e = name.value.trim(),
    s = email.value.trim(),
    r = message.value.trim(),
    t = phone.value.trim();
  "" === e ? setError(name, "Name is required") : setSuccess(name),
    "" === s
      ? setError(email, "Email is required")
      : isValidEmail(s)
      ? setSuccess(email)
      : setError(email, "Provide a valid email address"),
    "" === t ? setError(phone, "Phone Number is Required") : setSuccess(phone),
    "" === r ? setError(message, "Message is required") : setSuccess(message);
}
const form = document.getElementById("myform"),
  name = document.getElementById("your-name"),
  phone = document.getElementById("your-tel"),
  email = document.getElementById("your-email"),
  message = document.getElementById("your-message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

/* Validation */
