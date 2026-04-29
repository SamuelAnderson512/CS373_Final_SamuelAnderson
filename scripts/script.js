const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

let colorIndex = 0;

setInterval(() => {
  const divs = document.querySelectorAll("div");

  divs.forEach(div => {
    div.style.color = colors[colorIndex];
  });

  colorIndex = (colorIndex + 1) % colors.length;
}, 500); // change color every 500ms