"use strict";

const refs = {
  openMenuBtn: document.querySelector(".js-menu-button"),
  closeMenuBtn: document.querySelector(".menu-close-btn"),
  menu: document.querySelector(".mobile-menu"),
  allMenuLinks: document.querySelectorAll(".mobile-menu a"),
  openModalBtn: document.querySelector(".feedback-btn"),
  closeModalBtn: document.querySelector(".modal-close-btn"),
  backdrop: document.querySelector(".backdrop"),
  reviewForm: document.querySelector(".review-form"),
};

const updateScrollLock = () => {
  const isMenuOpen = !refs.menu.classList.contains("is-hidden");
  const isModalOpen = !refs.backdrop.classList.contains("is-hidden");
  document.body.classList.toggle("no-scroll", isMenuOpen || isModalOpen);
};

const clearErrors = () => {
  const errorElements = refs.reviewForm.querySelectorAll(".error-message");
  const inputs = refs.reviewForm.querySelectorAll(
    ".form-input, .form-textarea",
  );
  const customBox = refs.reviewForm.querySelector(".custom-checkbox");

  errorElements.forEach((el) => (el.textContent = ""));
  inputs.forEach((input) => input.classList.remove("input-error"));
  if (customBox) customBox.style.borderColor = "";
};

const toggleMenu = () => {
  refs.menu.classList.toggle("is-hidden");
  updateScrollLock();
};

const toggleModal = () => {
  const isHidden = refs.backdrop.classList.toggle("is-hidden");
  updateScrollLock();

  if (!isHidden) {
    window.addEventListener("keydown", onEscKeyPress);
  } else {
    window.removeEventListener("keydown", onEscKeyPress);
    refs.reviewForm.reset();
    clearErrors();
  }
};

const onBackdropClick = (event) => {
  if (event.target === event.currentTarget) toggleModal();
};

const onEscKeyPress = (event) => {
  if (event.code === "Escape") toggleModal();
};

const onLinkClick = () => {
  if (!refs.menu.classList.contains("is-hidden")) toggleMenu();
};

const onInputChange = (event) => {
  const input = event.target;
  if (
    input.classList.contains("form-input") ||
    input.classList.contains("form-textarea")
  ) {
    input.classList.remove("input-error");
    const errorMsg = input.parentNode.querySelector(".error-message");
    if (errorMsg) errorMsg.textContent = "";
  }
};

const onCheckboxChange = (event) => {
  if (event.target.name === "privacy-policy" && event.target.checked) {
    const customBox = refs.reviewForm.querySelector(".custom-checkbox");
    const checkboxErrorMsg = refs.reviewForm.querySelector(
      ".checkbox-field .error-message",
    );
    if (customBox) customBox.style.borderColor = "";
    if (checkboxErrorMsg) checkboxErrorMsg.textContent = "";
  }
};

const onFormSubmit = (event) => {
  event.preventDefault();
  clearErrors();

  const formData = new FormData(event.currentTarget);
  let hasError = false;

  // Валідація текстових полів
  formData.forEach((value, key) => {
    const input = event.currentTarget.querySelector(`[name="${key}"]`);
    const errorMsg = input.parentNode.querySelector(".error-message");

    if (!value.trim()) {
      hasError = true;
      input.classList.add("input-error");
      if (errorMsg) errorMsg.textContent = "This field is required";
    } else if (input.type === "email" && !value.includes("@")) {
      hasError = true;
      input.classList.add("input-error");
      if (errorMsg) errorMsg.textContent = "Please enter a valid email address";
    } else if (input.type === "tel") {
      const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/;
      if (!phoneRegex.test(value.trim())) {
        hasError = true;
        input.classList.add("input-error");
        if (errorMsg) errorMsg.textContent = "Invalid phone format";
      }
    }
  });

  const privacyCheckbox = event.currentTarget.querySelector(
    'input[name="privacy-policy"]',
  );
  if (privacyCheckbox && !privacyCheckbox.checked) {
    hasError = true;
    const customBox = event.currentTarget.querySelector(".custom-checkbox");
    const checkboxErrorMsg = event.currentTarget.querySelector(
      ".checkbox-field .error-message",
    );
    if (customBox) customBox.style.borderColor = "#ed3333";
    if (checkboxErrorMsg)
      checkboxErrorMsg.textContent = "You must accept the terms";
  }

  if (hasError) return;

  console.log("Form Submitted:", Object.fromEntries(formData));
  alert("Success! Thank you for your review.");
  toggleModal();
};

refs.openMenuBtn?.addEventListener("click", toggleMenu);
refs.closeMenuBtn?.addEventListener("click", toggleMenu);
refs.allMenuLinks.forEach((link) =>
  link.addEventListener("click", onLinkClick),
);

refs.openModalBtn?.addEventListener("click", toggleModal);
refs.closeModalBtn?.addEventListener("click", toggleModal);
refs.backdrop?.addEventListener("click", onBackdropClick);

refs.reviewForm?.addEventListener("input", onInputChange);
refs.reviewForm?.addEventListener("change", onCheckboxChange);
refs.reviewForm?.addEventListener("submit", onFormSubmit);
