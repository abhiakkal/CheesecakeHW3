// Helper method to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    var quantity = $("#quantityDropdown").val();
    var topping = $("input[name='topping']:checked").val();
    var notes = $("#notes").val().toLowerCase();

    if (notes.includes("vegan")) {
        alert("Warning! Cheesecake contains dairy!!");
    } else {
        $("form").remove();
        var confirmationText = "Thank you! Your order has been placed\n";
        confirmationText += "Quantity: " + (quantity || "Not specified") + "\n";
        confirmationText += "Topping: " + (topping || "Not specified") + "\n";
        confirmationText += "Notes: " + (notes || "No notes");
        $("#thankYouMessage").html("<p>" + confirmationText + "</p>").show();
        $("#orderSummary").show();
    }
}

// Function to handle AJAX POST request to retrieve orders for a specific month
function post_request_order(month) {
    // Retrieve orders for the selected month via AJAX POST request
    $.post("/orders", { month: month })
    .done(function(data) {
        $("#orderlist").empty(); // Clear the existing order list
        data.data.forEach(function(order) { // Iterate over each order in the response data
            $("#orderlist").append("<li>" + order.quantity + " " + order.toppings + "</li>"); // Append a new order item to the order list
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching orders:", errorThrown);
    });
}

// Event handler for clicking on a month option
function handleMonthOptionClick(event) {
    event.preventDefault();
    var selectedMonth = $(this).text().trim();
    $("#selectedMonth").text(selectedMonth); // Update the displayed month
    post_request_order(selectedMonth); // Retrieve orders for the selected month
}

// Attach click event handler to all month options
$('.month-option').click(handleMonthOptionClick);

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
    $('#monthSelector').click(handleMonthSelectorClick);

    // Helps with the hovering
    $('#monthSelector').hover(handleMonthSelectorHover, function () {
        $('#monthOptions').slideUp();
    });
});
