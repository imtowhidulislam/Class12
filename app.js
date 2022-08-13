const barsCross = document.querySelector(".bars").firstElementChild;
console.log(barsCross);
barsCross.style.cursor = "pointer";
barsCross.addEventListener("click", () => {
  console.log("button");
  if (barsCross.classList.contains("fa-bars")) {
    console.log("cross");
    barsCross.classList.add("fa-multiply");
    barsCross.classList.remove("fa-bars");
  } else {
    barsCross.classList.add("fa-bars");
    barsCross.classList.remove("fa-multiply");
  }
});
