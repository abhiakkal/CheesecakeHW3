// Import required modules
const express = require('express');

// Create a router instance
const router = express.Router();

// Initialize a JSON object with three arr entries for each bullet point
var ordersData = [];

var object_1 = {
    toppings: 'chocolate',
    quantity: 13
};
ordersData.push(object_1);

var object_2 = {
    toppings: 'plain',
    quantity: 6
};
ordersData.push(object_2);

var object_3 = {
    toppings: 'cherry',
    quantity: 30
};
ordersData.push(object_3);

// Post call that sends back the ordersData object
router.post('/', function(req, res, next) {
    res.json({ data: ordersData });
});

module.exports = router;
