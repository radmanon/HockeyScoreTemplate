
  document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "card-text" (post descriptions)
    var cardTextElements = document.querySelectorAll(".card-text");

    // Loop through each card-text element
    cardTextElements.forEach(function (element) {
      // Get the full text content
      var fullText = element.textContent.trim();

      // Split the full text into words
      var words = fullText.split(" ");

      // Display only the first 10 words
      var truncatedText = words.slice(0, 10).join(" ");

      // Add the truncated text to the element
      element.textContent = truncatedText;

      // Create a "Read More" button
      var readMoreButton = document.createElement("a");
      readMoreButton.href = "#"; // You can set the actual URL you want to link to
      readMoreButton.classList.add("btn", "btn-primary");
      readMoreButton.textContent = "Read More";

      // Append the "Read More" button to the card body
      element.parentElement.appendChild(readMoreButton);

      // Add an event listener to the "Read More" button
      readMoreButton.addEventListener("click", function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Restore the full text to the element
        element.textContent = fullText;

        // Remove the "Read More" button
        readMoreButton.remove();
      });
    });
  });
