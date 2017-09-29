// function for borda count "score" and "option_id"

var dummy_results = [
    { option_id: 11, score: 3 },
    { option_id: 12, score: 2 },
    { option_id: 13, score: 1 },
    { option_id: 11, score: 2 },
    { option_id: 12, score: 3 },
    { option_id: 13, score: 1 },
    { option_id: 11, score: 2 },
    { option_id: 12, score: 3 },
    { option_id: 13, score: 1 }
];


var total_cost = 0;

option_id

var total_cost = 0;

function add_to_total_cost(amount) {
    total_cost += amount.cost;
}

var shopping_cart_1 = [{
        item: 'shirt',
        cost: 22
    },
    {
        item: 'shorts',
        cost: 26
    }
];

var shopping_cart_2 = [{
        item: 'cereal',
        cost: 4
    },
    {
        item: 'milk',
        cost: 3
    },
    {
        item: 'eggs',
        cost: 2
    }
]

shopping_cart_1.forEach(add_to_total_cost);
shopping_cart_2.forEach(add_to_total_cost);


console.log(total_cost);


}





// bordaCount expected to look like
// var finalResults = [
//     { option_id: 11, total_score: 25 },
//     { option_id: 12, total_score: 30 },
//     { option_id: 15, total_score: 5 },
// ];