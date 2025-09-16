$(document).ready(function() {
  // Version 1
  $('span[data-quote]').clone().prependTo('p:nth-child(3)').addClass('quote');