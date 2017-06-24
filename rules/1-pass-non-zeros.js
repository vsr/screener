const _ = require('lodash');
const natural = require('natural');

function rule(cv, jd){
	var tokenizer = new natural.WordTokenizer();
	const tokens = tokenizer.tokenize(cv);

	const tokenMap = _.countBy(tokens, _.identity);
	let isAllKeywordsPresent = true;
	const keywordPresenceMap = {};
	_.each(jd.keywords, (keywords, key) => {
		let isSynonymPresent = false;
		_.each(keywords, (keyword) => {
			isSynonymPresent = tokenMap.hasOwnProperty(keyword);
			if (isSynonymPresent) {
				return false;
			}
		});
		isAllKeywordsPresent = isSynonymPresent;
		keywordPresenceMap[key] = isSynonymPresent;
	});
	return {
		score: isAllKeywordsPresent ? 5 : 0,
		data: keywordPresenceMap
	};
}

module.exports = rule;
