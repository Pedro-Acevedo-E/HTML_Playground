let counter = 0; // Keeps track of the current count

function incrementCounter() {
  counter++; // Increment the counter

  // Create a new list item element
  const newItem = document.createElement("li");
  newItem.textContent = counter; // Set the text content of the list item

  // Get the list element from the HTML
  const list = document.getElementById("numberList");

  // Append the new list item to the existing list
  list.appendChild(newItem);
}

/*
NOTE
You can use document to append to any element
you could even append to the body if you wanted to

// Create a new element (e.g., a paragraph)
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph added by JavaScript.";

// Append the new element to the body
document.body.appendChild(newElement);
*/