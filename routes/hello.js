
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("hello", {
    "name" : nameToShow
  });
};
