(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const el="186",ih=0,Ul=1,rh=2,ks=1,Qc=2,Lr=3,vi=0,Kt=1,hn=2,Hn=0,Ur=1,Fl=2,Ol=3,Bl=4,sh=5,Qi=100,ah=101,oh=102,lh=103,ch=104,uh=200,hh=201,fh=202,dh=203,jc=204,eu=205,ph=206,mh=207,gh=208,_h=209,xh=210,vh=211,Mh=212,Sh=213,yh=214,io=0,ro=1,so=2,Vr=3,ao=4,oo=5,lo=6,co=7,tl=0,bh=1,Eh=2,Rn=0,tu=1,nu=2,iu=3,nl=4,ru=5,su=6,au=7,ou=300,Mi=301,ar=302,_a=303,xa=304,ha=306,uo=1e3,Gn=1001,ho=1002,Gt=1003,Th=1004,us=1005,Wt=1006,va=1007,mi=1008,sn=1009,lu=1010,cu=1011,Wr=1012,il=1013,Pn=1014,_n=1015,Ln=1016,rl=1017,sl=1018,Xr=1020,uu=35902,hu=35899,fu=1021,du=1022,xn=1023,Xn=1026,gi=1027,al=1028,ol=1029,Si=1030,ll=1031,cl=1033,Hs=33776,Vs=33777,Ws=33778,Xs=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,xo=37492,vo=37496,Mo=37488,So=37489,Js=37490,yo=37491,bo=37808,Eo=37809,To=37810,Ao=37811,wo=37812,Ro=37813,Co=37814,Po=37815,Lo=37816,Io=37817,Do=37818,No=37819,Uo=37820,Fo=37821,Oo=36492,Bo=36494,zo=36495,Go=36283,ko=36284,Qs=36285,Ho=36286,Ah=3200,js=0,wh=1,si="",$t="srgb",ea="srgb-linear",ta="linear",_t="srgb",Ma=7680,Rh=519,Ch=512,Ph=513,Lh=514,ul=515,Ih=516,Dh=517,hl=518,Nh=519,Uh=35044,zl="300 es",An=2e3,qr=2001;function Fh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Oh(){const n=na("canvas");return n.style.display="block",n}const Gl={};function kl(...n){const e="THREE."+n.shift();console.log(e,...n)}function pu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=pu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ft(...n){n=pu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function nr(...n){const e=n.join(" ");e in Gl||(Gl[e]=!0,$e(...n))}function Bh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const zh={[io]:ro,[so]:lo,[ao]:co,[Vr]:oo,[ro]:io,[lo]:so,[co]:ao,[oo]:Vr};class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const ir=Math.PI/180,Yr=180/Math.PI;function wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function fl(n,e){return(n%e+e)%e}function Gh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kh(n,e,t){return n!==e?(t-n)/(e-n):0}function Fr(n,e,t){return(1-t)*n+t*e}function Hh(n,e,t,i){return Fr(n,e,1-Math.exp(-t*i))}function Vh(n,e=1){return e-Math.abs(fl(n,e*2)-e)}function Wh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yh(n,e){return n+Math.random()*(e-n)}function Zh(n){return n*(.5-Math.random())}function $h(n){n!==void 0&&(Hl=n);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kh(n){return n*ir}function Jh(n){return n*Yr}function Qh(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function jh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),p=s((e-i)/2),h=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*p,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*p,o*l);break;case"ZXZ":n.set(c*p,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*d,o*l);break;case"YXY":n.set(c*d,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*d,o*u,o*l);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ni={DEG2RAD:ir,RAD2DEG:Yr,generateUUID:wi,clamp:rt,euclideanModulo:fl,mapLinear:Gh,inverseLerp:kh,lerp:Fr,damp:Hh,pingpong:Vh,smoothstep:Wh,smootherstep:Xh,randInt:qh,randFloat:Yh,randFloatSpread:Zh,seededRandom:$h,degToRad:Kh,radToDeg:Jh,isPowerOfTwo:Qh,ceilPowerOfTwo:jh,floorPowerOfTwo:ef,setQuaternionFromProperEuler:tf,normalize:Yt,denormalize:ji},Cl=class Cl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cl.prototype.isVector2=!0;let de=Cl;class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],p=i[r+3],h=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(p!==v||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+p*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);f=Math.sin(f*S)/w,o=Math.sin(o*S)/w,c=c*f+h*o,l=l*f+d*o,u=u*f+g*o,p=p*f+v*o}else{c=c*f+h*o,l=l*f+d*o,u=u*f+g*o,p=p*f+v*o;const S=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=S,l*=S,u*=S,p*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],p=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*p+c*d-l*h,e[t+1]=c*g+u*h+l*p-o*d,e[t+2]=l*g+u*d+o*h-c*p,e[t+3]=u*g-o*p-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),p=o(s/2),h=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"YXZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"ZXY":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"ZYX":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"YZX":this._x=h*u*p+l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p-h*d*g;break;case"XZY":this._x=h*u*p-l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p+h*d*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],h=i+o+p;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pl=class Pl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+c*l+a*p-o*u,this.y=i+c*u+o*l-s*p,this.z=r+c*p+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pl.prototype.isVector3=!0;let U=Pl;const Sa=new U,Vl=new ur,Ll=class Ll{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],p=i[7],h=i[2],d=i[5],g=i[8],v=r[0],m=r[3],f=r[6],S=r[1],w=r[4],y=r[7],b=r[2],E=r[5],R=r[8];return s[0]=a*v+o*S+c*b,s[3]=a*m+o*w+c*E,s[6]=a*f+o*y+c*R,s[1]=l*v+u*S+p*b,s[4]=l*m+u*w+p*E,s[7]=l*f+u*y+p*R,s[2]=h*v+d*S+g*b,s[5]=h*m+d*w+g*E,s[8]=h*f+d*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,h=o*c-u*s,d=l*s-a*c,g=t*p+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ya.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ll.prototype.isMatrix3=!0;let et=Ll;const ya=new et,Wl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){const n={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ea]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const ut=nf();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ui;class rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ui===void 0&&(Ui=na("canvas")),Ui.width=e.width,Ui.height=e.height;const r=Ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ui}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class dl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ba(r[a].image)):s.push(ba(r[a]))}else s=ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let af=0;const Ea=new U;class Xt extends Ai{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Gn,r=Gn,s=Wt,a=mi,o=xn,c=sn,l=Xt.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=wi(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=ou;Xt.DEFAULT_ANISOTROPY=1;const Il=class Il{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],p=c[8],h=c[1],d=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(d+1)/2,b=(f+1)/2,E=(u+h)/4,R=(p+v)/4,_=(g+m)/4;return w>y&&w>b?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=E/i,s=R/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=_/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(p-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Il.prototype.isVector4=!0;let Tt=Il;class of extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Xt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends of{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mu extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ua=class ua{constructor(e,t,i,r,s,a,o,c,l,u,p,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,p,h,d,g,v,m)}set(e,t,i,r,s,a,o,c,l,u,p,h,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ua().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*p,g=o*u,v=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=d+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*p,g=l*u,v=l*p;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*p,g=l*u,v=l*p;t[0]=h-v*o,t[4]=-a*p,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*p,g=o*u,v=o*p;t[0]=c*u,t[4]=g*l-d,t[8]=h*l+v,t[1]=c*p,t[5]=v*l+h,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*p,t[8]=g*p+d,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*p+g,t[10]=h-v*p}else if(e.order==="XZY"){const h=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=h*p+v,t[5]=a*u,t[9]=d*p-g,t[2]=g*p-d,t[6]=o*u,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,uf)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Qn.crossVectors(i,jt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Qn.crossVectors(i,jt)),Qn.normalize(),hs.crossVectors(jt,Qn),r[0]=Qn.x,r[4]=hs.x,r[8]=jt.x,r[1]=Qn.y,r[5]=hs.y,r[9]=jt.y,r[2]=Qn.z,r[6]=hs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],p=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],w=i[7],y=i[11],b=i[15],E=r[0],R=r[4],_=r[8],T=r[12],C=r[1],P=r[5],I=r[9],k=r[13],D=r[2],F=r[6],$=r[10],B=r[14],j=r[3],G=r[7],q=r[11],Z=r[15];return s[0]=a*E+o*C+c*D+l*j,s[4]=a*R+o*P+c*F+l*G,s[8]=a*_+o*I+c*$+l*q,s[12]=a*T+o*k+c*B+l*Z,s[1]=u*E+p*C+h*D+d*j,s[5]=u*R+p*P+h*F+d*G,s[9]=u*_+p*I+h*$+d*q,s[13]=u*T+p*k+h*B+d*Z,s[2]=g*E+v*C+m*D+f*j,s[6]=g*R+v*P+m*F+f*G,s[10]=g*_+v*I+m*$+f*q,s[14]=g*T+v*k+m*B+f*Z,s[3]=S*E+w*C+y*D+b*j,s[7]=S*R+w*P+y*F+b*G,s[11]=S*_+w*I+y*$+b*q,s[15]=S*T+w*k+y*B+b*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15],S=c*d-l*h,w=o*d-l*p,y=o*h-c*p,b=a*d-l*u,E=a*h-c*u,R=a*p-o*u;return t*(v*S-m*w+f*y)-i*(g*S-m*b+f*E)+r*(g*w-v*b+f*R)-s*(g*y-v*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=t*o-i*a,w=t*c-r*a,y=t*l-s*a,b=i*c-r*o,E=i*l-s*o,R=r*l-s*c,_=u*v-p*g,T=u*m-h*g,C=u*f-d*g,P=p*m-h*v,I=p*f-d*v,k=h*f-d*m,D=S*k-w*I+y*P+b*C-E*T+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/D;return e[0]=(o*k-c*I+l*P)*F,e[1]=(r*I-i*k-s*P)*F,e[2]=(v*R-m*E+f*b)*F,e[3]=(h*E-p*R-d*b)*F,e[4]=(c*C-a*k-l*T)*F,e[5]=(t*k-r*C+s*T)*F,e[6]=(m*y-g*R-f*w)*F,e[7]=(u*R-h*y+d*w)*F,e[8]=(a*I-o*C+l*_)*F,e[9]=(i*C-t*I-s*_)*F,e[10]=(g*E-v*y+f*S)*F,e[11]=(p*y-u*E-d*S)*F,e[12]=(o*T-a*P-c*_)*F,e[13]=(t*P-i*T+r*_)*F,e[14]=(v*w-g*b-m*S)*F,e[15]=(u*b-p*w+h*S)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,p=o+o,h=s*l,d=s*u,g=s*p,v=a*u,m=a*p,f=o*p,S=c*l,w=c*u,y=c*p,b=i.x,E=i.y,R=i.z;return r[0]=(1-(v+f))*b,r[1]=(d+y)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(d-y)*E,r[5]=(1-(h+f))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(g+w)*R,r[9]=(m-S)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Fi.set(r[0],r[1],r[2]).length();const o=Fi.set(r[4],r[5],r[6]).length(),c=Fi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),pn.copy(this);const l=1/a,u=1/o,p=1/c;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=p,pn.elements[9]*=p,pn.elements[10]*=p,t.setFromRotationMatrix(pn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=An,c=!1){const l=this.elements,u=2*s/(t-e),p=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===An)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===qr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,c=!1){const l=this.elements,u=2/(t-e),p=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===An)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===qr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ua.prototype.isMatrix4=!0;let Mt=ua;const Fi=new U,pn=new Mt,cf=new U(0,0,0),uf=new U(1,1,1),Qn=new U,hs=new U,jt=new U,ql=new Mt,Yl=new ur;class qn{constructor(e=0,t=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],p=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hf=0;const Zl=new U,Oi=new ur,Nn=new Mt,fs=new U,xr=new U,ff=new U,df=new ur,$l=new U(1,0,0),Kl=new U(0,1,0),Jl=new U(0,0,1),Ql={type:"added"},pf={type:"removed"},Bi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Ut extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new U,t=new qn,i=new ur,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new et}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fs.copy(e):fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(xr,fs,this.up):Nn.lookAt(fs,xr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ql),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ql),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.DEFAULT_UP=new U(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mf={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=fl(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wa(a,s,e+1/3),this.g=wa(a,s,e),this.b=wa(a,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ut.workingToColorSpace(Vt.copy(this),e),Math.round(rt(Vt.r*255,0,255))*65536+Math.round(rt(Vt.g*255,0,255))*256+Math.round(rt(Vt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=$t){ut.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(ds);const i=Fr(jn.h,ds.h,t),r=Fr(jn.s,ds.s,t),s=Fr(jn.l,ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new tt;tt.NAMES=gu;class ml{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _u extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new U,Un=new U,Ra=new U,Fn=new U,zi=new U,Gi=new U,jl=new U,Ca=new U,Pa=new U,La=new U,Ia=new Tt,Da=new Tt,Na=new Tt;class fn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mn.subVectors(r,t),Un.subVectors(i,t),Ra.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Un),c=mn.dot(Ra),l=Un.dot(Un),u=Un.dot(Ra),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ia.setScalar(0),Da.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,i),Na.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ia,s.x),a.addScaledVector(Da,s.y),a.addScaledVector(Na,s.z),a}static isFrontFacing(e,t,i,r){return mn.subVectors(i,t),Un.subVectors(e,t),mn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;zi.subVectors(r,i),Gi.subVectors(s,i),Ca.subVectors(e,i);const c=zi.dot(Ca),l=Gi.dot(Ca);if(c<=0&&l<=0)return t.copy(i);Pa.subVectors(e,r);const u=zi.dot(Pa),p=Gi.dot(Pa);if(u>=0&&p<=u)return t.copy(r);const h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(zi,a);La.subVectors(e,s);const d=zi.dot(La),g=Gi.dot(La);if(g>=0&&d<=g)return t.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Gi,o);const m=u*g-d*p;if(m<=0&&p-u>=0&&d-g>=0)return jl.subVectors(s,r),o=(p-u)/(p-u+(d-g)),t.copy(r).addScaledVector(jl,o);const f=1/(m+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(zi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ri{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),ms.subVectors(this.max,vr),ki.subVectors(e.a,vr),Hi.subVectors(e.b,vr),Vi.subVectors(e.c,vr),ei.subVectors(Hi,ki),ti.subVectors(Vi,Hi),ui.subVectors(ki,Vi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-ui.z,ui.y,ei.z,0,-ei.x,ti.z,0,-ti.x,ui.z,0,-ui.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-ui.y,ui.x,0];return!Ua(t,ki,Hi,Vi,ms)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,ki,Hi,Vi,ms))?!1:(gs.crossVectors(ei,ti),t=[gs.x,gs.y,gs.z],Ua(t,ki,Hi,Vi,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new U,new U,new U,new U,new U,new U,new U,new U],gn=new U,ps=new Ri,ki=new U,Hi=new U,Vi=new U,ei=new U,ti=new U,ui=new U,vr=new U,ms=new U,gs=new U,hi=new U;function Ua(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hi.fromArray(n,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const It=new U,_s=new de;let gf=0;class Cn extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uh,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class xu extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vu extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _f=new Ri,Mr=new U,Fa=new U;class hr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_f.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Fa)),this.expandByPoint(Mr.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xf=0;const on=new Mt,Oa=new Ut,Wi=new U,en=new Ri,Sr=new Ri,Bt=new U;class wt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?vu:xu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(en.min,Sr.min),en.expandByPoint(Bt),Bt.addVectors(en.max,Sr.max),en.expandByPoint(Bt)):(en.expandByPoint(Sr.min),en.expandByPoint(Sr.max))}en.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Bt.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(e,l),Bt.add(Wi)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new U,c[_]=new U;const l=new U,u=new U,p=new U,h=new de,d=new de,g=new de,v=new U,m=new U;function f(_,T,C){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,T),p.fromBufferAttribute(i,C),h.fromBufferAttribute(s,_),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(l),p.sub(l),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(P),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[_].add(v),o[T].add(v),o[C].add(v),c[_].add(m),c[T].add(m),c[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,T=S.length;_<T;++_){const C=S[_],P=C.start,I=C.count;for(let k=P,D=P+I;k<D;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new U,y=new U,b=new U,E=new U;function R(_){b.fromBufferAttribute(r,_),E.copy(b);const T=o[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(E,T);const P=y.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,T=S.length;_<T;++_){const C=S[_],P=C.start,I=C.count;for(let k=P,D=P+I;k<D;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,p=new U;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[d++]}return new Cn(h,u,p)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,p=l.length;u<p;u++){const h=l[u],d=e(h,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){const d=l[p];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],p=s[l];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new U,vf=new U,Mf=new et;class ii{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ba.subVectors(i,t).cross(vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Ba),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mf.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Sf=0;class Ci extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Ur,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=eu,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ii().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bn=new U,za=new U,xs=new U,vs=new U;class gl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){za.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(za);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xs),o=vs.dot(this.direction),c=-vs.dot(xs),l=vs.lengthSq(),u=Math.abs(1-a*a);let p,h,d,g;if(u>0)if(p=a*c-o,h=a*o-c,g=s*u,p>=0)if(h>=-g)if(h<=g){const v=1/u;p*=v,h*=v,d=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=s,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h=-s,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h<=-g?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-c),s),d=-p*p+h*(h+2*c)+l):h<=g?(p=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-c),s),d=-p*p+h*(h+2*c)+l);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(za).addScaledVector(xs,h),d}intersectSphere(e,t){if(e.radius<0)return null;Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,f=i.x-a.x,S=i.y-a.y,w=i.z-a.z,y=Math.abs(c),b=Math.abs(l),E=Math.abs(u);let R,_,T,C,P,I,k,D,F,$,B,j;if(y>=b&&y>=E?(T=c,I=p,F=g,j=f,c>=0?(R=l,_=u,C=h,P=d,k=v,D=m,$=S,B=w):(R=u,_=l,C=d,P=h,k=m,D=v,$=w,B=S)):b>=E?(T=l,I=h,F=v,j=S,l>=0?(R=u,_=c,C=d,P=p,k=m,D=g,$=w,B=f):(R=c,_=u,C=p,P=d,k=g,D=m,$=f,B=w)):(T=u,I=d,F=m,j=w,u>=0?(R=c,_=l,C=p,P=h,k=g,D=v,$=f,B=S):(R=l,_=c,C=h,P=p,k=v,D=g,$=S,B=f)),T===0)return null;const G=R/T,q=_/T,Z=1/T,pe=C-G*I,ge=P-q*I,Qe=k-G*F,Ye=D-q*F,Ke=$-G*j,K=B-q*j,te=Ke*Ye-K*Qe,_e=pe*K-ge*Ke,ke=Qe*ge-Ye*pe;if(r){if(te<0||_e<0||ke<0)return null}else if((te<0||_e<0||ke<0)&&(te>0||_e>0||ke>0))return null;const Ce=te+_e+ke;if(Ce===0)return null;const Ze=Z*(te*I+_e*F+ke*j);return(Ce>0?Ze<0:Ze>0)?null:this.at(Ze/Ce,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ai extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ec=new Mt,fi=new gl,Ms=new hr,tc=new U,Ss=new U,ys=new U,bs=new U,Ga=new U,Es=new U,nc=new U,Ts=new U;class Dt extends Ut{constructor(e=new wt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Es.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],p=s[c];u!==0&&(Ga.fromBufferAttribute(p,e),a?Es.addScaledVector(Ga,u):Es.addScaledVector(Ga.sub(t),u))}t.add(Es)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(Ms.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ms,tc)===null||fi.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(s).invert(),fi.copy(e.ray).applyMatrix4(ec),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,b=w;y<b;y+=3){const E=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);r=As(this,f,e,i,l,u,p,E,R,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const S=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=As(this,a,e,i,l,u,p,S,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,b=w;y<b;y+=3){const E=y,R=y+1,_=y+2;r=As(this,f,e,i,l,u,p,E,R,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const S=m,w=m+1,y=m+2;r=As(this,a,e,i,l,u,p,S,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yf(n,e,t,i,r,s,a,o){let c;if(e.side===Kt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===vi,o),c===null)return null;Ts.copy(o),Ts.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ts);return l<t.near||l>t.far?null:{distance:l,point:Ts.clone(),object:n}}function As(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ss),n.getVertexPosition(c,ys),n.getVertexPosition(l,bs);const u=yf(n,e,t,i,Ss,ys,bs,nc);if(u){const p=new U;fn.getBarycoord(nc,Ss,ys,bs,p),r&&(u.uv=fn.getInterpolatedAttribute(r,o,c,l,p,new de)),s&&(u.uv1=fn.getInterpolatedAttribute(s,o,c,l,p,new de)),a&&(u.normal=fn.getInterpolatedAttribute(a,o,c,l,p,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new U,materialIndex:0};fn.getNormal(Ss,ys,bs,h.normal),u.face=h,u.barycoord=p}return u}class Mu extends Xt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Gt,u=Gt,p,h){super(null,a,o,c,l,u,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends Cn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new Mt,rc=new Mt,ws=[],sc=new Ri,bf=new Mt,yr=new Dt,br=new hr;class Ef extends Dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,bf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xi),sc.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xi),br.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(i),e.ray.intersectsSphere(br)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xi),rc.multiplyMatrices(i,Xi),yr.matrixWorld=rc,yr.raycast(e,ws);for(let a=0,o=ws.length;a<o;a++){const c=ws[a];c.instanceId=s,c.object=this,t.push(c)}ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mu(new Float32Array(r*this.count),r,this.count,al,_n));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const di=new hr,Tf=new de(.5,.5),Rs=new U;class _l{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,a=new ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],p=s[5],h=s[6],d=s[7],g=s[8],v=s[9],m=s[10],f=s[11],S=s[12],w=s[13],y=s[14],b=s[15];if(r[0].setComponents(l-a,d-u,f-g,b-S).normalize(),r[1].setComponents(l+a,d+u,f+g,b+S).normalize(),r[2].setComponents(l+o,d+p,f+v,b+w).normalize(),r[3].setComponents(l-o,d-p,f-v,b-w).normalize(),i)r[4].setComponents(c,h,m,y).normalize(),r[5].setComponents(l-c,d-h,f-m,b-y).normalize();else if(r[4].setComponents(l-c,d-h,f-m,b-y).normalize(),t===An)r[5].setComponents(l+c,d+h,f+m,b+y).normalize();else if(t===qr)r[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=Tf.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Rs.x=r.normal.x>0?e.max.x:e.min.x,Rs.y=r.normal.y>0?e.max.y:e.min.y,Rs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yi extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new U,ra=new U,ac=new Mt,Er=new gl,Cs=new hr,ka=new U,oc=new U;class sa extends Ut{constructor(e=new wt,t=new yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ia.fromBufferAttribute(t,r-1),ra.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ia.distanceTo(ra);e.setAttribute("lineDistance",new pt(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;ac.copy(r).invert(),Er.copy(e.ray).applyMatrix4(ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){const f=u.getX(v),S=u.getX(v+1),w=Ps(this,e,Er,c,f,S,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),f=Ps(this,e,Er,c,v,m,g-1);f&&t.push(f)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){const f=Ps(this,e,Er,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Ps(this,e,Er,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ps(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ia.fromBufferAttribute(o,r),ra.fromBufferAttribute(o,s),t.distanceSqToSegment(ia,ra,ka,oc)>i)return;ka.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ka);if(!(l<e.near||l>e.far))return{distance:l,point:oc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const lc=new U,cc=new U;class Vo extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)lc.fromBufferAttribute(t,r),cc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lc.distanceTo(cc);e.setAttribute("lineDistance",new pt(i,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Su extends Xt{constructor(e=[],t=Mi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends Xt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zr extends Xt{constructor(e,t,i=Pn,r,s,a,o=Gt,c=Gt,l,u=Xn,p=1){if(u!==Xn&&u!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Af extends Zr{constructor(e,t=Pn,i=Mi,r,s,a=Gt,o=Gt,c,l=Xn){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bu extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yn extends wt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],p=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function g(v,m,f,S,w,y,b,E,R,_,T){const C=y/R,P=b/_,I=y/2,k=b/2,D=E/2,F=R+1,$=_+1;let B=0,j=0;const G=new U;for(let q=0;q<$;q++){const Z=q*P-k;for(let pe=0;pe<F;pe++){const ge=pe*C-I;G[v]=ge*S,G[m]=Z*w,G[f]=D,l.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[f]=E>0?1:-1,u.push(G.x,G.y,G.z),p.push(pe/R),p.push(1-q/_),B+=1}}for(let q=0;q<_;q++)for(let Z=0;Z<R;Z++){const pe=h+Z+F*q,ge=h+Z+F*(q+1),Qe=h+(Z+1)+F*(q+1),Ye=h+(Z+1)+F*q;c.push(pe,ge,Ye),c.push(ge,Qe,Ye),j+=6}o.addGroup(d,j,T),d+=j,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fa extends wt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new U,u=new de;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const d=i+p/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class li extends wt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],d=[];let g=0;const v=[],m=i/2;let f=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function S(){const y=new U,b=new U;let E=0;const R=(t-e)/i;for(let _=0;_<=s;_++){const T=[],C=_/s,P=C*(t-e)+e;for(let I=0;I<=r;I++){const k=I/r,D=k*c+o,F=Math.sin(D),$=Math.cos(D);b.x=P*F,b.y=-C*i+m,b.z=P*$,p.push(b.x,b.y,b.z),y.set(F,R,$).normalize(),h.push(y.x,y.y,y.z),d.push(k,1-C),T.push(g++)}v.push(T)}for(let _=0;_<r;_++)for(let T=0;T<s;T++){const C=v[T][_],P=v[T+1][_],I=v[T+1][_+1],k=v[T][_+1];(e>0||T!==0)&&(u.push(C,P,k),E+=3),(t>0||T!==s-1)&&(u.push(P,I,k),E+=3)}l.addGroup(f,E,0),f+=E}function w(y){const b=g,E=new de,R=new U;let _=0;const T=y===!0?e:t,C=y===!0?1:-1;for(let I=1;I<=r;I++)p.push(0,m*C,0),h.push(0,C,0),d.push(.5,.5),g++;const P=g;for(let I=0;I<=r;I++){const D=I/r*c+o,F=Math.cos(D),$=Math.sin(D);R.x=T*$,R.y=m*C,R.z=T*F,p.push(R.x,R.y,R.z),h.push(0,C,0),E.x=F*.5+.5,E.y=$*.5*C+.5,d.push(E.x,E.y),g++}for(let I=0;I<r;I++){const k=b+I,D=P+I;y===!0?u.push(D,D+1,k):u.push(D+1,D,k),_+=3}l.addGroup(f,_,y===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ls=new U,Is=new U,Ha=new U,Ds=new fn;class uc extends wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ir*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],p=new Array(3),h={},d=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:f}=Ds;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Ds.getNormal(Ha),p[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let S=0;S<3;S++){const w=(S+1)%3,y=p[S],b=p[w],E=Ds[u[S]],R=Ds[u[w]],_=`${y}_${b}`,T=`${b}_${y}`;T in h&&h[T]?(Ha.dot(h[T].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(R.x,R.y,R.z)),h[T]=null):_ in h||(h[_]={index0:l[S],index1:l[w],normal:Ha.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];Ls.fromBufferAttribute(o,v),Is.fromBufferAttribute(o,m),d.push(Ls.x,Ls.y,Ls.z),d.push(Is.x,Is.y,Is.z)}this.setAttribute("position",new pt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new de:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,r=[],s=[],a=[],o=new U,c=new Mt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),p=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),p<=l&&(l=p,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(rt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(rt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xl extends Dn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*p+this.aX,l=h*p+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wf extends xl{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vl(){let n=0,e=0,t=0,i=0;function r(s,a,o,c){n=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,p){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+p)+(c-o)/p;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const hc=new U,fc=new U,Va=new vl,Wa=new vl,Xa=new vl;class Rf extends Dn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(fc.subVectors(r[0],r[1]).add(r[0]),l=fc);const p=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(hc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=hc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Va.initNonuniformCatmullRom(l.x,p.x,h.x,u.x,g,v,m),Wa.initNonuniformCatmullRom(l.y,p.y,h.y,u.y,g,v,m),Xa.initNonuniformCatmullRom(l.z,p.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,p.x,h.x,u.x,this.tension),Wa.initCatmullRom(l.y,p.y,h.y,u.y,this.tension),Xa.initCatmullRom(l.z,p.z,h.z,u.z,this.tension));return i.set(Va.calc(c),Wa.calc(c),Xa.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dc(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+s+a)*c+(-3*t+3*i-2*s-a)*o+s*n+t}function Cf(n,e){const t=1-n;return t*t*e}function Pf(n,e){return 2*(1-n)*n*e}function Lf(n,e){return n*n*e}function Or(n,e,t,i){return Cf(n,e)+Pf(n,t)+Lf(n,i)}function If(n,e){const t=1-n;return t*t*t*e}function Df(n,e){const t=1-n;return 3*t*t*n*e}function Nf(n,e){return 3*(1-n)*n*n*e}function Uf(n,e){return n*n*n*e}function Br(n,e,t,i,r){return If(n,e)+Df(n,t)+Nf(n,i)+Uf(n,r)}class Eu extends Dn{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Br(e,r.x,s.x,a.x,o.x),Br(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ff extends Dn{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Br(e,r.x,s.x,a.x,o.x),Br(e,r.y,s.y,a.y,o.y),Br(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tu extends Dn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Of extends Dn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Au extends Dn{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Or(e,r.x,s.x,a.x),Or(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bf extends Dn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Or(e,r.x,s.x,a.x),Or(e,r.y,s.y,a.y),Or(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wu extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(dc(o,c.x,l.x,u.x,p.x),dc(o,c.y,l.y,u.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var Wo=Object.freeze({__proto__:null,ArcCurve:wf,CatmullRomCurve3:Rf,CubicBezierCurve:Eu,CubicBezierCurve3:Ff,EllipseCurve:xl,LineCurve:Tu,LineCurve3:Of,QuadraticBezierCurve:Au,QuadraticBezierCurve3:Bf,SplineCurve:wu});class zf extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Wo[r.type]().fromJSON(r))}return this}}class Xo extends zf{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Tu(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Au(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new Eu(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new wu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,a,o,c),this}absellipse(e,t,i,r,s,a,o,c){const l=new xl(e,t,i,r,s,a,o,c);if(this.curves.length>0){const p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class aa extends Xo{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Xo().fromJSON(r))}return this}}function Gf(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Ru(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=Xf(n,e,s,t)),n.length>80*t){o=n[0],c=n[1];let u=o,p=c;for(let h=t;h<r;h+=t){const d=n[h],g=n[h+1];d<o&&(o=d),g<c&&(c=g),d>u&&(u=d),g>p&&(p=g)}l=Math.max(u-o,p-c),l=l!==0?32767/l:0}return $r(s,a,t,o,c,l,0),a}function Ru(n,e,t,i,r){let s;if(r===nd(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=pc(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=pc(a/i|0,n[a],n[a+1],s);return s&&or(s,s.next)&&(Jr(s),s=s.next),s}function bi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(or(t,t.next)||At(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $r(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Kf(n,i,r,s);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Hf(n,i,r,s):kf(n)){e.push(c.i,n.i,l.i),Jr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Vf(bi(n),e),$r(n,e,t,i,r,s,2)):a===2&&Wf(n,e,t,i,r,s):$r(bi(n),e,t,i,r,s,1);break}}}function kf(n){const e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(r,s,a),p=Math.min(o,c,l),h=Math.max(r,s,a),d=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=p&&g.y<=d&&Ir(r,o,s,c,a,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hf(n,e,t,i){const r=n.prev,s=n,a=n.next;if(At(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,p=s.y,h=a.y,d=Math.min(o,c,l),g=Math.min(u,p,h),v=Math.max(o,c,l),m=Math.max(u,p,h),f=qo(d,g,e,t,i),S=qo(v,m,e,t,i);let w=n.prevZ,y=n.nextZ;for(;w&&w.z>=f&&y&&y.z<=S;){if(w.x>=d&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==a&&Ir(o,u,c,p,l,h,w.x,w.y)&&At(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Ir(o,u,c,p,l,h,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=f;){if(w.x>=d&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==a&&Ir(o,u,c,p,l,h,w.x,w.y)&&At(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Ir(o,u,c,p,l,h,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vf(n,e){let t=n;do{const i=t.prev,r=t.next.next;!or(i,r)&&Pu(i,t,t.next,r)&&Kr(i,r)&&Kr(r,i)&&(e.push(i.i,t.i,r.i),Jr(t),Jr(t.next),t=n=r),t=t.next}while(t!==n);return bi(t)}function Wf(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jf(a,o)){let c=Lu(a,o);a=bi(a,a.next),c=bi(c,c.next),$r(a,e,t,i,r,s,0),$r(c,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Xf(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,c=s<a-1?e[s+1]*i:n.length,l=Ru(n,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Qf(l))}r.sort(qf);for(let s=0;s<r.length;s++)t=Yf(r[s],t);return t}function qf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Yf(n,e){const t=Zf(n,e);if(!t)return e;const i=Lu(t,n);return bi(i,i.next),bi(t,t.next)}function Zf(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(or(n,t))return t;do{if(or(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>s&&(s=p,a=t.x<t.next.x?t:t.next,p===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Cu(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const p=Math.abs(r-t.y)/(i-t.x);Kr(t,n)&&(p<u||p===u&&(t.x>a.x||t.x===a.x&&$f(a,t)))&&(a=t,u=p)}t=t.next}while(t!==o);return a}function $f(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function Kf(n,e,t,i){let r=n;do r.z===0&&(r.z=qo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Jf(r)}function Jf(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function qo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Qf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Cu(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ir(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Cu(n,e,t,i,r,s,a,o)}function jf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ed(n,e)&&(Kr(n,e)&&Kr(e,n)&&td(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||or(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function or(n,e){return n.x===e.x&&n.y===e.y}function Pu(n,e,t,i){const r=Us(At(n,e,t)),s=Us(At(n,e,i)),a=Us(At(t,i,n)),o=Us(At(t,i,e));return!!(r!==s&&a!==o||r===0&&Ns(n,t,e)||s===0&&Ns(n,i,e)||a===0&&Ns(t,n,i)||o===0&&Ns(t,e,i))}function Ns(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Us(n){return n>0?1:n<0?-1:0}function ed(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Kr(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function td(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lu(n,e){const t=Yo(n.i,n.x,n.y),i=Yo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function pc(n,e,t,i){const r=Yo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nd(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class id{static triangulate(e,t,i=2){return Gf(e,t,i)}}class er{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return er.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];mc(e),gc(i,e);let a=e.length;t.forEach(mc);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,gc(i,t[c]);const o=id.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function mc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Qr extends wt{constructor(e=new aa([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new pt(r,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:rd;let w,y=!1,b,E,R,_;if(f){w=f.getSpacedPoints(u),y=!0,h=!1;const se=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(u,se),E=new U,R=new U,_=new U}h||(m=0,d=0,g=0,v=0);const T=o.extractPoints(l);let C=T.shape;const P=T.holes;if(!er.isClockWise(C)){C=C.reverse();for(let se=0,ne=P.length;se<ne;se++){const le=P[se];er.isClockWise(le)&&(P[se]=le.reverse())}}function k(se){const le=10000000000000001e-36;let he=se[0];for(let xe=1;xe<=se.length;xe++){const Xe=xe%se.length,He=se[Xe],Be=He.x-he.x,Ve=He.y-he.y,L=Be*Be+Ve*Ve,je=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(he.x),Math.abs(he.y)),Je=le*je*je;if(L<=Je){se.splice(Xe,1),xe--;continue}he=He}}k(C),P.forEach(k);const D=P.length,F=C;for(let se=0;se<D;se++){const ne=P[se];C=C.concat(ne)}function $(se,ne,le){return ne||ft("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ne,le)}const B=C.length;function j(se,ne,le){let he,xe,Xe;const He=se.x-ne.x,Be=se.y-ne.y,Ve=le.x-se.x,L=le.y-se.y,je=He*He+Be*Be,Je=He*L-Be*Ve;if(Math.abs(Je)>Number.EPSILON){const A=Math.sqrt(je),x=Math.sqrt(Ve*Ve+L*L),H=ne.x-Be/A,X=ne.y+He/A,J=le.x-L/x,fe=le.y+Ve/x,me=((J-H)*L-(fe-X)*Ve)/(He*L-Be*Ve);he=H+He*me-se.x,xe=X+Be*me-se.y;const Q=he*he+xe*xe;if(Q<=2)return new de(he,xe);Xe=Math.sqrt(Q/2)}else{let A=!1;He>Number.EPSILON?Ve>Number.EPSILON&&(A=!0):He<-Number.EPSILON?Ve<-Number.EPSILON&&(A=!0):Math.sign(Be)===Math.sign(L)&&(A=!0),A?(he=-Be,xe=He,Xe=Math.sqrt(je)):(he=He,xe=Be,Xe=Math.sqrt(je/2))}return new de(he/Xe,xe/Xe)}const G=[];for(let se=0,ne=F.length,le=ne-1,he=se+1;se<ne;se++,le++,he++)le===ne&&(le=0),he===ne&&(he=0),G[se]=j(F[se],F[le],F[he]);const q=[];let Z,pe=G.concat();for(let se=0,ne=D;se<ne;se++){const le=P[se];Z=[];for(let he=0,xe=le.length,Xe=xe-1,He=he+1;he<xe;he++,Xe++,He++)Xe===xe&&(Xe=0),He===xe&&(He=0),Z[he]=j(le[he],le[Xe],le[He]);q.push(Z),pe=pe.concat(Z)}let ge;if(m===0)ge=er.triangulateShape(F,P);else{const se=[],ne=[];for(let le=0;le<m;le++){const he=le/m,xe=d*Math.cos(he*Math.PI/2),Xe=g*Math.sin(he*Math.PI/2)+v;for(let He=0,Be=F.length;He<Be;He++){const Ve=$(F[He],G[He],Xe);_e(Ve.x,Ve.y,-xe),he===0&&se.push(Ve)}for(let He=0,Be=D;He<Be;He++){const Ve=P[He];Z=q[He];const L=[];for(let je=0,Je=Ve.length;je<Je;je++){const A=$(Ve[je],Z[je],Xe);_e(A.x,A.y,-xe),he===0&&L.push(A)}he===0&&ne.push(L)}}ge=er.triangulateShape(se,ne)}const Qe=ge.length,Ye=g+v;for(let se=0;se<B;se++){const ne=h?$(C[se],pe[se],Ye):C[se];y?(R.copy(b.normals[0]).multiplyScalar(ne.x),E.copy(b.binormals[0]).multiplyScalar(ne.y),_.copy(w[0]).add(R).add(E),_e(_.x,_.y,_.z)):_e(ne.x,ne.y,0)}for(let se=1;se<=u;se++)for(let ne=0;ne<B;ne++){const le=h?$(C[ne],pe[ne],Ye):C[ne];y?(R.copy(b.normals[se]).multiplyScalar(le.x),E.copy(b.binormals[se]).multiplyScalar(le.y),_.copy(w[se]).add(R).add(E),_e(_.x,_.y,_.z)):_e(le.x,le.y,p/u*se)}for(let se=m-1;se>=0;se--){const ne=se/m,le=d*Math.cos(ne*Math.PI/2),he=g*Math.sin(ne*Math.PI/2)+v;for(let xe=0,Xe=F.length;xe<Xe;xe++){const He=$(F[xe],G[xe],he);_e(He.x,He.y,p+le)}for(let xe=0,Xe=P.length;xe<Xe;xe++){const He=P[xe];Z=q[xe];for(let Be=0,Ve=He.length;Be<Ve;Be++){const L=$(He[Be],Z[Be],he);y?_e(L.x,L.y+w[u-1].y,w[u-1].x+le):_e(L.x,L.y,p+le)}}}Ke(),K();function Ke(){const se=r.length/3;if(h){let ne=0,le=B*ne;for(let he=0;he<Qe;he++){const xe=ge[he];ke(xe[2]+le,xe[1]+le,xe[0]+le)}ne=u+m*2,le=B*ne;for(let he=0;he<Qe;he++){const xe=ge[he];ke(xe[0]+le,xe[1]+le,xe[2]+le)}}else{for(let ne=0;ne<Qe;ne++){const le=ge[ne];ke(le[2],le[1],le[0])}for(let ne=0;ne<Qe;ne++){const le=ge[ne];ke(le[0]+B*u,le[1]+B*u,le[2]+B*u)}}i.addGroup(se,r.length/3-se,0)}function K(){const se=r.length/3;let ne=0;te(F,ne),ne+=F.length;for(let le=0,he=P.length;le<he;le++){const xe=P[le];te(xe,ne),ne+=xe.length}i.addGroup(se,r.length/3-se,1)}function te(se,ne){let le=se.length;for(;--le>=0;){const he=le;let xe=le-1;xe<0&&(xe=se.length-1);for(let Xe=0,He=u+m*2;Xe<He;Xe++){const Be=B*Xe,Ve=B*(Xe+1),L=ne+he+Be,je=ne+xe+Be,Je=ne+xe+Ve,A=ne+he+Ve;Ce(L,je,Je,A)}}}function _e(se,ne,le){c.push(se),c.push(ne),c.push(le)}function ke(se,ne,le){Ze(se),Ze(ne),Ze(le);const he=r.length/3,xe=S.generateTopUV(i,r,he-3,he-2,he-1);mt(xe[0]),mt(xe[1]),mt(xe[2])}function Ce(se,ne,le,he){Ze(se),Ze(ne),Ze(he),Ze(ne),Ze(le),Ze(he);const xe=r.length/3,Xe=S.generateSideWallUV(i,r,xe-6,xe-3,xe-2,xe-1);mt(Xe[0]),mt(Xe[1]),mt(Xe[3]),mt(Xe[1]),mt(Xe[2]),mt(Xe[3])}function Ze(se){r.push(c[se*3+0]),r.push(c[se*3+1]),r.push(c[se*3+2])}function mt(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return sd(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Wo[r.type]().fromJSON(r)),new Qr(i,e.options)}}const rd={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new de(s,a),new de(o,c),new de(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],p=e[i*3+2],h=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-p),new de(h,1-g),new de(v,1-f)]:[new de(o,1-c),new de(u,1-p),new de(d,1-g),new de(m,1-f)]}};function sd(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jr extends wt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=rt(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/t,p=new U,h=new de,d=new U,g=new U,v=new U;let m=0,f=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,d.x=f*1,d.y=-m,d.z=f*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=t;S++){const w=i+S*u*r,y=Math.sin(w),b=Math.cos(w);for(let E=0;E<=e.length-1;E++){p.x=e[E].x*y,p.y=e[E].y,p.z=e[E].x*b,a.push(p.x,p.y,p.z),h.x=S/t,h.y=E/(e.length-1),o.push(h.x,h.y);const R=c[3*E+0]*y,_=c[3*E+1],T=c[3*E+0]*b;l.push(R,_,T)}}for(let S=0;S<t;S++)for(let w=0;w<e.length-1;w++){const y=w+S*e.length,b=y,E=y+e.length,R=y+e.length+1,_=y+1;s.push(b,E,_),s.push(R,_,E)}this.setIndex(s),this.setAttribute("position",new pt(a,3)),this.setAttribute("uv",new pt(o,2)),this.setAttribute("normal",new pt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ei extends wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,p=e/o,h=t/c,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const S=f*h-a;for(let w=0;w<l;w++){const y=w*p-s;g.push(y,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const w=S+l*f,y=S+l*(f+1),b=S+1+l*(f+1),E=S+1+l*f;d.push(w,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class es extends wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],p=new U,h=new U,d=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const S=[],w=f/i,y=a+w*o,b=e*Math.cos(y),E=Math.sqrt(e*e-b*b);let R=0;f===0&&a===0?R=.5/t:f===i&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,C=r+T*s;p.x=-E*Math.cos(C),p.y=b,p.z=E*Math.sin(C),g.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),m.push(T+R,1-w),S.push(l++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){const w=u[f][S+1],y=u[f][S],b=u[f+1][S],E=u[f+1][S+1];(f!==0||a>0)&&d.push(w,y,E),(f!==i-1||c<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ss extends wt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],p=[],h=new U,d=new U,g=new U;for(let v=0;v<=i;v++){const m=a+v/i*o;for(let f=0;f<=r;f++){const S=f/r*s;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),p.push(f/r),p.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=r;m++){const f=(r+1)*v+m-1,S=(r+1)*(v-1)+m-1,w=(r+1)*(v-1)+m,y=(r+1)*v+m;c.push(f,S,y),c.push(S,w,y)}this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(_c(r))r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(_c(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const r in i)e[r]=i[r]}return e}function _c(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ad(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Iu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const od={clone:lr,merge:Zt};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new de().fromArray(r.value);break;case"v3":this.uniforms[i].value=new U().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new et().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ud extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cn extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zn extends cn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hd extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fd extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dd extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ml extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pd extends Ml{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const qa=new Mt,xc=new U,vc=new U;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(qa,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===qr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fs=new U,Os=new ur,bn=new U;class Nu extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fs,Os,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Fs,Os,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new U,Mc=new de,Sc=new de;class rn extends Nu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Mc,Sc),t.subVectors(Sc,Mc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class md extends Du{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class gd extends Ml{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Sl extends Nu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _d extends Du{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ya extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new _d}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const qi=-90,Yi=1;class xd extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new rn(qi,Yi,e,t);s.layers=this.layers,this.add(s);const a=new rn(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new rn(qi,Yi,e,t);o.layers=this.layers,this.add(o);const c=new rn(qi,Yi,e,t);c.layers=this.layers,this.add(c);const l=new rn(qi,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vd extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yc=new Mt;class Md{constructor(e,t,i=0,r=1/0){this.ray=new gl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yc),this}intersectObject(e,t=!0,i=[]){return Zo(e,this,i,t),i.sort(bc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Zo(e[r],this,i,t);return i.sort(bc),i}}function bc(n,e){return n.distance-e.distance}function Zo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Zo(s[a],e,t,!0)}}const Dl=class Dl{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Dl.prototype.isMatrix2=!0;let Ec=Dl;function Tc(n,e,t,i){const r=Sd(i);switch(t){case fu:return n*e;case al:return n*e/r.components*r.byteLength;case ol:return n*e/r.components*r.byteLength;case Si:return n*e*2/r.components*r.byteLength;case ll:return n*e*2/r.components*r.byteLength;case du:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case cl:return n*e*4/r.components*r.byteLength;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(n,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(n,8)*Math.max(e,8)/2;case _o:case xo:case Mo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case Js:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oo:case Bo:case zo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Go:case ko:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qs:case Ho:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sd(n){switch(n){case sn:case lu:return{byteLength:1,components:1};case Wr:case cu:case Ln:return{byteLength:2,components:1};case rl:case sl:return{byteLength:2,components:4};case Pn:case il:case _n:return{byteLength:4,components:1};case uu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);function Uu(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yd(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,l){const u=c.array,p=c.updateRanges;if(n.bindBuffer(l,o),p.length===0)n.bufferSubData(l,0,u);else{p.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<p.length;d++){const g=p[h],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,p[h]=v)}p.length=h+1;for(let d=0,g=p.length;d<g;d++){const v=p[d];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,Sp=`uniform sampler2D dfgLUT;
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
}`,yp=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
}`,$m=`#define TOON
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
}`,Km=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,e0=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:bd,alphahash_pars_fragment:Ed,alphamap_fragment:Td,alphamap_pars_fragment:Ad,alphatest_fragment:wd,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Pd,batching_pars_vertex:Ld,batching_vertex:Id,begin_vertex:Dd,beginnormal_vertex:Nd,bsdfs:Ud,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:kd,color_fragment:Hd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:Xd,common:qd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:$d,displacementmap_vertex:Kd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:jd,colorspace_pars_fragment:ep,envmap_fragment:tp,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:rp,envmap_physical_pars_fragment:mp,envmap_vertex:sp,fog_vertex:ap,fog_pars_vertex:op,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:up,lightmap_pars_fragment:hp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:dp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:_p,lights_phong_fragment:xp,lights_phong_pars_fragment:vp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:yp,lights_fragment_maps:bp,lights_fragment_end:Ep,lightprobes_pars_fragment:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Lp,map_particle_fragment:Ip,map_particle_pars_fragment:Dp,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Up,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:Gp,normal_fragment_begin:kp,normal_fragment_maps:Hp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:Jp,packing:Qp,premultiplied_alpha_fragment:jp,project_vertex:em,dithering_fragment:tm,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:am,shadowmap_vertex:om,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:um,skinning_vertex:hm,skinnormal_vertex:fm,specularmap_fragment:dm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:_m,transmission_pars_fragment:xm,uv_pars_fragment:vm,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:ym,background_vert:bm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:wm,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distance_vert:Lm,distance_frag:Im,equirect_vert:Dm,equirect_frag:Nm,linedashed_vert:Um,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:zm,meshlambert_frag:Gm,meshmatcap_vert:km,meshmatcap_frag:Hm,meshnormal_vert:Vm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:Ym,meshphysical_frag:Zm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:Jm,points_frag:Qm,shadow_vert:jm,shadow_frag:e0,sprite_vert:t0,sprite_frag:n0},we={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Tn={basic:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Zt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Zt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new tt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Zt([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Zt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Zt([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Zt([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Zt([we.common,we.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Zt([we.lights,we.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Tn.physical={uniforms:Zt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Bs={r:0,b:0,g:0},i0=new Mt,Fu=new et;Fu.set(-1,0,0,0,1,0,0,0,1);function r0(n,e,t,i,r,s){const a=new tt(0);let o=r===!0?0:1,c,l,u=null,p=0,h=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const y=S.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(S){let w=!1;const y=d(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,w){const y=d(w);y&&(y.isCubeTexture||y.mapping===ha)?(l===void 0&&(l=new Dt(new Yn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:lr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fu),l.material.toneMapped=ut.getTransfer(y.colorSpace)!==_t,(u!==y||p!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Dt(new Ei(2,2),new In({name:"BackgroundMaterial",uniforms:lr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ut.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(Bs,Iu(n)),t.buffers.color.setClear(Bs.r,Bs.g,Bs.b,w,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:f}}function s0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(P,I,k,D,F){let $=!1;const B=p(P,D,k,I);s!==B&&(s=B,l(s.object)),$=d(P,D,k,F),$&&g(P,D,k,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(P,I,k,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function p(P,I,k,D){const F=D.wireframe===!0;let $=i[I.id];$===void 0&&($={},i[I.id]=$);const B=P.isInstancedMesh===!0?P.id:0;let j=$[B];j===void 0&&(j={},$[B]=j);let G=j[k.id];G===void 0&&(G={},j[k.id]=G);let q=G[F];return q===void 0&&(q=h(c()),G[F]=q),q}function h(P){const I=[],k=[],D=[];for(let F=0;F<t;F++)I[F]=0,k[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,I,k,D){const F=s.attributes,$=I.attributes;let B=0;const j=k.getAttributes();for(const G in j)if(j[G].location>=0){const Z=F[G];let pe=$[G];if(pe===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),Z===void 0||Z.attribute!==pe||pe&&Z.data!==pe.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function g(P,I,k,D){const F={},$=I.attributes;let B=0;const j=k.getAttributes();for(const G in j)if(j[G].location>=0){let Z=$[G];Z===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const pe={};pe.attribute=Z,Z&&Z.data&&(pe.data=Z.data),F[G]=pe,B++}s.attributes=F,s.attributesNum=B,s.index=D}function v(){const P=s.newAttributes;for(let I=0,k=P.length;I<k;I++)P[I]=0}function m(P){f(P,0)}function f(P,I){const k=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;k[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),F[P]!==I&&(n.vertexAttribDivisor(P,I),F[P]=I)}function S(){const P=s.newAttributes,I=s.enabledAttributes;for(let k=0,D=I.length;k<D;k++)I[k]!==P[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function w(P,I,k,D,F,$,B){B===!0?n.vertexAttribIPointer(P,I,k,F,$):n.vertexAttribPointer(P,I,k,D,F,$)}function y(P,I,k,D){v();const F=D.attributes,$=k.getAttributes(),B=I.defaultAttributeValues;for(const j in $){const G=$[j];if(G.location>=0){let q=F[j];if(q===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const Z=q.normalized,pe=q.itemSize,ge=e.get(q);if(ge===void 0)continue;const Qe=ge.buffer,Ye=ge.type,Ke=ge.bytesPerElement,K=Ye===n.INT||Ye===n.UNSIGNED_INT||q.gpuType===il;if(q.isInterleavedBufferAttribute){const te=q.data,_e=te.stride,ke=q.offset;if(te.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)f(G.location+Ce,te.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ce=0;Ce<G.locationSize;Ce++)w(G.location+Ce,pe/G.locationSize,Ye,Z,_e*Ke,(ke+pe/G.locationSize*Ce)*Ke,K)}else{if(q.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)f(G.location+te,q.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let te=0;te<G.locationSize;te++)w(G.location+te,pe/G.locationSize,Ye,Z,pe*Ke,pe/G.locationSize*te*Ke,K)}}else if(B!==void 0){const Z=B[j];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(G.location,Z);break;case 3:n.vertexAttrib3fv(G.location,Z);break;case 4:n.vertexAttrib4fv(G.location,Z);break;default:n.vertexAttrib1fv(G.location,Z)}}}}S()}function b(){T();for(const P in i){const I=i[P];for(const k in I){const D=I[k];for(const F in D){const $=D[F];for(const B in $)u($[B].object),delete $[B];delete D[F]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const k in I){const D=I[k];for(const F in D){const $=D[F];for(const B in $)u($[B].object),delete $[B];delete D[F]}}delete i[P.id]}function R(P){for(const I in i){const k=i[I];for(const D in k){const F=k[D];if(F[P.id]===void 0)continue;const $=F[P.id];for(const B in $)u($[B].object),delete $[B];delete F[P.id]}}}function _(P){for(const I in i){const k=i[I],D=P.isInstancedMesh===!0?P.id:0,F=k[D];if(F!==void 0){for(const $ in F){const B=F[$];for(const j in B)u(B[j].object),delete B[j];delete F[$]}delete k[D],Object.keys(k).length===0&&delete i[I]}}}function T(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function a0(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function o0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==sn&&R!==_n&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&($e("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:E}}function l0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ii,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const d=p.length!==0||h||i!==0||r;return r=h,i=p.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,d){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,f=n.get(p);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:i,w=S*4;let y=f.clippingState||null;c.value=y,y=u(g,h,w,d);for(let b=0;b!==w;++b)y[b]=t[b];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,d,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=d+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=d;w!==v;++w,y+=4)a.copy(p[w]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const tr=4,c0=6,u0=20,h0=256,Tr=new Sl,Ac=new tt;let Za=null,$a=0,Ka=0,Ja=!1;const f0=new U,pi=new U;class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=f0}=s;Za=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,$a,Ka),this._renderer.xr.enabled=Ja,e.scissorTest=!1,Zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Ln,format:xn,colorSpace:ea,depthBuffer:!1},r=wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=d0(s)),this._blurMaterial=m0(s,e,t),this._ggxMaterial=p0(s,e,t)}return r}_compileMaterial(e){const t=new Dt(new wt,e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,i,r,s){const c=new rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,d=p.toneMapping;p.getClearColor(Ac),p.toneMapping=Rn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new Yn,new ai({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(Ac),f=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const b=this._cubeSize;Zi(r,y*b,w>2?b:0,b,b),p.setRenderTarget(r),f&&p.render(v,c),p.render(e,c)}p.toneMapping=d,p.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mi||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Zi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),h=l*1.25,d=p*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-tr?i-g+tr:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,Zi(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Tr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Zi(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Tr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],p=3*u*(r>this._lodMax-tr?r-this._lodMax+tr:0),h=4*(this._cubeSize-u);Zi(t,p,h,3*u,2*u),a.setRenderTarget(t),a.render(c,Tr)}}function d0(n){const e=[],t=[];let i=n;const r=n-tr+1+c0;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,h=6,d=3,g=new Float32Array(d*h*p),v=new Float32Array(d*h*p);for(let f=0;f<p;f++){const S=f%3*2/3-1,w=f>2?0:-1,y=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(y,d*h*f);for(let b=0;b<h;b++){const E=u[b*2]*2-1,R=u[b*2+1]*2-1;f===0?pi.set(1,R,E):f===1?pi.set(-E,1,-R):f===2?pi.set(-E,R,1):f===3?pi.set(-1,R,-E):f===4?pi.set(-E,-1,R):pi.set(E,R,-1),pi.toArray(v,(f*h+b)*d)}}const m=new wt;m.setAttribute("position",new Cn(g,d)),m.setAttribute("outputDirection",new Cn(v,d)),t.push(new Dt(m,null)),i>tr&&i--}return{lodMeshes:t,sizeLods:e}}function wc(n,e,t){const i=new Mn(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function p0(n,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function m0(n,e,t){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:u0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Rc(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Cc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ou extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Su(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yn(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Hn});s.uniforms.tEquirect.value=t;const a=new Dt(r,s),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=Wt),new xd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function g0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===_a||d===xa)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Ou(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===_a||d===xa,v=d===Mi||d===ar;if(g||v){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new $o(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||v&&S&&c(S)?(i===null&&(i=new $o(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===_a?h.mapping=Mi:d===xa&&(h.mapping=ar),h}function c(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function _0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nr("WebGLRenderer: "+i+" extension not supported."),r}}}function x0(n,e,t,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function l(p){const h=[],d=p.index,g=p.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const S=d.array;v=d.version;for(let w=0,y=S.length;w<y;w+=3){const b=S[w+0],E=S[w+1],R=S[w+2];h.push(b,E,E,R,R,b)}}else{const S=g.array;v=g.version;for(let w=0,y=S.length/3-1;w<y;w+=3){const b=w+0,E=w+1,R=w+2;h.push(b,E,E,R,R,b)}}const m=new(g.count>=65535?vu:xu)(h,1);m.version=v;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function u(p){const h=s.get(p);if(h){const d=p.index;d!==null&&h.version<d.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function v0(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,h){n.drawElements(i,h,s,p*a),t.update(h,i,1)}function l(p,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,p*a,d),t.update(h,i,d))}function u(p,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,p,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];t.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function M0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function S0(n,e,t){const i=new WeakMap,r=new Tt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let C=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var d=C;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*E*4*p),_=new mu(R,b,E,p);_.type=_n,_.needsUpdate=!0;const T=y*4;for(let P=0;P<p;P++){const I=f[P],k=S[P],D=w[P],F=b*E*4*P;for(let $=0;$<I.count;$++){const B=$*T;g===!0&&(r.fromBufferAttribute(I,$),R[F+B+0]=r.x,R[F+B+1]=r.y,R[F+B+2]=r.z,R[F+B+3]=0),v===!0&&(r.fromBufferAttribute(k,$),R[F+B+4]=r.x,R[F+B+5]=r.y,R[F+B+6]=r.z,R[F+B+7]=0),m===!0&&(r.fromBufferAttribute(D,$),R[F+B+8]=r.x,R[F+B+9]=r.y,R[F+B+10]=r.z,R[F+B+11]=D.itemSize===4?r.w:1)}}h={count:p,texture:_,size:new de(b,E)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function y0(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,p=l.geometry,h=e.get(l,p);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const b0={[tu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[nl]:"ACES_FILMIC_TONE_MAPPING",[su]:"AGX_TONE_MAPPING",[au]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};function E0(n,e,t,i,r,s){const a=new Mn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new wt;l.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pt([0,2,0,0,2,0],2));const u=new ud({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Dt(l,u),h=new Sl(-1,1,1,-1,0,1);let d=null,g=null,v=!1,m,f=null,S=[],w=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),c!==null&&c.setSize(y,b);for(let E=0;E<S.length;E++){const R=S[E];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){S=y,w=S.length>0&&S[0].isRenderPass===!0;const b=a.width,E=a.height;S.length>0&&o===null&&(o=new Mn(b,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(b,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){const _=S[R];_.setSize&&_.setSize(b,E)}},this.begin=function(y,b){if(v||y.toneMapping===Rn&&S.length===0)return!1;if(f=b,b!==null){const E=b.width,R=b.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Rn,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=m,v=!0;let E=a,R=o;for(let _=0;_<S.length;_++){const T=S[_];T.enabled!==!1&&(T.render(y,R,E,b),T.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,u.defines={},ut.getTransfer(d)===_t&&(u.defines.SRGB_TRANSFER="");const _=b0[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(f),y.render(p,h),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Bu=new Xt,Ko=new Zr(1,1),zu=new mu,Gu=new lf,ku=new Su,Pc=[],Lc=[],Ic=new Float32Array(16),Dc=new Float32Array(9),Nc=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pc[r];if(s===void 0&&(s=new Float32Array(r),Pc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=Lc[e];t===void 0&&(t=new Int32Array(e),Lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function C0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),Ot(t,i)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),Ot(t,i)}}function L0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Ic.set(i),n.uniformMatrix4fv(this.addr,!1,Ic),Ot(t,i)}}function I0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function F0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function G0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ko.compareFunction=t.isReversedDepthBuffer()?hl:ul,s=Ko):s=Bu,t.setTexture2D(e||s,r)}function k0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gu,r)}function H0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ku,r)}function V0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zu,r)}function W0(n){switch(n){case 5126:return T0;case 35664:return A0;case 35665:return w0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}function X0(n,e){n.uniform1fv(this.addr,e)}function q0(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Y0(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function Z0(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function $0(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K0(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J0(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q0(n,e){n.uniform1iv(this.addr,e)}function j0(n,e){n.uniform2iv(this.addr,e)}function eg(n,e){n.uniform3iv(this.addr,e)}function tg(n,e){n.uniform4iv(this.addr,e)}function ng(n,e){n.uniform1uiv(this.addr,e)}function ig(n,e){n.uniform2uiv(this.addr,e)}function rg(n,e){n.uniform3uiv(this.addr,e)}function sg(n,e){n.uniform4uiv(this.addr,e)}function ag(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ko:a=Bu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function og(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gu,s[a])}function lg(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ku,s[a])}function cg(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zu,s[a])}function ug(n){switch(n){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return Z0;case 35674:return $0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return j0;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}class hg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}}class fg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ug(t.type)}}class dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Uc(n,e){n.seq.push(e),n.map[e.id]=e}function pg(n,e,t){const i=n.name,r=i.length;for(Qa.lastIndex=0;;){const s=Qa.exec(i),a=Qa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Uc(t,l===void 0?new hg(o,n,e):new fg(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new dg(o),Uc(t,p)),t=p}}}class qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);pg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const mg=37297;let gg=0;function _g(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Oc=new et;function xg(n){ut._getMatrix(Oc,ut.workingColorSpace,n);const e=`mat3( ${Oc.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_g(n.getShaderSource(e),o)}else return s}function vg(n,e){const t=xg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Mg={[tu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[nl]:"ACESFilmic",[su]:"AgX",[au]:"Neutral",[ru]:"Custom"};function Sg(n,e){const t=Mg[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zs=new U;function yg(){ut.getLuminanceCoefficients(zs);const n=zs.x.toFixed(4),e=zs.y.toFixed(4),t=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Eg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Dr(n){return n!==""}function zc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(n){return n.replace(Ag,Rg)}const wg=new Map;function Rg(n,e){let t=it[e];if(t===void 0){const i=wg.get(e);if(i!==void 0)t=it[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jo(t)}const Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(n){return n.replace(Cg,Pg)}function Pg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Lg={[ks]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function Ig(n){return Lg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dg={[Mi]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function Ng(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Dg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ug={[ar]:"ENVMAP_MODE_REFRACTION"};function Fg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ug[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Og={[tl]:"ENVMAP_BLENDING_MULTIPLY",[bh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function Bg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Og[n.combine]||"ENVMAP_BLENDING_NONE"}function zg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ig(t),l=Ng(t),u=Fg(t),p=Bg(t),h=zg(t),d=bg(t),g=Eg(s),v=r.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),f.length>0&&(f+=`
`)):(m=[Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),f=[Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?it.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,vg("linearToOutputTexel",t.outputColorSpace),yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=Jo(a),a=zc(a,t),a=Gc(a,t),o=Jo(o),o=zc(o,t),o=Gc(o,t),a=kc(a),o=kc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=S+m+a,y=S+f+o,b=Fc(r,r.VERTEX_SHADER,w),E=Fc(r,r.FRAGMENT_SHADER,y);r.attachShader(v,b),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",k=r.getShaderInfoLog(b)||"",D=r.getShaderInfoLog(E)||"",F=I.trim(),$=k.trim(),B=D.trim();let j=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,b,E);else{const q=Bc(r,b,"vertex"),Z=Bc(r,E,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+q+`
`+Z)}else F!==""?$e("WebGLProgram: Program Info Log:",F):($===""||B==="")&&(G=!1);G&&(P.diagnostics={runnable:j,programLog:F,vertexShader:{log:$,prefix:m},fragmentShader:{log:B,prefix:f}})}r.deleteShader(b),r.deleteShader(E),_=new qs(r,v),T=Tg(r,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(v,mg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}let kg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vg(e),t.set(e,i)),i}}class Vg{constructor(e){this.id=kg++,this.code=e,this.usedTimes=0}}function Wg(n){return n===Si||n===Js||n===Qs}function Xg(n,e,t,i,r,s){const a=new pl,o=new Hg,c=new Set,l=[],u=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,C,P,I,k){const D=P.fog,F=I.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||$,B),G=j&&j.mapping===ha?j.image.height:null,q=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&$e("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pe=Z!==void 0?Z.length:0;let ge=0;F.morphAttributes.position!==void 0&&(ge=1),F.morphAttributes.normal!==void 0&&(ge=2),F.morphAttributes.color!==void 0&&(ge=3);let Qe,Ye,Ke,K;if(q){const xt=Tn[q];Qe=xt.vertexShader,Ye=xt.fragmentShader}else{Qe=_.vertexShader,Ye=_.fragmentShader;const xt=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,xt,lt),Ke=xt.id,K=lt.id}const te=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,Ze=!!_.map,mt=!!_.matcap,se=!!j,ne=!!_.aoMap,le=!!_.lightMap,he=!!_.bumpMap&&_.wireframe===!1,xe=!!_.normalMap,Xe=!!_.displacementMap,He=!!_.emissiveMap,Be=!!_.metalnessMap,Ve=!!_.roughnessMap,L=_.anisotropy>0,je=_.clearcoat>0,Je=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,H=_.sheen>0,X=_.transmission>0,J=L&&!!_.anisotropyMap,fe=je&&!!_.clearcoatMap,me=je&&!!_.clearcoatNormalMap,Q=je&&!!_.clearcoatRoughnessMap,re=x&&!!_.iridescenceMap,ve=x&&!!_.iridescenceThicknessMap,ze=H&&!!_.sheenColorMap,be=H&&!!_.sheenRoughnessMap,ye=!!_.specularMap,Ne=!!_.specularColorMap,qe=!!_.specularIntensityMap,We=X&&!!_.transmissionMap,O=X&&!!_.thicknessMap,Me=!!_.gradientMap,ee=!!_.alphaMap,Se=_.alphaTest>0,Ee=!!_.alphaHash,oe=!!_.extensions;let Ue=Rn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const De={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Qe,fragmentShader:Ye,defines:_.defines,customVertexShaderID:Ke,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ce,batchingColor:Ce&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:mt,envMap:se,envMapMode:se&&j.mapping,envMapCubeUVHeight:G,aoMap:ne,lightMap:le,bumpMap:he,normalMap:xe,displacementMap:Xe,emissiveMap:He,normalMapObjectSpace:xe&&_.normalMapType===wh,normalMapTangentSpace:xe&&_.normalMapType===js,packedNormalMap:xe&&_.normalMapType===js&&Wg(_.normalMap.format),metalnessMap:Be,roughnessMap:Ve,anisotropy:L,anisotropyMap:J,clearcoat:je,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:Q,dispersion:Je,retroreflection:A,iridescence:x,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:H,sheenColorMap:ze,sheenRoughnessMap:be,specularMap:ye,specularColorMap:Ne,specularIntensityMap:qe,transmission:X,transmissionMap:We,thicknessMap:O,gradientMap:Me,opaque:_.transparent===!1&&_.blending===Ur&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:Se,alphaHash:Ee,combine:_.combine,mapUv:Ze&&g(_.map.channel),aoMapUv:ne&&g(_.aoMap.channel),lightMapUv:le&&g(_.lightMap.channel),bumpMapUv:he&&g(_.bumpMap.channel),normalMapUv:xe&&g(_.normalMap.channel),displacementMapUv:Xe&&g(_.displacementMap.channel),emissiveMapUv:He&&g(_.emissiveMap.channel),metalnessMapUv:Be&&g(_.metalnessMap.channel),roughnessMapUv:Ve&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:fe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(_.sheenRoughnessMap.channel),specularMapUv:ye&&g(_.specularMap.channel),specularColorMapUv:Ne&&g(_.specularColorMap.channel),specularIntensityMapUv:qe&&g(_.specularIntensityMap.channel),transmissionMapUv:We&&g(_.transmissionMap.channel),thicknessMapUv:O&&g(_.thicknessMap.channel),alphaMapUv:ee&&g(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||L),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ze||ee),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&xe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ge,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:He&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(T,_),S(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const T=d[_.type];let C;if(T){const P=Tn[T];C=od.clone(P.uniforms)}else C=_.uniforms;return C}function y(_,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new Gg(n,T,_,r),l.push(C),u.set(T,C)),C}function b(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:R}}function qg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Yg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,m,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=m,S.group=f),e++,S}function c(h,d,g,v,m,f,S){S.reversedDepth===!0&&(m=-m);const w=o(h,d,g,v,m,f);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):t.push(w)}function l(h,d,g,v,m,f){const S=o(h,d,g,v,m,f);g.transmission>0?i.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function u(h,d){t.length>1&&t.sort(h||Yg),i.length>1&&i.sort(d||Vc),r.length>1&&r.sort(d||Vc)}function p(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:p,sort:u}}function Zg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Wc,n.set(i,[a])):r>=s.length?(a=new Wc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function $g(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Kg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Jg=0;function Qg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jg(n){const e=new $g,t=Kg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new Mt,a=new Mt;function o(l){let u=0,p=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,S=0,w=0,y=0,b=0,E=0,R=0,_=0,T=0,C=0;l.sort(Qg);for(let I=0,k=l.length;I<k;I++){const D=l[I],F=D.color,$=D.intensity,B=D.distance;let j=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Si?j=D.shadow.map.texture:j=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*$,p+=F.g*$,h+=F.b*$;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],$);C++}else if(D.isSunLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,Z=t.get(D);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=j;const pe=q.getViewportCount();for(let ge=0;ge<pe;ge++)i.sunShadowMatrix[v+ge]=q.getMatrix(ge),i.sunShadowCascade[v+ge]=q._cascadeData[ge];v+=pe,g++}i.sun[d]=G,d++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,Z=t.get(D);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=D.shadow.matrix,b++}i.directional[m]=G,m++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(F).multiplyScalar($),G.distance=B,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[S]=G;const q=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,q.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[S]=q.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.spotShadow[S]=Z,i.spotShadowMap[S]=j,R++}S++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(F).multiplyScalar($),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[w]=G,w++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const q=D.shadow,Z=t.get(D);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,i.pointShadow[f]=Z,i.pointShadowMap[f]=j,i.pointShadowMatrix[f]=D.shadow.matrix,E++}i.point[f]=G,f++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar($),G.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[y]=G,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const P=i.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==S||P.rectAreaLength!==w||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==R||P.numSpotMaps!==_||P.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=S,i.rectArea.length=w,i.point.length=f,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,P.sunLength=d,P.directionalLength=m,P.pointLength=f,P.spotLength=S,P.rectAreaLength=w,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=R,P.numSpotMaps=_,P.numLightProbes=C,i.version=Jg++)}function c(l,u){let p=0,h=0,d=0,g=0,v=0,m=0;const f=u.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){const y=l[S];if(y.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),p++}else if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),h++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function Xc(n){const e=new jg(n),t=[],i=[],r=[];function s(h){p.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function e_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Xc(n),e.set(r,[o])):s>=a.length?(o=new Xc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`,i_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],r_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],qc=new Mt,Ar=new U,ja=new U;function s_(n,e,t){let i=new _l;const r=new de,s=new de,a=new Tt,o=new fd,c=new dd,l={},u=t.maxTextureSize,p={[vi]:Kt,[Kt]:vi,[hn]:hn},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:t_,fragmentShader:n_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let f=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Qc&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);const T=n.getRenderTarget(),C=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Hn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=f!==this.type;k&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(F=>F.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,F=E.length;D<F;D++){const $=E[D],B=$.shadow;if(B===void 0){$e("WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const j=B.getFrameExtents();r.multiply(j),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,B.mapSize.y=s.y));const G=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Lr){if($.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Mn(r.x,r.y,{format:Si,type:Ln,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),B.map.texture.name=$.name+".shadowMap",B.map.depthTexture=new Zr(r.x,r.y,_n),B.map.depthTexture.name=$.name+".shadowMapDepth",B.map.depthTexture.format=Xn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Gt,B.map.depthTexture.magFilter=Gt}else $.isPointLight?(B.map=new Ou(r.x),B.map.depthTexture=new Af(r.x,Pn)):(B.map=new Mn(r.x,r.y),B.map.depthTexture=new Zr(r.x,r.y,Pn)),B.map.depthTexture.name=$.name+".shadowMap",B.map.depthTexture.format=Xn,this.type===ks?(B.map.depthTexture.compareFunction=G?hl:ul,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Gt,B.map.depthTexture.magFilter=Gt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);const q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();$.isPointLight!==!0&&B.updateMatrices($,_);for(let Z=0;Z<q;Z++){const pe=B.getCamera(Z);if($.isPointLight){const ge=B.camera,Qe=B.matrix,Ye=$.distance||ge.far;Ye!==ge.far&&(ge.far=Ye,ge.updateProjectionMatrix()),Ar.setFromMatrixPosition($.matrixWorld),ge.position.copy(Ar),ja.copy(ge.position),ja.add(i_[Z]),ge.up.copy(r_[Z]),ge.lookAt(ja),ge.updateMatrixWorld(),Qe.makeTranslation(-Ar.x,-Ar.y,-Ar.z),qc.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),B._frustum.setFromProjectionMatrix(qc,ge.coordinateSystem,ge.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(B.map),n.clear());const ge=B.getViewport(Z);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),I.viewport(a)}i=B.getFrustum(Z),y(R,_,pe,$,this.type)}B.isPointLightShadow!==!0&&this.type===Lr&&S(B,_),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,P)};function S(E,R){const _=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Mn(r.x,r.y,{format:Si,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,_,h,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,_,d,v,null)}function w(E,R,_,T){let C=null;const P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=C.uuid,k=R.uuid;let D=l[I];D===void 0&&(D={},l[I]=D);let F=D[k];F===void 0&&(F=C.clone(),D[k]=F,R.addEventListener("dispose",b)),C=F}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Lr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=n.properties.get(C);I.light=_}return C}function y(E,R,_,T,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Lr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const k=e.update(E),D=E.material;if(Array.isArray(D)){const F=k.groups;for(let $=0,B=F.length;$<B;$++){const j=F[$],G=D[j.materialIndex];if(G&&G.visible){const q=w(E,G,T,C);E.onBeforeShadow(n,E,R,_,k,q,j),n.renderBufferDirect(_,null,k,q,E,j),E.onAfterShadow(n,E,R,_,k,q,j)}}}else if(D.visible){const F=w(E,D,T,C);E.onBeforeShadow(n,E,R,_,k,F,null),n.renderBufferDirect(_,null,k,F,E,null),E.onAfterShadow(n,E,R,_,k,F,null)}}const I=E.children;for(let k=0,D=I.length;k<D;k++)y(I[k],R,_,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(const _ in l){const T=l[_],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function a_(n,e){function t(){let O=!1;const Me=new Tt;let ee=null;const Se=new Tt(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!O&&(n.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,oe,Ue,De,xt){xt===!0&&(Ee*=De,oe*=De,Ue*=De),Me.set(Ee,oe,Ue,De),Se.equals(Me)===!1&&(n.clearColor(Ee,oe,Ue,De),Se.copy(Me))},reset:function(){O=!1,ee=null,Se.set(-1,0,0,0)}}}function i(){let O=!1,Me=!1,ee=null,Se=null,Ee=null;return{setReversed:function(oe){if(Me!==oe){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Me=oe;const De=Ee;Ee=null,this.setClear(De)}},getReversed:function(){return Me},setTest:function(oe){oe?te(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(oe){ee!==oe&&!O&&(n.depthMask(oe),ee=oe)},setFunc:function(oe){if(Me&&(oe=zh[oe]),Se!==oe){switch(oe){case io:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case so:n.depthFunc(n.LESS);break;case Vr:n.depthFunc(n.LEQUAL);break;case ao:n.depthFunc(n.EQUAL);break;case oo:n.depthFunc(n.GEQUAL);break;case lo:n.depthFunc(n.GREATER);break;case co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=oe}},setLocked:function(oe){O=oe},setClear:function(oe){Ee!==oe&&(Ee=oe,Me&&(oe=1-oe),n.clearDepth(oe))},reset:function(){O=!1,ee=null,Se=null,Ee=null,Me=!1}}}function r(){let O=!1,Me=null,ee=null,Se=null,Ee=null,oe=null,Ue=null,De=null,xt=null;return{setTest:function(lt){O||(lt?te(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!O&&(n.stencilMask(lt),Me=lt)},setFunc:function(lt,Jt,Qt){(ee!==lt||Se!==Jt||Ee!==Qt)&&(n.stencilFunc(lt,Jt,Qt),ee=lt,Se=Jt,Ee=Qt)},setOp:function(lt,Jt,Qt){(oe!==lt||Ue!==Jt||De!==Qt)&&(n.stencilOp(lt,Jt,Qt),oe=lt,Ue=Jt,De=Qt)},setLocked:function(lt){O=lt},setClear:function(lt){xt!==lt&&(n.clearStencil(lt),xt=lt)},reset:function(){O=!1,Me=null,ee=null,Se=null,Ee=null,oe=null,Ue=null,De=null,xt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},p={},h={},d=new WeakMap,g=[],v=null,m=!1,f=null,S=null,w=null,y=null,b=null,E=null,R=null,_=new tt(0,0,0),T=0,C=!1,P=null,I=null,k=null,D=null,F=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=j>=2);let q=null,Z={};const pe=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Qe=new Tt().fromArray(pe),Ye=new Tt().fromArray(ge);function Ke(O,Me,ee,Se){const Ee=new Uint8Array(4),oe=n.createTexture();n.bindTexture(O,oe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<ee;Ue++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Me+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return oe}const K={};K[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Vr),he(!1),xe(Ul),te(n.CULL_FACE),ne(Hn);function te(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function _e(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ke(O,Me){return h[O]!==Me?(n.bindFramebuffer(O,Me),h[O]=Me,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Me),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ce(O,Me){let ee=g,Se=!1;if(O){ee=d.get(Me),ee===void 0&&(ee=[],d.set(Me,ee));const Ee=O.textures;if(ee.length!==Ee.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ue=Ee.length;oe<Ue;oe++)ee[oe]=n.COLOR_ATTACHMENT0+oe;ee.length=Ee.length,Se=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ee)}function Ze(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const mt={[Qi]:n.FUNC_ADD,[ah]:n.FUNC_SUBTRACT,[oh]:n.FUNC_REVERSE_SUBTRACT};mt[lh]=n.MIN,mt[ch]=n.MAX;const se={[uh]:n.ZERO,[hh]:n.ONE,[fh]:n.SRC_COLOR,[jc]:n.SRC_ALPHA,[xh]:n.SRC_ALPHA_SATURATE,[gh]:n.DST_COLOR,[ph]:n.DST_ALPHA,[dh]:n.ONE_MINUS_SRC_COLOR,[eu]:n.ONE_MINUS_SRC_ALPHA,[_h]:n.ONE_MINUS_DST_COLOR,[mh]:n.ONE_MINUS_DST_ALPHA,[vh]:n.CONSTANT_COLOR,[Mh]:n.ONE_MINUS_CONSTANT_COLOR,[Sh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(O,Me,ee,Se,Ee,oe,Ue,De,xt,lt){if(O===Hn){m===!0&&(_e(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),O!==sh){if(O!==f||lt!==C){if((S!==Qi||b!==Qi)&&(n.blendEquation(n.FUNC_ADD),S=Qi,b=Qi),lt)switch(O){case Ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFunc(n.ONE,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",O);break}else switch(O){case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ol:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",O);break}w=null,y=null,E=null,R=null,_.set(0,0,0),T=0,f=O,C=lt}return}Ee=Ee||Me,oe=oe||ee,Ue=Ue||Se,(Me!==S||Ee!==b)&&(n.blendEquationSeparate(mt[Me],mt[Ee]),S=Me,b=Ee),(ee!==w||Se!==y||oe!==E||Ue!==R)&&(n.blendFuncSeparate(se[ee],se[Se],se[oe],se[Ue]),w=ee,y=Se,E=oe,R=Ue),(De.equals(_)===!1||xt!==T)&&(n.blendColor(De.r,De.g,De.b,xt),_.copy(De),T=xt),f=O,C=!1}function le(O,Me){O.side===hn?_e(n.CULL_FACE):te(n.CULL_FACE);let ee=O.side===Kt;Me&&(ee=!ee),he(ee),O.blending===Ur&&O.transparent===!1?ne(Hn):ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),He(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(O){P!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),P=O)}function xe(O){O!==ih?(te(n.CULL_FACE),O!==I&&(O===Ul?n.cullFace(n.BACK):O===rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),I=O}function Xe(O){O!==k&&(B&&n.lineWidth(O),k=O)}function He(O,Me,ee){O?(te(n.POLYGON_OFFSET_FILL),(D!==Me||F!==ee)&&(D=Me,F=ee,a.getReversed()&&(Me=-Me),n.polygonOffset(Me,ee))):_e(n.POLYGON_OFFSET_FILL)}function Be(O){O?te(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Ve(O){O===void 0&&(O=n.TEXTURE0+$-1),q!==O&&(n.activeTexture(O),q=O)}function L(O,Me,ee){ee===void 0&&(q===null?ee=n.TEXTURE0+$-1:ee=q);let Se=Z[ee];Se===void 0&&(Se={type:void 0,texture:void 0},Z[ee]=Se),(Se.type!==O||Se.texture!==Me)&&(q!==ee&&(n.activeTexture(ee),q=ee),n.bindTexture(O,Me||K[O]),Se.type=O,Se.texture=Me)}function je(){const O=Z[q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function x(){try{n.texSubImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function H(){try{n.texSubImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function fe(){try{n.texStorage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function me(){try{n.texStorage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function Q(){try{n.texImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function re(){try{n.texImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function ve(O){return p[O]!==void 0?p[O]:n.getParameter(O)}function ze(O,Me){p[O]!==Me&&(n.pixelStorei(O,Me),p[O]=Me)}function be(O){Qe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Qe.copy(O))}function ye(O){Ye.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ye.copy(O))}function Ne(O,Me){let ee=l.get(Me);ee===void 0&&(ee=new WeakMap,l.set(Me,ee));let Se=ee.get(O);Se===void 0&&(Se=n.getUniformBlockIndex(Me,O.name),ee.set(O,Se))}function qe(O,Me){const Se=l.get(Me).get(O);c.get(Me)!==Se&&(n.uniformBlockBinding(Me,Se,O.__bindingPointIndex),c.set(Me,Se))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},q=null,Z={},h={},d=new WeakMap,g=[],v=null,m=!1,f=null,S=null,w=null,y=null,b=null,E=null,R=null,_=new tt(0,0,0),T=0,C=!1,P=null,I=null,k=null,D=null,F=null,Qe.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:ke,drawBuffers:Ce,useProgram:Ze,setBlending:ne,setMaterial:le,setFlipSided:he,setCullFace:xe,setLineWidth:Xe,setPolygonOffset:He,setScissorTest:Be,activeTexture:Ve,bindTexture:L,unbindTexture:je,compressedTexImage2D:Je,compressedTexImage3D:A,texImage2D:Q,texImage3D:re,pixelStorei:ze,getParameter:ve,updateUBOMapping:Ne,uniformBlockBinding:qe,texStorage2D:fe,texStorage3D:me,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:be,viewport:ye,reset:We}}function o_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap,p=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return g?new OffscreenCanvas(A,x):na("canvas")}function m(A,x,H){let X=1;const J=Je(A);if((J.width>H||J.height>H)&&(X=H/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const fe=Math.floor(X*J.width),me=Math.floor(X*J.height);h===void 0&&(h=v(fe,me));const Q=x?v(fe,me):h;return Q.width=fe,Q.height=me,Q.getContext("2d").drawImage(A,0,0,fe,me),$e("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+fe+"x"+me+")."),Q}else return"data"in A&&$e("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function f(A){return A.generateMipmaps}function S(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,x,H,X,J,fe=!1){if(A!==null){if(n[A]!==void 0)return n[A];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me;X&&(me=e.get("EXT_texture_norm16"),me||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===n.RED&&(H===n.FLOAT&&(Q=n.R32F),H===n.HALF_FLOAT&&(Q=n.R16F),H===n.UNSIGNED_BYTE&&(Q=n.R8),H===n.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),H===n.SHORT&&me&&(Q=me.R16_SNORM_EXT)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.R8UI),H===n.UNSIGNED_SHORT&&(Q=n.R16UI),H===n.UNSIGNED_INT&&(Q=n.R32UI),H===n.BYTE&&(Q=n.R8I),H===n.SHORT&&(Q=n.R16I),H===n.INT&&(Q=n.R32I)),x===n.RG&&(H===n.FLOAT&&(Q=n.RG32F),H===n.HALF_FLOAT&&(Q=n.RG16F),H===n.UNSIGNED_BYTE&&(Q=n.RG8),H===n.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),H===n.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RG8UI),H===n.UNSIGNED_SHORT&&(Q=n.RG16UI),H===n.UNSIGNED_INT&&(Q=n.RG32UI),H===n.BYTE&&(Q=n.RG8I),H===n.SHORT&&(Q=n.RG16I),H===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),H===n.UNSIGNED_INT&&(Q=n.RGB32UI),H===n.BYTE&&(Q=n.RGB8I),H===n.SHORT&&(Q=n.RGB16I),H===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),H===n.UNSIGNED_INT&&(Q=n.RGBA32UI),H===n.BYTE&&(Q=n.RGBA8I),H===n.SHORT&&(Q=n.RGBA16I),H===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(H===n.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),H===n.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){const re=fe?ta:ut.getTransfer(J);H===n.FLOAT&&(Q=n.RGBA32F),H===n.HALF_FLOAT&&(Q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Q=re===_t?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),H===n.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(A,x){let H;return A?x===null||x===Pn||x===Xr?H=n.DEPTH24_STENCIL8:x===_n?H=n.DEPTH32F_STENCIL8:x===Wr&&(H=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pn||x===Xr?H=n.DEPTH_COMPONENT24:x===_n?H=n.DEPTH_COMPONENT32F:x===Wr&&(H=n.DEPTH_COMPONENT16),H}function E(A,x){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&p.delete(x)}function _(A){const x=A.target;x.removeEventListener("dispose",_),P(x)}function T(A){const x=i.get(A);if(x.__webglInit===void 0)return;const H=A.source,X=d.get(H);if(X){const J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(A),Object.keys(X).length===0&&d.delete(H)}i.remove(A)}function C(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const H=A.source,X=d.get(H);delete X[x.__cacheKey],a.memory.textures--}function P(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[X][J]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=A.textures;for(let X=0,J=H.length;X<J;X++){const fe=i.get(H[X]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(H[X])}i.remove(A)}let I=0;function k(){I=0}function D(){return I}function F(A){I=A}function $(){const A=I;return A>=r.maxTextures&&$e("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function B(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function j(A,x){const H=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const X=A.image;if(X===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function G(A,x){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){_e(H,A,x);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function q(A,x){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){_e(H,A,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function Z(A,x){const H=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){ke(H,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const pe={[uo]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},ge={[Gt]:n.NEAREST,[Th]:n.NEAREST_MIPMAP_NEAREST,[us]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},Qe={[Ch]:n.NEVER,[Nh]:n.ALWAYS,[Ph]:n.LESS,[ul]:n.LEQUAL,[Lh]:n.EQUAL,[hl]:n.GEQUAL,[Ih]:n.GREATER,[Dh]:n.NOTEQUAL};function Ye(A,x){if(x.type===_n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===va||x.magFilter===us||x.magFilter===mi||x.minFilter===Wt||x.minFilter===va||x.minFilter===us||x.minFilter===mi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,pe[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,pe[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,pe[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ge[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Qe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gt||x.minFilter!==us&&x.minFilter!==mi||x.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ke(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const X=x.source;let J=d.get(X);J===void 0&&(J={},d.set(X,J));const fe=B(x);if(fe!==A.__cacheKey){J[fe]===void 0&&(J[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[fe].usedTimes++;const me=J[A.__cacheKey];me!==void 0&&(J[A.__cacheKey].usedTimes--,me.usedTimes===0&&C(x)),A.__cacheKey=fe,A.__webglTexture=J[fe].texture}return H}function K(A,x,H){return Math.floor(Math.floor(A/H)/x)}function te(A,x,H,X){const fe=A.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,X,x.data);else{fe.sort((ze,be)=>ze.start-be.start);let me=0;for(let ze=1;ze<fe.length;ze++){const be=fe[me],ye=fe[ze],Ne=be.start+be.count,qe=K(ye.start,x.width,4),We=K(be.start,x.width,4);ye.start<=Ne+1&&qe===We&&K(ye.start+ye.count-1,x.width,4)===qe?be.count=Math.max(be.count,ye.start+ye.count-be.start):(++me,fe[me]=ye)}fe.length=me+1;const Q=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ze=0,be=fe.length;ze<be;ze++){const ye=fe[ze],Ne=Math.floor(ye.start/4),qe=Math.ceil(ye.count/4),We=Ne%x.width,O=Math.floor(Ne/x.width),Me=qe,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,We,O,Me,ee,H,X,x.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function _e(A,x,H){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);const J=Ke(A,x),fe=x.source;t.bindTexture(X,A.__webglTexture,n.TEXTURE0+H);const me=i.get(fe);if(fe.version!==me.__version||J===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=ut.getPrimaries(ut.workingColorSpace),Se=x.colorSpace===si?null:ut.getPrimaries(x.colorSpace),Ee=x.colorSpace===si||ee===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let re=m(x.image,!1,r.maxTextureSize);re=je(x,re);const ve=s.convert(x.format,x.colorSpace),ze=s.convert(x.type);let be=y(x.internalFormat,ve,ze,x.normalized,x.colorSpace,x.isVideoTexture);Ye(X,x);let ye;const Ne=x.mipmaps,qe=x.isVideoTexture!==!0,We=me.__version===void 0||J===!0,O=fe.dataReady,Me=E(x,re);if(x.isDepthTexture)be=b(x.format===gi,x.type),We&&(qe?t.texStorage2D(n.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,ve,ze,null));else if(x.isDataTexture)if(Ne.length>0){qe&&We&&t.texStorage2D(n.TEXTURE_2D,Me,be,Ne[0].width,Ne[0].height);for(let ee=0,Se=Ne.length;ee<Se;ee++)ye=Ne[ee],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,ve,ze,ye.data):t.texImage2D(n.TEXTURE_2D,ee,be,ye.width,ye.height,0,ve,ze,ye.data);x.generateMipmaps=!1}else qe?(We&&t.texStorage2D(n.TEXTURE_2D,Me,be,re.width,re.height),O&&te(x,re,ve,ze)):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,ve,ze,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qe&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,be,Ne[0].width,Ne[0].height,re.depth);for(let ee=0,Se=Ne.length;ee<Se;ee++)if(ye=Ne[ee],x.format!==xn)if(ve!==null)if(qe){if(O)if(x.layerUpdates.size>0){const Ee=Tc(ye.width,ye.height,x.format,x.type);for(const oe of x.layerUpdates){const Ue=ye.data.subarray(oe*Ee/ye.data.BYTES_PER_ELEMENT,(oe+1)*Ee/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,oe,ye.width,ye.height,1,ve,Ue)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,re.depth,ve,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,ye.width,ye.height,re.depth,0,ye.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,re.depth,ve,ze,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,ye.width,ye.height,re.depth,0,ve,ze,ye.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{qe&&We&&t.texStorage2D(n.TEXTURE_2D,Me,be,Ne[0].width,Ne[0].height);for(let ee=0,Se=Ne.length;ee<Se;ee++)ye=Ne[ee],x.format!==xn?ve!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,ye.width,ye.height,0,ye.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye.width,ye.height,ve,ze,ye.data):t.texImage2D(n.TEXTURE_2D,ee,be,ye.width,ye.height,0,ve,ze,ye.data)}else if(x.isDataArrayTexture)if(qe){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,be,re.width,re.height,re.depth),O)if(x.layerUpdates.size>0){const ee=Tc(re.width,re.height,x.format,x.type);for(const Se of x.layerUpdates){const Ee=re.data.subarray(Se*ee/re.data.BYTES_PER_ELEMENT,(Se+1)*ee/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,re.width,re.height,1,ve,ze,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,ze,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,ve,ze,re.data);else if(x.isData3DTexture)qe?(We&&t.texStorage3D(n.TEXTURE_3D,Me,be,re.width,re.height,re.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,ze,re.data)):t.texImage3D(n.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,ve,ze,re.data);else if(x.isFramebufferTexture){if(We)if(qe)t.texStorage2D(n.TEXTURE_2D,Me,be,re.width,re.height);else{let ee=re.width,Se=re.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,be,ee,Se,0,ve,ze,null),ee>>=1,Se>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),re.parentNode!==ee){ee.appendChild(re),p.add(x),ee.onpaint=Se=>{const Ee=Se.changedElements;for(const oe of p)Ee.includes(oe.image)&&(oe.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{const Ee=n.RGBA,oe=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,oe,Ue,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(qe&&We){const ee=Je(Ne[0]);t.texStorage2D(n.TEXTURE_2D,Me,be,ee.width,ee.height)}for(let ee=0,Se=Ne.length;ee<Se;ee++)ye=Ne[ee],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ve,ze,ye):t.texImage2D(n.TEXTURE_2D,ee,be,ve,ze,ye);x.generateMipmaps=!1}else if(qe){if(We){const ee=Je(re);t.texStorage2D(n.TEXTURE_2D,Me,be,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,ze,re)}else t.texImage2D(n.TEXTURE_2D,0,be,ve,ze,re);f(x)&&S(X),me.__version=fe.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ke(A,x,H){if(x.image.length!==6)return;const X=Ke(A,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const fe=i.get(J);if(J.version!==fe.__version||X===!0){t.activeTexture(n.TEXTURE0+H);const me=ut.getPrimaries(ut.workingColorSpace),Q=x.colorSpace===si?null:ut.getPrimaries(x.colorSpace),re=x.colorSpace===si||me===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,ze=x.image[0]&&x.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!ve&&!ze?be[oe]=m(x.image[oe],!0,r.maxCubemapSize):be[oe]=ze?x.image[oe].image:x.image[oe],be[oe]=je(x,be[oe]);const ye=be[0],Ne=s.convert(x.format,x.colorSpace),qe=s.convert(x.type),We=y(x.internalFormat,Ne,qe,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,Me=fe.__version===void 0||X===!0,ee=J.dataReady;let Se=E(x,ye);Ye(n.TEXTURE_CUBE_MAP,x);let Ee;if(ve){O&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,We,ye.width,ye.height);for(let oe=0;oe<6;oe++){Ee=be[oe].mipmaps;for(let Ue=0;Ue<Ee.length;Ue++){const De=Ee[Ue];x.format!==xn?Ne!==null?O?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,De.width,De.height,Ne,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,We,De.width,De.height,0,De.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,De.width,De.height,Ne,qe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,We,De.width,De.height,0,Ne,qe,De.data)}}}else{if(Ee=x.mipmaps,O&&Me){Ee.length>0&&Se++;const oe=Je(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,We,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ze){O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,Ne,qe,be[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,be[oe].width,be[oe].height,0,Ne,qe,be[oe].data);for(let Ue=0;Ue<Ee.length;Ue++){const xt=Ee[Ue].image[oe].image;O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,xt.width,xt.height,Ne,qe,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,We,xt.width,xt.height,0,Ne,qe,xt.data)}}else{O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,qe,be[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,Ne,qe,be[oe]);for(let Ue=0;Ue<Ee.length;Ue++){const De=Ee[Ue];O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,Ne,qe,De.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,We,Ne,qe,De.image[oe])}}}f(x)&&S(n.TEXTURE_CUBE_MAP),fe.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ce(A,x,H,X,J,fe){const me=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),re=y(H.internalFormat,me,Q,H.normalized,H.colorSpace),ve=i.get(x),ze=i.get(H);if(ze.__renderTarget=x,!ve.__hasExternalTextures){const be=Math.max(1,x.width>>fe),ye=Math.max(1,x.height>>fe);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,fe,re,be,ye,x.depth,0,me,Q,null):t.texImage2D(J,fe,re,be,ye,0,me,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,ze.__webglTexture,0,Be(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,ze.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(A,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,fe=b(x.stencilBuffer,J),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be(x),fe,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be(x),fe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,fe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,A)}else{const X=x.textures;for(let J=0;J<X.length;J++){const fe=X[J],me=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),re=y(fe.internalFormat,me,Q,fe.normalized,fe.colorSpace);Ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be(x),re,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be(x),re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(A,x,H){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,x.depthTexture);const ve=s.convert(x.depthTexture.format),ze=s.convert(x.depthTexture.type);let be;x.depthTexture.format===Xn?be=n.DEPTH_COMPONENT24:x.depthTexture.format===gi&&(be=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,be,x.width,x.height,0,ve,ze,null)}}else j(x.depthTexture,0);const fe=J.__webglTexture,me=Be(x),Q=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,re=x.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xn)Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,fe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,fe,0);else if(x.depthTexture.format===gi)Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,fe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(A){const x=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)mt(x.__webglFramebuffer[X],A,X);else{const X=A.texture.mipmaps;X&&X.length>0?mt(x.__webglFramebuffer[0],A,0):mt(x.__webglFramebuffer,A,0)}else if(H){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),Ze(x.__webglDepthbuffer[X],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,fe)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ze(x.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(A,x,H){const X=i.get(A);x!==void 0&&Ce(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&se(A)}function le(A){const x=A.texture,H=i.get(A),X=i.get(x);A.addEventListener("dispose",_);const J=A.textures,fe=A.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,a.memory.textures++),fe){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let re=0;re<x.mipmaps.length;re++)H.__webglFramebuffer[Q][re]=n.createFramebuffer()}else H.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)H.__webglFramebuffer[Q]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(me)for(let Q=0,re=J.length;Q<re;Q++){const ve=i.get(J[Q]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Ve(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const re=J[Q];H.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const ve=s.convert(re.format,re.colorSpace),ze=s.convert(re.type),be=y(re.internalFormat,ve,ze,re.normalized,re.colorSpace,A.isXRRenderTarget===!0),ye=Be(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Ce(H.__webglFramebuffer[Q][re],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else Ce(H.__webglFramebuffer[Q],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(x)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Q=0,re=J.length;Q<re;Q++){const ve=J[Q],ze=i.get(ve);let be=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(be=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ze.__webglTexture),Ye(be,ve),Ce(H.__webglFramebuffer,A,ve,n.COLOR_ATTACHMENT0+Q,be,0),f(ve)&&S(be)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,X.__webglTexture),Ye(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let re=0;re<x.mipmaps.length;re++)Ce(H.__webglFramebuffer[re],A,x,n.COLOR_ATTACHMENT0,Q,re);else Ce(H.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,Q,0);f(x)&&S(Q),t.unbindTexture()}A.depthBuffer&&se(A)}function he(A){const x=A.textures;for(let H=0,X=x.length;H<X;H++){const J=x[H];if(f(J)){const fe=w(A),me=i.get(J).__webglTexture;t.bindTexture(fe,me),S(fe),t.unbindTexture()}}}const xe=[],Xe=[];function He(A){if(A.samples>0){if(Ve(A)===!1){const x=A.textures,H=A.width,X=A.height;let J=n.COLOR_BUFFER_BIT;const fe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(A),Q=x.length>1;if(Q)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const re=A.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);const ze=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,H,X,0,0,H,X,J,n.NEAREST),c===!0&&(xe.length=0,Xe.length=0,xe.push(n.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(xe.push(fe),Xe.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);const ze=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Be(A){return Math.min(r.maxSamples,A.samples)}function Ve(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function je(A,x){const H=A.colorSpace,X=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==ea&&H!==si&&(ut.getTransfer(H)===_t?(X!==xn||J!==sn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",H)),x}function Je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=ne,this.setupRenderTarget=le,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function l_(n,e){function t(i,r=si){let s;const a=ut.getTransfer(r);if(i===sn)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lu)return n.BYTE;if(i===cu)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===du)return n.RGB;if(i===xn)return n.RGBA;if(i===Xn)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===al)return n.RED;if(i===ol)return n.RED_INTEGER;if(i===Si)return n.RG;if(i===ll)return n.RG_INTEGER;if(i===cl)return n.RGBA_INTEGER;if(i===Hs||i===Vs||i===Ws||i===Xs)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_o||i===xo||i===vo||i===Mo||i===So||i===Js||i===yo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_o||i===xo)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vo)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mo)return s.COMPRESSED_R11_EAC;if(i===So)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Js)return s.COMPRESSED_RG11_EAC;if(i===yo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bo||i===Eo||i===To||i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Lo||i===Io||i===Do||i===No||i===Uo||i===Fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bo)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===To)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ao)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wo)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ro)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Co)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Po)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lo)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Io)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Do)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===No)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uo)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fo)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===Bo||i===zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oo)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Go||i===ko||i===Qs||i===Ho)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Go)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new In({vertexShader:c_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f_ extends Ai{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new h_,f={},S=t.getContextAttributes();let w=null,y=null;const b=[],E=[],R=new de;let _=null,T=null;const C=new rn;C.viewport=new Tt;const P=new rn;P.viewport=new Tt;const I=[C,P],k=new vd;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=b[K];return te===void 0&&(te=new Aa,b[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=b[K];return te===void 0&&(te=new Aa,b[K]=te),te.getGripSpace()},this.getHand=function(K){let te=b[K];return te===void 0&&(te=new Aa,b[K]=te),te.getHandSpace()};function $(K){const te=E.indexOf(K.inputSource);if(te===-1)return;const _e=b[te];_e!==void 0&&(_e.update(K.inputSource,K.frame,l||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",j);for(let K=0;K<b.length;K++){const te=E[K];te!==null&&(E[K]=null,b[K].disconnect(te))}D=null,F=null,m.reset();for(const K in f)delete f[K];if(e.setRenderTarget(w),d=null,h=null,p=null,r=null,y=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",B),r.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ke=null,Ce=null;S.depth&&(Ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?gi:Xn,ke=S.stencil?Xr:Pn);const Ze={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Ze),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Mn(h.textureWidth,h.textureHeight,{format:xn,type:sn,depthTexture:new Zr(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Mn(d.framebufferWidth,d.framebufferHeight,{format:xn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(K){for(let te=0;te<K.removed.length;te++){const _e=K.removed[te],ke=E.indexOf(_e);ke>=0&&(E[ke]=null,b[ke].disconnect(_e))}for(let te=0;te<K.added.length;te++){const _e=K.added[te];let ke=E.indexOf(_e);if(ke===-1){for(let Ze=0;Ze<b.length;Ze++)if(Ze>=E.length){E.push(_e),ke=Ze;break}else if(E[Ze]===null){E[Ze]=_e,ke=Ze;break}if(ke===-1)break}const Ce=b[ke];Ce&&Ce.connect(_e)}}const G=new U,q=new U;function Z(K,te,_e){G.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(_e.matrixWorld);const ke=G.distanceTo(q),Ce=te.projectionMatrix.elements,Ze=_e.projectionMatrix.elements,mt=Ce[14]/(Ce[10]-1),se=Ce[14]/(Ce[10]+1),ne=(Ce[9]+1)/Ce[5],le=(Ce[9]-1)/Ce[5],he=(Ce[8]-1)/Ce[0],xe=(Ze[8]+1)/Ze[0],Xe=mt*he,He=mt*xe,Be=ke/(-he+xe),Ve=Be*-he;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ve),K.translateZ(Be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const L=mt+Be,je=se+Be,Je=Xe-Ve,A=He+(ke-Ve),x=ne*se/je*L,H=le*se/je*L;K.projectionMatrix.makePerspective(Je,A,x,H,L,je),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pe(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=P.near=C.near=te,k.far=P.far=C.far=_e,(D!==k.near||F!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,F=k.far),k.layers.mask=K.layers.mask|6,C.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const ke=K.parent,Ce=k.cameras;pe(k,ke);for(let Ze=0;Ze<Ce.length;Ze++)pe(Ce[Ze],ke);Ce.length===2?Z(k,C,P):k.projectionMatrix.copy(C.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),ge(K,k,ke)};function ge(K,te,_e){_e===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return f[K]};let Qe=null;function Ye(K,te){if(u=te.getViewerPose(l||a),g=te,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ke=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,ke=!0);for(let se=0;se<_e.length;se++){const ne=_e[se];let le=null;if(d!==null)le=d.getViewport(ne);else{const xe=p.getViewSubImage(h,ne);le=xe.viewport,se===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let he=I[se];he===void 0&&(he=new rn,he.layers.enable(se),he.viewport=new Tt,I[se]=he),he.matrix.fromArray(ne.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ne.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(le.x,le.y,le.width,le.height),se===0&&(k.matrix.copy(he.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ke===!0&&k.cameras.push(he)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=i.getBinding();const se=p.getDepthInformation(_e[0]);se&&se.isValid&&se.texture&&m.init(se,r.renderState)}if(Ce&&Ce.includes("camera-access")&&v){e.state.unbindTexture(),p=i.getBinding();for(let se=0;se<_e.length;se++){const ne=_e[se].camera;if(ne){let le=f[ne];le||(le=new bu,f[ne]=le);const he=p.getCameraImage(ne);le.sourceTexture=he}}}}for(let _e=0;_e<b.length;_e++){const ke=E[_e],Ce=b[_e];ke!==null&&Ce!==void 0&&Ce.update(ke,te,l||a)}Qe&&Qe(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ke=new Uu;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(K){Qe=K},this.dispose=function(){}}}const d_=new Mt,Hu=new et;Hu.set(-1,0,0,0,1,0,0,0,1);function p_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Iu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,S,w,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),w=S.envMap,y=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function m_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const E=b.program;i.uniformBlockBinding(y,E)}function l(y,b){let E=r[y.id];E===void 0&&(m(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",S));const R=b.program;i.updateUBOMapping(y,R);const _=e.render.frame;s[y.id]!==_&&(h(y),s[y.id]=_)}function u(y){const b=p();y.__bindingPointIndex=b;const E=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=r[y.id],E=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,T=E.length;_<T;_++){const C=E[_];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)d(C[P],_,P,R);else d(C,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,b,E,R){if(v(y,b,E,R)===!0){const _=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let P=0;P<T.length;P++){const I=T[P],k=f(I);g(I,y.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function v(y,b,E,R){const _=y.value,T=b+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const C=R[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(y){const b=y.uniforms;let E=0;const R=16;for(let T=0,C=b.length;T<C;T++){const P=Array.isArray(b[T])?b[T]:[b[T]];for(let I=0,k=P.length;I<k;I++){const D=P[I],F=Array.isArray(D.value)?D.value:[D.value];for(let $=0,B=F.length;$<B;$++){const j=F[$],G=f(j),q=E%R,Z=q%G.boundary,pe=q+Z;E+=Z,pe!==0&&R-pe<G.storage&&(E+=R-pe),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=G.storage}}}const _=E%R;return _>0&&(E+=R-_),y.__size=E,y.__cache={},this}function f(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){const b=y.target;b.removeEventListener("dispose",S);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:w}}const g_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function __(){return En===null&&(En=new Mu(g_,16,16,Si,Ln),En.name="DFG_LUT",En.minFilter=Wt,En.magFilter=Wt,En.wrapS=Gn,En.wrapT=Gn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class x_{constructor(e={}){const{canvas:t=Oh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:d=sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=d,m=new Set([cl,ll,ol]),f=new Set([sn,Pn,Wr,Xr,rl,sl]),S=new Uint32Array(4),w=new Int32Array(4),y=new U;let b=null,E=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null,k=null,D=null,F=null;this._outputColorSpace=$t;let $=0,B=0,j=null,G=-1,q=null;const Z=new Tt,pe=new Tt;let ge=null;const Qe=new tt(0);let Ye=0,Ke=t.width,K=t.height,te=1,_e=null,ke=null;const Ce=new Tt(0,0,Ke,K),Ze=new Tt(0,0,Ke,K);let mt=!1;const se=new _l;let ne=!1,le=!1;const he=new Mt,xe=new U,Xe=new Tt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Ve(){return j===null?te:1}let L=i;function je(M,N){return t.getContext(M,N)}let Je,A,x,H,X,J,fe,me,Q,re,ve,ze,be,ye,Ne,qe,We,O,Me,ee,Se,Ee,oe;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Jt,!1),L===null){const N="webgl2";if(L=je(N,M),L===null)throw je(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(M){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Jt,!1),ft("WebGLRenderer: "+M.message),M}function Ue(){Je=new _0(L),Je.init(),Se=new l_(L,Je),A=new o0(L,Je,e,Se),x=new a_(L,Je),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),k=L.createFramebuffer(),D=L.createFramebuffer(),F=L.createFramebuffer(),H=new M0(L),X=new qg,J=new o_(L,Je,x,X,A,Se,H),fe=new g0(C),me=new yd(L),Ee=new s0(L,me),Q=new x0(L,me,H,Ee),re=new y0(L,Q,me,Ee,H),O=new S0(L,A,J),Ne=new l0(X),ve=new Xg(C,fe,Je,A,Ee,Ne),ze=new p_(C,X),be=new Zg,ye=new e_(Je),We=new r0(C,fe,x,re,g,c),qe=new s_(C,re,A),oe=new m_(L,H,A,x),Me=new a0(L,Je,H),ee=new v0(L,Je,H),H.programs=ve.programs,C.capabilities=A,C.extensions=Je,C.properties=X,C.renderLists=be,C.shadowMap=qe,C.state=x,C.info=H}v!==sn&&(T=new E0(v,t.width,t.height,o,r,s));const De=new f_(C,L);this.xr=De,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(Ke,K,!1))},this.getSize=function(M){return M.set(Ke,K)},this.setSize=function(M,N,z=!0){if(De.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=M,K=N,t.width=Math.floor(M*te),t.height=Math.floor(N*te),z===!0&&(t.style.width=M+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Ke*te,K*te).floor()},this.setDrawingBufferSize=function(M,N,z){Ke=M,K=N,te=z,t.width=Math.floor(M*z),t.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(v===sn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(Ce)},this.setViewport=function(M,N,z,V){M.isVector4?Ce.set(M.x,M.y,M.z,M.w):Ce.set(M,N,z,V),x.viewport(Z.copy(Ce).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ze)},this.setScissor=function(M,N,z,V){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,N,z,V),x.scissor(pe.copy(Ze).multiplyScalar(te).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(M){x.setScissorTest(mt=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,z=!0){let V=0;if(M){let W=!1;if(j!==null){const Ae=j.texture.format;W=m.has(Ae)}if(W){const Ae=j.texture.type,Ie=f.has(Ae),Re=We.getClearColor(),Fe=We.getClearAlpha(),Ge=Re.r,nt=Re.g,at=Re.b;Ie?(S[0]=Ge,S[1]=nt,S[2]=at,S[3]=Fe,L.clearBufferuiv(L.COLOR,0,S)):(w[0]=Ge,w[1]=nt,w[2]=at,w[3]=Fe,L.clearBufferiv(L.COLOR,0,w))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Jt,!1),We.dispose(),be.dispose(),ye.dispose(),X.dispose(),fe.dispose(),re.dispose(),Ee.dispose(),oe.dispose(),ve.dispose(),De.dispose(),De.removeEventListener("sessionstart",mr),De.removeEventListener("sessionend",gr),Sn.stop()};function xt(M){M.preventDefault(),kl("WebGLRenderer: Context Lost."),P=!0}function lt(){kl("WebGLRenderer: Context Restored."),P=!1;const M=H.autoReset,N=qe.enabled,z=qe.autoUpdate,V=qe.needsUpdate,W=qe.type;Ue(),H.autoReset=M,qe.enabled=N,qe.autoUpdate=z,qe.needsUpdate=V,qe.type=W}function Jt(M){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Qt(M){const N=M.target;N.removeEventListener("dispose",Qt),as(N)}function as(M){os(M),X.remove(M)}function os(M){const N=X.get(M).programs;N!==void 0&&(N.forEach(function(z){ve.releaseProgram(z)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,V,W,Ae){N===null&&(N=He);const Ie=W.isMesh&&W.matrixWorld.determinantAffine()<0,Re=Te(M,N,z,V,W);x.setMaterial(V,Ie);let Fe=z.index,Ge=1;if(V.wireframe===!0){if(Fe=Q.getWireframeAttribute(z),Fe===void 0)return;Ge=2}const nt=z.drawRange,at=z.attributes.position;let Oe=nt.start*Ge,gt=(nt.start+nt.count)*Ge;Ae!==null&&(Oe=Math.max(Oe,Ae.start*Ge),gt=Math.min(gt,(Ae.start+Ae.count)*Ge)),Fe!==null?(Oe=Math.max(Oe,0),gt=Math.min(gt,Fe.count)):at!=null&&(Oe=Math.max(Oe,0),gt=Math.min(gt,at.count));const Lt=gt-Oe;if(Lt<0||Lt===1/0)return;Ee.setup(W,V,Re,z,Fe);let bt,St=Me;if(Fe!==null&&(bt=me.get(Fe),St=ee,St.setIndex(bt)),W.isMesh)V.wireframe===!0?(x.setLineWidth(V.wireframeLinewidth*Ve()),St.setMode(L.LINES)):St.setMode(L.TRIANGLES);else if(W.isLine){let kt=V.linewidth;kt===void 0&&(kt=1),x.setLineWidth(kt*Ve()),W.isLineSegments?St.setMode(L.LINES):W.isLineLoop?St.setMode(L.LINE_LOOP):St.setMode(L.LINE_STRIP)}else W.isPoints?St.setMode(L.POINTS):W.isSprite&&St.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const kt=W._multiDrawStarts,Le=W._multiDrawCounts,qt=W._multiDrawCount,dt=Fe?me.get(Fe).bytesPerElement:1,an=X.get(V).currentProgram.getUniforms();for(let yn=0;yn<qt;yn++)an.setValue(L,"_gl_DrawID",yn),St.render(kt[yn]/dt,Le[yn])}else if(W.isInstancedMesh)St.renderInstances(Oe,Lt,W.count);else if(z.isInstancedBufferGeometry){const kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Le=Math.min(z.instanceCount,kt);St.renderInstances(Oe,Lt,Le)}else St.render(Oe,Lt)};function pr(M,N,z,V){I!==null&&M.isNodeMaterial&&I.setObject(V,M),ne===!0&&Ne.setState(M,z,!1),M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=Kt,M.needsUpdate=!0,Y(M,N,V),M.side=vi,M.needsUpdate=!0,Y(M,N,V),M.side=hn):Y(M,N,V)}this.compile=function(M,N,z=null){z===null&&(z=M),I!==null&&I.renderStart(M,N,z),E=ye.get(z),E.init(N),_.push(E),z.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),M!==z&&M.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),le=this.localClippingEnabled,ne=Ne.init(this.clippingPlanes,le),ne===!0&&Ne.setGlobalState(this.clippingPlanes,N),I!==null&&qe.render(E.state.shadowsArray,z,N);const V=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const Re=Ae[Ie];pr(Re,z,N,W),V.add(Re)}else pr(Ae,z,N,W),V.add(Ae)}),E=_.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(M,N,z=null){const V=this.compile(M,N,z);return new Promise(W=>{function Ae(){if(V.forEach(function(Ie){const Fe=X.get(Ie).currentProgram;(Fe===void 0||Fe.isReady())&&V.delete(Ie)}),V.size===0){W(M);return}setTimeout(Ae,10)}Je.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let dn=null;function ls(M){dn&&dn(M)}function mr(){Sn.stop()}function gr(){Sn.start()}const Sn=new Uu;Sn.setAnimationLoop(ls),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(M){dn=M,De.setAnimationLoop(M),M===null?Sn.stop():Sn.start()},De.addEventListener("sessionstart",mr),De.addEventListener("sessionend",gr),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(M,N);const z=De.enabled===!0&&De.isPresenting===!0,V=T!==null&&(j===null||z)&&T.begin(C,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(N),N=De.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,N,j),E=ye.get(M,_.length),E.init(N),E.state.textureUnits=J.getTextureUnits(),_.push(E),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),se.setFromProjectionMatrix(he,An,N.reversedDepth),le=this.localClippingEnabled,ne=Ne.init(this.clippingPlanes,le),b=be.get(M,R.length),b.init(),R.push(b),De.enabled===!0&&De.isPresenting===!0){const Ie=C.xr.getDepthSensingMesh();Ie!==null&&Pi(Ie,N,-1/0,C.sortObjects)}Pi(M,N,0,C.sortObjects),b.finish(),I!==null&&I.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(_e,ke),Be=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Be&&We.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Ne.beginShadows();const W=E.state.shadowsArray;if(qe.render(W,M,N),ne===!0&&Ne.endShadows(),(V&&T.hasRenderPass())===!1){const Ie=b.opaque,Re=b.transmissive;if(E.setupLights(),N.isArrayCamera){const Fe=N.cameras;if(Re.length>0)for(let Ge=0,nt=Fe.length;Ge<nt;Ge++){const at=Fe[Ge];_r(Ie,Re,M,at)}Be&&We.render(M);for(let Ge=0,nt=Fe.length;Ge<nt;Ge++){const at=Fe[Ge];Li(b,M,at,at.viewport)}}else Re.length>0&&_r(Ie,Re,M,N),Be&&We.render(M),Li(b,M,N)}j!==null&&B===0&&(J.updateMultisampleRenderTarget(j),J.updateRenderTargetMipmap(j)),V&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,N),Ee.resetDefaultState(),G=-1,q=null,_.pop(),_.length>0?(E=_[_.length-1],J.setTextureUnits(E.state.textureUnits),ne===!0&&Ne.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,I!==null&&I.renderEnd()};function Pi(M,N,z,V){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(se)){V&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);const Ie=re.update(M),Re=M.material;Re.visible&&b.push(M,Ie,Re,z,Xe.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(se))){const Ie=re.update(M),Re=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Xe.copy(Ie.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(he)),Array.isArray(Re)){const Fe=Ie.groups;for(let Ge=0,nt=Fe.length;Ge<nt;Ge++){const at=Fe[Ge],Oe=Re[at.materialIndex];Oe&&Oe.visible&&b.push(M,Ie,Oe,z,Xe.z,at,N)}}else Re.visible&&b.push(M,Ie,Re,z,Xe.z,null,N)}}const Ae=M.children;for(let Ie=0,Re=Ae.length;Ie<Re;Ie++)Pi(Ae[Ie],N,z,V)}function Li(M,N,z,V){const{opaque:W,transmissive:Ae,transparent:Ie}=M;E.setupLightsView(z),ne===!0&&Ne.setGlobalState(C.clippingPlanes,z),V&&x.viewport(Z.copy(V)),W.length>0&&ci(W,N,z),Ae.length>0&&ci(Ae,N,z),Ie.length>0&&ci(Ie,N,z),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _r(M,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Oe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Mn(1,1,{generateMipmaps:!0,type:Oe?Ln:sn,minFilter:mi,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Ae=E.state.transmissionRenderTarget[V.id],Ie=V.viewport||Z;Ae.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);const Re=C.getRenderTarget(),Fe=C.getActiveCubeFace(),Ge=C.getActiveMipmapLevel();C.setRenderTarget(Ae),C.getClearColor(Qe),Ye=C.getClearAlpha(),Ye<1&&C.setClearColor(16777215,.5),C.clear(),Be&&We.render(z);const nt=C.toneMapping;C.toneMapping=Rn;const at=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),ne===!0&&Ne.setGlobalState(C.clippingPlanes,V),ci(M,z,V),J.updateMultisampleRenderTarget(Ae),J.updateRenderTargetMipmap(Ae),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let gt=0,Lt=N.length;gt<Lt;gt++){const bt=N[gt],{object:St,geometry:kt,material:Le,group:qt}=bt;if(Le.side===hn&&St.layers.test(V.layers)){const dt=Le.side;Le.side=Kt,Le.needsUpdate=!0,cs(St,z,V,kt,Le,qt),Le.side=dt,Le.needsUpdate=!0,Oe=!0}}Oe===!0&&(J.updateMultisampleRenderTarget(Ae),J.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Re,Fe,Ge),C.setClearColor(Qe,Ye),at!==void 0&&(V.viewport=at),C.toneMapping=nt}function ci(M,N,z){const V=N.isScene===!0?N.overrideMaterial:null;for(let W=0,Ae=M.length;W<Ae;W++){const Ie=M[W],{object:Re,geometry:Fe,group:Ge}=Ie;let nt=Ie.material;nt.allowOverride===!0&&V!==null&&(nt=V),Re.layers.test(z.layers)&&cs(Re,N,z,Fe,nt,Ge)}}function cs(M,N,z,V,W,Ae){I!==null&&W.isNodeMaterial&&I.setObject(M,W),M.onBeforeRender(C,N,z,V,W,Ae),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(C,N,z,V,M,Ae),W.transparent===!0&&W.side===hn&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,C.renderBufferDirect(z,N,V,W,M,Ae),W.side=vi,W.needsUpdate=!0,C.renderBufferDirect(z,N,V,W,M,Ae),W.side=hn):C.renderBufferDirect(z,N,V,W,M,Ae),M.onAfterRender(C,N,z,V,W,Ae)}function Y(M,N,z){N.isScene!==!0&&(N=He);const V=X.get(M),W=E.state.lights,Ae=E.state.shadowsArray,Ie=W.state.version,Re=ve.getParameters(M,W.state,Ae,N,z,E.state.lightProbeGridArray),Fe=ve.getProgramCacheKey(Re);let Ge=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const nt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=fe.get(M.envMap||V.environment,nt),V.envMapRotation=V.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",Qt),Ge=new Map,V.programs=Ge);let at=Ge.get(Fe);if(at!==void 0){if(V.currentProgram===at&&V.lightsStateVersion===Ie)return ue(M,Re),at}else Re.uniforms=ve.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,z,Re),M.onBeforeCompile(Re,C),at=ve.acquireProgram(Re,Fe),Ge.set(Fe,at),V.uniforms=Re.uniforms;const Oe=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Ne.uniform),ue(M,Re),V.needsLights=ct(M),V.lightsStateVersion=Ie,V.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.sunLights.value=W.state.sun,Oe.sunLightShadows.value=W.state.sunShadow,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.sunShadowMatrix.value=W.state.sunShadowMatrix,Oe.sunShadowCascade.value=W.state.sunShadowCascade,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=at,V.uniformsList=null,at}function ie(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=qs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ue(M,N){const z=X.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Pe(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let z=0,V=M.length;z<V;z++){const W=M[z];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Te(M,N,z,V,W){N.isScene!==!0&&(N=He),J.resetTextureUnits();const Ae=N.fog,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,Re=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ut.workingColorSpace,Fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ge=fe.get(V.envMap||Ie,Fe),nt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,at=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!z.morphAttributes.position,gt=!!z.morphAttributes.normal,Lt=!!z.morphAttributes.color;let bt=Rn;V.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(bt=C.toneMapping);const St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,kt=St!==void 0?St.length:0,Le=X.get(V),qt=E.state.lights;if(ne===!0&&(le===!0||M!==q)){const yt=M===q&&V.id===G;Ne.setState(V,M,yt)}let dt=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==qt.state.version||Le.outputColorSpace!==Re||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Ge||V.fog===!0&&Le.fog!==Ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ne.numPlanes||Le.numIntersection!==Ne.numIntersection)||Le.vertexAlphas!==nt||Le.vertexTangents!==at||Le.morphTargets!==Oe||Le.morphNormals!==gt||Le.morphColors!==Lt||Le.toneMapping!==bt||Le.morphTargetsCount!==kt||!!Le.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Le.__version=V.version);let an=Le.currentProgram;dt===!0&&(an=Y(V,N,W),I&&V.isNodeMaterial&&I.onUpdateProgram(V,an,Le));let yn=!1,$n=!1,Ii=!1;const vt=an.getUniforms(),Rt=Le.uniforms;if(x.useProgram(an.program)&&(yn=!0,$n=!0,Ii=!0),V.id!==G&&(G=V.id,$n=!0),Le.needsLights){const yt=Pe(E.state.lightProbeGridArray,W);Le.lightProbeGrid!==yt&&(Le.lightProbeGrid=yt,$n=!0)}if(yn||q!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",M.projectionMatrix),vt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Jn=vt.map.cameraPosition;Jn!==void 0&&Jn.setValue(L,xe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,$n=!0,Ii=!0)}if(Le.needsLights&&(qt.state.sunShadowMap.length>0&&vt.setValue(L,"sunShadowMap",qt.state.sunShadowMap,J),qt.state.directionalShadowMap.length>0&&vt.setValue(L,"directionalShadowMap",qt.state.directionalShadowMap,J),qt.state.spotShadowMap.length>0&&vt.setValue(L,"spotShadowMap",qt.state.spotShadowMap,J),qt.state.pointShadowMap.length>0&&vt.setValue(L,"pointShadowMap",qt.state.pointShadowMap,J)),W.isSkinnedMesh){vt.setOptional(L,W,"bindMatrix"),vt.setOptional(L,W,"bindMatrixInverse");const yt=W.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),vt.setValue(L,"boneTexture",yt.boneTexture,J))}W.isBatchedMesh&&(vt.setOptional(L,W,"batchingTexture"),vt.setValue(L,"batchingTexture",W._matricesTexture,J),vt.setOptional(L,W,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",W._indirectTexture,J),vt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",W._colorsTexture,J));const Kn=z.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&O.update(W,z,an),($n||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,vt.setValue(L,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Rt.envMapIntensity.value=N.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=__()),$n){if(vt.setValue(L,"toneMappingExposure",C.toneMappingExposure),Le.needsLights&&st(Rt,Ii),Ae&&V.fog===!0&&ze.refreshFogUniforms(Rt,Ae),ze.refreshMaterialUniforms(Rt,V,te,K,E.state.transmissionRenderTarget[M.id]),Le.needsLights&&Le.lightProbeGrid){const yt=Le.lightProbeGrid;Rt.probesSH.value=yt.texture,Rt.probesMin.value.copy(yt.boundingBox.min),Rt.probesMax.value.copy(yt.boundingBox.max),Rt.probesResolution.value.copy(yt.resolution)}qs.upload(L,ie(Le),Rt,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qs.upload(L,ie(Le),Rt,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(L,"center",W.center),vt.setValue(L,"modelViewMatrix",W.modelViewMatrix),vt.setValue(L,"normalMatrix",W.normalMatrix),vt.setValue(L,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const yt=V.uniformsGroups;for(let Jn=0,Di=yt.length;Jn<Di;Jn++){const Nl=yt[Jn];oe.update(Nl,an),oe.bind(Nl,an)}}return an}function st(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function ct(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,N,z){const V=X.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=N,X.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const z=X.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,z=0){j=M,$=N,B=z;let V=null,W=!1,Ae=!1;if(M){const Re=X.get(M);if(Re.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,Re.__webglFramebuffer),Z.copy(M.viewport),pe.copy(M.scissor),ge=M.scissorTest,x.viewport(Z),x.scissor(pe),x.setScissorTest(ge),G=-1;return}else if(Re.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(Re.__hasExternalTextures)J.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const nt=M.depthTexture;if(Re.__boundDepthTexture!==nt){if(nt!==null&&X.has(nt)&&(M.width!==nt.image.width||M.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ae=!0);const Ge=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?V=Ge[N][z]:V=Ge[N],W=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?V=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Ge)?V=Ge[z]:V=Ge,Z.copy(M.viewport),pe.copy(M.scissor),ge=M.scissorTest}else Z.copy(Ce).multiplyScalar(te).floor(),pe.copy(Ze).multiplyScalar(te).floor(),ge=mt;if(z!==0&&(V=k),x.bindFramebuffer(L.FRAMEBUFFER,V)&&x.drawBuffers(M,V),x.viewport(Z),x.scissor(pe),x.setScissorTest(ge),W){const Re=X.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,z)}else if(Ae){const Re=N;for(let Fe=0;Fe<M.textures.length;Fe++){const Ge=X.get(M.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,Ge.__webglTexture,z,Re)}}else if(M!==null&&z!==0){const Re=X.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,z)}G=-1};function Et(M){const N=X.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=A.textureFormatReadable(M.format),N.__typeReadable=A.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,z,V,W,Ae,Ie,Re=0){if(!(M&&M.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){x.bindFramebuffer(L.FRAMEBUFFER,Fe);try{const Ge=M.textures[Re],nt=Ge.format,at=Ge.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re);const Oe=Et(Ge);if(Oe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-V&&z>=0&&z<=M.height-W&&L.readPixels(N,z,V,W,Se.convert(nt),Se.convert(at),Ae)}finally{const Ge=j!==null?X.get(j).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(M,N,z,V,W,Ae,Ie,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(N>=0&&N<=M.width-V&&z>=0&&z<=M.height-W){x.bindFramebuffer(L.FRAMEBUFFER,Fe);const Ge=M.textures[Re],nt=Ge.format,at=Ge.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re);const Oe=Et(Ge);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.bufferData(L.PIXEL_PACK_BUFFER,Ae.byteLength,L.STREAM_READ),L.readPixels(N,z,V,W,Se.convert(nt),Se.convert(at),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Lt=j!==null?X.get(j).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Lt);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bh(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ae),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(gt),L.deleteSync(bt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,z=0){const V=Math.pow(2,-z),W=Math.floor(M.image.width*V),Ae=Math.floor(M.image.height*V),Ie=N!==null?N.x:0,Re=N!==null?N.y:0;J.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,Ie,Re,W,Ae),x.unbindTexture()},this.copyTextureToTexture=function(M,N,z=null,V=null,W=0,Ae=0){let Ie,Re,Fe,Ge,nt,at,Oe,gt,Lt;const bt=M.isCompressedTexture?M.mipmaps[Ae]:M.image;if(z!==null)Ie=z.max.x-z.min.x,Re=z.max.y-z.min.y,Fe=z.isBox3?z.max.z-z.min.z:1,Ge=z.min.x,nt=z.min.y,at=z.isBox3?z.min.z:0;else{const Rt=Math.pow(2,-W);Ie=Math.floor(bt.width*Rt),Re=Math.floor(bt.height*Rt),M.isDataArrayTexture?Fe=bt.depth:M.isData3DTexture?Fe=Math.floor(bt.depth*Rt):Fe=1,Ge=0,nt=0,at=0}V!==null?(Oe=V.x,gt=V.y,Lt=V.z):(Oe=0,gt=0,Lt=0);const St=Se.convert(N.format),kt=Se.convert(N.type);let Le;N.isData3DTexture?(J.setTexture3D(N,0),Le=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Le=L.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Le=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const qt=x.getParameter(L.UNPACK_ROW_LENGTH),dt=x.getParameter(L.UNPACK_IMAGE_HEIGHT),an=x.getParameter(L.UNPACK_SKIP_PIXELS),yn=x.getParameter(L.UNPACK_SKIP_ROWS),$n=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),x.pixelStorei(L.UNPACK_SKIP_ROWS,nt),x.pixelStorei(L.UNPACK_SKIP_IMAGES,at);const Ii=M.isDataArrayTexture||M.isData3DTexture,vt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Rt=X.get(M),Kn=X.get(N),yt=X.get(Rt.__renderTarget),Jn=X.get(Kn.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,yt.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Di=0;Di<Fe;Di++)Ii&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(M).__webglTexture,W,at+Di),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(N).__webglTexture,Ae,Lt+Di)),L.blitFramebuffer(Ge,nt,Ie,Re,Oe,gt,Ie,Re,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||X.has(M)){const Rt=X.get(M),Kn=X.get(N);x.bindFramebuffer(L.READ_FRAMEBUFFER,D),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let yt=0;yt<Fe;yt++)Ii?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,W,at+yt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rt.__webglTexture,W),vt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kn.__webglTexture,Ae,Lt+yt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kn.__webglTexture,Ae),W!==0?L.blitFramebuffer(Ge,nt,Ie,Re,Oe,gt,Ie,Re,L.COLOR_BUFFER_BIT,L.NEAREST):vt?L.copyTexSubImage3D(Le,Ae,Oe,gt,Lt+yt,Ge,nt,Ie,Re):L.copyTexSubImage2D(Le,Ae,Oe,gt,Ge,nt,Ie,Re);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Le,Ae,Oe,gt,Lt,Ie,Re,Fe,St,kt,bt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,Ae,Oe,gt,Lt,Ie,Re,Fe,St,bt.data):L.texSubImage3D(Le,Ae,Oe,gt,Lt,Ie,Re,Fe,St,kt,bt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ae,Oe,gt,Ie,Re,St,kt,bt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ae,Oe,gt,bt.width,bt.height,St,bt.data):L.texSubImage2D(L.TEXTURE_2D,Ae,Oe,gt,Ie,Re,St,kt,bt);x.pixelStorei(L.UNPACK_ROW_LENGTH,qt),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),x.pixelStorei(L.UNPACK_SKIP_PIXELS,an),x.pixelStorei(L.UNPACK_SKIP_ROWS,yn),x.pixelStorei(L.UNPACK_SKIP_IMAGES,$n),Ae===0&&N.generateMipmaps&&L.generateMipmap(Le),x.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){$=0,B=0,j=null,x.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const wr=new U;function ln(n,e,t,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;wr.copy(e),wr[i]=0,wr.normalize();const l=.5*a/(a+o),u=1-wr.angleTo(n)/c;return Math.sign(wr[t])===1?u*l:o/(a+o)+l+l*(1-u)}class yl extends Yn{constructor(e=1,t=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new U,l=new U,u=new U(e,t,i).divideScalar(2).subScalar(s),p=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=p.length/6,v=new U,m=.5/a;for(let f=0,S=0;f<p.length;f+=3,S+=2)switch(c.fromArray(p,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[f+0]=u.x*Math.sign(c.x)+l.x*s,p[f+1]=u.y*Math.sign(c.y)+l.y*s,p[f+2]=u.z*Math.sign(c.z)+l.z*s,h[f+0]=l.x,h[f+1]=l.y,h[f+2]=l.z,Math.floor(f/g)){case 0:v.set(1,0,0),d[S+0]=ln(v,l,"z","y",s,i),d[S+1]=1-ln(v,l,"y","z",s,t);break;case 1:v.set(-1,0,0),d[S+0]=1-ln(v,l,"z","y",s,i),d[S+1]=1-ln(v,l,"y","z",s,t);break;case 2:v.set(0,1,0),d[S+0]=1-ln(v,l,"x","z",s,e),d[S+1]=ln(v,l,"z","x",s,i);break;case 3:v.set(0,-1,0),d[S+0]=1-ln(v,l,"x","z",s,e),d[S+1]=1-ln(v,l,"z","x",s,i);break;case 4:v.set(0,0,1),d[S+0]=1-ln(v,l,"x","y",s,e),d[S+1]=1-ln(v,l,"y","x",s,t);break;case 5:v.set(0,0,-1),d[S+0]=ln(v,l,"x","y",s,e),d[S+1]=1-ln(v,l,"y","x",s,t);break}}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.segments,e.radius)}}class v_ extends _u{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Yn;e.deleteAttribute("uv");const t=new cn({side:Kt}),i=new cn,r=new gd(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Dt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Ef(e,i,6),o=new Ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Dt(e,$i(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Dt(e,$i(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new Dt(e,$i(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const p=new Dt(e,$i(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const h=new Dt(e,$i(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const d=new Dt(e,$i(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function $i(n){return new hd({color:0,emissive:16777215,emissiveIntensity:n})}const oa=.75,M_=-.19*oa,tn=Object.freeze({width:.48,depth:.36,thickness:.013,corner:.004}),bl=.001,zr=tn.width/2-bl,Gr=tn.depth/2-bl,oi=tn.corner-bl,ts=Array.from({length:56},(n,e)=>e/56*Math.PI*2);for(const n of[-1,1])for(const e of[-1,1])for(const[t,i]of[[zr,Gr-oi],[zr-oi,Gr],[zr-oi,Gr-oi]])ts.push((Math.atan2(e*i,n*t)+Math.PI*2)%(Math.PI*2));ts.sort((n,e)=>n-e);ts.push(Math.PI*2);function S_(n){const e=Math.abs(Math.cos(n)),t=Math.abs(Math.sin(n));let i=Math.min(zr/e,Gr/t);const r=zr-oi,s=Gr-oi;if(i*e>r&&i*t>s){const a=e*r+t*s;i=a+Math.sqrt(Math.max(0,a*a-r*r-s*s+oi*oi))}return i}function y_(n,e,t=0){const i=Math.sin(e*Math.PI*2),r=(n-.5)*.38+i*(.003*Math.sin(e*23)+.003)*Math.abs(n-.5)*2,s=(e-.5)*.245*(.92+.06*Math.sin(n*10)+.02*Math.cos(n*29)),a=-t*Math.pow(n,1.2)+t*.14*Math.sin(e*16+n*3)*Math.sin(n*Math.PI);return[r*oa,a,s*oa]}function un(n,e,t,i=[0,0,0]){const r=new Dt(n,e);return r.position.set(...i),t.add(r),r}function b_(n){const e={};for(const t of["outer","inner"]){const i=t==="inner",r=document.createElement("canvas");r.width=768,r.height=512;const s=r.getContext("2d");let a=64175;const o=()=>(a=Math.imul(a,1664525)+1013904223>>>0)/4294967296;s.fillStyle=i?"rgba(231,229,203,.22)":"rgba(151,68,118,.36)",s.fillRect(0,0,768,512);const c=38,l=19,u=512/c,p=768/l,h=Array.from({length:c+2},(g,v)=>Array.from({length:l+3},(m,f)=>[(f-1+v%2*.38+(o()-.5)*.28)*p,(v+(o()-.5)*.26)*u]));for(let g=0;g<=c;g++)for(let v=0;v<=l+1;v++){const m=[h[g][v],h[g][v+1],h[g+1][v+1],h[g+1][v]];s.beginPath(),m.forEach(([f,S],w)=>w?s.lineTo(f,S):s.moveTo(f,S)),s.closePath(),s.fillStyle=i?`rgba(209,205,166,${.025+o()*.045})`:`rgba(103,33,79,${.035+o()*.13})`,s.fill(),s.strokeStyle=i?"rgba(243,243,215,.14)":"rgba(221,169,193,.15)",s.lineWidth=.65,s.stroke()}for(let g=0;g<19;g++){s.beginPath();const v=o()*512;s.moveTo(0,v),s.bezierCurveTo(200,v-13,510,v+11,768,v-5),s.strokeStyle=i?"rgba(255,255,235,.045)":"rgba(244,202,219,.055)",s.lineWidth=1+o(),s.stroke()}s.globalCompositeOperation="destination-out";for(let g=0;g<30;g++){const v=o()*768,m=g%2?0:512;s.beginPath(),s.ellipse(v,m,2+o()*6,1+o()*4,0,0,Math.PI*2),s.fill()}const d=new yu(r);d.colorSpace=$t,e[t]=d,n(d)}return e}function E_(n,e){const t=new Ei(1,1,28,18),i=new cn({map:e.outer,transparent:!0,opacity:.92,color:"#ffffff",roughness:.38,metalness:0,side:hn,depthWrite:!1}),r=un(t,i,n);r.renderOrder=2;const s=t.attributes.position,a=t.attributes.uv;let o=NaN;function c(l,u){if(i.map=e[u],i.opacity=u==="inner"?.85:.96,l!==o){o=l;for(let p=0;p<s.count;p++)s.setXYZ(p,...y_(a.getX(p),a.getY(p),l));s.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingSphere()}}return c(0,"outer"),{update:c,material:i}}function T_(n){const e=new vn;e.position.set(.045,.0155,.02),n.add(e);const t=ts.length-1,i=12,r=[],s=[];for(let g=0;g<=i;g++)for(let v=0;v<=t;v++)r.push(0,0,0);for(let g=0;g<i;g++)for(let v=0;v<t;v++){const m=g*(t+1)+v,f=m+t+1;s.push(m,m+1,f,m+1,f+1,f)}const a=new wt;a.setAttribute("position",new pt(r,3)),a.setIndex(s);const o=new zn({color:"#edf7f5",roughness:.065,metalness:0,transmission:.8,thickness:.025,ior:1.333,transparent:!0,opacity:.26,envMapIntensity:.4,depthWrite:!1});un(a,o,e).renderOrder=1;const c=new wt;c.setAttribute("position",new pt(new Float32Array((t+1)*3),3));const l=new sa(c,new yi({color:"#d4ebe6",transparent:!0,opacity:.36,depthWrite:!1}));e.add(l);const u=new wt;u.setAttribute("position",new pt(new Float32Array(45),3));const p=new sa(u,new yi({color:"#f3ffff",transparent:!0,opacity:.62,depthWrite:!1}));e.add(p);let h="";function d(g=1,v=1,m=0,f=!1){e.position.set(.045*(1-v),.0155,.02*(1-v)),e.scale.setScalar(g),o.color.set(f?"#4ca7ad":"#edf7f5"),o.transmission=f?.56:.8,o.opacity=f?.43:.26;const S=v+":"+m;if(S===h)return;h=S;const w=.185,y=.135,b=(.0365*(1-v)+.009*v)*(1+m*.35),E=a.attributes.position,R=c.attributes.position;for(let _=0;_<=i;_++)for(let T=0;T<=t;T++){const C=_/i,P=ts[T],I=Math.cos(P),k=Math.sin(P),D=1+(1-v)*(.018*Math.sin(P*3)+.01*Math.sin(P*7)),F=S_(P),$=I*C*(w*D*(1-v)+F*v),B=k*C*(y*D*(1-v)+F*v),j=b*((1-v)*Math.pow(1-C*C,1.15)+v*(1-.08*Math.pow(C,20)))+m*.005*Math.sin(C*Math.PI*3)*(1-C);E.setXYZ(_*(t+1)+T,$,j,B),_===i&&R.setXYZ(T,$,j+6e-4,B)}for(let _=0;_<15;_++){const T=.25+_/14*.9,C=.82;u.attributes.position.setXYZ(_,Math.cos(T)*w*C,b*.31+.001,Math.sin(T)*y*C)}E.needsUpdate=!0,R.needsUpdate=!0,u.attributes.position.needsUpdate=!0,a.computeVertexNormals(),a.computeBoundingSphere(),c.computeBoundingSphere(),u.computeBoundingSphere(),p.material.opacity=.6*(1-v),l.material.opacity=.36-.16*v}return d(),{group:e,update:d}}function A_(n){const e=new vn;n.add(e);const t=new zn({color:"#edf7f4",roughness:.07,metalness:0,transmission:.88,thickness:.009,ior:1.47,transparent:!0,opacity:.92,depthWrite:!1}),i=[[.009,0],[.012,.055],[.021,.19],[.034,.31],[.038,.83],[.043,.88]],r=un(new jr(i.map(([d,g])=>new de(d,g)),32),t,e);r.castShadow=!1;const s=un(new ss(.009,.0024,6,24),t,e,[0,.001,0]);s.rotation.x=Math.PI/2;const a=un(new li(.029,.015,.56,24),new zn({color:"#d4e8e1",transmission:.82,roughness:.08,ior:1.333,thickness:.03,transparent:!0,opacity:.7,depthWrite:!1}),e,[0,.45,0]),o=un(new fa(.029,24),new ai({color:"#c1ddd4",transparent:!0,opacity:.28,side:hn}),e,[0,.731,0]);o.rotation.x=-Math.PI/2;const c=new wt().setFromPoints([new U(.012,.07,.008),new U(.026,.29,.019),new U(.031,.82,.025)]);e.add(new sa(c,new yi({color:"#eef8f5",transparent:!0,opacity:.52})));const l=new cn({color:"#242c2d",roughness:.8,metalness:.02});un(new li(.064,.057,.065,28),l,e,[0,.878,0]);const u=new vn;u.position.y=.91,e.add(u);const p=[[.059,0],[.066,.025],[.077,.07],[.083,.18],[.077,.27],[.058,.325],[.028,.35],[0,.36]];un(new jr(p.map(([d,g])=>new de(d,g)),28),l,u).castShadow=!0;function h(d=0){u.scale.set(1+d*.08,1-d*.17,1-d*.13),a.scale.y=1-d*.055,o.position.y=.731-d*.03}return{root:e,update:h}}function w_(n){const e=new vn;n.add(e);const t=new cn({color:"#aebbbc",roughness:.31,metalness:.84}),i=[];for(const a of[-1,1]){const o=new vn;o.position.y=1.08,e.add(o);const c=new aa,l=(h,d)=>[a*h,d-1.08];c.moveTo(...l(.0035,0)),c.lineTo(...l(.009,.12)),c.bezierCurveTo(...l(.015,.25),...l(.068,.48),...l(.057,.76)),c.quadraticCurveTo(...l(.047,.99),...l(.014,1.08)),c.lineTo(...l(.036,1.08)),c.quadraticCurveTo(...l(.091,.94),...l(.092,.72)),c.bezierCurveTo(...l(.094,.46),...l(.028,.21),...l(.021,.1)),c.lineTo(...l(.0135,0)),c.closePath();const u=un(new Qr(c,{depth:.023,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:1,curveSegments:14}),t,o,[0,0,-.0115]);u.castShadow=!0;const p=[];for(let h=0;h<12;h++){const d=.43+h*.024,g=.066+.01*Math.sin(h/11*Math.PI);p.push(new U(a*(g-.012),d-1.08,.014),new U(a*(g+.012),d-1.08,.014))}o.add(new Vo(new wt().setFromPoints(p),new yi({color:"#687b7d",transparent:!0,opacity:.65}))),i.push({arm:o,side:a})}const r=un(new ss(.025,.013,8,20,Math.PI),t,e,[0,1.08,0]);r.castShadow=!0;function s(a=0){for(const{arm:o,side:c}of i)o.rotation.z=c*a*.065}return{root:e,update:s}}function R_(n){const e=new vn;n.add(e);const t=new zn({color:"#edf8f6",roughness:.025,metalness:0,transmission:.92,ior:1.333,thickness:.08,transparent:!0,opacity:.94,depthWrite:!1});un(new es(.052,28,20),t,e);const i=un(new li(.008,.022,1,16),t,n);i.visible=!1;function r(s,a){if(e.visible=s.visible,e.position.set(...s.position),e.scale.set(...s.scale),i.visible=s.visible&&s.attached,i.visible){const o=s.position[1]+.026*s.scale[1],c=Math.max(.001,a[1]-o);i.position.set(a[0],o+c/2,a[2]),i.scale.set(s.scale[0],c,s.scale[2])}}return{update:r}}const Vu=n=>Math.max(0,Math.min(1,n)),C_=n=>{const e=Vu(n);return e*e*e*(e*(e*6-15)+10)},ot=(n,e,t)=>C_((n-e)/(t-e)),Ct=(n,e,t)=>t<=0?n:t>=1?e:n+(e-n)*t,ri=(n,e,t)=>n.map((i,r)=>Ct(i,e[r],t)),eo=n=>n==="inner"?"inner":"outer",Yc=(n,e,t,i=0)=>{const r=n.rotation[1],s=Math.cos(r),a=Math.sin(r);return[n.position[0]+s*e+a*i,n.position[1]+t,n.position[2]-a*e+s*i]};function Ki(n,e,t){return{position:ri(n.position,e.position,t),target:ri(n.target,e.target,t),zoom:Ct(n.zoom,e.zoom,t)}}function Zc(n,e={},t=1.3){const i=n?.phase||"focusing",r=Math.max(0,Number(n?.elapsed)||0),s=Math.max(.001,Number(n?.duration)||(i==="preparing"?15:i==="swapping"?3:1.1)),a=eo(e.tissue),o=eo(n?.fromTissue||a),c=eo(n?.toTissue||a),u=[-1.18,2.153+Math.max(-1,Math.min(1,Number(e.focus)||0))*.055,.505],p=[.35,.065,1.7],h={position:[7.3,6.8,11.3],target:[.43,1.6,.05],zoom:Math.min(1.31,Math.max(.48,t*1.01))},d={position:[1.95,2.83,4.45],target:[.4,.68,1.7],zoom:Math.min(1.02,Math.max(.5,t*.95))},g={position:[1.75,4.55,5.2],target:[-1.18,2.2,.54],zoom:Math.min(1.12,Math.max(.58,t*.95))},v={position:[-.825,5.177,.811],target:[-.895,4.574,.497],zoom:Math.min(1,Math.max(.6,t))},m=S=>({visible:!0,tissue:S,position:[...u],rotation:[0,-.09,0],specimenVisible:!0,specimenX:0,specimenY:.022,specimenTilt:0,specimenScale:1,specimenCurl:0,coverVisible:!0,coverY:.033,coverAngle:0,fluidVisible:!0,fluidScale:1,fluidCompression:1,fluidImpact:0}),f={phase:i,elapsed:r,camera:h,primary:m(a),secondary:m(c),clampOpen:0,turretOffset:0,interactive:i==="focusing",pipette:{active:!1,position:[2.65,.09,1.1],rotation:[0,-.2,Math.PI/2],squeeze:0},tweezers:{visible:!1,position:[.35,1.5,1.7],rotation:[0,.1,-.24],opening:0},drop:{visible:!1,attached:!1,position:[.43,.5,1.7],scale:[1,1,1]},ripple:{visible:!1,position:[.43,.108,1.7],scale:1,opacity:0}};if(f.secondary.visible=!1,i==="welcome")f.primary.visible=!1,f.clampOpen=.42;else if(i==="preparing"){const S=Math.min(15,r),w=f.primary;w.tissue=c,w.position=ri([2.7,.12,1.7],p,ot(S,.1,1.8)),w.rotation=[0,Ct(.14,-.09,ot(S,.1,1.8)),0],w.specimenVisible=S>=4,w.coverVisible=S>=7,w.fluidVisible=S>=3.05,w.fluidScale=S<3.25?Ct(.18,.68,ot(S,3.05,3.25)):Ct(.68,1,ot(S,3.25,3.85)),w.fluidCompression=ot(S,8.35,9.65),w.fluidImpact=Math.sin(ot(S,3.05,3.6)*Math.PI)*(1-ot(S,3.05,3.6)),f.clampOpen=1-ot(S,12.45,13),f.turretOffset=Math.PI*2/3*(1-ot(S,13,14.6)),f.camera=Ki(h,d,ot(S,0,2));const y=Yc(w,.045,.0155,.02);if(S>=1.8&&S<4.15){const b=ot(S,1.8,2.4),E=ot(S,3.35,4.15);f.pipette.active=!0;const R=[2.65,.09,1.1],_=[y[0],.66,y[2]];f.pipette.position=E>0?ri(_,R,E):ri(R,_,b),f.pipette.position[1]+=Math.sin((E>0?E:b)*Math.PI)*.42;const T=b*(1-E);f.pipette.rotation=[0,Ct(-.2,0,T),Ct(Math.PI/2,0,T)],f.pipette.squeeze=ot(S,2.4,2.76)*(1-ot(S,2.88,3.28))}if(S>=2.4&&S<3.18){f.drop.visible=!0;const b=ot(S,2.4,2.8),E=Vu((S-2.8)/.25),R=ot(S,3.05,3.18);f.drop.attached=S<2.8,f.drop.position=[y[0],S<2.8?.66-Ct(.01,.06,b):Ct(.6,y[1]+.052*1.1,E*E),y[2]],f.drop.scale=S<2.8?[Ct(.12,.9,b),Ct(.2,1.1,b),Ct(.12,.9,b)]:[Ct(.9,1.8,R),Ct(1.1,.12,R),Ct(.9,1.4,R)],R>0&&(f.drop.position[1]=y[1]+.052*f.drop.scale[1])}if(S>=3.05&&S<3.85){const b=ot(S,3.05,3.85);f.ripple.visible=!0,f.ripple.position=[y[0],y[1]+.002,y[2]],f.ripple.scale=Ct(.25,.95,b),f.ripple.opacity=Math.sin(b*Math.PI)*.22}if(S>=4&&S<7.2){const b=ot(S,4,5.4),E=ot(S,5.4,6.3),R=ot(S,6.55,7.2);w.specimenCurl=.17*oa*(1-E),w.specimenY=.022+w.specimenCurl+.48*(1-b),w.specimenX=Ct(Math.max(3,t*1.5),0,b),f.tweezers.visible=!0,f.tweezers.position=Yc(w,w.specimenX+M_,w.specimenY),f.tweezers.position[0]-=R*1.8,f.tweezers.position[1]+=R*2,f.tweezers.opening=ot(S,6.25,6.55),f.tweezers.rotation=[0,-.09,.3+R*.15]}if(S>=7&&S<10&&(w.coverY=Ct(.85,.033,ot(S,7,8.15)),w.coverAngle=Ct(1.1,0,ot(S,8.15,9.65))),S>=10){const b=[.35,2.34,1.7],E=[-1.18,2.34,.66];w.position=S<11.25?ri(p,b,ot(S,10,11.25)):S<12.35?ri(b,E,ot(S,11.25,12.35)):ri(E,u,ot(S,12.35,12.85)),f.camera=Ki(d,g,ot(S,10,12.6))}S>=13&&(f.camera=Ki(g,h,ot(S,13,15)))}else if(i==="entering")f.camera=Ki(h,v,ot(r,0,s));else if(i==="observing")f.camera=v;else if(i==="swapping"){const S=Math.min(3,r);f.primary.tissue=o,f.secondary.tissue=c,f.camera=S<.4?Ki(v,g,ot(S,0,.4)):S<2?g:Ki(g,v,ot(S,2,3)),f.clampOpen=ot(S,.4,.65)*(1-ot(S,1.82,2)),f.primary.visible=S<1.2;const w=ot(S,.48,.7);f.primary.position=[Ct(u[0],-3.5,ot(S,.68,1.2)),u[1]+w*.075,u[2]],f.secondary.visible=S>=1.2,f.secondary.position=[Ct(1.1,u[0],ot(S,1.2,1.82)),u[1]+.075*(1-ot(S,1.82,2)),u[2]]}return f}function P_(n,e={}){const t=new _u;t.background=new tt("#171c1e"),t.fog=new ml("#171c1e",19,37);const i=new rn(37,1,.1,55),r=new x_({antialias:!0,alpha:!1,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),r.shadowMap.enabled=!0,r.shadowMap.type=Qc,r.toneMapping=nl,r.toneMappingExposure=.94,r.outputColorSpace=$t,r.domElement.setAttribute("aria-label","三维显微镜实验桌。点击试剂瓶选择溶液；拖动调焦旋钮，或用滚轮调焦。"),r.domElement.setAttribute("role","img"),r.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none;",r.domElement.tabIndex=0,n.appendChild(r.domElement);const s=new $o(r),a=new v_,o=s.fromScene(a,.045);t.environment=o.texture,t.environmentIntensity=.72,a.dispose(),s.dispose();const c=new Set,l=[],u=new Map,p=[],h=new U;let d=!1,g=!1,v=!0,m="",f=!1,S={objective:4,eyepiece:10,focus:0,selectedSolution:"sucrose",dosing:0},w=0,y=0,b=null,E=null;const R=(Y,ie=.5,ue=0)=>new cn({color:Y,roughness:ie,metalness:ue}),_=R("#e5e4d9",.29,.13),T=R("#c3c7bf",.38,.22),C=R("#171d20",.44,.35),P=R("#0b1012",.78,.03),I=R("#b8c2bf",.24,.88),k=R("#657477",.38,.8),D=R("#272f31",.3,.65),F=new zn({color:"#142f33",metalness:.35,roughness:.09,clearcoat:1,clearcoatRoughness:.03}),$=new cn({color:"#fff4d7",emissive:"#fff1ce",emissiveIntensity:1.25,roughness:.25});function B(Y,ie,ue=t,Pe,Te){const st=new Dt(Y,ie);return Pe&&st.position.set(...Pe),Te&&st.rotation.set(...Te),st.castShadow=!0,st.receiveShadow=!0,ue.add(st),st}function j(Y,ie,ue,Pe,Te,st,ct=.04){return B(new yl(Y,ie,ue,3,Math.min(ct,Y/3,ie/3,ue/3)),Pe,Te,st)}function G(Y,ie,ue,Pe,Te,st=Y,ct=48){return B(new li(Y,st,ie,ct),ue,Pe,Te)}function q(Y,ie,ue,Pe,Te,st=[Math.PI/2,0,0]){return B(new ss(Y,ie,8,64),ue,Pe,Te,st)}function Z(Y,ie=[0,0,0]){const ue=new vn;return ue.position.set(...ie),Y.add(ue),ue}function pe(Y,ie,ue){const Pe=document.createElement("canvas");Pe.width=Y,Pe.height=ie,ue(Pe.getContext("2d"),Y,ie);const Te=new yu(Pe);return Te.colorSpace=$t,Te.anisotropy=Math.min(r.capabilities.getMaxAnisotropy(),8),c.add(Te),Te}function ge(Y,ie={}){return pe(512,160,(ue,Pe,Te)=>{ue.fillStyle=ie.background||"#deded4",ue.fillRect(0,0,Pe,Te),ue.fillStyle=ie.color||"#273132",ue.textAlign="center",ue.textBaseline="middle",ue.font=`${ie.weight||500} ${ie.fontSize||56}px "Segoe UI", "Microsoft YaHei", sans-serif`,ue.fillText(Y,Pe/2,Te/2)})}function Qe(Y,ie,ue,Pe,Te,st=[0,0,0]){const ct=B(new Ei(ie,ue),new cn({map:Y,roughness:.68,metalness:.03,side:hn}),Pe,Te,st);return ct.castShadow=!1,ct}function Ye(Y,ie,ue,Pe,Te,st=96){const ct=new li(Y,Y,ie,st,1),Et=ct.attributes.position;for(let M=0;M<Et.count;M++){const N=Et.getX(M),z=Et.getZ(M);if(Math.hypot(N,z)>Y*.8){const V=Math.atan2(N,z),Ae=Math.round((V/(Math.PI*2)+1)*st)%2?.97:1;Et.setXYZ(M,N*Ae,Et.getY(M),z*Ae)}}return ct.computeVertexNormals(),B(ct,ue,Pe,Te)}t.add(new pd("#d4e1de","#33291e",1.25));const Ke=new Ya("#ffefdc",2.8);Ke.position.set(-4,8.5,6),Ke.castShadow=!0,Ke.shadow.mapSize.set(2048,2048),Object.assign(Ke.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:25}),Ke.shadow.normalBias=.025,Ke.shadow.bias=-8e-5,Ke.shadow.radius=4,t.add(Ke);const K=new Ya("#cadfe4",1.6);K.position.set(3,6,-5),t.add(K);const te=new Ya("#f6f2dd",.42);te.position.set(7,4,7),t.add(te);let _e=912713;const ke=()=>(_e=_e*1664525+1013904223>>>0,_e/4294967296),Ce=pe(2048,1024,(Y,ie,ue)=>{Y.fillStyle="#533a2b",Y.fillRect(0,0,ie,ue);for(let Pe=0;Pe<1100;Pe++){const Te=ke()*ue,st=.012+ke()*.034;Y.strokeStyle=ke()>.46?`rgba(27,12,6,${st})`:`rgba(201,146,100,${st})`,Y.lineWidth=.4+ke()*2.5,Y.beginPath();for(let ct=0;ct<=ie;ct+=32){const Et=Te+Math.sin(ct/240+Te/67)*3.6+Math.sin(ct/91+Te/15)*.9;ct?Y.lineTo(ct,Et):Y.moveTo(ct,Et)}Y.stroke()}for(let Pe=250;Pe<ue;Pe+=258)Y.fillStyle="#39281e",Y.globalAlpha=.22,Y.fillRect(0,Pe,ie,2),Y.globalAlpha=.08,Y.fillStyle="#ffe2b1",Y.fillRect(0,Pe+2,ie,1);Y.globalAlpha=1}),Ze=j(17,.28,12,new cn({map:Ce,roughness:.68,metalness:.025}),t,[0,-.17,0],.07);Ze.castShadow=!1;const mt=pe(256,256,(Y,ie,ue)=>{const Pe=Y.createRadialGradient(ie/2,ue/2,15,ie/2,ue/2,ie/2);Pe.addColorStop(0,"rgba(0,0,0,.48)"),Pe.addColorStop(.45,"rgba(0,0,0,.25)"),Pe.addColorStop(1,"rgba(0,0,0,0)"),Y.fillStyle=Pe,Y.fillRect(0,0,ie,ue)});function se(Y,ie,ue,Pe,Te=.6){const st=B(new Ei(ue,Pe),new ai({map:mt,transparent:!0,opacity:Te,depthWrite:!1}),t,[Y,-.019,ie],[-Math.PI/2,0,0]);st.castShadow=!1,st.receiveShadow=!1}const ne=Z(t,[-1.18,0,0]);se(-1.18,0,3.4,3.5,.74);const le=new aa;le.moveTo(-.96,.23),le.bezierCurveTo(-1.04,1.1,-1.02,2.55,-.99,3.24),le.bezierCurveTo(-.97,3.8,-.5,4.03,.12,3.9),le.lineTo(.39,3.77),le.lineTo(.32,3.35),le.bezierCurveTo(-.13,3.48,-.36,3.3,-.39,3.01),le.lineTo(-.39,.7),le.bezierCurveTo(-.36,.38,-.1,.24,.15,.24),le.closePath();const he=new Qr(le,{depth:.54,bevelEnabled:!0,bevelThickness:.07,bevelSize:.06,bevelSegments:5,curveSegments:32,steps:1});B(he,_,ne,[.27,0,0],[0,-Math.PI/2,0]),j(1.85,.3,2.27,_,ne,[0,.24,.07],.145),j(1.72,.055,2.12,T,ne,[0,.075,.07],.025);for(const Y of[-.63,.63])for(const ie of[-.66,.76])G(.18,.09,P,ne,[Y,.035,ie]);G(.34,.04,D,ne,[0,.407,.47]),G(.255,.022,$,ne,[0,.435,.47]),q(.29,.022,I,ne,[0,.44,.47]),Qe(ge("L U M E N",{fontSize:47,color:"#52605c"}),.63,.19,ne,[.01,.225,1.21]);const xe=Ye(.11,.085,P,ne,[.78,.27,.54],64);xe.rotation.z=-Math.PI/2;const Xe=B(new es(.022,12,8),new cn({color:"#a6d1a7",emissive:"#75a779",emissiveIntensity:.6}),ne,[.83,.3,.82]);Xe.castShadow=!1,G(.29,.24,D,ne,[0,1.62,.48]),q(.29,.025,I,ne,[0,1.72,.48]),G(.21,.12,F,ne,[0,1.79,.48]);const He=j(.43,.045,.06,I,ne,[.31,1.62,.63],.015);He.rotation.y=-.3;const Be=Z(ne,[0,2.01,.48]);j(1.25,.12,.38,D,Be,[0,-.14,-.48],.03);const Ve=new aa,L=.87,je=.65,Je=.07;Ve.moveTo(-L+Je,-je),Ve.lineTo(L-Je,-je),Ve.quadraticCurveTo(L,-je,L,-je+Je),Ve.lineTo(L,je-Je),Ve.quadraticCurveTo(L,je,L-Je,je),Ve.lineTo(-L+Je,je),Ve.quadraticCurveTo(-L,je,-L,je-Je),Ve.lineTo(-L,-je+Je),Ve.quadraticCurveTo(-L,-je,-L+Je,-je);const A=new Xo;A.absarc(0,0,.205,0,Math.PI*2,!0),Ve.holes.push(A);const x=B(new Qr(Ve,{depth:.105,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2,curveSegments:40}),C,Be,[0,.1,0],[Math.PI/2,0,0]);x.receiveShadow=!0,j(1.64,.055,.09,k,Be,[0,.147,-.48],.015),j(1.2,.042,.06,I,Be,[-.1,.18,-.48],.01),j(.1,.07,.53,k,Be,[.64,.15,-.24],.016);const H=[];for(const Y of[-.61,.58]){const ie=Z(Be,[Y,.17,-.27]);j(.18,.025,.39,I,ie,[0,0,.17],.012),H.push(ie),G(.042,.026,D,Be,[Y,.185,-.27],.042,24)}G(.1,.28,D,Be,[.91,-.16,-.38]),Ye(.105,.12,P,Be,[.91,-.32,-.38],64),Ye(.075,.1,P,Be,[.91,-.43,-.38],64);const X=new zn({color:"#d2e7de",roughness:.07,metalness:.02,transparent:!0,opacity:.31,transmission:.15,thickness:.03,ior:1.5,depthWrite:!1}),J=b_(Y=>c.add(Y)),fe={};for(const Y of["outer","inner"]){const ie=Y==="inner";fe[Y]=pe(512,256,(ue,Pe,Te)=>{ue.fillStyle="#eeeade",ue.fillRect(0,0,Pe,Te),ue.fillStyle=ie?"#a8b59a":"#a86b92",ue.fillRect(0,0,Pe,22),ue.fillStyle="#263d31",ue.font='600 116px "Microsoft YaHei", sans-serif',ue.textAlign="center",ue.textBaseline="middle",ue.fillText(ie?"内表皮":"外表皮",Pe/2,143)})}function me(){const Y=Z(t);j(1.43,.027,.48,X,Y,[0,0,0],.009);const ie=new Vo(new uc(new Yn(1.43,.027,.48)),new yi({color:"#c5ded4",transparent:!0,opacity:.76}));Y.add(ie);const ue=Z(Y,[0,.022,0]),Pe=E_(ue,J),Te=Z(Y,[-tn.width/2,.033,0]);j(tn.width,tn.thickness,tn.depth,X,Te,[tn.width/2,0,0],tn.corner);const st=new Vo(new uc(new Yn(tn.width,tn.thickness,tn.depth)),new yi({color:"#d6eee2",transparent:!0,opacity:.72}));st.position.x=tn.width/2,Te.add(st);const ct=Qe(fe.outer,.37,.215,Y,[-.51,.018,0],[-Math.PI/2,0,0]);ct.material.transparent=!0,ct.material.depthWrite=!1,ct.renderOrder=4;const Et=T_(Y);return{root:Y,specimen:ue,peel:Pe,cover:Te,label:ct,water:Et}}const Q=me(),re=me();function ve(Y,ie,ue){Y.root.visible=ie.visible,Y.root.position.set(...ie.position),Y.root.rotation.set(...ie.rotation),Y.specimen.visible=ie.specimenVisible,Y.specimen.position.set(ie.specimenX||0,ie.specimenY,0),Y.specimen.rotation.z=ie.specimenTilt,Y.specimen.scale.set(ie.specimenScale,1,ie.specimenScale);const Pe=ie.tissue==="inner"?"inner":"outer";Y.peel.update(ie.specimenCurl,Pe),Y.label.material.map!==fe[Pe]&&(Y.label.material.map=fe[Pe],Y.label.material.needsUpdate=!0),Y.cover.visible=ie.coverVisible,Y.cover.position.y=ie.coverY,Y.cover.rotation.z=ie.coverAngle,Y.water.group.visible=ie.fluidVisible,Y.water.update(ie.fluidScale,ie.fluidCompression,ie.fluidImpact,ue==="dyed")}function ze(Y){const ie=Z(ne,[Y*.48,1.65,-.62]);ie.rotation.z=Y*-Math.PI/2,G(.29,.08,T,ie,[0,.01,0]);const ue=Ye(.355,.21,P,ie,[0,.13,0]);ue.userData.focus="coarse",l.push(ue);const Pe=G(.305,.018,D,ie,[0,.245,0]);Pe.userData.focus="coarse",l.push(Pe),q(.276,.007,k,ie,[0,.258,0]);const Te=Ye(.164,.145,P,ie,[0,.33,0]);Te.userData.focus="fine",l.push(Te);const st=G(.139,.018,k,ie,[0,.411,0]);st.userData.focus="fine",l.push(st),G(.04,.022,D,ie,[0,.427,0],.04,20);for(let ct=0;ct<20;ct++){const Et=ct*Math.PI/10,M=j(.007,.003,ct%5===0?.032:.018,T,ie,[Math.sin(Et)*.247,.258,Math.cos(Et)*.247],.001);M.rotation.y=Et}return ie}const be=ze(1),ye=ze(-1);j(.91,.29,.84,_,ne,[0,3.65,.05],.12),G(.34,.2,D,ne,[0,3.42,.35]),q(.35,.025,I,ne,[0,3.36,.35]);const Ne=Z(ne,[0,3.27,.35]);G(.5,.15,D,Ne,[0,0,0]),Ye(.475,.045,P,Ne,[0,-.075,0],96),G(.26,.16,k,Ne,[0,-.075,0]);const qe=["#d3594d","#ddc058","#66a8bc"];[4,10,40].forEach((Y,ie)=>{const ue=ie*Math.PI*2/3,Pe=Z(Ne,[Math.sin(ue)*.335,-.09,Math.cos(ue)*.335]),Te=[.39,.51,.67][ie];G(.13,.1,k,Pe,[0,-.02,0]),G(.119,Te-.09,I,Pe,[0,-(Te-.09)/2-.065,0]),G(.122,.055,R(qe[ie],.27,.38),Pe,[0,-Te+.12,0]),G(.088,.1,D,Pe,[0,-Te+.035,0]),G(.05,.012,F,Pe,[0,-Te-.02,0]),Qe(ge(`${Y} / ${[.1,.25,.65][ie].toFixed(2)}`,{background:"#b9c3bf",fontSize:49,color:"#263330"}),.18,.065,Pe,[0,-Te/2,.121])});const We=Z(ne,[0,3.85,.12]);We.rotation.x=.48,j(1.09,.32,.66,_,We,[0,.02,0],.13);for(const Y of[-.285,.285]){G(.245,.3,T,We,[Y,.19,0]),G(.207,.48,D,We,[Y,.48,0]),q(.208,.018,I,We,[Y,.31,0]);const ie=Ye(.224,.09,P,We,[Y,.54,0]);ie.receiveShadow=!0,G(.23,.115,P,We,[Y,.75,0]),q(.194,.036,P,We,[Y,.817,0]),G(.16,.013,F,We,[Y,.806,0]),q(.154,.008,k,We,[Y,.815,0]);const ue=B(new fa(.034,16),new ai({color:"#abcfd2",transparent:!0,opacity:.25,depthWrite:!1}),We,[Y-.05,.818,.045],[-Math.PI/2,0,0]);ue.scale.y=.28,ue.castShadow=!1;const Pe={};for(const st of[5,10,16])Pe[st]=ge(`WF ${st}×`,{background:"#263031",color:"#d3dad0",fontSize:61});const Te=Qe(Pe[10],.31,.095,We,[Y,.45,.211]);p.push({label:Te,maps:Pe})}Qe(ge("B I N O C U L A R",{background:"#e5e4d9",color:"#75817b",fontSize:34}),.76,.13,We,[0,-.025,.338]),[{id:"sucrose",title:"蔗糖",sub:"SUCROSE",code:"01",color:"#a9b99a",liquid:"#c9d7b7",x:.55,z:.15},{id:"kno3",title:"硝酸钾",sub:"KNO₃",code:"02",color:"#a6bec4",liquid:"#bfd6d8",x:1.31,z:-.04},{id:"glycerol",title:"甘油",sub:"GLYCEROL",code:"03",color:"#c2af88",liquid:"#d9c9a6",x:2.07,z:-.2},{id:"dyed",title:"染色蔗糖",sub:"TRACER",code:"04",color:"#63b4b3",liquid:"#63b4b3",x:2.85,z:-.33},{id:"water",title:"清水",sub:"WATER",code:"05",color:"#b1c4c5",liquid:"#c6dddd",x:3.63,z:-.46}].forEach(Y=>{const ie=Z(t,[Y.x,.02,Y.z]);se(Y.x,Y.z,.95,.86,.55);const ue=new zn({color:"#c5dbd2",metalness:.035,roughness:.08,transparent:!0,opacity:.26,transmission:.38,thickness:.1,ior:1.47,depthWrite:!1}),Pe=[[0,.025],[.23,.025],[.275,.06],[.282,.13],[.282,.85],[.269,.95],[.17,1.07],[.147,1.1],[.147,1.29]].map(([z,V])=>new de(z,V));B(new jr(Pe,48),ue,ie);const Te=new zn({color:Y.liquid,roughness:.13,transparent:!0,opacity:Y.id==="dyed"?.76:.38,metalness:.04,depthWrite:!1});G(.25,.65,Te,ie,[0,.395,0]),G(.25,.008,Te,ie,[0,.723,0]),q(.259,.011,ue,ie,[0,.09,0]),Ye(.172,.2,P,ie,[0,1.26,0],72),G(.17,.027,R(Y.color,.58),ie,[0,1.369,0]);const st=pe(512,576,(z,V,W)=>{z.fillStyle="#eceadf",z.fillRect(0,0,V,W),z.fillStyle=Y.color,z.fillRect(0,0,V,33),z.fillStyle="#818c81",z.font='500 36px "Segoe UI", sans-serif',z.fillText(Y.code,40,91),z.strokeStyle="#c6cabc",z.lineWidth=2,z.beginPath(),z.moveTo(38,125),z.lineTo(V-38,125),z.stroke(),z.fillStyle="#16291f",z.textAlign="center",z.font=`700 ${Y.title.length>3?82:Y.title.length>2?98:112}px "Microsoft YaHei", sans-serif`,z.fillText(Y.title,V/2,267),z.font='600 33px "Segoe UI", sans-serif',z.fillStyle="#48594d",z.fillText(Y.sub,V/2,330),z.fillStyle=Y.color,z.fillRect(V/2-52,391,104,4),z.fillStyle="#849084",z.font='28px "Segoe UI", sans-serif',z.fillText("LAB · 50 mL",V/2,486)}),ct=Z(ie,[0,.58,0]),Et=Qe(st,.45,.51,ct,[0,0,.289]);Et.material.transparent=!0,Et.material.depthWrite=!1,Et.renderOrder=4;const M=q(.36,.013,new cn({color:"#bdcfb5",emissive:"#a4bd9b",emissiveIntensity:.35,transparent:!0,opacity:0}),ie,[0,.014,0]),N=B(new li(.31,.31,1.44,20),new ai({visible:!1}),ie,[0,.72,0]);N.userData.solution=Y.id,l.push(N),u.set(Y.id,{group:ie,labelGroup:ct,halo:M,cap:ie.children.find(z=>z.position.y===1.369),baseY:.02})});const Me=A_(t),ee=Me.root,Se=w_(t),Ee=Se.root;Ee.visible=!1;const oe=new zn({color:"#d1e6df",roughness:.03,metalness:.12,transparent:!0,opacity:.82,clearcoat:1}),Ue=B(new es(.055,24,16),oe,ne,[.16,2.75,.5]);Ue.visible=!1;const De=q(.2,.008,new ai({color:"#c9dfd3",transparent:!0,opacity:0,depthWrite:!1}),Be,[.08,.2,.04]),xt=R_(t),lt=q(.22,.008,new ai({color:"#d4eee9",transparent:!0,opacity:0,depthWrite:!1}),t);lt.visible=!1;const Jt=new Md,Qt=new de;function as(Y){const ie=r.domElement.getBoundingClientRect();return Qt.set((Y.clientX-ie.left)/ie.width*2-1,-(Y.clientY-ie.top)/ie.height*2+1),Jt.setFromCamera(Qt,i),Jt.intersectObjects(l,!1)[0]?.object||null}function os(Y){if(!f||g||Y.button!==0)return;const ie=as(Y);ie?.userData.focus?(b={pointerId:Y.pointerId,y:Y.clientY,x:Y.clientX,kind:ie.userData.focus},r.domElement.setPointerCapture(Y.pointerId),r.domElement.style.cursor="grabbing",Y.preventDefault()):ie?.userData.solution&&e.onSelectSolution?.(ie.userData.solution)}function pr(Y){if(!f||g){dn(),E=null;return}if(b){const ie=b.y-Y.clientY+(Y.clientX-b.x)*.35;e.onFocusChange?.(ie*(b.kind==="coarse"?.008:.0018)),b.y=Y.clientY,b.x=Y.clientX;return}E=as(Y),r.domElement.style.cursor=E?.userData.focus?"grab":E?.userData.solution?"pointer":"default"}function dn(Y){b&&r.domElement.hasPointerCapture(b.pointerId)&&r.domElement.releasePointerCapture(b.pointerId),b=null,r.domElement.style.cursor="default"}function ls(Y){!f||g||(Y.preventDefault(),e.onFocusChange?.(-Math.sign(Y.deltaY)*(Y.shiftKey?.06:.012)))}function mr(){b||(E=null,r.domElement.style.cursor="default")}r.domElement.addEventListener("pointerdown",os),r.domElement.addEventListener("pointermove",pr),r.domElement.addEventListener("pointerup",dn),r.domElement.addEventListener("pointercancel",dn),r.domElement.addEventListener("pointerleave",mr),r.domElement.addEventListener("wheel",ls,{passive:!1});function gr(Y){Y.preventDefault(),!(g||d)&&(g=!0,f=!1,dn(),e.onUnavailable?.())}r.domElement.addEventListener("webglcontextlost",gr,!1);function Sn(Y){i.position.set(...Y.position),i.lookAt(...Y.target),i.zoom=Y.zoom,i.updateProjectionMatrix(),u.forEach(({group:ie,labelGroup:ue})=>{i.getWorldPosition(h),h.sub(ie.position),h.y=0,h.normalize(),ue.rotation.y=Math.atan2(h.x,h.z)})}function Pi(){Sn(Zc(S.presentation,S,i.aspect).camera),v=!0}function Li(){if(d)return;const Y=Math.max(1,n.clientWidth),ie=Math.max(1,n.clientHeight);r.setSize(Y,ie,!1),i.aspect=Y/ie,Pi()}const _r=new ResizeObserver(Li);_r.observe(n),Li();function ci(Y={},ie=1/60){if(d||g)return;S={...S,...Y};const ue=S,Pe=Math.min(Math.max(ie,0),.1),Te=Zc(ue.presentation,ue,i.aspect);f&&!Te.interactive&&(dn(),E=null),f=Te.interactive,Sn(Te.camera);const ct=-Math.max(0,[4,10,40].indexOf(Number(ue.objective)))*Math.PI*2/3;if(Te.phase==="focusing"){let M=ct-y;M=Math.atan2(Math.sin(M),Math.cos(M)),w=y+M,y=Ni.damp(y,w,7,Pe)}else y=ct+Te.turretOffset;Ne.rotation.y=y,Be.position.y=2.01+Ni.clamp(Number(ue.focus)||0,-1,1)*.055;for(const M of H)M.rotation.x=-Te.clampOpen*.85;be.children[1].rotation.y=(Number(ue.focus)||0)*8,ye.children[1].rotation.y=-(Number(ue.focus)||0)*8;for(const M of p){const N=M.maps[ue.eyepiece]||M.maps[10];M.label.material.map!==N&&(M.label.material.map=N,M.label.material.needsUpdate=!0)}ve(Q,Te.primary,Te.phase==="preparing"?"water":ue.activeSolution),ve(re,Te.secondary,ue.activeSolution),ee.position.set(...Te.pipette.position),ee.rotation.set(...Te.pipette.rotation),Me.update(Te.pipette.squeeze),Ee.visible=Te.tweezers.visible,Ee.position.set(...Te.tweezers.position),Ee.rotation.set(...Te.tweezers.rotation),Se.update(Te.tweezers.opening),xt.update(Te.drop,Te.pipette.position),lt.visible=Te.ripple.visible,lt.position.set(...Te.ripple.position),lt.scale.setScalar(Te.ripple.scale),lt.material.opacity=Te.ripple.opacity,u.forEach((M,N)=>{const z=f&&ue.selectedSolution===N,V=f&&E?.userData.solution===N;M.halo.material.opacity=f?Ni.damp(M.halo.material.opacity,z?.9:V?.4:0,8,Pe):0,M.group.position.y=f?Ni.damp(M.group.position.y,M.baseY+(V?.035:0),10,Pe):M.baseY});const Et=["preparing","welcome","swapping"].includes(Te.phase)?0:Number(ue.dosing)||0;if(Et>0){const M=1-Ni.clamp(Et,0,1);Ue.visible=!0,Ue.position.set(.1,2.25+(1-M)*.69,.52),Ue.scale.set(.8,1.4,.8),oe.color.set(ue.selectedSolution==="dyed"?"#63b4b3":"#d2e7df"),De.material.opacity=Math.sin(M*Math.PI)*.65,De.scale.setScalar(.6+M*1.15)}else Ue.visible=!1,De.material.opacity=Te.phase==="focusing"?Ni.damp(De.material.opacity,0,8,Pe):0;(Te.phase!=="observing"||m!=="observing"||v)&&r.render(t,i),m=Te.phase,v=!1}function cs(){if(d)return;d=!0,_r.disconnect(),r.domElement.removeEventListener("pointerdown",os),r.domElement.removeEventListener("pointermove",pr),r.domElement.removeEventListener("pointerup",dn),r.domElement.removeEventListener("pointercancel",dn),r.domElement.removeEventListener("pointerleave",mr),r.domElement.removeEventListener("wheel",ls),r.domElement.removeEventListener("webglcontextlost",gr);const Y=new Set,ie=new Set;t.traverse(ue=>{ue.geometry&&Y.add(ue.geometry),ue.material&&(Array.isArray(ue.material)?ue.material:[ue.material]).forEach(Pe=>ie.add(Pe))}),Y.forEach(ue=>ue.dispose()),ie.forEach(ue=>ue.dispose()),c.forEach(ue=>ue.dispose()),o.dispose(),r.dispose(),r.domElement.remove()}return ci(S,1/60),{update:ci,resize:Li,dispose:cs,resetView:Pi}}const zt=5120,Ys=1536,Rr=Math.PI*2,Cr=(n,e,t)=>Math.min(t,Math.max(e,n));function Wu(n=10,e=10){const t=a=>Number.isFinite(Number(a))&&Number(a)>0?Number(a):10,i=t(n)*t(e),r=i/100,s=960/r;return{magnification:i,linearScale:r,sampleSize:s,offset:(zt-s)/2,specimenSize:zt}}function ns(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function L_(n,e,t,i){const r=[];for(let s=0;s<n.length;s++){const a=n[s],o=n[(s+1)%n.length],c=a.x*e+a.y*t-i,l=o.x*e+o.y*t-i;if(c<=0&&r.push(a),c<=0!=l<=0){const u=c/(c-l);r.push({x:a.x+(o.x-a.x)*u,y:a.y+(o.y-a.y)*u})}}return r}function I_(){const n=ns(91853),e=[];for(let i=-46;i<=46;i++)for(let r=-14;r<=14;r++)e.push({x:r+i%2*.4+(n()-.5)*.64,y:i+(n()-.5)*.54,seed:Math.floor(n()*1e7)});const t=i=>{const r=i.x*285,s=i.y*81;return{x:zt/2+r*.875-s*.484,y:zt/2+r*.484+s*.875}};return e.map(i=>{let r=[{x:i.x-2,y:i.y-2},{x:i.x+2,y:i.y-2},{x:i.x+2,y:i.y+2},{x:i.x-2,y:i.y+2}];for(const c of e){const l=c.x-i.x,u=c.y-i.y;if(!(c===i||Math.abs(l)>3||Math.abs(u)>3)&&(r=L_(r,l,u,(c.x*c.x+c.y*c.y-i.x*i.x-i.y*i.y)/2),!r.length))break}const s=r.map(t),a=t(i),o={left:Math.min(...s.map(c=>c.x)),right:Math.max(...s.map(c=>c.x)),top:Math.min(...s.map(c=>c.y)),bottom:Math.max(...s.map(c=>c.y))};return{points:s,center:a,bounds:o,seed:i.seed,variation:ns(i.seed)()}}).filter(i=>i.points.length>2&&i.points.some(r=>r.x>-80&&r.x<zt+80&&r.y>-80&&r.y<zt+80))}const D_=I_();function Zs(n=Ys){const e=document.createElement("canvas");return e.width=e.height=n,e}function Pr(n,e,t=.08){const i=e[e.length-1],r=e[0];n.beginPath(),n.moveTo(i.x+(r.x-i.x)*(1-t),i.y+(r.y-i.y)*(1-t));for(let s=0;s<e.length;s++){const a=e[s],o=e[(s+1)%e.length];n.quadraticCurveTo(a.x,a.y,a.x+(o.x-a.x)*t,a.y+(o.y-a.y)*t),n.lineTo(a.x+(o.x-a.x)*(1-t),a.y+(o.y-a.y)*(1-t))}n.closePath()}function Gs(n,e,t=0){return n.points.map((i,r)=>{const s=1-e*(1+t*Math.sin(n.seed+r*2.6));return{x:n.center.x+(i.x-n.center.x)*s,y:n.center.y+(i.y-n.center.y)*s}})}function N_(){const n=Zs(256),e=n.getContext("2d"),t=e.createImageData(256,256),i=ns(11027);for(let r=0;r<t.data.length;r+=4){const s=105+i()*100;t.data[r]=s,t.data[r+1]=s-12,t.data[r+2]=s-18,t.data[r+3]=Math.floor(3+i()*11)}return e.putImageData(t,0,0),n}function to(n){const e=n.getContext("2d"),t=Zs(),i=Zs(),r=Zs(768),s=N_(),a=t.getContext("2d"),o=i.getContext("2d"),c=r.getContext("2d");let l=0,u=0,p=!1,h="",d="",g=null,v=null,m=[];function f(_){_.setTransform(1,0,0,1,0,0),_.clearRect(0,0,Ys,Ys);const T=Ys/v.sampleSize;_.setTransform(T,0,0,T,-v.offset*T,-v.offset*T)}function S(_){if(v?.magnification===_.magnification)return;v=_;const T=v.offset-8,C=v.offset+v.sampleSize+8;m=D_.filter(({bounds:I})=>I.left<=C&&I.right>=T&&I.top<=C&&I.bottom>=T),f(a),a.fillStyle="#f2efcf",a.fillRect(0,0,zt,zt);const P=a.createRadialGradient(zt*.46,zt*.41,80,zt/2,zt/2,zt*.77);P.addColorStop(0,"#fffce6"),P.addColorStop(.65,"#e9e6c8"),P.addColorStop(1,"#b9bd9f"),a.fillStyle=P,a.fillRect(0,0,zt,zt);for(const I of m)Pr(a,I.points,.035),a.strokeStyle="rgba(116,111,66,.36)",a.lineWidth=4.3,a.stroke(),a.strokeStyle="rgba(255,255,225,.79)",a.lineWidth=1.55,a.stroke(),Pr(a,Gs(I,.025),.045),a.strokeStyle="rgba(126,120,70,.18)",a.lineWidth=1,a.stroke();a.fillStyle=a.createPattern(s,"repeat"),a.fillRect(0,0,zt,zt),h=""}function w(_,T,C){f(o);const P=_!=="inner";for(const I of m){const k=ns(I.seed),D=I.variation,F=Cr(T*(.82+D*.31),0,.95),$=.038+F*.55,B=Gs(I,$,.17);C&&(Pr(o,Gs(I,.017),.04),o.fillStyle=`rgba(66,165,172,${.13+F*.14})`,o.fill()),Pr(o,B,.16+F*.13),o.fillStyle=P?"#ddd4bd":"#eee9cf",o.fill(),o.strokeStyle=P?"rgba(95,62,89,.43)":"rgba(105,118,85,.40)",o.lineWidth=1.25,o.stroke();const j=Gs(I,$+.047+D*.012,.16),G=o.createLinearGradient(I.center.x-100,I.center.y-65,I.center.x+110,I.center.y+90);if(P){const q=304+D*29,Z=46+D*16-F*9;G.addColorStop(0,`hsla(${q},28%,${Z+14}%,.78)`),G.addColorStop(.48,`hsla(${q},31%,${Z+6}%,.87)`),G.addColorStop(1,`hsla(${q},30%,${Z}%,.91)`)}else G.addColorStop(0,"rgba(247,245,214,.94)"),G.addColorStop(.55,"rgba(222,227,195,.78)"),G.addColorStop(1,"rgba(196,211,179,.69)");if(Pr(o,j,.19+F*.12),o.fillStyle=G,o.fill(),!(v.magnification<60)){o.save(),o.clip();for(let q=0;q<5;q++){const Z=I.center.x+(k()-.5)*190,pe=I.center.y+(k()-.5)*90,ge=o.createRadialGradient(Z,pe,0,Z,pe,20+k()*65);ge.addColorStop(0,P?"rgba(105,36,95,.075)":"rgba(141,160,97,.045)"),ge.addColorStop(1,"rgba(110,50,100,0)"),o.fillStyle=ge,o.fillRect(Z-90,pe-90,180,180)}o.fillStyle=o.createPattern(s,"repeat"),o.fillRect(I.center.x-240,I.center.y-140,480,280),o.restore();for(let q=0;q<11;q++){const Z=Math.floor(k()*B.length),pe=B[Z],ge=B[(Z+1)%B.length],Qe=k(),Ye=(pe.x+(ge.x-pe.x)*Qe)*.975+I.center.x*.025,Ke=(pe.y+(ge.y-pe.y)*Qe)*.975+I.center.y*.025;o.beginPath(),o.ellipse(Ye,Ke,.7+k()*1.5,.5+k(),.48,0,Rr),o.fillStyle="rgba(93,95,68,.20)",o.fill()}if(D>.77){const q=B[Math.floor(k()*B.length)],Z=q.x*.74+I.center.x*.26,pe=q.y*.74+I.center.y*.26;o.beginPath(),o.ellipse(Z,pe,8.5,5.1,.48,0,Rr),o.fillStyle=P?"rgba(99,67,99,.34)":"rgba(118,127,98,.28)",o.fill(),o.strokeStyle="rgba(255,245,221,.26)",o.lineWidth=1,o.stroke(),o.beginPath(),o.arc(Z+1.1,pe,1.9,0,Rr),o.fillStyle="rgba(72,66,79,.23)",o.fill()}if(F>.19&&D>.67)for(let q=0;q<I.points.length;q+=3){const Z=I.points[q],pe=B[q];o.beginPath(),o.moveTo(Z.x,Z.y),o.lineTo(pe.x,pe.y),o.strokeStyle="rgba(108,101,89,.17)",o.lineWidth=.65,o.stroke()}}}}function y(){if(p)return;const _=n.getBoundingClientRect(),T=Math.min(window.devicePixelRatio||1,2),C=Math.max(1,Math.round((_.width||n.clientWidth||420)*T)),P=Math.max(1,Math.round((_.height||n.clientHeight||420)*T));if(C!==l||P!==u){l=n.width=C,u=n.height=P;const I=Math.min(1400,Math.max(l,u));r.width=r.height=I,d=""}}function b(_,T,C,P){const I=Number(_.time)||0,k=Cr(Number(_.netFlux)||0,-1,1);for(let D=0;D<m.length;D++){if(D%3!==0)continue;const F=m[D],$=ns(F.seed+73),B=F.points[Math.floor($()*F.points.length)],j=.038+Cr((_.shrink||0)*(.82+F.variation*.31),0,.95)*.55,G={x:F.center.x+(B.x-F.center.x)*(1-j),y:F.center.y+(B.y-F.center.y)*(1-j)},q=Math.hypot(B.x-F.center.x,B.y-F.center.y),Z={x:(B.x-F.center.x)/q,y:(B.y-F.center.y)/q};for(let pe=0;pe<2;pe++){const Qe=$()<.5+k*.34,Ye=.16+$()*.05,Ke=(I*Ye+$())%1,K=(Qe?Ke-.5:.5-Ke)*68,te=(G.x+Z.x*K-C)/T*P,_e=(G.y+Z.y*K-C)/T*P,ke=Math.sin(Ke*Math.PI)*.8;c.beginPath(),c.arc(te,_e,Math.max(1.45,P/380),0,Rr),c.fillStyle=`rgba(42,132,195,${ke})`,c.fill(),c.beginPath(),c.moveTo(te,_e),c.lineTo(te-Z.x*(Qe?1:-1)*4,_e-Z.y*(Qe?1:-1)*4),c.strokeStyle=`rgba(42,132,195,${ke*.35})`,c.lineWidth=1,c.stroke()}}}function E(_){if(p)return;g=_,l||y();const T=_.tissue==="inner"?"inner":"outer",C=Math.round(Cr(Number(_.shrink)||0,0,1)*100)/100,P=_.activeSolution==="dyed",I=Wu(_.objective,_.eyepiece);S(I);const{magnification:k,sampleSize:D,offset:F}=I,$=`${T}:${C}:${P}:${k}`;$!==h&&(w(T,C,P),h=$);const B=Cr(Math.abs(Number(_.focus)||0),0,1),j=`${$}:${k}:${B.toFixed(4)}:${l}:${u}:${_.showWater?`${_.time}:${Number(_.netFlux||0).toFixed(3)}`:"-"}`;if(j===d)return;d=j;const G=r.width;c.clearRect(0,0,G,G),c.drawImage(t,0,0,G,G),c.drawImage(i,0,0,G,G),_.showWater&&b(_,D,F,G),e.clearRect(0,0,l,u);const q=Math.min(l,u)*.985,Z=(l-q)/2,pe=(u-q)/2;e.save(),e.beginPath(),e.arc(l/2,u/2,q/2,0,Rr),e.clip(),e.fillStyle="#ece9cf",e.fillRect(0,0,l,u),e.filter=B>.015?`blur(${B*B*q*.033+B*.5}px)`:"none",e.globalAlpha=1-B*.12,e.drawImage(r,Z-2,pe-2,q+4,q+4),e.filter="none",e.globalAlpha=1;const ge=e.createRadialGradient(l*.47,u*.45,q*.19,l/2,u/2,q*.51);ge.addColorStop(0,"rgba(225,223,172,0)"),ge.addColorStop(.72,"rgba(95,95,63,.025)"),ge.addColorStop(.92,"rgba(55,59,40,.18)"),ge.addColorStop(1,"rgba(26,31,24,.68)"),e.fillStyle=ge,e.fillRect(0,0,l,u),e.restore()}const R=typeof ResizeObserver<"u"?new ResizeObserver(()=>{y(),g&&E(g)}):null;return R?.observe(n),{render:E,resize:y,dispose(){p=!0,R?.disconnect(),t.width=i.width=r.width=s.width=1}}}const Wn=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),U_=new Set(["water","sucrose","kno3","glycerol","dyed"]),sr={kno3:{time:57,strength:.66},glycerol:{time:108,strength:.57}};function is(){return{time:0,exposureTime:0,shrink:0,netFlux:0,phase:"hydrated",activeSolution:"water",concentration:.3,permeation:0,internalSolutes:{kno3:0,glycerol:0},targetShrink:0,revision:0}}function Xu(n){const e=(n.revision||0)+1;return Object.assign(n,is(),{revision:e}),n}function Qo(n){(!n.internalSolutes||typeof n.internalSolutes!="object")&&(n.internalSolutes={kno3:0,glycerol:0},sr[n.activeSolution]&&(n.internalSolutes[n.activeSolution]=Wn(Number(n.permeation)||0)));for(const e of Object.keys(sr))n.internalSolutes[e]=Wn(Number(n.internalSolutes[e])||0);n.permeation=Wn(n.internalSolutes.kno3+n.internalSolutes.glycerol)}function qu(n){const e=Object.entries(sr).reduce((t,[i,r])=>t+r.strength*n.internalSolutes[i],0);return n.activeSolution==="water"?0:sr[n.activeSolution]?Wn(sr[n.activeSolution].strength-e):Wn(Wn(.1+(n.concentration-.1)*2.6,.04,.72)-e)}function Yu(n){n.targetShrink=qu(n);const e=n.targetShrink-n.shrink;n.netFlux=Wn(e*3.2,-1,1),e>.009?n.phase="losing":e<-.009?n.phase="recovering":n.activeSolution==="water"&&n.shrink<.006?n.phase="hydrated":n.activeSolution==="kno3"||n.activeSolution==="glycerol"?n.phase="permeating":n.phase="balanced"}function kr(n,e,t=.3){if(!U_.has(e))throw new RangeError(`Unknown solution: ${e}`);return Qo(n),n.activeSolution=e,n.concentration=Wn(Number.isFinite(Number(t))?Number(t):.3,.05,.4),n.exposureTime=0,n.revision=(n.revision||0)+1,Yu(n),n}function ma(n,e){if(!Number.isFinite(e)||e<=0)return n;Qo(n);const t=Math.ceil(e/.2),i=e/t;for(let r=0;r<t;r++){n.time+=i,n.exposureTime+=i;for(const[o,c]of Object.entries(sr)){const l=n.activeSolution===o?1:0;n.internalSolutes[o]=l+(n.internalSolutes[o]-l)*Math.exp(-i/c.time)}const s=qu(n),a=n.activeSolution==="water"?8.5:10.5;n.shrink=Wn(s+(n.shrink-s)*Math.exp(-i/a)),n.activeSolution==="water"&&n.shrink<4e-4&&(n.shrink=0)}return Qo(n),Yu(n),n}function Zu(n){if(n.activeSolution==="water")return n.phase==="hydrated"?"清水中，原生质层贴近细胞壁。":"换入清水，吸水后原生质层逐渐贴壁。";if(n.activeSolution==="kno3"||n.activeSolution==="glycerol"){const e=n.activeSolution==="kno3"?"KNO₃":"甘油";return n.phase==="losing"?`${e}机制示意：先失水，原生质层离壁。`:`${e}机制示意：溶质逐渐进入，条件适宜时可复原。`}return n.activeSolution==="dyed"?n.phase==="losing"?"失水离壁；淡青色仅示踪外液与分离空间。":"淡青色示踪分离空间，液泡保留自身颜色。":n.phase==="losing"?"水分净流出，原生质层逐渐离开细胞壁。":"形态趋于稳定，水分仍在双向交换。"}const kn=68,_i=32,xi=36,El=Object.freeze([{id:"initial",start:0,title:"观察初始状态",description:"清水中的细胞：观察细胞壁、原生质层与液泡。",chapter:"initial"},{id:"add-sucrose",start:5,title:"加入蔗糖溶液",description:"外液改变，观察水分净流动和原生质层的位置。",chapter:"separation"},{id:"separation",start:12,title:"观察质壁分离",description:"原生质层逐渐离开细胞壁，分离空间内是外界溶液。",chapter:"separation"},{id:"add-water",start:xi,title:"换入清水",description:"从分离后的细胞继续观察吸水与复原。",chapter:"recovery"},{id:"recovery",start:60,title:"观察复原",description:"液泡逐渐增大，原生质层逐渐贴近细胞壁。",chapter:"recovery"}].map(n=>Object.freeze(n))),Hr=10,F_=8,Ji=new Map,jo=n=>({...n,internalSolutes:{...n.internalSolutes}}),$u=n=>Math.max(0,Math.min(kn,Number.isFinite(Number(n))?Number(n):0));function O_(n){const e=Math.max(.05,Math.min(.4,Number.isFinite(Number(n))?Number(n):.3));if(Ji.has(e))return Ji.get(e);const t=is();kr(t,"water",e);const i=[jo(t)];for(let r=1;r<=kn*Hr;r++){ma(t,1/Hr);const s=r/Hr;t.time=s,s===5&&kr(t,"sucrose",e),s===xi&&kr(t,"water",e),t.exposureTime=s-(s>=xi?xi:s>=5?5:0),i.push(jo(t))}return Ji.size>=F_&&Ji.delete(Ji.keys().next().value),Ji.set(e,i),i}function $c(n,{concentration:e=.3}={}){const t=$u(n),i=Math.floor(t*Hr),r=jo(O_(e)[i]),s=t-i/Hr;return s>0&&ma(r,s),r.time=t,r.exposureTime=t-(t>=xi?xi:t>=5?5:0),r}function Ku(n){const e=$u(n);return El.findLast(t=>e>=t.start)}function B_(){const n={phase:"welcome",tissue:"outer",objective:4,eyepiece:10,focus:.28,speed:1,showWater:!1,showLabels:!1,selectedSolution:"sucrose",concentration:.3,mode:"guided",paused:!0,started:!1,demoTime:0,protocolConcentration:.3,held:!1,comparing:!1,transition:null,focusIntent:!1,focusStable:0,autoFocus:!1,entryCount:0,exchangeTime:0,exchangeSolution:"water",revision:0};let e=is(),t=0;const i=()=>["preparing","entering","swapping"].includes(n.phase);function r(){Xu(e),Object.assign(n,{paused:!0,started:!1,demoTime:0,held:!1,exchangeTime:0,autoFocus:!1}),n.revision++}function s(b,E,R={}){n.paused=!0,n.autoFocus=!1,n.phase=b,n.transition={id:++t,type:b,elapsed:0,duration:E,committed:!1,...R}}function a(b){b.committed||(b.committed=!0,n.tissue=b.toTissue,r(),n.focus=.12)}function o(){const b=n.transition;b&&(b.type==="swapping"&&a(b),n.transition=null,b.type==="preparing"?Object.assign(n,{phase:"focusing",focus:.28,focusIntent:!1,focusStable:0,paused:!0}):(Object.assign(n,{phase:"observing",focus:0,paused:!0,autoFocus:!1}),n.entryCount++))}function c(){return i()?!1:(r(),n.objective=4,s("preparing",15,{fromTissue:n.tissue,toTissue:n.tissue}),!0)}function l(){return i()?!1:(r(),n.phase="observing",n.focus=0,!0)}function u(b){return!["inner","outer"].includes(b)||b===n.tissue||i()||n.comparing?!1:n.phase==="welcome"?(n.tissue=b,!0):(s("swapping",3,{fromTissue:n.tissue,toTissue:b}),!0)}function p(b,E=!1){["focusing","observing"].includes(n.phase)&&(n.focus=Math.max(-1,Math.min(1,b)),n.focusIntent=!0,E||(n.autoFocus=!1))}function h(){["focusing","observing"].includes(n.phase)&&(n.autoFocus=!0,n.focusIntent=!0)}function d(b,E=n.concentration){n.selectedSolution=b,n.concentration=Number(E)}function g(b=n.selectedSolution){return n.phase!=="observing"||n.comparing?!1:(n.mode="free",n.started=!0,kr(e,b,n.concentration),n.exchangeTime=2.2,n.exchangeSolution=b,n.paused=!1,!0)}function v(){if(!(n.phase!=="observing"||n.comparing)){if(n.mode==="guided"&&n.demoTime>=kn&&r(),!n.started)if(n.started=!0,n.mode==="guided")n.protocolConcentration=n.concentration;else{g();return}n.started=!0,n.paused=!n.paused}}function m(){n.phase!=="observing"||n.comparing||r()}function f(b){return n.phase!=="observing"||n.mode!=="guided"||n.comparing?!1:(n.started||(n.protocolConcentration=n.concentration),n.demoTime=Math.max(0,Math.min(kn,Number(b)||0)),e=$c(n.demoTime,{concentration:n.protocolConcentration}),n.paused=!0,n.started=n.demoTime>0,n.held=n.demoTime>=_i,n.exchangeTime=0,!0)}function S(b){n.phase!=="observing"||n.comparing||!["guided","free"].includes(b)||n.mode!==b&&(n.mode=b,b==="guided"?r():n.paused=!0)}function w(b){if(!Number.isFinite(b)||b<=0)return;const E=n.transition;if(E){E.elapsed=Math.min(E.duration,E.elapsed+b),E.type==="swapping"&&E.elapsed>=2&&(a(E),n.focus=.12*(1-Math.min(1,(E.elapsed-2)/.4))),E.elapsed>=E.duration&&o();return}if(n.autoFocus&&(n.focus*=Math.exp(-b*10),Math.abs(n.focus)<.003&&(n.focus=0,n.autoFocus=!1)),n.phase==="focusing"){n.focusStable=n.focusIntent&&Math.abs(n.focus)<.025?n.focusStable+b:0,n.focusStable>=.3&&s("entering",1.1);return}if(n.exchangeTime=Math.max(0,n.exchangeTime-b),!(n.phase!=="observing"||n.paused||n.comparing))if(n.mode==="free")ma(e,b*n.speed);else{let R=Math.min(kn,n.demoTime+b*n.speed);!n.held&&n.demoTime<_i&&R>=_i&&(R=_i,n.held=!0,n.paused=!0);const _=e.activeSolution;n.demoTime=R,e=$c(R,{concentration:n.protocolConcentration}),e.activeSolution!==_&&(n.exchangeTime=2.2,n.exchangeSolution=e.activeSolution),R>=kn&&(n.paused=!0)}}function y(){n.transition&&o(),["welcome","focusing"].includes(n.phase)&&l()}return{state:n,get sim(){return e},busy:i,prepare:c,direct:l,changeTissue:u,focus:p,autofocus:h,select:d,exchange:g,play:v,replay:m,seek:f,setMode:S,tick:w,skip:o,unavailable:y}}function z_(){const n={mode:"concentration",tissues:{a:"outer",b:"outer"},conditions:{a:".1",b:".3"},paused:!0,started:!1,elapsed:0,transition:null},e={a:is(),b:is()};function t(){for(const u of Object.values(e))Xu(u);n.elapsed=0,n.started=!1,n.paused=!0}function i(u){n.transition||(n.mode=u,n.conditions=u==="solution"?{a:"sucrose",b:"kno3"}:u==="tissue"?{a:".3",b:".3"}:{a:".1",b:".3"},n.tissues=u==="tissue"?{a:"outer",b:"inner"}:{a:n.tissues.a,b:n.tissues.a},t())}function r(u,p){return n.transition||n.tissues[u]===p||!["inner","outer"].includes(p)?!1:(n.paused=!0,n.transition={side:u,fromTissue:n.tissues[u],toTissue:p,elapsed:0,duration:1.8,committed:!1},!0)}function s(u){u.committed||(u.committed=!0,n.tissues[u.side]=u.toTissue,t())}function a(){n.transition&&(s(n.transition),n.transition=null)}function o(u,p){n.transition||(n.conditions[u]=p,t())}function c(){if(!n.transition){if(!n.started){for(const u of["a","b"])kr(e[u],n.mode==="solution"?n.conditions[u]:"sucrose",n.mode==="solution"?.3:Number(n.conditions[u]));n.started=!0}n.paused=!n.paused}}function l(u,p){if(n.transition){const h=n.transition;h.elapsed+=u,h.elapsed>=1.2&&s(h),h.elapsed>=h.duration&&a()}else if(!n.paused){n.elapsed+=u*p;for(const h of Object.values(e))ma(h,u*p)}}return{state:n,sims:e,reset:t,configure:i,changeTissue:r,condition:o,play:c,tick:l,finish:a}}const ae=n=>document.querySelector(n),wn=n=>[...document.querySelectorAll(n)],Nr={water:"清水",sucrose:"蔗糖溶液",kno3:"硝酸钾溶液",glycerol:"甘油溶液",dyed:"染色蔗糖"},Ti=n=>n==="inner"?"内表皮":"外表皮",ht=B_(),ce=ht.state,Pt=z_(),la={main:to(ae("#specimen-canvas")),a:to(ae("#compare-canvas-a")),b:to(ae("#compare-canvas-b"))};let cr,rs=!1,$s=0,Tl=!1,ga,Kc=0,ca=performance.now(),Jc="";const Ju="plasmolysis-preparation-seen-v2";function Qu(){try{localStorage.setItem(Ju,"1")}catch{}}function Al(n){ae("#toast").textContent=n,$s=performance.now()+2300,ae("#toast").classList.add("visible")}function Ks(){rs||(rs=!0,cr?.dispose(),cr=null,document.body.dataset.renderer="2d",ae("#renderer-note").hidden=!1,ae("#instrument").hidden=!0,ht.unavailable(),Al("已进入二维观察，实验操作保持可用。"))}try{const n=new URLSearchParams(location.search).get("renderer")==="2d",e=document.createElement("canvas"),t=n?null:e.getContext("webgl2");t?(t.getExtension("WEBGL_lose_context")?.loseContext(),cr=P_(ae("#instrument"),{onSelectSolution:i=>{ht.select(i),i!=="sucrose"&&(ce.mode="free"),Nt()},onFocusChange:i=>ht.focus(ce.focus+i),onUnavailable:Ks}),document.body.dataset.renderer="3d"):Ks()}catch{Ks()}try{localStorage.getItem(Ju)&&(ae("#direct-observe").className="primary",ae("#start-experience").className="quiet",ae("#start-experience").textContent="重看制片 →",ae("#welcome-hint").textContent="已看过制片，可以直接开始观察")}catch{}function no(n=ht.sim,e=ce.tissue){return{...ce,...n,tissue:e,presentation:{phase:ce.phase,elapsed:0,duration:0,...ce.transition}}}function dr(){Nt(),wl()}function ju(){ht.prepare()&&(Qu(),dr())}ae("#start-experience").addEventListener("click",ju);ae("#watch-preparation").addEventListener("click",ju);ae("#direct-observe").addEventListener("click",()=>{ht.direct()&&(Qu(),dr())});ae("#skip-animation").addEventListener("click",()=>{ht.skip(),dr()});wn("[data-tissue]").forEach(n=>n.addEventListener("click",()=>{ht.changeTissue(n.dataset.tissue)&&(ce.phase==="swapping"&&innerWidth<=760&&window.scrollTo({top:0,behavior:"instant"}),dr())}));for(const n of["coarse-focus","observe-focus"])ae("#"+n).addEventListener("input",e=>{ht.focus(Number(e.target.value)),Nt()});ae("#fine-minus").addEventListener("click",()=>ht.focus(ce.focus-.015));ae("#fine-plus").addEventListener("click",()=>ht.focus(ce.focus+.015));for(const n of["autofocus","observe-autofocus"])ae("#"+n).addEventListener("click",()=>ht.autofocus());ae("#specimen-canvas").addEventListener("wheel",n=>{["focusing","observing"].includes(ce.phase)&&(n.preventDefault(),ht.focus(ce.focus+Math.sign(n.deltaY)*(n.shiftKey?.09:.012)))},{passive:!1});for(const n of["objective","eyepiece"])ae("#"+n+"-select").addEventListener("change",e=>{ce.phase==="observing"&&(ce[n]=Number(e.target.value),dr())});ae("#solution-select").addEventListener("change",n=>{ht.select(n.target.value),n.target.value!=="sucrose"&&ht.setMode("free"),Nt()});ae("#concentration-select").addEventListener("change",n=>{ht.select(ce.selectedSolution,Number(n.target.value)),Nt()});ae("#free-mode").addEventListener("click",()=>{ce.mode==="guided"?ht.setMode("free"):(ht.select("sucrose"),ht.setMode("guided"),Al("主线已回到清水初态。")),Nt()});ae("#add-solution").addEventListener("click",()=>{ht.exchange(),Nt()});ae("#rinse").addEventListener("click",()=>{ht.exchange("water"),Nt()});ae("#play").addEventListener("click",()=>{ht.play(),Nt()});ae("#replay").addEventListener("click",()=>{ht.replay(),Al("同类新标本，回到清水初态。"),Nt()});for(const[n,e]of[["water-toggle","showWater"],["labels-toggle","showLabels"]])ae("#"+n).addEventListener("click",()=>{ce[e]=!ce[e],Nt()});wn("[data-speed]").forEach(n=>n.addEventListener("click",()=>{ce.speed=Number(n.dataset.speed),Nt()}));ae("#demo-progress").addEventListener("input",n=>{ht.seek(Number(n.target.value)),Nt()});ae("#previous").addEventListener("click",()=>{const n=[...El].reverse().find(e=>e.start<ce.demoTime-.1);ht.seek(n?.start||0),Nt()});ae("#next").addEventListener("click",()=>{const n=El.find(e=>e.start>ce.demoTime+.1);ht.seek(n?.start??kn),Nt()});wn("[data-chapter]").forEach(n=>n.addEventListener("click",()=>{ce.mode==="free"&&(ht.select("sucrose"),ht.setMode("guided")),ht.seek({initial:0,separation:5,recovery:xi}[n.dataset.chapter]),Nt()}));function eh(n){ae("#"+n).showModal(),requestAnimationFrame(()=>Object.values(la).forEach(e=>e.resize()))}ae("#about-open").addEventListener("click",()=>{ce.paused=!0,eh("about-dialog"),Nt()});wn("[data-close]").forEach(n=>n.addEventListener("click",()=>ae("#"+n.dataset.close).close()));wn("dialog").forEach(n=>n.addEventListener("click",e=>{if(e.target!==n)return;const t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n.close()}));function th(){const n=Pt.state,e=n.mode==="solution"?Object.entries(Nr):n.mode==="tissue"?[[".3","蔗糖 0.3 g/mL"]]:[[".1","蔗糖 0.1 g/mL"],[".2","蔗糖 0.2 g/mL"],[".3","蔗糖 0.3 g/mL"]];for(const t of["a","b"])ae("#compare-"+t).innerHTML=e.map(([i,r])=>'<option value="'+i+'">'+r+"</option>").join("");Zn()}ae("#compare-open").addEventListener("click",()=>{ce.phase==="observing"&&(ce.paused=!0,ce.comparing=!0,Zn(),eh("compare-dialog"),Nt())});ae("#compare-dialog").addEventListener("close",()=>{Pt.finish(),Pt.state.paused=!0,ce.comparing=!1,ce.paused=!0,Nt()});ae("#compare-mode").addEventListener("change",n=>{Pt.configure(n.target.value),th()});for(const n of["a","b"])ae("#compare-"+n).addEventListener("change",e=>{Pt.condition(n,e.target.value),Zn()}),ae("#compare-tissue-"+n).addEventListener("change",e=>{Pt.changeTissue(n,e.target.value),Zn()});ae("#compare-play").addEventListener("click",()=>{Pt.play(),Zn()});ae("#compare-reset").addEventListener("click",()=>{Pt.state.transition||Pt.reset(),Zn()});ae("#compare-skip").addEventListener("click",()=>{Pt.finish(),Zn()});function Zn(){const n=Pt.state,e=n.transition;ae("#compare-play").textContent=n.started?n.paused?"▶ 同时继续":"Ⅱ 同时暂停":"▶ 同时开始",ae("#compare-play").disabled=!!e,ae("#compare-reset").disabled=!!e,ae("#compare-mode").disabled=!!e,ae("#compare-skip").hidden=!e,ae("#compare-magnification").textContent=ce.objective*ce.eyepiece+"×",ae("#compare-caption").textContent=e?"更换"+e.side.toUpperCase()+"栏装片 · 两栏均已暂停":n.started?n.paused?"两栏已暂停":"同一起点，同步观察":"两份新标本 · 清水初态 · 等待开始";for(const t of["a","b"]){ae("#compare-tissue-"+t).value=n.tissues[t],ae("#compare-tissue-"+t).disabled=!!e,ae("#compare-"+t).value=n.conditions[t],ae("#compare-"+t).disabled=!!e,ae("#compare-status-"+t).textContent=Zu(Pt.sims[t]);const i=ae('.compare-column[data-side="'+t+'"] .compare-slide-animation');if(i.hidden=!e||e.side!==t,e&&e.side===t){const r=e.elapsed<.6,s=r?e.elapsed/.6:Math.min(1,(e.elapsed-.6)/.6),a=i.querySelector(".mini-slide");a.style.transform="translateX("+(r?-s*190:(1-s)*190)+"px) rotate(-12deg)",a.style.opacity=String(r?1-s:s),a.querySelector("span").textContent=Ti(r?e.fromTissue:e.toTissue),a.querySelector("i").style.background=(r?e.fromTissue:e.toTissue)==="inner"?"#d9dbb7":"#b786a5",i.querySelector("p").textContent=e.elapsed<.6?"移出旧装片":e.elapsed<1.2?"放入"+Ti(e.toTissue)+"装片":"固定装片 · 回到同步起点"}}}function Nt(){const n=ht.busy(),e=ce.mode==="guided",t=ht.sim;document.body.dataset.phase=ce.phase,document.body.dataset.solution=t.activeSolution,document.body.dataset.paused=String(ce.paused),document.body.dataset.tissue=ce.tissue,document.body.dataset.mode=ce.mode,document.body.dataset.focused=String(Math.abs(ce.focus)<.025),ae("#watch-preparation").disabled=n,ae("#skip-animation").hidden=!n,ae("#transition-caption").hidden=!n,ae("#focus-status").textContent=Math.abs(ce.focus)<.025?"已对焦":Math.abs(ce.focus)<.2?"接近清晰":"稍有离焦";for(const s of["coarse-focus","observe-focus"])document.activeElement!==ae("#"+s)&&(ae("#"+s).value=ce.focus);wn("[data-tissue]").forEach(s=>{s.disabled=n,s.setAttribute("aria-pressed",String(ce.tissue===s.dataset.tissue))}),ae("#specimen-name").textContent="洋葱鳞片叶 · "+Ti(ce.tissue),wn(".magnification").forEach(s=>s.textContent=ce.objective*ce.eyepiece+"×"),ae("#objective-select").value=ce.objective,ae("#eyepiece-select").value=ce.eyepiece,ae("#current-environment").textContent=Nr[t.activeSolution]+(["sucrose","dyed"].includes(t.activeSolution)?" · "+t.concentration+" g/mL":""),ae("#solution-select").value=ce.selectedSolution,ae("#concentration-select").value=ce.concentration;const i=["sucrose","dyed"].includes(ce.selectedSolution);ae("#concentration-control").hidden=!i,ae("#pending-caption").textContent="待加入："+Nr[ce.selectedSolution]+(i?" · "+ce.concentration+" g/mL":""),ae("#mode-label").textContent=e?"分步演示":"拓展实验",ae("#free-mode").textContent=e?"进入拓展实验 ↗":"返回主线 · 从清水开始",ae("#add-solution").hidden=e,ae("#structure-legend").hidden=!ce.showLabels||ce.phase!=="observing",ae(".structure-legend .vacuole").style.background=ce.tissue==="inner"?"#d2d8b5":"#ad7ba0",ae("#water-toggle").setAttribute("aria-pressed",String(ce.showWater)),ae("#labels-toggle").setAttribute("aria-pressed",String(ce.showLabels)),wn("[data-speed]").forEach(s=>s.setAttribute("aria-pressed",String(Number(s.dataset.speed)===ce.speed))),ae("#play-icon").textContent=ce.paused?"▶":"Ⅱ",ae("#play-text").textContent=ce.started?ce.paused?ce.demoTime>=kn&&e?"再次演示":ce.held&&ce.demoTime===_i&&e?"继续 · 看复原":"继续":"暂停":"开始演示",ae("#play").setAttribute("aria-pressed",String(!ce.paused)),ae("#demo-progress").disabled=!e,ae("#demo-progress").hidden=!e,ae("#free-progress-note").hidden=e,ae("#progress-value").hidden=!e,ae(".progress-block label").textContent=e?"演示进度":"连续观察",document.activeElement!==ae("#demo-progress")&&(ae("#demo-progress").value=ce.demoTime),ae("#progress-value").textContent=Math.round(ce.demoTime/kn*100)+"%",ae("#previous").disabled=!e,ae("#next").disabled=!e;const r=Ku(ce.demoTime);ae("#step-title").textContent=e?ce.paused&&ce.held&&ce.demoTime===_i?"停下来，观察分离空间":r.title:ce.started?Nr[t.activeSolution]+"中的细胞":"拓展实验 · 清水初态",ae("#step-description").textContent=e?ce.paused&&ce.held&&ce.demoTime===_i?"原生质层已离壁。分离空间充满外液，点击继续观看复原。":r.description:Zu(t),wn("[data-chapter]").forEach(s=>s.setAttribute("aria-current",e&&s.dataset.chapter===r.chapter?"step":"false")),ae("#liquid-exchange").hidden=!(ce.phase==="observing"&&ce.exchangeTime>0),ae("#exchange-caption").textContent="已换入"+Nr[ce.exchangeSolution],document.documentElement.style.setProperty("--exchange-progress",String(1-ce.exchangeTime/2.2)),ce.comparing&&Zn()}const nn=n=>(n=Math.min(1,Math.max(0,n)),n*n*(3-2*n));function wl(){const n=ae("#workspace").getBoundingClientRect(),e=n.width,t=n.height,i=e<=760,r=e>=1700?338:e<=1050?280:312,s=ce.phase==="entering",a=s&&!i?t-ae("#transport").getBoundingClientRect().height-ae("#chapters").getBoundingClientRect().height:t,o=i?Math.min(e*.88,innerHeight*.53):Math.max(180,Math.min(a-98,e-r-65,950)),c=i?Math.min(e-70,250):Math.max(180,Math.min(290,t*.4)),l={size:c,x:i?(e-c)/2:e-c-38,y:i?20:28},u={size:o,x:i?(e-o)/2:(e-r-o)/2,y:(i?20:Math.max(20,(a-o)/2-10))+(s?ae("#chapters").getBoundingClientRect().height:0)};let p=ce.phase==="observing"?1:0,h=1;const d=ce.transition;ce.phase==="entering"&&(p=nn(d.elapsed/d.duration)),document.documentElement.style.setProperty("--enter-progress",s?String(p):"1"),ce.phase==="swapping"&&(d.elapsed<.4?(p=1-nn(d.elapsed/.4),h=1-nn(d.elapsed/.4)):d.elapsed<2?(p=0,h=0):(p=nn((d.elapsed-2)/1),h=nn((d.elapsed-2)/.4)));const g=ae("#eye-shell");g.style.setProperty("--eye-size",l.size+(u.size-l.size)*p+"px"),g.style.setProperty("--eye-x",l.x+(u.x-l.x)*p+"px"),g.style.setProperty("--eye-y",l.y+(u.y-l.y)*p+"px"),g.style.setProperty("--eye-opacity",h),ae("#instrument").style.opacity=ce.phase==="entering"?String(1-nn(d.elapsed/d.duration)*.85):"1",d&&(document.documentElement.style.setProperty("--animation-progress",Math.min(100,d.elapsed/d.duration*100)+"%"),ae("#transition-step").textContent=d.type==="preparing"?d.elapsed<2?"载玻片就位":d.elapsed<4?"滴清水":d.elapsed<7?"展平表皮":d.elapsed<10?"盖上盖玻片":d.elapsed<13?"放上载物台":"低倍物镜就位":d.type==="entering"?"进入目镜视野":d.elapsed<.4?"正在更换为"+Ti(d.toTissue):d.elapsed<1.2?"松开压片夹 · 移出旧装片":d.elapsed<2?"放入"+Ti(d.toTissue)+"装片":"固定装片 · 进入新视野"),ae("#fallback-scene").hidden=!(rs&&["preparing","swapping"].includes(ce.phase)),rs&&d&&G_(d)}function G_(n){const e=ae(".flat-slide.old"),t=ae(".flat-slide.incoming"),i=ae(".flat-cover"),r=ae(".flat-drop"),s=n.fromTissue||ce.tissue,a=n.toTissue||ce.tissue;if(e.querySelector("span").textContent=Ti(s),t.querySelector("span").textContent=Ti(a),e.querySelector("i").style.background=s==="inner"?"#d5dbb7bb":"#a37a96bb",t.querySelector("i").style.background=a==="inner"?"#d5dbb7bb":"#a37a96bb",n.type==="swapping"){const o=nn((n.elapsed-.4)/.8),c=nn((n.elapsed-1.2)/.8);e.style.transform="translateX("+-o*650+"px)",e.style.opacity=String(1-o),t.style.transform="translateX("+(1-c)*650+"px)",t.style.opacity=String(c),i.hidden=!0,r.hidden=!0,wn(".flat-clip").forEach(l=>l.style.transform="translateY("+-25*Math.sin(Math.min(1,n.elapsed/2)*Math.PI)+"px)")}else t.style.opacity="0",e.style.opacity="1",e.style.transform="translateX("+(1-nn(n.elapsed/2))*-650+"px)",e.querySelector("i").style.opacity=String(nn((n.elapsed-4)/3)),r.hidden=n.elapsed<2||n.elapsed>=4,r.style.transform="translateY("+nn((n.elapsed-2)/2)*42+"px)",i.hidden=n.elapsed<7,i.style.transform="translateY("+(1-nn((n.elapsed-7)/3))*-100+"px) rotateX("+(1-nn((n.elapsed-7)/3))*-60+"deg)"}const nh=new ResizeObserver(()=>wl());nh.observe(ae("#workspace"));th();dr();function Rl(n){if(Tl)return;const e=Math.min(.25,Math.max(0,(n-ca)/1e3));ca=n,ht.tick(e),ce.comparing&&Pt.tick(e,ce.speed);const t=[ce.phase,ce.revision,ce.paused,ht.sim.activeSolution,Ku(ce.demoTime).id,Pt.state.transition?.committed,Pt.state.tissues.a,Pt.state.tissues.b].join(":");if((t!==Jc||n-Kc>100)&&(Nt(),Jc=t,Kc=n),wl(),cr&&ce.phase!=="observing")try{cr.update(no(),e)}catch{Ks()}if(["welcome","preparing"].includes(ce.phase)||la.main.render(no()),ce.comparing){for(const i of["a","b"])la[i].render({...no(Pt.sims[i],Pt.state.tissues[i]),focus:0});Pt.state.transition&&Zn()}$s&&n>=$s&&(ae("#toast").classList.remove("visible"),$s=0),ga=requestAnimationFrame(Rl)}document.addEventListener("visibilitychange",()=>{ca=performance.now()});window.addEventListener("pagehide",n=>{cancelAnimationFrame(ga),!n.persisted&&(Tl=!0,nh.disconnect(),cr?.dispose(),Object.values(la).forEach(e=>e.dispose()))});window.addEventListener("pageshow",n=>{n.persisted&&!Tl&&(ca=performance.now(),ga=requestAnimationFrame(Rl))});new URLSearchParams(location.search).has("qa")&&Object.defineProperty(window,"__lab",{value:Object.freeze({inspect:()=>structuredClone({state:ce,sim:ht.sim,comparison:{state:Pt.state,sims:Pt.sims},field:Wu(ce.objective,ce.eyepiece),renderer:rs?"2d":"3d"})})});ga=requestAnimationFrame(Rl);
