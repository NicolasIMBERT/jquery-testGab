// Import stylesheets
import './style.css';
import { somefunc } from './miscsvc.js';

var hclick = function (divtouse$) {
  //console.info('clicked2');

  var mySel$ = $('<p/>', { id: Date.now() })
    .html('burps')
    .addClass('generees couleurmoche')
    .appendTo(divtouse$);
};

$(document).ready(function () {
  $('#test').html('<em>Working in progress</em>');
  $('#test em').css({ color: '#0c0' });

  somefunc($('div#somediv'));

  $('h1#title').click(function () {
    console.info('clicked');
    hclick($('div#somediv'));
  });

  $('#cacher').click(function () {
    $('.generees').hide('slow');
  });
  $('#montrer').click(function () {
    $('.generees').show('fast');
  });

  $('p#vider').click(function () {
    $('.generees').empty();
  });

  $('p#supprimer').click(function () {
    //$('#somediv').remove('.generees');
    $('.generees').remove();
  });
});
