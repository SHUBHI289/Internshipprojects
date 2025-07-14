const quotes =[
    "Believe in yourself and all that You are .",

    "Success starts with self discipline."
];

const colors = [" #d5912bff", "#1eb323ff", "#4a3376ff", "#b3e5fc" , "#f8bbd0",
"#754ac4ff","#a7d2e6ff", "#c56083ff" ];

function showQuote(){
    const randomQuote=
    quotes[Math.floor(Math.random()*quotes.length)];
    const randomcolor =
    colors[Math.floor(Math.random()* colors.length)];

    document.getElementById("quote").textContent=randomQuote;

    document.querySelector(".card").style.backgroundColor =randomcolor;

}