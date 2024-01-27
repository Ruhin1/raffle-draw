window.onload = () => {
  const inp = document.getElementById("inp");
  const nameList = document.getElementById("name-list");
  const display = document.getElementById("display");
  const giveATray = document.getElementById("give-a-tray");
  const insartName = document.getElementById("insart-names");
  const partiCepentName = [];
  let noNames = document.getElementById("no-names");
  let fristPosion = document.getElementById("frist-posion");
  let secondPosion = document.getElementById("second-posion");
  let thirdPosion = document.getElementById("third-posion");

  //Extract text from text area And store it to an array.
  try {
    insartName.addEventListener("click", function () {
      let newNames = inp.value.split(", ");
      if (newNames[0] !== "") {
        newNames.forEach((name) => {
          partiCepentName.push(name);
          let item = createListItem(name);
          nameList.appendChild(item);
          inp.value = "";
          noNames.remove();
        });
        toastr.success("All Name Insart Sussessfully.", "Inserted", {
          timeOut: 4000,
          progressBar: true,
        });
      }else{
        toastr.error("You didn't give a name.", "Empty", {timeOut: 4000,progressBar: true,});
      }
    });
  } catch (e) {
    console.log(e);
    toastr.warning("You have spammed.", "Worning", {timeOut: 4000,progressBar: true,});  
  }

  // its main functaion its work maltipall works.
  try {
    giveATray.addEventListener("click", function () {
      if (partiCepentName.length !== 0) {
        let shuffelNames = shuffel(partiCepentName);
        for (let i = 1; i < shuffelNames.length; i++) {
          (function (i, count) {
            setTimeout(() => {
              let rend = Math.floor(Math.random() * shuffelNames.length);
              display.innerHTML = shuffelNames[rend];
  
              // Rander this name in li tag extread from text ariea. pike a random winerr name in array, remove him this name this array.
              if (count == shuffelNames.length - 1) {
                // Display winer name.
                if (!fristPosion.innerHTML) {
                  fristPosion.innerHTML = " " + shuffelNames[rend];
                  let ind = partiCepentName.indexOf(shuffelNames[rend]);
                  insartName.disabled = true;
                  partiCepentName.splice(ind, 1);
                } else if (!secondPosion.innerHTML) {
                  secondPosion.innerHTML = " " + shuffelNames[rend];
                  let ind = partiCepentName.indexOf(shuffelNames[rend]);
                  partiCepentName.splice(ind, 1);
                } else if (!thirdPosion.innerHTML) {
                  thirdPosion.innerHTML = " " + shuffelNames[rend];
                  let ind = partiCepentName.indexOf(shuffelNames[rend]);
                  partiCepentName.splice(ind, 1);
                  giveATray.disabled = true;
                }
              }
            }, i);
          })(i * 100, i);
        }
      } else {
        toastr.error("You didn't give a name.", "Empty", {
          timeOut: 4000,
          progressBar: true,
        });
      }
    });
  } catch (e) {
    console.log(e);
    toastr.warning("You have spammed.", "Worning", {timeOut: 4000,progressBar: true,});
  }
};

// Create html li tag in javascript.
try {
  function createListItem(names) {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = names;
    return li;
  } 
} catch (e) {
  console.log(e);
  toastr.warning("You have spammed.", "Worning", {timeOut: 4000,progressBar: true,});
}

// Shuffel the array for batter result using algoridom src https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/.
try {
  function shuffel(arr) {
    let shuffeldArray = [...arr];
    for (let i = shuffeldArray.length - 1; i > 0; i--) {
      let rend = Math.floor(Math.random() * (i + 1));
      let temp = shuffeldArray[rend];
      shuffeldArray[rend] = shuffeldArray[i];
      shuffeldArray[i] = temp;
      return shuffeldArray;
    }
  } 
} catch (e) {
  console.log(e);
  toastr.warning("You have spammed.", "Worning", {timeOut: 4000,progressBar: true,});
}


