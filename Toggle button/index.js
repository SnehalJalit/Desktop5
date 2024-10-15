// Get all the toggle switches
const toggleSwitches = document.querySelectorAll('.toggle-switch');

// Function to update the console and local storage for each switch
function updateSwitchState(event) {
    const switchId = event.target.dataset.id;  // Get the unique ID of the switch
    if (event.target.checked) {
        console.log(`Switch ${switchId}: 1`);  // Right side
        localStorage.setItem(`switchState-${switchId}`, '1'); // Save state in localStorage
    } else {
        console.log(`Switch ${switchId}: 0`);  // Left side
        localStorage.setItem(`switchState-${switchId}`, '0'); // Save state in localStorage
    }
}

// Initialize each toggle switch based on its saved state in local storage
toggleSwitches.forEach(toggleSwitch => {
    const switchId = toggleSwitch.dataset.id;  // Get the unique ID of the switch
    const savedState = localStorage.getItem(`switchState-${switchId}`);

    // Set the initial state based on the saved value
    if (savedState === '1') {
        toggleSwitch.checked = true;
    } else {
        toggleSwitch.checked = false;
    }

    // Add event listener to each switch to track changes
    toggleSwitch.addEventListener('change', updateSwitchState);
});
