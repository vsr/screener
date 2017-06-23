const _ = require('lodash');
const natural = require('natural');

function rule(cv, jd){
	var tokenizer = new natural.WordTokenizer();
	const tokens = tokenizer.tokenize(cv);

	const tokenMap = _.countBy(tokens, _.identity);
	let isAllKeywordsPresent = true;
	_.each(jd.keywords, (keyword) => {
		isAllKeywordsPresent = tokenMap.hasOwnProperty(keyword.name);
		console.log(keyword.name, isAllKeywordsPresent);
		if (!isAllKeywordsPresent) {
			return false;
		}
	})
	return isAllKeywordsPresent ? 5 : 0;
}

module.exports = rule;