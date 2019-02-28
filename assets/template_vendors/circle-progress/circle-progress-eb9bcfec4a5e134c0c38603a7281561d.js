(function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw()},initWidget:function(){var t=this.canvas=this.canvas||i("<canvas>").prependTo(this.el)[0]
t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d")},initFill:function(){var t,a=this,e=this.fill,n=this.ctx,r=this.size
if(!e)throw Error("The fill is not specified!")
if(e.color&&(this.arcFill=e.color),e.gradient){var s=e.gradient
if(1==s.length)this.arcFill=s[0]
else if(s.length>1){for(var l=e.gradientAngle||0,h=e.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],o=n.createLinearGradient.apply(n,h),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1)
i.isArray(d)&&(u=d[1],d=d[0]),o.addColorStop(u,d)}this.arcFill=o}}e.image&&(e.image instanceof Image?t=e.image:(t=new Image).src=e.image,t.complete?g():t.onload=g)
function g(){var e=i("<canvas>")[0]
e.width=a.size,e.height=a.size,e.getContext("2d").drawImage(t,0,0,r,r),a.arcFill=a.ctx.createPattern(e,"no-repeat"),a.drawFrame(a.lastFrameValue)}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){var t=this.ctx,a=this.radius,e=this.getThickness(),n=this.startAngle
t.save(),t.beginPath(),this.reverse?t.arc(a,a,a-e/2,n-2*Math.PI*i,n):t.arc(a,a,a-e/2,n,n+2*Math.PI*i),t.lineWidth=e,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()},drawEmptyArc:function(i){var t=this.ctx,a=this.radius,e=this.getThickness(),n=this.startAngle
i<1&&(t.save(),t.beginPath(),i<=0?t.arc(a,a,a-e/2,0,2*Math.PI):this.reverse?t.arc(a,a,a-e/2,n,n-2*Math.PI*i):t.arc(a,a,a-e/2,n+2*Math.PI*i,n),t.lineWidth=e,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var a=this,e=this.el,n=i(this.canvas)
n.stop(!0,!1),e.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=a.animationStartValue*(1-i)+t*i
a.drawFrame(n),e.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){e.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i,t,a,e,n){return(t/=n/2)<1?e/2*t*t*t+a:e/2*((t-=2)*t*t+2)+a},i.fn.circleProgress=function(a,e){var n="circle-progress",r=this.data(n)
if("widget"==a){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden')
return r.canvas}if("value"==a){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden')
if(void 0===e)return r.getValue()
var s=arguments[1]
return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var e=i(this),r=e.data(n),s=i.isPlainObject(a)?a:{}
if(r)r.init(s)
else{var l=i.extend({},e.data())
"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),(s=i.extend(l,s)).el=e,r=new t(s),e.data(n,r)}})}})(jQuery)
