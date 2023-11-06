// Function to update the terminal's height based on the content
function updateTerminalHeight() {
    const terminalContainer = document.querySelector('.custom-terminal');
    const terminalContent = document.querySelector('.terminal-content');
  
    // Calculate the height based on the content's scrollHeight
    const newHeight = terminalContent.scrollHeight;
  
    // Set the terminal's height to the calculated height
    terminalContainer.style.height = `${newHeight}px`;
  }
  
  // Call the function to set the initial height
  updateTerminalHeight();
  
  // Example: Simulate adding content to the terminal
  setTimeout(() => {
    const terminalContent = document.querySelector('.terminal-content');
    for (let i = 0; i < 10; i++) {
      terminalContent.innerHTML += `Line ${i + 1}: This is some sample content.<br>`;
    }
    // After adding content, update the terminal's height
    updateTerminalHeight();
  }, 1000); // Simulated delay
  