const ex1 = document.getElementById("ex1_button");
const ex1_text = document.getElementById("ex1_content");

ex1.addEventListener("click", function () {
  const tresc = Array.from({ length: 10 }, (_, i) => i).join(", ");

  ex1_text.textContent = tresc;
});

const ex2 = document.getElementById("ex2_text");
const ex2_text = document.getElementById("ex2_content");

ex2.addEventListener("input", function (e) {
  const value = e.target.value;

  const hasLetters = /[a-zA-Z]/.test(value);
  const hasSpecialChars = /[^a-zA-Z0-9]/.test(value);

  if (hasLetters) {
    ex2_text.textContent = "Numer nie może zawierać liter";
  } else if (hasSpecialChars) {
    ex2_text.textContent = "Numer nie może zawierać znaków specjalnych";
  } else if (value.length !== 9) {
    ex2_text.textContent = "Długość numeru musi być równa 9";
  } else {
    ex2_text.textContent = "Numer telefonu jest poprawny";
  }
});
