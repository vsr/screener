const expect = require('chai').expect;

const rule = require('../../src/rules/2-occurrence-weights');
const jd = require('../../data/fe-jd.json');
const utils = require('../../src/utils');

describe('rule 2: assign scores based on weight of skills', function() {
  it('should check score of candidate with irrelevant skills', function() {
    const cv = 'photography rockets music painting cycling';
    const result = rule(cv, jd);

    expect(result.score).to.equal(0);
  });

  it('should check score of candidate with javascript skill of weight 5', function() {
    const cv = 'javascript';
    const skill = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'javascript');
      const skillWeight = skill.weight;
    const result = rule(cv, jd);

    expect(result.score).to.equal(skillWeight);
  });

  it('should check score of candidate with es2015 skill of weight 3', function() {
    const cv = 'es2015';
    const skill = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'es2015');
    const skillWeight = skill.weight;
    const result = rule(cv, jd);

    expect(result.score).to.equal(skillWeight);
  });

  it('should check score of candidate with 2 skills of weights 5 & 3', function() {
    const cv = 'javascript es2015';
    const skillJavascript = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'javascript');
    const skillEs2015 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'es2015');
    const skillWeight = (skillJavascript.weight + skillEs2015.weight) / 2;
    const result = rule(cv, jd);

    expect(result.score).to.equal(skillWeight);
  });

  it('should check score of candidate with all 10 skills of different weights', function() {
    const cv = 'javascript es2015 node framework jquery webpack babel html css sass';
    const skill1 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'javascript');
    const skill2 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'es2015');
    const skill3 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'node');
    const skill4 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'framework');
    const skill5 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'jquery');
    const skill6 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'webpack');
    const skill7 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'babel');
    const skill8 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'html');
    const skill9 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'css');
    const skill10 = jd.weightedKeywords &&
      jd.weightedKeywords.find(skill => skill.name === 'sass');
    const skillWeight = utils.average([skill1.weight, skill2.weight, skill3.weight,
      skill4.weight, skill5.weight, skill6.weight, skill7.weight, skill8.weight,
      skill9.weight, skill10.weight]);
    const result = rule(cv, jd);

    expect(result.score).to.equal(skillWeight);
  });

});
