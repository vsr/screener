const _ = require('lodash');
const natural = require('natural');
const utils = require('../utils');
const MAX_OCCURRENCE = 1;
const MAX_WEIGHT = 5;
const SCALING_FACTOR = 5;

function rule(cv, jd){
	var tokenizer = new natural.WordTokenizer();
	const tokens = tokenizer.tokenize(cv);

	const tokenMap = _.countBy(tokens, _.identity);
	const scores = [];
	const map = {};
	_.each(jd.weightedKeywords, (keyword) => {
		const isAllKeywordsPresent = tokenMap.hasOwnProperty(keyword.name);
		if (isAllKeywordsPresent) {
			const count = _.min([tokenMap[keyword.name], MAX_OCCURRENCE]);
			const score = (keyword.weight * count) / (MAX_OCCURRENCE * MAX_WEIGHT) * SCALING_FACTOR;
			scores.push(score);
			map[keyword.name] = {
				weight: keyword.weight,
				occurrence: count,
				score
			};
		}
	})
	return {
		score: utils.average(scores),
		data: map
	};
}

module.exports = rule;