!function(e){"use strict"
var i=jQuery.fn.revolution,t={alias:"Carousel Min JS",name:"revolution.extensions.carousel.min.js",min_core:"5.3.0",version:"1.2.1"}
jQuery.extend(!0,i,{prepareCarousel:function(e,o,n,d){return"stop"!==i.compare_version(t).check&&(n=e.carousel.lastdirection=s(n,e.carousel.lastdirection),a(e),e.carousel.slide_offset_target=r(e),void(void 0!==d?l(e,n,!1,0):null==o?i.carouselToEvalPosition(e,n):l(e,n,!1)))},carouselToEvalPosition:function(e,t){var a=e.carousel
t=a.lastdirection=s(t,a.lastdirection)
var o="center"===a.horizontal_align?(a.wrapwidth/2-a.slide_width/2-a.slide_globaloffset)/a.slide_width:(0-a.slide_globaloffset)/a.slide_width,r=i.simp(o,e.slideamount,!1),n=r-Math.floor(r),d=0,f=-1*(Math.ceil(r)-r),h=-1*(Math.floor(r)-r)
d=n>=.3&&"left"===t||n>=.7&&"right"===t?f:n<.3&&"left"===t||n<.7&&"right"===t?h:d,d="off"===a.infinity?r<0?r:o>e.slideamount-1?o-(e.slideamount-1):d:d,a.slide_offset_target=d*a.slide_width,0!==Math.abs(a.slide_offset_target)?l(e,t,!0):i.organiseCarousel(e,t)},organiseCarousel:function(e,i,t,a){i=void 0===i||"down"==i||"up"==i||null===i||jQuery.isEmptyObject(i)?"left":i
for(var s=e.carousel,l=new Array,o=s.slides.length,r=("right"===s.horizontal_align&&e.width,0);r<o;r++){var n=r*s.slide_width+s.slide_offset
"on"===s.infinity&&(n=(n=n>s.wrapwidth-s.inneroffset&&"right"==i?s.slide_offset-(s.slides.length-r)*s.slide_width:n)<0-s.inneroffset-s.slide_width&&"left"==i?n+s.maxwidth:n),l[r]=n}var d=999
s.slides&&jQuery.each(s.slides,function(a,r){var n=l[a]
"on"===s.infinity&&(n=(n=n>s.wrapwidth-s.inneroffset&&"left"===i?l[0]-(o-a)*s.slide_width:n)<0-s.inneroffset-s.slide_width?"left"==i?n+s.maxwidth:"right"===i?l[o-1]+(a+1)*s.slide_width:n:n)
var f=new Object
f.left=n+s.inneroffset
var h="center"===s.horizontal_align?(Math.abs(s.wrapwidth/2)-(f.left+s.slide_width/2))/s.slide_width:(s.inneroffset-f.left)/s.slide_width,w="center"===s.horizontal_align?2:1
if((t&&Math.abs(h)<d||0===h)&&(d=Math.abs(h),s.focused=a),f.width=s.slide_width,f.x=0,f.transformPerspective=1200,f.transformOrigin="50% "+s.vertical_align,"on"===s.fadeout)if("on"===s.vary_fade)f.autoAlpha=1-Math.abs(1/Math.ceil(s.maxVisibleItems/w)*h)
else switch(s.horizontal_align){case"center":f.autoAlpha=Math.abs(h)<Math.ceil(s.maxVisibleItems/w-1)?1:1-(Math.abs(h)-Math.floor(Math.abs(h)))
break
case"left":f.autoAlpha=h<1&&h>0?1-h:Math.abs(h)>s.maxVisibleItems-1?1-(Math.abs(h)-(s.maxVisibleItems-1)):1
break
case"right":f.autoAlpha=h>-1&&h<0?1-Math.abs(h):h>s.maxVisibleItems-1?1-(Math.abs(h)-(s.maxVisibleItems-1)):1}else f.autoAlpha=Math.abs(h)<Math.ceil(s.maxVisibleItems/w)?1:0
if(void 0!==s.minScale&&s.minScale>0)if("on"===s.vary_scale){f.scale=1-Math.abs(s.minScale/100/Math.ceil(s.maxVisibleItems/w)*h)
s.slide_width,s.slide_width,f.scale,Math.abs(h)}else{f.scale=h>=1||h<=-1?1-s.minScale/100:(100-s.minScale*Math.abs(h))/100
s.slide_width,s.slide_width,s.minScale,Math.abs(h)}void 0!==s.maxRotation&&0!=Math.abs(s.maxRotation)&&("on"===s.vary_rotation?(f.rotationY=Math.abs(s.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(s.maxVisibleItems/w)*h))*s.maxRotation),f.autoAlpha=Math.abs(f.rotationY)>90?0:f.autoAlpha):f.rotationY=h>=1||h<=-1?s.maxRotation:Math.abs(h)*s.maxRotation,f.rotationY=h<0?-1*f.rotationY:f.rotationY),f.x=-1*s.space*h,f.left=Math.floor(f.left),f.x=Math.floor(f.x),f.scale,f.x,f.zIndex=Math.round(100-Math.abs(5*h)),f.transformStyle="3D"!=e.parallax.type&&"3d"!=e.parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(r,f)}),a&&(e.c.find(".next-revslide").removeClass("next-revslide"),jQuery(s.slides[s.focused]).addClass("next-revslide"),e.c.trigger("revolution.nextslide.waiting")),s.wrapwidth,s.slide_offset,s.maxwidth,s.slide_offset,s.wrapwidth}})
var a=function(e){void 0===e.bw&&i.setSize(e)
var t=e.carousel,a=i.getHorizontalOffset(e.c,"left"),s=i.getHorizontalOffset(e.c,"right")
void 0===t.wrap&&function(e){var i=e.carousel
i.infbackup=i.infinity,i.maxVisiblebackup=i.maxVisibleItems,i.slide_globaloffset="none",i.slide_offset=0,i.wrap=e.c.find(".tp-carousel-wrapper"),i.slides=e.c.find(".tp-revslider-slidesli"),0!==i.maxRotation&&("3D"!=e.parallax.type&&"3d"!=e.parallax.type?punchgs.TweenLite.set(i.wrap,{perspective:1200,transformStyle:"flat"}):punchgs.TweenLite.set(i.wrap,{perspective:1600,transformStyle:"preserve-3d"})),void 0!==i.border_radius&&parseInt(i.border_radius,0)>0&&punchgs.TweenLite.set(e.c.find(".tp-revslider-slidesli"),{borderRadius:i.border_radius})}(e),t.slide_width="on"!==t.stretch?e.gridwidth[e.curWinRange]*e.bw:e.c.width(),t.maxwidth=e.slideamount*t.slide_width,t.maxVisiblebackup>t.slides.length+1&&(t.maxVisibleItems=t.slides.length+2),t.wrapwidth=t.maxVisibleItems*t.slide_width+(t.maxVisibleItems-1)*t.space,t.wrapwidth="auto"!=e.sliderLayout?t.wrapwidth>e.c.closest(".tp-simpleresponsive").width()?e.c.closest(".tp-simpleresponsive").width():t.wrapwidth:t.wrapwidth>e.ul.width()?e.ul.width():t.wrapwidth,t.infinity=t.wrapwidth>=t.maxwidth?"off":t.infbackup,t.wrapoffset="center"===t.horizontal_align?(e.c.width()-s-a-t.wrapwidth)/2:0,t.wrapoffset="auto"!=e.sliderLayout&&e.outernav?0:t.wrapoffset<a?a:t.wrapoffset
var l="hidden"
"3D"!=e.parallax.type&&"3d"!=e.parallax.type||(l="visible"),"right"===t.horizontal_align?punchgs.TweenLite.set(t.wrap,{left:"auto",right:t.wrapoffset+"px",width:t.wrapwidth,overflow:l}):punchgs.TweenLite.set(t.wrap,{right:"auto",left:t.wrapoffset+"px",width:t.wrapwidth,overflow:l}),t.inneroffset="right"===t.horizontal_align?t.wrapwidth-t.slide_width:0,t.realoffset=Math.abs(t.wrap.position().left),t.windhalf=jQuery(window).width()/2},s=function(e,i){return null===e||jQuery.isEmptyObject(e)?i:void 0===e?"right":e},l=function(e,t,a,l){var o=e.carousel
t=o.lastdirection=s(t,o.lastdirection)
var r=new Object,n=a?punchgs.Power2.easeOut:o.easing
r.from=0,r.to=o.slide_offset_target,l=void 0===l?o.speed/1e3:l,l=a?.4:l,void 0!==o.positionanim&&o.positionanim.pause(),o.positionanim=punchgs.TweenLite.to(r,l,{from:r.to,onUpdate:function(){o.slide_offset=o.slide_globaloffset+r.from,o.slide_offset=i.simp(o.slide_offset,o.maxwidth),i.organiseCarousel(e,t,!1,!1)},onComplete:function(){o.slide_globaloffset="off"===o.infinity?o.slide_globaloffset+o.slide_offset_target:i.simp(o.slide_globaloffset+o.slide_offset_target,o.maxwidth),o.slide_offset=i.simp(o.slide_offset,o.maxwidth),i.organiseCarousel(e,t,!1,!0)
var s=jQuery(e.li[o.focused])
e.c.find(".next-revslide").removeClass("next-revslide"),a&&i.callingNewSlide(e.c,s.data("index"))},ease:n})},o=function(e,i){return Math.abs(e)>Math.abs(i)?e>0?e-Math.abs(Math.floor(e/i)*i):e+Math.abs(Math.floor(e/i)*i):e},r=function(e){var t=0,a=e.carousel
if(void 0!==a.positionanim&&a.positionanim.kill(),"none"==a.slide_globaloffset)a.slide_globaloffset=t="center"===a.horizontal_align?a.wrapwidth/2-a.slide_width/2:0
else{a.slide_globaloffset=a.slide_offset,a.slide_offset=0
var s=e.c.find(".processing-revslide").index(),l="center"===a.horizontal_align?(a.wrapwidth/2-a.slide_width/2-a.slide_globaloffset)/a.slide_width:(0-a.slide_globaloffset)/a.slide_width
l=i.simp(l,e.slideamount,!1),s=(s=s>=0?s:e.c.find(".active-revslide").index())>=0?s:0,t="off"===a.infinity?l-s:-function(e,i,t){var a=i-e,s=i-t-e
return a=o(a,t),s=o(s,t),Math.abs(a)>Math.abs(s)?s:a}(l,s,e.slideamount),t*=a.slide_width}return t}}(jQuery)
