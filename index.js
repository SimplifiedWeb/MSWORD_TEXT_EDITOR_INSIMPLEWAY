let optionButton = document.querySelectorAll(".option-button");
console.log(optionButton);
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButton = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//list of fontlist
let fontlist = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

// console.log(scriptButtons)

///Creating the Initializer Intial Settings

const intializer = () => {
  // console.log("Hello yes i was fired")
  //funtion calls for highlighiting buttons
  //no highlights for link, unlink, redo, undo since they are one time operations
  // console.log("dsklfh")
  highlighter(alignButtons, true);
  highlighter(formatButtons, false);
  highlighter(spacingButton, true);
  highlighter(scriptButtons, true);
  // true means only one button should be highlight and other would be normal

  //create options for font Names

  //Adding fontList
  fontlist.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  //Adding fontSize which is maximum upto 7
  for (var i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  //default fontsize is 3
  fontSizeRef.value = 3;
};

//Main Logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected value

  document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value and parameters

optionButton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

//option that require values or parameters (e.g colors, fonts)

advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

//links

linkButton.addEventListener("click", () => {
  let userLink = prompt(`Enter a Correct Url like this'${www.google.com}`);

  userLink = "http://" + userLink;
  modifyText(linkButton.id, false, userLink);
});

const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //neeedsRemoval = true means only one button should be highlight and other would be normal

      if (needsRemoval) {
        let alreadyActive = false;

        //if curently clicked buton is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        //Removal highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //hightlight clicked button
          // console.log("dslfh")
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = intializer();
