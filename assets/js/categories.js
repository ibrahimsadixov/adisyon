const category = document.querySelectorAll(".category");
const mungK = document.getElementById("mungK")
window.onload=()=>{

}
category.forEach(element => {
    mungK.classList.add("categoryActive")
  element.addEventListener("click", () => {
    category.forEach(item => {
      if (item !== element) {
        item.classList.remove("categoryActive");
      }
    });
    element.classList.toggle("categoryActive");
  });
});
