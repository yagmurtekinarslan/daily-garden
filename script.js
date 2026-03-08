
const activityInput=document.getElementById('activities');
const moodSelect=document.getElementById('mood');
const selectDate=document.getElementById('date');
const addEntry=document.getElementById('addEntry');


function handleAddEntry(){
    
    const activities=activityInput.value;
    const mood=moodSelect.value;
    const date=selectDate.value;

    if(!activities || !mood || !date){
        alert("Please fill in all fields.");
        return;
    }

  const entry={
    activities:activities,
    mood:mood,
    date:date
  }

  const savedEntries= localStorage.getItem("entries");
  
  let entryArr;

  if(savedEntries){

     entryArr=JSON.parse(savedEntries);
  }
  else{
    entryArr=[];
  }

 

  entryArr.push(entry);

  localStorage.setItem("entries",JSON.stringify(entryArr));

  window.location.href = "garden.html";
  

}

addEntry.addEventListener('click',handleAddEntry);