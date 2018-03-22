(function() {
	//mBahia 
	var main = function($) { 
		
		var self = $.mBahia = new function(){};
		
		$.extend(self, {
			mBahiaImgs : [
			'https://image.ibb.co/gHP8sx/icon.png',
			'https://image.ibb.co/kiFWCx/bahia2.png',
			'https://image.ibb.co/gaZPXx/bahia3.png',
			'https://image.ibb.co/fNg4Xx/bahia4.png',
			'https://image.ibb.co/mQBGec/bahia5.png',
			'https://image.ibb.co/hoBtQH/bahia6.png',
			'https://image.ibb.co/b2V9zc/bahia7.png',
			'https://image.ibb.co/dDuDQH/bahia8.png',
			'https://image.ibb.co/cMCNKc/bahia9.png',
			'https://image.ibb.co/bzV3QH/bahia10.png',
			'https://image.ibb.co/nQNNKc/bahia11.png',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.mBahiaImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
