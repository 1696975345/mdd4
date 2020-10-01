jQuery(document).ready(function($){var backEl=$('.backTop');backEl.click(function(){$('html,body').animate({scrollTop:0},500);});var $backToTopFun=function(){var st=$(document).scrollTop();(st>700)?backEl.show():backEl.hide();};$(window).bind("scroll",$backToTopFun);var post=$('.single-post .article');if(post.length&&!post.hasClass('post')){post.find('.entry').prepend('<h3>软件描述</h3>');}});;(function(window){var svgSprite='<svg>'+''+'<symbol id="icon-search" viewBox="0 0 1000 1000">'+''+'<path d="M173.0138 159.1531c57.5463-65.4416 141.5648-106.8386 228.5544-112.2539 81.4181-6.0939 164.835 18.8452 229.213 69.1301 78.1382 59.1929 128.0364 154.2514 131.3953 252.3189 4.656 84.9654-25.4258 170.7682-80.7975 235.1805 86.2121 86.2655 172.5211 172.4761 258.7132 258.7626-18.767 18.7093-37.4571 37.4956-56.2252 56.1839-87.0865-87.043-174.0941-174.1439-261.2206-261.1479-71.9662 52.6933-165.6295 74.3896-253.5105 59.1529-86.9496-13.9146-167.1265-64.2384-218.229-135.8719-32.2944-44.6377-53.334-97.406-60.3985-152.0589C77 332.4446 107.7624 231.0593 173.0138 159.1531zM392.387 87.4427c-13.8392 2.0766-27.7933 3.6875-41.2237 7.7038-85.8433 21.1157-160.159 83.5114-196.6847 163.9169-20.8447 44.7926-29.9279 94.9416-26.5311 144.2192 5.2007 95.2124 60.4575 185.6911 142.1664 234.5969 84.3103 52.6163 195.7723 57.8748 284.7596 13.7217 85.5715-40.5015 148.7652-124.5765 163.8077-218.0622 7.2774-42.737 5.2407-87.1599-6.4259-128.9456-24.0657-90.4197-93.9352-166.9448-181.6033-199.4907C486.8479 88.1802 439.0064 82.669 392.387 87.4427z"  ></path>'+''+'</symbol>'+''+'<symbol id="icon-reply" viewBox="0 0 1024 1024">'+''+'<path d="M896 800c0 0-73.6-416-448-416l0-160L128 512l320 268.8 0-184.6C651.2 596.2 790 614 896 800z"  ></path>'+''+'</symbol>'+''+'<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">'+''+'<path d="M877.061848 517.092004 512.010553 175.437046 146.959457 516.089283c-7.13796 6.66608-7.539088 17.874481-0.861216 25.012442 6.66608 7.13796 17.874481 7.539088 25.012442 0.861216l340.876486-318.08214 340.888278 319.049484c3.42148 3.197232 7.763336 4.77816 12.093201 4.77816 4.7192 0 9.438601-1.875928 12.919041-5.6042C884.565561 534.966485 884.199609 523.769876 877.061848 517.092004zM765.662177 524.112044c-9.768977 0-17.697401 7.928425-17.697401 17.697401l0 271.360817-141.579609 0L606.385167 624.39765l-188.772812 0 0 188.772812-141.579609 0L276.032746 541.809445c0-9.768977-7.916633-17.697401-17.697401-17.697401s-17.697401 7.928425-17.697401 17.697401l0 306.75562L453.007357 848.565065l0-188.772612 117.983008 0 0 188.772612 212.369414 0L783.359778 541.809445C783.359578 532.040469 775.431154 524.112044 765.662177 524.112044zM641.780169 270.448628l106.184607 0 0 94.386406c0 9.780769 7.928425 17.697401 17.697401 17.697401s17.697401-7.916633 17.697401-17.697401l0-129.781208-141.579609 0c-9.768977 0-17.697401 7.916633-17.697401 17.697401S632.011192 270.448628 641.780169 270.448628z"  ></path>'+''+'</symbol>'+''+'</svg>'
var script=function(){var scripts=document.getElementsByTagName('script')
return scripts[scripts.length-1]}()
var shouldInjectCss=script.getAttribute("data-injectcss")
var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false)
fn()}
document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}
function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true
fn()}}
var polling=function(){try{d.documentElement.doScroll('left')}catch(e){setTimeout(polling,50)
return}
init()};polling()
d.onreadystatechange=function(){if(d.readyState=='complete'){d.onreadystatechange=null
init()}}}}
var before=function(el,target){target.parentNode.insertBefore(el,target)}
var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}}
function appendSvg(){var div,svg
div=document.createElement('div')
div.innerHTML=svgSprite
svgSprite=null
svg=div.getElementsByTagName('svg')[0]
if(svg){svg.setAttribute('aria-hidden','true')
svg.style.position='absolute'
svg.style.width=0
svg.style.height=0
svg.style.overflow='hidden'
prepend(svg,document.body)}}
if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true
try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");}catch(e){console&&console.log(e)}}
ready(appendSvg)})(window);