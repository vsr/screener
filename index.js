const fs = require('fs');

fs.readFile('./data/fe-jd.txt', 'utf-8', function(err, jd) {
	
	console.log(jd);

	fs.readFile('./data/cv-1.txt', 'utf-8', function(err, cv_data) {
		console.log(cv_data)
	})
	
});



