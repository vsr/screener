const fs = require('fs');
const rule1 = require('./rules/1-pass-non-zeros');
const rule2 = require('./rules/2-occurrence-weights');
const utils = require('./utils');
const runner = require('./lib/runner');

fs.readFile('./data/fe-jd.json', 'utf-8', function(err, jd) {
	const jd_data = JSON.parse(jd);
	let results;

	fs.readFile('./data/cv-sample.txt', 'utf-8', function(err, cv_data) {
		results = runner([rule1, rule2], cv_data.toLowerCase(), jd_data);
		console.log(JSON.stringify(results, null, '  '));
    const averageScore = (utils.average(results.map((result)=>result.score)))
    const averageReadableScore = averageScore.toFixed(2);
    console.log(`\nAverage score: ${averageReadableScore}`);
	})

});
