var average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length || 0;

module.exports.average = average;
