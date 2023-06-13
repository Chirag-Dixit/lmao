// Function to handle the click event of the print button
function printContent() {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Get the content element
    const contentElement = document.getElementById("content");

    // Generate the PDF from the content using the html() function of jsPDF
    doc.html(contentElement, {
      callback: function (pdf) {
        // Save the PDF file
        pdf.save("content.pdf");
      },
    });
}

// Add a click event listener to the print button
const printButton = document.getElementById("print-button");
printButton.addEventListener("click", printContent);