!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,o,a,r,i,d,c;navigator.mediaDevices||alert("Browser does not support HTML5 MediaDevices!");var l=0;const u={NORMAL:"NORMAL",PROTANOPIA:"PROTANOPIA",PROTANOMALY:"PROTANOMALY",DEUTERANOPIA:"DEUTERANOPIA",DEUTERANOMALY:"DEUTERANOMALY",TRITANOPIA:"TRITANOPIA",TRITANOMALY:"TRITANOMALY",ACHROMATOPSIA:"ACHROMATOPSIA",ACHROMATOMALY:"ACHROMATOMALY"},s={};var g=u.NORMAL,f=null,h=!1;function A(e,t,n){e=Math.floor(e/4),t=Math.floor(t/4);let o=(n=Math.floor(n/4))%8*64+e;return 4*(512*(64*Math.floor(n/8)+t)+o)}function O(e){const t=e.toLowerCase()+".lut.png",n=new Image;n.src=t,n.onload=function(){const t=document.createElement("canvas");t.width=this.width,t.height=this.height;const n=t.getContext("2d");n.drawImage(this,0,0),s[e]=n.getImageData(0,0,this.width,this.height).data,f&&g!=f&&(g=f),h||(h=!0,a.play(),window.requestAnimationFrame(M)),console.log("Loaded LUT",e)}}function m(e){s.hasOwnProperty(e)?g=e:(f=e,O(e))}function M(e){0==l&&(l=e),function(){i.drawImage(a,0,0);const e=i.getImageData(0,0,n,o),t=e.data.length/4;if(h&&s[g])for(let n=0;n<t;n++){const t=4*n,o=A(e.data[t],e.data[t+1],e.data[t+2]);e.data[t]=s[g][o],e.data[t+1]=s[g][o+1],e.data[t+2]=s[g][o+2]}c.putImageData(e,0,0)}();const t=e-l;l=e,c.font="12px sans-serif",c.fillStyle="rgba(255,255,255,0.5)",c.fillText(`${Math.round(1e3/t)}FPS - Δ${t.toFixed(1)}`,2,o-2),window.requestAnimationFrame(M)}function T(){navigator.mediaDevices.getUserMedia({audio:!1,video:{width:{ideal:1080,max:1920},height:{ideal:720,max:1080},facingMode:"environment"}}).then(e=>{console.log("Got camera media, binding to video");const t=e.getVideoTracks()[0];if(t){const l=t.getSettings();console.log("Video settings: ",l),n=l.width,o=l.height,a.width=l.width,a.height=l.height,a.srcObject=e,(r=document.createElement("canvas")).width=n,r.height=o,i=r.getContext("2d"),(d=document.getElementById("render-target")).width=n,d.height=o,c=d.getContext("2d"),m(u.NORMAL)}}).catch(e=>{console.error("Error getting camera media: ",e)})}a=document.getElementById("video-plr"),document.getElementById("modesel").addEventListener("change",function(e){const t=e.target.value;m(t),console.log("Changed",t)}),T()}]);