var isDate = function (input) {
  // Check if it's a Date object
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Try to convert input to Date
  const date = new Date(input);

  // Check if valid date
  return !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));