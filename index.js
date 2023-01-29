// Import stylesheets
import './style.css';
import { somefunc } from './miscsvc.js';

var creerelement = function (divtouse$) {
  //console.info('clicked2');

  var mySel$ = $('<p/>', { id: Date.now() })
    .html('element')
    .addClass('generees couleurmoche')
    .appendTo(divtouse$);
};

$(document).ready(function () {
  $('#test').html('<em>Working in progress</em>');
  $('#test em').css({ color: '#0c0' });

  somefunc($('div#somediv'));

  $('.creer').click(function () {
    // console.info('clicked');
    creerelement($('div#somediv'));
  });

  // $('#cacher').click(function () {
  //   $('.generees').hide('slow');
  // });

  $('#basculervisibilite').click(function () {
    // console.info($(this).attr('statut'));

    if ($(this).attr('statut') == '1') {
      $(this).attr('statut', '0');
      $(this).html('cacher les éléments');

      $('.generees').show('fast');
    } else {
      $(this).attr('statut', '1');
      $(this).html('montrer les éléments');

      $('.generees').hide('slow');
    }
  });

  $('p#vider').click(function () {
    $('.generees').empty();
  });

  $('p#supprimer').click(function () {
    //$('#somediv').remove('.generees');
    $('.generees').remove();
  });
});
