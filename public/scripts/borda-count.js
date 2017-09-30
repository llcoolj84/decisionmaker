// function for borda count "score" and "option_id"
// this is all test data, DELETE after it is transfered to the "HISTORY.JS"

let singlePollAnswers = [
    { option_id: 11, option_name: "Apple", score: 2 },
    { option_id: 12, option_name: "Banana", score: 1 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 2 },
    { option_id: 12, option_name: "Banana", score: 1 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 },
    { option_id: 11, option_name: "Apple", score: 1 },
    { option_id: 12, option_name: "Banana", score: 2 }
];

var testArr = [
    { option_id: 1, name: 'apple', score: 42 },
    { option_id: 2, name: 'banana', score: 78 },
    { option_id: 3, name: 'orange', score: 23 },
    { option_id: 1, name: 'apple', score: 54 }
];

// var outputArr = [];

// for (var i = 0; i < inputArr.length; i++) {

//     if (i === 0) {
//         outputArr.push(inputArr[0]);
//     } else {

//         var matched = false;

//         for (var j = 0; j < outputArr.length; j++) {
//             if (outputArr[j].option_id === inputArr[i].option_id) {
//                 outputArr[j].score = outputArr[j].score + inputArr[i].score;
//                 matched = true;
//             }
//         }

//         if (matched === false) {
//             outputArr.push(inputArr[i]);
//         }
//     }

// }

// console.log(outputArr);
// return outputArr;


function reduce_borda_count(inputArr) {

    var temp = [];
    for (var i = 0; i < inputArr.length; i++) {
        var obj = inputArr[i];

        if (!temp[obj.option_id]) {
            temp[obj.option_id] = obj;
        } else {
            temp[obj.option_id].score += obj.score;
        }
    }

    var result = [];
    for (var prop in temp)
        result.push(temp[prop]);

    console.log(result);
    return result;
}


reduce_borda_count(singlePollAnswers);