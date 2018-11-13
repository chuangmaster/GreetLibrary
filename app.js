$('#login').click(function() {
  var G = G$('Master', 'Chuang', 'en');
  G.setLang($('#lang').val())
    .HTMLGreet('#greeting', true)
    .log();
  $('#logindiv').hide();
});
