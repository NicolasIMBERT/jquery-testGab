// Import stylesheets
import './style.css';
import { somefunc, otherfunc } from './miscsvc.js';

var creerelement = function (divtouse$) {
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

$(document).ready(function () {
  $('#test').html('<em>Working in progress</em>');
  $('#test em').css({ color: '#0c0' });

  somefunc($('div#somediv'));
  console.info(otherfunc($('div#somediv')));
  $('.creer').click(function () {
    // console.info('clicked');
    creerelement($('div#somediv').find('tbody'));
  });

  $('#basculervisibilite').click(function () {
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
    $('.generees').remove();
  });
});
