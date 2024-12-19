let massiv = [];
let maqsad = null;
const massivKonteyner = document.getElementById("array");
const boshlashTugmasi = document.getElementById("startBtn");
const tuzishTugmasi = document.getElementById("tuzishBtn");
const massivInput = document.getElementById("massivInput");
const maqsadInput = document.getElementById("maqsadInput");


function massivniChizish() {
  massivKonteyner.innerHTML = "";
  massiv.forEach((qiymat, indeks) => {
    const quti = document.createElement("div");
    quti.className = "box default";
    quti.textContent = qiymat;
    quti.id = `quti-${indeks}`;
    massivKonteyner.appendChild(quti);
    massivInput.value=""
    maqsadInput.value=""
  });
}


function massivniTuzish() {
  const massivString = massivInput.value;
  maqsad = parseInt(maqsadInput.value, 10);

  if (!massivString || isNaN(maqsad)) {
    alert("Massiv va maqsadli qiymatni to'g'ri kiriting!");
    return;
  }

  massiv = massivString
    .split(",")
    .map((qiymat) => parseInt(qiymat.trim(), 10))
    .sort((a, b) => a - b);

  massivniChizish();

 
  boshlashTugmasi.disabled = false;
}


function jumpQidiruv(massiv, maqsad) {
  const n = massiv.length;
  const qadam = Math.floor(Math.sqrt(n));
  let oldingi = 0;

  function belgilash(indeks, classNomi) {
    const quti = document.getElementById(`quti-${indeks}`);
    quti.className = `box ${classNomi}`;
  }

  function qidirish() {
    if (oldingi >= n) {
      alert("Element topilmadi!");
      return;
    }

    const keyingi = Math.min(oldingi + qadam, n) - 1;
    belgilash(keyingi, "active");

    setTimeout(() => {
      if (massiv[keyingi] >= maqsad) {
        belgilash(keyingi, "checked");
        linearQidiruv(oldingi, keyingi);
      } else {
        belgilash(keyingi, "checked");
        oldingi += qadam;
        setTimeout(qidirish, 1000);
      }
    }, 1000);
  }

  function linearQidiruv(boshlangich, tugash) {
    function liniya(indeks) {
      if (indeks > tugash) {
        alert("Element topilmadi!");
        return;
      }
      belgilash(indeks, "active");
      setTimeout(() => {
        if (massiv[indeks] === maqsad) {
          belgilash(indeks, "found");
        } else {
          belgilash(indeks, "checked");
          setTimeout(() => liniya(indeks + 1), 1000);
        }
      }, 1000);
    }

    liniya(boshlangich);
  }

  qidirish();
}


function jumpQidiruvniBoshlash() {
  boshlashTugmasi.disabled = true;
  jumpQidiruv(massiv, maqsad);
}
