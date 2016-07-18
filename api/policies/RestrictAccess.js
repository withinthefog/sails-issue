module.exports = function (req, res, next) {
  req.options.where = {id: [1,2,3]};
  next();
};
