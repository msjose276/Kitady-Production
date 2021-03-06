(function($){"use strict"
var _R=jQuery.fn.revolution,_ISM=_R.is_mobile(),extension={alias:"Actions Min JS",name:"revolution.extensions.actions.min.js",min_core:"5.3",version:"2.0.6"}
jQuery.extend(!0,_R,{checkActions:function(e,t,o){if("stop"===_R.compare_version(extension).check)return!1
checkActions_intern(e,t,o)}})
var checkActions_intern=function(e,t,o){o&&jQuery.each(o,function(o,a){a.delay=parseInt(a.delay,0)/1e3,e.addClass("tp-withaction"),t.fullscreen_esclistener||"exitfullscreen"!=a.action&&"togglefullscreen"!=a.action||(jQuery(document).keyup(function(t){27==t.keyCode&&jQuery("#rs-go-fullscreen").length>0&&e.trigger(a.event)}),t.fullscreen_esclistener=!0)
var l="backgroundvideo"==a.layer?jQuery(".rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".tp-revslider-slidesli").find(".tp-videolayer"):jQuery("#"+a.layer)
switch(-1!=jQuery.inArray(a.action,["toggleslider","toggle_mute_video","toggle_global_mute_video","togglefullscreen"])&&e.data("togglelisteners",!0),a.action){case"togglevideo":jQuery.each(l,function(t,o){var a=(o=jQuery(o)).data("videotoggledby")
null==a&&(a=new Array),a.push(e),o.data("videotoggledby",a)})
break
case"togglelayer":jQuery.each(l,function(t,o){var l=(o=jQuery(o)).data("layertoggledby")
null==l&&(l=new Array),l.push(e),o.data("layertoggledby",l),o.data("triggered_startstatus",a.layerstatus)})
break
case"toggle_mute_video":case"toggle_global_mute_video":jQuery.each(l,function(t,o){var a=(o=jQuery(o)).data("videomutetoggledby")
null==a&&(a=new Array),a.push(e),o.data("videomutetoggledby",a)})
break
case"toggleslider":null==t.slidertoggledby&&(t.slidertoggledby=new Array),t.slidertoggledby.push(e)
break
case"togglefullscreen":null==t.fullscreentoggledby&&(t.fullscreentoggledby=new Array),t.fullscreentoggledby.push(e)}switch(e.on(a.event,function(){if("click"===a.event&&e.hasClass("tp-temporarydisabled"))return!1
var o="backgroundvideo"==a.layer?jQuery(".active-revslide .slotholder .rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".active-revslide .tp-videolayer").first():jQuery("#"+a.layer)
if("stoplayer"==a.action||"togglelayer"==a.action||"startlayer"==a.action){if(o.length>0){var l=o.data()
void 0!==l.clicked_time_stamp&&(new Date).getTime()-l.clicked_time_stamp>150&&(clearTimeout(l.triggerdelayIn),clearTimeout(l.triggerdelayOut)),l.clicked_time_stamp=(new Date).getTime(),"startlayer"==a.action||"togglelayer"==a.action&&"in"!=o.data("animdirection")?(l.animdirection="in",l.triggerstate="on",_R.toggleState(l.layertoggledby),_R.playAnimationFrame&&(clearTimeout(l.triggerdelayIn),l.triggerdelayIn=setTimeout(function(){_R.playAnimationFrame({caption:o,opt:t,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"})},1e3*a.delay))):("stoplayer"==a.action||"togglelayer"==a.action&&"out"!=o.data("animdirection"))&&(l.animdirection="out",l.triggered=!0,l.triggerstate="off",_R.stopVideo&&_R.stopVideo(o,t),_R.unToggleState(l.layertoggledby),_R.endMoveCaption&&(clearTimeout(l.triggerdelayOut),l.triggerdelayOut=setTimeout(function(){_R.playAnimationFrame({caption:o,opt:t,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})},1e3*a.delay)))}}else!_ISM||"playvideo"!=a.action&&"stopvideo"!=a.action&&"togglevideo"!=a.action&&"mutevideo"!=a.action&&"unmutevideo"!=a.action&&"toggle_mute_video"!=a.action&&"toggle_global_mute_video"!=a.action?(a.delay="NaN"===a.delay||NaN===a.delay?0:a.delay,punchgs.TweenLite.delayedCall(a.delay,function(){actionSwitches(o,t,a,e)},[o,t,a,e])):actionSwitches(o,t,a,e)}),a.action){case"togglelayer":case"startlayer":case"playlayer":case"stoplayer":var r=(l=jQuery("#"+a.layer)).data()
l.length>0&&void 0!==r&&(void 0!==r.frames&&"bytrigger"!=r.frames[0].delay||void 0===r.frames&&"bytrigger"!==r.start)&&(r.triggerstate="on")}})}
function getScrollRoot(){var e,t=document.documentElement,o=document.body,a=(void 0!==window.pageYOffset?window.pageYOffset:null)||o.scrollTop||t.scrollTop
return t.scrollTop=o.scrollTop=a+(a>0)?-1:1,(e=t.scrollTop!==a?t:o).scrollTop=a,e}var actionSwitches=function(tnc,opt,a,_nc){switch(a.action){case"scrollbelow":a.speed=void 0!==a.speed?a.speed:400,a.ease=void 0!==a.ease?a.ease:punchgs.Power2.easeOut,_nc.addClass("tp-scrollbelowslider"),_nc.data("scrolloffset",a.offset),_nc.data("scrolldelay",a.delay),_nc.data("scrollspeed",a.speed),_nc.data("scrollease",a.ease)
var off=getOffContH(opt.fullScreenOffsetContainer)||0,aof=parseInt(a.offset,0)||0
off=off-aof||0,opt.scrollRoot=void 0===opt.scrollRoot?getScrollRoot():opt.scrollRoot
var sobj={_y:opt.scrollRoot.scrollTop}
punchgs.TweenLite.to(sobj,a.speed/1e3,{_y:opt.c.offset().top+jQuery(opt.li[0]).height()-off,ease:a.ease,onUpdate:function(){opt.scrollRoot.scrollTop=sobj._y}})
break
case"callback":eval(a.callback)
break
case"jumptoslide":switch(a.slide.toLowerCase()){case"+1":case"next":opt.sc_indicator="arrow",_R.callingNewSlide(opt.c,1)
break
case"previous":case"prev":case"-1":opt.sc_indicator="arrow",_R.callingNewSlide(opt.c,-1)
break
default:var ts=jQuery.isNumeric(a.slide)?parseInt(a.slide,0):a.slide
_R.callingNewSlide(opt.c,ts)}break
case"simplelink":window.open(a.url,a.target)
break
case"toggleslider":opt.noloopanymore=0,"playing"==opt.sliderstatus?(opt.c.revpause(),opt.forcepause_viatoggle=!0,_R.unToggleState(opt.slidertoggledby)):(opt.forcepause_viatoggle=!1,opt.c.revresume(),_R.toggleState(opt.slidertoggledby))
break
case"pauseslider":opt.c.revpause(),_R.unToggleState(opt.slidertoggledby)
break
case"playslider":opt.noloopanymore=0,opt.c.revresume(),_R.toggleState(opt.slidertoggledby)
break
case"playvideo":tnc.length>0&&_R.playVideo(tnc,opt)
break
case"stopvideo":tnc.length>0&&_R.stopVideo&&_R.stopVideo(tnc,opt)
break
case"togglevideo":tnc.length>0&&(_R.isVideoPlaying(tnc,opt)?_R.stopVideo&&_R.stopVideo(tnc,opt):_R.playVideo(tnc,opt))
break
case"mutevideo":tnc.length>0&&_R.muteVideo(tnc,opt)
break
case"unmutevideo":tnc.length>0&&_R.unMuteVideo&&_R.unMuteVideo(tnc,opt)
break
case"toggle_mute_video":tnc.length>0&&(_R.isVideoMuted(tnc,opt)?_R.unMuteVideo(tnc,opt):_R.muteVideo&&_R.muteVideo(tnc,opt)),_nc.toggleClass("rs-toggle-content-active")
break
case"toggle_global_mute_video":!0===opt.globalmute?(opt.globalmute=!1,null!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.unMuteVideo&&_R.unMuteVideo(t,opt)})):(opt.globalmute=!0,null!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.muteVideo&&_R.muteVideo(t,opt)})),_nc.toggleClass("rs-toggle-content-active")
break
case"simulateclick":tnc.length>0&&tnc.click()
break
case"toggleclass":tnc.length>0&&(tnc.hasClass(a.classname)?tnc.removeClass(a.classname):tnc.addClass(a.classname))
break
case"gofullscreen":case"exitfullscreen":case"togglefullscreen":if(jQuery("#rs-go-fullscreen").length>0&&("togglefullscreen"==a.action||"exitfullscreen"==a.action)){jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"))
var paw=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper")
paw.unwrap(),paw.unwrap(),opt.minHeight=opt.oldminheight,opt.infullscreenmode=!1,opt.c.revredraw(),null!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.playVideo(t,opt)}),_R.unToggleState(opt.fullscreentoggledby)}else if(0==jQuery("#rs-go-fullscreen").length&&("togglefullscreen"==a.action||"gofullscreen"==a.action)){var paw=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper")
paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>')
var gf=jQuery("#rs-go-fullscreen")
gf.appendTo(jQuery("body")),gf.css({position:"fixed",width:"100%",height:"100%",top:"0px",left:"0px",zIndex:"9999999",background:"#ffffff"}),opt.oldminheight=opt.minHeight,opt.minHeight=jQuery(window).height(),opt.infullscreenmode=!0,opt.c.revredraw(),null!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.playVideo(t,opt)}),_R.toggleState(opt.fullscreentoggledby)}break
default:var obj={}
obj.event=a,obj.layer=_nc,opt.c.trigger("layeraction",[obj])}},getOffContH=function(e){if(null==e)return 0
if(e.split(",").length>1){var t=e.split(","),o=0
return t&&jQuery.each(t,function(e,t){jQuery(t).length>0&&(o+=jQuery(t).outerHeight(!0))}),o}return jQuery(e).height()}})(jQuery)
