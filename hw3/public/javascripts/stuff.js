// Helper method to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Get quantity value
    var quantity = $("#quantityDropdown").val();
    console.log("Quantity:", quantity);

    // Get topping value
    var topping = $("input[name='topping']:checked").val();
    console.log("Topping:", topping);

    // Get notes value
    var notes = $("#notes").val().toLowerCase();

    if (notes.includes("vegan")) {
        alert("Warning! Cheesecake contains dairy!!");
    } else {
        // Remove form section
        $("form").remove();

        // Display order confirmation
        var confirmationText = "Thank you! Your order has been placed\n";
        confirmationText += "Quantity: " + (quantity || "Not specified") + "\n";
        confirmationText += "Topping: " + (topping || "Not specified") + "\n";
        confirmationText += "Notes: " + (notes || "No notes");

        $("#thankYouMessage").html("<p>" + confirmationText + "</p>").show();

        // Display order summary
        $("#orderSummary").show();
    }
}

// Helper method to handle month option click
function handleMonthOptionClick(event) {
    event.stopPropagation();
    var selectedMonth = $(this).text();
    $('#selectedMonth').text(selectedMonth);
    $('#monthOptions').slideUp();
}

// Helper method to handle month selector click
function handleMonthSelectorClick() {
    $('#monthOptions').slideDown();
}

// Helper method to handle hovering on month selector
function handleMonthSelectorHover() {
    $('#monthOptions').slideDown();
}

// Assign event handlers
$(document).ready(function () {
    $("form").submit(handleFormSubmission);

    $('.month-option').click(handleMonthOptionClick);

    $('#monthSelector').click(handleMonthSelectorClick);

    // Helps with the hovering
    $('#monthSelector').hover(handleMonthSelectorHover, function () {
        $('#monthOptions').slideUp();
    });
});
