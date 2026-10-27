(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Rl="186",Kh=0,dc=1,Jh=2,sa=1,ku=2,Ys=3,Ri=0,Zt=1,Ft=2,Xn=0,Js=1,fc=2,pc=3,mc=4,Qh=5,ls=100,jh=101,ed=102,td=103,nd=104,id=200,sd=201,rd=202,ad=203,Vu=204,Gu=205,od=206,ld=207,cd=208,ud=209,hd=210,dd=211,fd=212,pd=213,md=214,Io=0,Do=1,No=2,ir=3,Uo=4,Fo=5,Oo=6,Bo=7,Pl=0,gd=1,_d=2,Rn=0,Hu=1,Wu=2,Xu=3,Ll=4,qu=5,Yu=6,$u=7,Zu=300,Pi=301,Ms=302,Ga=303,Ha=304,Da=306,zo=1e3,Wn=1001,ko=1002,Ot=1003,xd=1004,wr=1005,Ht=1006,Wa=1007,Ti=1008,nn=1009,Ku=1010,Ju=1011,sr=1012,Il=1013,Ln=1014,mn=1015,In=1016,Dl=1017,Nl=1018,rr=1020,Qu=35902,ju=35899,eh=1021,th=1022,gn=1023,$n=1026,wi=1027,Ul=1028,Fl=1029,Li=1030,Ol=1031,Bl=1033,ra=33776,aa=33777,oa=33778,la=33779,Vo=35840,Go=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,$o=37488,Zo=37489,xa=37490,Ko=37491,Jo=37808,Qo=37809,jo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,ul=37821,hl=36492,dl=36494,fl=36495,pl=36283,ml=36284,va=36285,gl=36286,vd=3200,Ma=0,Md=1,ui="",Gt="srgb",Sa="srgb-linear",ya="linear",ft="srgb",Xa=7680,Sd=519,yd=512,bd=513,Ed=514,zl=515,Td=516,wd=517,kl=518,Ad=519,Cd=35044,gc="300 es",An=2e3,ar=2001;function Rd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pd(){const n=ba("canvas");return n.style.display="block",n}const _c={};function xc(...n){const e="THREE."+n.shift();console.log(e,...n)}function nh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=nh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=nh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ds(...n){const e=n.join(" ");e in _c||(_c[e]=!0,qe(...n))}function Ld(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Id={[Io]:Do,[No]:Oo,[Uo]:Bo,[ir]:Fo,[Do]:Io,[Oo]:No,[Bo]:Uo,[Fo]:ir};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const fs=Math.PI/180,or=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Vl(n,e){return(n%e+e)%e}function Dd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nd(n,e,t){return n!==e?(t-n)/(e-n):0}function Qs(n,e,t){return(1-t)*n+t*e}function Ud(n,e,t,i){return Qs(n,e,1-Math.exp(-t*i))}function Fd(n,e=1){return e-Math.abs(Vl(n,e*2)-e)}function Od(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kd(n,e){return n+Math.random()*(e-n)}function Vd(n){return n*(.5-Math.random())}function Gd(n){n!==void 0&&(vc=n);let e=vc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hd(n){return n*fs}function Wd(n){return n*or}function Xd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function qd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $d(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),d=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*u,c*f,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*_,c*d,o*l);break;case"YXY":n.set(c*d,o*u,c*_,o*l);break;case"ZYZ":n.set(c*_,c*d,o*u,o*l);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wi={DEG2RAD:fs,RAD2DEG:or,generateUUID:Fi,clamp:it,euclideanModulo:Vl,mapLinear:Dd,inverseLerp:Nd,lerp:Qs,damp:Ud,pingpong:Fd,smoothstep:Od,smootherstep:Bd,randInt:zd,randFloat:kd,randFloatSpread:Vd,seededRandom:Gd,degToRad:Hd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:$d,normalize:Yt,denormalize:cs},ac=class ac{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ac.prototype.isVector2=!0;let ve=ac;class ws{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],_=r[a+2],M=r[a+3];if(f!==M||c!==h||l!==d||u!==_){let m=c*h+l*d+u*_+f*M;m<0&&(h=-h,d=-d,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,c=c*p+h*o,l=l*p+d*o,u=u*p+_*o,f=f*p+M*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+_*o,f=f*p+M*o;const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*f+c*d-l*h,e[t+1]=c*_+u*h+l*f-o*d,e[t+2]=l*_+u*d+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),f=o(r/2),h=c(i/2),d=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const oc=class oc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oc.prototype.isVector3=!0;let F=oc;const qa=new F,Mc=new ws,lc=class lc{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],M=s[0],m=s[3],p=s[6],y=s[1],b=s[4],g=s[7],T=s[2],E=s[5],C=s[8];return r[0]=a*M+o*y+c*T,r[3]=a*m+o*b+c*E,r[6]=a*p+o*g+c*C,r[1]=l*M+u*y+f*T,r[4]=l*m+u*b+f*E,r[7]=l*p+u*g+f*C,r[2]=h*M+d*y+_*T,r[5]=h*m+d*b+_*E,r[8]=h*p+d*g+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,_=t*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(s*l-u*i)*M,e[2]=(o*i-s*a)*M,e[3]=h*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(i*c-l*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lc.prototype.isMatrix3=!0;let et=lc;const Ya=new et,Sc=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){const n={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sa]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:Sc,fromXYZ:yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Sc,fromXYZ:yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const at=Zd();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class Kd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=ba("canvas")),Xi.width=e.width,Xi.height=e.height;const s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jd=0;class Gl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Qd=0;const Za=new F;class Wt extends Ui{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=Wn,s=Wn,r=Ht,a=Ti,o=gn,c=nn,l=Wt.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Fi(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Zu;Wt.DEFAULT_ANISOTROPY=1;const cc=class cc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,g=(d+1)/2,T=(p+1)/2,E=(u+h)/4,C=(f+M)/4,S=(_+m)/4;return b>g&&b>T?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=C/i):g>T?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=E/s,r=S/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=S/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-M)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cc.prototype.isVector4=!0;let bt=cc;class jd extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Wt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends jd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ih extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ia=class Ia{constructor(e,t,i,s,r,a,o,c,l,u,f,h,d,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,f,h,d,_,M,m)}set(e,t,i,s,r,a,o,c,l,u,f,h,d,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,M=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+_*l,t[5]=h-M*l,t[9]=-o*c,t[2]=M-h*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,_=l*u,M=l*f;t[0]=h+M*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=M+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,_=l*u,M=l*f;t[0]=h-M*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,M=o*f;t[0]=c*u,t[4]=_*l-d,t[8]=h*l+M,t[1]=c*f,t[5]=M*l+h,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,_=o*c,M=o*l;t[0]=c*u,t[4]=M-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+_,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*c,d=a*l,_=o*c,M=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(i,Jt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(i,Jt)),jn.normalize(),Ar.crossVectors(Jt,jn),s[0]=jn.x,s[4]=Ar.x,s[8]=Jt.x,s[1]=jn.y,s[5]=Ar.y,s[9]=Jt.y,s[2]=jn.z,s[6]=Ar.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],M=i[6],m=i[10],p=i[14],y=i[3],b=i[7],g=i[11],T=i[15],E=s[0],C=s[4],S=s[8],w=s[12],R=s[1],L=s[5],z=s[9],G=s[13],I=s[2],B=s[6],K=s[10],O=s[14],Y=s[3],k=s[7],U=s[11],V=s[15];return r[0]=a*E+o*R+c*I+l*Y,r[4]=a*C+o*L+c*B+l*k,r[8]=a*S+o*z+c*K+l*U,r[12]=a*w+o*G+c*O+l*V,r[1]=u*E+f*R+h*I+d*Y,r[5]=u*C+f*L+h*B+d*k,r[9]=u*S+f*z+h*K+d*U,r[13]=u*w+f*G+h*O+d*V,r[2]=_*E+M*R+m*I+p*Y,r[6]=_*C+M*L+m*B+p*k,r[10]=_*S+M*z+m*K+p*U,r[14]=_*w+M*G+m*O+p*V,r[3]=y*E+b*R+g*I+T*Y,r[7]=y*C+b*L+g*B+T*k,r[11]=y*S+b*z+g*K+T*U,r[15]=y*w+b*G+g*O+T*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],M=e[7],m=e[11],p=e[15],y=c*d-l*h,b=o*d-l*f,g=o*h-c*f,T=a*d-l*u,E=a*h-c*u,C=a*f-o*u;return t*(M*y-m*b+p*g)-i*(_*y-m*T+p*E)+s*(_*b-M*T+p*C)-r*(_*g-M*E+m*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],M=e[13],m=e[14],p=e[15],y=t*o-i*a,b=t*c-s*a,g=t*l-r*a,T=i*c-s*o,E=i*l-r*o,C=s*l-r*c,S=u*M-f*_,w=u*m-h*_,R=u*p-d*_,L=f*m-h*M,z=f*p-d*M,G=h*p-d*m,I=y*G-b*z+g*L+T*R-E*w+C*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=(o*G-c*z+l*L)*B,e[1]=(s*z-i*G-r*L)*B,e[2]=(M*C-m*E+p*T)*B,e[3]=(h*E-f*C-d*T)*B,e[4]=(c*R-a*G-l*w)*B,e[5]=(t*G-s*R+r*w)*B,e[6]=(m*g-_*C-p*b)*B,e[7]=(u*C-h*g+d*b)*B,e[8]=(a*z-o*R+l*S)*B,e[9]=(i*R-t*z-r*S)*B,e[10]=(_*E-M*g+p*y)*B,e[11]=(f*g-u*E-d*y)*B,e[12]=(o*w-a*L-c*S)*B,e[13]=(t*L-i*w+s*S)*B,e[14]=(M*b-_*T-m*y)*B,e[15]=(u*T-f*b+h*y)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,_=r*f,M=a*u,m=a*f,p=o*f,y=c*l,b=c*u,g=c*f,T=i.x,E=i.y,C=i.z;return s[0]=(1-(M+p))*T,s[1]=(d+g)*T,s[2]=(_-b)*T,s[3]=0,s[4]=(d-g)*E,s[5]=(1-(h+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+b)*C,s[9]=(m-y)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),c=qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const l=1/a,u=1/o,f=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=An,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let _,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(o===An)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ar)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=An,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let _,M;if(c)_=1/(a-r),M=a/(a-r);else if(o===An)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===ar)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ia.prototype.isMatrix4=!0;let mt=Ia;const qi=new F,un=new mt,tf=new F(0,0,0),nf=new F(1,1,1),jn=new F,Ar=new F,Jt=new F,bc=new mt,Ec=new ws;class vn{constructor(e=0,t=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const Tc=new F,Yi=new ws,Bn=new mt,Cr=new F,Us=new F,rf=new F,af=new ws,wc=new F(1,0,0),Ac=new F(0,1,0),Cc=new F(0,0,1),Rc={type:"added"},of={type:"removed"},$i={type:"childadded",child:null},Ka={type:"childremoved",child:null};class Rt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new F,t=new vn,i=new ws,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new et}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cr.copy(e):Cr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Us,Cr,this.up):Bn.lookAt(Cr,Us,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rc),$i.child=e,this.dispatchEvent($i),$i.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(of),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rc),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new F(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Vl(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Qa(a,r,e+1/3),this.g=Qa(a,r,e),this.b=Qa(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=sh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return at.workingToColorSpace(Vt.copy(this),e),Math.round(it(Vt.r*255,0,255))*65536+Math.round(it(Vt.g*255,0,255))*256+Math.round(it(Vt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Gt){at.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Rr);const i=Qs(ei.h,Rr.h,t),s=Qs(ei.s,Rr.s,t),r=Qs(ei.l,Rr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Qe;Qe.NAMES=sh;class Wl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=i}clone(){return new Wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rh extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new F,zn=new F,ja=new F,kn=new F,Zi=new F,Ki=new F,Pc=new F,eo=new F,to=new F,no=new F,io=new bt,so=new bt,ro=new bt;class cn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hn.subVectors(s,t),zn.subVectors(i,t),ja.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(zn),c=hn.dot(ja),l=zn.dot(zn),u=zn.dot(ja),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(e,t),so.fromBufferAttribute(e,i),ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(io,r.x),a.addScaledVector(so,r.y),a.addScaledVector(ro,r.z),a}static isFrontFacing(e,t,i,s){return hn.subVectors(i,t),zn.subVectors(e,t),hn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),hn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Zi.subVectors(s,i),Ki.subVectors(r,i),eo.subVectors(e,i);const c=Zi.dot(eo),l=Ki.dot(eo);if(c<=0&&l<=0)return t.copy(i);to.subVectors(e,s);const u=Zi.dot(to),f=Ki.dot(to);if(u>=0&&f<=u)return t.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Zi,a);no.subVectors(e,r);const d=Zi.dot(no),_=Ki.dot(no);if(_>=0&&d<=_)return t.copy(r);const M=d*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(Ki,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Pc.subVectors(r,s),o=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(Pc,o);const p=1/(m+M+h);return a=M*p,o=h*p,t.copy(i).addScaledVector(Zi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Lr.subVectors(this.max,Fs),Ji.subVectors(e.a,Fs),Qi.subVectors(e.b,Fs),ji.subVectors(e.c,Fs),ti.subVectors(Qi,Ji),ni.subVectors(ji,Qi),vi.subVectors(Ji,ji);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];return!ao(t,Ji,Qi,ji,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,Ji,Qi,ji,Lr))?!1:(Ir.crossVectors(ti,ni),t=[Ir.x,Ir.y,Ir.z],ao(t,Ji,Qi,ji,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new F,new F,new F,new F,new F,new F,new F,new F],dn=new F,Pr=new Oi,Ji=new F,Qi=new F,ji=new F,ti=new F,ni=new F,vi=new F,Fs=new F,Lr=new F,Ir=new F,Mi=new F;function ao(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Mi.fromArray(n,r);const o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),c=e.dot(Mi),l=t.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ct=new F,Dr=new ve;let cf=0;class Pn extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cd,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ah extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oh extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const uf=new Oi,Os=new F,oo=new F;class As{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(oo)),this.expandByPoint(Os.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hf=0;const rn=new mt,lo=new Rt,es=new F,Qt=new Oi,Bs=new Oi,It=new F;class _t extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rd(e)?oh:ah)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Qt.min,Bs.min),Qt.expandByPoint(It),It.addVectors(Qt.max,Bs.max),Qt.expandByPoint(It)):(Qt.expandByPoint(Bs.min),Qt.expandByPoint(Bs.max))}Qt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)It.fromBufferAttribute(o,l),c&&(es.fromBufferAttribute(e,l),It.add(es)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let S=0;S<i.count;S++)o[S]=new F,c[S]=new F;const l=new F,u=new F,f=new F,h=new ve,d=new ve,_=new ve,M=new F,m=new F;function p(S,w,R){l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),u.sub(l),f.sub(l),d.sub(h),_.sub(h);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),o[S].add(M),o[w].add(M),o[R].add(M),c[S].add(m),c[w].add(m),c[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let S=0,w=y.length;S<w;++S){const R=y[S],L=R.start,z=R.count;for(let G=L,I=L+z;G<I;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new F,g=new F,T=new F,E=new F;function C(S){T.fromBufferAttribute(s,S),E.copy(T);const w=o[S];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),g.crossVectors(E,w);const L=g.dot(c[S])<0?-1:1;a.setXYZW(S,b.x,b.y,b.z,L)}for(let S=0,w=y.length;S<w;++S){const R=y[S],L=R.start,z=R.count;for(let G=L,I=L+z;G<I;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*u;for(let p=0;p<u;p++)h[_++]=l[d++]}return new Pn(h,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const co=new F,df=new F,ff=new et;class li{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=co.subVectors(i,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(co),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ff.getNormalMatrix(e),s=this.coplanarPoint(co).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let pf=0;class Bi extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Js,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gn=new F,uo=new F,Nr=new F,Ur=new F;class Xl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){uo.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(uo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Ur.dot(this.direction),c=-Ur.dot(Nr),l=Ur.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*c-o,h=a*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(uo).addScaledVector(Nr,h),d}intersectSphere(e,t){if(e.radius<0)return null;Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=i.x-a.x,y=i.y-a.y,b=i.z-a.z,g=Math.abs(c),T=Math.abs(l),E=Math.abs(u);let C,S,w,R,L,z,G,I,B,K,O,Y;if(g>=T&&g>=E?(w=c,z=f,B=_,Y=p,c>=0?(C=l,S=u,R=h,L=d,G=M,I=m,K=y,O=b):(C=u,S=l,R=d,L=h,G=m,I=M,K=b,O=y)):T>=E?(w=l,z=h,B=M,Y=y,l>=0?(C=u,S=c,R=d,L=f,G=m,I=_,K=b,O=p):(C=c,S=u,R=f,L=d,G=_,I=m,K=p,O=b)):(w=u,z=d,B=m,Y=b,u>=0?(C=c,S=l,R=f,L=h,G=_,I=M,K=p,O=y):(C=l,S=c,R=h,L=f,G=M,I=_,K=y,O=p)),w===0)return null;const k=C/w,U=S/w,V=1/w,ne=R-k*z,ue=L-U*z,Ie=G-k*B,Le=I-U*B,Ze=K-k*Y,J=O-U*Y,ie=Ze*Le-J*Ie,xe=ne*J-ue*Ze,Be=Ie*ue-Le*ne;if(s){if(ie<0||xe<0||Be<0)return null}else if((ie<0||xe<0||Be<0)&&(ie>0||xe>0||Be>0))return null;const we=ie+xe+Be;if(we===0)return null;const We=V*(ie*z+xe*B+Be*Y);return(we>0?We<0:We>0)?null:this.at(We/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hi extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lc=new mt,Si=new Xl,Fr=new As,Ic=new F,Or=new F,Br=new F,zr=new F,ho=new F,kr=new F,Dc=new F,Vr=new F;class St extends Rt{constructor(e=new _t,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(ho.fromBufferAttribute(f,e),a?kr.addScaledVector(ho,u):kr.addScaledVector(ho.sub(t),u))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Fr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Fr,Ic)===null||Si.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Lc.copy(r).invert(),Si.copy(e.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,T=b;g<T;g+=3){const E=o.getX(g),C=o.getX(g+1),S=o.getX(g+2);s=Gr(this,p,e,i,l,u,f,E,C,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),g=o.getX(m+2);s=Gr(this,a,e,i,l,u,f,y,b,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,T=b;g<T;g+=3){const E=g,C=g+1,S=g+2;s=Gr(this,p,e,i,l,u,f,E,C,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const y=m,b=m+1,g=m+2;s=Gr(this,a,e,i,l,u,f,y,b,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function mf(n,e,t,i,s,r,a,o){let c;if(e.side===Zt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ri,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:n}}function Gr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Or),n.getVertexPosition(c,Br),n.getVertexPosition(l,zr);const u=mf(n,e,t,i,Or,Br,zr,Dc);if(u){const f=new F;cn.getBarycoord(Dc,Or,Br,zr,f),s&&(u.uv=cn.getInterpolatedAttribute(s,o,c,l,f,new ve)),r&&(u.uv1=cn.getInterpolatedAttribute(r,o,c,l,f,new ve)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,c,l,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};cn.getNormal(Or,Br,zr,h.normal),u.face=h,u.barycoord=f}return u}class lh extends Wt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Ot,u=Ot,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nc extends Pn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ts=new mt,Uc=new mt,Hr=[],Fc=new Oi,gf=new mt,zs=new St,ks=new As;class _f extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ts),Fc.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(Fc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ts),ks.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(i),e.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Uc.multiplyMatrices(i,ts),zs.matrixWorld=Uc,zs.raycast(e,Hr);for(let a=0,o=Hr.length;a<o;a++){const c=Hr[a];c.instanceId=r,c.object=this,t.push(c)}Hr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lh(new Float32Array(s*this.count),s,this.count,Ul,mn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yi=new As,xf=new ve(.5,.5),Wr=new F;class ql{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,a=new li){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],M=r[9],m=r[10],p=r[11],y=r[12],b=r[13],g=r[14],T=r[15];if(s[0].setComponents(l-a,d-u,p-_,T-y).normalize(),s[1].setComponents(l+a,d+u,p+_,T+y).normalize(),s[2].setComponents(l+o,d+f,p+M,T+b).normalize(),s[3].setComponents(l-o,d-f,p-M,T-b).normalize(),i)s[4].setComponents(c,h,m,g).normalize(),s[5].setComponents(l-c,d-h,p-m,T-g).normalize();else if(s[4].setComponents(l-c,d-h,p-m,T-g).normalize(),t===An)s[5].setComponents(l+c,d+h,p+m,T+g).normalize();else if(t===ar)s[5].setComponents(c,h,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=xf.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dn extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ea=new F,Ta=new F,Oc=new mt,Vs=new Xl,Xr=new As,fo=new F,Bc=new F;class Ii extends Rt{constructor(e=new _t,t=new Dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ea.fromBufferAttribute(t,s-1),Ta.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ea.distanceTo(Ta);e.setAttribute("lineDistance",new lt(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;Oc.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(Oc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=d,m=_-1;M<m;M+=l){const p=u.getX(M),y=u.getX(M+1),b=qr(this,e,Vs,c,p,y,M);b&&t.push(b)}if(this.isLineLoop){const M=u.getX(_-1),m=u.getX(d),p=qr(this,e,Vs,c,M,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=d,m=_-1;M<m;M+=l){const p=qr(this,e,Vs,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=qr(this,e,Vs,c,_-1,d,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qr(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ea.fromBufferAttribute(o,s),Ta.fromBufferAttribute(o,r),t.distanceSqToSegment(Ea,Ta,fo,Bc)>i)return;fo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(fo);if(!(l<e.near||l>e.far))return{distance:l,point:Bc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const zc=new F,kc=new F;class _l extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)zc.fromBufferAttribute(t,s),kc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zc.distanceTo(kc);e.setAttribute("lineDistance",new lt(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ch extends Wt{constructor(e=[],t=Pi,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yl extends Wt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lr extends Wt{constructor(e,t,i=Ln,s,r,a,o=Ot,c=Ot,l,u=$n,f=1){if(u!==$n&&u!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class vf extends lr{constructor(e,t=Ln,i=Pi,s,r,a=Ot,o=Ot,c,l=$n){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uh extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nn extends _t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function _(M,m,p,y,b,g,T,E,C,S,w){const R=g/C,L=T/S,z=g/2,G=T/2,I=E/2,B=C+1,K=S+1;let O=0,Y=0;const k=new F;for(let U=0;U<K;U++){const V=U*L-G;for(let ne=0;ne<B;ne++){const ue=ne*R-z;k[M]=ue*y,k[m]=V*b,k[p]=I,l.push(k.x,k.y,k.z),k[M]=0,k[m]=0,k[p]=E>0?1:-1,u.push(k.x,k.y,k.z),f.push(ne/C),f.push(1-U/S),O+=1}}for(let U=0;U<S;U++)for(let V=0;V<C;V++){const ne=h+V+B*U,ue=h+V+B*(U+1),Ie=h+(V+1)+B*(U+1),Le=h+(V+1)+B*U;c.push(ne,ue,Le),c.push(ue,Ie,Le),Y+=6}o.addGroup(d,Y,w),d+=Y,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Na extends _t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new F,u=new ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=i+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pi extends _t{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let _=0;const M=[],m=i/2;let p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function y(){const g=new F,T=new F;let E=0;const C=(t-e)/i;for(let S=0;S<=r;S++){const w=[],R=S/r,L=R*(t-e)+e;for(let z=0;z<=s;z++){const G=z/s,I=G*c+o,B=Math.sin(I),K=Math.cos(I);T.x=L*B,T.y=-R*i+m,T.z=L*K,f.push(T.x,T.y,T.z),g.set(B,C,K).normalize(),h.push(g.x,g.y,g.z),d.push(G,1-R),w.push(_++)}M.push(w)}for(let S=0;S<s;S++)for(let w=0;w<r;w++){const R=M[w][S],L=M[w+1][S],z=M[w+1][S+1],G=M[w][S+1];(e>0||w!==0)&&(u.push(R,L,G),E+=3),(t>0||w!==r-1)&&(u.push(L,z,G),E+=3)}l.addGroup(p,E,0),p+=E}function b(g){const T=_,E=new ve,C=new F;let S=0;const w=g===!0?e:t,R=g===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),_++;const L=_;for(let z=0;z<=s;z++){const I=z/s*c+o,B=Math.cos(I),K=Math.sin(I);C.x=w*K,C.y=m*R,C.z=w*B,f.push(C.x,C.y,C.z),h.push(0,R,0),E.x=B*.5+.5,E.y=K*.5*R+.5,d.push(E.x,E.y),_++}for(let z=0;z<s;z++){const G=T+z,I=L+z;g===!0?u.push(I,I+1,G):u.push(I+1,I,G),S+=3}l.addGroup(p,S,g===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Yr=new F,$r=new F,po=new F,Zr=new cn;class Vc extends _t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(fs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:M,b:m,c:p}=Zr;if(M.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Zr.getNormal(po),f[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const b=(y+1)%3,g=f[y],T=f[b],E=Zr[u[y]],C=Zr[u[b]],S=`${g}_${T}`,w=`${T}_${g}`;w in h&&h[w]?(po.dot(h[w].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(C.x,C.y,C.z)),h[w]=null):S in h||(h[S]={index0:l[y],index1:l[b],normal:po.clone()})}}for(const _ in h)if(h[_]){const{index0:M,index1:m}=h[_];Yr.fromBufferAttribute(o,M),$r.fromBufferAttribute(o,m),d.push(Yr.x,Yr.y,Yr.z),d.push($r.x,$r.y,$r.z)}this.setAttribute("position",new lt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ve:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new F,s=[],r=[],a=[],o=new F,c=new mt;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(it(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(it(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $l extends Fn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mf extends $l{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zl(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Gc=new F,Hc=new F,mo=new Zl,go=new Zl,_o=new Zl;class Sf extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Hc.subVectors(s[0],s[1]).add(s[0]),l=Hc);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Gc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),mo.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,_,M,m),go.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,_,M,m),_o.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,_,M,m)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),go.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),_o.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(mo.calc(c),go.calc(c),_o.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wc(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function yf(n,e){const t=1-n;return t*t*e}function bf(n,e){return 2*(1-n)*n*e}function Ef(n,e){return n*n*e}function js(n,e,t,i){return yf(n,e)+bf(n,t)+Ef(n,i)}function Tf(n,e){const t=1-n;return t*t*t*e}function wf(n,e){const t=1-n;return 3*t*t*n*e}function Af(n,e){return 3*(1-n)*n*n*e}function Cf(n,e){return n*n*n*e}function er(n,e,t,i,s){return Tf(n,e)+wf(n,t)+Af(n,i)+Cf(n,s)}class hh extends Fn{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(er(e,s.x,r.x,a.x,o.x),er(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rf extends Fn{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(er(e,s.x,r.x,a.x,o.x),er(e,s.y,r.y,a.y,o.y),er(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dh extends Fn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pf extends Fn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends Fn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lf extends Fn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y),js(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Wc(o,c.x,l.x,u.x,f.x),Wc(o,c.y,l.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var xl=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:Sf,CubicBezierCurve:hh,CubicBezierCurve3:Rf,EllipseCurve:$l,LineCurve:dh,LineCurve3:Pf,QuadraticBezierCurve:fh,QuadraticBezierCurve3:Lf,SplineCurve:ph});class If extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new xl[s.type]().fromJSON(s))}return this}}class vl extends If{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new dh(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new fh(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new hh(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ph(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){const l=new $l(e,t,i,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wa extends vl{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new vl().fromJSON(s))}return this}}function Df(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=mh(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Bf(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let u=o,f=c;for(let h=t;h<s;h+=t){const d=n[h],_=n[h+1];d<o&&(o=d),_<c&&(c=_),d>u&&(u=d),_>f&&(f=_)}l=Math.max(u-o,f-c),l=l!==0?32767/l:0}return cr(r,a,t,o,c,l,0),a}function mh(n,e,t,i,s){let r;if(s===Zf(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Xc(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Xc(a/i|0,n[a],n[a+1],r);return r&&Ss(r,r.next)&&(hr(r),r=r.next),r}function Di(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ss(t,t.next)||Et(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function cr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Hf(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Uf(n,i,s,r):Nf(n)){e.push(c.i,n.i,l.i),hr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Ff(Di(n),e),cr(n,e,t,i,s,r,2)):a===2&&Of(n,e,t,i,s,r):cr(Di(n),e,t,i,s,r,1);break}}}function Nf(n){const e=n.prev,t=n,i=n.next;if(Et(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(s,r,a),f=Math.min(o,c,l),h=Math.max(s,r,a),d=Math.max(o,c,l);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&$s(s,o,r,c,a,l,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Uf(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Et(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,c,l),_=Math.min(u,f,h),M=Math.max(o,c,l),m=Math.max(u,f,h),p=Ml(d,_,e,t,i),y=Ml(M,m,e,t,i);let b=n.prevZ,g=n.nextZ;for(;b&&b.z>=p&&g&&g.z<=y;){if(b.x>=d&&b.x<=M&&b.y>=_&&b.y<=m&&b!==s&&b!==a&&$s(o,u,c,f,l,h,b.x,b.y)&&Et(b.prev,b,b.next)>=0||(b=b.prevZ,g.x>=d&&g.x<=M&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&$s(o,u,c,f,l,h,g.x,g.y)&&Et(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=M&&b.y>=_&&b.y<=m&&b!==s&&b!==a&&$s(o,u,c,f,l,h,b.x,b.y)&&Et(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;g&&g.z<=y;){if(g.x>=d&&g.x<=M&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&$s(o,u,c,f,l,h,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Ff(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ss(i,s)&&_h(i,t,t.next,s)&&ur(i,s)&&ur(s,i)&&(e.push(i.i,t.i,s.i),hr(t),hr(t.next),t=n=s),t=t.next}while(t!==n);return Di(t)}function Of(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qf(a,o)){let c=xh(a,o);a=Di(a,a.next),c=Di(c,c.next),cr(a,e,t,i,s,r,0),cr(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Bf(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=mh(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Xf(l))}s.sort(zf);for(let r=0;r<s.length;r++)t=kf(s[r],t);return t}function zf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function kf(n,e){const t=Vf(n,e);if(!t)return e;const i=xh(t,n);return Di(i,i.next),Di(t,t.next)}function Vf(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(Ss(n,t))return t;do{if(Ss(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&gh(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const f=Math.abs(s-t.y)/(i-t.x);ur(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Gf(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Gf(n,e){return Et(n.prev,n,e.prev)<0&&Et(e.next,n,n.next)<0}function Hf(n,e,t,i){let s=n;do s.z===0&&(s.z=Ml(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wf(s)}function Wf(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Ml(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Xf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gh(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function $s(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&gh(n,e,t,i,s,r,a,o)}function qf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Yf(n,e)&&(ur(n,e)&&ur(e,n)&&$f(n,e)&&(Et(n.prev,n,e.prev)||Et(n,e.prev,e))||Ss(n,e)&&Et(n.prev,n,n.next)>0&&Et(e.prev,e,e.next)>0)}function Et(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ss(n,e){return n.x===e.x&&n.y===e.y}function _h(n,e,t,i){const s=Jr(Et(n,e,t)),r=Jr(Et(n,e,i)),a=Jr(Et(t,i,n)),o=Jr(Et(t,i,e));return!!(s!==r&&a!==o||s===0&&Kr(n,t,e)||r===0&&Kr(n,i,e)||a===0&&Kr(t,n,i)||o===0&&Kr(t,e,i))}function Kr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Jr(n){return n>0?1:n<0?-1:0}function Yf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&_h(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ur(n,e){return Et(n.prev,n,n.next)<0?Et(n,e,n.next)>=0&&Et(n,n.prev,e)>=0:Et(n,e,n.prev)<0||Et(n,n.next,e)<0}function $f(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xh(n,e){const t=Sl(n.i,n.x,n.y),i=Sl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xc(n,e,t,i){const s=Sl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zf(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Kf{static triangulate(e,t,i=2){return Df(e,t,i)}}class us{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return us.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];qc(e),Yc(i,e);let a=e.length;t.forEach(qc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Yc(i,t[c]);const o=Kf.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function qc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class dr extends _t{constructor(e=new wa([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Jf;let b,g=!1,T,E,C,S;if(p){b=p.getSpacedPoints(u),g=!0,h=!1;const se=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,se),E=new F,C=new F,S=new F}h||(m=0,d=0,_=0,M=0);const w=o.extractPoints(l);let R=w.shape;const L=w.holes;if(!us.isClockWise(R)){R=R.reverse();for(let se=0,re=L.length;se<re;se++){const de=L[se];us.isClockWise(de)&&(L[se]=de.reverse())}}function G(se){const de=10000000000000001e-36;let ge=se[0];for(let Se=1;Se<=se.length;Se++){const He=Se%se.length,Ve=se[He],Ne=Ve.x-ge.x,Ge=Ve.y-ge.y,N=Ne*Ne+Ge*Ge,Ke=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(ge.x),Math.abs(ge.y)),Ye=de*Ke*Ke;if(N<=Ye){se.splice(He,1),Se--;continue}ge=Ve}}G(R),L.forEach(G);const I=L.length,B=R;for(let se=0;se<I;se++){const re=L[se];R=R.concat(re)}function K(se,re,de){return re||ot("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(re,de)}const O=R.length;function Y(se,re,de){let ge,Se,He;const Ve=se.x-re.x,Ne=se.y-re.y,Ge=de.x-se.x,N=de.y-se.y,Ke=Ve*Ve+Ne*Ne,Ye=Ve*N-Ne*Ge;if(Math.abs(Ye)>Number.EPSILON){const A=Math.sqrt(Ke),v=Math.sqrt(Ge*Ge+N*N),q=re.x-Ne/A,Z=re.y+Ve/A,Q=de.x-N/v,pe=de.y+Ge/v,Me=((Q-q)*N-(pe-Z)*Ge)/(Ve*N-Ne*Ge);ge=q+Ve*Me-se.x,Se=Z+Ne*Me-se.y;const ee=ge*ge+Se*Se;if(ee<=2)return new ve(ge,Se);He=Math.sqrt(ee/2)}else{let A=!1;Ve>Number.EPSILON?Ge>Number.EPSILON&&(A=!0):Ve<-Number.EPSILON?Ge<-Number.EPSILON&&(A=!0):Math.sign(Ne)===Math.sign(N)&&(A=!0),A?(ge=-Ne,Se=Ve,He=Math.sqrt(Ke)):(ge=Ve,Se=Ne,He=Math.sqrt(Ke/2))}return new ve(ge/He,Se/He)}const k=[];for(let se=0,re=B.length,de=re-1,ge=se+1;se<re;se++,de++,ge++)de===re&&(de=0),ge===re&&(ge=0),k[se]=Y(B[se],B[de],B[ge]);const U=[];let V,ne=k.concat();for(let se=0,re=I;se<re;se++){const de=L[se];V=[];for(let ge=0,Se=de.length,He=Se-1,Ve=ge+1;ge<Se;ge++,He++,Ve++)He===Se&&(He=0),Ve===Se&&(Ve=0),V[ge]=Y(de[ge],de[He],de[Ve]);U.push(V),ne=ne.concat(V)}let ue;if(m===0)ue=us.triangulateShape(B,L);else{const se=[],re=[];for(let de=0;de<m;de++){const ge=de/m,Se=d*Math.cos(ge*Math.PI/2),He=_*Math.sin(ge*Math.PI/2)+M;for(let Ve=0,Ne=B.length;Ve<Ne;Ve++){const Ge=K(B[Ve],k[Ve],He);xe(Ge.x,Ge.y,-Se),ge===0&&se.push(Ge)}for(let Ve=0,Ne=I;Ve<Ne;Ve++){const Ge=L[Ve];V=U[Ve];const N=[];for(let Ke=0,Ye=Ge.length;Ke<Ye;Ke++){const A=K(Ge[Ke],V[Ke],He);xe(A.x,A.y,-Se),ge===0&&N.push(A)}ge===0&&re.push(N)}}ue=us.triangulateShape(se,re)}const Ie=ue.length,Le=_+M;for(let se=0;se<O;se++){const re=h?K(R[se],ne[se],Le):R[se];g?(C.copy(T.normals[0]).multiplyScalar(re.x),E.copy(T.binormals[0]).multiplyScalar(re.y),S.copy(b[0]).add(C).add(E),xe(S.x,S.y,S.z)):xe(re.x,re.y,0)}for(let se=1;se<=u;se++)for(let re=0;re<O;re++){const de=h?K(R[re],ne[re],Le):R[re];g?(C.copy(T.normals[se]).multiplyScalar(de.x),E.copy(T.binormals[se]).multiplyScalar(de.y),S.copy(b[se]).add(C).add(E),xe(S.x,S.y,S.z)):xe(de.x,de.y,f/u*se)}for(let se=m-1;se>=0;se--){const re=se/m,de=d*Math.cos(re*Math.PI/2),ge=_*Math.sin(re*Math.PI/2)+M;for(let Se=0,He=B.length;Se<He;Se++){const Ve=K(B[Se],k[Se],ge);xe(Ve.x,Ve.y,f+de)}for(let Se=0,He=L.length;Se<He;Se++){const Ve=L[Se];V=U[Se];for(let Ne=0,Ge=Ve.length;Ne<Ge;Ne++){const N=K(Ve[Ne],V[Ne],ge);g?xe(N.x,N.y+b[u-1].y,b[u-1].x+de):xe(N.x,N.y,f+de)}}}Ze(),J();function Ze(){const se=s.length/3;if(h){let re=0,de=O*re;for(let ge=0;ge<Ie;ge++){const Se=ue[ge];Be(Se[2]+de,Se[1]+de,Se[0]+de)}re=u+m*2,de=O*re;for(let ge=0;ge<Ie;ge++){const Se=ue[ge];Be(Se[0]+de,Se[1]+de,Se[2]+de)}}else{for(let re=0;re<Ie;re++){const de=ue[re];Be(de[2],de[1],de[0])}for(let re=0;re<Ie;re++){const de=ue[re];Be(de[0]+O*u,de[1]+O*u,de[2]+O*u)}}i.addGroup(se,s.length/3-se,0)}function J(){const se=s.length/3;let re=0;ie(B,re),re+=B.length;for(let de=0,ge=L.length;de<ge;de++){const Se=L[de];ie(Se,re),re+=Se.length}i.addGroup(se,s.length/3-se,1)}function ie(se,re){let de=se.length;for(;--de>=0;){const ge=de;let Se=de-1;Se<0&&(Se=se.length-1);for(let He=0,Ve=u+m*2;He<Ve;He++){const Ne=O*He,Ge=O*(He+1),N=re+ge+Ne,Ke=re+Se+Ne,Ye=re+Se+Ge,A=re+ge+Ge;we(N,Ke,Ye,A)}}}function xe(se,re,de){c.push(se),c.push(re),c.push(de)}function Be(se,re,de){We(se),We(re),We(de);const ge=s.length/3,Se=y.generateTopUV(i,s,ge-3,ge-2,ge-1);rt(Se[0]),rt(Se[1]),rt(Se[2])}function we(se,re,de,ge){We(se),We(re),We(ge),We(re),We(de),We(ge);const Se=s.length/3,He=y.generateSideWallUV(i,s,Se-6,Se-3,Se-2,Se-1);rt(He[0]),rt(He[1]),rt(He[3]),rt(He[1]),rt(He[2]),rt(He[3])}function We(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function rt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Qf(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xl[s.type]().fromJSON(s)),new dr(i,e.options)}}const Jf={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new ve(r,a),new ve(o,c),new ve(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],d=e[s*3+1],_=e[s*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ve(a,1-c),new ve(l,1-f),new ve(h,1-_),new ve(M,1-p)]:[new ve(o,1-c),new ve(u,1-f),new ve(d,1-_),new ve(m,1-p)]}};function Qf(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fr extends _t{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/t,f=new F,h=new ve,d=new F,_=new F,M=new F;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(M.x,M.y,M.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(_)}for(let y=0;y<=t;y++){const b=i+y*u*s,g=Math.sin(b),T=Math.cos(b);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*g,f.y=e[E].y,f.z=e[E].x*T,a.push(f.x,f.y,f.z),h.x=y/t,h.y=E/(e.length-1),o.push(h.x,h.y);const C=c[3*E+0]*g,S=c[3*E+1],w=c[3*E+0]*T;l.push(C,S,w)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){const g=b+y*e.length,T=g,E=g+e.length,C=g+e.length+1,S=g+1;r.push(T,E,S),r.push(C,S,E)}this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("uv",new lt(o,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ni extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,f=e/o,h=t/c,d=[],_=[],M=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let b=0;b<l;b++){const g=b*f-r;_.push(g,-y,0),M.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const b=y+l*p,g=y+l*(p+1),T=y+1+l*(p+1),E=y+1+l*p;d.push(b,g,E),d.push(g,T,E)}this.setIndex(d),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(M,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.widthSegments,e.heightSegments)}}class pr extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new F,h=new F,d=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){const y=[],b=p/i,g=a+b*o,T=e*Math.cos(g),E=Math.sqrt(e*e-T*T);let C=0;p===0&&a===0?C=.5/t:p===i&&c===Math.PI&&(C=-.5/t);for(let S=0;S<=t;S++){const w=S/t,R=s+w*r;f.x=-E*Math.cos(R),f.y=T,f.z=E*Math.sin(R),_.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(w+C,1-b),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const b=u[p][y+1],g=u[p][y],T=u[p+1][y],E=u[p+1][y+1];(p!==0||a>0)&&d.push(b,g,E),(p!==i-1||c<Math.PI)&&d.push(g,T,E)}this.setIndex(d),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(M,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sr extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new F,d=new F,_=new F;for(let M=0;M<=i;M++){const m=a+M/i*o;for(let p=0;p<=s;p++){const y=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),_.subVectors(d,h).normalize(),u.push(_.x,_.y,_.z),f.push(p/s),f.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){const p=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,b=(s+1)*(M-1)+m,g=(s+1)*M+m;c.push(p,y,g),c.push(y,b,g)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if($c(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if($c(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const s in i)e[s]=i[s]}return e}function $c(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const ep={clone:ys,merge:$t};var tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ip extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ut extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hn extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sp extends Bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rp extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ap extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kl extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class op extends Kl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xo=new mt,Zc=new F,Kc=new F;class Mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(xo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ar||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qr=new F,jr=new ws,bn=new F;class Sh extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,jr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Qr,jr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new F,Jc=new ve,Qc=new ve;class tn extends Sh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Jc,Qc),t.subVectors(Qc,Jc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lp extends Mh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class cp extends Kl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new lp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Jl extends Sh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class up extends Mh{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vo extends Kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new up}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ns=-90,is=1;class hp extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new tn(ns,is,e,t);r.layers=this.layers,this.add(r);const a=new tn(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new tn(ns,is,e,t);o.layers=this.layers,this.add(o);const c=new tn(ns,is,e,t);c.layers=this.layers,this.add(c);const l=new tn(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class dp extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jc=new mt;class fp{constructor(e,t,i=0,s=1/0){this.ray=new Xl(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(e,t=!0,i=[]){return yl(e,this,i,t),i.sort(eu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)yl(e[s],this,i,t);return i.sort(eu),i}}function eu(n,e){return n.distance-e.distance}function yl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)yl(r[a],e,t,!0)}}const uc=class uc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};uc.prototype.isMatrix2=!0;let tu=uc;function nu(n,e,t,i){const s=pp(i);switch(t){case eh:return n*e;case Ul:return n*e/s.components*s.byteLength;case Fl:return n*e/s.components*s.byteLength;case Li:return n*e*2/s.components*s.byteLength;case Ol:return n*e*2/s.components*s.byteLength;case th:return n*e*3/s.components*s.byteLength;case gn:return n*e*4/s.components*s.byteLength;case Bl:return n*e*4/s.components*s.byteLength;case ra:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:case Wo:return Math.max(n,16)*Math.max(e,8)/4;case Vo:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case Xo:case qo:case $o:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yo:case xa:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hl:case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case va:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pp(n){switch(n){case nn:case Ku:return{byteLength:1,components:1};case sr:case Ju:case In:return{byteLength:2,components:1};case Dl:case Nl:return{byteLength:2,components:4};case Ln:case Il:case mn:return{byteLength:4,components:1};case Qu:case ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function yh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],M=f[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const M=f[d];n.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:gp,alphahash_pars_fragment:_p,alphamap_fragment:xp,alphamap_pars_fragment:vp,alphatest_fragment:Mp,alphatest_pars_fragment:Sp,aomap_fragment:yp,aomap_pars_fragment:bp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:wp,beginnormal_vertex:Ap,bsdfs:Cp,iridescence_fragment:Rp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Np,color_fragment:Up,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:Bp,common:zp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Hp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:$p,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Kp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:lm,envmap_vertex:Qp,fog_vertex:jp,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:am,lights_pars_begin:om,lights_toon_fragment:cm,lights_toon_pars_fragment:um,lights_phong_fragment:hm,lights_phong_pars_fragment:dm,lights_physical_fragment:fm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,lightprobes_pars_fragment:xm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:ym,map_fragment:bm,map_pars_fragment:Em,map_particle_fragment:Tm,map_particle_pars_fragment:wm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Rm,morphcolor_vertex:Pm,morphnormal_vertex:Lm,morphtarget_pars_vertex:Im,morphtarget_vertex:Dm,normal_fragment_begin:Nm,normal_fragment_maps:Um,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Hm,opaque_fragment:Wm,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:$m,dithering_pars_fragment:Zm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:jm,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:a0,specularmap_pars_fragment:o0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:u0,transmission_pars_fragment:h0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:x0,backgroundCube_frag:v0,cube_vert:M0,cube_frag:S0,depth_vert:y0,depth_frag:b0,distance_vert:E0,distance_frag:T0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:C0,linedashed_frag:R0,meshbasic_vert:P0,meshbasic_frag:L0,meshlambert_vert:I0,meshlambert_frag:D0,meshmatcap_vert:N0,meshmatcap_frag:U0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:k0,meshphysical_frag:V0,meshtoon_vert:G0,meshtoon_frag:H0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:$0,sprite_frag:Z0},Ce={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Tn={basic:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:$t([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:$t([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:$t([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:$t([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:$t([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:$t([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:$t([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:$t([Ce.lights,Ce.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Tn.physical={uniforms:$t([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ea={r:0,b:0,g:0},K0=new mt,bh=new et;bh.set(-1,0,0,0,1,0,0,0,1);function J0(n,e,t,i,s,r){const a=new Qe(0);let o=s===!0?0:1,c,l,u=null,f=0,h=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const g=y.backgroundBlurriness>0;b=e.get(b,g)}return b}function _(y){let b=!1;const g=d(y);g===null?m(a,o):g&&g.isColor&&(m(g,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,b){const g=d(b);g&&(g.isCubeTexture||g.mapping===Da)?(l===void 0&&(l=new St(new Nn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ys(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(b.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bh),l.material.toneMapped=at.getTransfer(g.colorSpace)!==ft,(u!==g||f!==g.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new St(new Ni(2,2),new Un({name:"BackgroundMaterial",uniforms:ys(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(g.colorSpace)!==ft,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(ea,vh(n)),t.buffers.color.setClear(ea.r,ea.g,ea.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:M,dispose:p}}function Q0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(L,z,G,I,B){let K=!1;const O=f(L,I,G,z);r!==O&&(r=O,l(r.object)),K=d(L,I,G,B),K&&_(L,I,G,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,g(L,z,G,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,z,G,I){const B=I.wireframe===!0;let K=i[z.id];K===void 0&&(K={},i[z.id]=K);const O=L.isInstancedMesh===!0?L.id:0;let Y=K[O];Y===void 0&&(Y={},K[O]=Y);let k=Y[G.id];k===void 0&&(k={},Y[G.id]=k);let U=k[B];return U===void 0&&(U=h(c()),k[B]=U),U}function h(L){const z=[],G=[],I=[];for(let B=0;B<t;B++)z[B]=0,G[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,z,G,I){const B=r.attributes,K=z.attributes;let O=0;const Y=G.getAttributes();for(const k in Y)if(Y[k].location>=0){const V=B[k];let ne=K[k];if(ne===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),V===void 0||V.attribute!==ne||ne&&V.data!==ne.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function _(L,z,G,I){const B={},K=z.attributes;let O=0;const Y=G.getAttributes();for(const k in Y)if(Y[k].location>=0){let V=K[k];V===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const ne={};ne.attribute=V,V&&V.data&&(ne.data=V.data),B[k]=ne,O++}r.attributes=B,r.attributesNum=O,r.index=I}function M(){const L=r.newAttributes;for(let z=0,G=L.length;z<G;z++)L[z]=0}function m(L){p(L,0)}function p(L,z){const G=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;G[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),B[L]!==z&&(n.vertexAttribDivisor(L,z),B[L]=z)}function y(){const L=r.newAttributes,z=r.enabledAttributes;for(let G=0,I=z.length;G<I;G++)z[G]!==L[G]&&(n.disableVertexAttribArray(G),z[G]=0)}function b(L,z,G,I,B,K,O){O===!0?n.vertexAttribIPointer(L,z,G,B,K):n.vertexAttribPointer(L,z,G,I,B,K)}function g(L,z,G,I){M();const B=I.attributes,K=G.getAttributes(),O=z.defaultAttributeValues;for(const Y in K){const k=K[Y];if(k.location>=0){let U=B[Y];if(U===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),U!==void 0){const V=U.normalized,ne=U.itemSize,ue=e.get(U);if(ue===void 0)continue;const Ie=ue.buffer,Le=ue.type,Ze=ue.bytesPerElement,J=Le===n.INT||Le===n.UNSIGNED_INT||U.gpuType===Il;if(U.isInterleavedBufferAttribute){const ie=U.data,xe=ie.stride,Be=U.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<k.locationSize;we++)p(k.location+we,ie.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<k.locationSize;we++)m(k.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let we=0;we<k.locationSize;we++)b(k.location+we,ne/k.locationSize,Le,V,xe*Ze,(Be+ne/k.locationSize*we)*Ze,J)}else{if(U.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)p(k.location+ie,U.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ie=0;ie<k.locationSize;ie++)m(k.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ie=0;ie<k.locationSize;ie++)b(k.location+ie,ne/k.locationSize,Le,V,ne*Ze,ne/k.locationSize*ie*Ze,J)}}else if(O!==void 0){const V=O[Y];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(k.location,V);break;case 3:n.vertexAttrib3fv(k.location,V);break;case 4:n.vertexAttrib4fv(k.location,V);break;default:n.vertexAttrib1fv(k.location,V)}}}}y()}function T(){w();for(const L in i){const z=i[L];for(const G in z){const I=z[G];for(const B in I){const K=I[B];for(const O in K)u(K[O].object),delete K[O];delete I[B]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;const z=i[L.id];for(const G in z){const I=z[G];for(const B in I){const K=I[B];for(const O in K)u(K[O].object),delete K[O];delete I[B]}}delete i[L.id]}function C(L){for(const z in i){const G=i[z];for(const I in G){const B=G[I];if(B[L.id]===void 0)continue;const K=B[L.id];for(const O in K)u(K[O].object),delete K[O];delete B[L.id]}}}function S(L){for(const z in i){const G=i[z],I=L.isInstancedMesh===!0?L.id:0,B=G[I];if(B!==void 0){for(const K in B){const O=B[K];for(const Y in O)u(O[Y].object),delete O[Y];delete B[K]}delete G[I],Object.keys(G).length===0&&delete i[z]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function j0(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function eg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const S=C===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==nn&&C!==mn&&!S&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:g,maxSamples:T,samples:E}}function tg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new li,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const y=r?0:i,b=y*4;let g=p.clippingState||null;c.value=g,g=u(_,h,b,d);for(let T=0;T!==b;++T)g[T]=t[T];p.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const p=d+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,g=d;b!==M;++b,g+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const hs=4,ng=6,ig=20,sg=256,Gs=new Jl,iu=new Qe;let Mo=null,So=0,yo=0,bo=!1;const rg=new F,bi=new F;class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=rg}=r;Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,So,yo),this._renderer.xr.enabled=bo,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:In,format:gn,colorSpace:Sa,depthBuffer:!1},s=su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ag(r)),this._blurMaterial=lg(r,e,t),this._ggxMaterial=og(r,e,t)}return s}_compileMaterial(e){const t=new St(new _t,e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,i,s,r){const c=new tn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(iu),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Nn,new hi({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(iu),p=!0);for(let b=0;b<6;b++){const g=b%3;g===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):g===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const T=this._cubeSize;ss(s,g*T,b>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(M,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Pi||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ss(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Gs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-hs?i-_+hs:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-t,ss(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,Gs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,ss(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(o,Gs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-hs?s-this._lodMax+hs:0),h=4*(this._cubeSize-u);ss(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(c,Gs)}}function ag(n){const e=[],t=[];let i=n;const s=n-hs+1+ng;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,_=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,b=p>2?0:-1,g=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];_.set(g,d*h*p);for(let T=0;T<h;T++){const E=u[T*2]*2-1,C=u[T*2+1]*2-1;p===0?bi.set(1,C,E):p===1?bi.set(-E,1,-C):p===2?bi.set(-E,C,1):p===3?bi.set(-1,C,-E):p===4?bi.set(-E,-1,C):bi.set(E,C,-1),bi.toArray(M,(p*h+T)*d)}}const m=new _t;m.setAttribute("position",new Pn(_,d)),m.setAttribute("outputDirection",new Pn(M,d)),t.push(new St(m,null)),i>hs&&i--}return{lodMeshes:t,sizeLods:e}}function su(n,e,t){const i=new xn(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function og(n,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function lg(n,e,t){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ru(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function au(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Eh extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ch(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Xn});r.uniforms.tEquirect.value=t;const a=new St(s,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Ht),new hp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function cg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ga||d===Ha)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const M=new Eh(_.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===Ga||d===Ha,M=d===Pi||d===Ms;if(_||M){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new bl(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return _&&y&&y.height>0||M&&y&&c(y)?(i===null&&(i=new bl(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Ga?h.mapping=Pi:d===Ha&&(h.mapping=Ms),h}function c(h){let d=0;const _=6;for(let M=0;M<_;M++)h[M]!==void 0&&d++;return d===_}function l(h){const d=h.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function ug(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ds("WebGLRenderer: "+i+" extension not supported."),s}}}function hg(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,_=f.attributes.position;let M=0;if(_===void 0)return;if(d!==null){const y=d.array;M=d.version;for(let b=0,g=y.length;b<g;b+=3){const T=y[b+0],E=y[b+1],C=y[b+2];h.push(T,E,E,C,C,T)}}else{const y=_.array;M=_.version;for(let b=0,g=y.length/3-1;b<g;b+=3){const T=b+0,E=b+1,C=b+2;h.push(T,E,E,C,C,T)}}const m=new(_.count>=65535?oh:ah)(h,1);m.version=M;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function dg(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function l(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];t.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function fg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function pg(n,e,t){const i=new WeakMap,s=new bt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let R=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var d=R;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let g=0;_===!0&&(g=1),M===!0&&(g=2),m===!0&&(g=3);let T=o.attributes.position.count*g,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*E*4*f),S=new ih(C,T,E,f);S.type=mn,S.needsUpdate=!0;const w=g*4;for(let L=0;L<f;L++){const z=p[L],G=y[L],I=b[L],B=T*E*4*L;for(let K=0;K<z.count;K++){const O=K*w;_===!0&&(s.fromBufferAttribute(z,K),C[B+O+0]=s.x,C[B+O+1]=s.y,C[B+O+2]=s.z,C[B+O+3]=0),M===!0&&(s.fromBufferAttribute(G,K),C[B+O+4]=s.x,C[B+O+5]=s.y,C[B+O+6]=s.z,C[B+O+7]=0),m===!0&&(s.fromBufferAttribute(I,K),C[B+O+8]=s.x,C[B+O+9]=s.y,C[B+O+10]=s.z,C[B+O+11]=I.itemSize===4?s.w:1)}}h={count:f,texture:S,size:new ve(T,E)},i.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function mg(n,e,t,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const gg={[Hu]:"LINEAR_TONE_MAPPING",[Wu]:"REINHARD_TONE_MAPPING",[Xu]:"CINEON_TONE_MAPPING",[Ll]:"ACES_FILMIC_TONE_MAPPING",[Yu]:"AGX_TONE_MAPPING",[$u]:"NEUTRAL_TONE_MAPPING",[qu]:"CUSTOM_TONE_MAPPING"};function _g(n,e,t,i,s,r){const a=new xn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new _t;l.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new lt([0,2,0,0,2,0],2));const u=new ip({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new St(l,u),h=new Jl(-1,1,1,-1,0,1);let d=null,_=null,M=!1,m,p=null,y=[],b=!1;this.setSize=function(g,T){a.setSize(g,T),o!==null&&o.setSize(g,T),c!==null&&c.setSize(g,T);for(let E=0;E<y.length;E++){const C=y[E];C.setSize&&C.setSize(g,T)}},this.setEffects=function(g){y=g,b=y.length>0&&y[0].isRenderPass===!0;const T=a.width,E=a.height;y.length>0&&o===null&&(o=new xn(T,E,{type:In,depthBuffer:!1,stencilBuffer:!1}),c=new xn(T,E,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){const S=y[C];S.setSize&&S.setSize(T,E)}},this.begin=function(g,T){if(M||g.toneMapping===Rn&&y.length===0)return!1;if(p=T,T!==null){const E=T.width,C=T.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return b===!1&&g.setRenderTarget(a),m=g.toneMapping,g.toneMapping=Rn,!0},this.hasRenderPass=function(){return b},this.end=function(g,T){g.toneMapping=m,M=!0;let E=a,C=o;for(let S=0;S<y.length;S++){const w=y[S];w.enabled!==!1&&(w.render(g,C,E,T),w.needsSwap!==!1&&(E=C,C=C===o?c:o))}if(d!==g.outputColorSpace||_!==g.toneMapping){d=g.outputColorSpace,_=g.toneMapping,u.defines={},at.getTransfer(d)===ft&&(u.defines.SRGB_TRANSFER="");const S=gg[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(p),g.render(f,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Th=new Wt,El=new lr(1,1),wh=new ih,Ah=new ef,Ch=new ch,ou=[],lu=[],cu=new Float32Array(16),uu=new Float32Array(9),hu=new Float32Array(4);function Cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fa(n,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;hu.set(i),n.uniformMatrix2fv(this.addr,!1,hu),Lt(t,i)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;uu.set(i),n.uniformMatrix3fv(this.addr,!1,uu),Lt(t,i)}}function Eg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;cu.set(i),n.uniformMatrix4fv(this.addr,!1,cu),Lt(t,i)}}function Tg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Rg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(El.compareFunction=t.isReversedDepthBuffer()?kl:zl,r=El):r=Th,t.setTexture2D(e||r,s)}function Ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ah,s)}function Ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ch,s)}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||wh,s)}function Og(n){switch(n){case 5126:return xg;case 35664:return vg;case 35665:return Mg;case 35666:return Sg;case 35674:return yg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(n,e){n.uniform1fv(this.addr,e)}function zg(n,e){const t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function kg(n,e){const t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function Vg(n,e){const t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function Gg(n,e){const t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hg(n,e){const t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wg(n,e){const t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xg(n,e){n.uniform1iv(this.addr,e)}function qg(n,e){n.uniform2iv(this.addr,e)}function Yg(n,e){n.uniform3iv(this.addr,e)}function $g(n,e){n.uniform4iv(this.addr,e)}function Zg(n,e){n.uniform1uiv(this.addr,e)}function Kg(n,e){n.uniform2uiv(this.addr,e)}function Jg(n,e){n.uniform3uiv(this.addr,e)}function Qg(n,e){n.uniform4uiv(this.addr,e)}function jg(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=El:a=Th;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function e_(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ah,r[a])}function t_(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ch,r[a])}function n_(n,e,t){const i=this.cache,s=e.length,r=Fa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wh,r[a])}function i_(n){switch(n){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Vg;case 35674:return Gg;case 35675:return Hg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return Zg;case 36294:return Kg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function du(n,e){n.seq.push(e),n.map[e.id]=e}function o_(n,e,t){const i=n.name,s=i.length;for(Eo.lastIndex=0;;){const r=Eo.exec(i),a=Eo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){du(t,l===void 0?new s_(o,n,e):new r_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new a_(o),du(t,f)),t=f}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);o_(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const l_=37297;let c_=0;function u_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const pu=new et;function h_(n){at._getMatrix(pu,at.workingColorSpace,n);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+u_(n.getShaderSource(e),o)}else return r}function d_(n,e){const t=h_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const f_={[Hu]:"Linear",[Wu]:"Reinhard",[Xu]:"Cineon",[Ll]:"ACESFilmic",[Yu]:"AgX",[$u]:"Neutral",[qu]:"Custom"};function p_(n,e){const t=f_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new F;function m_(){at.getLuminanceCoefficients(ta);const n=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function __(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function x_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zs(n){return n!==""}function gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(n){return n.replace(v_,S_)}const M_=new Map;function S_(n,e){let t=nt[e];if(t===void 0){const i=M_.get(e);if(i!==void 0)t=nt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tl(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(y_,b_)}function b_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const E_={[sa]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function T_(n){return E_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w_={[Pi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE_UV"};function A_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":w_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const C_={[Ms]:"ENVMAP_MODE_REFRACTION"};function R_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const P_={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function L_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":P_[n.combine]||"ENVMAP_BLENDING_NONE"}function I_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function D_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=T_(t),l=A_(t),u=R_(t),f=L_(t),h=I_(t),d=g_(t),_=__(r),M=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Rn?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,d_("linearToOutputTexel",t.outputColorSpace),m_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Tl(a),a=gu(a,t),a=_u(a,t),o=Tl(o),o=gu(o,t),o=_u(o,t),a=xu(a),o=xu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,g=y+p+o,T=fu(s,s.VERTEX_SHADER,b),E=fu(s,s.FRAGMENT_SHADER,g);s.attachShader(M,T),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(L){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(E)||"",B=z.trim(),K=G.trim(),O=I.trim();let Y=!0,k=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,E);else{const U=mu(s,T,"vertex"),V=mu(s,E,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+U+`
`+V)}else B!==""?qe("WebGLProgram: Program Info Log:",B):(K===""||O==="")&&(k=!1);k&&(L.diagnostics={runnable:Y,programLog:B,vertexShader:{log:K,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(T),s.deleteShader(E),S=new ca(s,M),w=x_(s,M)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,l_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}let N_=0;class U_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new F_(e),t.set(e,i)),i}}class F_{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}}function O_(n){return n===Li||n===xa||n===va}function B_(n,e,t,i,s,r){const a=new Hl,o=new U_,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function M(S,w,R,L,z,G){const I=L.fog,B=z.geometry,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Y=e.get(S.envMap||K,O),k=Y&&Y.mapping===Da?Y.image.height:null,U=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&qe("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const V=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=V!==void 0?V.length:0;let ue=0;B.morphAttributes.position!==void 0&&(ue=1),B.morphAttributes.normal!==void 0&&(ue=2),B.morphAttributes.color!==void 0&&(ue=3);let Ie,Le,Ze,J;if(U){const ht=Tn[U];Ie=ht.vertexShader,Le=ht.fragmentShader}else{Ie=S.vertexShader,Le=S.fragmentShader;const ht=o.getVertexShaderStage(S),ct=o.getFragmentShaderStage(S);o.update(S,ht,ct),Ze=ht.id,J=ct.id}const ie=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,We=!!S.map,rt=!!S.matcap,se=!!Y,re=!!S.aoMap,de=!!S.lightMap,ge=!!S.bumpMap&&S.wireframe===!1,Se=!!S.normalMap,He=!!S.displacementMap,Ve=!!S.emissiveMap,Ne=!!S.metalnessMap,Ge=!!S.roughnessMap,N=S.anisotropy>0,Ke=S.clearcoat>0,Ye=S.dispersion>0,A=S.retroreflectivity>0,v=S.iridescence>0,q=S.sheen>0,Z=S.transmission>0,Q=N&&!!S.anisotropyMap,pe=Ke&&!!S.clearcoatMap,Me=Ke&&!!S.clearcoatNormalMap,ee=Ke&&!!S.clearcoatRoughnessMap,oe=v&&!!S.iridescenceMap,Te=v&&!!S.iridescenceThicknessMap,ke=q&&!!S.sheenColorMap,Ae=q&&!!S.sheenRoughnessMap,be=!!S.specularMap,ze=!!S.specularColorMap,Xe=!!S.specularIntensityMap,je=Z&&!!S.transmissionMap,W=Z&&!!S.thicknessMap,ye=!!S.gradientMap,ae=!!S.alphaMap,_e=S.alphaTest>0,Pe=!!S.alphaHash,ce=!!S.extensions;let Oe=Rn;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Ue={shaderID:U,shaderType:S.type,shaderName:S.name,vertexShader:Ie,fragmentShader:Le,defines:S.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:rt,envMap:se,envMapMode:se&&Y.mapping,envMapCubeUVHeight:k,aoMap:re,lightMap:de,bumpMap:ge,normalMap:Se,displacementMap:He,emissiveMap:Ve,normalMapObjectSpace:Se&&S.normalMapType===Md,normalMapTangentSpace:Se&&S.normalMapType===Ma,packedNormalMap:Se&&S.normalMapType===Ma&&O_(S.normalMap.format),metalnessMap:Ne,roughnessMap:Ge,anisotropy:N,anisotropyMap:Q,clearcoat:Ke,clearcoatMap:pe,clearcoatNormalMap:Me,clearcoatRoughnessMap:ee,dispersion:Ye,retroreflection:A,iridescence:v,iridescenceMap:oe,iridescenceThicknessMap:Te,sheen:q,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:be,specularColorMap:ze,specularIntensityMap:Xe,transmission:Z,transmissionMap:je,thicknessMap:W,gradientMap:ye,opaque:S.transparent===!1&&S.blending===Js&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:_e,alphaHash:Pe,combine:S.combine,mapUv:We&&_(S.map.channel),aoMapUv:re&&_(S.aoMap.channel),lightMapUv:de&&_(S.lightMap.channel),bumpMapUv:ge&&_(S.bumpMap.channel),normalMapUv:Se&&_(S.normalMap.channel),displacementMapUv:He&&_(S.displacementMap.channel),emissiveMapUv:Ve&&_(S.emissiveMap.channel),metalnessMapUv:Ne&&_(S.metalnessMap.channel),roughnessMapUv:Ge&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:pe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(S.sheenRoughnessMap.channel),specularMapUv:be&&_(S.specularMap.channel),specularColorMapUv:ze&&_(S.specularColorMap.channel),specularIntensityMapUv:Xe&&_(S.specularIntensityMap.channel),transmissionMapUv:je&&_(S.transmissionMap.channel),thicknessMapUv:W&&_(S.thicknessMap.channel),alphaMapUv:ae&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Se||N),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(We||ae),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&Se===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:Ve&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ce&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&S.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function m(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)w.push(R),w.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(p(w,S),y(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function p(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numSunLights),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numSunLightShadows),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function b(S){const w=d[S.type];let R;if(w){const L=Tn[w];R=ep.clone(L.uniforms)}else R=S.uniforms;return R}function g(S,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new D_(n,w,S,s),l.push(R),u.set(w,R)),R}function T(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function E(S){o.remove(S)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:g,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:C}}function z_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function k_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Su(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,M,m,p){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},n[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=_,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function c(h,d,_,M,m,p,y){y.reversedDepth===!0&&(m=-m);const b=o(h,d,_,M,m,p);_.transmission>0?i.push(b):_.transparent===!0?s.push(b):t.push(b)}function l(h,d,_,M,m,p){const y=o(h,d,_,M,m,p);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,d){t.length>1&&t.sort(h||k_),i.length>1&&i.sort(d||Mu),s.length>1&&s.sort(d||Mu)}function f(){for(let h=e,d=n.length;h<d;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function V_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Su,n.set(i,[a])):s>=r.length?(a=new Su,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function G_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Qe};break;case"SpotLight":t={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function H_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W_=0;function X_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q_(n){const e=new G_,t=H_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const s=new F,r=new mt,a=new mt;function o(l){let u=0,f=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,_=0,M=0,m=0,p=0,y=0,b=0,g=0,T=0,E=0,C=0,S=0,w=0,R=0;l.sort(X_);for(let z=0,G=l.length;z<G;z++){const I=l[z],B=I.color,K=I.intensity,O=I.distance;let Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Li?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*K,f+=B.g*K,h+=B.b*K;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],K);R++}else if(I.isSunLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const U=I.shadow,V=t.get(I);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),i.sunShadow[_]=V,i.sunShadowMap[_]=Y;const ne=U.getViewportCount();for(let ue=0;ue<ne;ue++)i.sunShadowMatrix[M+ue]=U.getMatrix(ue),i.sunShadowCascade[M+ue]=U._cascadeData[ue];M+=ne,_++}i.sun[d]=k,d++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const U=I.shadow,V=t.get(I);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=k,m++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(B).multiplyScalar(K),k.distance=O,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[y]=k;const U=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,U.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[y]=U.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=Y,C++}y++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(B).multiplyScalar(K),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=k,b++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const U=I.shadow,V=t.get(I);V.shadowIntensity=U.intensity,V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,V.shadowCameraNear=U.camera.near,V.shadowCameraFar=U.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=I.shadow.matrix,E++}i.point[p]=k,p++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(K),k.groundColor.copy(I.groundColor).multiplyScalar(K),i.hemi[g]=k,g++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==y||L.rectAreaLength!==b||L.hemiLength!==g||L.numSunShadows!==_||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==C||L.numSpotMaps!==S||L.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=b,i.point.length=p,i.hemi.length=g,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=y,L.rectAreaLength=b,L.hemiLength=g,L.numSunShadows=_,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=C,L.numSpotMaps=S,L.numLightProbes=R,i.version=W_++)}function c(l,u){let f=0,h=0,d=0,_=0,M=0,m=0;const p=u.matrixWorldInverse;for(let y=0,b=l.length;y<b;y++){const g=l[y];if(g.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(g.matrixWorld),T.direction.transformDirection(p),f++}else if(g.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(g.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(g.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(g.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(g.width*.5,0,0),T.halfHeight.set(0,g.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(g.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(p),d++}else if(g.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(g.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function yu(n){const e=new q_(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Y_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new yu(n),e.set(s,[o])):r>=a.length?(o=new yu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],J_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],bu=new mt,Hs=new F,To=new F;function Q_(n,e,t){let i=new ql;const s=new ve,r=new ve,a=new bt,o=new rp,c=new ap,l={},u=t.maxTextureSize,f={[Ri]:Zt,[Zt]:Ri,[Ft]:Ft},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:$_,fragmentShader:Z_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new _t;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new St(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let p=this.type;this.render=function(E,C,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ku&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sa);const w=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Xn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){const K=E[I],O=K.shadow;if(O===void 0){qe("WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Y=O.getFrameExtents();s.multiply(Y),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y));const k=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=k,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ys){if(K.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new xn(s.x,s.y,{format:Li,type:In,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),O.map.texture.name=K.name+".shadowMap",O.map.depthTexture=new lr(s.x,s.y,mn),O.map.depthTexture.name=K.name+".shadowMapDepth",O.map.depthTexture.format=$n,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot}else K.isPointLight?(O.map=new Eh(s.x),O.map.depthTexture=new vf(s.x,Ln)):(O.map=new xn(s.x,s.y),O.map.depthTexture=new lr(s.x,s.y,Ln)),O.map.depthTexture.name=K.name+".shadowMap",O.map.depthTexture.format=$n,this.type===sa?(O.map.depthTexture.compareFunction=k?kl:zl,O.map.depthTexture.minFilter=Ht,O.map.depthTexture.magFilter=Ht):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const U=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();K.isPointLight!==!0&&O.updateMatrices(K,S);for(let V=0;V<U;V++){const ne=O.getCamera(V);if(K.isPointLight){const ue=O.camera,Ie=O.matrix,Le=K.distance||ue.far;Le!==ue.far&&(ue.far=Le,ue.updateProjectionMatrix()),Hs.setFromMatrixPosition(K.matrixWorld),ue.position.copy(Hs),To.copy(ue.position),To.add(K_[V]),ue.up.copy(J_[V]),ue.lookAt(To),ue.updateMatrixWorld(),Ie.makeTranslation(-Hs.x,-Hs.y,-Hs.z),bu.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(bu,ue.coordinateSystem,ue.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,V),n.clear();else{V===0&&(n.setRenderTarget(O.map),n.clear());const ue=O.getViewport(V);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),z.viewport(a)}i=O.getFrustum(V),g(C,S,ne,K,this.type)}O.isPointLightShadow!==!0&&this.type===Ys&&y(O,S),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,R,L)};function y(E,C){const S=e.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new xn(s.x,s.y,{format:Li,type:In}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,S,h,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,S,d,M,null)}function b(E,C,S,w){let R=null;const L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=S.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=R.uuid,G=C.uuid;let I=l[z];I===void 0&&(I={},l[z]=I);let B=I[G];B===void 0&&(B=R.clone(),I[G]=B,C.addEventListener("dispose",T)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,w===Ys?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=n.properties.get(R);z.light=S}return R}function g(E,C,S,w,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Ys)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const G=e.update(E),I=E.material;if(Array.isArray(I)){const B=G.groups;for(let K=0,O=B.length;K<O;K++){const Y=B[K],k=I[Y.materialIndex];if(k&&k.visible){const U=b(E,k,w,R);E.onBeforeShadow(n,E,C,S,G,U,Y),n.renderBufferDirect(S,null,G,U,E,Y),E.onAfterShadow(n,E,C,S,G,U,Y)}}}else if(I.visible){const B=b(E,I,w,R);E.onBeforeShadow(n,E,C,S,G,B,null),n.renderBufferDirect(S,null,G,B,E,null),E.onAfterShadow(n,E,C,S,G,B,null)}}const z=E.children;for(let G=0,I=z.length;G<I;G++)g(z[G],C,S,w,R)}function T(E){E.target.removeEventListener("dispose",T);for(const S in l){const w=l[S],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function j_(n,e){function t(){let W=!1;const ye=new bt;let ae=null;const _e=new bt(0,0,0,0);return{setMask:function(Pe){ae!==Pe&&!W&&(n.colorMask(Pe,Pe,Pe,Pe),ae=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,ce,Oe,Ue,ht){ht===!0&&(Pe*=Ue,ce*=Ue,Oe*=Ue),ye.set(Pe,ce,Oe,Ue),_e.equals(ye)===!1&&(n.clearColor(Pe,ce,Oe,Ue),_e.copy(ye))},reset:function(){W=!1,ae=null,_e.set(-1,0,0,0)}}}function i(){let W=!1,ye=!1,ae=null,_e=null,Pe=null;return{setReversed:function(ce){if(ye!==ce){const Oe=e.get("EXT_clip_control");ce?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ye=ce;const Ue=Pe;Pe=null,this.setClear(Ue)}},getReversed:function(){return ye},setTest:function(ce){ce?ie(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!W&&(n.depthMask(ce),ae=ce)},setFunc:function(ce){if(ye&&(ce=Id[ce]),_e!==ce){switch(ce){case Io:n.depthFunc(n.NEVER);break;case Do:n.depthFunc(n.ALWAYS);break;case No:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Uo:n.depthFunc(n.EQUAL);break;case Fo:n.depthFunc(n.GEQUAL);break;case Oo:n.depthFunc(n.GREATER);break;case Bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=ce}},setLocked:function(ce){W=ce},setClear:function(ce){Pe!==ce&&(Pe=ce,ye&&(ce=1-ce),n.clearDepth(ce))},reset:function(){W=!1,ae=null,_e=null,Pe=null,ye=!1}}}function s(){let W=!1,ye=null,ae=null,_e=null,Pe=null,ce=null,Oe=null,Ue=null,ht=null;return{setTest:function(ct){W||(ct?ie(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(ct){ye!==ct&&!W&&(n.stencilMask(ct),ye=ct)},setFunc:function(ct,Dt,Xt){(ae!==ct||_e!==Dt||Pe!==Xt)&&(n.stencilFunc(ct,Dt,Xt),ae=ct,_e=Dt,Pe=Xt)},setOp:function(ct,Dt,Xt){(ce!==ct||Oe!==Dt||Ue!==Xt)&&(n.stencilOp(ct,Dt,Xt),ce=ct,Oe=Dt,Ue=Xt)},setLocked:function(ct){W=ct},setClear:function(ct){ht!==ct&&(n.clearStencil(ct),ht=ct)},reset:function(){W=!1,ye=null,ae=null,_e=null,Pe=null,ce=null,Oe=null,Ue=null,ht=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],M=null,m=!1,p=null,y=null,b=null,g=null,T=null,E=null,C=null,S=new Qe(0,0,0),w=0,R=!1,L=null,z=null,G=null,I=null,B=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=Y>=2);let U=null,V={};const ne=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Ie=new bt().fromArray(ne),Le=new bt().fromArray(ue);function Ze(W,ye,ae,_e){const Pe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(W,ce),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<ae;Oe++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(ye+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return ce}const J={};J[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(ir),ge(!1),Se(dc),ie(n.CULL_FACE),re(Xn);function ie(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function xe(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Be(W,ye){return h[W]!==ye?(n.bindFramebuffer(W,ye),h[W]=ye,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function we(W,ye){let ae=_,_e=!1;if(W){ae=d.get(ye),ae===void 0&&(ae=[],d.set(ye,ae));const Pe=W.textures;if(ae.length!==Pe.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Oe=Pe.length;ce<Oe;ce++)ae[ce]=n.COLOR_ATTACHMENT0+ce;ae.length=Pe.length,_e=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,_e=!0);_e&&n.drawBuffers(ae)}function We(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const rt={[ls]:n.FUNC_ADD,[jh]:n.FUNC_SUBTRACT,[ed]:n.FUNC_REVERSE_SUBTRACT};rt[td]=n.MIN,rt[nd]=n.MAX;const se={[id]:n.ZERO,[sd]:n.ONE,[rd]:n.SRC_COLOR,[Vu]:n.SRC_ALPHA,[hd]:n.SRC_ALPHA_SATURATE,[cd]:n.DST_COLOR,[od]:n.DST_ALPHA,[ad]:n.ONE_MINUS_SRC_COLOR,[Gu]:n.ONE_MINUS_SRC_ALPHA,[ud]:n.ONE_MINUS_DST_COLOR,[ld]:n.ONE_MINUS_DST_ALPHA,[dd]:n.CONSTANT_COLOR,[fd]:n.ONE_MINUS_CONSTANT_COLOR,[pd]:n.CONSTANT_ALPHA,[md]:n.ONE_MINUS_CONSTANT_ALPHA};function re(W,ye,ae,_e,Pe,ce,Oe,Ue,ht,ct){if(W===Xn){m===!0&&(xe(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),W!==Qh){if(W!==p||ct!==R){if((y!==ls||T!==ls)&&(n.blendEquation(n.FUNC_ADD),y=ls,T=ls),ct)switch(W){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",W);break}else switch(W){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",W);break}b=null,g=null,E=null,C=null,S.set(0,0,0),w=0,p=W,R=ct}return}Pe=Pe||ye,ce=ce||ae,Oe=Oe||_e,(ye!==y||Pe!==T)&&(n.blendEquationSeparate(rt[ye],rt[Pe]),y=ye,T=Pe),(ae!==b||_e!==g||ce!==E||Oe!==C)&&(n.blendFuncSeparate(se[ae],se[_e],se[ce],se[Oe]),b=ae,g=_e,E=ce,C=Oe),(Ue.equals(S)===!1||ht!==w)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ht),S.copy(Ue),w=ht),p=W,R=!1}function de(W,ye){W.side===Ft?xe(n.CULL_FACE):ie(n.CULL_FACE);let ae=W.side===Zt;ye&&(ae=!ae),ge(ae),W.blending===Js&&W.transparent===!1?re(Xn):re(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const _e=W.stencilWrite;o.setTest(_e),_e&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(W){L!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),L=W)}function Se(W){W!==Kh?(ie(n.CULL_FACE),W!==z&&(W===dc?n.cullFace(n.BACK):W===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),z=W}function He(W){W!==G&&(O&&n.lineWidth(W),G=W)}function Ve(W,ye,ae){W?(ie(n.POLYGON_OFFSET_FILL),(I!==ye||B!==ae)&&(I=ye,B=ae,a.getReversed()&&(ye=-ye),n.polygonOffset(ye,ae))):xe(n.POLYGON_OFFSET_FILL)}function Ne(W){W?ie(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Ge(W){W===void 0&&(W=n.TEXTURE0+K-1),U!==W&&(n.activeTexture(W),U=W)}function N(W,ye,ae){ae===void 0&&(U===null?ae=n.TEXTURE0+K-1:ae=U);let _e=V[ae];_e===void 0&&(_e={type:void 0,texture:void 0},V[ae]=_e),(_e.type!==W||_e.texture!==ye)&&(U!==ae&&(n.activeTexture(ae),U=ae),n.bindTexture(W,ye||J[W]),_e.type=W,_e.texture=ye)}function Ke(){const W=V[U];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ye(){try{n.compressedTexImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function v(){try{n.texSubImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function q(){try{n.texSubImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function pe(){try{n.texStorage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function Me(){try{n.texStorage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function ee(){try{n.texImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function oe(){try{n.texImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function Te(W){return f[W]!==void 0?f[W]:n.getParameter(W)}function ke(W,ye){f[W]!==ye&&(n.pixelStorei(W,ye),f[W]=ye)}function Ae(W){Ie.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ie.copy(W))}function be(W){Le.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Le.copy(W))}function ze(W,ye){let ae=l.get(ye);ae===void 0&&(ae=new WeakMap,l.set(ye,ae));let _e=ae.get(W);_e===void 0&&(_e=n.getUniformBlockIndex(ye,W.name),ae.set(W,_e))}function Xe(W,ye){const _e=l.get(ye).get(W);c.get(ye)!==_e&&(n.uniformBlockBinding(ye,_e,W.__bindingPointIndex),c.set(ye,_e))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},U=null,V={},h={},d=new WeakMap,_=[],M=null,m=!1,p=null,y=null,b=null,g=null,T=null,E=null,C=null,S=new Qe(0,0,0),w=0,R=!1,L=null,z=null,G=null,I=null,B=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:xe,bindFramebuffer:Be,drawBuffers:we,useProgram:We,setBlending:re,setMaterial:de,setFlipSided:ge,setCullFace:Se,setLineWidth:He,setPolygonOffset:Ve,setScissorTest:Ne,activeTexture:Ge,bindTexture:N,unbindTexture:Ke,compressedTexImage2D:Ye,compressedTexImage3D:A,texImage2D:ee,texImage3D:oe,pixelStorei:ke,getParameter:Te,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:pe,texStorage3D:Me,texSubImage2D:v,texSubImage3D:q,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:Ae,viewport:be,reset:je}}function ex(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,v){return _?new OffscreenCanvas(A,v):ba("canvas")}function m(A,v,q){let Z=1;const Q=Ye(A);if((Q.width>q||Q.height>q)&&(Z=q/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const pe=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);h===void 0&&(h=M(pe,Me));const ee=v?M(pe,Me):h;return ee.width=pe,ee.height=Me,ee.getContext("2d").drawImage(A,0,0,pe,Me),qe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pe+"x"+Me+")."),ee}else return"data"in A&&qe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function g(A,v,q,Z,Q,pe=!1){if(A!==null){if(n[A]!==void 0)return n[A];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Me;Z&&(Me=e.get("EXT_texture_norm16"),Me||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=v;if(v===n.RED&&(q===n.FLOAT&&(ee=n.R32F),q===n.HALF_FLOAT&&(ee=n.R16F),q===n.UNSIGNED_BYTE&&(ee=n.R8),q===n.UNSIGNED_SHORT&&Me&&(ee=Me.R16_EXT),q===n.SHORT&&Me&&(ee=Me.R16_SNORM_EXT)),v===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.R8UI),q===n.UNSIGNED_SHORT&&(ee=n.R16UI),q===n.UNSIGNED_INT&&(ee=n.R32UI),q===n.BYTE&&(ee=n.R8I),q===n.SHORT&&(ee=n.R16I),q===n.INT&&(ee=n.R32I)),v===n.RG&&(q===n.FLOAT&&(ee=n.RG32F),q===n.HALF_FLOAT&&(ee=n.RG16F),q===n.UNSIGNED_BYTE&&(ee=n.RG8),q===n.UNSIGNED_SHORT&&Me&&(ee=Me.RG16_EXT),q===n.SHORT&&Me&&(ee=Me.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RG8UI),q===n.UNSIGNED_SHORT&&(ee=n.RG16UI),q===n.UNSIGNED_INT&&(ee=n.RG32UI),q===n.BYTE&&(ee=n.RG8I),q===n.SHORT&&(ee=n.RG16I),q===n.INT&&(ee=n.RG32I)),v===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),q===n.UNSIGNED_INT&&(ee=n.RGB32UI),q===n.BYTE&&(ee=n.RGB8I),q===n.SHORT&&(ee=n.RGB16I),q===n.INT&&(ee=n.RGB32I)),v===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),q===n.UNSIGNED_INT&&(ee=n.RGBA32UI),q===n.BYTE&&(ee=n.RGBA8I),q===n.SHORT&&(ee=n.RGBA16I),q===n.INT&&(ee=n.RGBA32I)),v===n.RGB&&(q===n.UNSIGNED_SHORT&&Me&&(ee=Me.RGB16_EXT),q===n.SHORT&&Me&&(ee=Me.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),v===n.RGBA){const oe=pe?ya:at.getTransfer(Q);q===n.FLOAT&&(ee=n.RGBA32F),q===n.HALF_FLOAT&&(ee=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ee=oe===ft?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&Me&&(ee=Me.RGBA16_EXT),q===n.SHORT&&Me&&(ee=Me.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(A,v){let q;return A?v===null||v===Ln||v===rr?q=n.DEPTH24_STENCIL8:v===mn?q=n.DEPTH32F_STENCIL8:v===sr&&(q=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ln||v===rr?q=n.DEPTH_COMPONENT24:v===mn?q=n.DEPTH_COMPONENT32F:v===sr&&(q=n.DEPTH_COMPONENT16),q}function E(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==Ht?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function S(A){const v=A.target;v.removeEventListener("dispose",S),L(v)}function w(A){const v=i.get(A);if(v.__webglInit===void 0)return;const q=A.source,Z=d.get(q);if(Z){const Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(A),Object.keys(Z).length===0&&d.delete(q)}i.remove(A)}function R(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const q=A.source,Z=d.get(q);delete Z[v.__cacheKey],a.memory.textures--}function L(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const q=A.textures;for(let Z=0,Q=q.length;Z<Q;Z++){const pe=i.get(q[Z]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(q[Z])}i.remove(A)}let z=0;function G(){z=0}function I(){return z}function B(A){z=A}function K(){const A=z;return A>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function O(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Y(A,v){const q=i.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){const Z=A.image;if(Z===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(q,A,v);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+v)}function k(A,v){const q=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){xe(q,A,v);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+v)}function U(A,v){const q=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){xe(q,A,v);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+v)}function V(A,v){const q=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&q.__version!==A.version){Be(q,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+v)}const ne={[zo]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[ko]:n.MIRRORED_REPEAT},ue={[Ot]:n.NEAREST,[xd]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},Ie={[yd]:n.NEVER,[Ad]:n.ALWAYS,[bd]:n.LESS,[zl]:n.LEQUAL,[Ed]:n.EQUAL,[kl]:n.GEQUAL,[Td]:n.GREATER,[wd]:n.NOTEQUAL};function Le(A,v){if(v.type===mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ht||v.magFilter===Wa||v.magFilter===wr||v.magFilter===Ti||v.minFilter===Ht||v.minFilter===Wa||v.minFilter===wr||v.minFilter===Ti)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ne[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ne[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ne[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==wr&&v.minFilter!==Ti||v.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(A,v){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const Z=v.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const pe=O(v);if(pe!==A.__cacheKey){Q[pe]===void 0&&(Q[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),Q[pe].usedTimes++;const Me=Q[A.__cacheKey];Me!==void 0&&(Q[A.__cacheKey].usedTimes--,Me.usedTimes===0&&R(v)),A.__cacheKey=pe,A.__webglTexture=Q[pe].texture}return q}function J(A,v,q){return Math.floor(Math.floor(A/q)/v)}function ie(A,v,q,Z){const pe=A.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,q,Z,v.data);else{pe.sort((ke,Ae)=>ke.start-Ae.start);let Me=0;for(let ke=1;ke<pe.length;ke++){const Ae=pe[Me],be=pe[ke],ze=Ae.start+Ae.count,Xe=J(be.start,v.width,4),je=J(Ae.start,v.width,4);be.start<=ze+1&&Xe===je&&J(be.start+be.count-1,v.width,4)===Xe?Ae.count=Math.max(Ae.count,be.start+be.count-Ae.start):(++Me,pe[Me]=be)}pe.length=Me+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),Te=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ke=0,Ae=pe.length;ke<Ae;ke++){const be=pe[ke],ze=Math.floor(be.start/4),Xe=Math.ceil(be.count/4),je=ze%v.width,W=Math.floor(ze/v.width),ye=Xe,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,je,W,ye,ae,q,Z,v.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function xe(A,v,q){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=Ze(A,v),pe=v.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+q);const Me=i.get(pe);if(pe.version!==Me.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ae=at.getPrimaries(at.workingColorSpace),_e=v.colorSpace===ui?null:at.getPrimaries(v.colorSpace),Pe=v.colorSpace===ui||ae===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let oe=m(v.image,!1,s.maxTextureSize);oe=Ke(v,oe);const Te=r.convert(v.format,v.colorSpace),ke=r.convert(v.type);let Ae=g(v.internalFormat,Te,ke,v.normalized,v.colorSpace,v.isVideoTexture);Le(Z,v);let be;const ze=v.mipmaps,Xe=v.isVideoTexture!==!0,je=Me.__version===void 0||Q===!0,W=pe.dataReady,ye=E(v,oe);if(v.isDepthTexture)Ae=T(v.format===wi,v.type),je&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,Te,ke,null));else if(v.isDataTexture)if(ze.length>0){Xe&&je&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,ze[0].width,ze[0].height);for(let ae=0,_e=ze.length;ae<_e;ae++)be=ze[ae],Xe?W&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,be.width,be.height,Te,ke,be.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,be.width,be.height,0,Te,ke,be.data);v.generateMipmaps=!1}else Xe?(je&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,oe.width,oe.height),W&&ie(v,oe,Te,ke)):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,Te,ke,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xe&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,ze[0].width,ze[0].height,oe.depth);for(let ae=0,_e=ze.length;ae<_e;ae++)if(be=ze[ae],v.format!==gn)if(Te!==null)if(Xe){if(W)if(v.layerUpdates.size>0){const Pe=nu(be.width,be.height,v.format,v.type);for(const ce of v.layerUpdates){const Oe=be.data.subarray(ce*Pe/be.data.BYTES_PER_ELEMENT,(ce+1)*Pe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ce,be.width,be.height,1,Te,Oe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,oe.depth,Te,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,be.width,be.height,oe.depth,0,be.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,oe.depth,Te,ke,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,be.width,be.height,oe.depth,0,Te,ke,be.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Xe&&je&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,ze[0].width,ze[0].height);for(let ae=0,_e=ze.length;ae<_e;ae++)be=ze[ae],v.format!==gn?Te!==null?Xe?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ae,be.width,be.height,0,be.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?W&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,be.width,be.height,Te,ke,be.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,be.width,be.height,0,Te,ke,be.data)}else if(v.isDataArrayTexture)if(Xe){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,oe.width,oe.height,oe.depth),W)if(v.layerUpdates.size>0){const ae=nu(oe.width,oe.height,v.format,v.type);for(const _e of v.layerUpdates){const Pe=oe.data.subarray(_e*ae/oe.data.BYTES_PER_ELEMENT,(_e+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,oe.width,oe.height,1,Te,ke,Pe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Te,ke,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,Te,ke,oe.data);else if(v.isData3DTexture)Xe?(je&&t.texStorage3D(n.TEXTURE_3D,ye,Ae,oe.width,oe.height,oe.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Te,ke,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,Te,ke,oe.data);else if(v.isFramebufferTexture){if(je)if(Xe)t.texStorage2D(n.TEXTURE_2D,ye,Ae,oe.width,oe.height);else{let ae=oe.width,_e=oe.height;for(let Pe=0;Pe<ye;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ae,ae,_e,0,Te,ke,null),ae>>=1,_e>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),oe.parentNode!==ae){ae.appendChild(oe),f.add(v),ae.onpaint=_e=>{const Pe=_e.changedElements;for(const ce of f)Pe.includes(ce.image)&&(ce.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{const Pe=n.RGBA,ce=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pe,ce,Oe,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Xe&&je){const ae=Ye(ze[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ae,ae.width,ae.height)}for(let ae=0,_e=ze.length;ae<_e;ae++)be=ze[ae],Xe?W&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Te,ke,be):t.texImage2D(n.TEXTURE_2D,ae,Ae,Te,ke,be);v.generateMipmaps=!1}else if(Xe){if(je){const ae=Ye(oe);t.texStorage2D(n.TEXTURE_2D,ye,Ae,ae.width,ae.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,ke,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Te,ke,oe);p(v)&&y(Z),Me.__version=pe.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Be(A,v,q){if(v.image.length!==6)return;const Z=Ze(A,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+q);const pe=i.get(Q);if(Q.version!==pe.__version||Z===!0){t.activeTexture(n.TEXTURE0+q);const Me=at.getPrimaries(at.workingColorSpace),ee=v.colorSpace===ui?null:at.getPrimaries(v.colorSpace),oe=v.colorSpace===ui||Me===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,ke=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ce=0;ce<6;ce++)!Te&&!ke?Ae[ce]=m(v.image[ce],!0,s.maxCubemapSize):Ae[ce]=ke?v.image[ce].image:v.image[ce],Ae[ce]=Ke(v,Ae[ce]);const be=Ae[0],ze=r.convert(v.format,v.colorSpace),Xe=r.convert(v.type),je=g(v.internalFormat,ze,Xe,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,ye=pe.__version===void 0||Z===!0,ae=Q.dataReady;let _e=E(v,be);Le(n.TEXTURE_CUBE_MAP,v);let Pe;if(Te){W&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,be.width,be.height);for(let ce=0;ce<6;ce++){Pe=Ae[ce].mipmaps;for(let Oe=0;Oe<Pe.length;Oe++){const Ue=Pe[Oe];v.format!==gn?ze!==null?W?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,0,0,Ue.width,Ue.height,ze,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,je,Ue.width,Ue.height,0,Ue.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,0,0,Ue.width,Ue.height,ze,Xe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,je,Ue.width,Ue.height,0,ze,Xe,Ue.data)}}}else{if(Pe=v.mipmaps,W&&ye){Pe.length>0&&_e++;const ce=Ye(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ke){W?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ae[ce].width,Ae[ce].height,ze,Xe,Ae[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,Ae[ce].width,Ae[ce].height,0,ze,Xe,Ae[ce].data);for(let Oe=0;Oe<Pe.length;Oe++){const ht=Pe[Oe].image[ce].image;W?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,0,0,ht.width,ht.height,ze,Xe,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,je,ht.width,ht.height,0,ze,Xe,ht.data)}}else{W?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ze,Xe,Ae[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,ze,Xe,Ae[ce]);for(let Oe=0;Oe<Pe.length;Oe++){const Ue=Pe[Oe];W?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,0,0,ze,Xe,Ue.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,je,ze,Xe,Ue.image[ce])}}}p(v)&&y(n.TEXTURE_CUBE_MAP),pe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function we(A,v,q,Z,Q,pe){const Me=r.convert(q.format,q.colorSpace),ee=r.convert(q.type),oe=g(q.internalFormat,Me,ee,q.normalized,q.colorSpace),Te=i.get(v),ke=i.get(q);if(ke.__renderTarget=v,!Te.__hasExternalTextures){const Ae=Math.max(1,v.width>>pe),be=Math.max(1,v.height>>pe);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,pe,oe,Ae,be,v.depth,0,Me,ee,null):t.texImage2D(Q,pe,oe,Ae,be,0,Me,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ge(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,ke.__webglTexture,0,Ne(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,ke.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(A,v,q){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,pe=T(v.stencilBuffer,Q),Me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ge(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(v),pe,v.width,v.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(v),pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,A)}else{const Z=v.textures;for(let Q=0;Q<Z.length;Q++){const pe=Z[Q],Me=r.convert(pe.format,pe.colorSpace),ee=r.convert(pe.type),oe=g(pe.internalFormat,Me,ee,pe.normalized,pe.colorSpace);Ge(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(v),oe,v.width,v.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(v),oe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,oe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(A,v,q){const Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(n.TEXTURE_CUBE_MAP,v.depthTexture);const Te=r.convert(v.depthTexture.format),ke=r.convert(v.depthTexture.type);let Ae;v.depthTexture.format===$n?Ae=n.DEPTH_COMPONENT24:v.depthTexture.format===wi&&(Ae=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ae,v.width,v.height,0,Te,ke,null)}}else Y(v.depthTexture,0);const pe=Q.__webglTexture,Me=Ne(v),ee=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,oe=v.depthTexture.format===wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)Ge(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,pe,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,pe,0);else if(v.depthTexture.format===wi)Ge(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,pe,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(A){const v=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let Z=0;Z<6;Z++)rt(v.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?rt(v.__webglFramebuffer[0],A,0):rt(v.__webglFramebuffer,A,0)}else if(q){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),We(v.__webglDepthbuffer[Z],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,pe)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),We(v.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(A,v,q){const Z=i.get(A);v!==void 0&&we(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&se(A)}function de(A){const v=A.texture,q=i.get(A),Z=i.get(v);A.addEventListener("dispose",S);const Q=A.textures,pe=A.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,a.memory.textures++),pe){q.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer[ee]=[];for(let oe=0;oe<v.mipmaps.length;oe++)q.__webglFramebuffer[ee][oe]=n.createFramebuffer()}else q.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer=[];for(let ee=0;ee<v.mipmaps.length;ee++)q.__webglFramebuffer[ee]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ee=0,oe=Q.length;ee<oe;ee++){const Te=i.get(Q[ee]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Ge(A)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const oe=Q[ee];q.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ee]);const Te=r.convert(oe.format,oe.colorSpace),ke=r.convert(oe.type),Ae=g(oe.internalFormat,Te,ke,oe.normalized,oe.colorSpace,A.isXRRenderTarget===!0),be=Ne(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,q.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),We(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Le(n.TEXTURE_CUBE_MAP,v);for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)we(q.__webglFramebuffer[ee][oe],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,oe);else we(q.__webglFramebuffer[ee],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(v)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ee=0,oe=Q.length;ee<oe;ee++){const Te=Q[ee],ke=i.get(Te);let Ae=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ae=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ke.__webglTexture),Le(Ae,Te),we(q.__webglFramebuffer,A,Te,n.COLOR_ATTACHMENT0+ee,Ae,0),p(Te)&&y(Ae)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,Z.__webglTexture),Le(ee,v),v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)we(q.__webglFramebuffer[oe],A,v,n.COLOR_ATTACHMENT0,ee,oe);else we(q.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ee,0);p(v)&&y(ee),t.unbindTexture()}A.depthBuffer&&se(A)}function ge(A){const v=A.textures;for(let q=0,Z=v.length;q<Z;q++){const Q=v[q];if(p(Q)){const pe=b(A),Me=i.get(Q).__webglTexture;t.bindTexture(pe,Me),y(pe),t.unbindTexture()}}}const Se=[],He=[];function Ve(A){if(A.samples>0){if(Ge(A)===!1){const v=A.textures,q=A.width,Z=A.height;let Q=n.COLOR_BUFFER_BIT;const pe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),ee=v.length>1;if(ee)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const oe=A.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const ke=i.get(v[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,q,Z,0,0,q,Z,Q,n.NEAREST),c===!0&&(Se.length=0,He.length=0,Se.push(n.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Se.push(pe),He.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const ke=i.get(v[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ne(A){return Math.min(s.maxSamples,A.samples)}function Ge(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(A){const v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Ke(A,v){const q=A.colorSpace,Z=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Sa&&q!==ui&&(at.getTransfer(q)===ft?(Z!==gn||Q!==nn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",q)),v}function Ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=re,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tx(n,e){function t(i,s=ui){let r;const a=at.getTransfer(s);if(i===nn)return n.UNSIGNED_BYTE;if(i===Dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ju)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ku)return n.BYTE;if(i===Ju)return n.SHORT;if(i===sr)return n.UNSIGNED_SHORT;if(i===Il)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===eh)return n.ALPHA;if(i===th)return n.RGB;if(i===gn)return n.RGBA;if(i===$n)return n.DEPTH_COMPONENT;if(i===wi)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===Fl)return n.RED_INTEGER;if(i===Li)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===Bl)return n.RGBA_INTEGER;if(i===ra||i===aa||i===oa||i===la)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vo||i===Go||i===Ho||i===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xo||i===qo||i===Yo||i===$o||i===Zo||i===xa||i===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xo||i===qo)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===$o)return r.COMPRESSED_R11_EAC;if(i===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return r.COMPRESSED_RG11_EAC;if(i===Ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jo||i===Qo||i===jo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===dl||i===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pl||i===ml||i===va||i===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new uh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rx extends Ui{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const M=typeof XRWebGLBinding<"u",m=new sx,p={},y=t.getContextAttributes();let b=null,g=null;const T=[],E=[],C=new ve;let S=null,w=null;const R=new tn;R.viewport=new bt;const L=new tn;L.viewport=new bt;const z=[R,L],G=new dp;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=T[J];return ie===void 0&&(ie=new Ja,T[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=T[J];return ie===void 0&&(ie=new Ja,T[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=T[J];return ie===void 0&&(ie=new Ja,T[J]=ie),ie.getHandSpace()};function K(J){const ie=E.indexOf(J.inputSource);if(ie===-1)return;const xe=T[ie];xe!==void 0&&(xe.update(J.inputSource,J.frame,l||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<T.length;J++){const ie=E[J];ie!==null&&(E[J]=null,T[J].disconnect(ie))}I=null,B=null,m.reset();for(const J in p)delete p[J];if(e.setRenderTarget(b),d=null,h=null,f=null,s=null,g=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Be=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?wi:$n,Be=y.stencil?rr:Ln);const We={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(We),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new xn(h.textureWidth,h.textureHeight,{format:gn,type:nn,depthTexture:new lr(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new xn(d.framebufferWidth,d.framebufferHeight,{format:gn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(J){for(let ie=0;ie<J.removed.length;ie++){const xe=J.removed[ie],Be=E.indexOf(xe);Be>=0&&(E[Be]=null,T[Be].disconnect(xe))}for(let ie=0;ie<J.added.length;ie++){const xe=J.added[ie];let Be=E.indexOf(xe);if(Be===-1){for(let We=0;We<T.length;We++)if(We>=E.length){E.push(xe),Be=We;break}else if(E[We]===null){E[We]=xe,Be=We;break}if(Be===-1)break}const we=T[Be];we&&we.connect(xe)}}const k=new F,U=new F;function V(J,ie,xe){k.setFromMatrixPosition(ie.matrixWorld),U.setFromMatrixPosition(xe.matrixWorld);const Be=k.distanceTo(U),we=ie.projectionMatrix.elements,We=xe.projectionMatrix.elements,rt=we[14]/(we[10]-1),se=we[14]/(we[10]+1),re=(we[9]+1)/we[5],de=(we[9]-1)/we[5],ge=(we[8]-1)/we[0],Se=(We[8]+1)/We[0],He=rt*ge,Ve=rt*Se,Ne=Be/(-ge+Se),Ge=Ne*-ge;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(Ne),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const N=rt+Ne,Ke=se+Ne,Ye=He-Ge,A=Ve+(Be-Ge),v=re*se/Ke*N,q=de*se/Ke*N;J.projectionMatrix.makePerspective(Ye,A,v,q,N,Ke),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ne(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ie=J.near,xe=J.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),G.near=L.near=R.near=ie,G.far=L.far=R.far=xe,(I!==G.near||B!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,B=G.far),G.layers.mask=J.layers.mask|6,R.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;const Be=J.parent,we=G.cameras;ne(G,Be);for(let We=0;We<we.length;We++)ne(we[We],Be);we.length===2?V(G,R,L):G.projectionMatrix.copy(R.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),ue(J,G,Be)};function ue(J,ie,xe){xe===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=or*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(J){return p[J]};let Ie=null;function Le(J,ie){if(u=ie.getViewerPose(l||a),_=ie,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let Be=!1;xe.length!==G.cameras.length&&(G.cameras.length=0,Be=!0);for(let se=0;se<xe.length;se++){const re=xe[se];let de=null;if(d!==null)de=d.getViewport(re);else{const Se=f.getViewSubImage(h,re);de=Se.viewport,se===0&&(e.setRenderTargetTextures(g,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(g))}let ge=z[se];ge===void 0&&(ge=new tn,ge.layers.enable(se),ge.viewport=new bt,z[se]=ge),ge.matrix.fromArray(re.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(re.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(de.x,de.y,de.width,de.height),se===0&&(G.matrix.copy(ge.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Be===!0&&G.cameras.push(ge)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const se=f.getDepthInformation(xe[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(we&&we.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let se=0;se<xe.length;se++){const re=xe[se].camera;if(re){let de=p[re];de||(de=new uh,p[re]=de);const ge=f.getCameraImage(re);de.sourceTexture=ge}}}}for(let xe=0;xe<T.length;xe++){const Be=E[xe],we=T[xe];Be!==null&&we!==void 0&&we.update(Be,ie,l||a)}Ie&&Ie(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ze=new yh;Ze.setAnimationLoop(Le),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}}const ax=new mt,Rh=new et;Rh.set(-1,0,0,0,1,0,0,0,1);function ox(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,g){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,g=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(g)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lx(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,T){const E=T.program;i.uniformBlockBinding(g,E)}function l(g,T){let E=s[g.id];E===void 0&&(m(g),E=u(g),s[g.id]=E,g.addEventListener("dispose",y));const C=T.program;i.updateUBOMapping(g,C);const S=e.render.frame;r[g.id]!==S&&(h(g),r[g.id]=S)}function u(g){const T=f();g.__bindingPointIndex=T;const E=n.createBuffer(),C=g.__size,S=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const T=s[g.id],E=g.uniforms,C=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let S=0,w=E.length;S<w;S++){const R=E[S];if(Array.isArray(R))for(let L=0,z=R.length;L<z;L++)d(R[L],S,L,C);else d(R,S,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(g,T,E,C){if(M(g,T,E,C)===!0){const S=g.__offset,w=g.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){const z=w[L],G=p(z);_(z,g.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,g.__data)}}function _(g,T,E){typeof g=="number"||typeof g=="boolean"?T[0]=g:g.isMatrix3?(T[0]=g.elements[0],T[1]=g.elements[1],T[2]=g.elements[2],T[3]=0,T[4]=g.elements[3],T[5]=g.elements[4],T[6]=g.elements[5],T[7]=0,T[8]=g.elements[6],T[9]=g.elements[7],T[10]=g.elements[8],T[11]=0):ArrayBuffer.isView(g)?T.set(new g.constructor(g.buffer,g.byteOffset,T.length)):g.toArray(T,E)}function M(g,T,E,C){const S=g.value,w=T+"_"+E;if(C[w]===void 0)return typeof S=="number"||typeof S=="boolean"?C[w]=S:ArrayBuffer.isView(S)?C[w]=S.slice():C[w]=S.clone(),!0;{const R=C[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return C[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function m(g){const T=g.uniforms;let E=0;const C=16;for(let w=0,R=T.length;w<R;w++){const L=Array.isArray(T[w])?T[w]:[T[w]];for(let z=0,G=L.length;z<G;z++){const I=L[z],B=Array.isArray(I.value)?I.value:[I.value];for(let K=0,O=B.length;K<O;K++){const Y=B[K],k=p(Y),U=E%C,V=U%k.boundary,ne=U+V;E+=V,ne!==0&&C-ne<k.storage&&(E+=C-ne),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=k.storage}}}const S=E%C;return S>0&&(E+=C-S),g.__size=E,g.__cache={},this}function p(g){const T={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(T.boundary=4,T.storage=4):g.isVector2?(T.boundary=8,T.storage=8):g.isVector3||g.isColor?(T.boundary=16,T.storage=12):g.isVector4?(T.boundary=16,T.storage=16):g.isMatrix3?(T.boundary=48,T.storage=48):g.isMatrix4?(T.boundary=64,T.storage=64):g.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(T.boundary=16,T.storage=g.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",g),T}function y(g){const T=g.target;T.removeEventListener("dispose",y);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(const g in s)n.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}const cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function ux(){return En===null&&(En=new lh(cx,16,16,Li,In),En.name="DFG_LUT",En.minFilter=Ht,En.magFilter=Ht,En.wrapS=Wn,En.wrapT=Wn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class hx{constructor(e={}){const{canvas:t=Pd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=nn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=d,m=new Set([Bl,Ol,Fl]),p=new Set([nn,Ln,sr,rr,Dl,Nl]),y=new Uint32Array(4),b=new Int32Array(4),g=new F;let T=null,E=null;const C=[],S=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,z=null,G=null,I=null,B=null;this._outputColorSpace=Gt;let K=0,O=0,Y=null,k=-1,U=null;const V=new bt,ne=new bt;let ue=null;const Ie=new Qe(0);let Le=0,Ze=t.width,J=t.height,ie=1,xe=null,Be=null;const we=new bt(0,0,Ze,J),We=new bt(0,0,Ze,J);let rt=!1;const se=new ql;let re=!1,de=!1;const ge=new mt,Se=new F,He=new bt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Ge(){return Y===null?ie:1}let N=i;function Ke(x,P){return t.getContext(x,P)}let Ye,A,v,q,Z,Q,pe,Me,ee,oe,Te,ke,Ae,be,ze,Xe,je,W,ye,ae,_e,Pe,ce;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),N===null){const P="webgl2";if(N=Ke(P,x),N===null)throw Ke(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(x){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),ot("WebGLRenderer: "+x.message),x}function Oe(){Ye=new ug(N),Ye.init(),_e=new tx(N,Ye),A=new eg(N,Ye,e,_e),v=new j_(N,Ye),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),G=N.createFramebuffer(),I=N.createFramebuffer(),B=N.createFramebuffer(),q=new fg(N),Z=new z_,Q=new ex(N,Ye,v,Z,A,_e,q),pe=new cg(R),Me=new mp(N),Pe=new Q0(N,Me),ee=new hg(N,Me,q,Pe),oe=new mg(N,ee,Me,Pe,q),W=new pg(N,A,Q),ze=new tg(Z),Te=new B_(R,pe,Ye,A,Pe,ze),ke=new ox(R,Z),Ae=new V_,be=new Y_(Ye),je=new J0(R,pe,v,oe,_,c),Xe=new Q_(R,oe,A),ce=new lx(N,q,A,v),ye=new j0(N,Ye,q),ae=new dg(N,Ye,q),q.programs=Te.programs,R.capabilities=A,R.extensions=Ye,R.properties=Z,R.renderLists=Ae,R.shadowMap=Xe,R.state=v,R.info=q}M!==nn&&(w=new _g(M,t.width,t.height,o,s,r));const Ue=new rx(R,N);this.xr=Ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=Ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(x){x!==void 0&&(ie=x,this.setSize(Ze,J,!1))},this.getSize=function(x){return x.set(Ze,J)},this.setSize=function(x,P,D=!0){if(Ue.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=x,J=P,t.width=Math.floor(x*ie),t.height=Math.floor(P*ie),D===!0&&(t.style.width=x+"px",t.style.height=P+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Ze*ie,J*ie).floor()},this.setDrawingBufferSize=function(x,P,D){Ze=x,J=P,ie=D,t.width=Math.floor(x*D),t.height=Math.floor(P*D),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(M===nn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(V)},this.getViewport=function(x){return x.copy(we)},this.setViewport=function(x,P,D,H){x.isVector4?we.set(x.x,x.y,x.z,x.w):we.set(x,P,D,H),v.viewport(V.copy(we).multiplyScalar(ie).round())},this.getScissor=function(x){return x.copy(We)},this.setScissor=function(x,P,D,H){x.isVector4?We.set(x.x,x.y,x.z,x.w):We.set(x,P,D,H),v.scissor(ne.copy(We).multiplyScalar(ie).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(x){v.setScissorTest(rt=x)},this.setOpaqueSort=function(x){xe=x},this.setTransparentSort=function(x){Be=x},this.getClearColor=function(x){return x.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,D=!0){let H=0;if(x){let X=!1;if(Y!==null){const me=Y.texture.format;X=m.has(me)}if(X){const me=Y.texture.type,Ee=p.has(me),he=je.getClearColor(),fe=je.getClearAlpha(),Re=he.r,Je=he.g,tt=he.b;Ee?(y[0]=Re,y[1]=Je,y[2]=tt,y[3]=fe,N.clearBufferuiv(N.COLOR,0,y)):(b[0]=Re,b[1]=Je,b[2]=tt,b[3]=fe,N.clearBufferiv(N.COLOR,0,b))}else H|=N.COLOR_BUFFER_BIT}P&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),D&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),z=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),je.dispose(),Ae.dispose(),be.dispose(),Z.dispose(),pe.dispose(),oe.dispose(),Pe.dispose(),ce.dispose(),Te.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Ps),Ue.removeEventListener("sessionend",Ls),Mn.stop()};function ht(x){x.preventDefault(),xc("WebGLRenderer: Context Lost."),L=!0}function ct(){xc("WebGLRenderer: Context Restored."),L=!1;const x=q.autoReset,P=Xe.enabled,D=Xe.autoUpdate,H=Xe.needsUpdate,X=Xe.type;Oe(),q.autoReset=x,Xe.enabled=P,Xe.autoUpdate=D,Xe.needsUpdate=H,Xe.type=X}function Dt(x){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Xt(x){const P=x.target;P.removeEventListener("dispose",Xt),yr(P)}function yr(x){ka(x),Z.remove(x)}function ka(x){const P=Z.get(x).programs;P!==void 0&&(P.forEach(function(D){Te.releaseProgram(D)}),x.isShaderMaterial&&Te.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,D,H,X,me){P===null&&(P=Ve);const Ee=X.isMesh&&X.matrixWorld.determinantAffine()<0,he=Tr(x,P,D,H,X);v.setMaterial(H,Ee);let fe=D.index,Re=1;if(H.wireframe===!0){if(fe=ee.getWireframeAttribute(D),fe===void 0)return;Re=2}const Je=D.drawRange,tt=D.attributes.position;let Fe=Je.start*Re,dt=(Je.start+Je.count)*Re;me!==null&&(Fe=Math.max(Fe,me.start*Re),dt=Math.min(dt,(me.start+me.count)*Re)),fe!==null?(Fe=Math.max(Fe,0),dt=Math.min(dt,fe.count)):tt!=null&&(Fe=Math.max(Fe,0),dt=Math.min(dt,tt.count));const At=dt-Fe;if(At<0||At===1/0)return;Pe.setup(X,H,he,D,fe);let Mt,gt=ye;if(fe!==null&&(Mt=Me.get(fe),gt=ae,gt.setIndex(Mt)),X.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Ge()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(X.isLine){let zt=H.linewidth;zt===void 0&&(zt=1),v.setLineWidth(zt*Ge()),X.isLineSegments?gt.setMode(N.LINES):X.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else X.isPoints?gt.setMode(N.POINTS):X.isSprite&&gt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const zt=X._multiDrawStarts,De=X._multiDrawCounts,qt=X._multiDrawCount,ut=fe?Me.get(fe).bytesPerElement:1,sn=Z.get(H).currentProgram.getUniforms();for(let yn=0;yn<qt;yn++)sn.setValue(N,"_gl_DrawID",yn),gt.render(zt[yn]/ut,De[yn])}else if(X.isInstancedMesh)gt.renderInstances(Fe,At,X.count);else if(D.isInstancedBufferGeometry){const zt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,De=Math.min(D.instanceCount,zt);gt.renderInstances(Fe,At,De)}else gt.render(Fe,At)};function Rs(x,P,D,H){z!==null&&x.isNodeMaterial&&z.setObject(H,x),re===!0&&ze.setState(x,D,!1),x.transparent===!0&&x.side===Ft&&x.forceSinglePass===!1?(x.side=Zt,x.needsUpdate=!0,xi(x,P,H),x.side=Ri,x.needsUpdate=!0,xi(x,P,H),x.side=Ft):xi(x,P,H)}this.compile=function(x,P,D=null){D===null&&(D=x),z!==null&&z.renderStart(x,P,D),E=be.get(D),E.init(P),S.push(E),D.traverseVisible(function(X){X.isLight&&X.layers.test(P.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),x!==D&&x.traverseVisible(function(X){X.isLight&&X.layers.test(P.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),de=this.localClippingEnabled,re=ze.init(this.clippingPlanes,de),re===!0&&ze.setGlobalState(this.clippingPlanes,P),z!==null&&Xe.render(E.state.shadowsArray,D,P);const H=new Set;return x.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const me=X.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){const he=me[Ee];Rs(he,D,P,X),H.add(he)}else Rs(me,D,P,X),H.add(me)}),E=S.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(x,P,D=null){const H=this.compile(x,P,D);return new Promise(X=>{function me(){if(H.forEach(function(Ee){const fe=Z.get(Ee).currentProgram;(fe===void 0||fe.isReady())&&H.delete(Ee)}),H.size===0){X(x);return}setTimeout(me,10)}Ye.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let On=null;function br(x){On&&On(x)}function Ps(){Mn.stop()}function Ls(){Mn.start()}const Mn=new yh;Mn.setAnimationLoop(br),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(x){On=x,Ue.setAnimationLoop(x),x===null?Mn.stop():Mn.start()},Ue.addEventListener("sessionstart",Ps),Ue.addEventListener("sessionend",Ls),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(x,P);const D=Ue.enabled===!0&&Ue.isPresenting===!0,H=w!==null&&(Y===null||D)&&w.begin(R,Y);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(P),P=Ue.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,P,Y),E=be.get(x,S.length),E.init(P),E.state.textureUnits=Q.getTextureUnits(),S.push(E),ge.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),se.setFromProjectionMatrix(ge,An,P.reversedDepth),de=this.localClippingEnabled,re=ze.init(this.clippingPlanes,de),T=Ae.get(x,C.length),T.init(),C.push(T),Ue.enabled===!0&&Ue.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&ki(Ee,P,-1/0,R.sortObjects)}ki(x,P,0,R.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(xe,Be),Ne=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Ne&&je.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&ze.beginShadows();const X=E.state.shadowsArray;if(Xe.render(X,x,P),re===!0&&ze.endShadows(),(H&&w.hasRenderPass())===!1){const Ee=T.opaque,he=T.transmissive;if(E.setupLights(),P.isArrayCamera){const fe=P.cameras;if(he.length>0)for(let Re=0,Je=fe.length;Re<Je;Re++){const tt=fe[Re];Is(Ee,he,x,tt)}Ne&&je.render(x);for(let Re=0,Je=fe.length;Re<Je;Re++){const tt=fe[Re];Sn(T,x,tt,tt.viewport)}}else he.length>0&&Is(Ee,he,x,P),Ne&&je.render(x),Sn(T,x,P)}Y!==null&&O===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),H&&w.end(R),x.isScene===!0&&x.onAfterRender(R,x,P),Pe.resetDefaultState(),k=-1,U=null,S.pop(),S.length>0?(E=S[S.length-1],Q.setTextureUnits(E.state.textureUnits),re===!0&&ze.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,z!==null&&z.renderEnd()};function ki(x,P,D,H){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)D=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(se)){H&&He.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);const Ee=oe.update(x),he=x.material;he.visible&&T.push(x,Ee,he,D,He.z,null,P)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(se))){const Ee=oe.update(x),he=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),He.copy(x.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(he)){const fe=Ee.groups;for(let Re=0,Je=fe.length;Re<Je;Re++){const tt=fe[Re],Fe=he[tt.materialIndex];Fe&&Fe.visible&&T.push(x,Ee,Fe,D,He.z,tt,P)}}else he.visible&&T.push(x,Ee,he,D,He.z,null,P)}}const me=x.children;for(let Ee=0,he=me.length;Ee<he;Ee++)ki(me[Ee],P,D,H)}function Sn(x,P,D,H){const{opaque:X,transmissive:me,transparent:Ee}=x;E.setupLightsView(D),re===!0&&ze.setGlobalState(R.clippingPlanes,D),H&&v.viewport(V.copy(H)),X.length>0&&_i(X,P,D),me.length>0&&_i(me,P,D),Ee.length>0&&_i(Ee,P,D),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Is(x,P,D,H){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Fe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new xn(1,1,{generateMipmaps:!0,type:Fe?In:nn,minFilter:Ti,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const me=E.state.transmissionRenderTarget[H.id],Ee=H.viewport||V;me.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const he=R.getRenderTarget(),fe=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(Ie),Le=R.getClearAlpha(),Le<1&&R.setClearColor(16777215,.5),R.clear(),Ne&&je.render(D);const Je=R.toneMapping;R.toneMapping=Rn;const tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),re===!0&&ze.setGlobalState(R.clippingPlanes,H),_i(x,D,H),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let dt=0,At=P.length;dt<At;dt++){const Mt=P[dt],{object:gt,geometry:zt,material:De,group:qt}=Mt;if(De.side===Ft&&gt.layers.test(H.layers)){const ut=De.side;De.side=Zt,De.needsUpdate=!0,Ds(gt,D,H,zt,De,qt),De.side=ut,De.needsUpdate=!0,Fe=!0}}Fe===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me))}R.setRenderTarget(he,fe,Re),R.setClearColor(Ie,Le),tt!==void 0&&(H.viewport=tt),R.toneMapping=Je}function _i(x,P,D){const H=P.isScene===!0?P.overrideMaterial:null;for(let X=0,me=x.length;X<me;X++){const Ee=x[X],{object:he,geometry:fe,group:Re}=Ee;let Je=Ee.material;Je.allowOverride===!0&&H!==null&&(Je=H),he.layers.test(D.layers)&&Ds(he,P,D,fe,Je,Re)}}function Ds(x,P,D,H,X,me){z!==null&&X.isNodeMaterial&&z.setObject(x,X),x.onBeforeRender(R,P,D,H,X,me),x.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),X.onBeforeRender(R,P,D,H,x,me),X.transparent===!0&&X.side===Ft&&X.forceSinglePass===!1?(X.side=Zt,X.needsUpdate=!0,R.renderBufferDirect(D,P,H,X,x,me),X.side=Ri,X.needsUpdate=!0,R.renderBufferDirect(D,P,H,X,x,me),X.side=Ft):R.renderBufferDirect(D,P,H,X,x,me),x.onAfterRender(R,P,D,H,X,me)}function xi(x,P,D){P.isScene!==!0&&(P=Ve);const H=Z.get(x),X=E.state.lights,me=E.state.shadowsArray,Ee=X.state.version,he=Te.getParameters(x,X.state,me,P,D,E.state.lightProbeGridArray),fe=Te.getProgramCacheKey(he);let Re=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,H.fog=P.fog;const Je=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=pe.get(x.envMap||H.environment,Je),H.envMapRotation=H.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",Xt),Re=new Map,H.programs=Re);let tt=Re.get(fe);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===Ee)return Vi(x,he),tt}else he.uniforms=Te.getUniforms(x),z!==null&&x.isNodeMaterial&&z.build(x,D,he),x.onBeforeCompile(he,R),tt=Te.acquireProgram(he,fe),Re.set(fe,tt),H.uniforms=he.uniforms;const Fe=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Fe.clippingPlanes=ze.uniform),Vi(x,he),H.needsLights=$(x),H.lightsStateVersion=Ee,H.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.sunLights.value=X.state.sun,Fe.sunLightShadows.value=X.state.sunShadow,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.sunShadowMatrix.value=X.state.sunShadowMatrix,Fe.sunShadowCascade.value=X.state.sunShadowCascade,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=tt,H.uniformsList=null,tt}function Ns(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=ca.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Vi(x,P){const D=Z.get(x);D.outputColorSpace=P.outputColorSpace,D.batching=P.batching,D.batchingColor=P.batchingColor,D.instancing=P.instancing,D.instancingColor=P.instancingColor,D.instancingMorph=P.instancingMorph,D.skinning=P.skinning,D.morphTargets=P.morphTargets,D.morphNormals=P.morphNormals,D.morphColors=P.morphColors,D.morphTargetsCount=P.morphTargetsCount,D.numClippingPlanes=P.numClippingPlanes,D.numIntersection=P.numClipIntersection,D.vertexAlphas=P.vertexAlphas,D.vertexTangents=P.vertexTangents,D.toneMapping=P.toneMapping}function Er(x,P){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;g.setFromMatrixPosition(P.matrixWorld);for(let D=0,H=x.length;D<H;D++){const X=x[D];if(X.texture!==null&&X.boundingBox.containsPoint(g))return X}return null}function Tr(x,P,D,H,X){P.isScene!==!0&&(P=Ve),Q.resetTextureUnits();const me=P.fog,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?P.environment:null,he=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:at.workingColorSpace,fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=pe.get(H.envMap||Ee,fe),Je=H.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,tt=!!D.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!D.morphAttributes.position,dt=!!D.morphAttributes.normal,At=!!D.morphAttributes.color;let Mt=Rn;H.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Mt=R.toneMapping);const gt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,zt=gt!==void 0?gt.length:0,De=Z.get(H),qt=E.state.lights;if(re===!0&&(de===!0||x!==U)){const xt=x===U&&H.id===k;ze.setState(H,x,xt)}let ut=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==qt.state.version||De.outputColorSpace!==he||X.isBatchedMesh&&De.batching===!1||!X.isBatchedMesh&&De.batching===!0||X.isBatchedMesh&&De.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&De.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||X.isInstancedMesh&&De.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&De.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&De.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&De.instancingMorph===!1&&X.morphTexture!==null||De.envMap!==Re||H.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ze.numPlanes||De.numIntersection!==ze.numIntersection)||De.vertexAlphas!==Je||De.vertexTangents!==tt||De.morphTargets!==Fe||De.morphNormals!==dt||De.morphColors!==At||De.toneMapping!==Mt||De.morphTargetsCount!==zt||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,De.__version=H.version);let sn=De.currentProgram;ut===!0&&(sn=xi(H,P,X),z&&H.isNodeMaterial&&z.onUpdateProgram(H,sn,De));let yn=!1,Kn=!1,Gi=!1;const pt=sn.getUniforms(),Tt=De.uniforms;if(v.useProgram(sn.program)&&(yn=!0,Kn=!0,Gi=!0),H.id!==k&&(k=H.id,Kn=!0),De.needsLights){const xt=Er(E.state.lightProbeGridArray,X);De.lightProbeGrid!==xt&&(De.lightProbeGrid=xt,Kn=!0)}if(yn||U!==x){v.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),pt.setValue(N,"projectionMatrix",x.projectionMatrix),pt.setValue(N,"viewMatrix",x.matrixWorldInverse);const Qn=pt.map.cameraPosition;Qn!==void 0&&Qn.setValue(N,Se.setFromMatrixPosition(x.matrixWorld)),A.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pt.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),U!==x&&(U=x,Kn=!0,Gi=!0)}if(De.needsLights&&(qt.state.sunShadowMap.length>0&&pt.setValue(N,"sunShadowMap",qt.state.sunShadowMap,Q),qt.state.directionalShadowMap.length>0&&pt.setValue(N,"directionalShadowMap",qt.state.directionalShadowMap,Q),qt.state.spotShadowMap.length>0&&pt.setValue(N,"spotShadowMap",qt.state.spotShadowMap,Q),qt.state.pointShadowMap.length>0&&pt.setValue(N,"pointShadowMap",qt.state.pointShadowMap,Q)),X.isSkinnedMesh){pt.setOptional(N,X,"bindMatrix"),pt.setOptional(N,X,"bindMatrixInverse");const xt=X.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(N,"boneTexture",xt.boneTexture,Q))}X.isBatchedMesh&&(pt.setOptional(N,X,"batchingTexture"),pt.setValue(N,"batchingTexture",X._matricesTexture,Q),pt.setOptional(N,X,"batchingIdTexture"),pt.setValue(N,"batchingIdTexture",X._indirectTexture,Q),pt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(N,"batchingColorTexture",X._colorsTexture,Q));const Jn=D.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&W.update(X,D,sn),(Kn||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,pt.setValue(N,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&P.environment!==null&&(Tt.envMapIntensity.value=P.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=ux()),Kn){if(pt.setValue(N,"toneMappingExposure",R.toneMappingExposure),De.needsLights&&Va(Tt,Gi),me&&H.fog===!0&&ke.refreshFogUniforms(Tt,me),ke.refreshMaterialUniforms(Tt,H,ie,J,E.state.transmissionRenderTarget[x.id]),De.needsLights&&De.lightProbeGrid){const xt=De.lightProbeGrid;Tt.probesSH.value=xt.texture,Tt.probesMin.value.copy(xt.boundingBox.min),Tt.probesMax.value.copy(xt.boundingBox.max),Tt.probesResolution.value.copy(xt.resolution)}ca.upload(N,Ns(De),Tt,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ca.upload(N,Ns(De),Tt,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pt.setValue(N,"center",X.center),pt.setValue(N,"modelViewMatrix",X.modelViewMatrix),pt.setValue(N,"normalMatrix",X.normalMatrix),pt.setValue(N,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){const xt=H.uniformsGroups;for(let Qn=0,Hi=xt.length;Qn<Hi;Qn++){const hc=xt[Qn];ce.update(hc,sn),ce.bind(hc,sn)}}return sn}function Va(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function $(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(x,P,D){const H=Z.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Z.get(x.texture).__webglTexture=P,Z.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:D,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){const D=Z.get(x);D.__webglFramebuffer=P,D.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,D=0){Y=x,K=P,O=D;let H=null,X=!1,me=!1;if(x){const he=Z.get(x);if(he.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),V.copy(x.viewport),ne.copy(x.scissor),ue=x.scissorTest,v.viewport(V),v.scissor(ne),v.setScissorTest(ue),k=-1;return}else if(he.__webglFramebuffer===void 0)Q.setupRenderTarget(x);else if(he.__hasExternalTextures)Q.rebindTextures(x,Z.get(x.texture).__webglTexture,Z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Je=x.depthTexture;if(he.__boundDepthTexture!==Je){if(Je!==null&&Z.has(Je)&&(x.width!==Je.image.width||x.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(x)}}const fe=x.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(me=!0);const Re=Z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[P])?H=Re[P][D]:H=Re[P],X=!0):x.samples>0&&Q.useMultisampledRTT(x)===!1?H=Z.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[D]:H=Re,V.copy(x.viewport),ne.copy(x.scissor),ue=x.scissorTest}else V.copy(we).multiplyScalar(ie).floor(),ne.copy(We).multiplyScalar(ie).floor(),ue=rt;if(D!==0&&(H=G),v.bindFramebuffer(N.FRAMEBUFFER,H)&&v.drawBuffers(x,H),v.viewport(V),v.scissor(ne),v.setScissorTest(ue),X){const he=Z.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,D)}else if(me){const he=P;for(let fe=0;fe<x.textures.length;fe++){const Re=Z.get(x.textures[fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+fe,Re.__webglTexture,D,he)}}else if(x!==null&&D!==0){const he=Z.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,D)}k=-1};function te(x){const P=Z.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=A.textureFormatReadable(x.format),P.__typeReadable=A.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,D,H,X,me,Ee,he=0){if(!(x&&x.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(fe=fe[Ee]),fe){v.bindFramebuffer(N.FRAMEBUFFER,fe);try{const Re=x.textures[he],Je=Re.format,tt=Re.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he);const Fe=te(Re);if(Fe.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-H&&D>=0&&D<=x.height-X&&N.readPixels(P,D,H,X,_e.convert(Je),_e.convert(tt),me)}finally{const Re=Y!==null?Z.get(Y).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,P,D,H,X,me,Ee,he=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(fe=fe[Ee]),fe)if(P>=0&&P<=x.width-H&&D>=0&&D<=x.height-X){v.bindFramebuffer(N.FRAMEBUFFER,fe);const Re=x.textures[he],Je=Re.format,tt=Re.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he);const Fe=te(Re);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(P,D,H,X,_e.convert(Je),_e.convert(tt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const At=Y!==null?Z.get(Y).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,At);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ld(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(dt),N.deleteSync(Mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,D=0){const H=Math.pow(2,-D),X=Math.floor(x.image.width*H),me=Math.floor(x.image.height*H),Ee=P!==null?P.x:0,he=P!==null?P.y:0;Q.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,D,0,0,Ee,he,X,me),v.unbindTexture()},this.copyTextureToTexture=function(x,P,D=null,H=null,X=0,me=0){let Ee,he,fe,Re,Je,tt,Fe,dt,At;const Mt=x.isCompressedTexture?x.mipmaps[me]:x.image;if(D!==null)Ee=D.max.x-D.min.x,he=D.max.y-D.min.y,fe=D.isBox3?D.max.z-D.min.z:1,Re=D.min.x,Je=D.min.y,tt=D.isBox3?D.min.z:0;else{const Tt=Math.pow(2,-X);Ee=Math.floor(Mt.width*Tt),he=Math.floor(Mt.height*Tt),x.isDataArrayTexture?fe=Mt.depth:x.isData3DTexture?fe=Math.floor(Mt.depth*Tt):fe=1,Re=0,Je=0,tt=0}H!==null?(Fe=H.x,dt=H.y,At=H.z):(Fe=0,dt=0,At=0);const gt=_e.convert(P.format),zt=_e.convert(P.type);let De;P.isData3DTexture?(Q.setTexture3D(P,0),De=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Q.setTexture2DArray(P,0),De=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(P,0),De=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const qt=v.getParameter(N.UNPACK_ROW_LENGTH),ut=v.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=v.getParameter(N.UNPACK_SKIP_PIXELS),yn=v.getParameter(N.UNPACK_SKIP_ROWS),Kn=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),v.pixelStorei(N.UNPACK_SKIP_ROWS,Je),v.pixelStorei(N.UNPACK_SKIP_IMAGES,tt);const Gi=x.isDataArrayTexture||x.isData3DTexture,pt=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){const Tt=Z.get(x),Jn=Z.get(P),xt=Z.get(Tt.__renderTarget),Qn=Z.get(Jn.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,xt.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Hi=0;Hi<fe;Hi++)Gi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Z.get(x).__webglTexture,X,tt+Hi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Z.get(P).__webglTexture,me,At+Hi)),N.blitFramebuffer(Re,Je,Ee,he,Fe,dt,Ee,he,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||x.isRenderTargetTexture||Z.has(x)){const Tt=Z.get(x),Jn=Z.get(P);v.bindFramebuffer(N.READ_FRAMEBUFFER,I),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let xt=0;xt<fe;xt++)Gi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,X,tt+xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,X),pt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jn.__webglTexture,me,At+xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jn.__webglTexture,me),X!==0?N.blitFramebuffer(Re,Je,Ee,he,Fe,dt,Ee,he,N.COLOR_BUFFER_BIT,N.NEAREST):pt?N.copyTexSubImage3D(De,me,Fe,dt,At+xt,Re,Je,Ee,he):N.copyTexSubImage2D(De,me,Fe,dt,Re,Je,Ee,he);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pt?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(De,me,Fe,dt,At,Ee,he,fe,gt,zt,Mt.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(De,me,Fe,dt,At,Ee,he,fe,gt,Mt.data):N.texSubImage3D(De,me,Fe,dt,At,Ee,he,fe,gt,zt,Mt):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Fe,dt,Ee,he,gt,zt,Mt.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Fe,dt,Mt.width,Mt.height,gt,Mt.data):N.texSubImage2D(N.TEXTURE_2D,me,Fe,dt,Ee,he,gt,zt,Mt);v.pixelStorei(N.UNPACK_ROW_LENGTH,qt),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),v.pixelStorei(N.UNPACK_SKIP_ROWS,yn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Kn),me===0&&P.generateMipmaps&&N.generateMipmap(De),v.unbindTexture()},this.initRenderTarget=function(x){Z.get(x).__webglFramebuffer===void 0&&Q.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Q.setTextureCube(x,0):x.isData3DTexture?Q.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Q.setTexture2DArray(x,0):Q.setTexture2D(x,0),v.unbindTexture()},this.resetState=function(){K=0,O=0,Y=null,v.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Ws=new F;function an(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ws.copy(e),Ws[i]=0,Ws.normalize();const l=.5*a/(a+o),u=1-Ws.angleTo(n)/c;return Math.sign(Ws[t])===1?u*l:o/(a+o)+l+l*(1-u)}class Ql extends Nn{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new F,l=new F,u=new F(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,_=f.length/6,M=new F,m=.5/a;for(let p=0,y=0;p<f.length;p+=3,y+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*r,f[p+1]=u.y*Math.sign(c.y)+l.y*r,f[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/_)){case 0:M.set(1,0,0),d[y+0]=an(M,l,"z","y",r,i),d[y+1]=1-an(M,l,"y","z",r,t);break;case 1:M.set(-1,0,0),d[y+0]=1-an(M,l,"z","y",r,i),d[y+1]=1-an(M,l,"y","z",r,t);break;case 2:M.set(0,1,0),d[y+0]=1-an(M,l,"x","z",r,e),d[y+1]=an(M,l,"z","x",r,i);break;case 3:M.set(0,-1,0),d[y+0]=1-an(M,l,"x","z",r,e),d[y+1]=1-an(M,l,"z","x",r,i);break;case 4:M.set(0,0,1),d[y+0]=1-an(M,l,"x","y",r,e),d[y+1]=1-an(M,l,"y","x",r,t);break;case 5:M.set(0,0,-1),d[y+0]=an(M,l,"x","y",r,e),d[y+1]=1-an(M,l,"y","x",r,t);break}}static fromJSON(e){return new Ql(e.width,e.height,e.depth,e.segments,e.radius)}}class dx extends rh{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Nn;e.deleteAttribute("uv");const t=new Ut({side:Zt}),i=new Ut,s=new cp(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new St(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new _f(e,i,6),o=new Rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new St(e,rs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new St(e,rs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new St(e,rs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const f=new St(e,rs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const h=new St(e,rs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const d=new St(e,rs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function rs(n){return new sp({color:0,emissive:16777215,emissiveIntensity:n})}const Aa=.75,fx=Object.freeze([0,0]),yt=Object.freeze({width:.48,depth:.36,thickness:.013,corner:.004}),ms=yt.width/2,bs=.001,gs=yt.width/2-bs,_s=yt.depth/2-bs,di=yt.corner-bs,pn=Object.freeze({centerX:.045,centerY:.0155,centerZ:.02,radiusX:.185,radiusZ:.135,height:.0365,compressedHeight:.009,inset:bs});function Ph(n,e=1,t=0){const i=Math.max(0,Math.min(1,e));return(pn.height*(1-i)+pn.compressedHeight*i)*((1-i)*Math.pow(1-n*n,1.15)+i*(1-.08*Math.pow(n,20)))*(1+t*.35)+t*.005*Math.sin(n*Math.PI*3)*(1-n)}function Ca(n=1,e=0){const t=Math.max(0,Math.min(1,n));return Object.freeze({center:[(pn.centerX+e)*(1-t),pn.centerY,pn.centerZ*(1-t)],radius:[pn.radiusX*(1-t)+gs*t,pn.radiusZ*(1-t)+_s*t],compression:t})}const xs=Array.from({length:56},(n,e)=>e/56*Math.PI*2);for(const n of[-1,1])for(const e of[-1,1])for(const[t,i]of[[gs,_s-di],[gs-di,_s],[gs-di,_s-di]])xs.push((Math.atan2(e*i,n*t)+Math.PI*2)%(Math.PI*2));xs.sort((n,e)=>n-e);xs.push(Math.PI*2);function Eu(n){const e=Math.abs(Math.cos(n)),t=Math.abs(Math.sin(n));let i=Math.min(gs/e,_s/t);const s=gs-di,r=_s-di;if(i*e>s&&i*t>r){const a=e*s+t*r;i=a+Math.sqrt(Math.max(0,a*a-s*s-r*r+di*di))}return i}function Lh(n,e,t=0,i=0){const s=Math.sin(e*Math.PI*2),r=(n-.5)*.38+s*(.003*Math.sin(e*23)+.003)*Math.abs(n-.5)*2,a=(e-.5)*.245*(.92+.06*Math.sin(n*10)+.02*Math.cos(n*29)),o=(n-.5)*2,c=(e-.5)*2,u=-i*(o*o+c*c)/2-t*Math.pow(n,1.2)+t*.14*Math.sin(e*16+n*3)*Math.sin(n*Math.PI);return[r*Aa,u,a*Aa]}function px(n=0,e=0){return Lh(...fx,n,e)}function ln(n,e,t,i=[0,0,0]){const s=new St(n,e);return s.position.set(...i),t.add(s),s}function mx(n){const e={};for(const t of["outer","inner"]){const i=t==="inner",s=document.createElement("canvas");s.width=768,s.height=512;const r=s.getContext("2d");let a=64175;const o=()=>(a=Math.imul(a,1664525)+1013904223>>>0)/4294967296;r.fillStyle=i?"#dfd5bc":"#aa829d",r.fillRect(0,0,768,512);const c=38,l=19,u=512/c,f=768/l,h=Array.from({length:c+2},(_,M)=>Array.from({length:l+3},(m,p)=>[(p-1+M%2*.38+(o()-.5)*.28)*f,(M+(o()-.5)*.26)*u]));for(let _=0;_<=c;_++)for(let M=0;M<=l+1;M++){const m=[h[_][M],h[_][M+1],h[_+1][M+1],h[_+1][M]];r.beginPath(),m.forEach(([p,y],b)=>b?r.lineTo(p,y):r.moveTo(p,y)),r.closePath(),r.fillStyle=i?`rgba(209,205,166,${.025+o()*.045})`:`rgba(103,33,79,${.035+o()*.13})`,r.fill(),r.strokeStyle=i?"rgba(243,243,215,.14)":"rgba(221,169,193,.15)",r.lineWidth=.65,r.stroke()}for(let _=0;_<19;_++){r.beginPath();const M=o()*512;r.moveTo(0,M),r.bezierCurveTo(200,M-13,510,M+11,768,M-5),r.strokeStyle=i?"rgba(255,255,235,.045)":"rgba(244,202,219,.055)",r.lineWidth=1+o(),r.stroke()}r.globalCompositeOperation="destination-out";for(let _=0;_<30;_++){const M=o()*768,m=_%2?0:512;r.beginPath(),r.ellipse(M,m,2+o()*6,1+o()*4,0,0,Math.PI*2),r.fill()}const d=new Yl(s);d.colorSpace=Gt,e[t]=d,n(d)}return e}function gx(n,e){const t=new Ni(1,1,28,18),i=new Ut({map:e.outer,transparent:!0,opacity:.92,color:"#ffffff",roughness:.38,metalness:0,side:Ft,depthWrite:!1}),s=ln(t,i,n);s.renderOrder=2;const r=t.attributes.position,a=t.attributes.uv;let o=NaN;function c(l,u,f=0){i.map=e[u],i.opacity=u==="inner"?.85:.96;const h=`${l}:${f}`;if(h!==o){o=h;for(let d=0;d<r.count;d++)r.setXYZ(d,...Lh(a.getX(d),a.getY(d),l,f));r.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingSphere()}}return c(0,"outer"),{root:s,update:c,material:i}}function _x(n){const e=new Kt;e.position.set(...Ca().center),n.add(e);const t=xs.length-1,i=13,s=[],r=[];for(let M=0;M<=i;M++)for(let m=0;m<=t;m++)s.push(0,0,0);for(let M=0;M<i;M++)for(let m=0;m<t;m++){const p=M*(t+1)+m,y=p+t+1;r.push(p,p+1,y,p+1,y+1,y)}const a=new _t;a.setAttribute("position",new lt(s,3)),a.setIndex(r);const o=new Hn({color:"#edf7f5",roughness:.065,metalness:0,transmission:.8,thickness:.025,ior:1.333,transparent:!0,opacity:.26,envMapIntensity:.4,depthWrite:!1});ln(a,o,e).renderOrder=1;const c=new _t;c.setAttribute("position",new lt(new Float32Array((t+1)*3),3));const l=new Ii(c,new Dn({color:"#d4ebe6",transparent:!0,opacity:.36,depthWrite:!1}));e.add(l);const u=new _t;u.setAttribute("position",new lt(new Float32Array(45),3));const f=new Ii(u,new Dn({color:"#f3ffff",transparent:!0,opacity:.62,depthWrite:!1}));e.add(f);let h="";function d(M=1,m=1,p=0,y=!1,b=null,g=0){const T=Ca(m,g);e.position.set(...T.center),e.scale.setScalar(M),o.color.set(y?"#4ca7ad":"#edf7f5"),o.transmission=y?.56:.8,o.opacity=y?.43:.26;const E=JSON.stringify([M,m,p,b,g]);if(E===h)return;h=E;const C=pn.radiusX,S=pn.radiusZ,w=(pn.height*(1-m)+pn.compressedHeight*m)*(1+p*.35),R=b?.strength||0,L=b?.position,z=L?(L[0]-e.position.x)/M:0,G=L?(L[2]-e.position.z)/M:0,I=Math.atan2(G,z),B=L?(L[1]-e.position.y)/M:0,K=ne=>Math.atan2(Math.sin(ne-I),Math.cos(ne-I)),O=C*(1-m)+(Eu(0)+bs*R)*m,Y=Math.max(0,Math.min(1,z/O)),k=i-1,U=a.attributes.position,V=c.attributes.position;for(let ne=0;ne<=i;ne++)for(let ue=0;ue<=t;ue++){const Ie=xs[ue],Le=Math.cos(Ie),Ze=Math.sin(Ie),J=R*Math.exp(-.5*(K(Ie)/.16)**2),ie=ne===k?ne/i*(1-J)+Y*J:ne/i,xe=1+(1-m)*(.018*Math.sin(Ie*3)+.01*Math.sin(Ie*7)),Be=R*Math.exp(-.5*(K(Ie)/.18)**2),we=Eu(Ie)+bs*Be,We=Le*ie*(C*xe*(1-m)+we*m),rt=Ze*ie*(S*xe*(1-m)+we*m);let se=Ph(ie,m,p);if(R>0){const re=C*xe*(1-m)+we*m,de=S*xe*(1-m)+we*m,ge=Math.max(0,Math.min(1,Math.hypot(z/re,G/de))),Se=K(Ie),He=Math.exp(-.5*((ie-ge)/.025)**2),Ve=Math.exp(-.5*(Se/.16)**2)*He*R;if(se+=(B-se)*Ve,b?.cover&&Math.abs(Se)<.28){const{pivotX:Ne,pivotY:Ge,pivotZ:N,angle:Ke,width:Ye,depth:A,thickness:v}=b.cover,q=We*M+e.position.x,Z=rt*M+e.position.z,Q=Ke,pe=(q-Ne-Math.sin(Q)*v/2)/Math.cos(Q),Me=Z-N;if(pe>=-Ye&&pe<-1e-5&&Math.abs(Me)<=A/2){const oe=(Ge+pe*Math.sin(Q)-v/2*Math.cos(Q)-e.position.y)/M-2e-4;se=Math.min(se,oe)}}}U.setXYZ(ne*(t+1)+ue,We,se,rt),ne===i&&V.setXYZ(ue,We,se+6e-4,rt)}for(let ne=0;ne<15;ne++){const ue=.25+ne/14*.9,Ie=.82;u.attributes.position.setXYZ(ne,Math.cos(ue)*C*Ie,w*.31+.001,Math.sin(ue)*S*Ie)}U.needsUpdate=!0,V.needsUpdate=!0,u.attributes.position.needsUpdate=!0,a.computeVertexNormals(),a.computeBoundingSphere(),c.computeBoundingSphere(),u.computeBoundingSphere(),f.material.opacity=.6*(1-m),l.material.opacity=.36-.16*m}d();const _=(i-1)*(t+1)+xs.findIndex(M=>Math.abs(M)<1e-8);return{group:e,update:d,contactVertexIndex:_}}function xx(n){const e=new Kt;n.add(e);const t=new Hn({color:"#edf7f4",roughness:.07,metalness:0,transmission:.88,thickness:.009,ior:1.47,transparent:!0,opacity:.92,depthWrite:!1}),i=[[.009,0],[.012,.055],[.021,.19],[.034,.31],[.038,.83],[.043,.88]],s=ln(new fr(i.map(([d,_])=>new ve(d,_)),32),t,e);s.castShadow=!1;const r=ln(new Sr(.009,.0024,6,24),t,e,[0,.001,0]);r.rotation.x=Math.PI/2;const a=ln(new pi(.029,.015,.56,24),new Hn({color:"#d4e8e1",transmission:.82,roughness:.08,ior:1.333,thickness:.03,transparent:!0,opacity:.7,depthWrite:!1}),e,[0,.45,0]),o=ln(new Na(.029,24),new hi({color:"#c1ddd4",transparent:!0,opacity:.28,side:Ft}),e,[0,.731,0]);o.rotation.x=-Math.PI/2;const c=new _t().setFromPoints([new F(.012,.07,.008),new F(.026,.29,.019),new F(.031,.82,.025)]);e.add(new Ii(c,new Dn({color:"#eef8f5",transparent:!0,opacity:.52})));const l=new Ut({color:"#242c2d",roughness:.8,metalness:.02});ln(new pi(.064,.057,.065,28),l,e,[0,.878,0]);const u=new Kt;u.position.y=.91,e.add(u);const f=[[.059,0],[.066,.025],[.077,.07],[.083,.18],[.077,.27],[.058,.325],[.028,.35],[0,.36]];ln(new fr(f.map(([d,_])=>new ve(d,_)),28),l,u).castShadow=!0;function h(d=0){u.scale.set(1+d*.08,1-d*.17,1-d*.13),a.scale.y=1-d*.055,o.position.y=.731-d*.03}return{root:e,update:h}}function vx(n){const e=new Kt;n.add(e);const t=new Ut({color:"#aebbbc",roughness:.31,metalness:.84}),i=[];for(const a of[-1,1]){const o=new Kt;o.position.y=1.08,e.add(o);const c=new wa,l=(h,d)=>[a*h,d-1.08];c.moveTo(...l(.0035,0)),c.lineTo(...l(.009,.12)),c.bezierCurveTo(...l(.015,.25),...l(.068,.48),...l(.057,.76)),c.quadraticCurveTo(...l(.047,.99),...l(.014,1.08)),c.lineTo(...l(.036,1.08)),c.quadraticCurveTo(...l(.091,.94),...l(.092,.72)),c.bezierCurveTo(...l(.094,.46),...l(.028,.21),...l(.021,.1)),c.lineTo(...l(.0135,0)),c.closePath();const u=ln(new dr(c,{depth:.023,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:1,curveSegments:14}),t,o,[0,0,-.0115]);u.castShadow=!0;const f=[];for(let h=0;h<12;h++){const d=.43+h*.024,_=.066+.01*Math.sin(h/11*Math.PI);f.push(new F(a*(_-.012),d-1.08,.014),new F(a*(_+.012),d-1.08,.014))}o.add(new _l(new _t().setFromPoints(f),new Dn({color:"#687b7d",transparent:!0,opacity:.65}))),i.push({arm:o,side:a})}const s=ln(new Sr(.025,.013,8,20,Math.PI),t,e,[0,1.08,0]);s.castShadow=!0;function r(a=0){for(const{arm:o,side:c}of i)o.rotation.z=c*a*.065}return{root:e,update:r}}function Mx(n){const e=new Kt;n.add(e);const t=new Hn({color:"#edf8f6",roughness:.025,metalness:0,transmission:.92,ior:1.333,thickness:.08,transparent:!0,opacity:.94,depthWrite:!1});ln(new pr(.052,28,20),t,e);const i=ln(new pi(.008,.022,1,16),t,n);i.visible=!1;function s(r,a){if(e.visible=r.visible,e.position.set(...r.position),e.scale.set(...r.scale),i.visible=r.visible&&r.attached,i.visible){const o=r.position[1]+.026*r.scale[1],c=Math.max(.001,a[1]-o);i.position.set(a[0],o+c/2,a[2]),i.scale.set(r.scale[0],c,r.scale[2])}}return{update:s}}const on=Object.freeze({position:Object.freeze([1.25,0,2.22]),peelOffset:Object.freeze([0,.14,0]),surfaceCurve:.012}),Tu=.143,wu=.092,Au=.147,Cu=.092,wo=.022,Sx=.72,yx=.205;function Ih(n,e){const t=Math.abs(n)-(Au-wo),i=Math.abs(e)-(Cu-wo);return Math.abs(n)<=Au&&Math.abs(e)<=Cu&&Math.hypot(Math.max(0,t),Math.max(0,i))<=wo}function bx(n,e){const t=Math.max(0,Math.abs(n)-Tu)/.06,i=Math.max(0,Math.abs(e)-wu)/.27;return .14-.006*((n/Tu)**2+(e/wu)**2)-.026*t*t-.03*i*i+.006*Math.sin(e*5)*i*i}function mr(n,e,t=0){const i=(n-.5)*Sx,s=.016*Math.sin((n-.5)*Math.PI*2),r=yx*Math.pow(Math.max(0,Math.sin(Math.PI*n)),.72),a=s+e*r;return[a,bx(a,i)+t,i]}function Ao({cutPatch:n=!1,yOffset:e=0,reverse:t=!1}={}){const r=[],a=[];for(let l=0;l<=72;l++)for(let u=0;u<=36;u++)r.push(...mr(l/72,u/36*2-1,e));const o=37;for(let l=0;l<72;l++)for(let u=0;u<36;u++){const f=(l+.5)/72,h=(u+.5)/36*2-1,[d,,_]=mr(f,h);if(n&&Ih(d,_))continue;const M=l*o+u,m=M+1,p=M+o,y=p+1;t?a.push(M,m,p,m,y,p):a.push(M,p,m,m,p,y)}const c=new _t;return c.setAttribute("position",new lt(r,3)),c.setIndex(a),c.computeVertexNormals(),c.computeBoundingSphere(),c}function Ex(n){const e=new Dn({color:"#d3b4ca",transparent:!0,opacity:.43});for(const i of[-.78,-.54,-.3,0,.3,.54,.78]){let s=[];const r=()=>{s.length>1&&n.add(new Ii(new _t().setFromPoints(s),e)),s=[]};for(let a=0;a<=90;a++){const o=mr(a/90,i,.0015);Ih(o[0],o[2])?r():s.push(new F(...o))}r()}const t=new Dn({color:"#79586e",transparent:!0,opacity:.7});for(const i of[-1,1]){const s=Array.from({length:73},(r,a)=>new F(...mr(a/72,i,-.001)));n.add(new Ii(new _t().setFromPoints(s),t))}}function Tx(n){const e=[],t=[];for(const o of[-1,1]){const c=e.length/3;for(let l=0;l<=72;l++){const u=mr(l/72,o);if(e.push(u[0],u[1]-.011,u[2],u[0],u[1]-.055,u[2]),l<72){const f=c+l*2,h=f+1,d=f+2,_=f+3;t.push(f,d,h,h,d,_)}}}const s=new _t;s.setAttribute("position",new lt(e,3)),s.setIndex(t),s.computeVertexNormals(),s.computeBoundingSphere();const r=new Ut({color:"#b79678",roughness:.68,metalness:0,side:Ft}),a=new St(s,r);a.castShadow=!0,n.add(a)}function wx(n){const e=new Kt;e.position.set(...on.position),n.add(e);const t=new Ut({color:"#d9c394",roughness:.72,metalness:0,side:Ft}),i=new St(Ao({yOffset:-.011}),t);i.receiveShadow=!0,e.add(i);const s=new St(Ao({yOffset:-.055,reverse:!0}),new Ut({color:"#c7ad7c",roughness:.77,metalness:0,side:Ft}));s.receiveShadow=!0,e.add(s);const r=new Ut({color:"#aa829d",roughness:.49,metalness:0,side:Ft}),a=new St(Ao({cutPatch:!0}),r);return a.castShadow=!0,a.receiveShadow=!0,e.add(a),Tx(e),Ex(e),{root:e,skin:a,fleshTop:i,peelOffset:on.peelOffset,surfaceCurve:on.surfaceCurve}}const tr=6,gr=4.32,Ax=Object.freeze([{name:"exiting",start:0,end:.7},{name:"positioning",start:.7,end:1.6},{name:"dropping",start:1.6,end:2.8},{name:"wicking",start:2.8,end:gr},{name:"retreating",start:gr,end:5.2},{name:"entering",start:5.2,end:tr}]),ua=n=>Math.max(0,Math.min(1,n)),Cx=n=>{const e=ua(n);return e*e*e*(e*(e*6-15)+10)},jt=(n,e,t)=>Cx((n-e)/(t-e)),fn=(n,e,t)=>n+(e-n)*t,Ru=(n,e,t)=>n.map((i,s)=>fn(i,e[s],t)),Co=(n,e)=>{const t=Math.cos(-.09),i=Math.sin(-.09);return[n[0]+t*e[0]+i*e[2],n[1]+e[1],n[2]-i*e[0]+t*e[2]]};function jl(n=0,e={},t=1.3){const i=typeof n=="number"?{elapsed:n}:n||{},s=Math.max(.001,Number(i.duration)||tr),r=Math.max(0,Number(i.elapsed)||0),a=Math.min(tr,r/s*tr),o=Ax.find(I=>a<I.end),c=jt(a,0,.7),l=jt(a,5.2,6),u=jt(a,.7,1.6),f=jt(a,4.32,5.2),d=[-1.18,2.153+Math.max(-1,Math.min(1,Number(e.focus)||0))*.055,.505],_=[.247,.024,.105],M=Co(d,_),m=Co(d,[_[0],.3,_[2]]),p=[2.65,.09,1.1],y=f>0?f:u,b=f>0?Ru(m,p,f):Ru(p,m,u);b[1]+=Math.sin(y*Math.PI)*.65;const g=u*(1-f),T={visible:a>=1.6&&a<2.8,attached:a<2.15,position:[...m],scale:[.1,.1,.1]},E=jt(a,1.6,2.15),C=ua((a-2.15)/.3),S=jt(a,2.45,2.8);a<2.15?(T.position[1]-=fn(.008,.045,E),T.scale=[fn(.1,.64,E),fn(.12,.83,E),fn(.1,.64,E)]):(T.position[1]=fn(m[1]-.045,M[1]+.052*.83,C*C),T.scale=[fn(.64,.52,S),fn(.83,.055,S),fn(.64,1.12,S)],S>0&&(T.position[1]=M[1]+.052*T.scale[1]));const w=jt(a,2.25,2.8),R=jt(a,4.32,4.95),L=1-w+R,z=[-.24,.0225,.105],G=Co(d,[-.24-L*.8,.0225+L*.27,.105]);return{elapsed:r,duration:s,progress:ua(r/s),stage:o?.name||"complete",stageProgress:o?ua((a-o.start)/(o.end-o.start)):1,exitProgress:c,entryProgress:l,eyeVisibility:1-c+l,commitReady:a>=gr,replacementProgress:jt(a,2.45,gr),camera:t<.9?{position:[-.9,4.35,2.7],target:[-1.22,2.25,.54],zoom:Math.max(.45,t*1.28)}:{position:[-.3,3.43,2.88],target:[-1.1,2.36,.51],zoom:Math.min(1.5,Math.max(.45,t*1.1))},pipette:{active:a>=.7&&a<5.2,position:b,rotation:[0,fn(-.2,-.09,g),fn(Math.PI/2,-.62,g)],squeeze:jt(a,1.6,2.12)*(1-jt(a,2.35,2.8))},drop:T,contact:M,contactLocal:_,paper:{visible:a>=2.25&&a<4.95,position:G,rotation:[0,-.09,L*-.16],wetness:jt(a,2.8,4.32),contactLocal:z},flow:{visible:a>=2.45&&a<4.32,progress:jt(a,2.45,4.32)},solution:i.solution||e.selectedSolution||"water"}}const Dh=n=>Math.max(0,Math.min(1,n)),Nh=n=>{const e=Dh(n);return e*e*e*(e*(e*6-15)+10)},$e=(n,e,t)=>Nh((n-e)/(t-e)),vt=(n,e,t)=>t<=0?n:t>=1?e:n+(e-n)*t,en=(n,e,t)=>n.map((i,s)=>vt(i,e[s],t)),Ro=n=>n==="inner"?"inner":"outer";function Xs(n,e,t,i=0){const s=n.rotation[1],r=Math.cos(s),a=Math.sin(s);return[n.position[0]+r*e+a*i,n.position[1]+t,n.position[2]-a*e+r*i]}function as(n){return new F(...px(n.specimenCurl,n.peelSurfaceCurve)).applyEuler(new vn(...n.peelRotation)).add(new F(...n.peelPosition)).toArray()}function si(n){return new F(-yt.width,0,0).applyAxisAngle(new F(0,0,1),n.coverAngle).add(new F(n.coverX+ms,n.coverY,n.coverZ)).applyEuler(new vn(...n.rotation)).add(new F(...n.position)).toArray()}function ri(n,e,t){return{position:en(n.position,e.position,t),target:en(n.target,e.target,t),zoom:vt(n.zoom,e.zoom,t)}}function wl(n,e={},t=1.3){const i=n?.phase||"focusing",s=Math.max(0,Number(n?.elapsed)||0),r=Math.max(.001,Number(n?.duration)||(i==="preparing"?15:i==="swapping"?3:1.1)),a=Ro(e.tissue),o=Ro(n?.fromTissue||a),c=Ro(n?.toTissue||a),u=[-1.18,2.153+Math.max(-1,Math.min(1,Number(e.focus)||0))*.055,.505],f=[.35,.065,1.7],h=[on.position[0]+on.peelOffset[0],on.position[1]+on.peelOffset[1],on.position[2]+on.peelOffset[2]],d={position:[7.3,6.8,11.3],target:[.43,1.6,.05],zoom:Math.min(1.31,Math.max(.48,t*1.01))},_={position:[1.95,2.83,4.45],target:[.58,.62,1.92],zoom:Math.min(1.02,Math.max(.5,t*.86))},M={position:[1.75,4.55,5.2],target:[-1.18,2.2,.54],zoom:Math.min(1.12,Math.max(.58,t*.95))},m={position:[-.825,5.177,.811],target:[-.895,4.574,.497],zoom:Math.min(1,Math.max(.6,t))},p=b=>({visible:!0,tissue:b,position:[...u],rotation:[0,-.09,0],specimenVisible:!0,specimenX:0,specimenY:.022,specimenTilt:0,specimenScale:1,specimenCurl:0,peelVisible:!0,peelPosition:Xs({position:u,rotation:[0,-.09,0]},.045,.022,.02),peelRotation:[0,-.09,0],peelSurfaceCurve:0,coverVisible:!0,coverX:0,coverZ:0,coverY:.033,coverAngle:0,fluidVisible:!0,fluidScale:1,fluidCompression:1,fluidImpact:0,fluidOffsetX:0,fluidContact:null}),y={phase:i,elapsed:s,camera:d,primary:p(a),secondary:p(c),clampOpen:0,turretOffset:0,interactive:i==="focusing",pipette:{active:!1,position:[2.65,.09,1.1],rotation:[0,-.2,Math.PI/2],squeeze:0},tweezers:{visible:!1,position:[.35,1.5,1.7],rotation:[0,.1,-.24],opening:0,gripping:null},onionScale:{visible:!1,position:[...on.position],rotation:[0,0,0],tissue:c,peelAmount:0},drop:{visible:!1,attached:!1,position:[.43,.5,1.7],scale:[1,1,1]},ripple:{visible:!1,position:[.43,.108,1.7],scale:1,opacity:0},exchange:null};if(y.secondary.visible=!1,i==="welcome")y.primary.visible=!1,y.primary.peelVisible=!1,y.primary.coverVisible=!1,y.clampOpen=.42;else if(i==="preparing"){const b=Math.min(15,s),g=y.primary;g.tissue=c,g.position=en([2.7,.12,1.7],f,$e(b,.1,1.8)),g.rotation=[0,vt(.14,-.09,$e(b,.1,1.8)),0],g.specimenVisible=b>=3.2,g.peelVisible=!0,g.peelPosition=[...h],g.peelRotation=[0,0,0],g.peelSurfaceCurve=on.surfaceCurve,g.coverVisible=!0,g.coverX=b>=9.98?0:.2,g.coverZ=b>=9.98?0:.58,g.coverY=.033,g.coverAngle=0,g.fluidVisible=b>=3.05,g.fluidScale=b<3.25?vt(.18,.68,$e(b,3.05,3.25)):vt(.68,1,$e(b,3.25,3.85)),g.fluidCompression=$e(b,8.45,9.5),g.fluidImpact=Math.sin($e(b,3.05,3.6)*Math.PI)*(1-$e(b,3.05,3.6)),y.clampOpen=1-$e(b,12.45,13),y.turretOffset=Math.PI*2/3*(1-$e(b,13,14.6)),y.camera=ri(d,_,$e(b,0,2)),y.onionScale.visible=!0,y.onionScale.tissue=c,y.onionScale.peelAmount=$e(b,4,5.4);const T=Xs(g,.045,.0155,.02);if(b>=1.8&&b<4.15){const O=$e(b,1.8,2.4),Y=$e(b,3.2,4.15);y.pipette.active=!0;const k=[2.65,.09,1.1],U=[T[0],.66,T[2]];y.pipette.position=Y>0?en(U,k,Y):en(k,U,O),y.pipette.position[1]+=Math.sin((Y>0?Y:O)*Math.PI)*.42;const V=O*(1-Y);y.pipette.rotation=[0,vt(-.2,0,V),vt(Math.PI/2,0,V)],y.pipette.squeeze=$e(b,2.4,2.76)*(1-$e(b,2.88,3.28))}if(b>=2.4&&b<3.18){y.drop.visible=!0;const O=$e(b,2.4,2.8),Y=Dh((b-2.8)/.25),k=$e(b,3.05,3.18);y.drop.attached=b<2.8,y.drop.position=[T[0],b<2.8?.66-vt(.01,.06,O):vt(.6,T[1]+.052*1.1,Y*Y),T[2]],y.drop.scale=b<2.8?[vt(.12,.9,O),vt(.2,1.1,O),vt(.12,.9,O)]:[vt(.9,1.8,k),vt(1.1,.12,k),vt(.9,1.4,k)],k>0&&(y.drop.position[1]=T[1]+.052*y.drop.scale[1])}if(b>=3.05&&b<3.85){const O=$e(b,3.05,3.85);y.ripple.visible=!0,y.ripple.position=[T[0],T[1]+.002,T[2]],y.ripple.scale=vt(.25,.95,O),y.ripple.opacity=Math.sin(O*Math.PI)*.22}const E=Xs(g,.045,.022,.02);if(b<3.6)g.peelPosition=[...h];else if(b<4){g.peelPosition=[...h];const O=as(g);y.tweezers.visible=!0,y.tweezers.position=en([Math.max(3.2,t*1.6),1.15,2.3],O,$e(b,3.45,3.95)),y.tweezers.opening=1-$e(b,3.78,3.98)}else if(b<4.55){const O=.105*$e(b,4,4.55);g.peelPosition=[h[0],h[1]+O,h[2]],g.specimenCurl=O;const Y=as(g);y.tweezers.visible=!0,y.tweezers.position=Y,y.tweezers.opening=0,y.tweezers.gripping="peel"}else if(b<5.55){const O=$e(b,4.55,5.55),Y=.105;g.peelPosition=en([h[0],h[1]+Y,h[2]],[E[0],E[1]+Y,E[2]],O),g.peelRotation=[0,vt(0,g.rotation[1],O),0],g.peelSurfaceCurve=vt(on.surfaceCurve,0,O),g.specimenCurl=Y,y.tweezers.visible=!0,y.tweezers.position=as(g),y.tweezers.opening=0,y.tweezers.gripping="peel"}else if(b<6.05){const O=$e(b,5.55,6.05),Y=.105*(1-O);g.peelPosition=[E[0],E[1]+Y,E[2]],g.peelRotation=[0,g.rotation[1],0],g.peelSurfaceCurve=0,g.specimenCurl=Y,y.tweezers.visible=!0,y.tweezers.position=as(g),y.tweezers.opening=0,y.tweezers.gripping="peel"}else b<6.45?(g.peelPosition=[...E],g.peelRotation=[0,g.rotation[1],0],g.peelSurfaceCurve=0,g.specimenCurl=0,y.tweezers.visible=!0,y.tweezers.position=as(g),y.tweezers.opening=$e(b,6.18,6.42),y.tweezers.gripping=b<6.3?"peel":null):b<6.8&&(g.peelPosition=[...E],g.peelRotation=[0,g.rotation[1],0],g.peelSurfaceCurve=0,g.specimenCurl=0,y.tweezers.visible=!0,y.tweezers.position=en(as(g),[Math.max(3.2,t*1.6),1.15,2.3],$e(b,6.45,6.8)),y.tweezers.opening=1);if(b>=6.8&&(g.peelPosition=[...E],g.peelRotation=[0,g.rotation[1],0],g.peelSurfaceCurve=0,g.specimenCurl=0),b>=6.8&&b<7.05&&(y.tweezers.position=[Math.max(3.2,t*1.6),1.15,2.3],y.tweezers.opening=1),g.specimenVisible=b>=5.55,b>=7.05&&b<9.98){const O={x:.2,z:.58},Y={x:0,z:0};if(y.tweezers.visible=!0,b<7.4){const k=si(g);y.tweezers.position=en([Math.max(3.2,t*1.6),1.25,2.75],k,$e(b,7.05,7.4)),y.tweezers.opening=1}else if(b<7.58)g.coverX=O.x,g.coverZ=O.z,g.coverY=.033,g.coverAngle=0,y.tweezers.position=si(g),y.tweezers.opening=1-$e(b,7.4,7.58);else if(b<7.82){const k=$e(b,7.58,7.82);g.coverX=O.x,g.coverZ=O.z,g.coverY=vt(.033,.24,k),g.coverAngle=vt(0,-1.1,k),y.tweezers.position=si(g),y.tweezers.opening=0,y.tweezers.gripping="cover"}else if(b<8.08){const k=$e(b,7.82,8.08);g.coverX=vt(O.x,Y.x,k),g.coverZ=vt(O.z,Y.z,k),g.coverY=.24,g.coverAngle=-1.1,y.tweezers.position=si(g),y.tweezers.opening=0,y.tweezers.gripping="cover"}else if(b<8.45){const k=$e(b,8.08,8.45);g.coverX=Y.x,g.coverZ=Y.z,g.coverY=vt(.24,.033,k),g.coverAngle=-1.1,y.tweezers.position=si(g),y.tweezers.opening=0,y.tweezers.gripping="cover"}else b<9.5?(g.coverX=Y.x,g.coverZ=Y.z,g.coverY=.033,g.coverAngle=vt(-1.1,0,$e(b,8.45,9.5)),y.tweezers.position=si(g),y.tweezers.opening=0,y.tweezers.gripping="cover"):b<9.65?(g.coverX=Y.x,g.coverZ=Y.z,g.coverY=.033,g.coverAngle=0,y.tweezers.position=si(g),y.tweezers.opening=$e(b,9.5,9.65),y.tweezers.gripping=b<9.58?"cover":null):(g.coverX=Y.x,g.coverZ=Y.z,g.coverY=.033,g.coverAngle=0,y.tweezers.position=en(si(g),[Math.max(3.2,t*1.6),1.25,2.75],$e(b,9.65,9.98)),y.tweezers.opening=1)}const C=$e(b,8.08,8.45);g.fluidOffsetX=.005*C;const S=Ca(g.fluidCompression,g.fluidOffsetX),w=g.coverX+ms+Math.sin(g.coverAngle)*yt.thickness/2,R=g.coverY-Math.cos(g.coverAngle)*yt.thickness/2,L=Math.max(0,Math.min(1,Math.abs(w-S.center[0])/S.radius[0])),z=S.center[1]+Ph(L,g.fluidCompression,g.fluidImpact),G=R-z,I=Math.abs(w-S.center[0])<=S.radius[0]*g.fluidScale+.012,B=Math.abs(S.center[2]-g.coverZ)<=yt.depth/2,K=g.fluidVisible&&I&&B?Math.max(0,Math.min(1,(.028-G)/(.028-.0145)))*(1-$e(b,9.5,9.8)):0;if(K>0?g.fluidContact={strength:Nh(K),position:[w,R,S.center[2]]}:g.fluidContact=null,b>=10){const O=[.35,2.34,1.7],Y=[-1.18,2.34,.66];g.position=b<11.25?en(f,O,$e(b,10,11.25)):b<12.35?en(O,Y,$e(b,11.25,12.35)):en(Y,u,$e(b,12.35,12.85)),g.peelPosition=Xs(g,.045,.022,.02),y.camera=ri(_,M,$e(b,10,12.6))}b>=9.98&&b<10&&(g.coverX=0,g.coverZ=0,g.coverY=.033,g.coverAngle=0),b>=9.98&&(y.tweezers.position=[Math.max(3.2,t*1.6),1.25,2.75]),b>=13&&(y.camera=ri(M,d,$e(b,13,15)))}else if(i==="entering")y.camera=ri(d,m,$e(s,0,r));else if(i==="observing")y.camera=m;else if(i==="exchanging"){const b=jl(n,e,t);y.exchange=b,y.camera=b.entryProgress>0?ri(b.camera,m,b.entryProgress):ri(m,b.camera,b.exitProgress),y.pipette=b.pipette,y.drop=b.drop}else if(i==="swapping"){const b=Math.min(3,s);y.primary.tissue=o,y.secondary.tissue=c,y.camera=b<.4?ri(m,M,$e(b,0,.4)):b<2?M:ri(M,m,$e(b,2,3)),y.clampOpen=$e(b,.4,.65)*(1-$e(b,1.82,2)),y.primary.visible=b<1.2;const g=$e(b,.48,.7);y.primary.position=[vt(u[0],-3.5,$e(b,.68,1.2)),u[1]+g*.075,u[2]],y.secondary.visible=b>=1.2,y.secondary.position=[vt(1.1,u[0],$e(b,1.2,1.82)),u[1]+.075*(1-$e(b,1.82,2)),u[2]]}if(i!=="preparing"){y.onionScale.visible=i!=="welcome";for(const b of[y.primary,y.secondary])b.peelPosition=Xs(b,.045,.022,.02),b.peelRotation=[...b.rotation],b.peelSurfaceCurve=0,b.specimenCurl=0,b.peelVisible=b.visible&&b.specimenVisible}return y}const Pu=new Qe("#edf7f5"),Rx=new Qe("#4ca7ad");function Px(n){const e=n.children.find(i=>i.isMesh).material,t={exchangeEnabled:{value:0},exchangeProgress:{value:0},exchangeColor:{value:Pu.clone()},exchangeOpacity:{value:.26}};return e.onBeforeCompile=i=>{Object.assign(i.uniforms,t),i.vertexShader=`varying float vExchangeX;
${i.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
vExchangeX = position.x;`),i.fragmentShader=`varying float vExchangeX;
uniform float exchangeEnabled;
uniform float exchangeProgress;
uniform vec3 exchangeColor;
uniform float exchangeOpacity;
${i.fragmentShader}`.replace("#include <color_fragment>",`#include <color_fragment>
        float exchangeFront = mix(0.265, -0.265, exchangeProgress);
        float exchangeMask = smoothstep(exchangeFront - 0.022, exchangeFront + 0.022, vExchangeX) * exchangeEnabled;
        diffuseColor.rgb = mix(diffuseColor.rgb, exchangeColor, exchangeMask);
        diffuseColor.a = mix(diffuseColor.a, exchangeOpacity, exchangeMask);`)},e.customProgramCacheKey=()=>"coverslip-exchange-front-v1",{update(i){t.exchangeEnabled.value=i?1:0,t.exchangeProgress.value=i?.replacementProgress||0,t.exchangeColor.value.copy(i?.solution==="dyed"?Rx:Pu),t.exchangeOpacity.value=i?.solution==="dyed"?.43:.26}}}function Lx(n,e=()=>{}){const t=new Kt;n.add(t),t.visible=!1;const i=document.createElement("canvas");i.width=512,i.height=128;const s=i.getContext("2d");s.fillStyle="#e8e5d8",s.fillRect(0,0,512,128);let r=42671;const a=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/4294967296;for(let f=0;f<1700;f++){const h=a()*512,d=a()*128;s.strokeStyle=a()>.48?"rgba(128,124,106,.13)":"rgba(255,255,251,.42)",s.lineWidth=.4+a()*.65,s.beginPath(),s.moveTo(h,d),s.lineTo(h+1.5+a()*8,d+(a()-.5)*3),s.stroke()}const o=new Yl(i);o.colorSpace=Gt,e(o);const c={paperWetness:{value:0},paperWetColor:{value:new Qe("#b0b9a6")}},l=new Ut({color:"#fffdf2",map:o,roughness:.96,metalness:0,side:Ft});l.onBeforeCompile=f=>{Object.assign(f.uniforms,c),f.vertexShader=`varying float vPaperX;
${f.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
vPaperX = position.x;`),f.fragmentShader=`varying float vPaperX;
uniform float paperWetness;
uniform vec3 paperWetColor;
${f.fragmentShader}`.replace("#include <color_fragment>",`#include <color_fragment>
        float paperDistance = 0.29 - vPaperX;
        float paperReach = mix(-0.018, 0.44, paperWetness);
        float paperWet = 1.0 - smoothstep(paperReach - 0.018, paperReach + 0.018, paperDistance);
        diffuseColor.rgb *= mix(vec3(1.0), paperWetColor, paperWet * 0.78);`)},l.customProgramCacheKey=()=>"paper-capillary-wetting-v1";const u=new St(new Nn(.58,.006,.13,12,1,3),l);return u.position.x=-.29,u.castShadow=!0,u.receiveShadow=!0,t.add(u),{root:t,update(f){t.visible=!!f?.paper.visible,f&&(t.position.set(...f.paper.position),t.rotation.set(...f.paper.rotation),c.paperWetness.value=f.paper.wetness,c.paperWetColor.value.set(f.solution==="dyed"?"#60aaa6":"#a5af99"))}}}function Ix(n){const e=new Kt;n.add(e),e.visible=!1;const t=[];for(const i of[-.143,.151])for(let s=0;s<3;s++){const r=Array.from({length:9},(c,l)=>new F(l/8*.075,.0248,i+Math.sin(l/8*Math.PI)*.002)),a=new Dn({color:"#e9f5ec",transparent:!0,opacity:0,depthWrite:!1}),o=new Ii(new _t().setFromPoints(r),a);e.add(o),t.push({line:o,index:s})}return{update(i){if(e.visible=!!i?.flow.visible,!i)return;const s=i.flow.progress;for(const{line:r,index:a}of t){const o=(s*1.5+a/3)%1;r.position.x=.154-o*.382,r.material.opacity=Math.sin(Math.PI*o)*Math.sin(Math.PI*s)*.32,r.material.color.set(i.solution==="dyed"?"#78d2cd":"#e9f5ec")}}}}function Dx(n,e={}){const t=new rh;t.background=new Qe("#171c1e"),t.fog=new Wl("#171c1e",19,37);const i=new tn(37,1,.1,55),s=new hx({antialias:!0,alpha:!1,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),s.shadowMap.enabled=!0,s.shadowMap.type=ku,s.toneMapping=Ll,s.toneMappingExposure=.94,s.outputColorSpace=Gt,s.domElement.setAttribute("aria-label","三维显微镜实验桌。点击试剂瓶选择溶液；拖动调焦旋钮，或用滚轮调焦。"),s.domElement.setAttribute("role","img"),s.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none;",s.domElement.tabIndex=0,n.appendChild(s.domElement);const r=new bl(s),a=new dx,o=r.fromScene(a,.045);t.environment=o.texture,t.environmentIntensity=.72,a.dispose(),r.dispose();const c=new Set,l=[],u=new Map,f=[],h=new F;let d=!1,_=!1,M=!0,m="",p=!1,y={objective:4,eyepiece:10,focus:0,selectedSolution:"sucrose",dosing:0},b=0,g=0,T=null,E=null;const C=($,te=.5,x=0)=>new Ut({color:$,roughness:te,metalness:x}),S=C("#e5e4d9",.29,.13),w=C("#c3c7bf",.38,.22),R=C("#171d20",.44,.35),L=C("#0b1012",.78,.03),z=C("#b8c2bf",.24,.88),G=C("#657477",.38,.8),I=C("#272f31",.3,.65),B=new Hn({color:"#142f33",metalness:.35,roughness:.09,clearcoat:1,clearcoatRoughness:.03}),K=new Ut({color:"#fff4d7",emissive:"#fff1ce",emissiveIntensity:1.25,roughness:.25});function O($,te,x=t,P,D){const H=new St($,te);return P&&H.position.set(...P),D&&H.rotation.set(...D),H.castShadow=!0,H.receiveShadow=!0,x.add(H),H}function Y($,te,x,P,D,H,X=.04){return O(new Ql($,te,x,3,Math.min(X,$/3,te/3,x/3)),P,D,H)}function k($,te,x,P,D,H=$,X=48){return O(new pi($,H,te,X),x,P,D)}function U($,te,x,P,D,H=[Math.PI/2,0,0]){return O(new Sr($,te,8,64),x,P,D,H)}function V($,te=[0,0,0]){const x=new Kt;return x.position.set(...te),$.add(x),x}function ne($,te,x){const P=document.createElement("canvas");P.width=$,P.height=te,x(P.getContext("2d"),$,te);const D=new Yl(P);return D.colorSpace=Gt,D.anisotropy=Math.min(s.capabilities.getMaxAnisotropy(),8),c.add(D),D}function ue($,te={}){return ne(512,160,(x,P,D)=>{x.fillStyle=te.background||"#deded4",x.fillRect(0,0,P,D),x.fillStyle=te.color||"#273132",x.textAlign="center",x.textBaseline="middle",x.font=`${te.weight||500} ${te.fontSize||56}px "Segoe UI", "Microsoft YaHei", sans-serif`,x.fillText($,P/2,D/2)})}function Ie($,te,x,P,D,H=[0,0,0]){const X=O(new Ni(te,x),new Ut({map:$,roughness:.68,metalness:.03,side:Ft}),P,D,H);return X.castShadow=!1,X}function Le($,te,x,P,D,H=96){const X=new pi($,$,te,H,1),me=X.attributes.position;for(let Ee=0;Ee<me.count;Ee++){const he=me.getX(Ee),fe=me.getZ(Ee);if(Math.hypot(he,fe)>$*.8){const Re=Math.atan2(he,fe),tt=Math.round((Re/(Math.PI*2)+1)*H)%2?.97:1;me.setXYZ(Ee,he*tt,me.getY(Ee),fe*tt)}}return X.computeVertexNormals(),O(X,x,P,D)}t.add(new op("#d4e1de","#33291e",1.25));const Ze=new vo("#ffefdc",2.8);Ze.position.set(-4,8.5,6),Ze.castShadow=!0,Ze.shadow.mapSize.set(2048,2048),Object.assign(Ze.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),Ze.shadow.normalBias=.025,Ze.shadow.bias=-8e-5,Ze.shadow.radius=4,t.add(Ze);const J=new vo("#cadfe4",1.6);J.position.set(3,6,-5),t.add(J);const ie=new vo("#f6f2dd",.42);ie.position.set(7,4,7),t.add(ie);let xe=912713;const Be=()=>(xe=xe*1664525+1013904223>>>0,xe/4294967296),we=ne(2048,1024,($,te,x)=>{$.fillStyle="#533a2b",$.fillRect(0,0,te,x);for(let P=0;P<1100;P++){const D=Be()*x,H=.012+Be()*.034;$.strokeStyle=Be()>.46?`rgba(27,12,6,${H})`:`rgba(201,146,100,${H})`,$.lineWidth=.4+Be()*2.5,$.beginPath();for(let X=0;X<=te;X+=32){const me=D+Math.sin(X/240+D/67)*3.6+Math.sin(X/91+D/15)*.9;X?$.lineTo(X,me):$.moveTo(X,me)}$.stroke()}for(let P=250;P<x;P+=258)$.fillStyle="#39281e",$.globalAlpha=.22,$.fillRect(0,P,te,2),$.globalAlpha=.08,$.fillStyle="#ffe2b1",$.fillRect(0,P+2,te,1);$.globalAlpha=1}),We=Y(17,.28,12,new Ut({map:we,roughness:.68,metalness:.025}),t,[0,-.17,0],.07);We.castShadow=!1;const rt=ne(256,256,($,te,x)=>{const P=$.createRadialGradient(te/2,x/2,15,te/2,x/2,te/2);P.addColorStop(0,"rgba(0,0,0,.48)"),P.addColorStop(.45,"rgba(0,0,0,.25)"),P.addColorStop(1,"rgba(0,0,0,0)"),$.fillStyle=P,$.fillRect(0,0,te,x)});function se($,te,x,P,D=.6){const H=O(new Ni(x,P),new hi({map:rt,transparent:!0,opacity:D,depthWrite:!1}),t,[$,-.019,te],[-Math.PI/2,0,0]);H.castShadow=!1,H.receiveShadow=!1}const re=V(t,[-1.18,0,0]);se(-1.18,0,3.4,3.5,.74);const de=new wa;de.moveTo(-.96,.23),de.bezierCurveTo(-1.04,1.1,-1.02,2.55,-.99,3.24),de.bezierCurveTo(-.97,3.8,-.5,4.03,.12,3.9),de.lineTo(.39,3.77),de.lineTo(.32,3.35),de.bezierCurveTo(-.13,3.48,-.36,3.3,-.39,3.01),de.lineTo(-.39,.7),de.bezierCurveTo(-.36,.38,-.1,.24,.15,.24),de.closePath();const ge=new dr(de,{depth:.54,bevelEnabled:!0,bevelThickness:.07,bevelSize:.06,bevelSegments:5,curveSegments:32,steps:1});O(ge,S,re,[.27,0,0],[0,-Math.PI/2,0]),Y(1.85,.3,2.27,S,re,[0,.24,.07],.145),Y(1.72,.055,2.12,w,re,[0,.075,.07],.025);for(const $ of[-.63,.63])for(const te of[-.66,.76])k(.18,.09,L,re,[$,.035,te]);k(.34,.04,I,re,[0,.407,.47]),k(.255,.022,K,re,[0,.435,.47]),U(.29,.022,z,re,[0,.44,.47]),Ie(ue("L U M E N",{fontSize:47,color:"#52605c"}),.63,.19,re,[.01,.225,1.21]);const Se=Le(.11,.085,L,re,[.78,.27,.54],64);Se.rotation.z=-Math.PI/2;const He=O(new pr(.022,12,8),new Ut({color:"#a6d1a7",emissive:"#75a779",emissiveIntensity:.6}),re,[.83,.3,.82]);He.castShadow=!1,k(.29,.24,I,re,[0,1.62,.48]),U(.29,.025,z,re,[0,1.72,.48]),k(.21,.12,B,re,[0,1.79,.48]);const Ve=Y(.43,.045,.06,z,re,[.31,1.62,.63],.015);Ve.rotation.y=-.3;const Ne=V(re,[0,2.01,.48]);Y(1.25,.12,.38,I,Ne,[0,-.14,-.48],.03);const Ge=new wa,N=.87,Ke=.65,Ye=.07;Ge.moveTo(-N+Ye,-Ke),Ge.lineTo(N-Ye,-Ke),Ge.quadraticCurveTo(N,-Ke,N,-Ke+Ye),Ge.lineTo(N,Ke-Ye),Ge.quadraticCurveTo(N,Ke,N-Ye,Ke),Ge.lineTo(-N+Ye,Ke),Ge.quadraticCurveTo(-N,Ke,-N,Ke-Ye),Ge.lineTo(-N,-Ke+Ye),Ge.quadraticCurveTo(-N,-Ke,-N+Ye,-Ke);const A=new vl;A.absarc(0,0,.205,0,Math.PI*2,!0),Ge.holes.push(A);const v=O(new dr(Ge,{depth:.105,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2,curveSegments:40}),R,Ne,[0,.1,0],[Math.PI/2,0,0]);v.receiveShadow=!0,Y(1.64,.055,.09,G,Ne,[0,.147,-.48],.015),Y(1.2,.042,.06,z,Ne,[-.1,.18,-.48],.01),Y(.1,.07,.53,G,Ne,[.64,.15,-.24],.016);const q=[];for(const $ of[-.61,.58]){const te=V(Ne,[$,.17,-.27]);Y(.18,.025,.39,z,te,[0,0,.17],.012),q.push(te),k(.042,.026,I,Ne,[$,.185,-.27],.042,24)}k(.1,.28,I,Ne,[.91,-.16,-.38]),Le(.105,.12,L,Ne,[.91,-.32,-.38],64),Le(.075,.1,L,Ne,[.91,-.43,-.38],64);const Z=new Hn({color:"#d2e7de",roughness:.07,metalness:.02,transparent:!0,opacity:.31,transmission:.15,thickness:.03,ior:1.5,depthWrite:!1}),Q=mx($=>c.add($)),pe={};for(const $ of["outer","inner"]){const te=$==="inner";pe[$]=ne(512,256,(x,P,D)=>{x.fillStyle="#eeeade",x.fillRect(0,0,P,D),x.fillStyle=te?"#a8b59a":"#a86b92",x.fillRect(0,0,P,22),x.fillStyle="#263d31",x.font='600 116px "Microsoft YaHei", sans-serif',x.textAlign="center",x.textBaseline="middle",x.fillText(te?"内表皮":"外表皮",P/2,143)})}function Me(){const $=V(t);Y(1.43,.027,.48,Z,$,[0,0,0],.009);const te=new _l(new Vc(new Nn(1.43,.027,.48)),new Dn({color:"#c5ded4",transparent:!0,opacity:.76}));$.add(te);const x=V($,[0,.022,0]),P=gx(t,Q),D=V($,[ms,.033,0]);Y(yt.width,yt.thickness,yt.depth,Z,D,[-yt.width/2,0,0],yt.corner);const H=new _l(new Vc(new Nn(yt.width,yt.thickness,yt.depth)),new Dn({color:"#d6eee2",transparent:!0,opacity:.72}));H.position.x=-yt.width/2,D.add(H);const X=Ie(pe.outer,.37,.215,$,[-.51,.018,0],[-Math.PI/2,0,0]);X.material.transparent=!0,X.material.depthWrite=!1,X.renderOrder=4;const me=_x($);return{root:$,specimen:x,peel:P,cover:D,label:X,water:me}}const ee=Me(),oe=Me(),Te=Px(ee.water.group),ke=Lx(t,$=>c.add($)),Ae=Ix(ee.root),be=wx(t);function ze($,te,x){$.root.visible=te.visible,$.root.position.set(...te.position),$.root.rotation.set(...te.rotation),$.specimen.visible=te.specimenVisible,$.specimen.position.set(te.specimenX||0,te.specimenY,0),$.specimen.rotation.z=te.specimenTilt,$.specimen.scale.set(te.specimenScale,1,te.specimenScale);const P=te.tissue==="inner"?"inner":"outer";$.peel.root.visible=te.visible&&(te.peelVisible??te.specimenVisible),$.peel.root.position.set(...te.peelPosition),$.peel.root.rotation.set(...te.peelRotation),$.peel.update(te.specimenCurl,P,te.peelSurfaceCurve||0),$.label.material.map!==pe[P]&&($.label.material.map=pe[P],$.label.material.needsUpdate=!0),$.cover.visible=te.coverVisible,$.cover.position.set(te.coverX+ms,te.coverY,te.coverZ),$.cover.rotation.z=te.coverAngle,$.water.group.visible=te.fluidVisible;const D=te.fluidContact?{...te.fluidContact,cover:{pivotX:te.coverX+ms,pivotY:te.coverY,pivotZ:te.coverZ,angle:te.coverAngle,width:yt.width,depth:yt.depth,thickness:yt.thickness}}:null;$.water.update(te.fluidScale,te.fluidCompression,te.fluidImpact,x==="dyed",D,te.fluidOffsetX||0)}function Xe($){const te=V(re,[$*.48,1.65,-.62]);te.rotation.z=$*-Math.PI/2,k(.29,.08,w,te,[0,.01,0]);const x=Le(.355,.21,L,te,[0,.13,0]);x.userData.focus="coarse",l.push(x);const P=k(.305,.018,I,te,[0,.245,0]);P.userData.focus="coarse",l.push(P),U(.276,.007,G,te,[0,.258,0]);const D=Le(.164,.145,L,te,[0,.33,0]);D.userData.focus="fine",l.push(D);const H=k(.139,.018,G,te,[0,.411,0]);H.userData.focus="fine",l.push(H),k(.04,.022,I,te,[0,.427,0],.04,20);for(let X=0;X<20;X++){const me=X*Math.PI/10,Ee=Y(.007,.003,X%5===0?.032:.018,w,te,[Math.sin(me)*.247,.258,Math.cos(me)*.247],.001);Ee.rotation.y=me}return te}const je=Xe(1),W=Xe(-1);Y(.91,.29,.84,S,re,[0,3.65,.05],.12),k(.34,.2,I,re,[0,3.42,.35]),U(.35,.025,z,re,[0,3.36,.35]);const ye=V(re,[0,3.27,.35]);k(.5,.15,I,ye,[0,0,0]),Le(.475,.045,L,ye,[0,-.075,0],96),k(.26,.16,G,ye,[0,-.075,0]);const ae=["#d3594d","#ddc058","#66a8bc"];[4,10,40].forEach(($,te)=>{const x=te*Math.PI*2/3,P=V(ye,[Math.sin(x)*.335,-.09,Math.cos(x)*.335]),D=[.39,.51,.67][te];k(.13,.1,G,P,[0,-.02,0]),k(.119,D-.09,z,P,[0,-(D-.09)/2-.065,0]),k(.122,.055,C(ae[te],.27,.38),P,[0,-D+.12,0]),k(.088,.1,I,P,[0,-D+.035,0]),k(.05,.012,B,P,[0,-D-.02,0]),Ie(ue(`${$} / ${[.1,.25,.65][te].toFixed(2)}`,{background:"#b9c3bf",fontSize:49,color:"#263330"}),.18,.065,P,[0,-D/2,.121])});const _e=V(re,[0,3.85,.12]);_e.rotation.x=.48,Y(1.09,.32,.66,S,_e,[0,.02,0],.13);for(const $ of[-.285,.285]){k(.245,.3,w,_e,[$,.19,0]),k(.207,.48,I,_e,[$,.48,0]),U(.208,.018,z,_e,[$,.31,0]);const te=Le(.224,.09,L,_e,[$,.54,0]);te.receiveShadow=!0,k(.23,.115,L,_e,[$,.75,0]),U(.194,.036,L,_e,[$,.817,0]),k(.16,.013,B,_e,[$,.806,0]),U(.154,.008,G,_e,[$,.815,0]);const x=O(new Na(.034,16),new hi({color:"#abcfd2",transparent:!0,opacity:.25,depthWrite:!1}),_e,[$-.05,.818,.045],[-Math.PI/2,0,0]);x.scale.y=.28,x.castShadow=!1;const P={};for(const H of[5,10,16])P[H]=ue(`WF ${H}×`,{background:"#263031",color:"#d3dad0",fontSize:61});const D=Ie(P[10],.31,.095,_e,[$,.45,.211]);f.push({label:D,maps:P})}Ie(ue("B I N O C U L A R",{background:"#e5e4d9",color:"#75817b",fontSize:34}),.76,.13,_e,[0,-.025,.338]),[{id:"sucrose",title:"蔗糖",sub:"SUCROSE",code:"01",color:"#a9b99a",liquid:"#c9d7b7",x:.55,z:.15},{id:"kno3",title:"硝酸钾",sub:"KNO₃",code:"02",color:"#a6bec4",liquid:"#bfd6d8",x:1.31,z:-.04},{id:"glycerol",title:"甘油",sub:"GLYCEROL",code:"03",color:"#c2af88",liquid:"#d9c9a6",x:2.07,z:-.2},{id:"dyed",title:"染色蔗糖",sub:"TRACER",code:"04",color:"#63b4b3",liquid:"#63b4b3",x:2.85,z:-.33},{id:"water",title:"清水",sub:"WATER",code:"05",color:"#b1c4c5",liquid:"#c6dddd",x:3.63,z:-.46}].forEach($=>{const te=V(t,[$.x,.02,$.z]);se($.x,$.z,.95,.86,.55);const x=new Hn({color:"#c5dbd2",metalness:.035,roughness:.08,transparent:!0,opacity:.26,transmission:.38,thickness:.1,ior:1.47,depthWrite:!1}),P=[[0,.025],[.23,.025],[.275,.06],[.282,.13],[.282,.85],[.269,.95],[.17,1.07],[.147,1.1],[.147,1.29]].map(([fe,Re])=>new ve(fe,Re));O(new fr(P,48),x,te);const D=new Hn({color:$.id==="dyed"?$.liquid:"#edf7f5",roughness:.065,transparent:!0,opacity:$.id==="dyed"?.76:.26,transmission:$.id==="dyed"?.56:.8,thickness:.06,ior:1.333,metalness:0,depthWrite:!1});k(.25,.65,D,te,[0,.395,0]),k(.25,.008,D,te,[0,.723,0]),U(.259,.011,x,te,[0,.09,0]),Le(.172,.2,L,te,[0,1.26,0],72),k(.17,.027,C($.color,.58),te,[0,1.369,0]);const H=ne(512,576,(fe,Re,Je)=>{fe.fillStyle="#eceadf",fe.fillRect(0,0,Re,Je),fe.fillStyle=$.color,fe.fillRect(0,0,Re,33),fe.fillStyle="#818c81",fe.font='500 36px "Segoe UI", sans-serif',fe.fillText($.code,40,91),fe.strokeStyle="#c6cabc",fe.lineWidth=2,fe.beginPath(),fe.moveTo(38,125),fe.lineTo(Re-38,125),fe.stroke(),fe.fillStyle="#16291f",fe.textAlign="center",fe.font=`700 ${$.title.length>3?82:$.title.length>2?98:112}px "Microsoft YaHei", sans-serif`,fe.fillText($.title,Re/2,267),fe.font='600 33px "Segoe UI", sans-serif',fe.fillStyle="#48594d",fe.fillText($.sub,Re/2,330),fe.fillStyle=$.color,fe.fillRect(Re/2-52,391,104,4),fe.fillStyle="#849084",fe.font='28px "Segoe UI", sans-serif',fe.fillText("LAB · 50 mL",Re/2,486)}),X=V(te,[0,.58,0]),me=Ie(H,.45,.51,X,[0,0,.289]);me.material.transparent=!0,me.material.depthWrite=!1,me.renderOrder=4;const Ee=U(.36,.013,new Ut({color:"#bdcfb5",emissive:"#a4bd9b",emissiveIntensity:.35,transparent:!0,opacity:0}),te,[0,.014,0]),he=O(new pi(.31,.31,1.44,20),new hi({visible:!1}),te,[0,.72,0]);he.userData.solution=$.id,l.push(he),u.set($.id,{group:te,labelGroup:X,halo:Ee,cap:te.children.find(fe=>fe.position.y===1.369),baseY:.02})});const ce=xx(t),Oe=ce.root,Ue=vx(t),ht=Ue.root;ht.visible=!1;const ct=new Hn({color:"#d1e6df",roughness:.03,metalness:.12,transparent:!0,opacity:.82,clearcoat:1}),Dt=O(new pr(.055,24,16),ct,re,[.16,2.75,.5]);Dt.visible=!1;const Xt=U(.2,.008,new hi({color:"#c9dfd3",transparent:!0,opacity:0,depthWrite:!1}),Ne,[.08,.2,.04]),yr=V(t),ka=Mx(yr),Rs=new Set;yr.traverse($=>{$.material&&Rs.add($.material)});const On=U(.22,.008,new hi({color:"#d4eee9",transparent:!0,opacity:0,depthWrite:!1}),t);On.visible=!1;const br=new fp,Ps=new ve;function Ls($){const te=s.domElement.getBoundingClientRect();return Ps.set(($.clientX-te.left)/te.width*2-1,-($.clientY-te.top)/te.height*2+1),br.setFromCamera(Ps,i),br.intersectObjects(l,!1)[0]?.object||null}function Mn($){if(!p||_||$.button!==0)return;const te=Ls($);te?.userData.focus?(T={pointerId:$.pointerId,y:$.clientY,x:$.clientX,kind:te.userData.focus},s.domElement.setPointerCapture($.pointerId),s.domElement.style.cursor="grabbing",$.preventDefault()):te?.userData.solution&&e.onSelectSolution?.(te.userData.solution)}function ki($){if(!p||_){Sn(),E=null;return}if(T){const te=T.y-$.clientY+($.clientX-T.x)*.35;e.onFocusChange?.(te*(T.kind==="coarse"?.008:.0018)),T.y=$.clientY,T.x=$.clientX;return}E=Ls($),s.domElement.style.cursor=E?.userData.focus?"grab":E?.userData.solution?"pointer":"default"}function Sn($){T&&s.domElement.hasPointerCapture(T.pointerId)&&s.domElement.releasePointerCapture(T.pointerId),T=null,s.domElement.style.cursor="default"}function Is($){!p||_||($.preventDefault(),e.onFocusChange?.(-Math.sign($.deltaY)*($.shiftKey?.06:.012)))}function _i(){T||(E=null,s.domElement.style.cursor="default")}s.domElement.addEventListener("pointerdown",Mn),s.domElement.addEventListener("pointermove",ki),s.domElement.addEventListener("pointerup",Sn),s.domElement.addEventListener("pointercancel",Sn),s.domElement.addEventListener("pointerleave",_i),s.domElement.addEventListener("wheel",Is,{passive:!1});function Ds($){$.preventDefault(),!(_||d)&&(_=!0,p=!1,Sn(),e.onUnavailable?.())}s.domElement.addEventListener("webglcontextlost",Ds,!1);function xi($){i.position.set(...$.position),i.lookAt(...$.target),i.zoom=$.zoom,i.updateProjectionMatrix(),u.forEach(({group:te,labelGroup:x})=>{i.getWorldPosition(h),h.sub(te.position),h.y=0,h.normalize(),x.rotation.y=Math.atan2(h.x,h.z)})}function Ns(){xi(wl(y.presentation,y,i.aspect).camera),M=!0}function Vi(){if(d)return;const $=Math.max(1,n.clientWidth),te=Math.max(1,n.clientHeight);s.setSize($,te,!1),i.aspect=$/te,Ns()}const Er=new ResizeObserver(Vi);Er.observe(n),Vi();function Tr($={},te=1/60){if(d||_)return;y={...y,...$};const x=y,P=Math.min(Math.max(te,0),.1),D=wl(x.presentation,x,i.aspect);p&&!D.interactive&&(Sn(),E=null),p=D.interactive,xi(D.camera);const X=-Math.max(0,[4,10,40].indexOf(Number(x.objective)))*Math.PI*2/3;if(D.phase==="focusing"){let he=X-g;he=Math.atan2(Math.sin(he),Math.cos(he)),b=g+he,g=Wi.damp(g,b,7,P)}else g=X+D.turretOffset;ye.rotation.y=g,Ne.position.y=2.01+Wi.clamp(Number(x.focus)||0,-1,1)*.055;for(const he of q)he.rotation.x=-D.clampOpen*.85;je.children[1].rotation.y=(Number(x.focus)||0)*8,W.children[1].rotation.y=-(Number(x.focus)||0)*8;for(const he of f){const fe=he.maps[x.eyepiece]||he.maps[10];he.label.material.map!==fe&&(he.label.material.map=fe,he.label.material.needsUpdate=!0)}ze(ee,D.primary,D.phase==="preparing"?"water":x.activeSolution),ze(oe,D.secondary,x.activeSolution),Te.update(D.exchange),ke.update(D.exchange),Ae.update(D.exchange),be.root.visible=D.onionScale.visible,be.root.position.set(...D.onionScale.position),be.root.rotation.set(...D.onionScale.rotation),Oe.position.set(...D.pipette.position),Oe.rotation.set(...D.pipette.rotation),ce.update(D.pipette.squeeze);const me=D.exchange?.solution==="dyed";Oe.children[2].material.color.set(me?"#63b4b3":"#d4e8e1"),Oe.children[3].material.color.set(me?"#63b4b3":"#c1ddd4"),ht.visible=D.tweezers.visible,ht.position.set(...D.tweezers.position),ht.rotation.set(...D.tweezers.rotation),Ue.update(D.tweezers.opening),ka.update(D.drop,D.pipette.position);for(const he of Rs)he.color.set(me?"#63b4b3":"#edf8f6");On.visible=D.ripple.visible,On.position.set(...D.ripple.position),On.scale.setScalar(D.ripple.scale),On.material.opacity=D.ripple.opacity,u.forEach((he,fe)=>{const Re=p&&x.selectedSolution===fe,Je=p&&E?.userData.solution===fe;he.halo.material.opacity=p?Wi.damp(he.halo.material.opacity,Re?.9:Je?.4:0,8,P):0,he.group.position.y=p?Wi.damp(he.group.position.y,he.baseY+(Je?.035:0),10,P):he.baseY});const Ee=["preparing","welcome","swapping","exchanging"].includes(D.phase)?0:Number(x.dosing)||0;if(Ee>0){const he=1-Wi.clamp(Ee,0,1);Dt.visible=!0,Dt.position.set(.1,2.25+(1-he)*.69,.52),Dt.scale.set(.8,1.4,.8),ct.color.set(x.selectedSolution==="dyed"?"#63b4b3":"#d2e7df"),Xt.material.opacity=Math.sin(he*Math.PI)*.65,Xt.scale.setScalar(.6+he*1.15)}else Dt.visible=!1,Xt.material.opacity=D.phase==="focusing"?Wi.damp(Xt.material.opacity,0,8,P):0;(D.phase!=="observing"||m!=="observing"||M)&&s.render(t,i),m=D.phase,M=!1}function Va(){if(d)return;d=!0,Er.disconnect(),s.domElement.removeEventListener("pointerdown",Mn),s.domElement.removeEventListener("pointermove",ki),s.domElement.removeEventListener("pointerup",Sn),s.domElement.removeEventListener("pointercancel",Sn),s.domElement.removeEventListener("pointerleave",_i),s.domElement.removeEventListener("wheel",Is),s.domElement.removeEventListener("webglcontextlost",Ds);const $=new Set,te=new Set;t.traverse(x=>{x.geometry&&$.add(x.geometry),x.material&&(Array.isArray(x.material)?x.material:[x.material]).forEach(P=>te.add(P))}),$.forEach(x=>x.dispose()),te.forEach(x=>x.dispose()),c.forEach(x=>x.dispose()),o.dispose(),s.dispose(),s.domElement.remove()}return Tr(y,1/60),{update:Tr,resize:Vi,dispose:Va,resetView:Ns}}const Ks=Math.PI*2,ec=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Lu=(n,e,t)=>{const i=ec((t-n)/(e-n));return i*i*(3-2*i)},Po=(n,e)=>n.x*e.y-n.y*e.x,Iu=new WeakMap,oi=(n,e=0)=>{let t=(Number(n)|0)+Math.imul(e+1,2654435769);return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),t^=t>>>15,(t>>>0)/4294967296};function Nx(n,e,t){const i={x:Math.cos(t),y:Math.sin(t)};let s=1/0;for(let r=0;r<n.length;r++){const a={x:n[r].x-e.x,y:n[r].y-e.y},o=n[(r+1)%n.length],c={x:o.x-n[r].x,y:o.y-n[r].y},l=Po(i,c);if(Math.abs(l)<1e-9)continue;const u=Po(a,c)/l,f=Po(a,i)/l;u>=0&&f>=-1e-8&&f<=1+1e-8&&(s=Math.min(s,u))}if(!Number.isFinite(s)||s<=0)throw new RangeError("Cell center must lie inside its wall polygon");return s}function Ux(n,e,t){let i=0,s=0,r=0;for(const f of n){const h=f.x-e.x,d=f.y-e.y;i+=h*h,s+=h*d,r+=d*d}const a=i+r<1e-8?oi(t,7)*Ks:.5*Math.atan2(2*s,i-r),o=Math.cos(a),c=Math.sin(a);let l=0,u=0;for(const f of n){const h=f.x-e.x,d=f.y-e.y;l=Math.max(l,Math.abs(h*o+d*c)),u=Math.max(u,Math.abs(-h*c+d*o))}return{angle:a,major:Math.max(l,1e-6),minor:Math.max(u,1e-6)}}function Fx(n,e){const t=ec(Number(n.variation)||0),i=Number(n.seed)||0,{angle:s,major:r,minor:a}=Ux(n.points,n.center,i),o=oi(i,0)*Ks,c=oi(i,1)*Ks,l=r*(1.015+(t-.5)*.018),u=a*(.955+(t-.5)*.025),f=g=>{const T=Math.cos(g-s),E=Math.sin(g-s);return 1/Math.sqrt((T/l)**2+(E/u)**2)};let h=.48+(t-.5)*.024;const d=Array.from({length:e},(g,T)=>{const E=Ks*T/e;return{angle:E,cosine:Math.cos(E),sine:Math.sin(E),wallRadius:Nx(n.points,n.center,E)}});for(const g of d)h=Math.min(h,.88*g.wallRadius/f(g.angle));h=Math.max(.04,h);const _=.106+oi(i,2)*.018,M=.025+oi(i,3)*.012,m=oi(i,4)*Ks,p=m+Math.PI*(.62+oi(i,6)*.23),y=.19+oi(i,5)*.06;return{points:d.map(({angle:g,cosine:T,sine:E,wallRadius:C})=>{const S=C*(.958+.006*Math.sin(2*g+o)+.003*Math.sin(3*g+c)),w=f(g)*h*(1+.013*Math.sin(2*(g-s)+o)+.007*Math.sin(3*(g-s)+c)),R=Math.atan2(Math.sin(g-m),Math.cos(g-m)),L=Math.atan2(Math.sin(g-p),Math.cos(g-p)),z=Math.exp(-.5*(R/y)**2),G=Math.exp(-.5*(L/(y*1.18))**2);return{cosine:T,sine:E,initialRadius:S,roundedRadius:w,indentWeight:_*z+M*G}}),center:{x:n.center.x,y:n.center.y},variation:t}}function Ox(n,e){let t=Iu.get(n);return t||Iu.set(n,t=new Map),t.has(e)||t.set(e,Fx(n,e)),t.get(e)}function Bx(n,e=0,t=64){if(!n||!Array.isArray(n.points)||n.points.length<3||!n.center||typeof n!="object")throw new TypeError("A cell wall polygon and center are required");const i=Math.max(32,Math.floor(t)),s=ec(Number(e)||0),r=Ox(n,i),a=Lu(.015,.28,s)*(1-Lu(.52,1,s)),o=.949-.078*s-.006*(r.variation-.5),c=new Array(i),l=new Array(i);for(let u=0;u<i;u++){const f=r.points[u],h=Math.max(1e-6,(f.initialRadius+(f.roundedRadius-f.initialRadius)*s)*(1-a*f.indentWeight)),d=r.center.x+f.cosine*h,_=r.center.y+f.sine*h;c[u]={x:d,y:_},l[u]={x:r.center.x+(d-r.center.x)*o,y:r.center.y+(_-r.center.y)*o}}return{center:{x:r.center.x,y:r.center.y},membrane:c,vacuole:l,progress:s}}const fi=Object.freeze({wall:"#159eb5",protoplast:"#d69a23",vacuole:"#8754c7"}),Du=n=>Math.abs(n.reduce((e,t,i)=>{const s=n[(i+1)%n.length];return e+t.x*s.y-s.x*t.y},0))/2;function zx(n,e,t){let i=n;for(let s=0;s<32&&i.length;s++){const r=Math.PI*2*s/32,a=Math.cos(r),o=Math.sin(r),c=e.x*a+e.y*o+t*Math.cos(Math.PI/32),l=[];for(let u=0;u<i.length;u++){const f=i[u],h=i[(u+1)%i.length],d=f.x*a+f.y*o-c,_=h.x*a+h.y*o-c;if(d<=0&&l.push(f),d<=0!=_<=0){const M=d/(d-_);l.push({x:f.x+(h.x-f.x)*M,y:f.y+(h.y-f.y)*M})}}i=l}return i}function kx(n,e,t=3){const{sampleSize:i,offset:s}=e,r={x:s+i/2,y:s+i/2},a=n.map(l=>{const u=zx(l.points,r,i*.44),f=Du(u);if(u.length<3||f<i*i*5e-4)return null;const h=u.reduce((d,_)=>({x:d.x+_.x/u.length,y:d.y+_.y/u.length}),{x:0,y:0});return{cell:l,visible:u,visibleArea:f,fraction:f/Du(l.points),centroid:h}}).filter(Boolean),o=[],c=[{x:.4,y:.4},{x:.65,y:.63},{x:.35,y:.73}];for(let l=0;l<t&&a.length;l++){const u=c[l%c.length],f=h=>{const d=(h.centroid.x-s)/i,_=(h.centroid.y-s)/i,M=o.length?Math.min(...o.map(m=>Math.hypot(h.centroid.x-m.centroid.x,h.centroid.y-m.centroid.y)/i)):.35;return Math.hypot(d-u.x,_-u.y)+(1-h.fraction)*.22+Math.max(0,.2-M)*2};a.sort((h,d)=>f(h)-f(d)||h.cell.seed-d.cell.seed),o.push(a.shift())}return o}function Ai(n,e,t){const i=t.diameter/e.sampleSize;return n.map(s=>({x:t.left+(s.x-e.offset)*i,y:t.top+(s.y-e.offset)*i}))}const ha=(n,e)=>`rgba(${parseInt(n.slice(1,3),16)},${parseInt(n.slice(3,5),16)},${parseInt(n.slice(5,7),16)},${e})`;function Vx(n,e){let t=1/0;for(const i of n)for(let s=0;s<e.length;s++){const r=e[s],a=e[(s+1)%e.length],o=a.x-r.x,c=a.y-r.y,l=Math.max(0,Math.min(1,((i.x-r.x)*o+(i.y-r.y)*c)/(o*o+c*c)));t=Math.min(t,Math.hypot(i.x-r.x-l*o,i.y-r.y-l*c))}return t}function Lo(n,e,t){const i=e[0],s=e[e.length-1];n.beginPath(),n.moveTo(s.x+(i.x-s.x)*(1-t),s.y+(i.y-s.y)*(1-t));for(let r=0;r<e.length;r++){const a=e[r],o=e[(r+1)%e.length];n.quadraticCurveTo(a.x,a.y,a.x+(o.x-a.x)*t,a.y+(o.y-a.y)*t),n.lineTo(a.x+(o.x-a.x)*(1-t),a.y+(o.y-a.y)*(1-t))}n.closePath()}function Gx(n,e,t,i,s){const r=i.diameter,a=s;if(r/a<410||e.fraction<.82)return;const o=Ai(e.cell.points,t,i),c=Math.max(...o.map(_=>_.x))-Math.min(...o.map(_=>_.x));if(c<65*a||c>r*.64)return;const l=Ai([e.cell.center],t,i)[0],u=[];n.font=`600 ${11*a}px "Microsoft YaHei", "PingFang SC", sans-serif`;const f=[{name:"细胞壁",color:fi.wall,points:o},{name:"原生质层",color:fi.protoplast,points:Ai(e.contour.membrane,t,i)},{name:"液泡",color:fi.vacuole,points:Ai(e.contour.vacuole,t,i)}],h=r/2-12*a,d={x:i.left+r/2,y:i.top+r/2};for(const[_,M]of f.entries()){const m=n.measureText(M.name).width+17*a,p=22*a,y=[];for(let g=0;g<3;g++)for(let T=0;T<12;T++){const E=-Math.PI*.75+T*Math.PI/6,C={x:Math.cos(E),y:Math.sin(E)},w=Math.max(...o.map(B=>(B.x-l.x)*C.x+(B.y-l.y)*C.y))+28*a+g*23*a,R=l.x+C.x*w-m/2,L=l.y+C.y*w-p/2;if([{x:R,y:L},{x:R+m,y:L},{x:R,y:L+p},{x:R+m,y:L+p}].some(B=>Math.hypot(B.x-d.x,B.y-d.y)>h)||u.some(B=>R<B.x+B.width+6*a&&R+m+6*a>B.x&&L<B.y+B.height+6*a&&L+p+6*a>B.y))continue;const G=M.points.reduce((B,K)=>Math.hypot(K.x-R-m/2,K.y-L-p/2)<Math.hypot(B.x-R-m/2,B.y-L-p/2)?K:B),I={x:Math.max(R+4*a,Math.min(R+m-4*a,G.x)),y:Math.max(L,Math.min(L+p,G.y))};y.push({x:R,y:L,width:m,height:p,anchor:G,endpoint:I,score:Math.hypot(G.x-I.x,G.y-I.y)+g*a+Math.abs(T-_*4)*a})}const b=y.sort((g,T)=>g.score-T.score)[0];b&&(u.push(b),n.beginPath(),n.moveTo(b.anchor.x,b.anchor.y),n.lineTo(b.endpoint.x,b.endpoint.y),n.strokeStyle="rgba(255,252,239,.94)",n.lineWidth=3*a,n.stroke(),n.strokeStyle=M.color,n.lineWidth=1.2*a,n.stroke(),n.beginPath(),n.roundRect(b.x,b.y,m,p,5*a),n.fillStyle="rgba(255,252,242,.94)",n.fill(),n.strokeStyle=ha(M.color,.55),n.lineWidth=a,n.stroke(),n.fillStyle="#343d37",n.textBaseline="middle",n.textAlign="left",n.fillText(M.name,b.x+8.5*a,b.y+p/2))}}function Hx(n,e,t,i,s,r=1){const a=[];n.save(),n.lineJoin="round";for(const c of e){const{cell:l}=c,u=t.get(l);if(!u)continue;const f=Ai(l.points,i,s),h=Ai(u.membrane,i,s),d=Ai(u.vacuole,i,s);Lo(n,d,.12+u.progress*.07),n.fillStyle=ha(fi.vacuole,.25),n.fill(),n.strokeStyle=ha(fi.vacuole,.92),n.lineWidth=1.2*r,n.stroke(),Lo(n,f,.035),n.strokeStyle=ha(fi.wall,.94),n.lineWidth=1.9*r,n.stroke(),Lo(n,h,.13+u.progress*.08);const _=Vx(h,f)<1.5*r;_?n.setLineDash([3*r,4*r]):(n.strokeStyle="rgba(255,249,224,.68)",n.lineWidth=3*r,n.stroke()),n.strokeStyle=fi.protoplast,n.lineWidth=(_?1.35:1.65)*r,n.stroke(),n.setLineDash([]),a.push({...c,contour:u})}const o=a.find(c=>c.fraction>=.82);o&&Gx(n,o,i,s,r),n.restore()}const Nt=5120,da=1536,ai=Math.PI*2,na=(n,e,t)=>Math.min(t,Math.max(e,n));function Uh(n=10,e=10){const t=a=>Number.isFinite(Number(a))&&Number(a)>0?Number(a):10,i=t(n)*t(e),s=i/100,r=960/s;return{magnification:i,linearScale:s,sampleSize:r,offset:(Nt-r)/2,specimenSize:Nt}}function _r(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Wx(n,e,t,i){const s=[];for(let r=0;r<n.length;r++){const a=n[r],o=n[(r+1)%n.length],c=a.x*e+a.y*t-i,l=o.x*e+o.y*t-i;if(c<=0&&s.push(a),c<=0!=l<=0){const u=c/(c-l);s.push({x:a.x+(o.x-a.x)*u,y:a.y+(o.y-a.y)*u})}}return s}function Xx(){const n=_r(91853),e=[];for(let i=-46;i<=46;i++)for(let s=-14;s<=14;s++)e.push({x:s+i%2*.4+(n()-.5)*.64,y:i+(n()-.5)*.54,seed:Math.floor(n()*1e7)});const t=i=>{const s=i.x*285,r=i.y*81;return{x:Nt/2+s*.875-r*.484,y:Nt/2+s*.484+r*.875}};return e.map(i=>{let s=[{x:i.x-2,y:i.y-2},{x:i.x+2,y:i.y-2},{x:i.x+2,y:i.y+2},{x:i.x-2,y:i.y+2}];for(const c of e){const l=c.x-i.x,u=c.y-i.y;if(!(c===i||Math.abs(l)>3||Math.abs(u)>3)&&(s=Wx(s,l,u,(c.x*c.x+c.y*c.y-i.x*i.x-i.y*i.y)/2),!s.length))break}const r=s.map(t),a=t(i),o={left:Math.min(...r.map(c=>c.x)),right:Math.max(...r.map(c=>c.x)),top:Math.min(...r.map(c=>c.y)),bottom:Math.max(...r.map(c=>c.y))};return{points:r,center:a,bounds:o,seed:i.seed,variation:_r(i.seed)()}}).filter(i=>i.points.length>2&&i.points.some(s=>s.x>-80&&s.x<Nt+80&&s.y>-80&&s.y<Nt+80))}const qx=Xx();function fa(n=da){const e=document.createElement("canvas");return e.width=e.height=n,e}function qs(n,e,t=.08){const i=e[e.length-1],s=e[0];n.beginPath(),n.moveTo(i.x+(s.x-i.x)*(1-t),i.y+(s.y-i.y)*(1-t));for(let r=0;r<e.length;r++){const a=e[r],o=e[(r+1)%e.length];n.quadraticCurveTo(a.x,a.y,a.x+(o.x-a.x)*t,a.y+(o.y-a.y)*t),n.lineTo(a.x+(o.x-a.x)*(1-t),a.y+(o.y-a.y)*(1-t))}n.closePath()}function Nu(n,e,t=0){return n.points.map((i,s)=>{const r=1-e*(1+t*Math.sin(n.seed+s*2.6));return{x:n.center.x+(i.x-n.center.x)*r,y:n.center.y+(i.y-n.center.y)*r}})}function Yx(){const n=fa(256),e=n.getContext("2d"),t=e.createImageData(256,256),i=_r(11027);for(let s=0;s<t.data.length;s+=4){const r=105+i()*100;t.data[s]=r,t.data[s+1]=r-12,t.data[s+2]=r-18,t.data[s+3]=Math.floor(3+i()*11)}return e.putImageData(t,0,0),n}function pa(n){const e=n.getContext("2d"),t=fa(),i=fa(),s=fa(768),r=Yx(),a=t.getContext("2d"),o=i.getContext("2d"),c=s.getContext("2d");let l=0,u=0,f=!1,h="",d="",_=null,M=null,m=[],p=new Map,y=[];function b(R){R.setTransform(1,0,0,1,0,0),R.clearRect(0,0,da,da);const L=da/M.sampleSize;R.setTransform(L,0,0,L,-M.offset*L,-M.offset*L)}function g(R){if(M?.magnification===R.magnification)return;M=R;const L=M.offset-8,z=M.offset+M.sampleSize+8;m=qx.filter(({bounds:I})=>I.left<=z&&I.right>=L&&I.top<=z&&I.bottom>=L),y=kx(m,M),b(a),a.fillStyle="#f2efcf",a.fillRect(0,0,Nt,Nt);const G=a.createRadialGradient(Nt*.46,Nt*.41,80,Nt/2,Nt/2,Nt*.77);G.addColorStop(0,"#fffce6"),G.addColorStop(.65,"#e9e6c8"),G.addColorStop(1,"#b9bd9f"),a.fillStyle=G,a.fillRect(0,0,Nt,Nt);for(const I of m)qs(a,I.points,.035),a.strokeStyle="rgba(116,111,66,.36)",a.lineWidth=4.3,a.stroke(),a.strokeStyle="rgba(255,255,225,.79)",a.lineWidth=1.55,a.stroke(),qs(a,Nu(I,.025),.045),a.strokeStyle="rgba(126,120,70,.18)",a.lineWidth=1,a.stroke();a.fillStyle=a.createPattern(r,"repeat"),a.fillRect(0,0,Nt,Nt),h=""}function T(R,L,z){b(o),p=new Map;const G=R!=="inner";for(const I of m){const B=_r(I.seed),K=I.variation,O=na(L*(.82+K*.31),0,.95),Y=Bx(I,O),k=Y.membrane;p.set(I,Y),z&&(qs(o,Nu(I,.017),.04),o.fillStyle=`rgba(66,165,172,${.13+O*.14})`,o.fill()),qs(o,k,.13+O*.08),o.fillStyle=G?"#ddd4bd":"#eee9cf",o.fill(),o.strokeStyle=G?"rgba(95,62,89,.43)":"rgba(105,118,85,.40)",o.lineWidth=1.25,o.stroke();const U=o.createLinearGradient(I.center.x-100,I.center.y-65,I.center.x+110,I.center.y+90);if(G){const V=304+K*29,ne=46+K*16-O*9;U.addColorStop(0,`hsla(${V},28%,${ne+14}%,.78)`),U.addColorStop(.48,`hsla(${V},31%,${ne+6}%,.87)`),U.addColorStop(1,`hsla(${V},30%,${ne}%,.91)`)}else U.addColorStop(0,"rgba(247,245,214,.94)"),U.addColorStop(.55,"rgba(222,227,195,.78)"),U.addColorStop(1,"rgba(196,211,179,.69)");if(qs(o,Y.vacuole,.12+O*.07),o.fillStyle=U,o.fill(),!(M.magnification<60)){o.save(),o.clip();for(let V=0;V<5;V++){const ne=I.center.x+(B()-.5)*190,ue=I.center.y+(B()-.5)*90,Ie=o.createRadialGradient(ne,ue,0,ne,ue,20+B()*65);Ie.addColorStop(0,G?"rgba(105,36,95,.075)":"rgba(141,160,97,.045)"),Ie.addColorStop(1,"rgba(110,50,100,0)"),o.fillStyle=Ie,o.fillRect(ne-90,ue-90,180,180)}o.fillStyle=o.createPattern(r,"repeat"),o.fillRect(I.center.x-240,I.center.y-140,480,280),o.restore();for(let V=0;V<11;V++){const ne=Math.floor(B()*k.length),ue=k[ne],Ie=k[(ne+1)%k.length],Le=B(),Ze=(ue.x+(Ie.x-ue.x)*Le)*.975+I.center.x*.025,J=(ue.y+(Ie.y-ue.y)*Le)*.975+I.center.y*.025;o.beginPath(),o.ellipse(Ze,J,.7+B()*1.5,.5+B(),.48,0,ai),o.fillStyle="rgba(93,95,68,.20)",o.fill()}if(K>.77){const V=k[Math.floor(B()*k.length)],ne=V.x*.74+I.center.x*.26,ue=V.y*.74+I.center.y*.26;o.beginPath(),o.ellipse(ne,ue,8.5,5.1,.48,0,ai),o.fillStyle=G?"rgba(99,67,99,.34)":"rgba(118,127,98,.28)",o.fill(),o.strokeStyle="rgba(255,245,221,.26)",o.lineWidth=1,o.stroke(),o.beginPath(),o.arc(ne+1.1,ue,1.9,0,ai),o.fillStyle="rgba(72,66,79,.23)",o.fill()}if(O>.19&&K>.67)for(let V=0;V<I.points.length;V+=3){const ne=I.points[V],ue=Math.atan2(ne.y-I.center.y,ne.x-I.center.x),Ie=Math.round((ue+ai)%ai/ai*k.length)%k.length,Le=k[Ie];o.beginPath(),o.moveTo(ne.x,ne.y),o.lineTo(Le.x,Le.y),o.strokeStyle="rgba(108,101,89,.17)",o.lineWidth=.65,o.stroke()}}}}function E(){if(f)return;const R=n.getBoundingClientRect(),L=Math.min(window.devicePixelRatio||1,2),z=Math.max(1,Math.round((R.width||n.clientWidth||420)*L)),G=Math.max(1,Math.round((R.height||n.clientHeight||420)*L));if(z!==l||G!==u){l=n.width=z,u=n.height=G;const I=Math.min(1400,Math.max(l,u));s.width=s.height=I,d=""}}function C(R,L,z,G){const I=Number(R.time)||0,B=na(Number(R.netFlux)||0,-1,1);for(let K=0;K<m.length;K++){if(K%3!==0)continue;const O=m[K],Y=_r(O.seed+73),k=p.get(O)?.membrane;if(!k?.length)continue;const U=k[Math.floor(Y()*k.length)],V=Math.hypot(U.x-O.center.x,U.y-O.center.y),ne={x:(U.x-O.center.x)/V,y:(U.y-O.center.y)/V};for(let ue=0;ue<2;ue++){const Le=Y()<.5+B*.34,Ze=.16+Y()*.05,J=(I*Ze+Y())%1,ie=(Le?J-.5:.5-J)*68,xe=(U.x+ne.x*ie-z)/L*G,Be=(U.y+ne.y*ie-z)/L*G,we=Math.sin(J*Math.PI)*.8;c.beginPath(),c.arc(xe,Be,Math.max(1.45,G/380),0,ai),c.fillStyle=`rgba(42,132,195,${we})`,c.fill(),c.beginPath(),c.moveTo(xe,Be),c.lineTo(xe-ne.x*(Le?1:-1)*4,Be-ne.y*(Le?1:-1)*4),c.strokeStyle=`rgba(42,132,195,${we*.35})`,c.lineWidth=1,c.stroke()}}}function S(R){if(f)return;_=R,l||E();const L=R.tissue==="inner"?"inner":"outer",z=Math.round(na(Number(R.shrink)||0,0,1)*100)/100,G=R.activeSolution==="dyed",I=Uh(R.objective,R.eyepiece);g(I);const{magnification:B,sampleSize:K,offset:O}=I,Y=`${L}:${z}:${G}:${B}`;Y!==h&&(T(L,z,G),h=Y);const k=na(Math.abs(Number(R.focus)||0),0,1),U=`${Y}:${B}:${k.toFixed(4)}:${l}:${u}:${!!R.showLabels}:${R.showWater?`${R.time}:${Number(R.netFlux||0).toFixed(3)}`:"-"}`;if(U===d)return;d=U;const V=s.width;c.clearRect(0,0,V,V),c.drawImage(t,0,0,V,V),c.drawImage(i,0,0,V,V),R.showWater&&C(R,K,O,V),e.clearRect(0,0,l,u);const ne=Math.min(l,u)*.985,ue=(l-ne)/2,Ie=(u-ne)/2;e.save(),e.beginPath(),e.arc(l/2,u/2,ne/2,0,ai),e.clip(),e.fillStyle="#ece9cf",e.fillRect(0,0,l,u),e.filter=k>.015?`blur(${k*k*ne*.033+k*.5}px)`:"none",e.globalAlpha=1-k*.12,e.drawImage(s,ue-2,Ie-2,ne+4,ne+4),e.filter="none",e.globalAlpha=1;const Le=e.createRadialGradient(l*.47,u*.45,ne*.19,l/2,u/2,ne*.51);Le.addColorStop(0,"rgba(225,223,172,0)"),Le.addColorStop(.72,"rgba(95,95,63,.025)"),Le.addColorStop(.92,"rgba(55,59,40,.18)"),Le.addColorStop(1,"rgba(26,31,24,.68)"),e.fillStyle=Le,e.fillRect(0,0,l,u),R.showLabels&&Hx(e,y,p,M,{left:ue-2,top:Ie-2,diameter:ne+4},Math.min(window.devicePixelRatio||1,2)),e.restore()}const w=typeof ResizeObserver<"u"?new ResizeObserver(()=>{E(),_&&S(_)}):null;return w?.observe(n),{render:S,resize:E,dispose(){f=!0,w?.disconnect(),t.width=i.width=s.width=r.width=1}}}const Yn=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),$x=new Set(["water","sucrose","kno3","glycerol","dyed"]),vs={kno3:{time:57,strength:.66},glycerol:{time:108,strength:.57}};function xr(){return{time:0,exposureTime:0,shrink:0,netFlux:0,phase:"hydrated",activeSolution:"water",concentration:.3,permeation:0,internalSolutes:{kno3:0,glycerol:0},targetShrink:0,revision:0}}function Fh(n){const e=(n.revision||0)+1;return Object.assign(n,xr(),{revision:e}),n}function Al(n){(!n.internalSolutes||typeof n.internalSolutes!="object")&&(n.internalSolutes={kno3:0,glycerol:0},vs[n.activeSolution]&&(n.internalSolutes[n.activeSolution]=Yn(Number(n.permeation)||0)));for(const e of Object.keys(vs))n.internalSolutes[e]=Yn(Number(n.internalSolutes[e])||0);n.permeation=Yn(n.internalSolutes.kno3+n.internalSolutes.glycerol)}function Oh(n){const e=Object.entries(vs).reduce((t,[i,s])=>t+s.strength*n.internalSolutes[i],0);return n.activeSolution==="water"?0:vs[n.activeSolution]?Yn(vs[n.activeSolution].strength-e):Yn(Yn(.1+(n.concentration-.1)*2.6,.04,.72)-e)}function Bh(n){n.targetShrink=Oh(n);const e=n.targetShrink-n.shrink;n.netFlux=Yn(e*3.2,-1,1),e>.009?n.phase="losing":e<-.009?n.phase="recovering":n.activeSolution==="water"&&n.shrink<.006?n.phase="hydrated":n.activeSolution==="kno3"||n.activeSolution==="glycerol"?n.phase="permeating":n.phase="balanced"}function Oa(n,e,t=.3){if(!$x.has(e))throw new RangeError(`Unknown solution: ${e}`);return Al(n),n.activeSolution=e,n.concentration=Yn(Number.isFinite(Number(t))?Number(t):.3,.05,.4),n.exposureTime=0,n.revision=(n.revision||0)+1,Bh(n),n}function Ra(n,e){if(!Number.isFinite(e)||e<=0)return n;Al(n);const t=Math.ceil(e/.2),i=e/t;for(let s=0;s<t;s++){n.time+=i,n.exposureTime+=i;for(const[o,c]of Object.entries(vs)){const l=n.activeSolution===o?1:0;n.internalSolutes[o]=l+(n.internalSolutes[o]-l)*Math.exp(-i/c.time)}const r=Oh(n),a=n.activeSolution==="water"?8.5:10.5;n.shrink=Yn(r+(n.shrink-r)*Math.exp(-i/a)),n.activeSolution==="water"&&n.shrink<4e-4&&(n.shrink=0)}return Al(n),Bh(n),n}function zh(n){if(n.activeSolution==="water")return n.phase==="hydrated"?"清水中，原生质层贴近细胞壁。":"换入清水，吸水后原生质层逐渐贴壁。";if(n.activeSolution==="kno3"||n.activeSolution==="glycerol"){const e=n.activeSolution==="kno3"?"KNO₃":"甘油";return n.phase==="losing"?`${e}机制示意：先失水，原生质层离壁。`:`${e}机制示意：溶质逐渐进入，条件适宜时可复原。`}return n.activeSolution==="dyed"?n.phase==="losing"?"失水离壁；淡青色仅示踪外液与分离空间。":"淡青色示踪分离空间，液泡保留自身颜色。":n.phase==="losing"?"水分净流出，原生质层逐渐离开细胞壁。":"形态趋于稳定，水分仍在双向交换。"}const _n=68,ci=32,mi=36,Zx=Object.freeze([{id:"initial",start:0,title:"观察初始状态",description:"观察液泡的大小和颜色，以及原生质层是否贴近细胞壁。",chapter:"initial"},{id:"add-sucrose",start:5,title:"加入蔗糖溶液",description:"外液改变，观察水分净流动和原生质层的位置。",chapter:"separation"},{id:"separation",start:12,title:"观察质壁分离",description:"原生质层逐渐离开细胞壁，分离空间内是外界溶液。",chapter:"separation"},{id:"add-water",start:mi,title:"换入清水",description:"从分离后的细胞继续观察吸水与复原。",chapter:"recovery"},{id:"recovery",start:60,title:"观察复原",description:"液泡逐渐增大，原生质层逐渐贴近细胞壁。",chapter:"recovery"}].map(n=>Object.freeze(n))),nr=10,Kx=8,os=new Map,Cl=n=>({...n,internalSolutes:{...n.internalSolutes}}),kh=n=>Math.max(0,Math.min(_n,Number.isFinite(Number(n))?Number(n):0)),Vh=n=>Math.max(5,Math.min(_n,Number.isFinite(Number(n))?Number(n):mi));function Pa({recoveryAt:n=mi}={}){return[{time:5,solution:"sucrose"},{time:Vh(n),solution:"water"}]}function tc({recoveryAt:n=mi}={}){const e=Vh(n);return Zx.map(t=>({...t,start:t.id==="add-water"?e:t.id==="recovery"?Math.min(_n,e+24):t.start})).filter(t=>t.chapter!=="separation"||t.start<e)}function Gh(n,e,t,i,s){let r=e;for(const a of i)a.time>e&&a.time<=t&&(a.time>r&&Ra(n,a.time-r),Oa(n,a.solution,s),r=a.time);t>r&&Ra(n,t-r),n.time=t,n.exposureTime=t-(i.findLast(a=>a.time<=t)?.time||0)}function Jx(n,e){const t=Math.max(.05,Math.min(.4,Number.isFinite(Number(n))?Number(n):.3)),i=Pa({recoveryAt:e}),s=`${t}:${i[1].time}`;if(os.has(s))return os.get(s);const r=xr();Oa(r,"water",t);const a=[Cl(r)];for(let o=1;o<=_n*nr;o++){const c=o/nr;Gh(r,(o-1)/nr,c,i,t),a.push(Cl(r))}return os.size>=Kx&&os.delete(os.keys().next().value),os.set(s,a),a}function ia(n,{concentration:e=.3,recoveryAt:t=mi}={}){const i=kh(n),s=Math.floor(i*nr),r=Cl(Jx(e,t)[s]);return Gh(r,s/nr,i,Pa({recoveryAt:t}),e),r}function Qx(n,e){const t=kh(n);return tc(e).findLast(i=>t>=i.start)}const Uu=1e-9;function jx(){const n={phase:"welcome",tissue:"outer",objective:4,eyepiece:10,focus:.28,speed:1,showWater:!1,showLabels:!1,selectedSolution:"sucrose",concentration:.3,mode:"guided",paused:!0,started:!1,demoTime:0,protocolConcentration:.3,protocolRecoveryAt:mi,held:!1,comparing:!1,transition:null,exchange:null,baselineViewing:!1,focusIntent:!1,focusStable:0,autoFocus:!1,entryCount:0,exchangeTime:0,exchangeSolution:"water",exchangeCount:0,revision:0};let e=xr(),t=0,i=null;const s=U=>({...U,internalSolutes:{...U.internalSolutes}}),r=U=>({...U,sim:s(U.sim)}),a=()=>["preparing","entering","swapping"].includes(n.phase),o=()=>n.exchange!==null,c=()=>({concentration:n.protocolConcentration,recoveryAt:n.protocolRecoveryAt});function l(){i={tissue:n.tissue,sim:s(e),revision:n.revision}}function u(){n.baselineViewing=!1}function f(){Fh(e),Object.assign(n,{paused:!0,started:!1,demoTime:0,held:!1,protocolRecoveryAt:mi,exchange:null,exchangeTime:0,exchangeSolution:"water",exchangeCount:0,autoFocus:!1,baselineViewing:!1}),n.revision++,l()}function h(U,V,ne={}){u(),n.paused=!0,n.autoFocus=!1,n.phase=U,n.transition={id:++t,type:U,elapsed:0,duration:V,committed:!1,...ne}}function d(U){U.committed||(U.committed=!0,n.tissue=U.toTissue,f(),n.focus=.12)}function _(){const U=n.transition;return U?(U.type==="swapping"&&d(U),n.transition=null,U.type==="preparing"?Object.assign(n,{phase:"focusing",focus:.28,focusIntent:!1,focusStable:0,paused:!0}):(Object.assign(n,{phase:"observing",focus:0,paused:!0,autoFocus:!1}),n.entryCount++),!0):!1}function M(){return a()||o()||n.comparing?!1:(u(),f(),n.objective=4,h("preparing",15,{fromTissue:n.tissue,toTissue:n.tissue}),!0)}function m(){return a()||o()||n.comparing?!1:(u(),f(),n.phase="observing",n.focus=0,!0)}function p(U){return!["inner","outer"].includes(U)||U===n.tissue||a()||o()||n.comparing?!1:(u(),n.phase==="welcome"?(n.tissue=U,n.revision++,l(),!0):(h("swapping",3,{fromTissue:n.tissue,toTissue:U}),!0))}function y(U,V=!1){!["focusing","observing"].includes(n.phase)||n.baselineViewing||(n.focus=Math.max(-1,Math.min(1,U)),n.focusIntent=!0,V||(n.autoFocus=!1))}function b(){!["focusing","observing"].includes(n.phase)||n.baselineViewing||(n.autoFocus=!0,n.focusIntent=!0)}function g(U,V=n.concentration){return a()||o()||n.baselineViewing||n.comparing||!["water","sucrose","kno3","glycerol","dyed"].includes(U)||n.mode==="guided"&&!["water","sucrose"].includes(U)?!1:(n.selectedSolution=U,n.concentration=Number(V),!0)}function T(U,V,ne,ue=null){if(n.phase!=="observing"||n.comparing||o())return!1;const Ie=n.exchangeCount===0,Le=tr;return n.exchangeCount++,n.exchange={solution:U,concentration:Number(V),elapsed:0,duration:Le,committed:!1,source:ne,first:Ie,commitAt:gr,...ue===null?{}:{eventTime:ue}},n.exchangeTime=Le,n.exchangeSolution=U,n.started=!0,n.paused=!1,!0}function E(U=n.selectedSolution,V=n.concentration){return n.mode!=="free"||n.phase!=="observing"||n.comparing||o()?!1:(u(),T(U,V,"free"))}function C(){return n.phase!=="observing"||n.comparing||o()||n.baselineViewing?!1:n.mode==="free"?!0:n.selectedSolution==="sucrose"?n.demoTime<5:n.selectedSolution==="water"&&e.activeSolution==="sucrose"}function S(){return C()?n.mode==="free"?E():n.selectedSolution==="sucrose"?(n.protocolConcentration=n.concentration,n.protocolRecoveryAt=mi,n.held=!1,n.demoTime=5,T("sucrose",n.protocolConcentration,"guided",5)):(n.protocolRecoveryAt=n.demoTime,n.held=!0,T("water",n.protocolConcentration,"guided",n.demoTime)):!1}function w(U){return U.committed?!1:(U.committed=!0,U.source==="guided"?e=ia(U.eventTime,c()):Oa(e,U.solution,U.concentration),!0)}function R(){const U=n.exchange;return U?(w(U),n.exchange=null,n.exchangeTime=0,!0):!1}function L(){return n.phase!=="observing"||n.comparing||o()||n.baselineViewing?!1:(n.mode==="guided"&&n.demoTime>=_n&&f(),!n.started&&n.mode==="guided"&&(n.protocolConcentration=n.concentration,n.started=!0),!n.started&&n.mode==="free"?E(n.selectedSolution,n.concentration):(n.paused=!n.paused,!0))}function z(){return n.phase!=="observing"||n.comparing?!1:(u(),f(),!0)}function G(U){return n.phase!=="observing"||n.mode!=="guided"||n.comparing||o()?!1:(u(),n.started||(n.protocolConcentration=n.concentration),n.demoTime=Math.max(0,Math.min(_n,Number(U)||0)),e=ia(n.demoTime,c()),n.paused=!0,n.started=n.demoTime>0,n.held=n.demoTime>=ci,n.exchangeTime=0,n.exchangeSolution=e.activeSolution,n.exchangeCount=Pa(c()).filter(V=>V.time<=n.demoTime).length,!0)}function I(U){return n.phase!=="observing"||n.comparing||o()||!["guided","free"].includes(U)||n.mode===U?!1:(u(),n.mode=U,U==="guided"?(n.selectedSolution="sucrose",f()):n.paused=!0,!0)}function B(U){return U?n.phase!=="observing"||o()||n.comparing?!1:(n.baselineViewing=!0,!0):(n.baselineViewing=!1,!0)}function K(U){const V=n.exchange,ne=V.elapsed;V.elapsed=Math.min(V.duration,ne+U),n.exchangeTime=Math.max(0,V.duration-V.elapsed),!V.committed&&ne<V.commitAt&&V.elapsed+Uu>=V.commitAt&&w(V),V.elapsed+Uu>=V.duration&&R()}function O(U){const V=n.demoTime,ne=Math.min(_n,V+U),ue=Pa(c()).find(Le=>Le.time>V&&Le.time<=ne),Ie=n.protocolRecoveryAt>ci&&!n.held&&V<ci&&ne>=ci;if(ue&&(!Ie||ue.time<ci)){n.demoTime=ue.time,T(ue.solution,n.protocolConcentration,"guided",ue.time);return}if(Ie){n.demoTime=ci,e=ia(n.demoTime,c()),n.held=!0,n.paused=!0;return}n.demoTime=ne,e=ia(ne,c()),ne>=_n&&(n.paused=!0)}function Y(U){if(!Number.isFinite(U)||U<=0)return;const V=n.transition;if(V){V.elapsed=Math.min(V.duration,V.elapsed+U),V.type==="swapping"&&V.elapsed>=2&&(d(V),n.focus=.12*(1-Math.min(1,(V.elapsed-2)/.4))),V.elapsed>=V.duration&&_();return}if(o()){K(U);return}if(!n.baselineViewing){if(n.autoFocus&&(n.focus*=Math.exp(-U*10),Math.abs(n.focus)<.003&&(n.focus=0,n.autoFocus=!1)),n.phase==="focusing"){n.focusStable=n.focusIntent&&Math.abs(n.focus)<.025?n.focusStable+U:0,n.focusStable>=.3&&h("entering",1.1);return}n.phase!=="observing"||n.paused||n.comparing||(n.mode==="free"?Ra(e,U*n.speed):O(U*n.speed))}}function k(){n.transition&&_(),n.exchange&&R(),["welcome","focusing"].includes(n.phase)&&m()}return l(),{state:n,get sim(){return e},get baseline(){return r(i)},getBaseline:()=>r(i),busy:a,exchangeBusy:o,prepare:M,direct:m,changeTissue:p,focus:y,autofocus:b,select:g,exchange:E,addSelected:S,canAddSelected:C,finishExchange:R,play:L,replay:z,seek:G,setMode:I,setBaselineViewing:B,tick:Y,skip:()=>n.transition?_():R(),unavailable:k}}function ev(){const n={mode:"concentration",tissues:{a:"outer",b:"outer"},conditions:{a:".1",b:".3"},paused:!0,started:!1,elapsed:0,transition:null},e={a:xr(),b:xr()};function t(){for(const u of Object.values(e))Fh(u);n.elapsed=0,n.started=!1,n.paused=!0}function i(u){n.transition||(n.mode=u,n.conditions=u==="solution"?{a:"sucrose",b:"kno3"}:u==="tissue"?{a:".3",b:".3"}:{a:".1",b:".3"},n.tissues=u==="tissue"?{a:"outer",b:"inner"}:{a:n.tissues.a,b:n.tissues.a},t())}function s(u,f){return n.transition||n.tissues[u]===f||!["inner","outer"].includes(f)?!1:(n.paused=!0,n.transition={side:u,fromTissue:n.tissues[u],toTissue:f,elapsed:0,duration:1.8,committed:!1},!0)}function r(u){u.committed||(u.committed=!0,n.tissues[u.side]=u.toTissue,t())}function a(){n.transition&&(r(n.transition),n.transition=null)}function o(u,f){n.transition||(n.conditions[u]=f,t())}function c(){if(!n.transition){if(!n.started){for(const u of["a","b"])Oa(e[u],n.mode==="solution"?n.conditions[u]:"sucrose",n.mode==="solution"?.3:Number(n.conditions[u]));n.started=!0}n.paused=!n.paused}}function l(u,f){if(n.transition){const h=n.transition;h.elapsed+=u,h.elapsed>=1.2&&r(h),h.elapsed>=h.duration&&a()}else if(!n.paused){n.elapsed+=u*f;for(const h of Object.values(e))Ra(h,u*f)}}return{state:n,sims:e,reset:t,configure:i,changeTissue:s,condition:o,play:c,tick:l,finish:a}}function tv(n,e,t){const i=n.querySelector(".flat-stage"),s=i.querySelector(".flat-slide.old"),r=wl({...e,phase:"preparing"},t),a=r.primary,o=i.clientWidth,c=o*.35,l=[o*.4,i.clientHeight*.27],u=([T,E,C])=>[l[0]+T*c,l[1]+(C-E*.85)*c],f=T=>{const[E,C,S]=T.map((R,L)=>R-a.position[L]),w=a.rotation[1];return u([E*Math.cos(w)-S*Math.sin(w),C,E*Math.sin(w)+S*Math.cos(w)])},h=(T,E,C,S,w="translate(-50%,-50%)")=>{Object.assign(T.style,{left:E[0]+"px",top:E[1]+"px",width:C+"px",height:S+"px",transform:w})};h(s,l,1.43*c,.48*c,`translate(-50%,-50%) translateX(${(1-Math.min(1,e.elapsed/1.8))*o}px)`),s.style.opacity="1",s.querySelector(".flat-specimen").style.opacity="0",i.querySelector(".flat-slide.incoming").style.opacity="0";const d=i.querySelector(".flat-leaf");d.hidden=!r.onionScale.visible||e.elapsed>=10,d.dataset.tissue=a.tissue,d.style.setProperty("--peeled",r.onionScale.peelAmount),h(d,f(r.onionScale.position),.84*c,.54*c);const _=i.querySelector(".flat-peel");_.hidden=!a.peelVisible,_.dataset.tissue=a.tissue,h(_,f(a.peelPosition),.38*Aa*c,.245*Aa*c),_.style.borderRadius=`${4+a.specimenCurl*110}px 3px 5px 3px`;const M=i.querySelector(".flat-cover");M.hidden=!a.coverVisible,M.style.transformOrigin=ms>0?"right center":"left center",h(M,u([a.coverX-yt.width/2,a.coverY,a.coverZ]),yt.width*c,yt.depth*c,`translateY(-50%) matrix(${Math.cos(a.coverAngle)},${-Math.sin(a.coverAngle)*.85},0,1,0,0)`);const m=i.querySelector(".flat-film"),p=a.fluidCompression,y=Ca(p,a.fluidOffsetX);m.hidden=!a.fluidVisible,h(m,u(y.center),2*y.radius[0]*c*a.fluidScale,2*y.radius[1]*c*a.fluidScale),m.style.borderRadius=50*(1-p)+1+"%",m.style.boxShadow=`inset 0 0 3px #e6faf589, ${a.fluidContact?.strength||0}px 0 2px #e6faf589`;const b=i.querySelector(".flat-drop");b.hidden=!r.drop.visible,h(b,f(r.drop.position),.08*c*r.drop.scale[0],.104*c*r.drop.scale[1]);const g=i.querySelector(".flat-forceps");g.hidden=!r.tweezers.visible,g.dataset.gripping=r.tweezers.gripping||"",g.style.setProperty("--jaw",r.tweezers.opening*7+"deg"),h(g,f(r.tweezers.position),.07*c,1.08*c,`translate(-50%,-100%) rotate(${-r.tweezers.rotation[2]}rad)`),n.querySelector("p").textContent=e.elapsed<10?"制片动作示意":"固定装片 · 低倍物镜就位"}const nv=[{solution:"water",label:"清水",mark:"H₂O",tone:"water"},...[.1,.2,.3].map(n=>({solution:"sucrose",concentration:n,label:"蔗糖",mark:n.toFixed(1),tone:"sugar"})),{solution:"kno3",label:"硝酸钾",mark:"KNO₃",tone:"salt",extension:!0},{solution:"glycerol",label:"甘油",mark:"甘油",tone:"glycerol",extension:!0},...[.1,.2,.3].map(n=>({solution:"dyed",concentration:n,label:"染色蔗糖",mark:n.toFixed(1),tone:"dyed",extension:!0}))];function iv(n,e){n.innerHTML=nv.map(i=>`<button type="button" class="reagent-bottle" data-reagent="${i.solution}"${i.concentration?` data-concentration="${i.concentration}"`:""} data-extension="${!!i.extension}" data-tone="${i.tone}" aria-pressed="false" aria-label="${i.label}${i.concentration?` ${i.mark} g/mL`:""}">
    <span class="bottle-art" aria-hidden="true"><i class="bottle-cap"></i><i class="bottle-neck"></i><span class="bottle-glass"><i class="bottle-liquid"></i><span class="bottle-label"><small>${i.label}</small><strong>${i.mark}</strong><em>${i.concentration?"g/mL":"试剂"}</em></span></span></span>
    <span class="bottle-name">${i.label}</span><span class="bottle-strength">${i.concentration?`${i.mark} g/mL`:" "}</span><span class="bottle-check" aria-hidden="true">✓</span></button>`).join("");const t=[...n.querySelectorAll("button")];for(const i of t)i.addEventListener("click",()=>e(i.dataset.reagent,i.dataset.concentration));return{update(i,s){for(const r of t)r.hidden=r.dataset.extension==="true"&&i.mode!=="free",r.disabled=s,r.setAttribute("aria-pressed",String(r.dataset.reagent===i.selectedSolution&&(!r.dataset.concentration||Number(r.dataset.concentration)===i.concentration)))}}}const j=n=>document.querySelector(n),Cn=n=>[...document.querySelectorAll(n)],Ci={water:"清水",sucrose:"蔗糖溶液",kno3:"硝酸钾溶液",glycerol:"甘油溶液",dyed:"染色蔗糖"},gi=n=>n==="inner"?"内表皮":"外表皮",st=jx(),le=st.state,wt=ev(),Ei={main:pa(j("#specimen-canvas")),a:pa(j("#compare-canvas-a")),b:pa(j("#compare-canvas-b"))};let Es,Ts=!1,ma=0,nc=!1,Ba,Fu=0,La=performance.now(),Ou="",vr=0,Bu=-1;const ic=()=>({recoveryAt:le.protocolRecoveryAt}),Hh=()=>Qx(le.demoTime,ic()),sv=iv(j("#reagent-rack"),(n,e)=>{st.select(n,e===void 0?le.concentration:Number(e)),Bt()});for(const[n,e]of Object.entries(fi))j(".structure-legend ."+n).style.background=e;const Wh="plasmolysis-preparation-seen-v2";function Xh(){try{localStorage.setItem(Wh,"1")}catch{}}function Mr(n){j("#toast").textContent=n,ma=performance.now()+2300,j("#toast").classList.add("visible")}function ga(){Ts||(Ts=!0,Es?.dispose(),Es=null,document.body.dataset.renderer="2d",j("#renderer-note").hidden=!1,j("#instrument").hidden=!0,le.exchange||st.unavailable(),Mr("已进入二维观察，实验操作保持可用。"))}try{const n=new URLSearchParams(location.search).get("renderer")==="2d",e=document.createElement("canvas"),t=n?null:e.getContext("webgl2");t?(t.getExtension("WEBGL_lose_context")?.loseContext(),Es=Dx(j("#instrument"),{onSelectSolution:i=>{if(!(st.busy()||le.exchange)){if(le.mode==="guided"&&i!=="sucrose"){Mr("其他试剂请在观察界面进入“拓展实验”后选择。");return}st.select(i),Bt()}},onFocusChange:i=>st.focus(le.focus+i),onUnavailable:ga}),document.body.dataset.renderer="3d"):ga()}catch{ga()}try{localStorage.getItem(Wh)&&(j("#direct-observe").className="primary",j("#start-experience").className="quiet",j("#start-experience").textContent="重看制片 →",j("#welcome-hint").textContent="已看过制片，可以直接开始观察")}catch{}function _a(n=st.sim,e=le.tissue){return{...le,...n,tissue:e,presentation:le.exchange?{phase:"exchanging",...le.exchange}:{phase:le.phase,elapsed:0,duration:0,...le.transition}}}function zu(){const n=st.baseline;return{..._a(n.sim,n.tissue),focus:0,showWater:!1,showLabels:!1}}function zi(){Bt(),sc()}function qh(){st.prepare()&&(Xh(),zi())}j("#start-experience").addEventListener("click",qh);j("#watch-preparation").addEventListener("click",qh);j("#direct-observe").addEventListener("click",()=>{st.direct()&&(Xh(),zi())});j("#skip-animation").addEventListener("click",()=>{st.skip(),zi()});Cn("[data-tissue]").forEach(n=>n.addEventListener("click",()=>{st.changeTissue(n.dataset.tissue)&&(le.phase==="swapping"&&innerWidth<=760&&window.scrollTo({top:0,behavior:"instant"}),zi())}));for(const n of["coarse-focus","observe-focus"])j("#"+n).addEventListener("input",e=>{st.focus(Number(e.target.value)),Bt()});j("#fine-minus").addEventListener("click",()=>st.focus(le.focus-.015));j("#fine-plus").addEventListener("click",()=>st.focus(le.focus+.015));for(const n of["autofocus","observe-autofocus"])j("#"+n).addEventListener("click",()=>st.autofocus());j("#specimen-canvas").addEventListener("wheel",n=>{["focusing","observing"].includes(le.phase)&&(n.preventDefault(),st.focus(le.focus+Math.sign(n.deltaY)*(n.shiftKey?.09:.012)))},{passive:!1});for(const n of["objective","eyepiece"])j("#"+n+"-select").addEventListener("change",e=>{le.phase==="observing"&&(le[n]=Number(e.target.value),zi())});j("#free-mode").addEventListener("click",()=>{le.mode==="guided"?(st.setMode("free"),Mr("已进入拓展实验，保留当前细胞状态。选择试剂后点击加入。")):(st.select("sucrose"),st.setMode("guided"),Mr("主线已回到清水初态。")),vr=0,Bt()});j("#add-solution").addEventListener("click",()=>{st.addSelected()&&innerWidth<=760&&window.scrollTo({top:0,behavior:"instant"}),zi()});j("#rinse").addEventListener("click",()=>{st.exchange("water"),Bt()});j("#finish-exchange").addEventListener("click",()=>{st.finishExchange(),Bt()});j("#baseline-toggle").addEventListener("click",()=>{st.setBaselineViewing(!le.baselineViewing),Bt()});j("#play").addEventListener("click",()=>{st.play(),vr=0,Bt()});j("#replay").addEventListener("click",()=>{st.replay(),Mr("同类新标本，回到清水初态。"),Bt()});for(const[n,e]of[["water-toggle","showWater"],["labels-toggle","showLabels"]])j("#"+n).addEventListener("click",()=>{le[e]=!le[e],Bt()});Cn("[data-speed]").forEach(n=>n.addEventListener("click",()=>{le.speed=Number(n.dataset.speed),Bt()}));function za(n){st.seek(n)&&(j("#seek-context").textContent=le.demoTime>=le.protocolRecoveryAt?"此前已完成：蔗糖处理 → 换入清水。现在观察同一组细胞复原。":le.demoTime>=5?"此前已完成：清水初态观察 → 加入蔗糖。现在观察分离过程。":"回到清水初态，尚未加入蔗糖。",vr=performance.now()+6500,Bt())}j("#demo-progress").addEventListener("input",n=>za(Number(n.target.value)));j("#previous").addEventListener("click",()=>{const n=[...tc(ic())].reverse().find(e=>e.start<le.demoTime-.1);za(n?.start||0)});j("#next").addEventListener("click",()=>{const n=tc(ic()).find(e=>e.start>le.demoTime+.1);za(n?.start??_n)});Cn("[data-chapter]").forEach(n=>n.addEventListener("click",()=>{le.mode==="guided"&&za({initial:0,separation:5,recovery:le.protocolRecoveryAt}[n.dataset.chapter])}));function Yh(n){j("#"+n).showModal(),requestAnimationFrame(()=>Object.values(Ei).forEach(e=>e.resize()))}j("#about-open").addEventListener("click",()=>{le.paused=!0,Yh("about-dialog"),Bt()});Cn("[data-close]").forEach(n=>n.addEventListener("click",()=>j("#"+n.dataset.close).close()));Cn("dialog").forEach(n=>n.addEventListener("click",e=>{if(e.target!==n)return;const t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n.close()}));function $h(){const n=wt.state,e=n.mode==="solution"?Object.entries(Ci):n.mode==="tissue"?[[".3","蔗糖 0.3 g/mL"]]:[[".1","蔗糖 0.1 g/mL"],[".2","蔗糖 0.2 g/mL"],[".3","蔗糖 0.3 g/mL"]];for(const t of["a","b"])j("#compare-"+t).innerHTML=e.map(([i,s])=>'<option value="'+i+'">'+s+"</option>").join("");Zn()}j("#compare-open").addEventListener("click",()=>{le.phase!=="observing"||le.exchange||(st.setBaselineViewing(!1),le.paused=!0,le.comparing=!0,Zn(),Yh("compare-dialog"),Bt())});j("#compare-dialog").addEventListener("close",()=>{wt.finish(),wt.state.paused=!0,le.comparing=!1,le.paused=!0,Bt()});j("#compare-mode").addEventListener("change",n=>{wt.configure(n.target.value),$h()});for(const n of["a","b"])j("#compare-"+n).addEventListener("change",e=>{wt.condition(n,e.target.value),Zn()}),j("#compare-tissue-"+n).addEventListener("change",e=>{wt.changeTissue(n,e.target.value),Zn()});j("#compare-play").addEventListener("click",()=>{wt.play(),Zn()});j("#compare-reset").addEventListener("click",()=>{wt.state.transition||wt.reset(),Zn()});j("#compare-skip").addEventListener("click",()=>{wt.finish(),Zn()});function Zn(){const n=wt.state,e=n.transition;j("#compare-play").textContent=n.started?n.paused?"▶ 同时继续":"Ⅱ 同时暂停":"▶ 同时开始",j("#compare-play").disabled=!!e,j("#compare-reset").disabled=!!e,j("#compare-mode").disabled=!!e,j("#compare-skip").hidden=!e,j("#compare-magnification").textContent=le.objective*le.eyepiece+"×",j("#compare-caption").textContent=e?"更换"+e.side.toUpperCase()+"栏装片 · 两栏均已暂停":n.started?n.paused?"两栏已暂停":"同一起点，同步观察":"两份新标本 · 清水初态 · 等待开始";for(const t of["a","b"]){j("#compare-tissue-"+t).value=n.tissues[t],j("#compare-tissue-"+t).disabled=!!e,j("#compare-"+t).value=n.conditions[t],j("#compare-"+t).disabled=!!e,j("#compare-status-"+t).textContent=zh(wt.sims[t]);const i=j('.compare-column[data-side="'+t+'"] .compare-slide-animation');if(i.hidden=!e||e.side!==t,e&&e.side===t){const s=e.elapsed<.6,r=s?e.elapsed/.6:Math.min(1,(e.elapsed-.6)/.6),a=i.querySelector(".mini-slide");a.style.transform="translateX("+(s?-r*190:(1-r)*190)+"px) rotate(-12deg)",a.style.opacity=String(s?1-r:r),a.querySelector("span").textContent=gi(s?e.fromTissue:e.toTissue),a.querySelector("i").style.background=(s?e.fromTissue:e.toTissue)==="inner"?"#d9dbb7":"#b786a5",i.querySelector("p").textContent=e.elapsed<.6?"移出旧装片":e.elapsed<1.2?"放入"+gi(e.toTissue)+"装片":"固定装片 · 回到同步起点"}}}function Bt(){const n=st.busy(),e=le.mode==="guided",t=st.sim,i=le.exchange,s=le.baselineViewing,r=n||!!i||s;i&&document.body.dataset.exchanging!=="true"&&innerWidth<=760&&window.scrollTo({top:0,behavior:"instant"}),Bu!==le.revision&&(Bu=le.revision,vr=0),document.body.dataset.phase=le.phase,document.body.dataset.solution=t.activeSolution,document.body.dataset.paused=String(le.paused||s||!!i),document.body.dataset.tissue=le.tissue,document.body.dataset.mode=le.mode,document.body.dataset.reference=String(s),document.body.dataset.exchanging=String(!!i),document.body.dataset.focused=String(Math.abs(le.focus)<.025),j("#watch-preparation").disabled=r,j("#skip-animation").hidden=!n,j("#transition-caption").hidden=!n,j("#focus-status").textContent=Math.abs(le.focus)<.025?"已对焦":Math.abs(le.focus)<.2?"接近清晰":"稍有离焦";for(const l of["coarse-focus","observe-focus"])document.activeElement!==j("#"+l)&&(j("#"+l).value=le.focus);Cn("[data-tissue]").forEach(l=>{l.disabled=r,l.setAttribute("aria-pressed",String(le.tissue===l.dataset.tissue))}),j("#specimen-name").textContent="洋葱鳞片叶 · "+gi(le.tissue),Cn(".magnification").forEach(l=>l.textContent=le.objective*le.eyepiece+"×"),j("#objective-select").value=le.objective,j("#eyepiece-select").value=le.eyepiece,j("#current-environment").textContent=Ci[t.activeSolution]+(["sucrose","dyed"].includes(t.activeSolution)?" · "+t.concentration+" g/mL":""),sv.update(le,r);const a=["sucrose","dyed"].includes(le.selectedSolution);j("#pending-caption").textContent="待加入："+Ci[le.selectedSolution]+(a?" · "+le.concentration+" g/mL":""),j("#mode-label").textContent=e?"主线演示":"拓展实验",j("#mode-guide").textContent=e?"主线：清水 → 蔗糖 → 清水":"自由换液 · 沿用当前细胞状态",j("#free-mode").textContent=e?"拓展实验 · 自由换液 ↗":"回到主线 · 清水重开",j("#add-solution").hidden=!1,j("#rinse").hidden=e,j(".chapter-track").hidden=!e;for(const l of["free-mode","rinse","compare-open"])j("#"+l).disabled=r;j("#add-solution").disabled=r||!st.canAddSelected(),j("#dose-hint").textContent=e&&!st.canAddSelected()&&!r?le.selectedSolution==="water"?"当前已在清水中。选择蔗糖开始处理。":"本轮蔗糖 "+le.protocolConcentration+" g/mL。选清水观察复原；其他浓度可重播再试或进入拓展实验。":"选瓶不会改变当前外液，点击加入后换液。";for(const l of["observe-focus","observe-autofocus"])j("#"+l).disabled=r;for(const l of["objective-select","eyepiece-select"])j("#"+l).disabled=n||!!i;j("#replay").disabled=n,j("#baseline-reference").hidden=le.phase!=="observing",j("#baseline-toggle").disabled=n||!!i,j("#baseline-toggle").setAttribute("aria-pressed",String(s)),j("#baseline-action").textContent=s?"返回当前观察":"查看清水初态",j("#baseline-label").textContent=gi(le.tissue)+" · 同一区域 · "+le.objective*le.eyepiece+"×",j("#baseline-badge").hidden=!s,j("#initial-observation-hint").hidden=!e||le.started||s,j("#structure-legend").hidden=!le.showLabels||le.phase!=="observing",j("#water-toggle").setAttribute("aria-pressed",String(le.showWater)),j("#labels-toggle").setAttribute("aria-pressed",String(le.showLabels)),Cn("[data-speed]").forEach(l=>l.setAttribute("aria-pressed",String(Number(l.dataset.speed)===le.speed))),j("#play-icon").textContent=le.paused||s||i?"▶":"Ⅱ",j("#play-text").textContent=s?"正在对照初态":i?"换液中…":le.started?le.paused?le.demoTime>=_n&&e?"再次演示":le.held&&le.demoTime===ci&&e&&t.activeSolution==="sucrose"?"继续 · 换清水":"继续":"暂停":e?"自动演示":"加入并开始",j("#play").disabled=r,j("#play").setAttribute("aria-pressed",String(!le.paused&&!s&&!i)),j("#demo-progress").disabled=!e||r,j("#demo-progress").hidden=!e,j("#free-progress-note").hidden=e,j("#progress-value").hidden=!e,j(".progress-block label").textContent=e?"演示进度":"连续观察",document.activeElement!==j("#demo-progress")&&(j("#demo-progress").value=le.demoTime),j("#progress-value").textContent=Math.round(le.demoTime/_n*100)+"%",j("#previous").disabled=!e||r,j("#next").disabled=!e||r;const o=Hh(),c=le.paused&&le.held&&le.demoTime===ci&&t.activeSolution==="sucrose";j("#step-title").textContent=e?c?"停下来，观察分离空间":o.title:le.started?Ci[t.activeSolution]+"中的细胞":"拓展实验 · 清水初态",j("#step-description").textContent=e?c?"原生质层已离壁。可选择清水并加入，或点击继续自动演示复原。":o.description:zh(t),s&&(j("#step-title").textContent="清水初态 · 同一区域参考",j("#step-description").textContent="当前处理状态与进度已保留。点击“返回当前观察”后，按原来的播放状态继续。"),i&&(j("#step-title").textContent="正在换入"+Ci[i.solution],j("#step-description").textContent="先看盖玻片下的引流过程，完成后继续观察同一组细胞。"),Cn("[data-chapter]").forEach(l=>{l.disabled=r,l.setAttribute("aria-current",e&&l.dataset.chapter===o.chapter?"step":"false")}),j("#seek-context").hidden=!(vr>performance.now()&&e&&!s&&!i&&le.phase==="observing"),j("#liquid-exchange").hidden=!(le.phase==="observing"&&i),i&&rv(i),le.comparing&&Zn()}function rv(n){const e=jl(n,le),t=n.committed?"applied":e.stage==="wicking"?"wick":"drop",i=j("#liquid-exchange");i.dataset.stage=t,i.dataset.solution=n.solution,i.dataset.first=String(n.first),j("#exchange-reagent").textContent=Ci[n.solution]+(["sucrose","dyed"].includes(n.solution)?" · "+n.concentration+" g/mL":""),j("#exchange-caption").textContent=["exiting","positioning"].includes(e.stage)?"准备换液 · 装片保持原位":t==="drop"?"① 从盖玻片一侧滴入":t==="wick"?"② 另一侧用吸水纸吸引":"③ 已换入"+Ci[n.solution],j("#exchange-detail").textContent=t==="drop"?"新溶液先接触盖玻片边缘。":t==="wick"?"液体沿盖玻片下方流过组织。":"换液完成后，继续观察细胞变化。",i.style.setProperty("--drop-progress",String(Math.max(0,Math.min(1,(n.elapsed-1.6)/1.2)))),i.style.setProperty("--flow-progress",String(e.replacementProgress)),i.style.setProperty("--paper-wet",String(e.replacementProgress)),i.style.setProperty("--tool-opacity",String(wn((n.elapsed-.7)/.5)*(1-wn((n.elapsed-4.32)/.88)))),i.querySelector(".exchange-drawing").hidden=!Ts,i.querySelector(".exchange-drawing").style.opacity=String(1-e.eyeVisibility)}const wn=n=>(n=Math.min(1,Math.max(0,n)),n*n*(3-2*n));function sc(){if(le.exchange&&innerWidth<=760){const M=innerHeight-j(".header").offsetHeight-j("#chapters").offsetHeight-j("#transport").offsetHeight;document.documentElement.style.setProperty("--exchange-stage-height",Math.max(280,M)+"px")}const n=j("#workspace").getBoundingClientRect(),e=n.width,t=n.height,i=e<=760,s=e>=1700?380:e<=1050?338:366,r=le.phase==="entering",a=r&&!i?t-j("#transport").getBoundingClientRect().height-j("#chapters").getBoundingClientRect().height:t,o=i?Math.min(e*.88,innerHeight*.53):Math.max(180,Math.min(a-98,e-s-65,950)),c=i?Math.min(e-70,250):Math.max(180,Math.min(290,t*.4)),l={size:c,x:i?(e-c)/2:e-c-38,y:i?20:28},u={size:o,x:i?(e-o)/2:(e-s-o)/2,y:(i?20:Math.max(20,(a-o)/2-10))+(r?j("#chapters").getBoundingClientRect().height:0)};let f=le.phase==="observing"?1:0,h=1;const d=le.transition;if(le.phase==="entering"&&(f=wn(d.elapsed/d.duration)),document.documentElement.style.setProperty("--enter-progress",r?String(f):"1"),le.phase==="swapping"&&(d.elapsed<.4?(f=1-wn(d.elapsed/.4),h=1-wn(d.elapsed/.4)):d.elapsed<2?(f=0,h=0):(f=wn((d.elapsed-2)/1),h=wn((d.elapsed-2)/.4))),le.exchange){const M=jl(le.exchange,le);f=M.eyeVisibility,h=M.eyeVisibility}const _=j("#eye-shell");_.style.setProperty("--eye-size",l.size+(u.size-l.size)*f+"px"),_.style.setProperty("--eye-x",l.x+(u.x-l.x)*f+"px"),_.style.setProperty("--eye-y",l.y+(u.y-l.y)*f+"px"),_.style.setProperty("--eye-opacity",h),j("#instrument").style.opacity=le.phase==="entering"?String(1-wn(d.elapsed/d.duration)*.85):"1",d&&(document.documentElement.style.setProperty("--animation-progress",Math.min(100,d.elapsed/d.duration*100)+"%"),j("#transition-step").textContent=d.type==="preparing"?d.elapsed<2?"载玻片就位":d.elapsed<3.6?"滴清水":d.elapsed<4.55?"夹住一角 · 揭取表皮":d.elapsed<5.55?"移入清水":d.elapsed<7.05?"轻轻展平表皮":d.elapsed<8.45?"夹住盖片 · 一侧先接触":d.elapsed<10?"缓缓盖下 · 松开镊子":d.elapsed<13?"放上载物台":"低倍物镜就位":d.type==="entering"?"进入目镜视野":d.elapsed<.4?"正在更换为"+gi(d.toTissue):d.elapsed<1.2?"松开压片夹 · 移出旧装片":d.elapsed<2?"放入"+gi(d.toTissue)+"装片":"固定装片 · 进入新视野"),j("#fallback-scene").hidden=!(Ts&&["preparing","swapping"].includes(le.phase)),Ts&&d&&["preparing","swapping"].includes(d.type)&&av(d)}function av(n){const e=j("#fallback-scene"),t=e.querySelector(".flat-stage");t.dataset.mode=n.type;const i=j(".flat-slide.old"),s=j(".flat-slide.incoming"),r=j(".flat-cover"),a=j(".flat-drop"),o=n.fromTissue||le.tissue,c=n.toTissue||le.tissue;if(i.querySelector("span").textContent=gi(o),s.querySelector("span").textContent=gi(c),i.querySelector("i").style.background=o==="inner"?"#d5dbb7bb":"#a37a96bb",s.querySelector("i").style.background=c==="inner"?"#d5dbb7bb":"#a37a96bb",n.type==="swapping"){for(const f of[i,s,r,a])f.removeAttribute("style");i.querySelector("i").style.opacity="1",e.querySelector("p").textContent="载物台近景";const l=wn((n.elapsed-.4)/.8),u=wn((n.elapsed-1.2)/.8);i.style.transform="translateX("+-l*650+"px)",i.style.opacity=String(1-l),s.style.transform="translateX("+(1-u)*650+"px)",s.style.opacity=String(u),r.hidden=!0,a.hidden=!0,Cn(".flat-clip").forEach(f=>f.style.transform="translateY("+-25*Math.sin(Math.min(1,n.elapsed/2)*Math.PI)+"px)")}else tv(e,n,le)}const Zh=new ResizeObserver(()=>sc());Zh.observe(j("#workspace"));$h();zi();function rc(n){if(nc)return;const e=Math.min(.25,Math.max(0,(n-La)/1e3));La=n,st.tick(e),le.comparing&&wt.tick(e,le.speed);const t=[le.phase,le.revision,le.paused,st.sim.activeSolution,Hh().id,wt.state.transition?.committed,wt.state.tissues.a,wt.state.tissues.b].join(":");if((t!==Ou||n-Fu>100)&&(Bt(),Ou=t,Fu=n),sc(),Es&&(le.phase!=="observing"||le.exchange))try{Es.update(_a(),e)}catch{ga()}if(["welcome","preparing"].includes(le.phase)||Ei.main.render(le.baselineViewing?zu():_a()),le.phase==="observing"&&(Ei.baseline||(Ei.baseline=pa(j("#baseline-canvas"))),Ei.baseline.render(zu())),le.comparing){for(const i of["a","b"])Ei[i].render({..._a(wt.sims[i],wt.state.tissues[i]),focus:0});wt.state.transition&&Zn()}ma&&n>=ma&&(j("#toast").classList.remove("visible"),ma=0),Ba=requestAnimationFrame(rc)}document.addEventListener("visibilitychange",()=>{La=performance.now()});window.addEventListener("pagehide",n=>{cancelAnimationFrame(Ba),!n.persisted&&(nc=!0,Zh.disconnect(),Es?.dispose(),Object.values(Ei).forEach(e=>e.dispose()))});window.addEventListener("pageshow",n=>{n.persisted&&!nc&&(La=performance.now(),Ba=requestAnimationFrame(rc))});new URLSearchParams(location.search).has("qa")&&Object.defineProperty(window,"__lab",{value:Object.freeze({inspect:()=>structuredClone({state:le,sim:st.sim,baseline:st.baseline,comparison:{state:wt.state,sims:wt.sims},field:Uh(le.objective,le.eyepiece),renderer:Ts?"2d":"3d"})})});Ba=requestAnimationFrame(rc);
