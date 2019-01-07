const qual = document.getElementById('qualHead');
const poolStage = document.getElementById('rwcHead');

const repe = document.getElementById('repechage');

const pools = document.getElementById("pools");
const poolA = document.getElementById("headA");
const poolB = document.getElementById("headB");
const poolC = document.getElementById("headC");
const poolD = document.getElementById("headD");

const tableA = document.getElementById("tableA");
const tableB = document.getElementById("tableB");
const tableC = document.getElementById("tableC");
const tableD = document.getElementById("tableD");

function showRepe() {
  if (repe.style.display === "none") {
    repe.style.display = "block";
  } else {
    repe.style.display = "none";
  }
}

function showPools() {
  if (pools.style.display === "none") {
    pools.style.display = "block";
  }
  else {
    pools.style.display = "none";
    tableA.style.display = "none";
    tableB.style.display = "none";
    tableC.style.display = "none";
    tableD.style.display = "none";
  }
}

function showPoolA() {
  if (tableA.style.display === "none") {
    tableA.style.display = "block";
  }
  else {
    tableA.style.display = "none";
  }
}

function showPoolB() {
  if (tableB.style.display === "none") {
    tableB.style.display = "block";
  }
  else {
    tableB.style.display = "none";
  }
}

function showPoolC() {
  if (tableC.style.display === "none") {
    tableC.style.display = "block";
  }
  else {
    tableC.style.display = "none";
  }
}

function showPoolD() {
  if (tableD.style.display === "none") {
    tableD.style.display = "block";
  }
  else {
    tableD.style.display = "none";
  }
}


qual.addEventListener("click", showRepe);
poolStage.addEventListener("click", showPools);
poolB.addEventListener("click", showPoolB);
poolC.addEventListener("click", showPoolC);
poolD.addEventListener("click", showPoolD);
poolA.addEventListener("click", showPoolA);
