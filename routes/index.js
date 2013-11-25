
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Dave Lukas - Shadows and All'});
};

exports.about = function(req, res){
  res.render('about', { title: 'About Dave'});
};

exports.poetry = function(req, res){
  res.render('poetry', {title: 'Poetry'});
};

exports.writing = function(req, res){
  res.render('writing', { title: 'Writing'});
};

exports.secondwind = function(req, res){
	res.render('secondwind', { title: 'Second Wind'});
};

exports.itstime = function(req, res){
	res.render('itstime', { title: 'It\'s Time'});
};
exports.oneyearago = function(req, res){
	res.render('oneyearago', {title: 'One Year Ago'});
};