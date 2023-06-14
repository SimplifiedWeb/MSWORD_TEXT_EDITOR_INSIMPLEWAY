# MSWORD_TEXT_EDITOR_INSIMPLEWAY
Let me explain You how is the working and logic.
Open the javascript and html file one side, and understand it what i said in this description.

first open the project in browser and whaterver the formatting buttons you see in their that manipulate the text
whatever you right in the field. That all the Buttons and Colors have the id and class that they are getting fired.
So remember whaterver the buttons are their have the class and id.
Use these attribute contenteditable="true" browser allows you write or typed on the viewport whatever the container you pass this attribute on. 

So first think,
 Step - 1: What is the buttons when we click get's highlighted. 
	And what is the button that can't get highlights when we click. so like link, undo button can't get highlighted bcz it is one time operations.
 Step - 2: When you analyze everything through buttons. Then think about how you organize them group wise like highlighted buttons and Un-highlighted
buttons. The other this lefts only Colors and dropdowns that show different heading.

 Step - 3: When you anlyzed everything than, give them a classes and id's like highlighted buttons all have same classes to identfy in one group 
and other should be same as follow. Check my javascript file. You'll understand.

 Step - 4: after doing all that, passit down to the highligh function and check for highligh one at a time and make others unhighlighted.
Check the code you'll understand better.

 Step - 5: So the main logic was the document.execCommand - Executes a command on the current document, current selection, or the given range.
takes three things (commandId, showUI, value)
 commandId — String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.

 showUI — Display the user interface, defaults to false.

 value — Value to assign.

so the commadId is the id that i'm talking about in the start a unique id that tells what this button do when the user click
like button that change the normal text into italic. so we use id = 'italic'
     button that underline the text so we use id = "underline"
     button that make text bold so we use id = "bold"
     button that make text superscript we use id = "superscript"

And the remaining will be same. And the color was simple we use input type = "color" that give color and use some css to make it look more beautiful
and id for color changer was id="foreColor" for font Text and id="backColor" for text background color.

So AFTER DOING ALL THIS, PASS IT DOWN THE ID IN THE document.execCommand THAT TAKE THE FIRST ARGUMENT WAS commandId, PUT THE BUTTONS ID IN THERE.
IT AUTOMATICALLY EXECUTES AND GIVES OUTPUTS.

//HOW WE GONNA PASS DOWN THE ID IN THE commandId ?

const modifyText = (command, defaultUi, value) =>{
//execCommand executes command on selected value

    document.execCommand(command, defaultUi, value);

}

//For basic operations which don't need value and parameters
optionButton.forEach(button =>{
    button.addEventListener("click", () =>{
        modifyText(button.id, false, null)
    })
})

THIS WAY WE PASS IT DOWN THE ID. optionButtons was the group that doesn't required the value. 
for example colorChanger, different heading, different font names, different font sized have different values so their different.
for that we use pass down different class name like i used advancedOptionButton class. check the javascript code.

So that's how we do this. It's not that tough just understand what we gonna do step by step, don't understand everything directly understand it step by step.
The onload was just loads when the browser get refreshed immediatly, so whatever the function we pass down it get's fired once the browser get loads.

Hope this Explanation helps,, Think and understand the logic.


