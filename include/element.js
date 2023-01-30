exports.creerelement = function (divtouse$) {
  //console.info('clicked2');
  let myid = Date.now();
  let mytr$ = $('<tr/>').appendTo(divtouse$);
  $('<td/>', { id: myid, colspan: 3 })
    .html('element ' + myid)
    .addClass('generees couleurmoche')
    .appendTo(mytr$)
    .click(function () {
      $(this).remove();
    })
    .mouseover(function () {
      $(this).css({ color: 'blue', 'background-color': 'yellowgreen' });
    })
    .mouseout(function () {
      $(this).css({ color: 'brown', 'background-color': 'bisque' });
    });
};

exports.viderelement = function (parm_nomdeclass) {
  $(parm_nomdeclass).empty();
};
