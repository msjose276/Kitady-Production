(function(e){"use strict"
var t=jQuery.fn.revolution,a=t.is_mobile(),i={alias:"Video Min JS",name:"revolution.extensions.video.min.js",min_core:"5.3",version:"2.0.2"}
function o(e){return null==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}jQuery.extend(!0,t,{preLoadAudio:function(e,a){if("stop"===t.compare_version(i).check)return!1
e.find(".tp-audiolayer").each(function(){var e=jQuery(this),i={}
0===e.find("audio").length&&(i.src=null!=e.data("videomp4")?e.data("videomp4"):"",i.pre=e.data("videopreload")||"",void 0===e.attr("id")&&e.attr("audio-layer-"+Math.round(199999*Math.random())),i.id=e.attr("id"),i.status="prepared",i.start=jQuery.now(),i.waittime=1e3*e.data("videopreloadwait")||5e3,"auto"!=i.pre&&"canplaythrough"!=i.pre&&"canplay"!=i.pre&&"progress"!=i.pre||(void 0===a.audioqueue&&(a.audioqueue=[]),a.audioqueue.push(i),t.manageVideoLayer(e,a)))})},preLoadAudioDone:function(e,t,a){t.audioqueue&&t.audioqueue.length>0&&jQuery.each(t.audioqueue,function(t,i){e.data("videomp4")!==i.src||i.pre!==a&&"auto"!==i.pre||(i.status="loaded")})},resetVideo:function(e,i,d){var n=e.data()
switch(n.videotype){case"youtube":n.player
try{if("on"==n.forcerewind){var r=-1==(u=o(e.data("videostartat"))),l=1===n.bgvideo||e.find(".tp-videoposter").length>0
u=-1==u?0:u,null!=n.player&&(0!==u&&!r||l)&&(n.player.seekTo(u),n.player.pauseVideo())}}catch(g){}0==e.find(".tp-videoposter").length&&1!==n.bgvideo&&!0!==d&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})
break
case"vimeo":var s=$f(e.find("iframe").attr("id"))
try{if("on"==n.forcerewind){var u=o(n.videostartat)
r=-1==u,l=1===n.bgvideo||e.find(".tp-videoposter").length>0;(0!==(u=-1==u?0:u)&&!r||l)&&(s.api("seekTo",u),s.api("pause"))}}catch(g){}0==e.find(".tp-videoposter").length&&1!==n.bgvideo&&!0!==d&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})
break
case"html5":if(a&&1==n.disablevideoonmobile)return!1
var p="html5"==n.audio?"audio":"video",c=e.find(p),v=c[0]
if(punchgs.TweenLite.to(c,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==n.forcerewind&&!e.hasClass("videoisplaying"))try{u=o(n.videostartat)
v.currentTime=-1==u?0:u}catch(g){}("mute"==n.volume||t.lastToggleState(e.videomutetoggledby)||!0===i.globalmute)&&(v.muted=!0)}},isVideoMuted:function(e,t){var a=!1,i=e.data()
switch(i.videotype){case"youtube":try{a=i.player.isMuted()}catch(d){}break
case"vimeo":try{$f(e.find("iframe").attr("id"))
"mute"==i.volume&&(a=!0)}catch(d){}break
case"html5":var o="html5"==i.audio?"audio":"video"
e.find(o)[0].muted&&(a=!0)}return a},muteVideo:function(e,t){var a=e.data()
switch(a.videotype){case"youtube":try{a.player.mute()}catch(d){}break
case"vimeo":try{var i=$f(e.find("iframe").attr("id"))
e.data("volume","mute"),i.api("setVolume",0)}catch(d){}break
case"html5":var o="html5"==a.audio?"audio":"video"
e.find(o)[0].muted=!0}},unMuteVideo:function(e,t){if(!0!==t.globalmute){var a=e.data()
switch(a.videotype){case"youtube":try{a.player.unMute()}catch(d){}break
case"vimeo":try{var i=$f(e.find("iframe").attr("id"))
e.data("volume","1"),i.api("setVolume",1)}catch(d){}break
case"html5":var o="html5"==a.audio?"audio":"video"
e.find(o)[0].muted=!1}}},stopVideo:function(e,t){var a=e.data()
switch(t.leaveViewPortBasedStop||(t.lastplayedvideos=[]),t.leaveViewPortBasedStop=!1,a.videotype){case"youtube":try{var i=a.player
if(2===i.getPlayerState()||5===i.getPlayerState())return
i.pauseVideo(),a.youtubepausecalled=!0,setTimeout(function(){a.youtubepausecalled=!1},80)}catch(r){console.log("Issue at YouTube Video Pause:"),console.log(r)}break
case"vimeo":try{$f(e.find("iframe").attr("id")).api("pause"),a.vimeopausecalled=!0,setTimeout(function(){a.vimeopausecalled=!1},80)}catch(r){console.log("Issue at Vimeo Video Pause:"),console.log(r)}break
case"html5":var o="html5"==a.audio?"audio":"video",d=e.find(o),n=d[0]
null!=d&&null!=n&&n.pause()}},playVideo:function(e,i){clearTimeout(e.data("videoplaywait"))
var n=e.data()
switch(n.videotype){case"youtube":if(0==e.find("iframe").length)e.append(e.data("videomarkup")),r(e,i,!0)
else if(null!=n.player.playVideo){var l=o(e.data("videostartat")),s=n.player.getCurrentTime()
1==e.data("nextslideatend-triggered")&&(s=-1,e.data("nextslideatend-triggered",0)),-1!=l&&l>s&&n.player.seekTo(l),!0!==n.youtubepausecalled&&n.player.playVideo()}else e.data("videoplaywait",setTimeout(function(){!0!==n.youtubepausecalled&&t.playVideo(e,i)},50))
break
case"vimeo":if(0==e.find("iframe").length)e.append(e.data("videomarkup")),r(e,i,!0)
else if(e.hasClass("rs-apiready")){var u=e.find("iframe").attr("id"),p=$f(u)
null==p.api("play")?e.data("videoplaywait",setTimeout(function(){!0!==n.vimeopausecalled&&t.playVideo(e,i)},50)):setTimeout(function(){p.api("play")
var t=o(e.data("videostartat")),a=e.data("currenttime")
1==e.data("nextslideatend-triggered")&&(a=-1,e.data("nextslideatend-triggered",0)),-1!=t&&t>a&&p.api("seekTo",t)},510)}else e.data("videoplaywait",setTimeout(function(){!0!==n.vimeopausecalled&&t.playVideo(e,i)},50))
break
case"html5":if(a&&1==e.data("disablevideoonmobile"))return!1
var c="html5"==n.audio?"audio":"video",v=e.find(c),g=v[0]
if(1!=v.parent().data("metaloaded"))d(g,"loadedmetadata",function(e){t.resetVideo(e,i),g.play()
var a=o(e.data("videostartat")),d=g.currentTime
1==e.data("nextslideatend-triggered")&&(d=-1,e.data("nextslideatend-triggered",0)),-1!=a&&a>d&&(g.currentTime=a)}(e))
else{g.play()
l=o(e.data("videostartat")),s=g.currentTime
1==e.data("nextslideatend-triggered")&&(s=-1,e.data("nextslideatend-triggered",0)),-1!=l&&l>s&&(g.currentTime=l)}}},isVideoPlaying:function(e,t){var a=!1
return null!=t.playingvideos&&jQuery.each(t.playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},removeMediaFromList:function(e,t){c(e,t)},prepareCoveredVideo:function(e,a,i){var o=i.find("iframe, video"),d=e.split(":")[0],n=e.split(":")[1],r=i.closest(".tp-revslider-slidesli"),l=r.width()/r.height(),s=d/n,u=l/s*100,p=s/l*100
l>s?punchgs.TweenLite.to(o,.001,{height:u+"%",width:"100%",top:-(u-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.to(o,.001,{width:p+"%",height:"100%",left:-(p-100)/2+"%",top:"0px",position:"absolute"}),o.hasClass("resizelistener")||(o.addClass("resizelistener"),jQuery(window).resize(function(){clearTimeout(o.data("resizelistener")),o.data("resizelistener",setTimeout(function(){t.prepareCoveredVideo(e,a,i)},30))}))},checkVideoApis:function(e,t,a){location.protocol
if((null!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t.youtubeapineeded=!0),(null!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==a.addedyt){t.youtubestarttime=jQuery.now(),a.addedyt=1
var i=document.createElement("script")
i.src="https://www.youtube.com/iframe_api"
var o=document.getElementsByTagName("script")[0],d=!0
jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(i,o)}if((null!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t.vimeoapineeded=!0),(null!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==a.addedvim){t.vimeostarttime=jQuery.now(),a.addedvim=1
var n=document.createElement("script")
o=document.getElementsByTagName("script")[0],d=!0
n.src="https://secure-a.vimeocdn.com/js/froogaloop2.min.js",jQuery("head").find("*").each(function(){"https://secure-a.vimeocdn.com/js/froogaloop2.min.js"==jQuery(this).attr("src")&&(d=!1)}),d&&o.parentNode.insertBefore(n,o)}return a},manageVideoLayer:function(e,n,l,s){if("stop"===t.compare_version(i).check)return!1
var p=e.data(),c=p.videoattributes,v=p.ytid,g=p.vimeoid,m="auto"===p.videopreload||"canplay"===p.videopreload||"canplaythrough"===p.videopreload||"progress"===p.videopreload?"auto":p.videopreload,f=p.videomp4,y=p.videowebm,h=p.videoogv,b=p.allowfullscreenvideo,w=p.videocontrols,T="http",k="loop"==p.videoloop?"loop":"loopandnoslidestop"==p.videoloop?"loop":"",x=null!=f||null!=y?"html5":null!=v&&String(v).length>1?"youtube":null!=g&&String(g).length>1?"vimeo":"none",L="html5"==p.audio?"audio":"video",V="html5"==x&&0==e.find(L).length?"html5":"youtube"==x&&0==e.find("iframe").length?"youtube":"vimeo"==x&&0==e.find("iframe").length?"vimeo":"none"
switch(k=!0===p.nextslideatend?"":k,p.videotype=x,V){case"html5":"controls"!=w&&(w="")
L="video"
"html5"==p.audio&&(L="audio",e.addClass("tp-audio-html5"))
var P="<"+L+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+k+' preload="'+m+'">'
"auto"==m&&(n.mediapreload=!0),null!=y&&"firefox"==t.get_browser().toLowerCase()&&(P=P+'<source src="'+y+'" type="video/webm" />'),null!=f&&(P=P+'<source src="'+f+'" type="video/mp4" />'),null!=h&&(P=P+'<source src="'+h+'" type="video/ogg" />'),P=P+"</"+L+">"
var C=""
"true"!==b&&!0!==b||(C='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==w&&(P=P+'<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+C+"</div>"),e.data("videomarkup",P),e.append(P),(a&&1==e.data("disablevideoonmobile")||t.isIE(8))&&e.find(L).remove(),e.find(L).each(function(a){var i=jQuery(this)
i.parent().hasClass("html5vid")||i.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),1!=i.parent().data("metaloaded")&&d(this,"loadedmetadata",function(e){u(e,n),t.resetVideo(e,n)}(e))})
break
case"youtube":T="https","none"==w&&-1==(c=c.replace("controls=1","controls=0")).toLowerCase().indexOf("controls")&&(c+="&controls=0"),!0!==p.videoinline&&"true"!==p.videoinline&&1!==p.videoinline||(c+="&playsinline=1")
var I=o(e.data("videostartat")),j=o(e.data("videoendat"));-1!=I&&(c=c+"&start="+I),-1!=j&&(c=c+"&end="+j)
var _=c.split("origin="+T+"://"),A=""
_.length>1?(A=_[0]+"origin="+T+"://",self.location.href.match(/www/gi)&&!_[1].match(/www/gi)&&(A+="www."),A+=_[1]):A=c
var S="true"===b||!0===b?"allowfullscreen":""
e.data("videomarkup",'<iframe type="text/html" src="'+T+"://www.youtube.com/embed/"+v+"?"+A+'" '+S+' width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>')
break
case"vimeo":T="https",e.data("videomarkup",'<iframe src="'+T+"://player.vimeo.com/video/"+g+"?autoplay=0&"+c+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;100%;height:100%"></iframe>')}var O=a&&"on"==e.data("noposteronmobile")
if(null!=p.videoposter&&p.videoposter.length>2&&!O)0==e.find(".tp-videoposter").length&&e.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+p.videoposter+'); background-size:cover;background-position:center center;"></div>'),0==e.find("iframe").length&&e.find(".tp-videoposter").click(function(){if(t.playVideo(e,n),a){if(1==e.data("disablevideoonmobile"))return!1
punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}})
else{if(a&&1==e.data("disablevideoonmobile"))return!1
0!=e.find("iframe").length||"youtube"!=x&&"vimeo"!=x||(e.append(e.data("videomarkup")),r(e,n,!1))}"none"!=e.data("dottedoverlay")&&null!=e.data("dottedoverlay")&&1!=e.find(".tp-dottedoverlay").length&&e.append('<div class="tp-dottedoverlay '+e.data("dottedoverlay")+'"></div>'),e.addClass("HasListener"),1==e.data("bgvideo")&&punchgs.TweenLite.set(e.find("video, iframe"),{autoAlpha:0})}})
var d=function(e,t,a){e.addEventListener?e.addEventListener(t,a,{capture:!1,passive:!0}):e.attachEvent(t,a,{capture:!1,passive:!0})},n=function(e,t,a){var i={}
return i.video=e,i.videotype=t,i.settings=a,i},r=function(e,i,d){var r,u=e.data(),v=e.find("iframe"),g="iframe"+Math.round(1e5*Math.random()+1),m=u.videoloop,f="loopandnoslidestop"!=m;(m="loop"==m||"loopandnoslidestop"==m,1==e.data("forcecover"))&&(e.removeClass("fullscreenvideo").addClass("coverscreenvideo"),null!=(r=e.data("aspectratio"))&&r.split(":").length>1&&t.prepareCoveredVideo(r,i,e))
1==e.data("bgvideo")&&(null!=(r=e.data("aspectratio"))&&r.split(":").length>1&&t.prepareCoveredVideo(r,i,e))
if(v.attr("id",g),d&&e.data("startvideonow",!0),1!==e.data("videolistenerexist"))switch(u.videotype){case"youtube":var y=new YT.Player(g,{events:{onStateChange:function(a){var d=e.closest(".tp-simpleresponsive"),r=(u.videorate,e.data("videostart"),s())
if(a.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==e.data("volume")||t.lastToggleState(e.data("videomutetoggledby"))||!0===i.globalmute?y.mute():(y.unMute(),y.setVolume(parseInt(e.data("volume"),0)||75)),i.videoplaying=!0,p(e,i),f?i.c.trigger("stoptimer"):i.videoplaying=!1,i.c.trigger("revolution.slide.onvideoplay",n(y,"youtube",e.data())),t.toggleState(u.videotoggledby)
else{if(0==a.data&&m){var v=o(e.data("videostartat"));-1!=v&&y.seekTo(v),y.playVideo(),t.toggleState(u.videotoggledby)}!r&&(0==a.data||2==a.data)&&"on"==e.data("showcoveronpause")&&e.find(".tp-videoposter").length>0&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),-1!=a.data&&3!=a.data&&(i.videoplaying=!1,i.tonpause=!1,c(e,i),d.trigger("starttimer"),i.c.trigger("revolution.slide.onvideostop",n(y,"youtube",e.data())),null!=i.currentLayerVideoIsPlaying&&i.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(u.videotoggledby)),0==a.data&&1==e.data("nextslideatend")?(l(),e.data("nextslideatend-triggered",1),i.c.revnext(),c(e,i)):(c(e,i),i.videoplaying=!1,d.trigger("starttimer"),i.c.trigger("revolution.slide.onvideostop",n(y,"youtube",e.data())),null!=i.currentLayerVideoIsPlaying&&i.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(u.videotoggledby))}},onReady:function(t){var i=u.videorate
e.data("videostart")
if(e.addClass("rs-apiready"),null!=i&&t.target.setPlaybackRate(parseFloat(i)),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){a||y.playVideo()}),e.data("startvideonow")){u.player.playVideo()
var d=o(e.data("videostartat"));-1!=d&&u.player.seekTo(d)}e.data("videolistenerexist",1)}}})
e.data("player",y)
break
case"vimeo":for(var h,b=v.attr("src"),w={},T=b,k=/([^&=]+)=([^&]*)/g;h=k.exec(T);)w[decodeURIComponent(h[1])]=decodeURIComponent(h[2])
b=null!=w.player_id?b.replace(w.player_id,g):b+"&player_id="+g
try{b=b.replace("api=0","api=1")}catch(V){}b+="&api=1",v.attr("src",b)
y=e.find("iframe")[0],jQuery("#"+g);(L=$f(g)).addEvent("ready",function(){if(e.addClass("rs-apiready"),L.addEvent("play",function(a){e.data("nextslidecalled",0),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),i.c.trigger("revolution.slide.onvideoplay",n(L,"vimeo",e.data())),i.videoplaying=!0,p(e,i),f?i.c.trigger("stoptimer"):i.videoplaying=!1,"mute"==e.data("volume")||t.lastToggleState(e.data("videomutetoggledby"))||!0===i.globalmute?L.api("setVolume","0"):L.api("setVolume",parseInt(e.data("volume"),0)/100||.75),t.toggleState(u.videotoggledby)}),L.addEvent("playProgress",function(t){var a=o(e.data("videoendat"))
if(e.data("currenttime",t.seconds),0!=a&&Math.abs(a-t.seconds)<.3&&a>t.seconds&&1!=e.data("nextslidecalled"))if(m){L.api("play")
var d=o(e.data("videostartat"));-1!=d&&L.api("seekTo",d)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),i.c.revnext()),L.api("pause")}),L.addEvent("finish",function(a){c(e,i),i.videoplaying=!1,i.c.trigger("starttimer"),i.c.trigger("revolution.slide.onvideostop",n(L,"vimeo",e.data())),1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),i.c.revnext()),null!=i.currentLayerVideoIsPlaying&&i.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(u.videotoggledby)}),L.addEvent("pause",function(a){e.find(".tp-videoposter").length>0&&"on"==e.data("showcoveronpause")&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),i.videoplaying=!1,i.tonpause=!1,c(e,i),i.c.trigger("starttimer"),i.c.trigger("revolution.slide.onvideostop",n(L,"vimeo",e.data())),null!=i.currentLayerVideoIsPlaying&&i.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(u.videotoggledby)}),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){if(!a)return L.api("play"),!1}),e.data("startvideonow")){L.api("play")
var d=o(e.data("videostartat"));-1!=d&&L.api("seekTo",d)}e.data("videolistenerexist",1)})}else{var x=o(e.data("videostartat"))
switch(u.videotype){case"youtube":d&&(u.player.playVideo(),-1!=x&&u.player.seekTo())
break
case"vimeo":var L
if(d)(L=$f(e.find("iframe").attr("id"))).api("play"),-1!=x&&L.api("seekTo",x)}}},l=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},s=function(){try{if(void 0!==window.fullScreen)return window.fullScreen
var e=5
return jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)&&(e=42),screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e}catch(t){}},u=function(e,i,r){if(a&&1==e.data("disablevideoonmobile"))return!1
var u=e.data(),v="html5"==u.audio?"audio":"video",g=e.find(v),m=g[0],f=g.parent(),y=u.videoloop,h="loopandnoslidestop"!=y
if(y="loop"==y||"loopandnoslidestop"==y,f.data("metaloaded",1),1!=e.data("bgvideo")||"none"!==u.videoloop&&!1!==u.videoloop||(h=!1),null==g.attr("control")&&(0!=e.find(".tp-video-play-button").length||a||e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),e.find("video, .tp-poster, .tp-video-play-button").click(function(){e.hasClass("videoisplaying")?m.pause():m.play()})),1==e.data("forcecover")||e.hasClass("fullscreenvideo")||1==e.data("bgvideo"))if(1==e.data("forcecover")||1==e.data("bgvideo")){f.addClass("fullcoveredvideo")
var b=e.data("aspectratio")||"4:3"
t.prepareCoveredVideo(b,i,e)}else f.addClass("fullscreenvideo")
var w=e.find(".tp-vid-play-pause")[0],T=e.find(".tp-vid-mute")[0],k=e.find(".tp-vid-full-screen")[0],x=e.find(".tp-seek-bar")[0],L=e.find(".tp-volume-bar")[0]
null!=w&&d(w,"click",function(){1==m.paused?m.play():m.pause()}),null!=T&&d(T,"click",function(){0==m.muted?(m.muted=!0,T.innerHTML="Unmute"):(m.muted=!1,T.innerHTML="Mute")}),null!=k&&k&&d(k,"click",function(){m.requestFullscreen?m.requestFullscreen():m.mozRequestFullScreen?m.mozRequestFullScreen():m.webkitRequestFullscreen&&m.webkitRequestFullscreen()}),null!=x&&(d(x,"change",function(){var e=m.duration*(x.value/100)
m.currentTime=e}),d(x,"mousedown",function(){e.addClass("seekbardragged"),m.pause()}),d(x,"mouseup",function(){e.removeClass("seekbardragged"),m.play()})),d(m,"canplaythrough",function(){t.preLoadAudioDone(e,i,"canplaythrough")}),d(m,"canplay",function(){t.preLoadAudioDone(e,i,"canplay")}),d(m,"progress",function(){t.preLoadAudioDone(e,i,"progress")}),d(m,"timeupdate",function(){var t=100/m.duration*m.currentTime,a=o(e.data("videoendat")),d=m.currentTime
if(null!=x&&(x.value=t),0!=a&&-1!=a&&Math.abs(a-d)<=.3&&a>d&&1!=e.data("nextslidecalled"))if(y){m.play()
var n=o(e.data("videostartat"));-1!=n&&(m.currentTime=n)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),i.just_called_nextslide_at_htmltimer=!0,i.c.revnext(),setTimeout(function(){i.just_called_nextslide_at_htmltimer=!1},1e3)),m.pause()}),null!=L&&d(L,"change",function(){m.volume=L.value}),d(m,"play",function(){e.data("nextslidecalled",0)
var a=e.data("volume")
a=null!=a&&"mute"!=a?parseFloat(a)/100:a,!0===i.globalmute?m.muted=!0:m.muted=!1,a>1&&(a/=100),"mute"==a?m.muted=!0:null!=a&&(m.volume=a),e.addClass("videoisplaying")
var o="html5"==u.audio?"audio":"video"
p(e,i),h&&"audio"!=o?(i.videoplaying=!0,i.c.trigger("stoptimer"),i.c.trigger("revolution.slide.onvideoplay",n(m,"html5",u))):(i.videoplaying=!1,"audio"!=o&&i.c.trigger("starttimer"),i.c.trigger("revolution.slide.onvideostop",n(m,"html5",u))),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(o),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})
var d=e.find(".tp-vid-play-pause")[0],r=e.find(".tp-vid-mute")[0]
null!=d&&(d.innerHTML="Pause"),null!=r&&m.muted&&(r.innerHTML="Unmute"),t.toggleState(u.videotoggledby)}),d(m,"pause",function(){var a="html5"==u.audio?"audio":"video"
!s()&&e.find(".tp-videoposter").length>0&&"on"==e.data("showcoveronpause")&&!e.hasClass("seekbardragged")&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(a),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),e.removeClass("videoisplaying"),i.videoplaying=!1,c(e,i),"audio"!=a&&i.c.trigger("starttimer"),i.c.trigger("revolution.slide.onvideostop",n(m,"html5",e.data()))
var o=e.find(".tp-vid-play-pause")[0]
null!=o&&(o.innerHTML="Play"),null!=i.currentLayerVideoIsPlaying&&i.currentLayerVideoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(u.videotoggledby)}),d(m,"ended",function(){l(),c(e,i),i.videoplaying=!1,c(e,i),"audio"!=v&&i.c.trigger("starttimer"),i.c.trigger("revolution.slide.onvideostop",n(m,"html5",e.data())),!0===e.data("nextslideatend")&&m.currentTime>0&&(1==!i.just_called_nextslide_at_htmltimer&&(e.data("nextslideatend-triggered",1),i.c.revnext(),i.just_called_nextslide_at_htmltimer=!0),setTimeout(function(){i.just_called_nextslide_at_htmltimer=!1},1500)),e.removeClass("videoisplaying")})},p=function(e,a){null==a.playingvideos&&(a.playingvideos=new Array),e.data("stopallvideos")&&null!=a.playingvideos&&a.playingvideos.length>0&&(a.lastplayedvideos=jQuery.extend(!0,[],a.playingvideos),jQuery.each(a.playingvideos,function(e,i){t.stopVideo(i,a)})),a.playingvideos.push(e),a.currentLayerVideoIsPlaying=e},c=function(e,t){null!=t.playingvideos&&jQuery.inArray(e,t.playingvideos)>=0&&t.playingvideos.splice(jQuery.inArray(e,t.playingvideos),1)}})(jQuery)
