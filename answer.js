const answers = {
1: "1. B = 36",
2: "2. A = YES (EAN = 36)",
3: "3. C = 36",
4: "4. A = YES",
5: "5. B = 36",
6: "6. A = YES",
7: "7. B = 30",
8: "8. B = NO",
9: "9. B = 35",
10: "10. B = NO",
11: "11. C = 38",
12: "12. C = SOMETIMES",
13: "13. C = 36",
14: "14. B = NO",
15: "15. C = 38",
16: "16. B = NO",
17: "17. C = 36",
18: "18. B = NO",
19: "19. C = 38",
20: "20. B = NO"
};

function showAnswer() {
  const num = document.getElementById("aNumber").value;
  const display = document.getElementById("answerText");

  if (!answers[num]) {
    display.innerText = "❌ Enter 1–20!";
    return;
  }

  display.innerText = answers[num];
}
// 🌊 ripple effect for button clicks
const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  const circle = document.createElement("span");
  circle.classList.add("ripple");

  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - btn.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - btn.offsetTop - radius}px`;

  const ripple = btn.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  btn.appendChild(circle);
});
