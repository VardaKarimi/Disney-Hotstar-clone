let movies = [
  {
    name: "Doctor Strange in the Multiverse of the Madness",
    des:
      "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses.to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    image: "./images/carousel_Strange1.jpg"
  },
  {
    name: " falcon and the winter soldier",
    des:
      " It is about two Marvel superheroes, namesakes Falcon and Winter Soldier, as they team up on a globe-trotting thriller to take down an old enemy, Baron Zemo",
    image: "./images/carousel_falcon1.jpg"
  },
  {
    name: "Wanda vision ",
    des:
      "In the famous House of M storyline on which this show is very loosely based, Wanda creates an alternate reality where Vision and the twins are alive, and they all live together.",
    image: "./images/carousel_wanda1.jpg"
  },
  {
    name: "Loki ",
    des:
      "An alternate version of Loki is brought to the mysterious Time Variance Authority (TVA), a bureaucratic organization that exists outside of time and space and monitors the timeline.",
    image: "./images/carousel_loki1.jpg"
  },
  {
    name: "Luca",
    des:
      "Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
    image: "./images/carousel_luca.jpg"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all the elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting element classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
      }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card Sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let prebtns = [...document.querySelectorAll(".pre-btn")];
let nxtbtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nxtbtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  prebtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
