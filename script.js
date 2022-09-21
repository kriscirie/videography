(function(w){
      var $container = $('.offcanvas-top'),
				$cHeight = $('.o-content').outerHeight();
			$(document).ready(function() {
				buildCanvas();
			});
			
			function buildCanvas() {
				$('<a href="#" id="trigger">More +</a>').appendTo($container);

				$('#trigger').bind('click', function(e) {
					e.preventDefault();
					var $this = $(this);
					$container.toggleClass('active');
					if($container.hasClass('active')) {
						$container.height($cHeight);
						$this.text('Hide -');
						
						
					} else {
						$container.height(50);
						$this.text('More +');
						
					}
				});

			}
			
			$(window).resize(function() { //On Window resizeBy(
				$cHeight = $('.o-content').outerHeight();
        console.log($cHeight);
			});
			
			
			
		})(this);

		$('body').append(`
    <div class="lightbox">
      <a href="#lightbox" class="lightbox-close lightbox-toggle">X</a>
      <div class="lightbox-container">
        <div class="row">
          <div class="col-sm-12 lightbox-column">
            
          </div>
        </div>
      </div>
    </div>
  `);

$('.lightbox-toggle').on('click', event => {
  event.preventDefault();
  $('.lightbox').fadeToggle('fast');

  let context = $(event.currentTarget).attr('data-lightbox-type');
  let content = $(event.currentTarget).attr('data-lightbox-content');
  console.log(event);
  if (context == 'video') {
    $('.lightbox-column').append(`
        <div class="lightbox-video">
        <iframe src="${content}" frameborder="0" allowfullscreen> </iframe>
        </div>
    `);
  } else if (context == 'image') {
    $('.lightbox-column').append(`
        <img src="${content}" class="img-" frameborder="0" allowfullscreen>
    `);
  }
});

$('.lightbox-close').on('click', event => {
  event.preventDefault();
  $('.lightbox-column > *').remove();
});