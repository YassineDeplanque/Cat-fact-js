fetch(`https://catfact.ninja/fact`)
.then((response) => response.json())
.then((newFact) => {
    fact = document.getElementById("fact").textContent = newFact.fact;
})


fetch(`https://api.thecatapi.com/v1/images/search`)
.then((response) => response.json())
.then((data) => {
    const catImageUrl = data[0].url;
    image = document.createElement("img");
    image.src = catImageUrl;
    imageArea = document.getElementById("catImage")
    imageArea.append(image);
})

function newFact() {
    fetch(`https://catfact.ninja/fact`)
.then((response) => response.json())
.then((newFact) => {
    fact = document.getElementById("fact").textContent = newFact.fact;
});

fetch(`https://api.thecatapi.com/v1/images/search`)
.then((response) => response.json())
.then((data) => {
    const catImageUrl = data[0].url;
    image = document.createElement("img");
    image.src = catImageUrl;
    imageArea = document.getElementById("catImage")
    imageArea.innerHTML ='';
    imageArea.append(image);
})
};
