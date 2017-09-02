function runner(rules, cv, jd){
	return rules.map((rule) => {
		return rule(cv, jd);
	});
}

module.exports = runner;
