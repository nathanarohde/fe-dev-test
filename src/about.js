import './scss/about.scss';
import $ from "jquery";

/**
 * JavaScript code for the about page goes here
 *
 *
 **/

 $(".race-selection").click(function(){
   let selectedRace = $(this).attr('id') + '_race'
   $(".race").removeClass('active');
   $('#' + selectedRace).addClass('active');
 })
