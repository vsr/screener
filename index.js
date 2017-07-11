const fs = require('fs');
const rule1 = require('./rules/1-pass-non-zeros');
const rule2 = require('./rules/2-occurrence-weights');
const utils = require('./utils');
const runner = require('./lib/runner');

fs.readFile('./data/fe-jd.json', 'utf-8', function(err, jd) {
	const jd_data = JSON.parse(jd);
	let results;

	fs.readFile('./data/cv-vinay.txt', 'utf-8', function(err, cv_data) {
		results = runner([rule1, rule2], cv_data.toLowerCase(), jd_data);
		console.log(results);
    console.log( (utils.average(results.map((result)=>result.score))).toFixed(2) );
	})

});





// function runner(rules, cv, jd){
// 	const scores = [];
// 	rules.forEach((rule) => {
// 		const { score, data } = rule(cv, jd);
// 		console.log(data)
// 		scores.push(score);
// 	});
// 	return (utils.average(scores)).toFixed(2);
// }
