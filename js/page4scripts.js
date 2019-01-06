let dateIndex = 4;
showDivs(dateIndex);

const l = document.getElementById("dateLeft");
const r = document.getElementById("dateRight");

function plusDivs() {
  showDivs(dateIndex += 1);
}

function prevDivs() {
  showDivs(dateIndex -= 1);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("dateDivider");
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

l.addEventListener("click", prevDivs);
r.addEventListener("click", plusDivs);
