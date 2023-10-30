const dynamicBoxes = document.querySelectorAll('.terminal');


// Loop through each dynamic box and populate with terminal content
dynamicBoxes.forEach((dynamicBox, index) => {
  dynamicBox.textContent = terminalOutputs[index];
});
