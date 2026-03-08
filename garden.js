
const gardenGrid=document.getElementById('gardenGrid');

const savedEntries=localStorage.getItem("entries");

let entryArr;

if(savedEntries){

    entryArr=JSON.parse(savedEntries);
    
}
else{
    entryArr=[];
}

entryArr.forEach(entry => {

    const card= document.createElement("div");
    card.classList.add("garden-card");

    let moodEmoji = "";

    if(entry.mood === "Happy") moodEmoji = "😊";
    else if(entry.mood === "Sad") moodEmoji = "😢";
    else if(entry.mood === "Angry") moodEmoji = "😡";
    else if(entry.mood === "Calm") moodEmoji = "😌";
    else if(entry.mood === "Tired") moodEmoji = "😴";
    else if(entry.mood === "Creative") moodEmoji = "🎨";
    
    card.innerHTML= `
    <p>${entry.activities}</p>
    <p>${moodEmoji}${entry.mood}</p>
    <p class="date">${entry.date}</p>
    
    `;

gardenGrid.appendChild(card);
    
});

