const labelToggle = document.querySelector(".box input[type=checkbox]");
const labelExpand = document.querySelector(".expand");
const labelShrink = document.querySelector(".shrink");
const wrapper = document.querySelector(".wrapper")
const wrapperTextarea = document.querySelector(".comment-field");

function changeLabel(event) {
  wrapper.classList.toggle("wrapper-expanded");
  wrapperTextarea.classList.toggle("textarea-expanded");
  
  if (event.target.checked) {
    labelShrink.style.display = "block";
    labelExpand.style.display = "none";
  } else {
    labelShrink.style.display = "none";
    labelExpand.style.display = "block";
  }
}

labelToggle.addEventListener('click', changeLabel)