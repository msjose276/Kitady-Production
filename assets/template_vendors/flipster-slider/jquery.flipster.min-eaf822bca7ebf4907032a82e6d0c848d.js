!function(t,e,n){"use strict"
function i(t,e){var n=null
return function(){var i=this,r=arguments
null===n&&(n=setTimeout(function(){t.apply(i,r),n=null},e))}}var r=function(){var t={}
return function(e){if(t[e]!==n)return t[e]
var i=document.createElement("div").style,r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+["webkit","moz","ms","o"].join(r+" ")+r).split(" ")
for(var o in a)if(a[o]in i)return t[e]=a[o]
return t[e]=!1}}(),a="http://www.w3.org/2000/svg",o=function(){var t
return function(){if(t!==n)return t
var e=document.createElement("div")
return e.innerHTML="<svg/>",t=e.firstChild&&e.firstChild.namespaceURI===a}}(),s=t(e),l=r("transform"),c={itemContainer:"ul",itemSelector:"li",start:"center",fadeIn:400,loop:!1,autoplay:!1,pauseOnHover:!0,style:"coverflow",spacing:-.6,click:!0,keyboard:!0,scrollwheel:!0,touch:!0,nav:!1,buttons:!1,buttonPrev:"Previous",buttonNext:"Next",onItemSwitch:!1},u={main:"flipster",active:"flipster--active",container:"flipster__container",nav:"flipster__nav",navChild:"flipster__nav__child",navItem:"flipster__nav__item",navLink:"flipster__nav__link",navCurrent:"flipster__nav__item--current",navCategory:"flipster__nav__item--category",navCategoryLink:"flipster__nav__link--category",button:"flipster__button",buttonPrev:"flipster__button--prev",buttonNext:"flipster__button--next",item:"flipster__item",itemCurrent:"flipster__item--current",itemPast:"flipster__item--past",itemFuture:"flipster__item--future",itemContent:"flipster__item__content"},f=new RegExp("\\b("+u.itemCurrent+"|"+u.itemPast+"|"+u.itemFuture+")(.*?)(\\s|$)","g"),p=new RegExp("\\s\\s+","g")
t.fn.flipster=function(e){if("string"==typeof e){var r=Array.prototype.slice.call(arguments,1)
return this.each(function(){var n=t(this).data("methods")
return n[e]?n[e].apply(this,r):this})}var v=t.extend({},c,e)
return this.each(function(){function e(e){return e=e||"next",t('<button class="'+u.button+" "+("next"===e?u.buttonNext:u.buttonPrev)+'" role="button" />').html(function(t){var e="next"===t?v.buttonNext:v.buttonPrev
return"custom"!==v.buttons&&o?'<svg viewBox="0 0 13 20" xmlns="'+a+'" aria-labelledby="title"><title>'+e+'</title><polyline points="10,3 3,10 10,17"'+("next"===t?' transform="rotate(180 6.5,10)"':"")+"/></svg>":e}(e)).on("click",function(t){d(e),t.preventDefault()})}function r(){M.css("transition",""),w.css("transition",""),I.css("transition","")}function c(e){e&&(M.css("transition","none"),w.css("transition","none"),I.css("transition","none")),C=w.width(),w.height(function(){var e,n=0
return I.each(function(){(e=t(this).height())>n&&(n=e)}),n}()),C?(k&&(clearInterval(k),k=!1),I.each(function(n){var i,a,o=t(this)
o.attr("class",function(t,e){return e&&e.replace(f,"").replace(p," ")}),i=o.outerWidth(),0!==v.spacing&&o.css("margin-right",i*v.spacing+"px"),a=o.position().left,T[n]=-1*(a+i/2-C/2),n===I.length-1&&(h(),e&&setTimeout(r,1))})):k=k||setInterval(function(){c(e)},500)}function h(){var e,i,r,a=I.length
I.each(function(n){e=t(this),i=" ",n===X?(i+=u.itemCurrent,r=a+1):n<X?(i+=u.itemPast+" "+u.itemPast+"-"+(X-n),r=a-(X-n)):(i+=u.itemFuture+" "+u.itemFuture+"-"+(n-X),r=a-(n-X)),e.css("z-index",r).attr("class",function(t,e){return e&&e.replace(f,"").replace(p," ")+i})}),X>=0&&(C&&T[X]!==n||c(!0),l?w.css("transform","translateX("+T[X]+"px)"):w.css({left:T[X]+"px"})),function(){if(v.nav){var e=P.data("flip-category")
D.removeClass(u.navCurrent),E.filter(function(){return t(this).data("index")===X||e&&t(this).data("category")===e}).parent().addClass(u.navCurrent)}}()}function d(t){var e=X
if(!(I.length<=1))return"prev"===t?X>0?X--:v.loop&&(X=I.length-1):"next"===t?X<I.length-1?X++:v.loop&&(X=0):"number"==typeof t?X=t:t!==n&&(X=I.index(t),v.loop&&e!=X&&(e==I.length-1&&X!=I.length-2&&(X=0),0==e&&1!=X&&(X=I.length-1))),P=I.eq(X),X!==e&&v.onItemSwitch&&v.onItemSwitch.call(M,I[X],I[e]),h(),M}function m(t){return v.autoplay=t||v.autoplay,clearInterval(j),j=setInterval(function(){var t=X
d("next"),t!==X||v.loop||clearInterval(j)},v.autoplay),M}function g(){return clearInterval(j),j=0,M}function _(t){return g(),v.autoplay&&t&&(j=-1),M}function y(){c(!0),M.hide().css("visibility","").addClass(u.active).fadeIn(v.fadeIn)}function b(){if(w=M.find(v.itemContainer).addClass(u.container),!((I=w.find(v.itemSelector)).length<=1))return I.addClass(u.item).each(function(){var e=t(this)
e.children("."+u.itemContent).length||e.wrapInner('<div class="'+u.itemContent+'" />')}),v.click&&I.on("click.flipster touchend.flipster",function(e){N||(t(this).hasClass(u.itemCurrent)||e.preventDefault(),d(this))}),v.buttons&&I.length>1&&(M.find("."+u.button).remove(),M.append(e("prev"),e("next"))),n={},!v.nav||I.length<=1||(L&&L.remove(),L=t('<ul class="'+u.nav+'" role="navigation" />'),E=t(""),I.each(function(e){var i=t(this),r=i.data("flip-category"),a=i.data("flip-title")||i.attr("title")||e,o=t('<a href="#" class="'+u.navLink+'">'+a+"</a>").data("index",e)
if(E=E.add(o),r){if(!n[r]){var s=t('<li class="'+u.navItem+" "+u.navCategory+'">'),l=t('<a href="#" class="'+u.navLink+" "+u.navCategoryLink+'" data-flip-category="'+r+'">'+r+"</a>").data("category",r).data("index",e)
n[r]=t('<ul class="'+u.navChild+'" />'),E=E.add(l),s.append(l,n[r]).appendTo(L)}n[r].append(o)}else L.append(o)
o.wrap('<li class="'+u.navItem+'">')}),L.on("click","a",function(e){var n=t(this).data("index")
n>=0&&(d(n),e.preventDefault())}),"after"===v.nav?M.append(L):M.prepend(L),D=L.find("."+u.navItem)),X>=0&&d(X),M
var n}var x,w,C,k,I,P,L,D,E,M=t(this),T=[],X=0,j=!1,N=!1
x={jump:d,next:function(){return d("next")},prev:function(){return d("prev")},play:m,stop:g,pause:_,index:b},M.data("methods",x),M.hasClass(u.active)||function(){var t
if(M.css("visibility","hidden"),b(),I.length<=1)M.css("visibility","")
else{t=!!v.style&&"flipster--"+v.style.split(" ").join(" flipster--"),M.addClass([u.main,l?"flipster--transform":" flipster--no-transform",t,v.click?"flipster--click":""].join(" ")),v.start&&(X="center"===v.start?Math.floor(I.length/2):v.start),d(X)
var e=M.find("img")
if(e.length){var n=0
e.on("load",function(){++n>=e.length&&y()}),setTimeout(y,750)}else y()
s.on("resize.flipster",i(c,400)),v.autoplay&&m(),v.pauseOnHover&&w.on("mouseenter.flipster",function(){j?_(!0):g()}).on("mouseleave.flipster",function(){-1===j&&m()}),function(t){v.keyboard&&(t[0].tabIndex=0,t.on("keydown.flipster",i(function(t){var e=t.which
37!==e&&39!==e||(d(37===e?"prev":"next"),t.preventDefault())},250)))}(M),function(t){if(v.scrollwheel){var e,n,r=!1,a=0,o=0,l=0,c=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase())
t.on("mousewheel.flipster wheel.flipster",function(){r=!0}).on("mousewheel.flipster wheel.flipster",i(function(t){clearTimeout(o),o=setTimeout(function(){a=0,l=0},300),t=t.originalEvent,l+=t.wheelDelta||-1*(t.deltaY+t.deltaX),Math.abs(l)<25&&!c||(a++,n!==(e=l>0?"prev":"next")&&(a=0),n=e,(a<6||a%3==0)&&d(e),l=0)},50)),s.on("mousewheel.flipster wheel.flipster",function(t){r&&(t.preventDefault(),r=!1)})}}(w),function(t){var e,n,i,r,a,o
v.touch&&t.on({"touchstart.flipster":function(t){t=t.originalEvent,e=t.touches?t.touches[0].clientX:t.clientX,n=t.touches?t.touches[0].clientY:t.clientY},"touchmove.flipster":function(t){t=t.originalEvent,i=t.touches?t.touches[0].clientX:t.clientX,r=t.touches?t.touches[0].clientY:t.clientY,o=i-e,a=r-n,Math.abs(o)>30&&Math.abs(a)<100&&t.preventDefault()},"touchend.flipster touchcancel.flipster ":function(){o=i-e,a=r-n,Math.abs(o)>30&&Math.abs(a)<100&&d(o>0?"prev":"next")}})}(w)}}()})}}(jQuery,window)
