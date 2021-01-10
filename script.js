var reasons = ["",
"Shreyas Thuppad",
"Annapurna Setty(Mother)", 
"Satish Thuppad(Father)", 
"", 
"Aditya R Shankar(Cousin Brother)", 
"Setty Dakshayani(Aunt)", 
"Ravi Shankar(Uncle)", 
"", 
"Chetty Nirmala Veerappa(Grandmother)", 
"Veerappa Chetty(Grangfather)", 
"", 
"", 
"Ridhyaa Thuppad(Cousin Sister)", 
"Jyothi BM (Aunt)", 
"Nandish Thuppd", 
"", 
"Suvarna Thuppad (Grandmother)", 
"My Cousins",
"Father's Family",
"Mother's Sister's",

"Hitvik(Cousin Brother)",
"Avani(Cousin Sister)",
"Ashwika(Cousin Sister,Avani's Sister)",
"Adarsh(Cousin Brother)",
"Mama"];
var images = ["",
"https://www.linkpicture.com/q/Shreyas_1.png","https://www.linkpicture.com/q/Amma_1.png", "https://www.linkpicture.com/q/Appa_1.png", "https://www.linkpicture.com/q/Amma-Me-Appa.jpg", "https://www.linkpicture.com/q/Adi_3.png", "https://www.linkpicture.com/q/Chick.png", "https://www.linkpicture.com/q/Appa.jpg", "https://www.linkpicture.com/q/Chick_Chickappa_1.jpg", "https://www.linkpicture.com/q/Ajji.jpg", "https://www.linkpicture.com/q/Thatha.jpg", "https://www.linkpicture.com/q/Ajji_Thatha_1.jpg","", "https://www.linkpicture.com/q/Akka_1.png", "https://www.linkpicture.com/q/Dodamma_1.png", "https://www.linkpicture.com/q/Dodappa.jpg", "https://www.linkpicture.com/q/Dodamma_Doddappa.png", "https://www.linkpicture.com/q/Ajji2.jpg","https://www.linkpicture.com/q/kids_1.png","https://www.linkpicture.com/q/Appa_Family_1.png","https://www.linkpicture.com/q/Amma-sis_1.png","https://www.linkpicture.com/q/Hitu_1.jpg","https://www.linkpicture.com/q/Avani_1.jpg","https://www.linkpicture.com/q/Ashwika.jpg","https://www.linkpicture.com/q/Adarsh_1.jpg","https://www.linkpicture.com/q/Mama_2.jpg"];
var i = 0;

function nextslide() {
    i++;
    if (i>reasons.length-1)
    {
        i=reasons.length-1;
    }
    
    document.getElementById("Nametext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    console.log(reasons)
    document.getElementById("audio").play();
}
function prevslide() {
    
    i--;
    if (i<1)
    {
        i=1;
    }
    document.getElementById("Nametext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
}