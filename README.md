# MSWORD_TEXT_EDITOR_INSIMPLEWAY 
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/MSWORD_TEXT_EDITOR_INSIMPLEWAY/
Step 1: Understand the buttons. Some buttons can be highlighted when clicked, while others can't, like "link" and "undo" buttons, which are one-time operations.

Step 2: Organize buttons into groups, such as highlighted buttons and un-highlighted buttons. Colors and dropdowns for different headings are the remaining components.

Step 3: Assign classes and IDs to the buttons to categorize them. Highlighted buttons share the same class, and others have unique classes or IDs.

Step 4: Implement the highlighting logic. When a button is clicked, highlight it while un-highlighting others. Check your JavaScript code for this logic.

Step 5: The core logic relies on document.execCommand, which executes commands on the current document, selection, or given range. It takes three parameters: commandId, showUI, and value.

commandId: Represents the ID you've assigned to buttons, indicating what action they perform (e.g., "italic", "underline", "bold").

showUI: Display the user interface, usually set to false.

value: Value associated with the command, relevant for buttons like color changers, heading modifiers, and font size changers.

Here's how you pass the ID to document.execCommand:

const modifyText = (command, defaultUi, value) => {

    document.execCommand(command, defaultUi, value);
    
}

// For buttons that don't need a value

optionButton.forEach(button => {

    button.addEventListener("click", () => {
    
        modifyText(button.id, false, null);
	
    });
})
For buttons like color changers, heading modifiers, font name selectors, and font size changers, you pass down a specific class (e.g., advancedOptionButton) to distinguish them.

The onload event fires when the browser is refreshed. Functions assigned to this event run once the browser loads.

In conclusion, your approach is well-structured and involves categorizing buttons, using IDs and classes to differentiate them, and utilizing document.execCommand to execute the desired actions. Remember to understand each step and break it down. This logical understanding will help you work effectively and efficiently.


