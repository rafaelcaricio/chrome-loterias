var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-32823945-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

(function($) {

    $.ajax("http://www1.caixa.gov.br/loterias/loterias/megasena/megasena_pesquisa_new.asp", {
        complete: function(req) {
            var data = req.responseText.split('|');
            $('#numero-concurso').text(data[0]);
            $('#data-sorteio').text(data[11]);
            $('#resultado').html(data[20]);
        }
    });

})(jQuery);
