// function for borda count "score" and "option_id"

let objArr1 = [
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

function reduce_borda_count(objArr) {

    // first, convert data into a Map with reduce
    let counts = objArr1.reduce((prev, curr) => {
        let count = prev.get(curr.option_id) || 0;
        prev.set(curr.option_id, curr.score + count);
        return prev;
    }, new Map());

    // then, map your counts object back to an array
    let reducedObjArr = [...counts].map(([option_id, score]) => {
        let finalResults = { option_id, score };
        return finalResults;
    })

    console.log(reducedObjArr);

}

reduce_borda_count(objArr1);

// bordaCount expected to look like
// var finalResults = [
//     { option_id: 11, total_score: 25 },
//     { option_id: 12, total_score: 30 },
//     { option_id: 15, total_score: 5 },
// ];