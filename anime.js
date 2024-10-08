const box = document.querySelector(".box");

box.addEventListener("click", function () {
  anime({
    targets: ".box",
    translateX: 1500,
    easing: "easeInOutExpo",
    backgroundColor: "#FFF",
  });
});

anime({
  targets: ".spinner",
  keyframes: [
    { rotate: "0deg", backgroundColor: "green" },
    { backgroundColor: "blue" },
    { rotate: "180deg", backgroundColor: "red" },
    { backgroundColor: "yellow" },
    { rotate: "360deg", backgroundColor: "green" },
  ],
  duration: 500,
  easing: "linear",
  loop: true,
});

anime({
  targets: ".btn",
  scale: [
    { value: 1, duration: 500 },
    { value: 1.5, duration: 500 },
  ],
  easing: "easeInOutQuad",
  loop: true,
  direction: "alternate",
});

anime({
  targets: ".stars",
  translateY: 1500,
  duration: 10000,
  easing: "linear",
  loop: true,
});
