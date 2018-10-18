var assert = require('chai').assert;
var expect = require('chai').expect;

//expect(true).to.be.true;
//assert.equal(true, true);

function titleCase (title) {
	var words = title.split(' ');
	var titleCaseWords = words.map(function(word){
		return word[0].toUpperCase() + word.substring(1);
	});
	
	return titleCaseWords.join(' ');
};


//exclude
expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('the')).to.equal('The');


expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');


//assert
assert.typeOf(titleCase('the great mouse detective'), 'string');
assert.equal(titleCase('the'), 'The');

assert.equal(titleCase('the great mouse detective'), 'The Great Mouse Detective');