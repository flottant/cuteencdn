SidebarFollow=function(){this.config={element:null,distanceToTop:0},this.cache={originalToTop:0,prevElement:null,parentToTop:0,placeholder:jQuery("<div>")}},SidebarFollow.prototype={init:function(config){this.config=config||this.config;var _self=this,element=jQuery(_self.config.element);if(!(element.length<=0)){for(var prevElement=element.prev();prevElement.is(":hidden")&&!((prevElement=prevElement.prev()).length<=0););_self.cache.prevElement=prevElement;var parent=element.parent(),parentToTop=parent.offset().top,parentBorderTop=parent.css("border-top"),parentPaddingTop=parent.css("padding-top");_self.cache.parentToTop=parentToTop+parentBorderTop+parentPaddingTop,jQuery(window).scroll(function(){_self._scrollScreen({element:element,_self:_self})}),jQuery(window).resize(function(){_self._scrollScreen({element:element,_self:_self})})}},_scrollScreen:function(args){var _self=args._self,element=args.element,prevElement=_self.cache.prevElement,toTop=_self.config.distanceToTop,bodyToTop=parseInt(jQuery("body").css("top"),10);isNaN(bodyToTop)||(toTop+=bodyToTop);var elementToTop=element.offset().top-toTop,referenceToTop=0;if(referenceToTop=prevElement&&1===prevElement.length?prevElement.offset().top+prevElement.outerHeight():_self.cache.parentToTop-toTop,jQuery(document).scrollTop()>elementToTop){var elementHeight=element.outerHeight();_self.cache.placeholder.css("height",elementHeight).insertBefore(element),_self.cache.originalToTop=elementToTop,element.css({top:toTop+"px",position:"fixed",width:$(".widthhhh").width()})}else(_self.cache.originalToTop>elementToTop||referenceToTop>elementToTop)&&(_self.cache.placeholder.remove(),element.css({position:"static"}))}};