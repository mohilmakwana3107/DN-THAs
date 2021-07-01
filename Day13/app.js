const qTxt = document.getElementById("q");
const qAuth = document.getElementById("a");
const btn = document.getElementById("btn");

function rndmQ() {
    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            qTxt.textContent = data.content;
            qAuth.textContent = `-- ${data.author}`;
        })

}

rndmQ();

btn.addEventListener("click", () => {
    rndmQ();
})