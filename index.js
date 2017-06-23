const fs = require('fs');
const ruleZero = require('./rules/rule-zero');
const ruleMinusOne = require('./rules/rule-minusone');
const utils = require('./utils');

fs.readFile('./data/fe-jd.json', 'utf-8', function(err, jd) {
	const jd_data = JSON.parse(jd);
	let score;
	console.log(jd_data);

	fs.readFile('./data/cv-1.txt', 'utf-8', function(err, cv_data) {
		console.log(cv_data);

		score = runner([ruleZero, ruleMinusOne], cv_data, jd_data);
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