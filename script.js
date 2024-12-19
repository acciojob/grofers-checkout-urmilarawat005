// Function to calculate the total price
function calculateTotal() {
    const prices = document.querySelectorAll('.price'); // Select all price elements
    let totalPrice = 0;

    // Loop through each price element and add to the total
    prices.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent) || 0; // Parse the price as a float
    });

    // Create a new row to display the total price
    const table = document.querySelector('table'); // Select the table

    // Check if a total row already exists and remove it
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove(); // Remove the existing total row if it exists
    }

    // Create a new row for the total price
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row'); // Add a class to the total row for identification

    // Create a new cell for the total price and set its content
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // This will span both columns (Item and Price)
    totalCell.textContent = `Total: Rs ${totalPrice.toFixed(2)}`; // Display the total price, formatted to two decimal places

    // Append the total cell to the row
    totalRow.appendChild(totalCell);

    // Append the new row to the table
    table.appendChild(totalRow);
}

// Create a button dynamically in JavaScript
const button = document.createElement('button');
button.textContent = 'Calculate Total'; // Set the button text
button.id = 'calculateTotal'; // Set an ID for the button

// Add an event listener to the button
button.addEventListener('click', calculateTotal);

// Append the button to the body of the document (after the table)
document.body.appendChild(button);
