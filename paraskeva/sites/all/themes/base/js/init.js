(function ($) {
    Drupal.behaviors.yourName = {
        attach : function(context, settings) {

            $('#block-views-main-slider-block .view-content').slick({
                dots: false,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });
        }
    };


    $('#block-system-main-menu .title').click(
        function () {
            if($(this).parent().find('.content').is(':visible')){
                $(this).parent().find('.content').fadeOut(400);
            }
            else{
                $(this).parent().find('.content').fadeIn(400);
            }

        }
    );
    $('.view-calendar .enroll').click(
      function () {
          var cource=$(this).parents('.views-row').find('.views-field-title a').text();
          $('#block-webform-client-block-38 #edit-submitted-kurs').val(cource);
          $('#block-webform-client-block-38').bPopup();
      }
    );
    $('.view-cources .enroll').click(
        function () {
            var cource=$(this).parents('.views-row').find('.views-field-title a').text();
            $('#block-webform-client-block-38 #edit-submitted-kurs').val(cource);
            $('#block-webform-client-block-38').bPopup();
        }
    );
    $('#block-block-3 .enroll').click(
        function () {

            $('#block-webform-client-block-38 #edit-submitted-kurs').val($('h1').text());
            $('#block-webform-client-block-38').bPopup();
        }
    );

    $('#block-block-3').insertBefore('.field-name-field-course-deck');
    $('.calback').click(
        function () {
            $('#block-webform-client-block-39').bPopup();
        }
    );
    $('#edit-submitted-telefon').mask("+7(999)999-99-99");


})(jQuery);

