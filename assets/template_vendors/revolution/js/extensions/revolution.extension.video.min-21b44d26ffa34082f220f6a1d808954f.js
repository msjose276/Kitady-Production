!function(e){"use strict"
function t(e){return null==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}var a=jQuery.fn.revolution,i=a.is_mobile(),o={alias:"Video Min JS",name:"revolution.extensions.video.min.js",min_core:"5.3",version:"2.0.2"}
jQuery.extend(!0,a,{preLoadAudio:function(e,t){return"stop"!==a.compare_version(o).check&&void e.find(".tp-audiolayer").each(function(){var e=jQuery(this),i={}
0===e.find("audio").length&&(i.src=null!=e.data("videomp4")?e.data("videomp4"):"",i.pre=e.data("videopreload")||"",void 0===e.attr("id")&&e.attr("audio-layer-"+Math.round(199999*Math.random())),i.id=e.attr("id"),i.status="prepared",i.start=jQuery.now(),i.waittime=1e3*e.data("videopreloadwait")||5e3,"auto"!=i.pre&&"canplaythrough"!=i.pre&&"canplay"!=i.pre&&"progress"!=i.pre||(void 0===t.audioqueue&&(t.audioqueue=[]),t.audioqueue.push(i),a.manageVideoLayer(e,t)))})},preLoadAudioDone:function(e,t,a){t.audioqueue&&t.audioqueue.length>0&&jQuery.each(t.audioqueue,function(t,i){e.data("videomp4")!==i.src||i.pre!==a&&"auto"!==i.pre||(i.status="loaded")})},resetVideo:function(e,o,d){var n=e.data()
switch(n.videotype){case"youtube":n.player
try{if("on"==n.forcerewind){var r=-1==(v=t(e.data("videostartat"))),l=1===n.bgvideo||e.find(".tp-videoposter").length>0
v=-1==v?0:v,null!=n.player&&(0!==v&&!r||l)&&(n.player.seekTo(v),n.player.pauseVideo())}}catch(e){}0==e.find(".tp-videoposter").length&&1!==n.bgvideo&&!0!==d&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})
break
case"vimeo":var s=$f(e.find("iframe").attr("id"))
try{if("on"==n.forcerewind){r=-1==(v=t(n.videostartat)),l=1===n.bgvideo||e.find(".tp-videoposter").length>0;(0!==(v=-1==v?0:v)&&!r||l)&&(s.api("seekTo",v),s.api("pause"))}}catch(e){}0==e.find(".tp-videoposter").length&&1!==n.bgvideo&&!0!==d&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})
break
case"html5":if(i&&1==n.disablevideoonmobile)return!1
var u="html5"==n.audio?"audio":"video",p=e.find(u),c=p[0]
if(punchgs.TweenLite.to(p,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==n.forcerewind&&!e.hasClass("videoisplaying"))try{var v=t(n.videostartat)
c.currentTime=-1==v?0:v}catch(e){}("mute"==n.volume||a.lastToggleState(e.videomutetoggledby)||!0===o.globalmute)&&(c.muted=!0)}},isVideoMuted:function(e,t){var a=!1,i=e.data()
switch(i.videotype){case"youtube":try{a=i.player.isMuted()}catch(e){}break
case"vimeo":try{$f(e.find("iframe").attr("id")),"mute"==i.volume&&(a=!0)}catch(e){}break
case"html5":var o="html5"==i.audio?"audio":"video"
e.find(o)[0].muted&&(a=!0)}return a},muteVideo:function(e,t){var a=e.data()
switch(a.videotype){case"youtube":try{a.player.mute()}catch(e){}break
case"vimeo":try{var i=$f(e.find("iframe").attr("id"))
e.data("volume","mute"),i.api("setVolume",0)}catch(e){}break
case"html5":var o="html5"==a.audio?"audio":"video"
e.find(o)[0].muted=!0}},unMuteVideo:function(e,t){if(!0!==t.globalmute){var a=e.data()
switch(a.videotype){case"youtube":try{a.player.unMute()}catch(e){}break
case"vimeo":try{var i=$f(e.find("iframe").attr("id"))
e.data("volume","1"),i.api("setVolume",1)}catch(e){}break
case"html5":var o="html5"==a.audio?"audio":"video"
e.find(o)[0].muted=!1}}},stopVideo:function(e,t){var a=e.data()
switch(t.leaveViewPortBasedStop||(t.lastplayedvideos=[]),t.leaveViewPortBasedStop=!1,a.videotype){case"youtube":try{var i=a.player
if(2===i.getPlayerState()||5===i.getPlayerState())return
i.pauseVideo(),a.youtubepausecalled=!0,setTimeout(function(){a.youtubepausecalled=!1},80)}catch(e){console.log("Issue at YouTube Video Pause:"),console.log(e)}break
case"vimeo":try{$f(e.find("iframe").attr("id")).api("pause"),a.vimeopausecalled=!0,setTimeout(function(){a.vimeopausecalled=!1},80)}catch(e){console.log("Issue at Vimeo Video Pause:"),console.log(e)}break
case"html5":var o="html5"==a.audio?"audio":"video",d=e.find(o),n=d[0]
null!=d&&null!=n&&n.pause()}},playVideo:function(e,o){clearTimeout(e.data("videoplaywait"))
var n=e.data()
switch(n.videotype){case"youtube":if(0==e.find("iframe").length)e.append(e.data("videomarkup")),r(e,o,!0)
else if(null!=n.player.playVideo){var l=t(e.data("videostartat")),s=n.player.getCurrentTime()
1==e.data("nextslideatend-triggered")&&(s=-1,e.data("nextslideatend-triggered",0)),-1!=l&&l>s&&n.player.seekTo(l),!0!==n.youtubepausecalled&&n.player.playVideo()}else e.data("videoplaywait",setTimeout(function(){!0!==n.youtubepausecalled&&a.playVideo(e,o)},50))
break
case"vimeo":if(0==e.find("iframe").length)e.append(e.data("videomarkup")),r(e,o,!0)
else if(e.hasClass("rs-apiready")){var u=e.find("iframe").attr("id"),p=$f(u)
null==p.api("play")?e.data("videoplaywait",setTimeout(function(){!0!==n.vimeopausecalled&&a.playVideo(e,o)},50)):setTimeout(function(){p.api("play")
var a=t(e.data("videostartat")),i=e.data("currenttime")
1==e.data("nextslideatend-triggered")&&(i=-1,e.data("nextslideatend-triggered",0)),-1!=a&&a>i&&p.api("seekTo",a)},510)}else e.data("videoplaywait",setTimeout(function(){!0!==n.vimeopausecalled&&a.playVideo(e,o)},50))
break
case"html5":if(i&&1==e.data("disablevideoonmobile"))return!1
var c="html5"==n.audio?"audio":"video",v=e.find(c),g=v[0]
if(1!=v.parent().data("metaloaded"))d(g,"loadedmetadata",function(e){a.resetVideo(e,o),g.play()
var i=t(e.data("videostartat")),d=g.currentTime
1==e.data("nextslideatend-triggered")&&(d=-1,e.data("nextslideatend-triggered",0)),-1!=i&&i>d&&(g.currentTime=i)}(e))
else{g.play()
l=t(e.data("videostartat")),s=g.currentTime
1==e.data("nextslideatend-triggered")&&(s=-1,e.data("nextslideatend-triggered",0)),-1!=l&&l>s&&(g.currentTime=l)}}},isVideoPlaying:function(e,t){var a=!1
return null!=t.playingvideos&&jQuery.each(t.playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},removeMediaFromList:function(e,t){c(e,t)},prepareCoveredVideo:function(e,t,i){var o=i.find("iframe, video"),d=e.split(":")[0],n=e.split(":")[1],r=i.closest(".tp-revslider-slidesli"),l=r.width()/r.height(),s=d/n,u=l/s*100,p=s/l*100
l>s?punchgs.TweenLite.to(o,.001,{height:u+"%",width:"100%",top:-(u-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.to(o,.001,{width:p+"%",height:"100%",left:-(p-100)/2+"%",top:"0px",position:"absolute"}),o.hasClass("resizelistener")||(o.addClass("resizelistener"),jQuery(window).resize(function(){clearTimeout(o.data("resizelistener")),o.data("resizelistener",setTimeout(function(){a.prepareCoveredVideo(e,t,i)},30))}))},checkVideoApis:function(e,t,a){if(location.protocol,(null!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t.youtubeapineeded=!0),(null!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==a.addedyt){t.youtubestarttime=jQuery.now(),a.addedyt=1
var i=document.createElement("script")
i.src="https://www.youtube.com/iframe_api"
var o=document.getElementsByTagName("script")[0],d=!0
jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(i,o)}if((null!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t.vimeoapineeded=!0),(null!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==a.addedvim){t.vimeostarttime=jQuery.now(),a.addedvim=1
var n=document.createElement("script")
o=document.getElementsByTagName("script")[0],d=!0
n.src="https://secure-a.vimeocdn.com/js/froogaloop2.min.js",jQuery("head").find("*").each(function(){"https://secure-a.vimeocdn.com/js/froogaloop2.min.js"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(n,o)}return a},manageVideoLayer:function(e,n,l,s){if("stop"===a.compare_version(o).check)return!1
var p=e.data(),c=p.videoattributes,v=p.ytid,g=p.vimeoid,m="auto"===p.videopreload||"canplay"===p.videopreload||"canplaythrough"===p.videopreload||"progress"===p.videopreload?"auto":p.videopreload,f=p.videomp4,y=p.videowebm,h=p.videoogv,b=p.allowfullscreenvideo,w=p.videocontrols,T="http",k="loop"==p.videoloop?"loop":"loopandnoslidestop"==p.videoloop?"loop":"",x=null!=f||null!=y?"html5":null!=v&&String(v).length>1?"youtube":null!=g&&String(g).length>1?"vimeo":"none",L="html5"==p.audio?"audio":"video",V="html5"==x&&0==e.find(L).length?"html5":"youtube"==x&&0==e.find("iframe").length?"youtube":"vimeo"==x&&0==e.find("iframe").length?"vimeo":"none"
switch(k=!0===p.nextslideatend?"":k,p.videotype=x,V){case"html5":"controls"!=w&&(w="")
L="video"
"html5"==p.audio&&(L="audio",e.addClass("tp-audio-html5"))
var P="<"+L+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+k+' preload="'+m+'">'
"auto"==m&&(n.mediapreload=!0),null!=y&&"firefox"==a.get_browser().toLowerCase()&&(P=P+'<source src="'+y+'" type="video/webm" />'),null!=f&&(P=P+'<source src="'+f+'" type="video/mp4" />'),null!=h&&(P=P+'<source src="'+h+'" type="video/ogg" />'),P=P+"</"+L+">"
var C=""
"true"!==b&&!0!==b||(C='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==w&&(P+='<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+C+"</div>"),e.data("videomarkup",P),e.append(P),(i&&1==e.data("disablevideoonmobile")||a.isIE(8))&&e.find(L).remove(),e.find(L).each(function(t){var i=jQuery(this)
i.parent().hasClass("html5vid")||i.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),1!=i.parent().data("metaloaded")&&d(this,"loadedmetadata",function(e){u(e,n),a.resetVideo(e,n)}(e))})
break
case"youtube":T="https","none"==w&&(-1==(c=c.replace("controls=1","controls=0")).toLowerCase().indexOf("controls")&&(c+="&controls=0")),!0!==p.videoinline&&"true"!==p.videoinline&&1!==p.videoinline||(c+="&playsinline=1")
var I=t(e.data("videostartat")),j=t(e.data("videoendat"));-1!=I&&(c=c+"&start="+I),-1!=j&&(c=c+"&end="+j)
var _=c.split("origin="+T+"://"),A=""
_.length>1?(A=_[0]+"origin="+T+"://",self.location.href.match(/www/gi)&&!_[1].match(/www/gi)&&(A+="www."),A+=_[1]):A=c
var S="true"===b||!0===b?"allowfullscreen":""
e.data("videomarkup",'<iframe type="text/html" src="'+T+"://www.youtube.com/embed/"+v+"?"+A+'" '+S+' width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>')
break
case"vimeo":T="https",e.data("videomarkup",'<iframe src="'+T+"://player.vimeo.com/video/"+g+"?autoplay=0&"+c+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;100%;height:100%"></iframe>')}var O=i&&"on"==e.data("noposteronmobile")
if(null!=p.videoposter&&p.videoposter.length>2&&!O)0==e.find(".tp-videoposter").length&&e.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+p.videoposter+'); background-size:cover;background-position:center center;"></div>'),0==e.find("iframe").length&&e.find(".tp-videoposter").click(function(){if(a.playVideo(e,n),i){if(1==e.data("disablevideoonmobile"))return!1
punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}})
else{if(i&&1==e.data("disablevideoonmobile"))return!1
0!=e.find("iframe").length||"youtube"!=x&&"vimeo"!=x||(e.append(e.data("videomarkup")),r(e,n,!1))}"none"!=e.data("dottedoverlay")&&null!=e.data("dottedoverlay")&&1!=e.find(".tp-dottedoverlay").length&&e.append('<div class="tp-dottedoverlay '+e.data("dottedoverlay")+'"></div>'),e.addClass("HasListener"),1==e.data("bgvideo")&&punchgs.TweenLite.set(e.find("video, iframe"),{autoAlpha:0})}})
var d=function(e,t,a){e.addEventListener?e.addEventListener(t,a,{capture:!1,passive:!0}):e.attachEvent(t,a,{capture:!1,passive:!0})},n=function(e,t,a){var i={}
return i.video=e,i.videotype=t,i.settings=a,i},r=function(e,o,d){var r,u=e.data(),v=e.find("iframe"),g="iframe"+Math.round(1e5*Math.random()+1),m=u.videoloop,f="loopandnoslidestop"!=m;(m="loop"==m||"loopandnoslidestop"==m,1==e.data("forcecover"))&&(e.removeClass("fullscreenvideo").addClass("coverscreenvideo"),null!=(r=e.data("aspectratio"))&&r.split(":").length>1&&a.prepareCoveredVideo(r,o,e))
1==e.data("bgvideo")&&(null!=(r=e.data("aspectratio"))&&r.split(":").length>1&&a.prepareCoveredVideo(r,o,e))
if(v.attr("id",g),d&&e.data("startvideonow",!0),1!==e.data("videolistenerexist"))switch(u.videotype){case"youtube":var y=new YT.Player(g,{events:{onStateChange:function(i){var d=e.closest(".tp-simpleresponsive"),r=(u.videorate,e.data("videostart"),s())
if(i.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==e.data("volume")||a.lastToggleState(e.data("videomutetoggledby"))||!0===o.globalmute?y.mute():(y.unMute(),y.setVolume(parseInt(e.data("volume"),0)||75)),o.videoplaying=!0,p(e,o),f?o.c.trigger("stoptimer"):o.videoplaying=!1,o.c.trigger("revolution.slide.onvideoplay",n(y,"youtube",e.data())),a.toggleState(u.videotoggledby)
else{if(0==i.data&&m){var v=t(e.data("videostartat"));-1!=v&&y.seekTo(v),y.playVideo(),a.toggleState(u.videotoggledby)}!r&&(0==i.data||2==i.data)&&"on"==e.data("showcoveronpause")&&e.find(".tp-videoposter").length>0&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),-1!=i.data&&3!=i.data&&(o.videoplaying=!1,o.tonpause=!1,c(e,o),d.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",n(y,"youtube",e.data())),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(u.videotoggledby)),0==i.data&&1==e.data("nextslideatend")?(l(),e.data("nextslideatend-triggered",1),o.c.revnext(),c(e,o)):(c(e,o),o.videoplaying=!1,d.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",n(y,"youtube",e.data())),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(u.videotoggledby))}},onReady:function(a){var o=u.videorate
if(e.data("videostart"),e.addClass("rs-apiready"),null!=o&&a.target.setPlaybackRate(parseFloat(o)),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){i||y.playVideo()}),e.data("startvideonow")){u.player.playVideo()
var d=t(e.data("videostartat"));-1!=d&&u.player.seekTo(d)}e.data("videolistenerexist",1)}}})
e.data("player",y)
break
case"vimeo":for(var h,b=v.attr("src"),w={},T=b,k=/([^&=]+)=([^&]*)/g;h=k.exec(T);)w[decodeURIComponent(h[1])]=decodeURIComponent(h[2])
b=null!=w.player_id?b.replace(w.player_id,g):b+"&player_id="+g
try{b=b.replace("api=0","api=1")}catch(e){}b+="&api=1",v.attr("src",b)
y=e.find("iframe")[0];(L=(jQuery("#"+g),$f(g))).addEvent("ready",function(){if(e.addClass("rs-apiready"),L.addEvent("play",function(t){e.data("nextslidecalled",0),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),o.c.trigger("revolution.slide.onvideoplay",n(L,"vimeo",e.data())),o.videoplaying=!0,p(e,o),f?o.c.trigger("stoptimer"):o.videoplaying=!1,"mute"==e.data("volume")||a.lastToggleState(e.data("videomutetoggledby"))||!0===o.globalmute?L.api("setVolume","0"):L.api("setVolume",parseInt(e.data("volume"),0)/100||.75),a.toggleState(u.videotoggledby)}),L.addEvent("playProgress",function(a){var i=t(e.data("videoendat"))
if(e.data("currenttime",a.seconds),0!=i&&Math.abs(i-a.seconds)<.3&&i>a.seconds&&1!=e.data("nextslidecalled"))if(m){L.api("play")
var d=t(e.data("videostartat"));-1!=d&&L.api("seekTo",d)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),o.c.revnext()),L.api("pause")}),L.addEvent("finish",function(t){c(e,o),o.videoplaying=!1,o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",n(L,"vimeo",e.data())),1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),o.c.revnext()),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(u.videotoggledby)}),L.addEvent("pause",function(t){e.find(".tp-videoposter").length>0&&"on"==e.data("showcoveronpause")&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),o.videoplaying=!1,o.tonpause=!1,c(e,o),o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",n(L,"vimeo",e.data())),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(u.videotoggledby)}),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){if(!i)return L.api("play"),!1}),e.data("startvideonow")){L.api("play")
var d=t(e.data("videostartat"));-1!=d&&L.api("seekTo",d)}e.data("videolistenerexist",1)})}else{var x=t(e.data("videostartat"))
switch(u.videotype){case"youtube":d&&(u.player.playVideo(),-1!=x&&u.player.seekTo())
break
case"vimeo":var L
if(d)(L=$f(e.find("iframe").attr("id"))).api("play"),-1!=x&&L.api("seekTo",x)}}},l=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},s=function(){try{if(void 0!==window.fullScreen)return window.fullScreen
var e=5
return jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)&&(e=42),screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e}catch(e){}},u=function(e,o,r){if(i&&1==e.data("disablevideoonmobile"))return!1
var u=e.data(),v="html5"==u.audio?"audio":"video",g=e.find(v),m=g[0],f=g.parent(),y=u.videoloop,h="loopandnoslidestop"!=y
if(y="loop"==y||"loopandnoslidestop"==y,f.data("metaloaded",1),1!=e.data("bgvideo")||"none"!==u.videoloop&&!1!==u.videoloop||(h=!1),null==g.attr("control")&&(0!=e.find(".tp-video-play-button").length||i||e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),e.find("video, .tp-poster, .tp-video-play-button").click(function(){e.hasClass("videoisplaying")?m.pause():m.play()})),1==e.data("forcecover")||e.hasClass("fullscreenvideo")||1==e.data("bgvideo"))if(1==e.data("forcecover")||1==e.data("bgvideo")){f.addClass("fullcoveredvideo")
var b=e.data("aspectratio")||"4:3"
a.prepareCoveredVideo(b,o,e)}else f.addClass("fullscreenvideo")
var w=e.find(".tp-vid-play-pause")[0],T=e.find(".tp-vid-mute")[0],k=e.find(".tp-vid-full-screen")[0],x=e.find(".tp-seek-bar")[0],L=e.find(".tp-volume-bar")[0]
null!=w&&d(w,"click",function(){1==m.paused?m.play():m.pause()}),null!=T&&d(T,"click",function(){0==m.muted?(m.muted=!0,T.innerHTML="Unmute"):(m.muted=!1,T.innerHTML="Mute")}),null!=k&&k&&d(k,"click",function(){m.requestFullscreen?m.requestFullscreen():m.mozRequestFullScreen?m.mozRequestFullScreen():m.webkitRequestFullscreen&&m.webkitRequestFullscreen()}),null!=x&&(d(x,"change",function(){var e=m.duration*(x.value/100)
m.currentTime=e}),d(x,"mousedown",function(){e.addClass("seekbardragged"),m.pause()}),d(x,"mouseup",function(){e.removeClass("seekbardragged"),m.play()})),d(m,"canplaythrough",function(){a.preLoadAudioDone(e,o,"canplaythrough")}),d(m,"canplay",function(){a.preLoadAudioDone(e,o,"canplay")}),d(m,"progress",function(){a.preLoadAudioDone(e,o,"progress")}),d(m,"timeupdate",function(){var a=100/m.duration*m.currentTime,i=t(e.data("videoendat")),d=m.currentTime
if(null!=x&&(x.value=a),0!=i&&-1!=i&&Math.abs(i-d)<=.3&&i>d&&1!=e.data("nextslidecalled"))if(y){m.play()
var n=t(e.data("videostartat"));-1!=n&&(m.currentTime=n)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),o.just_called_nextslide_at_htmltimer=!0,o.c.revnext(),setTimeout(function(){o.just_called_nextslide_at_htmltimer=!1},1e3)),m.pause()}),null!=L&&d(L,"change",function(){m.volume=L.value}),d(m,"play",function(){e.data("nextslidecalled",0)
var t=e.data("volume")
t=null!=t&&"mute"!=t?parseFloat(t)/100:t,!0===o.globalmute?m.muted=!0:m.muted=!1,t>1&&(t/=100),"mute"==t?m.muted=!0:null!=t&&(m.volume=t),e.addClass("videoisplaying")
var i="html5"==u.audio?"audio":"video"
p(e,o),h&&"audio"!=i?(o.videoplaying=!0,o.c.trigger("stoptimer"),o.c.trigger("revolution.slide.onvideoplay",n(m,"html5",u))):(o.videoplaying=!1,"audio"!=i&&o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",n(m,"html5",u))),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(i),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})
var d=e.find(".tp-vid-play-pause")[0],r=e.find(".tp-vid-mute")[0]
null!=d&&(d.innerHTML="Pause"),null!=r&&m.muted&&(r.innerHTML="Unmute"),a.toggleState(u.videotoggledby)}),d(m,"pause",function(){var t="html5"==u.audio?"audio":"video"
!s()&&e.find(".tp-videoposter").length>0&&"on"==e.data("showcoveronpause")&&!e.hasClass("seekbardragged")&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(t),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),e.removeClass("videoisplaying"),o.videoplaying=!1,c(e,o),"audio"!=t&&o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",n(m,"html5",e.data()))
var i=e.find(".tp-vid-play-pause")[0]
null!=i&&(i.innerHTML="Play"),null!=o.currentLayerVideoIsPlaying&&o.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||a.unToggleState(u.videotoggledby)}),d(m,"ended",function(){l(),c(e,o),o.videoplaying=!1,c(e,o),"audio"!=v&&o.c.trigger("starttimer"),o.c.trigger("revolution.slide.onvideostop",n(m,"html5",e.data())),!0===e.data("nextslideatend")&&m.currentTime>0&&(1==!o.just_called_nextslide_at_htmltimer&&(e.data("nextslideatend-triggered",1),o.c.revnext(),o.just_called_nextslide_at_htmltimer=!0),setTimeout(function(){o.just_called_nextslide_at_htmltimer=!1},1500)),e.removeClass("videoisplaying")})},p=function(e,t){null==t.playingvideos&&(t.playingvideos=new Array),e.data("stopallvideos")&&null!=t.playingvideos&&t.playingvideos.length>0&&(t.lastplayedvideos=jQuery.extend(!0,[],t.playingvideos),jQuery.each(t.playingvideos,function(e,i){a.stopVideo(i,t)})),t.playingvideos.push(e),t.currentLayerVideoIsPlaying=e},c=function(e,t){null!=t.playingvideos&&jQuery.inArray(e,t.playingvideos)>=0&&t.playingvideos.splice(jQuery.inArray(e,t.playingvideos),1)}}(jQuery)
