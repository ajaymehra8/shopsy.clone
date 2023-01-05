function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector("button").textContent="Download";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
