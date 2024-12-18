// Create a button and add it to the body
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate the total price
const getSum = () => {
  // Get all elements with the class 'price' (price column)
  const prices = document.querySelectorAll('.price');
  
  // Initialize total to 0
  let total = 0;
  
  // Loop through each price element and add its value to total
  prices.forEach(priceElement => {
    total += parseFloat(priceElement.textContent) || 0;  // Ensure it's a number
  });

  // Create a new row for the total price if it doesn't already exist
  let totalRow = document.querySelector('#total-row');
  if (!totalRow) {
    totalRow = document.createElement('tr');
    totalRow.id = 'total-row';  // Add an ID to prevent creating multiple rows
    const table = document.querySelector('table');
    table.appendChild(totalRow);
  }

  // Create a cell for the total price
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;  // Make it span across both columns (Item and Price)
  totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;
  
  // Clear the existing content and append the new total cell
  totalRow.innerHTML = '';
  totalRow.appendChild(totalCell);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
