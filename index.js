const ramenList = document.getElementById("ramen-list");
const ramenDetails = {
    image: document.querySelector("#ramen-details img"),
    name: document.getElementById("ramen-name"),
    restaurant: document.getElementById("ramen-restaurant"),
    rating: document.getElementById("ramen-rating"),
    comment: document.getElementById("ramen-comment")
};
const ramenForm = document.getElementById("ramen-form");
const addRamenBtn = document.getElementById("add-ramen");

let ramenData = [
    {
        name: "Gyukotsu Ramen",
        restaurant: "Ichiran",
        image: "./images/gyukotsu.jpg",
        rating: 9,
        comment: "Delicious!"
    },
    {
        name: "Naruto Ramen",
        restaurant: "Ippudo",
        image: "./images/naruto.jpg",
        rating: 8,
        comment: "Amazing!"
    },
    {
        name: "Shoyu Ramen",
        restaurant: "Ramen Nagi",
        image: "./images/shoyu.jpg",
        rating: 10,
        comment: "Craving for another plate!"
    },
    {
      name: "Nirvana Ramen",
      restaurant: "Ippudo",
      image: "./images/nirvana.jpg",
      rating: 7,
      comment: "Delicious!"
  },
  {
    name: "Kojiro Ramen",
    restaurant: "Ippudo",
    image: "./images/kojiro.jpg",
    rating: 9,
    comment: "Sweet!"
},
];

function renderRamenList() {
    ramenList.innerHTML = "";
    ramenData.forEach((ramen, index) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => showRamenDetails(index));
        ramenList.appendChild(img);
    });
}

function showRamenDetails(index) {
    const ramen = ramenData[index];
    ramenDetails.image.src = ramen.image;
    ramenDetails.name.textContent = ramen.name;
    ramenDetails.restaurant.textContent = ramen.restaurant;
    ramenDetails.rating.textContent = ramen.rating;
    ramenDetails.comment.textContent = ramen.comment;
}

addRamenBtn.addEventListener("click", () => {
    ramenForm.style.display = ramenForm.style.display === "none" ? "block" : "none";
});

ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
        name: document.getElementById("name").value,
        restaurant: document.getElementById("restaurant").value,
        image: document.getElementById("image").value,
        rating: document.getElementById("rating").value,
        comment: document.getElementById("comment").value
    };

    ramenData.push(newRamen);
    renderRamenList();
    ramenForm.reset();
    ramenForm.style.display = "none";
});

renderRamenList();
showRamenDetails(0);
