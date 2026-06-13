const metals = {
  Fe: 26,
  Cu: 29,
  Co: 27,
  Zn: 30,
  Ni: 28,
  Pt: 78,
  Pd: 46,
  Ag: 47
};

// ligand electron values based on YOUR question set
function getLigandElectrons(qNum) {
  qNum = parseInt(qNum);

  if ([1,2,15,16,19,20,7,8].includes(qNum)) return 12; // NH3 (6 ligands × 2e)
  if ([3,4,9,10,13,14,17,18].includes(qNum)) return 12; // CN (6 ligands × 2e)
  if ([5,6,11,12].includes(qNum)) return 8; // CO (4 ligands × 2e)

  return 0;
}

// oxidation states based on your complexes
function getOxidationState(qNum) {
  qNum = parseInt(qNum);

  if ([1,2,15,16,19,20].includes(qNum)) return 3;   // +3 complexes
  if ([7,8].includes(qNum)) return 2;               // +2 complexes
  if ([3,4,9,10,13,14,17,18].includes(qNum)) return -4; // anionic complexes
  if ([5,6,11,12].includes(qNum)) return 0;         // neutral CO complexes

  return 0;
}

// 🔥 NEW BUTTON LOGIC
document.getElementById("btn").addEventListener("click", function (e) {

  const qNum = document.getElementById("aNumber").value;
  const display = document.getElementById("answerText");

  // 🎣 YOU NEED THIS NEW DROPDOWN IN HTML
  const metal = document.getElementById("metal")?.value;

  if (!qNum || !metal) {
    display.innerText = "❌ Enter question number AND select metal!";
    return;
  }

  const Z = metals[metal];
  const OS = getOxidationState(qNum);
  const LE = getLigandElectrons(qNum);

  const EAN = Z - OS + LE;

  display.innerHTML = `
    🌊 <b>Complex:</b> [${metal} complex] <br><br>

    🧪 EAN = Z - oxidation state + ligand electrons <br>
    🧪 EAN = ${Z} - (${OS}) + (${LE}) <br><br>

    🎣 <b>Final Answer = ${EAN}</b>
  `;

  // ripple effect (KEEP YOUR ORIGINAL)
  const circle = document.createElement("span");
  circle.classList.add("ripple");

  const diameter = Math.max(btn.clientWidth, btn.clientHeight);

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.offsetX}px`;
  circle.style.top = `${e.offsetY}px`;

  const ripple = btn.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  btn.appendChild(circle);

  btn.style.transform = "translateY(3px)";
  setTimeout(() => {
    btn.style.transform = "translateY(0px)";
  }, 150);

});
