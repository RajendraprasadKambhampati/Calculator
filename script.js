const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    const buttonId = item.id;
    
    if (buttonId === "clear") {
      display.innerText = "";
    } else if (buttonId === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (buttonId === "equal") {
      if (display.innerText.trim() !== "") {
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
          setTimeout(() => (display.innerText = ""), 1500);
        }
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 1500);
      }
    } else {
      display.innerText += buttonId;
    }
  });
});

themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
});
