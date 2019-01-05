let slideIndex = 1;
showDivs(slideIndex);

const l = document.getElementById('dateLeft');
const r = document.getElementById('dateRight');

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("dateDivider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

l.addEventListener("click", plusDivs(-1));
r.addEventListener("click", plusDivs(1));
