const ex1 = document.getElementById("ex1_button");
const ex1_text = document.getElementById("ex1_content");

ex1.addEventListener("click", function () {
  const tresc = Array.from({ length: 10 }, (_, i) => i).join(", ");

  ex1_text.textContent = tresc;
});
