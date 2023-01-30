// Import stylesheets
import './style.css';
import { somefunc, otherfunc } from './include/miscsvc.js';
import { creerelement, viderelement } from './include/element.js';

$(document).ready(function () {
  $('p#test').html('<em>Working in progress</em>');
  $('p#test em').css({ color: '#0c0' });

  //CREER UN ELEMENT : class creer
  $('.creer').click(function () {
    // console.info('clicked');
    creerelement($('div#somediv').find('tbody'));
  });

  //CHANGER VISIBLE/INVISIBLE : id basculervisibilite
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

  //VIDER LES TEXT : id = vider
  $('p#vider').click(viderelement('.generees'));

  //TOUT SUPPRIMER : id = supprimer
  $('p#supprimer').click(function () {
    $('.generees').remove();
  });

  //TESTER : class tester
  $('.tester').click(function () {
    somefunc($('div#somediv'));
    console.info(otherfunc($('div#somediv')));
  });
});
