const box = document.querySelector(".box");
let path = anime.path(".svgPath");
const text = "Magic text that types itself";
const letters = text.split("");
const sentence = document.querySelector(".text-container");

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
  keyframes: [{ rotate: "0deg" }, { rotate: "180deg" }, { rotate: "360deg" }],
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

anime({
  targets: ".movingBox",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 2000,
  loop: true,
});

let circle_animations = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
  loop: true,
});

circle_animations
  .add({
    targets: ".circle-one",
    translateX: -250,
  })
  .add({
    targets: ".circle-two",
    translateY: -250,
  })
  .add({
    targets: ".circle-three",
    translateX: 250,
  });

letters.forEach((letter) => {
  let span = document.createElement("span");
  span.innerHTML = letter === " " ? "&nbsp;" : letter;
  span.classList.add("letter");
  sentence.appendChild(span);
});

anime({
  targets: ".letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  delay: anime.stagger(100),
  duration: 100,
});

const userText = document.querySelector("users-input");
const textContainer = document.querySelector("typewriter-text");
