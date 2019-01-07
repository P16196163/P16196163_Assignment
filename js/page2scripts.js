const venueSelector = document.getElementById("venueSelect");
const l = document.getElementById("venueLeft");
const r = document.getElementById("venueRight");

const x = document.getElementsByClassName("venue");
let venueIndex = 1;
showVenue(venueIndex);

function plusVenue() {
  showVenue(venueIndex += 1);
}

function prevVenue() {
  showVenue(venueIndex -= 1);
}

function showVenue(n) {
  let i;
  if (n > x.length) {
    venueIndex = 1;
  }
  if (n < 1) {
    venueIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[venueIndex-1].style.display = "block";
}

l.addEventListener("click", prevVenue);
r.addEventListener("click", plusVenue);
