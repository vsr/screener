const _ = require('lodash');
const natural = require('natural');

function rule(cv, jd){
	var tokenizer = new natural.WordTokenizer();
	const tokens = tokenizer.tokenize(cv);

	const tokenMap = _.countBy(tokens, _.identity);
	let isAllKeywordsPresent = true;
	_.each(jd.keywords, (value) => {
		isAllKeywordsPresent = tokenMap.hasOwnProperty(value);
		if (!isAllKeywordsPresent) {
			return;
		}
	})
	return isAllKeywordsPresent ? 5 : 0;
}

module.exports = rule;