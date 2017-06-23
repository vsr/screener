const fs = require('fs');
const rule1 = require('./rules/1-pass-non-zeros');
const rule2 = require('./rules/2-occurrence-weights');
const utils = require('./utils');

fs.readFile('./data/fe-jd.json', 'utf-8', function(err, jd) {
	const jd_data = JSON.parse(jd);
	let score;

	fs.readFile('./data/cv-3.txt', 'utf-8', function(err, cv_data) {
		score = runner([rule1, rule2], cv_data.toLowerCase(), jd_data);
		console.log(score);
	})
	
});





function runner(rules, cv, jd){
	const scores = [];
	rules.forEach((rule) => {
		const score = rule(cv, jd);
		scores.push(score);
	});
	return utils.average(scores);
}