
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Dave Lukas' });
};

exports.about = function(req, res){
	res.render('about', { title: 'About Dave'});
};

exports.poetry = function(req, res){
	res.render('poetry', {title: 'Poetry'});
};