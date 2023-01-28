exports.somefunc = function (someselector$) {
  console.info('somefunc:' + someselector$.html());
  console.info('somefunc:' + someselector$.find('#pouet').attr('id'));
  console.info('somefunc:' + someselector$.find('#pouet').attr('gabriel'));
};
