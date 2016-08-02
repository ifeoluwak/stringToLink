(function($) {

    $.fn.stringToLink = function (options) {
        
        var settings = $.extend({
            url : /((\bhttps?:\/\/)|(\bwww\.))\S*/g,
            color: 'green',
            complete : null
            
        }, options)

       return this.not(':has(a)').each(function(argument) {

            var cc = $(this).text().match(settings.url);

            for (var i = 0; i < cc.length; i++) {
                              
            var links = $(this).html().replace(cc[i], '<a class="string-to-link" style="color:'+settings.color +';" href='+cc[i]+'>'+cc[i]+'</a>');
                                           
            $(this).html(links);
            var ths = $(this);

        }

            setTimeout(function() {

                $('a.string-to-link').each(function(){

                    var f = $('a.string-to-link');
                    
                    for (var i = 0; i < f.length; i++) {
                        if ($(f[i]).text() == "") {
                        
                            var ff = $(f[i]).attr('href');
                            var ff2 = ff+'/';

                            var links2 = ths.html().replace(ff2, '<a class="string-to-link2" style="color:'+settings.color +';" href='+ff+'>'+ff+'</a>');
                            ths.html(links2);

                        }
                    }
                });

                ths.each(function(argument) {

                    var theanchor = ths.find('a');

                    for (var i = 0; i < theanchor.length; i++) {

                        var thishref = $(theanchor[i]).attr('href');

                        if (thishref != undefined){

                           if (thishref.indexOf('http') == -1 ) {

                                   ths.find(theanchor[i]).attr('href', 'http://'+thishref);

                            }
                        }
                    }

                    ths.find('a.string-to-link2').prev().remove();

                  });

                if ($.isFunction(settings.complete)) {

                    settings.complete.call(this);
                }
                            
            }, 3000);

            

       });

    }

} (jQuery));