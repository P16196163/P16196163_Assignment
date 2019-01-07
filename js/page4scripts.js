const filterSelect = document.getElementById("filterButton");
const filters = document.getElementById("filters");
const dateFilter = document.getElementById("filterDate");
const stageFilter = document.getElementById("filterStage");
const teamFilter = document.getElementById("filterTeam");

function showFilters() {
  if (filters.style.display === "none") {
    filters.style.display = "block";
  } else {
    filters.style.display = "none";
  }
}

function filterByDate() {
  if (dateSelector.style.display !== "none") {
    filters.style.display = "none";
  } else {
    dateSelector.style.display = "flex";
    filters.style.display = "none";
    stageSelect.style.display ="none";
    dateIndex = 4;
    showDate(dateIndex);
  }
}

function filterByStage() {
  if (stageSelector.style.display === "none" || dateSelector.style.display !== "none") {
    dateSelector.style.display = "none";
    filters.style.display = "none";
    stageSelect.style.display ="block";
  }
  else {
    console.log("stage ass");
    filters.style.display = "none";
  }
}

function filterByTeam() {
  if (dateSelector.style.display !== "none" || stageSelect.style.display !== "none") {
    dateSelector.style.display = "none";
    stageSelect.style.display = "none";
    filters.style.display = "none";
  } else {
    console.log("team ass");
    filters.style.display = "none";
  }
}

filterSelect.addEventListener("click", showFilters);
dateFilter.addEventListener("click", filterByDate);
stageFilter.addEventListener("click", filterByStage);
teamFilter.addEventListener("click", filterByTeam);

const dateSelector = document.getElementById("dateSelect");
const l = document.getElementById("dateLeft");
const r = document.getElementById("dateRight");

const x = document.getElementsByClassName("dateDivider");
let dateIndex = 4;
showDate(dateIndex);

function plusDate() {
  showDate(dateIndex += 1);
}

function prevDate() {
  showDate(dateIndex -= 1);
}

function showDate(n) {
  let i;
  if (n >= x.length) {
    dateIndex = x.length;
  }
  if (n < 1) {
    dateIndex = 1;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[dateIndex-1].style.display = "block";
}

l.addEventListener("click", prevDate);
r.addEventListener("click", plusDate);

const stageSelector = document.getElementById("stageSelect");
const qual = document.getElementById("stageQual");
const pool = document.getElementById("stagePool");
const ko = document.getElementById("stageKnockout");

function showQual() {
  dateIndex = 1;
  showDate(dateIndex);
  let i;
  for (i = 0; i < 3; i++) {
    x[i].style.display = "block";
  }
}

function showPool(){
  let i;
  for (i = 4; i < 23; i++) {
    x[i].style.display = "block";
  }
  for (i = 0; i < 3; i++) {
    x[i].style.display = "none";
  }
  for (i = 23; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function showKO() {
  console.log("ko ASS" + (x.length - 6));
  let i;
  for (i = 23; i < x.length; i++) {
    x[i].style.display = "block";
  }
  for (i = 0; i < 23; i++) {
    x[i].style.display = "none";
  }
}

qual.addEventListener("click", showQual);
pool.addEventListener("click", showPool);
ko.addEventListener("click", showKO);
