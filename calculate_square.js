function calculateSquare() {
    // Get the user input
    const userInput = document.getElementById("numberInput").value;

    // Check if the input is a number
    if (isNaN(userInput)) {
      // If not a number, display error message
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;  // Exit the function to avoid further execution
    }

    // Convert the input to a number (optional for calculations)
    const number = parseFloat(userInput);

    // Calculate the square
    const square = number * number;

    // Display the result
    document.getElementById("result").textContent = "The square of " + number + " is " + square;
  }