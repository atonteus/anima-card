

const card = document.querySelector(".card");
const container = document.querySelector(".container");


const title = document.querySelector(".title");
const plant = document.querySelector(".plant img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");



container.addEventListener("mousemove", (e) => {
  let xPos = (window.innerWidth / 2 - e.pageX) / 25;
  let yPos = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xPos}deg) rotateX(${yPos}deg)`;
});


container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
 
  
  title.style.transform = "translateZ(150px)";
  plant.style.transform = "translateZ(200px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});


container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;


  
  title.style.transform = "translateZ(0px)";
  plant.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
