const expect = require('chai').expect;

const rule = require('../../src/rules/1-pass-non-zeros');
const jd = require('../../data/fe-jd.json');

describe('rule 1: pass non zeros - look for all n skills', function() {
  it('fail candidates who have 0 skills', function() {
    const cv = '';
    const result = rule(cv, jd);

    expect(result.score).to.equal(0);
  });

  it('fail candidates who have 1 skill', function() {
    const cv = 'es6';
    const result = rule(cv, jd);

    expect(result.score).to.equal(0);
  });

  it('fail candidates who have 2 skills', function() {
    const cv = 'es6 nodejs';
    const result = rule(cv, jd);

    expect(result.score).to.equal(0);
  });

  it('fail candidates who have 3 skills', function() {
    const cv = 'es6 nodejs framework';
    const result = rule(cv, jd);

    expect(result.score).to.equal(0);
  });

  it('fail candidates who have 4 skills', function() {
    const cv = 'es6 nodejs framework jquery';
    const result = rule(cv, jd);

    expect(result.score).to.equal(0);
  });

  it('fail candidates who have 5 skills', function() {
    const cv = 'es6 nodejs framework jquery html';
    const result = rule(cv, jd);

    expect(result.score).to.equal(0);
  });

  it('pass candidates who have all 6 skills', function() {
    const cv = 'es6 nodejs framework jquery html css';
    const result = rule(cv, jd);

    expect(result.score).to.equal(5);
  });

});
