exports.somefunc = function (someselector$) {
  console.info('somefunc:' + someselector$.html());
  console.info('somefunc:' + someselector$.find('#vider').attr('id'));
};
exports.otherfunc = function (someselector$) {
  return someselector$.find('#vider').attr('gabriel');
};
