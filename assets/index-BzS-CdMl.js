(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="159",Ur={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o_=0,Jh=1,a_=2,Zf=1,c_=2,Ri=3,Ui=0,dn=1,hi=2,Zi=0,rs=1,Qh=2,eu=3,tu=4,l_=5,_r=100,h_=101,u_=102,nu=103,iu=104,d_=200,f_=201,p_=202,m_=203,rl=204,sl=205,g_=206,__=207,v_=208,x_=209,y_=210,E_=211,M_=212,S_=213,T_=214,b_=0,A_=1,w_=2,Ea=3,R_=4,L_=5,C_=6,P_=7,zl=0,I_=1,D_=2,$i=0,U_=1,N_=2,O_=3,F_=4,B_=5,ru="attached",k_="detached",$f=300,as=301,cs=302,ol=303,al=304,Fa=306,ls=1e3,Dn=1001,Ma=1002,Vt=1003,cl=1004,ca=1005,un=1006,Jf=1007,wr=1008,Ji=1009,G_=1010,H_=1011,Vl=1012,Qf=1013,Ki=1014,Pi=1015,eo=1016,ep=1017,tp=1018,Mr=1020,z_=1021,Un=1023,V_=1024,W_=1025,Sr=1026,hs=1027,X_=1028,np=1029,j_=1030,ip=1031,rp=1033,hc=33776,uc=33777,dc=33778,fc=33779,su=35840,ou=35841,au=35842,cu=35843,sp=36196,lu=37492,hu=37496,uu=37808,du=37809,fu=37810,pu=37811,mu=37812,gu=37813,_u=37814,vu=37815,xu=37816,yu=37817,Eu=37818,Mu=37819,Su=37820,Tu=37821,pc=36492,bu=36494,Au=36495,q_=36283,wu=36284,Ru=36285,Lu=36286,to=2300,us=2301,mc=2302,Cu=2400,Pu=2401,Iu=2402,Y_=2500,K_=0,op=1,ll=2,ap=3e3,Tr=3001,Z_=3200,$_=3201,Wl=0,J_=1,Nn="",St="srgb",Kt="srgb-linear",Xl="display-p3",Ba="display-p3-linear",Sa="linear",ct="srgb",Ta="rec709",ba="p3",Or=7680,Du=519,Q_=512,e0=513,t0=514,cp=515,n0=516,i0=517,r0=518,s0=519,hl=35044,Uu="300 es",ul=1035,Ii=2e3,Aa=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nu=1234567;const js=Math.PI/180,ds=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function jl(n,e){return(n%e+e)%e}function o0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function a0(n,e,t){return n!==e?(t-n)/(e-n):0}function qs(n,e,t){return(1-t)*n+t*e}function c0(n,e,t,i){return qs(n,e,1-Math.exp(-t*i))}function l0(n,e=1){return e-Math.abs(jl(n,e*2)-e)}function h0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function u0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function f0(n,e){return n+Math.random()*(e-n)}function p0(n){return n*(.5-Math.random())}function m0(n){n!==void 0&&(Nu=n);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(n){return n*js}function _0(n){return n*ds}function dl(n){return(n&n-1)===0&&n!==0}function v0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function x0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lp={DEG2RAD:js,RAD2DEG:ds,generateUUID:Kn,clamp:jt,euclideanModulo:jl,mapLinear:o0,inverseLerp:a0,lerp:qs,damp:c0,pingpong:l0,smoothstep:h0,smootherstep:u0,randInt:d0,randFloat:f0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:dl,ceilPowerOfTwo:v0,floorPowerOfTwo:wa,setQuaternionFromProperEuler:x0,normalize:it,denormalize:ui};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=r[0],p=r[3],f=r[6],S=r[1],y=r[4],M=r[7],b=r[2],L=r[5],A=r[8];return s[0]=o*_+a*S+c*b,s[3]=o*p+a*y+c*L,s[6]=o*f+a*M+c*A,s[1]=l*_+h*S+u*b,s[4]=l*p+h*y+u*L,s[7]=l*f+h*M+u*A,s[2]=d*_+m*S+g*b,s[5]=d*p+m*y+g*L,s[8]=d*f+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=t*u+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gc.makeScale(e,t)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new Ye;function hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y0(){const n=no("canvas");return n.style.display="block",n}const Ou={};function Ys(n){n in Ou||(Ou[n]=!0,console.warn(n))}const Fu=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[Kt]:{transfer:Sa,primaries:Ta,toReference:n=>n,fromReference:n=>n},[St]:{transfer:ct,primaries:Ta,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ba]:{transfer:Sa,primaries:ba,toReference:n=>n.applyMatrix3(Bu),fromReference:n=>n.applyMatrix3(Fu)},[Xl]:{transfer:ct,primaries:ba,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Bu),fromReference:n=>n.applyMatrix3(Fu).convertLinearToSRGB()}},E0=new Set([Kt,Ba]),tt={enabled:!0,_workingColorSpace:Kt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!E0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=bo[e].toReference,r=bo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return bo[n].primaries},getTransfer:function(n){return n===Nn?Sa:bo[n].transfer}};function ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _c(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fr;class up{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=no("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ss(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ss(t[i]/255)*255):t[i]=ss(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M0=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vc(r[o].image)):s.push(vc(r[o]))}else s=vc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?up.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S0=0;class Yt extends Dr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Dn,r=Dn,s=un,o=wr,a=Un,c=Ji,l=Yt.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Kn(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Tr?St:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Tr:ap}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Tr?St:Nn}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=$f;Yt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(m+1)/2,b=(f+1)/2,L=(h+d)/4,A=(u+_)/4,k=(g+p)/4;return y>M&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=A/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=L/r,s=k/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=k/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T0 extends Dr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?St:Nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends T0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fp extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b0 extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let p=1-a;const f=c*d+l*m+h*g+u*_,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const b=Math.sqrt(y),L=Math.atan2(b,f*S);p=Math.sin(p*L)/b,a=Math.sin(a*L)/b}const M=a*S;if(c=c*p+d*M,l=l*p+m*M,h=h*p+g*M,u=u*p+_*M,p===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new C,ku=new Jn;class Oi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),wo.subVectors(this.max,Ds),Br.subVectors(e.a,Ds),kr.subVectors(e.b,Ds),Gr.subVectors(e.c,Ds),Gi.subVectors(kr,Br),Hi.subVectors(Gr,kr),cr.subVectors(Br,Gr);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-cr.z,cr.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,cr.z,0,-cr.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-cr.y,cr.x,0];return!yc(t,Br,kr,Gr,wo)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Br,kr,Gr,wo))?!1:(Ro.crossVectors(Gi,Hi),t=[Ro.x,Ro.y,Ro.z],yc(t,Br,kr,Gr,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new C,new C,new C,new C,new C,new C,new C,new C],Xn=new C,Ao=new Oi,Br=new C,kr=new C,Gr=new C,Gi=new C,Hi=new C,cr=new C,Ds=new C,wo=new C,Ro=new C,lr=new C;function yc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){lr.fromArray(n,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),c=e.dot(lr),l=t.dot(lr),h=i.dot(lr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const A0=new Oi,Us=new C,Ec=new C;class gi{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):A0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Ec)),this.expandByPoint(Us.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new C,Mc=new C,Lo=new C,zi=new C,Sc=new C,Co=new C,Tc=new C;class uo{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mc.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Mc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=zi.dot(this.direction),c=-zi.dot(Lo),l=zi.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Mc).addScaledVector(Lo,d),m}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,r,s){Sc.subVectors(t,e),Co.subVectors(i,e),Tc.crossVectors(Sc,Co);let o=this.direction.dot(Tc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const c=a*this.direction.dot(Co.crossVectors(zi,Co));if(c<0)return null;const l=a*this.direction.dot(Sc.cross(zi));if(l<0||c+l>o)return null;const h=-a*zi.dot(Tc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,r,s,o,a,c,l,h,u,d,m,g,_,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,u,d,m,g,_,p)}set(e,t,i,r,s,o,a,c,l,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,R0)}lookAt(e,t,i){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Vi.crossVectors(i,vn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Vi.crossVectors(i,vn)),Vi.normalize(),Po.crossVectors(vn,Vi),r[0]=Vi.x,r[4]=Po.x,r[8]=vn.x,r[1]=Vi.y,r[5]=Po.y,r[9]=vn.y,r[2]=Vi.z,r[6]=Po.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],S=i[3],y=i[7],M=i[11],b=i[15],L=r[0],A=r[4],k=r[8],x=r[12],w=r[1],W=r[5],X=r[9],Q=r[13],I=r[2],G=r[6],q=r[10],V=r[14],re=r[3],K=r[7],Y=r[11],oe=r[15];return s[0]=o*L+a*w+c*I+l*re,s[4]=o*A+a*W+c*G+l*K,s[8]=o*k+a*X+c*q+l*Y,s[12]=o*x+a*Q+c*V+l*oe,s[1]=h*L+u*w+d*I+m*re,s[5]=h*A+u*W+d*G+m*K,s[9]=h*k+u*X+d*q+m*Y,s[13]=h*x+u*Q+d*V+m*oe,s[2]=g*L+_*w+p*I+f*re,s[6]=g*A+_*W+p*G+f*K,s[10]=g*k+_*X+p*q+f*Y,s[14]=g*x+_*Q+p*V+f*oe,s[3]=S*L+y*w+M*I+b*re,s[7]=S*A+y*W+M*G+b*K,s[11]=S*k+y*X+M*q+b*Y,s[15]=S*x+y*Q+M*V+b*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*m-i*c*m)+_*(+t*c*m-t*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+p*(+t*l*u-t*a*m-s*o*u+i*o*m+s*a*h-i*l*h)+f*(-r*a*h-t*c*u+t*a*d+r*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],S=u*p*l-_*d*l+_*c*m-a*p*m-u*c*f+a*d*f,y=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,M=h*_*l-g*u*l+g*a*m-o*_*m-h*a*f+o*u*f,b=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,L=t*S+i*y+r*M+s*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=S*A,e[1]=(_*d*s-u*p*s-_*r*m+i*p*m+u*r*f-i*d*f)*A,e[2]=(a*p*s-_*c*s+_*r*l-i*p*l-a*r*f+i*c*f)*A,e[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*m-i*c*m)*A,e[4]=y*A,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*f+t*d*f)*A,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*A,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*m+t*c*m)*A,e[8]=M*A,e[9]=(g*u*s-h*_*s-g*i*m+t*_*m+h*i*f-t*u*f)*A,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*f+t*a*f)*A,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*m-t*a*m)*A,e[12]=b*A,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*p+t*u*p)*A,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*p-t*a*p)*A,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,p=o*u,f=a*u,S=c*l,y=c*h,M=c*u,b=i.x,L=i.y,A=i.z;return r[0]=(1-(_+f))*b,r[1]=(m+M)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(m-M)*L,r[5]=(1-(d+f))*L,r[6]=(p+S)*L,r[7]=0,r[8]=(g+y)*A,r[9]=(p-S)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),a=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const l=1/s,h=1/o,u=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ii){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(a===Ii)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Aa)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ii){const c=this.elements,l=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*l,m=(i+r)*h;let g,_;if(a===Ii)g=(o+s)*u,_=-2*u;else if(a===Aa)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hr=new C,jn=new Ke,w0=new C(0,0,0),R0=new C(1,1,1),Vi=new C,Po=new C,vn=new C,Gu=new Ke,Hu=new Jn;class ka{constructor(e=0,t=0,i=0,r=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L0=0;const zu=new C,zr=new Jn,Mi=new Ke,Io=new C,Ns=new C,C0=new C,P0=new Jn,Vu=new C(1,0,0),Wu=new C(0,1,0),Xu=new C(0,0,1),I0={type:"added"},D0={type:"removed"};class vt extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new C,t=new ka,i=new Jn,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ye}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Wu,e)}rotateZ(e){return this.rotateOnAxis(Xu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Wu,e)}translateZ(e){return this.translateOnAxis(Xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Io.copy(e):Io.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ns,Io,this.up):Mi.lookAt(Io,Ns,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(Mi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(I0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,C0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new C(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new C,Si=new C,bc=new C,Ti=new C,Vr=new C,Wr=new C,ju=new C,Ac=new C,wc=new C,Rc=new C;let Do=!1;class Yn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),Si.subVectors(i,t),bc.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(Si),c=qn.dot(bc),l=Si.dot(Si),h=Si.dot(bc),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,r,s,o,a,c){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ti),c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Si.subVectors(e,t),qn.cross(Si).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),qn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),Yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Vr.subVectors(r,i),Wr.subVectors(s,i),Ac.subVectors(e,i);const c=Vr.dot(Ac),l=Wr.dot(Ac);if(c<=0&&l<=0)return t.copy(i);wc.subVectors(e,r);const h=Vr.dot(wc),u=Wr.dot(wc);if(h>=0&&u<=h)return t.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Vr,o);Rc.subVectors(e,s);const m=Vr.dot(Rc),g=Wr.dot(Rc);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Wr,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ju.subVectors(s,r),a=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(ju,a);const f=1/(p+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Lc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=jl(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Lc(o,s,e+1/3),this.g=Lc(o,s,e),this.b=Lc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=mp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=_c(e.r),this.g=_c(e.g),this.b=_c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return tt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(jt(Jt.r*255,0,255))*65536+Math.round(jt(Jt.g*255,0,255))*256+Math.round(jt(Jt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=St){tt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Uo);const i=qs(Wi.h,Uo.h,t),r=qs(Wi.s,Uo.s,t),s=qs(Wi.l,Uo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ie;Ie.NAMES=mp;let U0=0;class Zn extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=rs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=sl,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rl&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new C,No=new Ce;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}}class gp extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _p extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $n extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let N0=0;const An=new Ke,Cc=new vt,Xr=new C,xn=new Oi,Os=new Oi,Gt=new C;class Qn extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?_p:gp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(xn.min,Os.min),xn.expandByPoint(Gt),Gt.addVectors(xn.max,Os.max),xn.expandByPoint(Gt)):(xn.expandByPoint(Os.min),xn.expandByPoint(Os.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Gt.fromBufferAttribute(a,l),c&&(Xr.fromBufferAttribute(e,l),Gt.add(Xr)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new C,h[w]=new C;const u=new C,d=new C,m=new C,g=new Ce,_=new Ce,p=new Ce,f=new C,S=new C;function y(w,W,X){u.fromArray(r,w*3),d.fromArray(r,W*3),m.fromArray(r,X*3),g.fromArray(o,w*2),_.fromArray(o,W*2),p.fromArray(o,X*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),S.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Q),l[w].add(f),l[W].add(f),l[X].add(f),h[w].add(S),h[W].add(S),h[X].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,W=M.length;w<W;++w){const X=M[w],Q=X.start,I=X.count;for(let G=Q,q=Q+I;G<q;G+=3)y(i[G+0],i[G+1],i[G+2])}const b=new C,L=new C,A=new C,k=new C;function x(w){A.fromArray(s,w*3),k.copy(A);const W=l[w];b.copy(W),b.sub(A.multiplyScalar(A.dot(W))).normalize(),L.crossVectors(k,W);const Q=L.dot(h[w])<0?-1:1;c[w*4]=b.x,c[w*4+1]=b.y,c[w*4+2]=b.z,c[w*4+3]=Q}for(let w=0,W=M.length;w<W;++w){const X=M[w],Q=X.start,I=X.count;for(let G=Q,q=Q+I;G<q;G+=3)x(i[G+0]),x(i[G+1]),x(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new Ke,hr=new uo,Oo=new gi,Yu=new C,jr=new C,qr=new C,Yr=new C,Pc=new C,Fo=new C,Bo=new Ce,ko=new Ce,Go=new Ce,Ku=new C,Zu=new C,$u=new C,Ho=new C,zo=new C;class On extends vt{constructor(e=new Qn,t=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Pc.fromBufferAttribute(u,e),o?Fo.addScaledVector(Pc,h):Fo.addScaledVector(Pc.sub(t),h))}t.add(Fo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Oo.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Oo,Yu)===null||hr.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(qu.copy(s).invert(),hr.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,b=y;M<b;M+=3){const L=a.getX(M),A=a.getX(M+1),k=a.getX(M+2);r=Vo(this,f,e,i,l,h,u,L,A,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);r=Vo(this,o,e,i,l,h,u,S,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,b=y;M<b;M+=3){const L=M,A=M+1,k=M+2;r=Vo(this,f,e,i,l,h,u,L,A,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=p,y=p+1,M=p+2;r=Vo(this,o,e,i,l,h,u,S,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function O0(n,e,t,i,r,s,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ui,a),c===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(zo);return l<t.near||l>t.far?null:{distance:l,point:zo.clone(),object:n}}function Vo(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,jr),n.getVertexPosition(c,qr),n.getVertexPosition(l,Yr);const h=O0(n,e,t,i,jr,qr,Yr,Ho);if(h){r&&(Bo.fromBufferAttribute(r,a),ko.fromBufferAttribute(r,c),Go.fromBufferAttribute(r,l),h.uv=Yn.getInterpolation(Ho,jr,qr,Yr,Bo,ko,Go,new Ce)),s&&(Bo.fromBufferAttribute(s,a),ko.fromBufferAttribute(s,c),Go.fromBufferAttribute(s,l),h.uv1=Yn.getInterpolation(Ho,jr,qr,Yr,Bo,ko,Go,new Ce),h.uv2=h.uv1),o&&(Ku.fromBufferAttribute(o,a),Zu.fromBufferAttribute(o,c),$u.fromBufferAttribute(o,l),h.normal=Yn.getInterpolation(Ho,jr,qr,Yr,Ku,Zu,$u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new C,materialIndex:0};Yn.getNormal(jr,qr,Yr,u.normal),h.face=u}return h}class fo extends Qn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $n(l,3)),this.setAttribute("normal",new $n(h,3)),this.setAttribute("uv",new $n(u,2));function g(_,p,f,S,y,M,b,L,A,k,x){const w=M/A,W=b/k,X=M/2,Q=b/2,I=L/2,G=A+1,q=k+1;let V=0,re=0;const K=new C;for(let Y=0;Y<q;Y++){const oe=Y*W-Q;for(let ae=0;ae<G;ae++){const H=ae*w-X;K[_]=H*S,K[p]=oe*y,K[f]=I,l.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[f]=L>0?1:-1,h.push(K.x,K.y,K.z),u.push(ae/A),u.push(1-Y/k),V+=1}}for(let Y=0;Y<k;Y++)for(let oe=0;oe<A;oe++){const ae=d+oe+G*Y,H=d+oe+G*(Y+1),Z=d+(oe+1)+G*(Y+1),ue=d+(oe+1)+G*Y;c.push(ae,H,ue),c.push(H,Z,ue),re+=6}a.addGroup(m,re,x),m+=re,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=fs(n[t]);for(const r in i)e[r]=i[r]}return e}function F0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vp(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const B0={clone:fs,merge:rn};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xp extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends xp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class H0 extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Kr,Zr,e,t);r.layers=this.layers,this.add(r);const s=new on(Kr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new on(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new on(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const c=new on(Kr,Zr,e,t);c.layers=this.layers,this.add(c);const l=new on(Kr,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yp extends Yt{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z0 extends Rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Tr?St:Nn),this.texture=new yp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fo(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Zi});s.uniforms.tEquirect.value=t;const o=new On(r,s),a=t.minFilter;return t.minFilter===wr&&(t.minFilter=un),new H0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ic=new C,V0=new C,W0=new Ye;class ji{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ic.subVectors(i,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||W0.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new gi,Wo=new C;class ql{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],S=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-s,d-l,p-m,M-f).normalize(),i[1].setComponents(c+s,d+l,p+m,M+f).normalize(),i[2].setComponents(c+o,d+h,p+g,M+S).normalize(),i[3].setComponents(c-o,d-h,p-g,M-S).normalize(),i[4].setComponents(c-a,d-u,p-_,M-y).normalize(),t===Ii)i[5].setComponents(c+a,d+u,p+_,M+y).normalize();else if(t===Aa)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wo.x=r.normal.x>0?e.max.x:e.min.x,Wo.y=r.normal.y>0?e.max.y:e.min.y,Wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ep(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function X0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,h){const u=l.array,d=l.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);if(u===void 0)i.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Yl extends Qn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const S=f*d-o;for(let y=0;y<l;y++){const M=y*u-s;g.push(M,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const y=S+l*f,M=S+l*(f+1),b=S+1+l*(f+1),L=S+1+l*f;m.push(y,M,L),m.push(M,b,L)}this.setIndex(m),this.setAttribute("position",new $n(g,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,t1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,n1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s1=`#ifdef USE_IRIDESCENCE
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
#endif`,o1=`#ifdef USE_BUMPMAP
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,m1=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,g1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,_1=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,T1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D1=`#ifdef USE_GRADIENTMAP
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
}`,U1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,N1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,X1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n2=`#if defined( USE_POINTS_UV )
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
#endif`,i2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,a2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,c2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p2=`#ifdef USE_NORMALMAP
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
#endif`,m2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,C2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
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
#endif`,D2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U2=`#ifdef USE_SKINNING
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
#endif`,N2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B2=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k2=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G2=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j2=`uniform sampler2D t2D;
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
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`#include <common>
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
}`,J2=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q2=`#define DISTANCE
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
}`,ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,av=`#define LAMBERT
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
}`,cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lv=`#define MATCAP
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
}`,hv=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uv=`#define NORMAL
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
}`,dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fv=`#define PHONG
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
}`,pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,_v=`#define TOON
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
}`,vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xv=`uniform float size;
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
}`,yv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Tv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ve={alphahash_fragment:j0,alphahash_pars_fragment:q0,alphamap_fragment:Y0,alphamap_pars_fragment:K0,alphatest_fragment:Z0,alphatest_pars_fragment:$0,aomap_fragment:J0,aomap_pars_fragment:Q0,batching_pars_vertex:e1,batching_vertex:t1,begin_vertex:n1,beginnormal_vertex:i1,bsdfs:r1,iridescence_fragment:s1,bumpmap_pars_fragment:o1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:l1,clipping_planes_vertex:h1,color_fragment:u1,color_pars_fragment:d1,color_pars_vertex:f1,color_vertex:p1,common:m1,cube_uv_reflection_fragment:g1,defaultnormal_vertex:_1,displacementmap_pars_vertex:v1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:E1,colorspace_fragment:M1,colorspace_pars_fragment:S1,envmap_fragment:T1,envmap_common_pars_fragment:b1,envmap_pars_fragment:A1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:k1,envmap_vertex:R1,fog_vertex:L1,fog_pars_vertex:C1,fog_fragment:P1,fog_pars_fragment:I1,gradientmap_pars_fragment:D1,lightmap_fragment:U1,lightmap_pars_fragment:N1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:F1,lights_pars_begin:B1,lights_toon_fragment:G1,lights_toon_pars_fragment:H1,lights_phong_fragment:z1,lights_phong_pars_fragment:V1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:j1,lights_fragment_maps:q1,lights_fragment_end:Y1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:J1,map_fragment:Q1,map_pars_fragment:e2,map_particle_fragment:t2,map_particle_pars_fragment:n2,metalnessmap_fragment:i2,metalnessmap_pars_fragment:r2,morphcolor_vertex:s2,morphnormal_vertex:o2,morphtarget_pars_vertex:a2,morphtarget_vertex:c2,normal_fragment_begin:l2,normal_fragment_maps:h2,normal_pars_fragment:u2,normal_pars_vertex:d2,normal_vertex:f2,normalmap_pars_fragment:p2,clearcoat_normal_fragment_begin:m2,clearcoat_normal_fragment_maps:g2,clearcoat_pars_fragment:_2,iridescence_pars_fragment:v2,opaque_fragment:x2,packing:y2,premultiplied_alpha_fragment:E2,project_vertex:M2,dithering_fragment:S2,dithering_pars_fragment:T2,roughnessmap_fragment:b2,roughnessmap_pars_fragment:A2,shadowmap_pars_fragment:w2,shadowmap_pars_vertex:R2,shadowmap_vertex:L2,shadowmask_pars_fragment:C2,skinbase_vertex:P2,skinning_pars_vertex:I2,skinning_vertex:D2,skinnormal_vertex:U2,specularmap_fragment:N2,specularmap_pars_fragment:O2,tonemapping_fragment:F2,tonemapping_pars_fragment:B2,transmission_fragment:k2,transmission_pars_fragment:G2,uv_pars_fragment:H2,uv_pars_vertex:z2,uv_vertex:V2,worldpos_vertex:W2,background_vert:X2,background_frag:j2,backgroundCube_vert:q2,backgroundCube_frag:Y2,cube_vert:K2,cube_frag:Z2,depth_vert:$2,depth_frag:J2,distanceRGBA_vert:Q2,distanceRGBA_frag:ev,equirect_vert:tv,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:rv,meshbasic_vert:sv,meshbasic_frag:ov,meshlambert_vert:av,meshlambert_frag:cv,meshmatcap_vert:lv,meshmatcap_frag:hv,meshnormal_vert:uv,meshnormal_frag:dv,meshphong_vert:fv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:_v,meshtoon_frag:vv,points_vert:xv,points_frag:yv,shadow_vert:Ev,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:Tv},le={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ci={basic:{uniforms:rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:rn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:rn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:rn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:rn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:rn([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:rn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:rn([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:rn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:rn([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:rn([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:rn([le.lights,le.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ci.physical={uniforms:rn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Xo={r:0,b:0,g:0};function bv(n,e,t,i,r,s,o){const a=new Ie(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(p,f){let S=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),S=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Fa)?(h===void 0&&(h=new On(new fo(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:fs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,L,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=tt.getTransfer(y.colorSpace)!==ct,(u!==y||d!==y.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new On(new Yl(2,2),new Lr({name:"BackgroundMaterial",uniforms:fs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(Xo,vp(n)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function Av(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function u(I,G,q,V,re){let K=!1;if(o){const Y=_(V,q,G);l!==Y&&(l=Y,m(l.object)),K=f(I,V,q,re),K&&S(I,V,q,re)}else{const Y=G.wireframe===!0;(l.geometry!==V.id||l.program!==q.id||l.wireframe!==Y)&&(l.geometry=V.id,l.program=q.id,l.wireframe=Y,K=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,k(I,G,q,V),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,G,q){const V=q.wireframe===!0;let re=a[I.id];re===void 0&&(re={},a[I.id]=re);let K=re[G.id];K===void 0&&(K={},re[G.id]=K);let Y=K[V];return Y===void 0&&(Y=p(d()),K[V]=Y),Y}function p(I){const G=[],q=[],V=[];for(let re=0;re<r;re++)G[re]=0,q[re]=0,V[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:V,object:I,attributes:{},index:null}}function f(I,G,q,V){const re=l.attributes,K=G.attributes;let Y=0;const oe=q.getAttributes();for(const ae in oe)if(oe[ae].location>=0){const Z=re[ae];let ue=K[ae];if(ue===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;Y++}return l.attributesNum!==Y||l.index!==V}function S(I,G,q,V){const re={},K=G.attributes;let Y=0;const oe=q.getAttributes();for(const ae in oe)if(oe[ae].location>=0){let Z=K[ae];Z===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),re[ae]=ue,Y++}l.attributes=re,l.attributesNum=Y,l.index=V}function y(){const I=l.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function M(I){b(I,0)}function b(I,G){const q=l.newAttributes,V=l.enabledAttributes,re=l.attributeDivisors;q[I]=1,V[I]===0&&(n.enableVertexAttribArray(I),V[I]=1),re[I]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),re[I]=G)}function L(){const I=l.newAttributes,G=l.enabledAttributes;for(let q=0,V=G.length;q<V;q++)G[q]!==I[q]&&(n.disableVertexAttribArray(q),G[q]=0)}function A(I,G,q,V,re,K,Y){Y===!0?n.vertexAttribIPointer(I,G,q,re,K):n.vertexAttribPointer(I,G,q,V,re,K)}function k(I,G,q,V){if(i.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const re=V.attributes,K=q.getAttributes(),Y=G.defaultAttributeValues;for(const oe in K){const ae=K[oe];if(ae.location>=0){let H=re[oe];if(H===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){const Z=H.normalized,ue=H.itemSize,ve=t.get(H);if(ve===void 0)continue;const ye=ve.buffer,Fe=ve.type,De=ve.bytesPerElement,Re=i.isWebGL2===!0&&(Fe===n.INT||Fe===n.UNSIGNED_INT||H.gpuType===Qf);if(H.isInterleavedBufferAttribute){const ke=H.data,U=ke.stride,Ft=H.offset;if(ke.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ae.locationSize;Ee++)b(ae.location+Ee,ke.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)M(ae.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Ee=0;Ee<ae.locationSize;Ee++)A(ae.location+Ee,ue/ae.locationSize,Fe,Z,U*De,(Ft+ue/ae.locationSize*Ee)*De,Re)}else{if(H.isInstancedBufferAttribute){for(let ke=0;ke<ae.locationSize;ke++)b(ae.location+ke,H.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ke=0;ke<ae.locationSize;ke++)M(ae.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ke=0;ke<ae.locationSize;ke++)A(ae.location+ke,ue/ae.locationSize,Fe,Z,ue*De,ue/ae.locationSize*ke*De,Re)}}else if(Y!==void 0){const Z=Y[oe];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(ae.location,Z);break;case 3:n.vertexAttrib3fv(ae.location,Z);break;case 4:n.vertexAttrib4fv(ae.location,Z);break;default:n.vertexAttrib1fv(ae.location,Z)}}}}L()}function x(){X();for(const I in a){const G=a[I];for(const q in G){const V=G[q];for(const re in V)g(V[re].object),delete V[re];delete G[q]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const q in G){const V=G[q];for(const re in V)g(V[re].object),delete V[re];delete G[q]}delete a[I.id]}function W(I){for(const G in a){const q=a[G];if(q[I.id]===void 0)continue;const V=q[I.id];for(const re in V)g(V[re].object),delete V[re];delete q[I.id]}}function X(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:Q,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:W,initAttributes:y,enableAttribute:M,disableUnusedAttributes:L}}function wv(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,u){n.drawArrays(s,h,u),t.update(u,s,1)}function c(h,u,d){if(d===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,d),t.update(u,s,d)}function l(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Rv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,M=o||e.has("OES_texture_float"),b=y&&M,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:L}}function Lv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ji,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const S=s?0:i,y=S*4;let M=f.clippingState||null;c.value=M,M=h(g,d,y,m);for(let b=0;b!==y;++b)M[b]=t[b];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,M=m;y!==_;++y,M+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Cv(n){let e=new WeakMap;function t(o,a){return a===ol?o.mapping=as:a===al&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new z0(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kl extends xp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,Ju=[.125,.215,.35,.446,.526,.582],vr=20,Dc=new Kl,Qu=new Ie;let Uc=null,Nc=0,Oc=0;const mr=(1+Math.sqrt(5))/2,$r=1/mr,ed=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,mr,$r),new C(0,mr,-$r),new C($r,0,mr),new C(-$r,0,mr),new C(mr,$r,0),new C(-mr,$r,0)];class td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Nc,Oc),e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:eo,format:Un,colorSpace:Kt,depthBuffer:!1},r=nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(s)),this._blurMaterial=Iv(s,e,t)}return r}_compileMaterial(e){const t=new On(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,i,r){const a=new on(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qu),h.toneMapping=$i,h.autoClear=!1;const m=new yr({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new On(new fo,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Qu),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;jo(r,S*y,f>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===as||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new On(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;jo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Dc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ed[(r-1)%ed.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new On(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vr-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):vr;p>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);const f=[];let S=0;for(let A=0;A<vr;++A){const k=A/_,x=Math.exp(-k*k/2);f.push(x),A===0?S+=x:A<p&&(S+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const M=this._sizeLods[r],b=3*M*(r>y-ts?r-y+ts:0),L=4*(this._cubeSize-M);jo(t,b,L,3*M,2*M),c.setRenderTarget(t),c.render(u,Dc)}}function Pv(n){const e=[],t=[],i=[];let r=n;const s=n-ts+1+Ju.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ts?c=Ju[o-n+ts-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,S=new Float32Array(_*g*m),y=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let L=0;L<m;L++){const A=L%3*2/3-1,k=L>2?0:-1,x=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];S.set(x,_*g*L),y.set(d,p*g*L);const w=[L,L,L,L,L,L];M.set(w,f*g*L)}const b=new Qn;b.setAttribute("position",new an(S,_)),b.setAttribute("uv",new an(y,p)),b.setAttribute("faceIndex",new an(M,f)),e.push(b),r>ts&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nd(n,e,t){const i=new Rr(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Iv(n,e,t){const i=new Float32Array(vr),r=new C(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function id(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function rd(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ol||c===al,h=c===as||c===cs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new td(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new td(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Uv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Nv(n,e,t,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let y=0,M=S.length;y<M;y+=3){const b=S[y+0],L=S[y+1],A=S[y+2];d.push(b,L,L,A,A,b)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const b=y+0,L=y+1,A=y+2;d.push(b,L,L,A,A,b)}}else return;const p=new(hp(d)?_p:gp)(d,1);p.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ov(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function u(m,g,_){if(_===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,_),t.update(g,s,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Fv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bv(n,e){return n[0]-e[0]}function kv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Gv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let G=function(){Q.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let x=0;y===!0&&(x=1),M===!0&&(x=2),b===!0&&(x=3);let w=h.attributes.position.count*x,W=1;w>e.maxTextureSize&&(W=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const X=new Float32Array(w*W*4*_),Q=new fp(X,w,W,_);Q.type=Pi,Q.needsUpdate=!0;const I=x*4;for(let q=0;q<_;q++){const V=L[q],re=A[q],K=k[q],Y=w*W*4*q;for(let oe=0;oe<V.count;oe++){const ae=oe*I;y===!0&&(o.fromBufferAttribute(V,oe),X[Y+ae+0]=o.x,X[Y+ae+1]=o.y,X[Y+ae+2]=o.z,X[Y+ae+3]=0),M===!0&&(o.fromBufferAttribute(re,oe),X[Y+ae+4]=o.x,X[Y+ae+5]=o.y,X[Y+ae+6]=o.z,X[Y+ae+7]=0),b===!0&&(o.fromBufferAttribute(K,oe),X[Y+ae+8]=o.x,X[Y+ae+9]=o.y,X[Y+ae+10]=o.z,X[Y+ae+11]=K.itemSize===4?o.w:1)}}p={count:_,texture:Q,size:new Ce(w,W)},s.set(h,p),h.addEventListener("dispose",G)}let f=0;for(let y=0;y<d.length;y++)f+=d[y];const S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];i[h.id]=_}for(let M=0;M<g;M++){const b=_[M];b[0]=M,b[1]=d[M]}_.sort(kv);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Bv);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const b=a[M],L=b[0],A=b[1];L!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+M)!==p[L]&&h.setAttribute("morphTarget"+M,p[L]),f&&h.getAttribute("morphNormal"+M)!==f[L]&&h.setAttribute("morphNormal"+M,f[L]),r[M]=A,S+=A):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const y=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Hv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Mp extends Yt{constructor(e,t,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:Sr,h!==Sr&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Sr&&(i=Ki),i===void 0&&h===hs&&(i=Mr),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sp=new Yt,Tp=new Mp(1,1);Tp.compareFunction=cp;const bp=new fp,Ap=new b0,wp=new yp,sd=[],od=[],ad=new Float32Array(16),cd=new Float32Array(9),ld=new Float32Array(4);function Ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=sd[r];if(s===void 0&&(s=new Float32Array(r),sd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),Ut(t,i)}}function qv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;cd.set(i),n.uniformMatrix3fv(this.addr,!1,cd),Ut(t,i)}}function Yv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),Ut(t,i)}}function Kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Tp:Sp;t.setTexture2D(e||s,r)}function rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ap,r)}function sx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wp,r)}function ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bp,r)}function ax(n){switch(n){case 5126:return zv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return jv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Kv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ox}}function cx(n,e){n.uniform1fv(this.addr,e)}function lx(n,e){const t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function hx(n,e){const t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function ux(n,e){const t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function dx(n,e){const t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fx(n,e){const t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function px(n,e){const t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mx(n,e){n.uniform1iv(this.addr,e)}function gx(n,e){n.uniform2iv(this.addr,e)}function _x(n,e){n.uniform3iv(this.addr,e)}function vx(n,e){n.uniform4iv(this.addr,e)}function xx(n,e){n.uniform1uiv(this.addr,e)}function yx(n,e){n.uniform2uiv(this.addr,e)}function Ex(n,e){n.uniform3uiv(this.addr,e)}function Mx(n,e){n.uniform4uiv(this.addr,e)}function Sx(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sp,s[o])}function Tx(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ap,s[o])}function bx(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wp,s[o])}function Ax(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bp,s[o])}function wx(n){switch(n){case 5126:return cx;case 35664:return lx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return _x;case 35669:case 35673:return vx;case 5125:return xx;case 36294:return yx;case 36295:return Ex;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ax}}class Rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}}class Lx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}}class Cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function hd(n,e){n.seq.push(e),n.map[e.id]=e}function Px(n,e,t){const i=n.name,r=i.length;for(Fc.lastIndex=0;;){const s=Fc.exec(i),o=Fc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){hd(t,l===void 0?new Rx(a,n,e):new Lx(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Cx(a),hd(t,u)),t=u}}}class la{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Px(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ix=37297;let Dx=0;function Ux(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Nx(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===ba&&t===Ta?i="LinearDisplayP3ToLinearSRGB":e===Ta&&t===ba&&(i="LinearSRGBToLinearDisplayP3"),n){case Kt:case Ba:return[i,"LinearTransferOETF"];case St:case Xl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ux(n.getShaderSource(e),o)}else return r}function Ox(n,e){const t=Nx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fx(n,e){let t;switch(e){case U_:t="Linear";break;case N_:t="Reinhard";break;case O_:t="OptimizedCineon";break;case F_:t="ACESFilmic";break;case B_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function kx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hs(n){return n!==""}function fd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(n){return n.replace(Hx,Vx)}const zx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vx(n,e){let t=Ve[e];if(t===void 0){const i=zx.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}const Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(Wx,Xx)}function Xx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===c_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function qx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case cs:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Kx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case I_:e="ENVMAP_BLENDING_MIX";break;case D_:e="ENVMAP_BLENDING_ADD";break}return e}function Zx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $x(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=jx(t),l=qx(t),h=Yx(t),u=Kx(t),d=Zx(t),m=t.isWebGL2?"":Bx(t),g=kx(s),_=r.createProgram();let p,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(p=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[m,gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?Ve.tonemapping_pars_fragment:"",t.toneMapping!==$i?Fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ox("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=fl(o),o=fd(o,t),o=pd(o,t),a=fl(a),a=fd(a,t),a=pd(a,t),o=md(o),a=md(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=S+p+o,M=S+f+a,b=ud(r,r.VERTEX_SHADER,y),L=ud(r,r.FRAGMENT_SHADER,M);r.attachShader(_,b),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(W){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),Q=r.getShaderInfoLog(b).trim(),I=r.getShaderInfoLog(L).trim();let G=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,L);else{const V=dd(r,b,"vertex"),re=dd(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+V+`
`+re)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Q===""||I==="")&&(q=!1);q&&(W.diagnostics={runnable:G,programLog:X,vertexShader:{log:Q,prefix:p},fragmentShader:{log:I,prefix:f}})}r.deleteShader(b),r.deleteShader(L),k=new la(r,_),x=Gx(r,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,Ix)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=L,this}let Jx=0;class Qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ey(e),t.set(e,i)),i}}class ey{constructor(e){this.id=Jx++,this.code=e,this.usedTimes=0}}function ty(n,e,t,i,r,s,o){const a=new pp,c=new Qx,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,w,W,X,Q){const I=X.fog,G=Q.geometry,q=x.isMeshStandardMaterial?X.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),re=V&&V.mapping===Fa?V.image.height:null,K=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=Y!==void 0?Y.length:0;let ae=0;G.morphAttributes.position!==void 0&&(ae=1),G.morphAttributes.normal!==void 0&&(ae=2),G.morphAttributes.color!==void 0&&(ae=3);let H,Z,ue,ve;if(K){const en=ci[K];H=en.vertexShader,Z=en.fragmentShader}else H=x.vertexShader,Z=x.fragmentShader,c.update(x),ue=c.getVertexShaderID(x),ve=c.getFragmentShaderID(x);const ye=n.getRenderTarget(),Fe=Q.isInstancedMesh===!0,De=Q.isBatchedMesh===!0,Re=!!x.map,ke=!!x.matcap,U=!!V,Ft=!!x.aoMap,Ee=!!x.lightMap,ze=!!x.bumpMap,Le=!!x.normalMap,at=!!x.displacementMap,Ge=!!x.emissiveMap,Ue=!!x.metalnessMap,$e=!!x.roughnessMap,Ct=x.anisotropy>0,Pt=x.clearcoat>0,T=x.iridescence>0,v=x.sheen>0,N=x.transmission>0,ee=Ct&&!!x.anisotropyMap,J=Pt&&!!x.clearcoatMap,te=Pt&&!!x.clearcoatNormalMap,ge=Pt&&!!x.clearcoatRoughnessMap,se=T&&!!x.iridescenceMap,he=T&&!!x.iridescenceThicknessMap,R=v&&!!x.sheenColorMap,ie=v&&!!x.sheenRoughnessMap,j=!!x.specularMap,be=!!x.specularColorMap,_e=!!x.specularIntensityMap,Se=N&&!!x.transmissionMap,pe=N&&!!x.thicknessMap,fe=!!x.gradientMap,Xe=!!x.alphaMap,P=x.alphaTest>0,ce=!!x.alphaHash,$=!!x.extensions,z=!!G.attributes.uv1,ne=!!G.attributes.uv2,Me=!!G.attributes.uv3;let je=$i;return x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(je=n.toneMapping),{isWebGL2:h,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:Z,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:De,instancing:Fe,instancingColor:Fe&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Kt,map:Re,matcap:ke,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:re,aoMap:Ft,lightMap:Ee,bumpMap:ze,normalMap:Le,displacementMap:d&&at,emissiveMap:Ge,normalMapObjectSpace:Le&&x.normalMapType===J_,normalMapTangentSpace:Le&&x.normalMapType===Wl,metalnessMap:Ue,roughnessMap:$e,anisotropy:Ct,anisotropyMap:ee,clearcoat:Pt,clearcoatMap:J,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,iridescence:T,iridescenceMap:se,iridescenceThicknessMap:he,sheen:v,sheenColorMap:R,sheenRoughnessMap:ie,specularMap:j,specularColorMap:be,specularIntensityMap:_e,transmission:N,transmissionMap:Se,thicknessMap:pe,gradientMap:fe,opaque:x.transparent===!1&&x.blending===rs,alphaMap:Xe,alphaTest:P,alphaHash:ce,combine:x.combine,mapUv:Re&&_(x.map.channel),aoMapUv:Ft&&_(x.aoMap.channel),lightMapUv:Ee&&_(x.lightMap.channel),bumpMapUv:ze&&_(x.bumpMap.channel),normalMapUv:Le&&_(x.normalMap.channel),displacementMapUv:at&&_(x.displacementMap.channel),emissiveMapUv:Ge&&_(x.emissiveMap.channel),metalnessMapUv:Ue&&_(x.metalnessMap.channel),roughnessMapUv:$e&&_(x.roughnessMap.channel),anisotropyMapUv:ee&&_(x.anisotropyMap.channel),clearcoatMapUv:J&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(x.sheenRoughnessMap.channel),specularMapUv:j&&_(x.specularMap.channel),specularColorMapUv:be&&_(x.specularColorMap.channel),specularIntensityMapUv:_e&&_(x.specularIntensityMap.channel),transmissionMapUv:Se&&_(x.transmissionMap.channel),thicknessMapUv:pe&&_(x.thicknessMap.channel),alphaMapUv:Xe&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||Ct),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:z,vertexUv2s:ne,vertexUv3s:Me,pointsUvs:Q.isPoints===!0&&!!G.attributes.uv&&(Re||Xe),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hi,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:$&&x.extensions.derivatives===!0,extensionFragDepth:$&&x.extensions.fragDepth===!0,extensionDrawBuffers:$&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:$&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)w.push(W),w.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(S(w,x),y(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function S(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function M(x){const w=g[x.type];let W;if(w){const X=ci[w];W=B0.clone(X.uniforms)}else W=x.uniforms;return W}function b(x,w){let W;for(let X=0,Q=l.length;X<Q;X++){const I=l[X];if(I.cacheKey===w){W=I,++W.usedTimes;break}}return W===void 0&&(W=new $x(n,w,x,s),l.push(W)),W}function L(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:b,releaseProgram:L,releaseShaderCache:A,programs:l,dispose:k}}function ny(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function iy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,m,g,_,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||iy),i.length>1&&i.sort(d||_d),r.length>1&&r.sort(d||_d)}function h(){for(let u=e,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function ry(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new vd,n.set(i,[o])):r>=s.length?(o=new vd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function oy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ay=0;function cy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ly(n,e){const t=new sy,i=oy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);const s=new C,o=new Ke,a=new Ke;function c(h,u){let d=0,m=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,p=0,f=0,S=0,y=0,M=0,b=0,L=0,A=0,k=0,x=0;h.sort(cy);const w=u===!0?Math.PI:1;for(let X=0,Q=h.length;X<Q;X++){const I=h[X],G=I.color,q=I.intensity,V=I.distance,re=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*q*w,m+=G.g*q*w,g+=G.b*q*w;else if(I.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(I.sh.coefficients[K],q);x++}else if(I.isDirectionalLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const Y=I.shadow,oe=i.get(I);oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,r.directionalShadow[_]=oe,r.directionalShadowMap[_]=re,r.directionalShadowMatrix[_]=I.shadow.matrix,M++}r.directional[_]=K,_++}else if(I.isSpotLight){const K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(G).multiplyScalar(q*w),K.distance=V,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,r.spot[f]=K;const Y=I.shadow;if(I.map&&(r.spotLightMap[A]=I.map,A++,Y.updateMatrices(I),I.castShadow&&k++),r.spotLightMatrix[f]=Y.matrix,I.castShadow){const oe=i.get(I);oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,r.spotShadow[f]=oe,r.spotShadowMap[f]=re,L++}f++}else if(I.isRectAreaLight){const K=t.get(I);K.color.copy(G).multiplyScalar(q),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=K,S++}else if(I.isPointLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*w),K.distance=I.distance,K.decay=I.decay,I.castShadow){const Y=I.shadow,oe=i.get(I);oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,oe.shadowCameraNear=Y.camera.near,oe.shadowCameraFar=Y.camera.far,r.pointShadow[p]=oe,r.pointShadowMap[p]=re,r.pointShadowMatrix[p]=I.shadow.matrix,b++}r.point[p]=K,p++}else if(I.isHemisphereLight){const K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(q*w),K.groundColor.copy(I.groundColor).multiplyScalar(q*w),r.hemi[y]=K,y++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const W=r.hash;(W.directionalLength!==_||W.pointLength!==p||W.spotLength!==f||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==M||W.numPointShadows!==b||W.numSpotShadows!==L||W.numSpotMaps!==A||W.numLightProbes!==x)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=S,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=L+A-k,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=x,W.directionalLength=_,W.pointLength=p,W.spotLength=f,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=M,W.numPointShadows=b,W.numSpotShadows=L,W.numSpotMaps=A,W.numLightProbes=x,r.version=ay++)}function l(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){const M=h[S];if(M.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(M.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function xd(n,e){const t=new ly(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function hy(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new xd(n,e),t.set(s,[c])):o>=a.length?(c=new xd(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class uy extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dy extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function my(n,e,t){let i=new ql;const r=new Ce,s=new Ce,o=new rt,a=new uy({depthPacking:$_}),c=new dy,l={},h=t.maxTextureSize,u={[Ui]:dn,[dn]:Ui,[hi]:hi},d=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:fy,fragmentShader:py}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Qn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zf;let f=this.type;this.render=function(b,L,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const k=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Zi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=f!==Ri&&this.type===Ri,Q=f===Ri&&this.type!==Ri;for(let I=0,G=b.length;I<G;I++){const q=b[I],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||X===!0||Q===!0){const Y=this.type!==Ri?{minFilter:Vt,magFilter:Vt}:{};V.map!==null&&V.map.dispose(),V.map=new Rr(r.x,r.y,Y),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const K=V.getViewportCount();for(let Y=0;Y<K;Y++){const oe=V.getViewport(Y);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),W.viewport(o),V.updateMatrices(q,Y),i=V.getFrustum(),M(L,A,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Ri&&S(V,A),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(k,x,w)};function S(b,L){const A=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(L,null,A,d,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(L,null,A,m,_,null)}function y(b,L,A,k){let x=null;const w=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)x=w;else if(x=A.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const W=x.uuid,X=L.uuid;let Q=l[W];Q===void 0&&(Q={},l[W]=Q);let I=Q[X];I===void 0&&(I=x.clone(),Q[X]=I),x=I}if(x.visible=L.visible,x.wireframe=L.wireframe,k===Ri?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:u[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=A}return x}function M(b,L,A,k,x){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ri)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const X=e.update(b),Q=b.material;if(Array.isArray(Q)){const I=X.groups;for(let G=0,q=I.length;G<q;G++){const V=I[G],re=Q[V.materialIndex];if(re&&re.visible){const K=y(b,re,k,x);b.onBeforeShadow(n,b,L,A,X,K,V),n.renderBufferDirect(A,null,X,K,b,V),b.onAfterShadow(n,b,L,A,X,K,V)}}}else if(Q.visible){const I=y(b,Q,k,x);b.onBeforeShadow(n,b,L,A,X,I,null),n.renderBufferDirect(A,null,X,I,b,null),b.onAfterShadow(n,b,L,A,X,I,null)}}const W=b.children;for(let X=0,Q=W.length;X<Q;X++)M(W[X],L,A,k,x)}}function gy(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const ce=new rt;let $=null;const z=new rt(0,0,0,0);return{setMask:function(ne){$!==ne&&!P&&(n.colorMask(ne,ne,ne,ne),$=ne)},setLocked:function(ne){P=ne},setClear:function(ne,Me,je,Bt,en){en===!0&&(ne*=Bt,Me*=Bt,je*=Bt),ce.set(ne,Me,je,Bt),z.equals(ce)===!1&&(n.clearColor(ne,Me,je,Bt),z.copy(ce))},reset:function(){P=!1,$=null,z.set(-1,0,0,0)}}}function s(){let P=!1,ce=null,$=null,z=null;return{setTest:function(ne){ne?De(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ne){ce!==ne&&!P&&(n.depthMask(ne),ce=ne)},setFunc:function(ne){if($!==ne){switch(ne){case b_:n.depthFunc(n.NEVER);break;case A_:n.depthFunc(n.ALWAYS);break;case w_:n.depthFunc(n.LESS);break;case Ea:n.depthFunc(n.LEQUAL);break;case R_:n.depthFunc(n.EQUAL);break;case L_:n.depthFunc(n.GEQUAL);break;case C_:n.depthFunc(n.GREATER);break;case P_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ne}},setLocked:function(ne){P=ne},setClear:function(ne){z!==ne&&(n.clearDepth(ne),z=ne)},reset:function(){P=!1,ce=null,$=null,z=null}}}function o(){let P=!1,ce=null,$=null,z=null,ne=null,Me=null,je=null,Bt=null,en=null;return{setTest:function(st){P||(st?De(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(st){ce!==st&&!P&&(n.stencilMask(st),ce=st)},setFunc:function(st,tn,si){($!==st||z!==tn||ne!==si)&&(n.stencilFunc(st,tn,si),$=st,z=tn,ne=si)},setOp:function(st,tn,si){(Me!==st||je!==tn||Bt!==si)&&(n.stencilOp(st,tn,si),Me=st,je=tn,Bt=si)},setLocked:function(st){P=st},setClear:function(st){en!==st&&(n.clearStencil(st),en=st)},reset:function(){P=!1,ce=null,$=null,z=null,ne=null,Me=null,je=null,Bt=null,en=null}}}const a=new r,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,y=null,M=null,b=null,L=null,A=null,k=null,x=new Ie(0,0,0),w=0,W=!1,X=null,Q=null,I=null,G=null,q=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),re=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),re=K>=2);let oe=null,ae={};const H=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ue=new rt().fromArray(H),ve=new rt().fromArray(Z);function ye(P,ce,$,z){const ne=new Uint8Array(4),Me=n.createTexture();n.bindTexture(P,Me),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<$;je++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(ce+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return Me}const Fe={};Fe[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(n.DEPTH_TEST),c.setFunc(Ea),Ge(!1),Ue(Jh),De(n.CULL_FACE),Le(Zi);function De(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Re(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function ke(P,ce){return m[P]!==ce?(n.bindFramebuffer(P,ce),m[P]=ce,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ce),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function U(P,ce){let $=_,z=!1;if(P)if($=g.get(ce),$===void 0&&($=[],g.set(ce,$)),P.isWebGLMultipleRenderTargets){const ne=P.texture;if($.length!==ne.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,je=ne.length;Me<je;Me++)$[Me]=n.COLOR_ATTACHMENT0+Me;$.length=ne.length,z=!0}}else $[0]!==n.COLOR_ATTACHMENT0&&($[0]=n.COLOR_ATTACHMENT0,z=!0);else $[0]!==n.BACK&&($[0]=n.BACK,z=!0);z&&(t.isWebGL2?n.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ft(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const Ee={[_r]:n.FUNC_ADD,[h_]:n.FUNC_SUBTRACT,[u_]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[nu]=n.MIN,Ee[iu]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[nu]=P.MIN_EXT,Ee[iu]=P.MAX_EXT)}const ze={[d_]:n.ZERO,[f_]:n.ONE,[p_]:n.SRC_COLOR,[rl]:n.SRC_ALPHA,[y_]:n.SRC_ALPHA_SATURATE,[v_]:n.DST_COLOR,[g_]:n.DST_ALPHA,[m_]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[x_]:n.ONE_MINUS_DST_COLOR,[__]:n.ONE_MINUS_DST_ALPHA,[E_]:n.CONSTANT_COLOR,[M_]:n.ONE_MINUS_CONSTANT_COLOR,[S_]:n.CONSTANT_ALPHA,[T_]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(P,ce,$,z,ne,Me,je,Bt,en,st){if(P===Zi){f===!0&&(Re(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),P!==l_){if(P!==S||st!==W){if((y!==_r||L!==_r)&&(n.blendEquation(n.FUNC_ADD),y=_r,L=_r),st)switch(P){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,b=null,A=null,k=null,x.set(0,0,0),w=0,S=P,W=st}return}ne=ne||ce,Me=Me||$,je=je||z,(ce!==y||ne!==L)&&(n.blendEquationSeparate(Ee[ce],Ee[ne]),y=ce,L=ne),($!==M||z!==b||Me!==A||je!==k)&&(n.blendFuncSeparate(ze[$],ze[z],ze[Me],ze[je]),M=$,b=z,A=Me,k=je),(Bt.equals(x)===!1||en!==w)&&(n.blendColor(Bt.r,Bt.g,Bt.b,en),x.copy(Bt),w=en),S=P,W=!1}function at(P,ce){P.side===hi?Re(n.CULL_FACE):De(n.CULL_FACE);let $=P.side===dn;ce&&($=!$),Ge($),P.blending===rs&&P.transparent===!1?Le(Zi):Le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const z=P.stencilWrite;l.setTest(z),z&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(P){X!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),X=P)}function Ue(P){P!==o_?(De(n.CULL_FACE),P!==Q&&(P===Jh?n.cullFace(n.BACK):P===a_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),Q=P}function $e(P){P!==I&&(re&&n.lineWidth(P),I=P)}function Ct(P,ce,$){P?(De(n.POLYGON_OFFSET_FILL),(G!==ce||q!==$)&&(n.polygonOffset(ce,$),G=ce,q=$)):Re(n.POLYGON_OFFSET_FILL)}function Pt(P){P?De(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function T(P){P===void 0&&(P=n.TEXTURE0+V-1),oe!==P&&(n.activeTexture(P),oe=P)}function v(P,ce,$){$===void 0&&(oe===null?$=n.TEXTURE0+V-1:$=oe);let z=ae[$];z===void 0&&(z={type:void 0,texture:void 0},ae[$]=z),(z.type!==P||z.texture!==ce)&&(oe!==$&&(n.activeTexture($),oe=$),n.bindTexture(P,ce||Fe[P]),z.type=P,z.texture=ce)}function N(){const P=ae[oe];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){ue.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ue.copy(P))}function Se(P){ve.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ve.copy(P))}function pe(P,ce){let $=u.get(ce);$===void 0&&($=new WeakMap,u.set(ce,$));let z=$.get(P);z===void 0&&(z=n.getUniformBlockIndex(ce,P.name),$.set(P,z))}function fe(P,ce){const z=u.get(ce).get(P);h.get(ce)!==z&&(n.uniformBlockBinding(ce,z,P.__bindingPointIndex),h.set(ce,z))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,ae={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,y=null,M=null,b=null,L=null,A=null,k=null,x=new Ie(0,0,0),w=0,W=!1,X=null,Q=null,I=null,G=null,q=null,ue.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:Re,bindFramebuffer:ke,drawBuffers:U,useProgram:Ft,setBlending:Le,setMaterial:at,setFlipSided:Ge,setCullFace:Ue,setLineWidth:$e,setPolygonOffset:Ct,setScissorTest:Pt,activeTexture:T,bindTexture:v,unbindTexture:N,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:j,texImage3D:be,updateUBOMapping:pe,uniformBlockBinding:fe,texStorage2D:R,texStorage3D:ie,texSubImage2D:te,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:_e,viewport:Se,reset:Xe}}function _y(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,v){return f?new OffscreenCanvas(T,v):no("canvas")}function y(T,v,N,ee){let J=1;if((T.width>ee||T.height>ee)&&(J=ee/Math.max(T.width,T.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const te=v?wa:Math.floor,ge=te(J*T.width),se=te(J*T.height);_===void 0&&(_=S(ge,se));const he=N?S(ge,se):_;return he.width=ge,he.height=se,he.getContext("2d").drawImage(T,0,0,ge,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ge+"x"+se+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return dl(T.width)&&dl(T.height)}function b(T){return a?!1:T.wrapS!==Dn||T.wrapT!==Dn||T.minFilter!==Vt&&T.minFilter!==un}function L(T,v){return T.generateMipmaps&&v&&T.minFilter!==Vt&&T.minFilter!==un}function A(T){n.generateMipmap(T)}function k(T,v,N,ee,J=!1){if(a===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let te=v;if(v===n.RED&&(N===n.FLOAT&&(te=n.R32F),N===n.HALF_FLOAT&&(te=n.R16F),N===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(te=n.R8UI),N===n.UNSIGNED_SHORT&&(te=n.R16UI),N===n.UNSIGNED_INT&&(te=n.R32UI),N===n.BYTE&&(te=n.R8I),N===n.SHORT&&(te=n.R16I),N===n.INT&&(te=n.R32I)),v===n.RG&&(N===n.FLOAT&&(te=n.RG32F),N===n.HALF_FLOAT&&(te=n.RG16F),N===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const ge=J?Sa:tt.getTransfer(ee);N===n.FLOAT&&(te=n.RGBA32F),N===n.HALF_FLOAT&&(te=n.RGBA16F),N===n.UNSIGNED_BYTE&&(te=ge===ct?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(T,v,N){return L(T,N)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){return T===Vt||T===cl||T===ca?n.NEAREST:n.LINEAR}function W(T){const v=T.target;v.removeEventListener("dispose",W),Q(v),v.isVideoTexture&&g.delete(v)}function X(T){const v=T.target;v.removeEventListener("dispose",X),G(v)}function Q(T){const v=i.get(T);if(v.__webglInit===void 0)return;const N=T.source,ee=p.get(N);if(ee){const J=ee[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(T),Object.keys(ee).length===0&&p.delete(N)}i.remove(T)}function I(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const N=T.source,ee=p.get(N);delete ee[v.__cacheKey],o.memory.textures--}function G(T){const v=T.texture,N=i.get(T),ee=i.get(v);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(N.__webglFramebuffer[J]))for(let te=0;te<N.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(N.__webglFramebuffer[J][te]);else n.deleteFramebuffer(N.__webglFramebuffer[J]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[J])}else{if(Array.isArray(N.__webglFramebuffer))for(let J=0;J<N.__webglFramebuffer.length;J++)n.deleteFramebuffer(N.__webglFramebuffer[J]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let J=0;J<N.__webglColorRenderbuffer.length;J++)N.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,te=v.length;J<te;J++){const ge=i.get(v[J]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(T)}let q=0;function V(){q=0}function re(){const T=q;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),q+=1,T}function K(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Y(T,v){const N=i.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(N,T,v);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function oe(T,v){const N=i.get(T);if(T.version>0&&N.__version!==T.version){De(N,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function ae(T,v){const N=i.get(T);if(T.version>0&&N.__version!==T.version){De(N,T,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function H(T,v){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Re(N,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const Z={[ls]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},ue={[Vt]:n.NEAREST,[cl]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Jf]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},ve={[Q_]:n.NEVER,[s0]:n.ALWAYS,[e0]:n.LESS,[cp]:n.LEQUAL,[t0]:n.EQUAL,[r0]:n.GEQUAL,[n0]:n.GREATER,[i0]:n.NOTEQUAL};function ye(T,v,N){if(N?(n.texParameteri(T,n.TEXTURE_WRAP_S,Z[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Z[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Z[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Dn||v.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Vt&&v.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Vt||v.minFilter!==ca&&v.minFilter!==wr||v.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===eo&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Fe(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",W));const ee=v.source;let J=p.get(ee);J===void 0&&(J={},p.set(ee,J));const te=K(v);if(te!==T.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[te].usedTimes++;const ge=J[T.__cacheKey];ge!==void 0&&(J[T.__cacheKey].usedTimes--,ge.usedTimes===0&&I(v)),T.__cacheKey=te,T.__webglTexture=J[te].texture}return N}function De(T,v,N){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);const J=Fe(T,v),te=v.source;t.bindTexture(ee,T.__webglTexture,n.TEXTURE0+N);const ge=i.get(te);if(te.version!==ge.__version||J===!0){t.activeTexture(n.TEXTURE0+N);const se=tt.getPrimaries(tt.workingColorSpace),he=v.colorSpace===Nn?null:tt.getPrimaries(v.colorSpace),R=v.colorSpace===Nn||se===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);const ie=b(v)&&M(v.image)===!1;let j=y(v.image,ie,!1,h);j=Pt(v,j);const be=M(j)||a,_e=s.convert(v.format,v.colorSpace);let Se=s.convert(v.type),pe=k(v.internalFormat,_e,Se,v.colorSpace,v.isVideoTexture);ye(ee,v,be);let fe;const Xe=v.mipmaps,P=a&&v.isVideoTexture!==!0&&pe!==sp,ce=ge.__version===void 0||J===!0,$=x(v,j,be);if(v.isDepthTexture)pe=n.DEPTH_COMPONENT,a?v.type===Pi?pe=n.DEPTH_COMPONENT32F:v.type===Ki?pe=n.DEPTH_COMPONENT24:v.type===Mr?pe=n.DEPTH24_STENCIL8:pe=n.DEPTH_COMPONENT16:v.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Sr&&pe===n.DEPTH_COMPONENT&&v.type!==Vl&&v.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ki,Se=s.convert(v.type)),v.format===hs&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,v.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Mr,Se=s.convert(v.type))),ce&&(P?t.texStorage2D(n.TEXTURE_2D,1,pe,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,pe,j.width,j.height,0,_e,Se,null));else if(v.isDataTexture)if(Xe.length>0&&be){P&&ce&&t.texStorage2D(n.TEXTURE_2D,$,pe,Xe[0].width,Xe[0].height);for(let z=0,ne=Xe.length;z<ne;z++)fe=Xe[z],P?t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,_e,Se,fe.data):t.texImage2D(n.TEXTURE_2D,z,pe,fe.width,fe.height,0,_e,Se,fe.data);v.generateMipmaps=!1}else P?(ce&&t.texStorage2D(n.TEXTURE_2D,$,pe,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,_e,Se,j.data)):t.texImage2D(n.TEXTURE_2D,0,pe,j.width,j.height,0,_e,Se,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$,pe,Xe[0].width,Xe[0].height,j.depth);for(let z=0,ne=Xe.length;z<ne;z++)fe=Xe[z],v.format!==Un?_e!==null?P?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,j.depth,_e,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,pe,fe.width,fe.height,j.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,j.depth,_e,Se,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,pe,fe.width,fe.height,j.depth,0,_e,Se,fe.data)}else{P&&ce&&t.texStorage2D(n.TEXTURE_2D,$,pe,Xe[0].width,Xe[0].height);for(let z=0,ne=Xe.length;z<ne;z++)fe=Xe[z],v.format!==Un?_e!==null?P?t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,z,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,_e,Se,fe.data):t.texImage2D(n.TEXTURE_2D,z,pe,fe.width,fe.height,0,_e,Se,fe.data)}else if(v.isDataArrayTexture)P?(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$,pe,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_e,Se,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,j.width,j.height,j.depth,0,_e,Se,j.data);else if(v.isData3DTexture)P?(ce&&t.texStorage3D(n.TEXTURE_3D,$,pe,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_e,Se,j.data)):t.texImage3D(n.TEXTURE_3D,0,pe,j.width,j.height,j.depth,0,_e,Se,j.data);else if(v.isFramebufferTexture){if(ce)if(P)t.texStorage2D(n.TEXTURE_2D,$,pe,j.width,j.height);else{let z=j.width,ne=j.height;for(let Me=0;Me<$;Me++)t.texImage2D(n.TEXTURE_2D,Me,pe,z,ne,0,_e,Se,null),z>>=1,ne>>=1}}else if(Xe.length>0&&be){P&&ce&&t.texStorage2D(n.TEXTURE_2D,$,pe,Xe[0].width,Xe[0].height);for(let z=0,ne=Xe.length;z<ne;z++)fe=Xe[z],P?t.texSubImage2D(n.TEXTURE_2D,z,0,0,_e,Se,fe):t.texImage2D(n.TEXTURE_2D,z,pe,_e,Se,fe);v.generateMipmaps=!1}else P?(ce&&t.texStorage2D(n.TEXTURE_2D,$,pe,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Se,j)):t.texImage2D(n.TEXTURE_2D,0,pe,_e,Se,j);L(v,be)&&A(ee),ge.__version=te.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Re(T,v,N){if(v.image.length!==6)return;const ee=Fe(T,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const te=i.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+N);const ge=tt.getPrimaries(tt.workingColorSpace),se=v.colorSpace===Nn?null:tt.getPrimaries(v.colorSpace),he=v.colorSpace===Nn||ge===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const R=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,j=[];for(let z=0;z<6;z++)!R&&!ie?j[z]=y(v.image[z],!1,!0,l):j[z]=ie?v.image[z].image:v.image[z],j[z]=Pt(v,j[z]);const be=j[0],_e=M(be)||a,Se=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),fe=k(v.internalFormat,Se,pe,v.colorSpace),Xe=a&&v.isVideoTexture!==!0,P=te.__version===void 0||ee===!0;let ce=x(v,be,_e);ye(n.TEXTURE_CUBE_MAP,v,_e);let $;if(R){Xe&&P&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,fe,be.width,be.height);for(let z=0;z<6;z++){$=j[z].mipmaps;for(let ne=0;ne<$.length;ne++){const Me=$[ne];v.format!==Un?Se!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,Me.width,Me.height,Se,pe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,Me.width,Me.height,0,Se,pe,Me.data)}}}else{$=v.mipmaps,Xe&&P&&($.length>0&&ce++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,fe,j[0].width,j[0].height));for(let z=0;z<6;z++)if(ie){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,j[z].width,j[z].height,Se,pe,j[z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,j[z].width,j[z].height,0,Se,pe,j[z].data);for(let ne=0;ne<$.length;ne++){const je=$[ne].image[z].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,je.width,je.height,Se,pe,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,je.width,je.height,0,Se,pe,je.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Se,pe,j[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,Se,pe,j[z]);for(let ne=0;ne<$.length;ne++){const Me=$[ne];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Se,pe,Me.image[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,Se,pe,Me.image[z])}}}L(v,_e)&&A(n.TEXTURE_CUBE_MAP),te.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ke(T,v,N,ee,J,te){const ge=s.convert(N.format,N.colorSpace),se=s.convert(N.type),he=k(N.internalFormat,ge,se,N.colorSpace);if(!i.get(v).__hasExternalTextures){const ie=Math.max(1,v.width>>te),j=Math.max(1,v.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,he,ie,j,v.depth,0,ge,se,null):t.texImage2D(J,te,he,ie,j,0,ge,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),$e(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(N).__webglTexture,0,Ue(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(N).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(T,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||$e(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===Pi?ee=n.DEPTH_COMPONENT32F:J.type===Ki&&(ee=n.DEPTH_COMPONENT24));const te=Ue(v);$e(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Ue(v);N&&$e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):$e(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<ee.length;J++){const te=ee[J],ge=s.convert(te.format,te.colorSpace),se=s.convert(te.type),he=k(te.internalFormat,ge,se,te.colorSpace),R=Ue(v);N&&$e(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,he,v.width,v.height):$e(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const ee=i.get(v.depthTexture).__webglTexture,J=Ue(v);if(v.depthTexture.format===Sr)$e(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===hs)$e(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(T){const v=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ft(v.__webglFramebuffer,T)}else if(N){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=n.createRenderbuffer(),U(v.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),U(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(T,v,N){const ee=i.get(T);v!==void 0&&ke(ee.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ee(T)}function Le(T){const v=T.texture,N=i.get(T),ee=i.get(v);T.addEventListener("dispose",X),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,o.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,te=T.isWebGLMultipleRenderTargets===!0,ge=M(T)||a;if(J){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let he=0;he<v.mipmaps.length;he++)N.__webglFramebuffer[se][he]=n.createFramebuffer()}else N.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)N.__webglFramebuffer[se]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const se=T.texture;for(let he=0,R=se.length;he<R;he++){const ie=i.get(se[he]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&$e(T)===!1){const se=te?v:[v];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const R=se[he];N.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const ie=s.convert(R.format,R.colorSpace),j=s.convert(R.type),be=k(R.internalFormat,ie,j,R.colorSpace,T.isXRRenderTarget===!0),_e=Ue(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,be,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,N.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),U(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ye(n.TEXTURE_CUBE_MAP,v,ge);for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ke(N.__webglFramebuffer[se][he],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else ke(N.__webglFramebuffer[se],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);L(v,ge)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const se=T.texture;for(let he=0,R=se.length;he<R;he++){const ie=se[he],j=i.get(ie);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),ye(n.TEXTURE_2D,ie,ge),ke(N.__webglFramebuffer,T,ie,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),L(ie,ge)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ee.__webglTexture),ye(se,v,ge),a&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ke(N.__webglFramebuffer[he],T,v,n.COLOR_ATTACHMENT0,se,he);else ke(N.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,se,0);L(v,ge)&&A(se),t.unbindTexture()}T.depthBuffer&&Ee(T)}function at(T){const v=M(T)||a,N=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,J=N.length;ee<J;ee++){const te=N[ee];if(L(te,v)){const ge=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(te).__webglTexture;t.bindTexture(ge,se),A(ge),t.unbindTexture()}}}function Ge(T){if(a&&T.samples>0&&$e(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],N=T.width,ee=T.height;let J=n.COLOR_BUFFER_BIT;const te=[],ge=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(T),he=T.isWebGLMultipleRenderTargets===!0;if(he)for(let R=0;R<v.length;R++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let R=0;R<v.length;R++){te.push(n.COLOR_ATTACHMENT0+R),T.depthBuffer&&te.push(ge);const ie=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(ie===!1&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[R]),ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),he){const j=i.get(v[R]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,N,ee,0,0,N,ee,J,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let R=0;R<v.length;R++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,se.__webglColorRenderbuffer[R]);const ie=i.get(v[R]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ue(T){return Math.min(u,T.samples)}function $e(T){const v=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(T){const v=o.render.frame;g.get(T)!==v&&(g.set(T,v),T.update())}function Pt(T,v){const N=T.colorSpace,ee=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ul||N!==Kt&&N!==Nn&&(tt.getTransfer(N)===ct?a===!1?e.has("EXT_sRGB")===!0&&ee===Un?(T.format=ul,T.minFilter=un,T.generateMipmaps=!1):v=up.sRGBToLinear(v):(ee!==Un||J!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=re,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=oe,this.setTexture3D=ae,this.setTextureCube=H,this.rebindTextures=ze,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=$e}function vy(n,e,t){const i=t.isWebGL2;function r(s,o=Nn){let a;const c=tt.getTransfer(o);if(s===Ji)return n.UNSIGNED_BYTE;if(s===ep)return n.UNSIGNED_SHORT_4_4_4_4;if(s===tp)return n.UNSIGNED_SHORT_5_5_5_1;if(s===G_)return n.BYTE;if(s===H_)return n.SHORT;if(s===Vl)return n.UNSIGNED_SHORT;if(s===Qf)return n.INT;if(s===Ki)return n.UNSIGNED_INT;if(s===Pi)return n.FLOAT;if(s===eo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===z_)return n.ALPHA;if(s===Un)return n.RGBA;if(s===V_)return n.LUMINANCE;if(s===W_)return n.LUMINANCE_ALPHA;if(s===Sr)return n.DEPTH_COMPONENT;if(s===hs)return n.DEPTH_STENCIL;if(s===ul)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===X_)return n.RED;if(s===np)return n.RED_INTEGER;if(s===j_)return n.RG;if(s===ip)return n.RG_INTEGER;if(s===rp)return n.RGBA_INTEGER;if(s===hc||s===uc||s===dc||s===fc)if(c===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===su||s===ou||s===au||s===cu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===su)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ou)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===au)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lu||s===hu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lu)return c===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uu||s===du||s===fu||s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Eu||s===Mu||s===Su||s===Tu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===uu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===du)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_u)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Eu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Su)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tu)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pc||s===bu||s===Au)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pc)return c===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Au)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===q_||s===wu||s===Ru||s===Lu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ru)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class xy extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ey extends Dr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const S=[],y=[],M=new Ce;let b=null;const L=new on;L.layers.enable(1),L.viewport=new rt;const A=new on;A.layers.enable(2),A.viewport=new rt;const k=[L,A],x=new xy;x.layers.enable(1),x.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=S[H];return Z===void 0&&(Z=new Bc,S[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=S[H];return Z===void 0&&(Z=new Bc,S[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=S[H];return Z===void 0&&(Z=new Bc,S[H]=Z),Z.getHandSpace()};function X(H){const Z=y.indexOf(H.inputSource);if(Z===-1)return;const ue=S[Z];ue!==void 0&&(ue.update(H.inputSource,H.frame,l||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function Q(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",I);for(let H=0;H<S.length;H++){const Z=y[H];Z!==null&&(y[H]=null,S[H].disconnect(Z))}w=null,W=null,e.setRenderTarget(p),m=null,d=null,u=null,r=null,f=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Rr(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ue=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?hs:Sr,ue=_.stencil?Mr:Ki);const ye={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Rr(d.textureWidth,d.textureHeight,{format:Un,type:Ji,depthTexture:new Mp(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Fe=e.properties.get(f);Fe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(H){for(let Z=0;Z<H.removed.length;Z++){const ue=H.removed[Z],ve=y.indexOf(ue);ve>=0&&(y[ve]=null,S[ve].disconnect(ue))}for(let Z=0;Z<H.added.length;Z++){const ue=H.added[Z];let ve=y.indexOf(ue);if(ve===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=y.length){y.push(ue),ve=Fe;break}else if(y[Fe]===null){y[Fe]=ue,ve=Fe;break}if(ve===-1)break}const ye=S[ve];ye&&ye.connect(ue)}}const G=new C,q=new C;function V(H,Z,ue){G.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const ve=G.distanceTo(q),ye=Z.projectionMatrix.elements,Fe=ue.projectionMatrix.elements,De=ye[14]/(ye[10]-1),Re=ye[14]/(ye[10]+1),ke=(ye[9]+1)/ye[5],U=(ye[9]-1)/ye[5],Ft=(ye[8]-1)/ye[0],Ee=(Fe[8]+1)/Fe[0],ze=De*Ft,Le=De*Ee,at=ve/(-Ft+Ee),Ge=at*-Ft;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ge),H.translateZ(at),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Ue=De+at,$e=Re+at,Ct=ze-Ge,Pt=Le+(ve-Ge),T=ke*Re/$e*Ue,v=U*Re/$e*Ue;H.projectionMatrix.makePerspective(Ct,Pt,T,v,Ue,$e),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function re(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.near=A.near=L.near=H.near,x.far=A.far=L.far=H.far,(w!==x.near||W!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,W=x.far);const Z=H.parent,ue=x.cameras;re(x,Z);for(let ve=0;ve<ue.length;ve++)re(ue[ve],Z);ue.length===2?V(x,L,A):x.projectionMatrix.copy(L.projectionMatrix),K(H,x,Z)};function K(H,Z,ue){ue===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ds*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let Y=null;function oe(H,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ve=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let ye=0;ye<ue.length;ye++){const Fe=ue[ye];let De=null;if(m!==null)De=m.getViewport(Fe);else{const ke=u.getViewSubImage(d,Fe);De=ke.viewport,ye===0&&(e.setRenderTargetTextures(f,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let Re=k[ye];Re===void 0&&(Re=new on,Re.layers.enable(ye),Re.viewport=new rt,k[ye]=Re),Re.matrix.fromArray(Fe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Fe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(De.x,De.y,De.width,De.height),ye===0&&(x.matrix.copy(Re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(Re)}}for(let ue=0;ue<S.length;ue++){const ve=y[ue],ye=S[ue];ve!==null&&ye!==void 0&&ye.update(ve,Z,l||o)}Y&&Y(H,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ae=new Ep;ae.setAnimationLoop(oe),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}function My(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,vp(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===dn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===dn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sy(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,y){const M=y.program;i.uniformBlockBinding(S,M)}function l(S,y){let M=r[S.id];M===void 0&&(g(S),M=h(S),r[S.id]=M,S.addEventListener("dispose",p));const b=y.program;i.updateUBOMapping(S,b);const L=e.render.frame;s[S.id]!==L&&(d(S),s[S.id]=L)}function h(S){const y=u();S.__bindingPointIndex=y;const M=n.createBuffer(),b=S.__size,L=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,b,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],M=S.uniforms,b=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,A=M.length;L<A;L++){const k=M[L];if(m(k,L,b)===!0){const x=k.__offset,w=Array.isArray(k.value)?k.value:[k.value];let W=0;for(let X=0;X<w.length;X++){const Q=w[X],I=_(Q);typeof Q=="number"?(k.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,x+W,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=Q.elements[0],k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=Q.elements[0],k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=Q.elements[0]):(Q.toArray(k.__data,W),W+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,k.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,y,M){const b=S.value;if(M[y]===void 0){if(typeof b=="number")M[y]=b;else{const L=Array.isArray(b)?b:[b],A=[];for(let k=0;k<L.length;k++)A.push(L[k].clone());M[y]=A}return!0}else if(typeof b=="number"){if(M[y]!==b)return M[y]=b,!0}else{const L=Array.isArray(M[y])?M[y]:[M[y]],A=Array.isArray(b)?b:[b];for(let k=0;k<L.length;k++){const x=L[k];if(x.equals(A[k])===!1)return x.copy(A[k]),!0}}return!1}function g(S){const y=S.uniforms;let M=0;const b=16;let L=0;for(let A=0,k=y.length;A<k;A++){const x=y[A],w={boundary:0,storage:0},W=Array.isArray(x.value)?x.value:[x.value];for(let X=0,Q=W.length;X<Q;X++){const I=W[X],G=_(I);w.boundary+=G.boundary,w.storage+=G.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,A>0){L=M%b;const X=b-L;L!==0&&X-w.boundary<0&&(M+=b-L,x.__offset=M)}M+=w.storage}return L=M%b,L>0&&(M+=b-L),S.__size=M,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Rp{constructor(e={}){const{canvas:t=y0(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=$i,this.toneMappingExposure=1;const y=this;let M=!1,b=0,L=0,A=null,k=-1,x=null;const w=new rt,W=new rt;let X=null;const Q=new Ie(0);let I=0,G=t.width,q=t.height,V=1,re=null,K=null;const Y=new rt(0,0,G,q),oe=new rt(0,0,G,q);let ae=!1;const H=new ql;let Z=!1,ue=!1,ve=null;const ye=new Ke,Fe=new Ce,De=new C,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return A===null?V:1}let U=i;function Ft(E,D){for(let F=0;F<E.length;F++){const B=E[F],O=t.getContext(B,D);if(O!==null)return O}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),U=Ft(D,E),U===null)throw Ft(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,ze,Le,at,Ge,Ue,$e,Ct,Pt,T,v,N,ee,J,te,ge,se,he,R,ie,j,be,_e,Se;function pe(){Ee=new Uv(U),ze=new Rv(U,Ee,e),Ee.init(ze),be=new vy(U,Ee,ze),Le=new gy(U,Ee,ze),at=new Fv(U),Ge=new ny,Ue=new _y(U,Ee,Le,Ge,ze,be,at),$e=new Cv(y),Ct=new Dv(y),Pt=new X0(U,ze),_e=new Av(U,Ee,Pt,ze),T=new Nv(U,Pt,at,_e),v=new Hv(U,T,Pt,at),R=new Gv(U,ze,Ue),ge=new Lv(Ge),N=new ty(y,$e,Ct,Ee,ze,_e,ge),ee=new My(y,Ge),J=new ry,te=new hy(Ee,ze),he=new bv(y,$e,Ct,Le,v,d,c),se=new my(y,v,ze),Se=new Sy(U,at,ze,Le),ie=new wv(U,Ee,at,ze),j=new Ov(U,Ee,at,ze),at.programs=N.programs,y.capabilities=ze,y.extensions=Ee,y.properties=Ge,y.renderLists=J,y.shadowMap=se,y.state=Le,y.info=at}pe();const fe=new Ey(y,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,q,!1))},this.getSize=function(E){return E.set(G,q)},this.setSize=function(E,D,F=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,q=D,t.width=Math.floor(E*V),t.height=Math.floor(D*V),F===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(G*V,q*V).floor()},this.setDrawingBufferSize=function(E,D,F){G=E,q=D,V=F,t.width=Math.floor(E*F),t.height=Math.floor(D*F),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,D,F,B){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,D,F,B),Le.viewport(w.copy(Y).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,D,F,B){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,D,F,B),Le.scissor(W.copy(oe).multiplyScalar(V).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){Le.setScissorTest(ae=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(E=!0,D=!0,F=!0){let B=0;if(E){let O=!1;if(A!==null){const de=A.texture.format;O=de===rp||de===ip||de===np}if(O){const de=A.texture.type,xe=de===Ji||de===Ki||de===Vl||de===Mr||de===ep||de===tp,Ae=he.getClearColor(),Ne=he.getClearAlpha(),We=Ae.r,Be=Ae.g,He=Ae.b;xe?(m[0]=We,m[1]=Be,m[2]=He,m[3]=Ne,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=We,g[1]=Be,g[2]=He,g[3]=Ne,U.clearBufferiv(U.COLOR,0,g))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),te.dispose(),Ge.dispose(),$e.dispose(),Ct.dispose(),v.dispose(),_e.dispose(),Se.dispose(),N.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",en),fe.removeEventListener("sessionend",st),ve&&(ve.dispose(),ve=null),tn.stop()};function Xe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=at.autoReset,D=se.enabled,F=se.autoUpdate,B=se.needsUpdate,O=se.type;pe(),at.autoReset=E,se.enabled=D,se.autoUpdate=F,se.needsUpdate=B,se.type=O}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const D=E.target;D.removeEventListener("dispose",$),z(D)}function z(E){ne(E),Ge.remove(E)}function ne(E){const D=Ge.get(E).programs;D!==void 0&&(D.forEach(function(F){N.releaseProgram(F)}),E.isShaderMaterial&&N.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,F,B,O,de){D===null&&(D=Re);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Ae=n_(E,D,F,B,O);Le.setMaterial(B,xe);let Ne=F.index,We=1;if(B.wireframe===!0){if(Ne=T.getWireframeAttribute(F),Ne===void 0)return;We=2}const Be=F.drawRange,He=F.attributes.position;let At=Be.start*We,_n=(Be.start+Be.count)*We;de!==null&&(At=Math.max(At,de.start*We),_n=Math.min(_n,(de.start+de.count)*We)),Ne!==null?(At=Math.max(At,0),_n=Math.min(_n,Ne.count)):He!=null&&(At=Math.max(At,0),_n=Math.min(_n,He.count));const kt=_n-At;if(kt<0||kt===1/0)return;_e.setup(O,B,Ae,F,Ne);let xi,_t=ie;if(Ne!==null&&(xi=Pt.get(Ne),_t=j,_t.setIndex(xi)),O.isMesh)B.wireframe===!0?(Le.setLineWidth(B.wireframeLinewidth*ke()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if(O.isLine){let qe=B.linewidth;qe===void 0&&(qe=1),Le.setLineWidth(qe*ke()),O.isLineSegments?_t.setMode(U.LINES):O.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else O.isPoints?_t.setMode(U.POINTS):O.isSprite&&_t.setMode(U.TRIANGLES);if(O.isBatchedMesh)_t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)_t.renderInstances(At,kt,O.count);else if(F.isInstancedBufferGeometry){const qe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,oc=Math.min(F.instanceCount,qe);_t.renderInstances(At,kt,oc)}else _t.render(At,kt)};function Me(E,D,F){E.transparent===!0&&E.side===hi&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,To(E,D,F),E.side=Ui,E.needsUpdate=!0,To(E,D,F),E.side=hi):To(E,D,F)}this.compile=function(E,D,F=null){F===null&&(F=E),p=te.get(F),p.init(),S.push(p),F.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==F&&E.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(y._useLegacyLights);const B=new Set;return E.traverse(function(O){const de=O.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const Ae=de[xe];Me(Ae,F,O),B.add(Ae)}else Me(de,F,O),B.add(de)}),S.pop(),p=null,B},this.compileAsync=function(E,D,F=null){const B=this.compile(E,D,F);return new Promise(O=>{function de(){if(B.forEach(function(xe){Ge.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){O(E);return}setTimeout(de,10)}Ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let je=null;function Bt(E){je&&je(E)}function en(){tn.stop()}function st(){tn.start()}const tn=new Ep;tn.setAnimationLoop(Bt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(E){je=E,fe.setAnimationLoop(E),E===null?tn.stop():tn.start()},fe.addEventListener("sessionstart",en),fe.addEventListener("sessionend",st),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(D),D=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,D,A),p=te.get(E,S.length),p.init(),S.push(p),ye.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(ye),ue=this.localClippingEnabled,Z=ge.init(this.clippingPlanes,ue),_=J.get(E,f.length),_.init(),f.push(_),si(E,D,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(re,K),this.info.render.frame++,Z===!0&&ge.beginShadows();const F=p.state.shadowsArray;if(se.render(F,E,D),Z===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(_,E),p.setupLights(y._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let O=0,de=B.length;O<de;O++){const xe=B[O];jh(_,E,xe,xe.viewport)}}else jh(_,E,D);A!==null&&(Ue.updateMultisampleRenderTarget(A),Ue.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(y,E,D),_e.resetDefaultState(),k=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function si(E,D,F,B){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){B&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const xe=v.update(E),Ae=E.material;Ae.visible&&_.push(E,xe,Ae,F,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){const xe=v.update(E),Ae=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Ae)){const Ne=xe.groups;for(let We=0,Be=Ne.length;We<Be;We++){const He=Ne[We],At=Ae[He.materialIndex];At&&At.visible&&_.push(E,xe,At,F,De.z,He)}}else Ae.visible&&_.push(E,xe,Ae,F,De.z,null)}}const de=E.children;for(let xe=0,Ae=de.length;xe<Ae;xe++)si(de[xe],D,F,B)}function jh(E,D,F,B){const O=E.opaque,de=E.transmissive,xe=E.transparent;p.setupLightsView(F),Z===!0&&ge.setGlobalState(y.clippingPlanes,F),de.length>0&&t_(O,de,D,F),B&&Le.viewport(w.copy(B)),O.length>0&&So(O,D,F),de.length>0&&So(de,D,F),xe.length>0&&So(xe,D,F),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function t_(E,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const de=ze.isWebGL2;ve===null&&(ve=new Rr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?eo:Ji,minFilter:wr,samples:de?4:0})),y.getDrawingBufferSize(Fe),de?ve.setSize(Fe.x,Fe.y):ve.setSize(wa(Fe.x),wa(Fe.y));const xe=y.getRenderTarget();y.setRenderTarget(ve),y.getClearColor(Q),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const Ae=y.toneMapping;y.toneMapping=$i,So(E,F,B),Ue.updateMultisampleRenderTarget(ve),Ue.updateRenderTargetMipmap(ve);let Ne=!1;for(let We=0,Be=D.length;We<Be;We++){const He=D[We],At=He.object,_n=He.geometry,kt=He.material,xi=He.group;if(kt.side===hi&&At.layers.test(B.layers)){const _t=kt.side;kt.side=dn,kt.needsUpdate=!0,qh(At,F,B,_n,kt,xi),kt.side=_t,kt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ue.updateMultisampleRenderTarget(ve),Ue.updateRenderTargetMipmap(ve)),y.setRenderTarget(xe),y.setClearColor(Q,I),y.toneMapping=Ae}function So(E,D,F){const B=D.isScene===!0?D.overrideMaterial:null;for(let O=0,de=E.length;O<de;O++){const xe=E[O],Ae=xe.object,Ne=xe.geometry,We=B===null?xe.material:B,Be=xe.group;Ae.layers.test(F.layers)&&qh(Ae,D,F,Ne,We,Be)}}function qh(E,D,F,B,O,de){E.onBeforeRender(y,D,F,B,O,de),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,D,F,B,E,de),O.transparent===!0&&O.side===hi&&O.forceSinglePass===!1?(O.side=dn,O.needsUpdate=!0,y.renderBufferDirect(F,D,B,O,E,de),O.side=Ui,O.needsUpdate=!0,y.renderBufferDirect(F,D,B,O,E,de),O.side=hi):y.renderBufferDirect(F,D,B,O,E,de),E.onAfterRender(y,D,F,B,O,de)}function To(E,D,F){D.isScene!==!0&&(D=Re);const B=Ge.get(E),O=p.state.lights,de=p.state.shadowsArray,xe=O.state.version,Ae=N.getParameters(E,O.state,de,D,F),Ne=N.getProgramCacheKey(Ae);let We=B.programs;B.environment=E.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(E.isMeshStandardMaterial?Ct:$e).get(E.envMap||B.environment),We===void 0&&(E.addEventListener("dispose",$),We=new Map,B.programs=We);let Be=We.get(Ne);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===xe)return Kh(E,Ae),Be}else Ae.uniforms=N.getUniforms(E),E.onBuild(F,Ae,y),E.onBeforeCompile(Ae,y),Be=N.acquireProgram(Ae,Ne),We.set(Ne,Be),B.uniforms=Ae.uniforms;const He=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ge.uniform),Kh(E,Ae),B.needsLights=r_(E),B.lightsStateVersion=xe,B.needsLights&&(He.ambientLightColor.value=O.state.ambient,He.lightProbe.value=O.state.probe,He.directionalLights.value=O.state.directional,He.directionalLightShadows.value=O.state.directionalShadow,He.spotLights.value=O.state.spot,He.spotLightShadows.value=O.state.spotShadow,He.rectAreaLights.value=O.state.rectArea,He.ltc_1.value=O.state.rectAreaLTC1,He.ltc_2.value=O.state.rectAreaLTC2,He.pointLights.value=O.state.point,He.pointLightShadows.value=O.state.pointShadow,He.hemisphereLights.value=O.state.hemi,He.directionalShadowMap.value=O.state.directionalShadowMap,He.directionalShadowMatrix.value=O.state.directionalShadowMatrix,He.spotShadowMap.value=O.state.spotShadowMap,He.spotLightMatrix.value=O.state.spotLightMatrix,He.spotLightMap.value=O.state.spotLightMap,He.pointShadowMap.value=O.state.pointShadowMap,He.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Be,B.uniformsList=null,Be}function Yh(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=la.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Kh(E,D){const F=Ge.get(E);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function n_(E,D,F,B,O){D.isScene!==!0&&(D=Re),Ue.resetTextureUnits();const de=D.fog,xe=B.isMeshStandardMaterial?D.environment:null,Ae=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kt,Ne=(B.isMeshStandardMaterial?Ct:$e).get(B.envMap||xe),We=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Be=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),He=!!F.morphAttributes.position,At=!!F.morphAttributes.normal,_n=!!F.morphAttributes.color;let kt=$i;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=y.toneMapping);const xi=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_t=xi!==void 0?xi.length:0,qe=Ge.get(B),oc=p.state.lights;if(Z===!0&&(ue===!0||E!==x)){const bn=E===x&&B.id===k;ge.setState(B,E,bn)}let yt=!1;B.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==oc.state.version||qe.outputColorSpace!==Ae||O.isBatchedMesh&&qe.batching===!1||!O.isBatchedMesh&&qe.batching===!0||O.isInstancedMesh&&qe.instancing===!1||!O.isInstancedMesh&&qe.instancing===!0||O.isSkinnedMesh&&qe.skinning===!1||!O.isSkinnedMesh&&qe.skinning===!0||O.isInstancedMesh&&qe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&qe.instancingColor===!1&&O.instanceColor!==null||qe.envMap!==Ne||B.fog===!0&&qe.fog!==de||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ge.numPlanes||qe.numIntersection!==ge.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Be||qe.morphTargets!==He||qe.morphNormals!==At||qe.morphColors!==_n||qe.toneMapping!==kt||ze.isWebGL2===!0&&qe.morphTargetsCount!==_t)&&(yt=!0):(yt=!0,qe.__version=B.version);let or=qe.currentProgram;yt===!0&&(or=To(B,D,O));let Zh=!1,Is=!1,ac=!1;const Zt=or.getUniforms(),ar=qe.uniforms;if(Le.useProgram(or.program)&&(Zh=!0,Is=!0,ac=!0),B.id!==k&&(k=B.id,Is=!0),Zh||x!==E){Zt.setValue(U,"projectionMatrix",E.projectionMatrix),Zt.setValue(U,"viewMatrix",E.matrixWorldInverse);const bn=Zt.map.cameraPosition;bn!==void 0&&bn.setValue(U,De.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&Zt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Zt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Is=!0,ac=!0)}if(O.isSkinnedMesh){Zt.setOptional(U,O,"bindMatrix"),Zt.setOptional(U,O,"bindMatrixInverse");const bn=O.skeleton;bn&&(ze.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Zt.setValue(U,"boneTexture",bn.boneTexture,Ue)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Zt.setOptional(U,O,"batchingTexture"),Zt.setValue(U,"batchingTexture",O._matricesTexture,Ue));const cc=F.morphAttributes;if((cc.position!==void 0||cc.normal!==void 0||cc.color!==void 0&&ze.isWebGL2===!0)&&R.update(O,F,or),(Is||qe.receiveShadow!==O.receiveShadow)&&(qe.receiveShadow=O.receiveShadow,Zt.setValue(U,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ar.envMap.value=Ne,ar.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Is&&(Zt.setValue(U,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&i_(ar,ac),de&&B.fog===!0&&ee.refreshFogUniforms(ar,de),ee.refreshMaterialUniforms(ar,B,V,q,ve),la.upload(U,Yh(qe),ar,Ue)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(la.upload(U,Yh(qe),ar,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Zt.setValue(U,"center",O.center),Zt.setValue(U,"modelViewMatrix",O.modelViewMatrix),Zt.setValue(U,"normalMatrix",O.normalMatrix),Zt.setValue(U,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const bn=B.uniformsGroups;for(let lc=0,s_=bn.length;lc<s_;lc++)if(ze.isWebGL2){const $h=bn[lc];Se.update($h,or),Se.bind($h,or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return or}function i_(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function r_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,F){Ge.get(E.texture).__webglTexture=D,Ge.get(E.depthTexture).__webglTexture=F;const B=Ge.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const F=Ge.get(E);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,F=0){A=E,b=D,L=F;let B=!0,O=null,de=!1,xe=!1;if(E){const Ne=Ge.get(E);Ne.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ne.__webglFramebuffer===void 0?Ue.setupRenderTarget(E):Ne.__hasExternalTextures&&Ue.rebindTextures(E,Ge.get(E.texture).__webglTexture,Ge.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(xe=!0);const Be=Ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?O=Be[D][F]:O=Be[D],de=!0):ze.isWebGL2&&E.samples>0&&Ue.useMultisampledRTT(E)===!1?O=Ge.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[F]:O=Be,w.copy(E.viewport),W.copy(E.scissor),X=E.scissorTest}else w.copy(Y).multiplyScalar(V).floor(),W.copy(oe).multiplyScalar(V).floor(),X=ae;if(Le.bindFramebuffer(U.FRAMEBUFFER,O)&&ze.drawBuffers&&B&&Le.drawBuffers(E,O),Le.viewport(w),Le.scissor(W),Le.setScissorTest(X),de){const Ne=Ge.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ne.__webglTexture,F)}else if(xe){const Ne=Ge.get(E.texture),We=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,F||0,We)}k=-1},this.readRenderTargetPixels=function(E,D,F,B,O,de,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){Le.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Ne=E.texture,We=Ne.format,Be=Ne.type;if(We!==Un&&be.convert(We)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===eo&&(Ee.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Be!==Ji&&be.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Pi&&(ze.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-B&&F>=0&&F<=E.height-O&&U.readPixels(D,F,B,O,be.convert(We),be.convert(Be),de)}finally{const Ne=A!==null?Ge.get(A).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(E,D,F=0){const B=Math.pow(2,-F),O=Math.floor(D.image.width*B),de=Math.floor(D.image.height*B);Ue.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,E.x,E.y,O,de),Le.unbindTexture()},this.copyTextureToTexture=function(E,D,F,B=0){const O=D.image.width,de=D.image.height,xe=be.convert(F.format),Ae=be.convert(F.type);Ue.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,E.x,E.y,O,de,xe,Ae,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,E.x,E.y,xe,Ae,D.image),B===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,D,F,B,O=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=E.max.x-E.min.x+1,xe=E.max.y-E.min.y+1,Ae=E.max.z-E.min.z+1,Ne=be.convert(B.format),We=be.convert(B.type);let Be;if(B.isData3DTexture)Ue.setTexture3D(B,0),Be=U.TEXTURE_3D;else if(B.isDataArrayTexture)Ue.setTexture2DArray(B,0),Be=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const He=U.getParameter(U.UNPACK_ROW_LENGTH),At=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_n=U.getParameter(U.UNPACK_SKIP_PIXELS),kt=U.getParameter(U.UNPACK_SKIP_ROWS),xi=U.getParameter(U.UNPACK_SKIP_IMAGES),_t=F.isCompressedTexture?F.mipmaps[0]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Be,O,D.x,D.y,D.z,de,xe,Ae,Ne,We,_t.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Be,O,D.x,D.y,D.z,de,xe,Ae,Ne,_t.data)):U.texSubImage3D(Be,O,D.x,D.y,D.z,de,xe,Ae,Ne,We,_t),U.pixelStorei(U.UNPACK_ROW_LENGTH,He),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_n),U.pixelStorei(U.UNPACK_SKIP_ROWS,kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,xi),O===0&&B.generateMipmaps&&U.generateMipmap(Be),Le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ue.setTextureCube(E,0):E.isData3DTexture?Ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ue.setTexture2DArray(E,0):Ue.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){b=0,L=0,A=null,Le.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xl?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ba?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Tr:ap}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Tr?St:Kt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ty extends Rp{}Ty.prototype.isWebGL1Renderer=!0;class by extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ay{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new C;class $l{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $l(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yd=new C,Ed=new rt,Md=new rt,wy=new C,Sd=new Ke,qo=new C,kc=new gi,Td=new Ke,Gc=new uo;class Ry extends On{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ru,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kc.copy(this.boundingSphere),kc.applyMatrix4(r),e.ray.intersectsSphere(kc)!==!1&&(Td.copy(r).invert(),Gc.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===k_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Ed.fromBufferAttribute(r.attributes.skinIndex,e),Md.fromBufferAttribute(r.attributes.skinWeight,e),yd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Md.getComponent(s);if(o!==0){const a=Ed.getComponent(s);Sd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(wy.copy(yd).applyMatrix4(Sd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Lp extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ly extends Yt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Vt,h=Vt,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new Ke,Cy=new Ke;class Jl{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Cy;bd.multiplyMatrices(a,t[s]),bd.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ly(t,e,e,Un,Pi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Lp),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class pl extends an{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new Ke,Ad=new Ke,Yo=[],wd=new Oi,Py=new Ke,Fs=new On,Bs=new gi;class Iy extends On{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Py)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),wd.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(wd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),Bs.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),e.ray.intersectsSphere(Bs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),Ad.multiplyMatrices(i,Jr),Fs.matrixWorld=Ad,Fs.raycast(e,Yo);for(let o=0,a=Yo.length;o<a;o++){const c=Yo[o];c.instanceId=s,c.object=this,t.push(c)}Yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ql extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rd=new C,Ld=new C,Cd=new Ke,Hc=new uo,Ko=new gi;class eh extends vt{constructor(e=new Qn,t=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Rd.fromBufferAttribute(t,r-1),Ld.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rd.distanceTo(Ld);e.setAttribute("lineDistance",new $n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Cd.copy(r).invert(),Hc.copy(e.ray).applyMatrix4(Cd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,d=new C,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=f,M=S-1;y<M;y+=m){const b=g.getX(y),L=g.getX(y+1);if(l.fromBufferAttribute(p,b),h.fromBufferAttribute(p,L),Hc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let y=f,M=S-1;y<M;y+=m){if(l.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),Hc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Pd=new C,Id=new C;class Cp extends eh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Pd.fromBufferAttribute(t,r),Id.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pd.distanceTo(Id);e.setAttribute("lineDistance",new $n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dy extends eh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pp extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dd=new Ke,ml=new uo,Zo=new gi,$o=new C;class Uy extends vt{constructor(e=new Qn,t=new Pp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(r),Zo.radius+=s,e.ray.intersectsSphere(Zo)===!1)return;Dd.copy(r).invert(),ml.copy(e.ray).applyMatrix4(Dd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=l.getX(g);$o.fromBufferAttribute(u,p),Ud($o,p,c,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)$o.fromBufferAttribute(u,g),Ud($o,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ud(n,e,t,i,r,s,o){const a=ml.distanceSqToPoint(n);if(a<t){const c=new C;ml.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class th extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fi extends th{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ny extends Zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Jo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Oy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fy(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Nd(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function Ip(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class po{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class By extends po{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cu,endingEnd:Cu}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pu:s=e,a=2*t-i;break;case Iu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pu:o=e,c=2*i-t;break;case Iu:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),_=g*g,p=_*g,f=-d*p+2*d*_-d*g,S=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-m)*p+(1.5+m)*_+.5*g,M=m*p-m*_;for(let b=0;b!==a;++b)s[b]=f*o[h+b]+S*o[l+b]+y*o[c+b]+M*o[u+b];return s}}class ky extends po{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class Gy extends po{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ky(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new By(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Oy(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===mc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{const u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=us;class Ts extends _i{}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=to;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Dp extends _i{}Dp.prototype.ValueTypeName="color";class ps extends _i{}ps.prototype.ValueTypeName="number";class Hy extends po{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Jn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Cr extends _i{InterpolantFactoryMethodLinear(e){return new Hy(this.times,this.values,this.getValueSize(),e)}}Cr.prototype.ValueTypeName="quaternion";Cr.prototype.DefaultInterpolation=us;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends _i{}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=to;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends _i{}ms.prototype.ValueTypeName="vector";class zy{constructor(e,t=-1,i,r=Y_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Wy(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(_i.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Fy(c);c=Nd(c,1,h),l=Nd(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ps(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,m,g,_){if(m.length!==0){const p=[],f=[];Ip(m,p,f,g),p.length!==0&&_.push(new u(d,p,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)m[d[g].morphTargets[_]]=-1;for(const _ in m){const p=[],f=[];for(let S=0;S!==d[g].morphTargets.length;++S){const y=d[g];p.push(y.time),f.push(y.morphTarget===_?1:0)}r.push(new ps(".morphTargetInfluence["+_+"]",p,f))}c=m.length*o}else{const m=".bones["+t[u].name+"]";i(ms,m+".position",d,"pos",r),i(Cr,m+".quaternion",d,"rot",r),i(ms,m+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vy(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return Dp;case"quaternion":return Cr;case"bool":case"boolean":return Ts;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Wy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vy(n.type);if(n.times===void 0){const t=[],i=[];Ip(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const gs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Up{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Xy=new Up;class As{constructor(e){this.manager=e!==void 0?e:Xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class jy extends Error{constructor(e,t){super(e),this.response=t}}class Np extends As{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=gs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:i,onError:r});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=bi[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let _=0;const p=new ReadableStream({start(f){S();function S(){u.read().then(({done:y,value:M})=>{if(y)f.close();else{_+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let L=0,A=h.length;L<A;L++){const k=h[L];k.onProgress&&k.onProgress(b)}f.enqueue(M),S()}})}}});return new Response(p)}else throw new jy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{gs.add(e,l);const h=bi[e];delete bi[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete bi[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qy extends As{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=no("img");function c(){h(),gs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Yy extends As{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,o=new qy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ha extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zc=new Ke,Od=new C,Fd=new C;class nh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Od.setFromMatrixPosition(e.matrixWorld),t.position.copy(Od),Fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fd),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ky extends nh{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ds*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zy extends Ha{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ky}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bd=new Ke,ks=new C,Vc=new C;class $y extends nh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(ks),Vc.copy(i.position),Vc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vc),i.updateMatrixWorld(),r.makeTranslation(-ks.x,-ks.y,-ks.z),Bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd)}}class Jy extends Ha{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qy extends nh{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Op extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Qy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eE extends Ha{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ks{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tE extends As{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){gs.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const ih="\\[\\]\\.:\\/",nE=new RegExp("["+ih+"]","g"),rh="[^"+ih+"]",iE="[^"+ih.replace("\\.","")+"]",rE=/((?:WC+[\/:])*)/.source.replace("WC",rh),sE=/(WCOD+)?/.source.replace("WCOD",iE),oE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),aE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),cE=new RegExp("^"+rE+sE+oE+aE+"$"),lE=["material","materials","bones","map"];class hE{constructor(e,t,i){const r=i||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class nt{constructor(e,t,i){this.path=t,this.parsedPath=i||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,i):new nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nE,"")}static parseTrackName(e){const t=cE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);lE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=hE;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uE extends Cp{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Qn;r.setAttribute("position",new $n(t,3)),r.setAttribute("color",new $n(i,3));const s=new Ql({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ie,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function Gd(n,e){if(e===K_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ll||e===op){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===ll)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class dE extends As{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _E(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new CE(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ks.extractUrlBase(e);o=Ks.resolveURL(l,this.path)}else o=Ks.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Np(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Fp){try{o[Ze.KHR_BINARY_GLTF]=new PE(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new WE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new mE;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new IE(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new DE;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new UE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function fE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pE{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Kt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Op(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Jy(h),l.distance=u;break;case"spot":l=new Zy(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,qi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class mE{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return yr}extendParams(e,t,i){const r=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,St))}return Promise.all(r)}}class gE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _E{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(s)}}class vE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class xE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class yE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class EE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Kt),Promise.all(s)}}class ME{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class SE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(s)}}class TE{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class bE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class AE{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class wE{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class RE{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LE{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,d,r.mode,r.filter),m})})}else return null}}class CE{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==Pn.TRIANGLES&&l.mode!==Pn.TRIANGLE_STRIP&&l.mode!==Pn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,m=[];for(const g of u){const _=new Ke,p=new C,f=new Jn,S=new C(1,1,1),y=new Iy(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,M),c.SCALE&&S.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,_.compose(p,f,S));for(const M in c)if(M==="_COLOR_0"){const b=c[M];y.instanceColor=new pl(b.array,b.itemSize,b.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);vt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),m.push(y)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Fp="glTF",Gs=12,Hd={JSON:1313821514,BIN:5130562};class PE{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Gs,s=new DataView(e,Gs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Hd.JSON){const l=new Uint8Array(e,Gs+o,a);this.content=i.decode(l)}else if(c===Hd.BIN){const l=Gs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=gl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=gl[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],m=os[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const m in d.attributes){const g=d.attributes[m],_=c[m];_!==void 0&&(g.normalized=_)}u(d)},a,l)})})}}class DE{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UE{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Bp extends po{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=r-t,u=(i-t)/h,d=u*u,m=d*u,g=e*l,_=g-l,p=-2*m+3*d,f=m-d,S=1-p,y=f-d+u;for(let M=0;M!==a;M++){const b=o[_+M+a],L=o[_+M+c]*h,A=o[g+M+a],k=o[g+M]*h;s[M]=S*b+y*L+p*A+f*k}return s}}const NE=new Jn;class OE extends Bp{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return NE.fromArray(s).normalize().toArray(s),s}}const Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zd={9728:Vt,9729:un,9984:cl,9985:Jf,9986:ca,9987:wr},Vd={33071:Dn,33648:Ma,10497:ls},Wc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FE={CUBICSPLINE:void 0,LINEAR:us,STEP:to},Xc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new th({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),n.DefaultMaterial}function dr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function qi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kE(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=u),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function GE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function HE(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jc(t.attributes):e=n.indices+":"+jc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+jc(n.targets[i]);return e}function jc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function _l(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const VE=new Ke;class WE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new Yy(this.options.manager):this.textureLoader=new tE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Np(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return dr(s,a,r),qi(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ks.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Wc[r.type],a=os[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new an(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Wc[r.type],l=os[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(m&&m!==u){const f=Math.floor(d/m),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let y=t.cache.get(S);y||(_=new l(a,f*m,r.count*m/h),y=new Ay(_,m/h),t.cache.add(S,y)),p=new $l(y,c,d%m/h,g)}else a===null?_=new l(r.count*c):_=new l(a,d,r.count*c),p=new an(_,c,g);if(r.sparse!==void 0){const f=Wc.SCALAR,S=os[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,b=new S(o[1],y,r.sparse.count*f),L=new l(o[2],M,r.sparse.count*c);a!==null&&(p=new an(p.array.slice(),p.itemSize,p.normalized));for(let A=0,k=b.length;A<k;A++){const x=b[A];if(p.setX(x,L[A*c]),c>=2&&p.setY(x,L[A*c+1]),c>=3&&p.setZ(x,L[A*c+2]),c>=4&&p.setW(x,L[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=zd[d.magFilter]||un,h.minFilter=zd[d.minFilter]||wr,h.wrapS=Vd[d.wrapS]||ls,h.wrapT=Vd[d.wrapT]||ls,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Yt(_);p.needsUpdate=!0,d(p)}),t.load(Ks.resolveURL(u,s.path),g,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||zE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Pp,Zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Ql,Zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return th}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=r[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=hi);const h=s.alphaMode||Xc.OPAQUE;if(h===Xc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Xc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yr&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ce(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==yr&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yr){const u=s.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],Kt)}return s.emissiveTexture!==void 0&&o!==yr&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,St)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),qi(u,s),t.associations.set(u,{materials:e}),s.extensions&&dr(r,u,s),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=HE(l),u=r[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Wd(new Qn,l,t),r[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?BE(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){const _=h[m],p=o[m];let f;const S=l[m];if(p.mode===Pn.TRIANGLES||p.mode===Pn.TRIANGLE_STRIP||p.mode===Pn.TRIANGLE_FAN||p.mode===void 0)f=s.isSkinnedMesh===!0?new Ry(_,S):new On(_,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===Pn.TRIANGLE_STRIP?f.geometry=Gd(f.geometry,op):p.mode===Pn.TRIANGLE_FAN&&(f.geometry=Gd(f.geometry,ll));else if(p.mode===Pn.LINES)f=new Cp(_,S);else if(p.mode===Pn.LINE_STRIP)f=new eh(_,S);else if(p.mode===Pn.LINE_LOOP)f=new Dy(_,S);else if(p.mode===Pn.POINTS)f=new Uy(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&GE(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),qi(f,s),p.extensions&&dr(r,f,p),t.assignFinalMaterial(f),u.push(f)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return s.extensions&&dr(r,u[0],s),u[0];const d=new Er;s.extensions&&dr(r,d,s),t.associations.set(d,{meshes:e});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(lp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Kl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),qi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ke;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Jl(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){const m=r.channels[u],g=r.samplers[m.sampler],_=m.target,p=_.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,S=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],m=u[1],g=u[2],_=u[3],p=u[4],f=[];for(let S=0,y=d.length;S<y;S++){const M=d[S],b=m[S],L=g[S],A=_[S],k=p[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const x=i._createAnimationTracks(M,b,L,A,k);if(x)for(let w=0;w<x.length;w++)f.push(x[w])}return new zy(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,VE)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Lp:l.length>1?h=new Er:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),qi(h,s),s.extensions&&dr(i,h,s),s.matrix!==void 0){const u=new Ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Er;i.name&&(s.name=r.createUniqueName(i.name)),qi(s,i),i.extensions&&dr(t,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,m]of r.associations)(d instanceof Zn||d instanceof Yt)&&u.set(d,m);return h.traverse(d=>{const m=r.associations.get(d);m!=null&&u.set(d,m)}),u};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];Xi[s.path]===Xi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Xi[s.path]){case Xi.weights:l=ps;break;case Xi.rotation:l=Cr;break;case Xi.position:case Xi.scale:l=ms;break;default:switch(i.itemSize){case 1:l=ps;break;case 2:case 3:default:l=ms;break}break}const h=r.interpolation!==void 0?FE[r.interpolation]:us,u=this._getArrayFromAccessor(i);for(let d=0,m=c.length;d<m;d++){const g=new l(c[d]+"."+Xi[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=_l(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Cr?OE:Bp;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function XE(n,e,t){const i=e.attributes,r=new Oi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const h=_l(os[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,c=new C;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const _=_l(os[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new gi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Wd(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=gl[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return tt.workingColorSpace!==Kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),qi(n,e),XE(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?kE(n,e.targets,t):n})}const Xd={type:"change"},qc={type:"start"},jd={type:"end"},Qo=new uo,qd=new ji,jE=Math.cos(70*lp.DEG2RAD);class qE extends Dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ur.ROTATE,MIDDLE:Ur.DOLLY,RIGHT:Ur.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",v),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xd),i.update(),s=r.NONE},this.update=function(){const R=new C,ie=new Jn().setFromUnitVectors(e.up,new C(0,1,0)),j=ie.clone().invert(),be=new C,_e=new Jn,Se=new C,pe=2*Math.PI;return function(Xe=null){const P=i.object.position;R.copy(P).sub(i.target),R.applyQuaternion(ie),a.setFromVector3(R),i.autoRotate&&s===r.NONE&&W(x(Xe)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ce=i.minAzimuthAngle,$=i.maxAzimuthAngle;isFinite(ce)&&isFinite($)&&(ce<-Math.PI?ce+=pe:ce>Math.PI&&(ce-=pe),$<-Math.PI?$+=pe:$>Math.PI&&($-=pe),ce<=$?a.theta=Math.max(ce,Math.min($,a.theta)):a.theta=a.theta>(ce+$)/2?Math.max(ce,a.theta):Math.min($,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&L||i.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*l),R.setFromSpherical(a),R.applyQuaternion(j),P.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let z=!1;if(i.zoomToCursor&&L){let ne=null;if(i.object.isPerspectiveCamera){const Me=R.length();ne=K(Me*l);const je=Me-ne;i.object.position.addScaledVector(M,je),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Me=new C(b.x,b.y,0);Me.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),z=!0;const je=new C(b.x,b.y,0);je.unproject(i.object),i.object.position.sub(je).add(Me),i.object.updateMatrixWorld(),ne=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ne).add(i.object.position):(Qo.origin.copy(i.object.position),Qo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Qo.direction))<jE?e.lookAt(i.target):(qd.setFromNormalAndCoplanarPoint(i.object.up,i.target),Qo.intersectPlane(qd,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),z=!0);return l=1,L=!1,z||be.distanceToSquared(i.object.position)>o||8*(1-_e.dot(i.object.quaternion))>o||Se.distanceToSquared(i.target)>0?(i.dispatchEvent(Xd),be.copy(i.object.position),_e.copy(i.object.quaternion),Se.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",Ge),i.domElement.removeEventListener("pointercancel",$e),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",Ue),i.domElement.removeEventListener("pointerup",$e),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new kd,c=new kd;let l=1;const h=new C,u=new Ce,d=new Ce,m=new Ce,g=new Ce,_=new Ce,p=new Ce,f=new Ce,S=new Ce,y=new Ce,M=new C,b=new Ce;let L=!1;const A=[],k={};function x(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function W(R){c.theta-=R}function X(R){c.phi-=R}const Q=function(){const R=new C;return function(j,be){R.setFromMatrixColumn(be,0),R.multiplyScalar(-j),h.add(R)}}(),I=function(){const R=new C;return function(j,be){i.screenSpacePanning===!0?R.setFromMatrixColumn(be,1):(R.setFromMatrixColumn(be,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(j),h.add(R)}}(),G=function(){const R=new C;return function(j,be){const _e=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;R.copy(Se).sub(i.target);let pe=R.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*j*pe/_e.clientHeight,i.object.matrix),I(2*be*pe/_e.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(j*(i.object.right-i.object.left)/i.object.zoom/_e.clientWidth,i.object.matrix),I(be*(i.object.top-i.object.bottom)/i.object.zoom/_e.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(R){if(!i.zoomToCursor)return;L=!0;const ie=i.domElement.getBoundingClientRect(),j=R.clientX-ie.left,be=R.clientY-ie.top,_e=ie.width,Se=ie.height;b.x=j/_e*2-1,b.y=-(be/Se)*2+1,M.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function Y(R){u.set(R.clientX,R.clientY)}function oe(R){re(R),f.set(R.clientX,R.clientY)}function ae(R){g.set(R.clientX,R.clientY)}function H(R){d.set(R.clientX,R.clientY),m.subVectors(d,u).multiplyScalar(i.rotateSpeed);const ie=i.domElement;W(2*Math.PI*m.x/ie.clientHeight),X(2*Math.PI*m.y/ie.clientHeight),u.copy(d),i.update()}function Z(R){S.set(R.clientX,R.clientY),y.subVectors(S,f),y.y>0?q(w()):y.y<0&&V(w()),f.copy(S),i.update()}function ue(R){_.set(R.clientX,R.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(_),i.update()}function ve(R){re(R),R.deltaY<0?V(w()):R.deltaY>0&&q(w()),i.update()}function ye(R){let ie=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ie=!0;break}ie&&(R.preventDefault(),i.update())}function Fe(){if(A.length===1)u.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),ie=.5*(A[0].pageY+A[1].pageY);u.set(R,ie)}}function De(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const R=.5*(A[0].pageX+A[1].pageX),ie=.5*(A[0].pageY+A[1].pageY);g.set(R,ie)}}function Re(){const R=A[0].pageX-A[1].pageX,ie=A[0].pageY-A[1].pageY,j=Math.sqrt(R*R+ie*ie);f.set(0,j)}function ke(){i.enableZoom&&Re(),i.enablePan&&De()}function U(){i.enableZoom&&Re(),i.enableRotate&&Fe()}function Ft(R){if(A.length==1)d.set(R.pageX,R.pageY);else{const j=he(R),be=.5*(R.pageX+j.x),_e=.5*(R.pageY+j.y);d.set(be,_e)}m.subVectors(d,u).multiplyScalar(i.rotateSpeed);const ie=i.domElement;W(2*Math.PI*m.x/ie.clientHeight),X(2*Math.PI*m.y/ie.clientHeight),u.copy(d)}function Ee(R){if(A.length===1)_.set(R.pageX,R.pageY);else{const ie=he(R),j=.5*(R.pageX+ie.x),be=.5*(R.pageY+ie.y);_.set(j,be)}p.subVectors(_,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(_)}function ze(R){const ie=he(R),j=R.pageX-ie.x,be=R.pageY-ie.y,_e=Math.sqrt(j*j+be*be);S.set(0,_e),y.set(0,Math.pow(S.y/f.y,i.zoomSpeed)),q(y.y),f.copy(S)}function Le(R){i.enableZoom&&ze(R),i.enablePan&&Ee(R)}function at(R){i.enableZoom&&ze(R),i.enableRotate&&Ft(R)}function Ge(R){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",Ue),i.domElement.addEventListener("pointerup",$e)),te(R),R.pointerType==="touch"?N(R):Ct(R))}function Ue(R){i.enabled!==!1&&(R.pointerType==="touch"?ee(R):Pt(R))}function $e(R){ge(R),A.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",Ue),i.domElement.removeEventListener("pointerup",$e)),i.dispatchEvent(jd),s=r.NONE}function Ct(R){let ie;switch(R.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Ur.DOLLY:if(i.enableZoom===!1)return;oe(R),s=r.DOLLY;break;case Ur.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;ae(R),s=r.PAN}else{if(i.enableRotate===!1)return;Y(R),s=r.ROTATE}break;case Ur.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;Y(R),s=r.ROTATE}else{if(i.enablePan===!1)return;ae(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qc)}function Pt(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;H(R);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(R);break;case r.PAN:if(i.enablePan===!1)return;ue(R);break}}function T(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(qc),ve(R),i.dispatchEvent(jd))}function v(R){i.enabled===!1||i.enablePan===!1||ye(R)}function N(R){switch(se(R),A.length){case 1:switch(i.touches.ONE){case Nr.ROTATE:if(i.enableRotate===!1)return;Fe(),s=r.TOUCH_ROTATE;break;case Nr.PAN:if(i.enablePan===!1)return;De(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Nr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ke(),s=r.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qc)}function ee(R){switch(se(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ft(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;at(R),i.update();break;default:s=r.NONE}}function J(R){i.enabled!==!1&&R.preventDefault()}function te(R){A.push(R)}function ge(R){delete k[R.pointerId];for(let ie=0;ie<A.length;ie++)if(A[ie].pointerId==R.pointerId){A.splice(ie,1);return}}function se(R){let ie=k[R.pointerId];ie===void 0&&(ie=new Ce,k[R.pointerId]=ie),ie.set(R.pageX,R.pageY)}function he(R){const ie=R.pointerId===A[0].pointerId?A[1]:A[0];return k[ie.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",Ge),i.domElement.addEventListener("pointercancel",$e),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}var za=typeof self<"u"?self:{};function vl(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=za,r=0;r<t.length;r++)if((i=i[t[r]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function fr(){throw Error("Invalid UTF8")}function Yd(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}let ea,Yc;const YE=typeof TextDecoder<"u";let KE;const ZE=typeof TextEncoder<"u";function kp(n){if(ZE)n=(KE||(KE=new TextEncoder)).encode(n);else{let t=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var e=n.charCodeAt(r);if(128>e)i[t++]=e;else{if(2048>e)i[t++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<n.length){const s=n.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}r--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}var io,Gp=vl(610401301,!1),sh=vl(572417392,vl(1,!0));const Kd=za.navigator;function xl(n){return!!Gp&&!!io&&io.brands.some(({brand:e})=>e&&e.indexOf(n)!=-1)}function In(n){var e;return(e=za.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(n)!=-1}function Yi(){return!!Gp&&!!io&&0<io.brands.length}function Kc(){return Yi()?xl("Chromium"):(In("Chrome")||In("CriOS"))&&!(!Yi()&&In("Edge"))||In("Silk")}io=Kd&&Kd.userAgentData||null;var $E=!Yi()&&(In("Trident")||In("MSIE"));!In("Android")||Kc(),Kc(),In("Safari")&&(Kc()||!Yi()&&In("Coast")||!Yi()&&In("Opera")||!Yi()&&In("Edge")||(Yi()?xl("Microsoft Edge"):In("Edg/"))||Yi()&&xl("Opera"));var Hp={},zs=null;function JE(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),r=0;return function(s,o){function a(m){for(;c<s.length;){var g=s.charAt(c++),_=zs[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return m}zp();for(var c=0;;){var l=a(-1),h=a(0),u=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),d!=64&&o(u<<6&192|d))}}(n,function(s){i[r++]=s}),r!==t?i.subarray(0,r):i}function zp(){if(!zs){zs={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],t=0;5>t;t++){var i=n.concat(e[t].split(""));Hp[t]=i;for(var r=0;r<i.length;r++){var s=i[r];zs[s]===void 0&&(zs[s]=r)}}}}var Vp=typeof Uint8Array<"u",Wp=!$E&&typeof btoa=="function";function Zd(n){if(!Wp){var e;e===void 0&&(e=0),zp(),e=Hp[e];var t=Array(Math.floor(n.length/3)),i=e[64]||"";let c=0,l=0;for(;c<n.length-2;c+=3){var r=n[c],s=n[c+1],o=n[c+2],a=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|o>>6],o=e[63&o],t[l++]=a+r+s+o}switch(a=0,o=i,n.length-c){case 2:o=e[(15&(a=n[c+1]))<<2]||i;case 1:n=n[c],t[l]=e[n>>2]+e[(3&n)<<4|a>>4]+o+i}return t.join("")}for(e="",t=0,i=n.length-10240;t<i;)e+=String.fromCharCode.apply(null,n.subarray(t,t+=10240));return e+=String.fromCharCode.apply(null,t?n.subarray(t):n),btoa(e)}const $d=/[-_.]/g,QE={"-":"+",_:"/",".":"="};function eM(n){return QE[n]||""}function Xp(n){if(!Wp)return JE(n);$d.test(n)&&(n=n.replace($d,eM)),n=atob(n);const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Va(n){return Vp&&n!=null&&n instanceof Uint8Array}let tM;function Wa(){return tM||(tM=new Uint8Array(0))}var _s={};let nM;function jp(n){if(n!==_s)throw Error("illegal external caller")}function vs(){return nM||(nM=new Qi(null,_s))}function oh(n){jp(_s);var e=n.T;return(e=e==null||Va(e)?e:typeof e=="string"?Xp(e):null)==null?e:n.T=e}var Qi=class{constructor(n,e){if(jp(e),this.T=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}qa(){const n=oh(this);return n?new Uint8Array(n):Wa()}};function qp(n,e){return Error(`Invalid wire type: ${n} (at position ${e})`)}function ah(){return Error("Failed to read varint, encoding is invalid.")}function Yp(n,e){return Error(`Tried to read past the end of the data ${e} > ${n}`)}function Kp(n){return n.length==0?vs():new Qi(n,_s)}function ch(n){if(typeof n=="string")return{buffer:Xp(n),H:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),H:!1};if(n.constructor===Uint8Array)return{buffer:n,H:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),H:!1};if(n.constructor===Qi)return{buffer:oh(n)||Wa(),H:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),H:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function lh(){return typeof BigInt=="function"}var yl=!sh;let Jd=!sh;const iM=typeof Uint8Array.prototype.slice=="function";let Zp,Mt=0,Xt=0;function Xa(n){const e=0>n;let t=(n=Math.abs(n))>>>0;if(n=Math.floor((n-t)/4294967296),e){const[i,r]=uh(t,n);n=r,t=i}Mt=t>>>0,Xt=n>>>0}function hh(n){const e=Zp||(Zp=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),Xt=0,Mt=e.getUint32(0,!0)}function $p(n,e){return 4294967296*e+(n>>>0)}function Jp(n,e){const t=2147483648&e;return t&&(e=~e>>>0,(n=1+~n>>>0)==0&&(e=e+1>>>0)),n=$p(n,e),t?-n:n}function El(n,e){if(n>>>=0,2097151>=(e>>>=0))var t=""+(4294967296*e+n);else lh()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,1e7<=n&&(t+=Math.floor(n/1e7),n%=1e7),1e7<=t&&(e+=Math.floor(t/1e7),t%=1e7),t=e+Qd(t)+Qd(n));return t}function Qd(n){return n=String(n),"0000000".slice(n.length)+n}function Qp(){var n=Mt,e=Xt;if(2147483648&e)if(lh())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{const[t,i]=uh(n,e);n="-"+El(t,i)}else n=El(n,e);return n}function ja(n){if(16>n.length)Xa(Number(n));else if(lh())n=BigInt(n),Mt=Number(n&BigInt(4294967295))>>>0,Xt=Number(n>>BigInt(32)&BigInt(4294967295));else{const e=+(n[0]==="-");Xt=Mt=0;const t=n.length;for(let i=e,r=(t-e)%6+e;r<=t;i=r,r+=6){const s=Number(n.slice(i,r));Xt*=1e6,Mt=1e6*Mt+s,4294967296<=Mt&&(Xt+=Math.trunc(Mt/4294967296),Xt>>>=0,Mt>>>=0)}if(e){const[i,r]=uh(Mt,Xt);Mt=i,Xt=r}}}function uh(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function Ml(n,e,{W:t=!1}={}){n.W=t,e&&(e=ch(e),n.h=e.buffer,n.u=e.H,n.v=0,n.l=n.h.length,n.g=n.v)}function br(n,e){if(n.g=e,e>n.l)throw Yp(n.l,e)}function dh(n,e){let t,i=0,r=0,s=0;const o=n.h;let a=n.g;do t=o[a++],i|=(127&t)<<s,s+=7;while(32>s&&128&t);for(32<s&&(r|=(127&t)>>4),s=3;32>s&&128&t;s+=7)t=o[a++],r|=(127&t)<<s;if(br(n,a),128>t)return e(i>>>0,r>>>0);throw ah()}function fh(n){let e=0,t=n.g;const i=t+10,r=n.h;for(;t<i;){const s=r[t++];if(e|=s,(128&s)==0)return br(n,t),!!(127&e)}throw ah()}function Sl(n){var e=n.h;const t=n.g,i=e[t],r=e[t+1],s=e[t+2];return e=e[t+3],br(n,n.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function em(n,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const t=n.g,i=t+e;if(i>n.l)throw Yp(e,n.l-t);return n.g=i,t}function tm(n,e){if(e==0)return vs();var t=em(n,e);return n.W&&n.u?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?Wa():iM?n.slice(t,e):new Uint8Array(n.subarray(t,e))),Kp(t)}var mo=class{constructor(n,e){this.h=null,this.u=!1,this.g=this.l=this.v=0,Ml(this,n,e)}clear(){this.h=null,this.u=!1,this.g=this.l=this.v=0,this.W=!1}m(){const n=this.h;let e=this.g,t=n[e++],i=127&t;if(128&t&&(t=n[e++],i|=(127&t)<<7,128&t&&(t=n[e++],i|=(127&t)<<14,128&t&&(t=n[e++],i|=(127&t)<<21,128&t&&(t=n[e++],i|=t<<28,128&t&&128&n[e++]&&128&n[e++]&&128&n[e++]&&128&n[e++]&&128&n[e++])))))throw ah();return br(this,e),i}j(){return this.m()>>>0}B(){var n=Sl(this);const e=2*(n>>31)+1,t=n>>>23&255;return n&=8388607,t==255?n?NaN:1/0*e:t==0?e*Math.pow(2,-149)*n:e*Math.pow(2,t-150)*(n+Math.pow(2,23))}C(){return this.m()}},ef=[];function nm(n){var e=n.g;if(e.g==e.l)return!1;n.l=n.g.g;var t=n.g.j();if(e=t>>>3,!(0<=(t&=7)&&5>=t))throw qp(t,n.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${n.l})`);return n.m=e,n.h=t,!0}function ha(n){switch(n.h){case 0:n.h!=0?ha(n):fh(n.g);break;case 1:br(n=n.g,n.g+8);break;case 2:if(n.h!=2)ha(n);else{var e=n.g.j();br(n=n.g,n.g+e)}break;case 5:br(n=n.g,n.g+4);break;case 3:for(e=n.m;;){if(!nm(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=e)throw Error("Unmatched end-group tag");break}ha(n)}break;default:throw qp(n.h,n.l)}}function go(n,e,t){const i=n.g.l,r=n.g.j(),s=n.g.g+r;let o=s-i;if(0>=o&&(n.g.l=s,t(e,n,void 0,void 0,void 0),o=s-n.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=s,n.g.l=i,e}function ph(n){var e=n.g.j(),t=em(n=n.g,e);if(n=n.h,YE){var i,r=n;(i=Yc)||(i=Yc=new TextDecoder("utf-8",{fatal:!0})),n=t+e,r=t===0&&n===r.length?r:r.subarray(t,n);try{var s=i.decode(r)}catch(a){if(ea===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ea=!0}catch{ea=!1}}throw!ea&&(Yc=void 0),a}}else{e=(s=t)+e,t=[];let a,c=null;for(;s<e;){var o=n[s++];128>o?t.push(o):224>o?s>=e?fr():(a=n[s++],194>o||(192&a)!=128?(s--,fr()):t.push((31&o)<<6|63&a)):240>o?s>=e-1?fr():(a=n[s++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(r=n[s++]))!=128?(s--,fr()):t.push((15&o)<<12|(63&a)<<6|63&r)):244>=o?s>=e-2?fr():(a=n[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(r=n[s++]))!=128||(192&(i=n[s++]))!=128?(s--,fr()):(o=(7&o)<<18|(63&a)<<12|(63&r)<<6|63&i,o-=65536,t.push(55296+(o>>10&1023),56320+(1023&o)))):fr(),8192<=t.length&&(c=Yd(c,t),t.length=0)}s=Yd(c,t)}return s}function im(n){const e=n.g.j();return tm(n.g,e)}function qa(n,e,t){var i=n.g.j();for(i=n.g.g+i;n.g.g<i;)t.push(e.call(n.g))}var ta=[];function tf(n){return n?/^\d+$/.test(n)?(ja(n),new nf(Mt,Xt)):null:rM||(rM=new nf(0,0))}var nf=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let rM;function rf(n){return n?/^-?\d+$/.test(n)?(ja(n),new sf(Mt,Xt)):null:sM||(sM=new sf(0,0))}var sf=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let sM;function Ra(n,e,t){for(;0<t||127<e;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function _o(n,e){for(;127<e;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function Ya(n,e){if(0<=e)_o(n,e);else{for(let t=0;9>t;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function ro(n,e){n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}function xs(n,e){e.length!==0&&(n.l.push(e),n.h+=e.length)}function zn(n,e,t){_o(n.g,8*e+t)}function mh(n,e){return zn(n,e,2),e=n.g.end(),xs(n,e),e.push(n.h),e}function gh(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;127<t;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function Ka(n,e,t){zn(n,e,2),_o(n.g,t.length),xs(n,n.g.end()),xs(n,t)}function Tl(n,e,t,i){t!=null&&(e=mh(n,e),i(t,n),gh(n,e))}class ws{constructor(e,t,i,r){this.g=e,this.h=t,this.l=i,this.la=r}}function fn(n){return Array.prototype.slice.call(n)}const di=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;var Za=di?(n,e)=>{n[di]|=e}:(n,e)=>{n.D!==void 0?n.D|=e:Object.defineProperties(n,{D:{value:e,configurable:!0,writable:!0,enumerable:!1}})};function of(n){const e=xt(n);(1&e)!=1&&(Object.isFrozen(n)&&(n=fn(n)),wt(n,1|e))}var La=di?(n,e)=>{n[di]&=~e}:(n,e)=>{n.D!==void 0&&(n.D&=~e)};function Wt(n,e,t){return t?n|e:n&~e}var xt=di?n=>0|n[di]:n=>0|n.D,Qe=di?n=>n[di]:n=>n.D,wt=di?(n,e)=>{n[di]=e}:(n,e)=>{n.D!==void 0?n.D=e:Object.defineProperties(n,{D:{value:e,configurable:!0,writable:!0,enumerable:!1}})};function af(){var n=[];return Za(n,1),n}function Rs(n){return Za(n,34),n}function oM(n,e){wt(e,-14591&(0|n))}function bl(n,e){wt(e,-14557&(34|n))}function Ca(n){return(n=n>>14&1023)===0?536870912:n}var vo={},rm={};function cf(n){return!(!n||typeof n!="object"||n.Ia!==rm)}function Zs(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}let sm=!sh;function om(n,e,t){if(n!=null){if(typeof n=="string")n=n?new Qi(n,_s):vs();else if(n.constructor!==Qi)if(Va(n))n=t?Kp(n):n.length?new Qi(new Uint8Array(n),_s):vs();else{if(!e)throw Error();n=void 0}}return n}function Al(n,e,t){if(!Array.isArray(n)||n.length)return!1;const i=xt(n);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(t):e.has(t)))&&(wt(n,1|i),!0)}var ns;const lf=[];function vi(n){if(2&n)throw Error()}wt(lf,55),ns=Object.freeze(lf);class Pa{constructor(e,t,i){this.l=0,this.g=e,this.h=t,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Pa(this.g,this.h,this.m)}}var aM={};let er,so;function am(n,e){(e=er?e[er]:void 0)&&(n[er]=fn(e))}function cm(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}function lm(n){return cm(n=Error(n),"warning"),n}function ir(n){return n==null?n:typeof n=="number"||n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function hm(n){return n==null?n:typeof n=="boolean"||typeof n=="number"?!!n:void 0}const cM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function $a(n){const e=typeof n;return e==="number"?Number.isFinite(n):e==="string"&&cM.test(n)}function Ls(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"?n:void 0}function lM(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"?n:void 0}function _h(n){return Math.trunc(n)}function vh(n,e){var t=Math.trunc(Number(n));return Number.isSafeInteger(t)?String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),e&&(ja(n),n=Qp()),n)}function Ia(n){return n==null?n:$a(n)?typeof n=="number"?_h(n):vh(n,!1):void 0}function xo(n){if(typeof n!="string")throw Error();return n}function yo(n){if(n!=null&&typeof n!="string")throw Error();return n}function oo(n){return n==null||typeof n=="string"?n:void 0}function xh(n,e,t,i){if(n!=null&&typeof n=="object"&&n.P===vo)return n;if(!Array.isArray(n))return t?2&i?(n=e[hf])?e=n:(Rs((n=new e).s),e=e[hf]=n):e=new e:e=void 0,e;let r=t=xt(n);return r===0&&(r|=32&i),r|=2&i,r!==t&&wt(n,r),new e(n)}const hf=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():"di";function na(n){return n}function hM(n,e,t){if(e){var i=!!i;if(!$a(e=n))throw lm("int64");typeof e=="string"?i=vh(e,i):i?(e=Math.trunc(e),!i||Number.isSafeInteger(e)?i=String(e):(Xa(e),i=Qp())):i=_h(e)}else i=Ia(n);return typeof(t=(n=i)==null?t?0:void 0:n)=="string"&&(i=+t,Number.isSafeInteger(i))?i:t}let Da,yh,uM;function Ua(n){switch(typeof n){case"boolean":return yh||(yh=[0,void 0,!0]);case"number":return 0<n?void 0:n===0?uM||(uM=[0,void 0]):[-n,void 0];case"string":return[0,n];case"object":return n}}function Ar(n,e){return um(n,e[0],e[1])}function um(n,e,t){if(n==null&&(n=Da),Da=void 0,n==null){var i=96;t?(n=[t],i|=512):n=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error();if(64&(i=xt(n)))return so&&delete n[so],n;if(i|=64,t&&(i|=512,t!==n[0]))throw Error();e:{if(t=i,i=n.length){const r=i-1;if(Zs(n[r])){if(1024<=(e=r-(+!!(512&(t|=256))-1)))throw Error();i=-16760833&t|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,i-(+!!(512&t)-1))))throw Error();i=-16760833&t|(1023&e)<<14}else i=t}}return wt(n,i),n}let dM=function(){try{return new class extends Map{constructor(){super()}},!1}catch{return!0}}();class Zc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}}const fM=dM?(Object.setPrototypeOf(Zc.prototype,Map.prototype),Object.defineProperties(Zc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Zc):class extends Map{constructor(){super()}};function $c(n){if(2&n.I)throw Error("Cannot mutate an immutable Map")}var kn=class extends fM{constructor(n,e,t=na,i=na){super();let r=xt(n);r|=64,wt(n,r),this.I=r,this.O=e,this.J=t||na,this.S=this.O?pM:i||na;for(let s=0;s<n.length;s++){const o=n[s],a=t(o[0],!1,!0);let c=o[1];e?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,r),super.set(a,c)}}ka(n=uf){return this.R(n)}R(n=uf){const e=[],t=super.entries();for(var i;!(i=t.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),e.push(i);return e}clear(){$c(this),super.clear()}delete(n){return $c(this),super.delete(this.J(n,!0,!1))}entries(){var n=this.ha();return new Pa(n,mM,this)}keys(){return this.Ha()}values(){var n=this.ha();return new Pa(n,kn.prototype.get,this)}forEach(n,e){super.forEach((t,i)=>{n.call(e,this.get(i),i,this)})}set(n,e){return $c(this),(n=this.J(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.S(e,!0,!0,this.O,!1,this.I))}Oa(n){const e=this.J(n[0],!1,!0);n=n[1],n=this.O?n===void 0?null:n:this.S(n,!1,!0,void 0,!1,this.I),super.set(e,n)}has(n){return super.has(this.J(n,!1,!1))}get(n){n=this.J(n,!1,!1);const e=super.get(n);if(e!==void 0){var t=this.O;return t?((t=this.S(e,!1,!0,t,this.ra,this.I))!==e&&super.set(n,t),t):e}}ha(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function pM(n,e,t,i,r,s){return n=xh(n,i,t,s),r&&(n=Ja(n)),n}function uf(n){return n}function mM(n){return[n,this.get(n)]}function Eh(n,e,t,i,r,s){if(n!=null){if(Array.isArray(n))n=s&&2&xt(n)?n:Mh(n,e,t,i!==void 0,r,s);else if(Zs(n)){const o={};for(let a in n)o[a]=Eh(n[a],e,t,i,r,s);n=o}else n=e(n,i);return n}}function Mh(n,e,t,i,r,s){const o=i||t?xt(n):0;i=i?!!(32&o):void 0;const a=fn(n);for(let c=0;c<a.length;c++)a[c]=Eh(a[c],e,t,i,r,s);return t&&(am(a,n),t(o,a)),a}function gM(n){return Eh(n,dm,void 0,void 0,!1,!1)}function dm(n){return n.P===vo?n.toJSON():n instanceof kn?n.ka(gM):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e){if(Array.isArray(e))return sm||!Al(e,void 0,9999)?e:void 0;if(Va(e))return Zd(e);if(e instanceof Qi){const t=e.T;return t==null?"":typeof t=="string"?t:e.T=Zd(t)}if(e instanceof kn)return e=e.ka(),yl||e.length!==0?e:void 0}}return e}(n)}function wl(n,e,t=bl){if(n!=null){if(Vp&&n instanceof Uint8Array)return e?n:new Uint8Array(n);if(Array.isArray(n)){var i=xt(n);return 2&i?n:(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),e?(wt(n,-12293&(34|i)),n):Mh(n,wl,4&i?bl:t,!0,!1,!0))}return n.P===vo?(t=n.s,n=2&(i=Qe(t))?n:Sh(n,t,i,!0)):n instanceof kn&&(t=Rs(n.R(wl)),n=new kn(t,n.O,n.J,n.S)),n}}function Sh(n,e,t,i){return n=n.constructor,Da=e=fm(e,t,i),e=new n(e),Da=void 0,e}function fm(n,e,t){const i=t||2&e?bl:oM,r=!!(32&e);return n=function(s,o,a){const c=fn(s);var l=c.length;const h=256&o?c[l-1]:void 0;for(l+=h?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(h){o=c[o]={};for(const u in h)o[u]=a(h[u])}return am(c,s),c}(n,e,s=>wl(s,r,i)),Za(n,32|(t?2:0)),n}function Ja(n){const e=n.s,t=Qe(e);return 2&t?Sh(n,e,t,!1):n}function ys(n,e){return Bi(n=n.s,Qe(n),e)}function Bi(n,e,t,i){if(t===-1)return null;if(t>=Ca(e)){if(256&e)return n[n.length-1][t]}else{var r=n.length;if(i&&256&e&&(i=n[r-1][t])!=null)return i;if((e=t+(+!!(512&e)-1))<r)return n[e]}}function lt(n,e,t,i){const r=n.s;let s=Qe(r);return vi(s),ht(r,s,e,t,i),n}function ht(n,e,t,i,r){var s=Ca(e);if(t>=s||r){if(r=e,256&e)s=n[n.length-1];else{if(i==null)return r;s=n[s+(+!!(512&e)-1)]={},r|=256}return s[t]=i,r!==e&&wt(n,r),r}return n[t+(+!!(512&e)-1)]=i,256&e&&t in(n=n[n.length-1])&&delete n[t],e}function rr(n,e,t,i,r){var s=2&e;let o=Bi(n,e,t,r);Array.isArray(o)||(o=ns);const a=!(2&i);i=!(1&i);const c=!!(32&e);let l=xt(o);return l!==0||!c||s||a?1&l||(l|=1,wt(o,l)):(l|=33,wt(o,l)),s?(n=!1,2&l||(Rs(o),n=!!(4&l)),(i||n)&&Object.freeze(o)):(s=!!(2&l)||!!(2048&l),i&&s?(o=fn(o),i=1,c&&!a&&(i|=32),wt(o,i),ht(n,e,t,o,r)):a&&32&l&&!s&&La(o,32)),o}function ua(n,e){n=n.s;let t=Qe(n);const i=Bi(n,t,e),r=ir(i);return r!=null&&r!==i&&ht(n,t,e,r),r}function pm(n){n=n.s;let e=Qe(n);const t=Bi(n,e,1),i=om(t,!0,!!(34&e));return i!=null&&i!==t&&ht(n,e,1,i),i}function is(n,e,t){var i=2;n=n.s;let r=Qe(n);2&r&&(i=1);let s=rr(n,r,e,1);r=Qe(n);var o=xt(s);let a=o,c=!!(2&o);const l=c&&!!(4&o);if(!(4&o)){Object.isFrozen(s)&&(s=fn(s),a=0,c=!!(2&(o=ao(o,r,!1))),r=ht(n,r,e,s)),o=Wt(o,4,!1),o=Wt(o,4096,!1),o=Wt(o,8192,!1);let h=0,u=0;for(;h<s.length;h++){const d=t(s[h]);d!=null&&(s[u++]=d)}u<h&&(s.length=u),o=Wt(o,20,!0)}return l||((t=i===1)&&(o=Wt(o,2,!0)),o!==a&&wt(s,o),(t||c)&&Object.freeze(s)),i===2&&c&&(s=fn(s),o=ao(o,r,!1),wt(s,o),ht(n,r,e,s)),s}let _M;function df(){return _M??(_M=new kn(Rs([]),void 0,void 0,void 0,aM))}function mm(n){n=fn(n);for(let e=0;e<n.length;e++){const t=n[e]=fn(n[e]);Array.isArray(t[1])&&(t[1]=Rs(t[1]))}return n}function Na(n,e,t){{const o=n.s;let a=Qe(o);if(vi(a),t==null)ht(o,a,e);else{var i=n=xt(t),r=!!(2&n)||Object.isFrozen(t),s=!r&&!1;if(!(4&n)){n=21,r&&(t=fn(t),i=0,n=ao(n,a,!0)),r=!!(4&n)&&!!(4096&n);for(let c=0;c<t.length;c++)t[c]=xo(t[c])}s&&(n=Wt(n,2,!0)),n!==i&&wt(t,n),s&&Object.freeze(t),ht(o,a,e,t)}}}function Eo(n,e,t,i){const r=Qe(n);vi(r),n=rr(n,r,e,2),i=t(i,!!(4&(e=xt(n)))&&!!(4096&e)),n.push(i)}function vM(n){return n}function Jc(n,e){return Th(n=n.s,Qe(n),Qm)===e?e:-1}function Th(n,e,t){let i=0;for(let r=0;r<t.length;r++){const s=t[r];Bi(n,e,s)!=null&&(i!==0&&(e=ht(n,e,i)),i=s)}return i}function bh(n,e,t,i){let r=Qe(n);vi(r);const s=Bi(n,r,t,i);let o;if(s!=null&&s.P===vo)return(e=Ja(s))!==s&&ht(n,r,t,e,i),e.s;if(Array.isArray(s)){const a=xt(s);o=2&a?fm(s,a,!1):s,o=Ar(o,e)}else o=Ar(void 0,e);return o!==s&&ht(n,r,t,o,i),o}function gm(n,e,t,i){n=n.s;let r=Qe(n);const s=Bi(n,r,t,i);return(e=xh(s,e,!1,r))!==s&&e!=null&&ht(n,r,t,e,i),e}function et(n,e,t,i=!1){if((e=gm(n,e,t,i))==null)return e;n=n.s;let r=Qe(n);if(!(2&r)){const s=Ja(e);s!==e&&ht(n,r,t,e=s,i)}return e}function _m(n,e,t,i,r,s,o){const a=r===1;r=r===2,s=!!s;var c=!!(2&e)&&r;let l=rr(n,e,i,3);e=Qe(n);var h=xt(l),u=!!(2&h);const d=!!(4&h),m=!!(32&h);let g=u&&d||!!(2048&h);if(!d){var _=l,p=e;const f=!!(2&h);f&&(p=Wt(p,2,!0));let S=!f,y=!0,M=0,b=0;for(;M<_.length;M++){const L=xh(_[M],t,!1,p);if(L instanceof t){if(!f){const A=!!(2&xt(L.s));S&&(S=!A),y&&(y=A)}_[b++]=L}}b<M&&(_.length=b),h=Wt(h,4,!0),h=Wt(h,16,y),h=Wt(h,8,S),wt(_,h),u&&!c&&(Object.freeze(l),g=!0)}if(t=h,c=!!(8&h)||a&&!l.length,o&&!c){for(g&&(l=fn(l),g=!1,t=0,h=ao(h,e,s),e=ht(n,e,i,l)),o=l,c=h,u=0;u<o.length;u++)(_=o[u])!==(h=Ja(_))&&(o[u]=h);c=Wt(c,8,!0),h=c=Wt(c,16,!o.length)}return g||(a?h=Wt(h,!l.length||16&h&&(!d||m)?2:2048,!0):s||(h=Wt(h,32,!1)),h!==t&&wt(l,h),a&&(Object.freeze(l),g=!0)),r&&g&&(l=fn(l),h=ao(h,e,s),wt(l,h),ht(n,e,i,l)),l}function Ni(n,e,t){n=n.s;const i=Qe(n),r=!!(2&i);return _m(n,i,e,t,r?1:2,!1,!r)}function Pe(n,e,t,i,r){return i==null&&(i=void 0),lt(n,t,i,r)}function $s(n,e,t,i){i==null&&(i=void 0),n=n.s;let r=Qe(n);vi(r),(t=Th(n,r,t))&&t!==e&&i!=null&&(r=ht(n,r,t)),ht(n,r,e,i)}function ao(n,e,t){return n=Wt(n,2,!!(2&e)),n=Wt(n,32,!!(32&e)&&t),Wt(n,2048,!1)}function Rl(n,e,t){n=n.s;const i=Qe(n);vi(i),n=_m(n,i,e,1,2),e=t??new e,n.push(e),2&xt(e.s)?La(n,8):La(n,16)}function Fn(n,e){return Ls(ys(n,e))}function Gn(n,e){return oo(ys(n,e))}function fi(n){return n??0}function qt(n,e){return fi(ua(n,e))}function co(n,e,t){if(t!=null){if(typeof t!="boolean")throw n=typeof t,Error(`Expected boolean but got ${n!="object"?n:t?Array.isArray(t)?"array":n:"null"}: ${t}`);t=!!t}lt(n,e,t)}function pi(n,e,t){if(t!=null){if(typeof t!="number")throw lm("int32");if(!Number.isFinite(t)){const i=Error();cm(i,"incident"),function(r){za.setTimeout(()=>{throw r},0)}(i)}}lt(n,e,t)}function Oe(n,e,t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);lt(n,e,t)}function ei(n,e,t){e.g?e.m(n,e.g,e.h,t,!0):e.m(n,e.h,t,!0)}kn.prototype.toJSON=void 0,kn.prototype.Ia=rm;var me=class{constructor(n,e){this.s=um(n,e)}toJSON(){return vm(this,Mh(this.s,dm,void 0,void 0,!1,!1),!0)}l(){var n=SS;return n.g?n.l(this,n.g,n.h,!0,2):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.s;return Sh(this,n,Qe(n),!1)}H(){return!!(2&xt(this.s))}};function vm(n,e,t){const i=n.constructor.A;var r=Qe(t?n.s:e),s=Ca(r),o=!1;if(i&&sm){if(!t){var a;if((e=fn(e)).length&&Zs(a=e[e.length-1])){for(o=0;o<i.length;o++)if(i[o]>=s){Object.assign(e[e.length-1]={},a);break}}o=!0}var c;s=e,t=!t,n=Ca(a=Qe(n.s)),a=+!!(512&a)-1;for(let p=0;p<i.length;p++){var l=i[p];if(l<n){var h=s[l+=a];h==null?s[l]=t?ns:af():t&&h!==ns&&of(h)}else{if(!c){var u=void 0;s.length&&Zs(u=s[s.length-1])?c=u:s.push(c={})}h=c[l],c[l]==null?c[l]=t?ns:af():t&&h!==ns&&of(h)}}}if(!(c=e.length))return e;let d,m;if(Zs(u=e[c-1])){e:{var g=u;for(var _ in s={},t=!1,g)n=g[_],Array.isArray(n)&&(a=n,(!Jd&&Al(n,i,+_)||!yl&&cf(n)&&n.size===0)&&(n=null),n!=a&&(t=!0)),n!=null?s[_]=n:t=!0;if(t){for(let p in s){g=s;break e}g=null}}g!=u&&(d=!0),c--}for(r=+!!(512&r)-1;0<c&&((u=e[_=c-1])==null||!Jd&&Al(u,i,_-r)||!yl&&cf(u)&&u.size===0);c--)m=!0;return(d||m)&&(e=o?e:Array.prototype.slice.call(e,0,c),o&&(e.length=c),g&&e.push(g)),e}function xm(n){return Array.isArray(n)?n[0]instanceof ws?n:[LM,n]:[n,void 0]}function Cs(n,e){if(Array.isArray(e)){var t=xt(e);if(4&t)return e;for(var i=0,r=0;i<e.length;i++){const s=n(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),wt(e,-12289&(5|t)),2&t&&Object.freeze(e),e}}me.prototype.P=vo,me.prototype.toString=function(){return vm(this,this.s,!1).toString()};const ff=Symbol();function Ah(n){let e=n[ff];if(!e){const t=Mm(n),i=Rh(n),r=i.g;e=r?(s,o)=>r(s,o,i):(s,o)=>{for(;nm(o)&&o.h!=4;){var a=o.m,c=i[a];if(!c){var l=i.fa;l&&(l=l[a])&&(c=i[a]=xM(l))}c&&c(o,s,a)||(a=(c=o).l,ha(c),c.ea?c=void 0:(l=c.g.g-a,c.g.g=a,c=tm(c.g,l)),a=s,c&&(er||(er=Symbol()),(l=a[er])?l.push(c):a[er]=[c]))}t===ym||t===Em||t.Ja||(s[so||(so=Symbol())]=t)},n[ff]=e}return e}function xM(n){const e=(n=xm(n))[0].g;if(n=n[1]){const t=Ah(n),i=Rh(n).K;return(r,s,o)=>e(r,s,o,i,t)}return e}let ym,Em;const da=Symbol();function yM(n,e,t){const i=t[1];let r;if(i){const s=i[da];r=s?s.K:Ua(i[0]),n[e]=s??i}r&&r===yh?(n.ia||(n.ia=[])).push(e):t[0]&&(n.ja||(n.ja=[])).push(e)}function pf(n,e){return[n.l,!e||0<e[0]?void 0:e]}function Mm(n){var e=n[da];if(e)return e;if(!(e=wh(n,n[da]={},pf,pf,yM)).ja&&!e.ia){let t=!0;for(let i in e){isNaN(i)||(t=!1);break}t?(e=Ua(n[0])===yh,e=n[da]=e?Em||(Em={K:Ua(!0)}):ym||(ym={})):e.Ja=!0}return e}function EM(n,e,t){n[e]=t}function wh(n,e,t,i,r=EM){e.K=Ua(n[0]);let s=0;var o=n[++s];o&&o.constructor===Object&&(e.fa=o,typeof(o=n[++s])=="function"&&(e.g=o,e.h=n[++s],o=n[++s]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var c=0;c<o.length;c++)a[o[c]]=o;o=n[++s]}for(c=1;o!==void 0;){let u;typeof o=="number"&&(c+=o,o=n[++s]);var l=void 0;if(o instanceof ws?u=o:(u=CM,s--),u.la){o=n[++s],l=n;var h=s;typeof o=="function"&&(o=o(),l[h]=o),l=o}for(h=c+1,typeof(o=n[++s])=="number"&&0>o&&(h-=o,o=n[++s]);c<h;c++){const d=a[c];r(e,c,l?i(u,l,d):t(u,d))}}return e}const mf=Symbol();function Sm(n){let e=n[mf];if(!e){const t=Qa(n);e=(i,r)=>Tm(i,r,t),n[mf]=e}return e}const fa=Symbol();function MM(n){return n.h}function SM(n,e){let t,i;const r=n.h;return(s,o,a)=>r(s,o,a,i||(i=Qa(e).K),t||(t=Sm(e)))}function Qa(n){let e=n[fa];return e||(e=wh(n,n[fa]={},MM,SM),pa in n&&fa in n&&(n.length=0),e)}const pa=Symbol();function TM(n,e){const t=n.g;return e?(i,r,s)=>t(i,r,s,e):t}function bM(n,e,t){const i=n.g;let r,s;return(o,a,c)=>i(o,a,c,s||(s=Rh(e).K),r||(r=Ah(e)),t)}function Rh(n){let e=n[pa];return e||(Mm(n),e=wh(n,n[pa]={},TM,bM),pa in n&&fa in n&&(n.length=0),e)}function gf(n,e){var t=n[e];if(t)return t;if((t=n.fa)&&(t=t[e])){var i=(t=xm(t))[0].h;if(t=t[1]){const r=Sm(t),s=Qa(t).K;t=(t=n.h)?t(s,r):(o,a,c)=>i(o,a,c,s,r)}else t=i;return n[e]=t}}function Tm(n,e,t){for(var i=Qe(n),r=+!!(512&i)-1,s=n.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const c=n[o];if(c==null)continue;const l=o-r,h=gf(t,l);h&&h(e,c,l)}if(256&i){i=n[s-1];for(let c in i)r=+c,Number.isNaN(r)||(s=i[c])!=null&&(a=gf(t,r))&&a(e,s,r)}if(n=er?n[er]:void 0)for(xs(e,e.g.end()),t=0;t<n.length;t++)xs(e,oh(n[t])||Wa())}function pn(n,e){return new ws(n,e,!1,!1)}function Ps(n,e){return new ws(n,e,!0,!1)}function ec(n,e){return new ws(n,e,!1,!0)}function mn(n,e,t){ht(n,Qe(n),e,t)}var AM=ec(function(n,e,t,i,r){return n.h===2&&(n=go(n,Ar([void 0,void 0],i),r),vi(i=Qe(e)),(r=Bi(e,i,t))instanceof kn?2&r.I?((r=r.R()).push(n),ht(e,i,t,r)):r.Oa(n):Array.isArray(r)?(2&xt(r)&&ht(e,i,t,r=mm(r)),r.push(n)):ht(e,i,t,[n]),!0)},function(n,e,t,i,r){if(e instanceof kn)e.forEach((s,o)=>{Tl(n,t,Ar([o,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&Tl(n,t,Ar(o,i),r)}});function bm(n,e,t){e:if(e!=null){if($a(e)){if(typeof e=="string"){e=vh(e,!1);break e}if(typeof e=="number"){e=_h(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&rf(e),e!=null&&(zn(n,t,0),typeof e=="number"?(n=n.g,Xa(e),Ra(n,Mt,Xt)):(t=rf(e),Ra(n.g,t.h,t.g))))}function Am(n,e,t){(e=Ls(e))!=null&&e!=null&&(zn(n,t,0),Ya(n.g,e))}function wm(n,e,t){(e=hm(e))!=null&&(zn(n,t,0),n.g.g.push(e?1:0))}function Rm(n,e,t){(e=oo(e))!=null&&Ka(n,t,kp(e))}function tc(n,e,t,i,r){Tl(n,t,e instanceof me?e.s:Array.isArray(e)?Ar(e,i):void 0,r)}function Lm(n,e,t){(e=e==null||typeof e=="string"||Va(e)||e instanceof Qi?e:void 0)!=null&&Ka(n,t,ch(e).buffer)}function Cm(n,e,t){return(n.h===5||n.h===2)&&(e=rr(e,Qe(e),t,2,!1),n.h==2?qa(n,mo.prototype.B,e):e.push(n.g.B()),!0)}var It,Di=pn(function(n,e,t){if(n.h!==1)return!1;var i=n.g;n=Sl(i);const r=Sl(i);i=2*(r>>31)+1;const s=r>>>20&2047;return n=4294967296*(1048575&r)+n,mn(e,t,s==2047?n?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*n:i*Math.pow(2,s-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=ir(e))!=null&&(zn(n,t,1),n=n.g,(t=Zp||(Zp=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),Mt=t.getUint32(0,!0),Xt=t.getUint32(4,!0),ro(n,Mt),ro(n,Xt))}),Nt=pn(function(n,e,t){return n.h===5&&(mn(e,t,n.g.B()),!0)},function(n,e,t){(e=ir(e))!=null&&(zn(n,t,5),n=n.g,hh(e),ro(n,Mt))}),wM=Ps(Cm,function(n,e,t){if((e=Cs(ir,e))!=null)for(let s=0;s<e.length;s++){var i=n,r=e[s];r!=null&&(zn(i,t,5),i=i.g,hh(r),ro(i,Mt))}}),Lh=Ps(Cm,function(n,e,t){if((e=Cs(ir,e))!=null&&e.length){zn(n,t,2),_o(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,hh(e[i]),ro(t,Mt)}}),tr=pn(function(n,e,t){return n.h===0&&(mn(e,t,dh(n.g,Jp)),!0)},bm),Qc=pn(function(n,e,t){return n.h===0&&(mn(e,t,(n=dh(n.g,Jp))===0?void 0:n),!0)},bm),RM=pn(function(n,e,t){return n.h===0&&(mn(e,t,dh(n.g,$p)),!0)},function(n,e,t){e:if(e!=null){if($a(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),ja(e),e=El(Mt,Xt));break e}if(typeof e=="number"){e=Math.trunc(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&tf(e),e!=null&&(zn(n,t,0),typeof e=="number"?(n=n.g,Xa(e),Ra(n,Mt,Xt)):(t=tf(e),Ra(n.g,t.h,t.g))))}),bt=pn(function(n,e,t){return n.h===0&&(mn(e,t,n.g.m()),!0)},Am),Ch=Ps(function(n,e,t){return(n.h===0||n.h===2)&&(e=rr(e,Qe(e),t,2,!1),n.h==2?qa(n,mo.prototype.m,e):e.push(n.g.m()),!0)},function(n,e,t){if((e=Cs(Ls,e))!=null&&e.length){t=mh(n,t);for(let i=0;i<e.length;i++)Ya(n.g,e[i]);gh(n,t)}}),Es=pn(function(n,e,t){return n.h===0&&(mn(e,t,(n=n.g.m())===0?void 0:n),!0)},Am),Lt=pn(function(n,e,t){return n.h===0&&(mn(e,t,fh(n.g)),!0)},wm),Js=pn(function(n,e,t){return n.h===0&&(mn(e,t,(n=fh(n.g))===!1?void 0:n),!0)},wm),cn=Ps(function(n,e,t){return n.h===2&&(Eo(e,t,vM,n=ph(n)),!0)},function(n,e,t){if((e=Cs(oo,e))!=null)for(let r=0;r<e.length;r++){var i=e[r];i!=null&&Ka(n,t,kp(i))}}),nr=pn(function(n,e,t){return n.h===2&&(mn(e,t,(n=ph(n))===""?void 0:n),!0)},Rm),dt=pn(function(n,e,t){return n.h===2&&(mn(e,t,ph(n)),!0)},Rm),LM=ec(function(n,e,t,i,r){return n.h===2&&(go(n,bh(e,i,t,!0),r),!0)},tc),CM=ec(function(n,e,t,i,r){return n.h===2&&(go(n,bh(e,i,t),r),!0)},tc);It=new ws(function(n,e,t,i,r){if(n.h!==2)return!1;i=Ar(void 0,i);let s=Qe(e);vi(s);let o=rr(e,s,t,3);return s=Qe(e),4&xt(o)&&(o=fn(o),wt(o,-2079&(1|xt(o))),ht(e,s,t,o)),o.push(i),go(n,i,r),!0},function(n,e,t,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)tc(n,e[s],t,i,r)},!0,!0);var ft=ec(function(n,e,t,i,r,s){if(n.h!==2)return!1;let o=Qe(e);return vi(o),(s=Th(e,o,s))&&t!==s&&ht(e,o,s),go(n,e=bh(e,i,t),r),!0},tc),Pm=pn(function(n,e,t){return n.h===2&&(mn(e,t,im(n)),!0)},Lm),PM=Ps(function(n,e,t){return(n.h===0||n.h===2)&&(e=rr(e,Qe(e),t,2,!1),n.h==2?qa(n,mo.prototype.j,e):e.push(n.g.j()),!0)},function(n,e,t){if((e=Cs(lM,e))!=null)for(let s=0;s<e.length;s++){var i=n,r=e[s];r!=null&&(zn(i,t,0),_o(i.g,r))}}),mi=pn(function(n,e,t){return n.h===0&&(mn(e,t,n.g.m()),!0)},function(n,e,t){(e=Ls(e))!=null&&(e=parseInt(e,10),zn(n,t,0),Ya(n.g,e))}),IM=Ps(function(n,e,t){return(n.h===0||n.h===2)&&(e=rr(e,Qe(e),t,2,!1),n.h==2?qa(n,mo.prototype.C,e):e.push(n.g.m()),!0)},function(n,e,t){if((e=Cs(Ls,e))!=null&&e.length){t=mh(n,t);for(let i=0;i<e.length;i++)Ya(n.g,e[i]);gh(n,t)}});class DM{constructor(e,t){this.h=e,this.g=t,this.l=et,this.m=Pe,this.defaultValue=void 0}}function ti(n,e){return new DM(n,e)}function sr(n,e){return(t,i)=>{e:{if(ta.length){const s=ta.pop();s.o(i),Ml(s.g,t,i),t=s}else t=new class{constructor(s,o){if(ef.length){const a=ef.pop();Ml(a,s,o),s=a}else s=new mo(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ea:s=!1}={}){this.ea=s}}(t,i);try{const s=new n,o=s.s;Ah(e)(o,t),so&&delete o[so];var r=s;break e}finally{t.g.clear(),t.m=-1,t.h=-1,100>ta.length&&ta.push(t)}r=void 0}return r}}function Ph(n){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Tm(this.s,e,Qa(n)),xs(e,e.g.end());const t=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];t.set(a,s),s+=a.length}return e.l=[t],t}}var Im=[0,nr,pn(function(n,e,t){return n.h===2&&(mn(e,t,(n=im(n))===vs()?void 0:n),!0)},function(n,e,t){if(e!=null){if(e instanceof me){const i=e.Qa;return void(i&&(e=i(e),e!=null&&Ka(n,t,ch(e).buffer)))}if(Array.isArray(e))return}Lm(n,e,t)})],UM=[0,dt],Dm=[0,bt,mi,Lt,-1,Ch,mi,-1],NM=[0,Lt,-1],Um=class extends me{constructor(){super()}};Um.A=[6];var Nm=[0,Lt,dt,Lt,mi,-1,IM,dt,-1,NM,mi],Om=[0,dt,-2],_f=class extends me{constructor(){super()}},Fm=[0],Bm=[0,bt,Lt,-2],Hn=class extends me{constructor(n){super(n,2)}},mt={},OM=[-2,mt,Lt];mt[336783863]=[0,dt,Lt,-1,bt,[0,[1,2,3,4,5],ft,Fm,ft,Nm,ft,Om,ft,Bm,ft,Dm],UM];var FM=[0,nr,Js],km=[0,Qc,-1,Js,-3,Qc,Ch,nr,Es,Qc,-1,Js,Es,Js,-2,nr],Mo=[-1,{}],Gm=[0,dt,1,Mo],Hm=[0,dt,cn,Mo];function Vn(n,e){e=yo(e),n=n.s;let t=Qe(n);vi(t),ht(n,t,2,e===""?void 0:e)}function ut(n,e){Eo(n.s,3,xo,e)}function ot(n,e){Eo(n.s,4,xo,e)}var ln=class extends me{constructor(n){super(n,500)}o(n){return Pe(this,0,7,n)}};ln.A=[3,4,5,6,8,13,17,1005];var BM=[-500,nr,-1,cn,-3,OM,It,Im,Es,-1,Gm,Hm,It,FM,nr,km,Es,cn,987,cn],kM=[0,nr,-1,Mo],GM=[-500,dt,-1,[-1,{}],998,dt],HM=[-500,dt,cn,-1,[-2,{},Lt],997,cn,-1],zM=[-500,dt,cn,Mo,998,cn];function Wn(n,e){Rl(n,ln,e)}function gt(n,e){Eo(n.s,10,xo,e)}function pt(n,e){Eo(n.s,15,xo,e)}var gn=class extends me{constructor(n){super(n,500)}o(n){return Pe(this,0,1001,n)}};gn.A=[1,6,7,9,10,15,16,17,14,1002];var zm=[-500,It,BM,4,It,GM,It,HM,Es,It,zM,cn,Es,Gm,Hm,It,kM,cn,-2,km,nr,-1,Js,979,Mo,It,Im],VM=sr(gn,zm);gn.prototype.g=Ph(zm);var WM=[0,It,[0,bt,-2]],XM=class extends me{constructor(n){super(n)}},jM=[0,bt,Nt,dt,-1],Ih=class extends me{constructor(n){super(n)}g(){return Ni(this,XM,1)}};Ih.A=[1];var Vm=[0,It,jM],Dh=sr(Ih,Vm),qM=[0,bt,Nt],YM=[0,bt,-1,WM],KM=class extends me{constructor(n){super(n)}},ZM=[0,bt,-3],$M=[0,Nt,-3],JM=class extends me{constructor(n){super(n)}},QM=[0,Nt,-1,dt,Nt],ma=class extends me{constructor(n){super(n)}h(){return et(this,KM,2)}g(){return Ni(this,JM,5)}};ma.A=[5];var eS=[0,mi,ZM,$M,YM,It,QM],Wm=class extends me{constructor(n){super(n)}};Wm.A=[1,2,3,8,9];var Xm=sr(Wm,[0,cn,Ch,Lh,eS,dt,-1,tr,It,qM,cn,tr]),jm=class extends me{constructor(n){super(n)}},tS=[0,Nt,-4],qm=class extends me{constructor(n){super(n)}};qm.A=[1];var Uh=sr(qm,[0,It,tS]),Ym=class extends me{constructor(n){super(n)}},nS=[0,Nt,-4],Km=class extends me{constructor(n){super(n)}};Km.A=[1];var nc=sr(Km,[0,It,nS]),Zm=class extends me{constructor(n){super(n)}};Zm.A=[3];var iS=[0,bt,-1,Lh,mi],$m=class extends me{constructor(){super()}};$m.prototype.g=Ph([0,Nt,-4,tr]);var rS=class extends me{constructor(n){super(n)}},sS=[0,1,bt,dt,Vm],Jm=class extends me{constructor(n){super(n)}};Jm.A=[1];var oS=sr(Jm,[0,It,sS,tr]),Ll=class extends me{constructor(n){super(n)}};Ll.A=[1];var aS=class extends me{constructor(n){super(n)}oa(){const n=pm(this);return n??vs()}},cS=class extends me{constructor(n){super(n)}},Qm=[1,2],lS=[0,Qm,ft,[0,Lh],ft,[0,Pm],bt,dt],eg=class extends me{constructor(n){super(n)}};eg.A=[1];var hS=sr(eg,[0,It,lS,tr]),ic=class extends me{constructor(n){super(n)}};ic.A=[4,5];var tg=[0,dt,bt,Nt,cn,-1],vf=class extends me{constructor(n){super(n)}},uS=[0,Lt,-1],xf=class extends me{constructor(n){super(n)}},ga=[1,2,3,4,5],Oa=class extends me{constructor(n){super(n)}g(){return pm(this)!=null}h(){return Gn(this,2)!=null}},ng=[0,Pm,dt,[0,bt,tr,-1],[0,RM,tr]],Tt=class extends me{constructor(n){super(n)}g(){return hm(ys(this,2))??!1}},Ot=[0,ng,Lt,[0,ga,ft,Bm,ft,Nm,ft,Dm,ft,Fm,ft,Om],mi],Nh=class extends me{constructor(n){super(n)}},ig=[0,Ot,Nt,-1,bt],dS=ti(502141897,Nh);mt[502141897]=ig;var rg=[0,ng];mt[512499200]=rg;var sg=[0,rg];mt[515723506]=sg;var fS=sr(class extends me{constructor(n){super(n)}},[0,[0,mi,-1,wM,PM],iS]),og=[0,Ot];mt[508981768]=og;var pS=class extends me{constructor(n){super(n)}},ag=[0,Ot,Nt,og,Lt],cg=class extends me{constructor(n){super(n)}},lg=[0,Ot,ig,ag,Nt,sg];mt[508968149]=ag;var mS=ti(508968150,cg);mt[508968150]=lg;var hg=class extends me{constructor(n){super(n)}},gS=ti(513916220,hg);mt[513916220]=[0,Ot,lg,bt];var Qr=class extends me{constructor(n){super(n)}h(){return et(this,ic,2)}g(){lt(this,2)}},ug=[0,Ot,tg];mt[478825465]=ug;var dg=[0,Ot];mt[478825422]=dg;var _S=class extends me{constructor(n){super(n)}},fg=[0,Ot,dg,ug,-1],pg=class extends me{constructor(n){super(n)}},mg=[0,Ot,Nt,bt],gg=class extends me{constructor(n){super(n)}},_g=[0,Ot,Nt],Oh=class extends me{constructor(n){super(n)}},vg=[0,Ot,mg,_g,Nt],xg=class extends me{constructor(n){super(n)}},vS=[0,Ot,vg,fg];mt[463370452]=fg,mt[464864288]=mg,mt[474472470]=_g;var xS=ti(462713202,Oh);mt[462713202]=vg;var yS=ti(479097054,xg);mt[479097054]=vS;var yg=class extends me{constructor(n){super(n)}},ES=ti(456383383,yg);mt[456383383]=[0,Ot,tg];var Eg=class extends me{constructor(n){super(n)}},MS=ti(476348187,Eg);mt[476348187]=[0,Ot,uS];var Mg=class extends me{constructor(n){super(n)}},Sg=[0,mi,-1],Cl=class extends me{constructor(n){super(n)}};Cl.A=[3];var SS=ti(458105876,class extends me{constructor(n){super(n)}g(){var n=this.s;const e=Qe(n);var t=2&e;return n=function(i,r,s){var o=Cl;const a=2&r;let c=!1;if(s==null){if(a)return df();s=[]}else if(s.constructor===kn){if(!(2&s.I)||a)return s;s=s.R()}else Array.isArray(s)?c=!!(2&xt(s)):s=[];if(a){if(!s.length)return df();c||(c=!0,Rs(s))}else c&&(c=!1,s=mm(s));return c||(64&xt(s)?La(s,32):32&r&&Za(s,32)),ht(i,r,2,o=new kn(s,o,hM,void 0),!1),o}(n,e,Bi(n,e,2)),n==null||!t&&Cl&&(n.ra=!0),t=n}});mt[458105876]=[0,Sg,AM,[!0,tr,[0,dt,-1,cn]]];var Fh=class extends me{constructor(n){super(n)}},Tg=ti(458105758,Fh);mt[458105758]=[0,Ot,dt,Sg];var Bh=class extends me{constructor(n){super(n)}};Bh.A=[5,6];var TS=ti(443442058,Bh);mt[443442058]=[0,Ot,dt,bt,Nt,cn,-1];var bS=class extends me{constructor(n){super(n)}},bg=[0,Ot,Nt,-1,bt];mt[514774813]=bg;var AS=class extends me{constructor(n){super(n)}},Ag=[0,Ot,Nt,Lt],wg=class extends me{constructor(n){super(n)}},wS=[0,Ot,bg,Ag,Nt];mt[518928384]=Ag;var RS=ti(516587230,wg);function Pl(n,e){return e=e?e.clone():new ic,n.displayNamesLocale!==void 0?lt(e,1,yo(n.displayNamesLocale)):n.displayNamesLocale===void 0&&lt(e,1),n.maxResults!==void 0?pi(e,2,n.maxResults):"maxResults"in n&&lt(e,2),n.scoreThreshold!==void 0?Oe(e,3,n.scoreThreshold):"scoreThreshold"in n&&lt(e,3),n.categoryAllowlist!==void 0?Na(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&lt(e,4),n.categoryDenylist!==void 0?Na(e,5,n.categoryDenylist):"categoryDenylist"in n&&lt(e,5),e}function Rg(n,e=-1,t=""){return{categories:n.map(i=>({index:fi(Fn(i,1))??-1,score:qt(i,2)??0,categoryName:Gn(i,3)??""??"",displayName:Gn(i,4)??""??""})),headIndex:e,headName:t}}function Lg(n){var o,a;var e=is(n,3,ir),t=is(n,2,Ls);const i=is(n,1,oo),r=is(n,9,oo),s={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)s.categories.push({score:e[c],index:t[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((e=(o=et(n,ma,4))==null?void 0:o.h())&&(s.boundingBox={originX:Fn(e,1)??0,originY:Fn(e,2)??0,width:Fn(e,3)??0,height:Fn(e,4)??0,angle:0}),(a=et(n,ma,4))==null?void 0:a.g().length)for(const c of et(n,ma,4).g())s.keypoints.push({x:ua(c,1)??0,y:ua(c,2)??0,score:ua(c,4)??0,label:Gn(c,3)??""});return s}function kh(n){const e=[];for(const t of Ni(n,Ym,1))e.push({x:qt(t,1)??0,y:qt(t,2)??0,z:qt(t,3)??0});return e}function Cg(n){const e=[];for(const t of Ni(n,jm,1))e.push({x:qt(t,1)??0,y:qt(t,2)??0,z:qt(t,3)??0});return e}function yf(n){return Array.from(n,e=>127<e?e-256:e)}function Ef(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);let t=0,i=0,r=0;for(let s=0;s<n.length;s++)t+=n[s]*e[s],i+=n[s]*n[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*r)}let ia;mt[516587230]=wS;const LS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Pg(){if(ia===void 0)try{await WebAssembly.instantiate(LS),ia=!0}catch{ia=!1}return ia}async function el(n,e=""){const t=await Pg()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${n}_${t}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var Vs=class{};function Ig(){const n=navigator.userAgent;return n.includes("Safari")&&!n.includes("Chrome")}async function Mf(n){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(n.toString())}function Te(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function Sf(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");return n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),e.videoWidth?(t=e.videoWidth,e=e.videoHeight):e.naturalWidth?(t=e.naturalWidth,e=e.naturalHeight):(t=e.width,e=e.height),!n.l||t===n.i.canvas.width&&e===n.i.canvas.height||(n.i.canvas.width=t,n.i.canvas.height=e),[t,e]}function Tf(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=n.i.stringToNewUTF8(e[r]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(const r of i)n.i._free(r);n.i._free(e)}function Ai(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function pr(n,e,t){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(r,s,o)=>{s?(t(i,o),i=[]):i.push(r)}}Vs.forVisionTasks=function(n){return el("vision",n)},Vs.forTextTasks=function(n){return el("text",n)},Vs.forAudioTasks=function(n){return el("audio",n)},Vs.isSimdSupported=function(){return Pg()};async function CS(n,e,t,i){return n=await(async(r,s,o,a,c)=>{if(s&&await Mf(s),!self.ModuleFactory||o&&(await Mf(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,a)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&r.endsWith(".data")?t.assetBinaryPath.toString():r}),await n.o(i),n}function bf(n,e){const t=et(n.baseOptions,Oa,1)||new Oa;typeof e=="string"?(lt(t,2,yo(e)),lt(t,1)):e instanceof Uint8Array&&(lt(t,1,om(e,!1,!1)),lt(t,2)),Pe(n.baseOptions,0,1,t)}function Af(n){try{const e=n.L.length;if(e===1)throw Error(n.L[0].message);if(1<e)throw Error("Encountered multiple errors: "+n.L.map(t=>t.message).join(", "))}finally{n.L=[]}}function we(n,e){n.N=Math.max(n.N,e)}function Gh(n,e){n.B=new ln,Vn(n.B,"PassThroughCalculator"),ut(n.B,"free_memory"),ot(n.B,"free_memory_unused_out"),gt(e,"free_memory"),Wn(e,n.B)}function lo(n,e){ut(n.B,e),ot(n.B,e+"_unused_out")}function Hh(n){n.g.addBoolToStream(!0,"free_memory",n.N)}var Il=class{constructor(n){this.g=n,this.L=[],this.N=0,this.g.setAutoRenderToScreen(!1)}l(n,e=!0){var t,i,r,s,o,a;if(e){const c=n.baseOptions||{};if((t=n.baseOptions)!=null&&t.modelAssetBuffer&&((i=n.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=et(this.baseOptions,Oa,1))!=null&&r.g()||(s=et(this.baseOptions,Oa,1))!=null&&s.h()||(o=n.baseOptions)!=null&&o.modelAssetBuffer||(a=n.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,h){let u=et(l.baseOptions,xf,3);if(!u){var d=u=new xf,m=new _f;$s(d,4,ga,m)}"delegate"in h&&(h.delegate==="GPU"?(h=u,d=new Um,$s(h,2,ga,d)):(h=u,d=new _f,$s(h,4,ga,d))),Pe(l.baseOptions,0,3,u)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),bf(this,"/model.dat"),this.m(),this.V()});bf(this,c.modelAssetBuffer)}return this.m(),this.V(),Promise.resolve()}V(){}aa(){let n;if(this.g.aa(e=>{n=VM(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.L.push(Error(i))}),this.g.Ma(),this.g.setGraph(n,e),this.B=void 0,Af(this)}finishProcessing(){this.g.finishProcessing(),Af(this)}close(){this.B=void 0,this.g.closeGraph()}};function Bn(n,e){if(n===null)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Il.prototype.close=Il.prototype.close;class PS{constructor(e,t,i,r){this.g=e,this.h=t,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function wf(n,e,t){const i=n.h;if(t=Bn(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.g,t),t}function Rf(n,e){const t=n.h,i=Bn(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);const r=Bn(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.u),t.vertexAttribPointer(n.u,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const s=Bn(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.B),t.vertexAttribPointer(n.B,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new PS(t,i,r,s)}function Dg(n,e){if(n.h){if(e!==n.h)throw Error("Cannot change GL context once initialized")}else n.h=e}function zh(n,e,t,i){if(Dg(n,e),!n.g){const r=n.h;if(n.g=Bn(r.createProgram(),"Failed to create WebGL program"),n.C=wf(n,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,r.VERTEX_SHADER),n.v=wf(n,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `,r.FRAGMENT_SHADER),r.linkProgram(n.g),!r.getProgramParameter(n.g,r.LINK_STATUS))throw Error(`Error during program linking: ${r.getProgramInfoLog(n.g)}`);n.u=r.getAttribLocation(n.g,"aVertex"),n.B=r.getAttribLocation(n.g,"aTex")}return t?(n.m||(n.m=Rf(n,!0)),t=n.m):(n.j||(n.j=Rf(n,!1)),t=n.j),e.useProgram(n.g),t.bind(),n=i(),t.g.bindVertexArray(null),n}function rc(n,e,t){Dg(n,e),n.l||(n.l=Bn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function Vh(n){var e;(e=n.h)==null||e.bindFramebuffer(n.h.FRAMEBUFFER,null)}var Wh=class{close(){if(this.g){const n=this.h;n.deleteProgram(this.g),n.deleteShader(this.C),n.deleteShader(this.v)}this.l&&this.h.deleteFramebuffer(this.l),this.j&&this.j.close(),this.m&&this.m.close()}};function Ci(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Dl(n){var e=Ci(n,1);if(!e){if(e=Ci(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);const i=Pr(n);var t=Og(n);if(rc(t,i,Ug(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=t[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function Ug(n){let e=Ci(n,2);if(!e){const t=Pr(n);e=Bg(n);const i=Dl(n),r=Ng(n);t.texImage2D(t.TEXTURE_2D,0,r,n.width,n.height,0,t.RED,t.FLOAT,i),Ul(n)}return e}function Pr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Bn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Ng(n){if(n=Pr(n),!ra)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))ra=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ra=n.R16F}return ra}function Og(n){return n.l||(n.l=new Wh),n.l}function Fg(n){(n=Pr(n)).texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST)}function Bg(n){const e=Pr(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=Ci(n,2);return t?e.bindTexture(e.TEXTURE_2D,t):(t=Bn(e.createTexture(),"Failed to create texture"),n.g.push(t),n.m=!0,e.bindTexture(e.TEXTURE_2D,t),Fg(n)),t}function Ul(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var ra,Ht=class{constructor(n,e,t,i,r,s){this.g=n,this.m=e,this.canvas=t,this.l=i,this.width=r,this.height=s,this.m&&--Lf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ga(){return!!Ci(this,0)}Ea(){return!!Ci(this,1)}M(){return!!Ci(this,2)}Ca(){return(e=Ci(n=this,0))||(e=Dl(n),e=new Uint8Array(e.map(t=>255*t)),n.g.push(e)),e;var n,e}za(){return Dl(this)}Z(){return Ug(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Pr(this),r=Og(this);i.activeTexture(i.TEXTURE1),t=Bn(i.createTexture(),"Failed to create texture"),i.bindTexture(i.TEXTURE_2D,t),Fg(this);const s=Ng(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),rc(r,i,t),zh(r,i,!1,()=>{Bg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ul(this)}),Vh(r),Ul(this)}}n.push(t)}return new Ht(n,this.M(),this.canvas,this.l,this.width,this.height)}close(){this.m&&Pr(this).deleteTexture(Ci(this,2)),Lf=-1}};Ht.prototype.close=Ht.prototype.close,Ht.prototype.clone=Ht.prototype.clone,Ht.prototype.getAsWebGLTexture=Ht.prototype.Z,Ht.prototype.getAsFloat32Array=Ht.prototype.za,Ht.prototype.getAsUint8Array=Ht.prototype.Ca,Ht.prototype.hasWebGLTexture=Ht.prototype.M,Ht.prototype.hasFloat32Array=Ht.prototype.Ea,Ht.prototype.hasUint8Array=Ht.prototype.Ga;var Lf=250;const IS={color:"white",lineWidth:4,radius:6};function tl(n){return{...IS,fillColor:(n=n||{}).color,...n}}function wi(n,e){return n instanceof Function?n(e):n}function Cf(n,e,t){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),n))}function nl(n){if(!n.g)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return n.g}var Cn=class{constructor(n){(n instanceof CanvasRenderingContext2D||n instanceof OffscreenCanvasRenderingContext2D)&&(this.g=n)}wa(n,e){if(n){var t=nl(this);e=tl(e),t.save();var i=t.canvas,r=0;for(const s of n)t.fillStyle=wi(e.fillColor,{index:r,from:s}),t.strokeStyle=wi(e.color,{index:r,from:s}),t.lineWidth=wi(e.lineWidth,{index:r,from:s}),(n=new Path2D).arc(s.x*i.width,s.y*i.height,wi(e.radius,{index:r,from:s}),0,2*Math.PI),t.fill(n),t.stroke(n),++r;t.restore()}}va(n,e,t){if(n&&e){var i=nl(this);t=tl(t),i.save();var r=i.canvas,s=0;for(const o of e){i.beginPath(),e=n[o.start];const a=n[o.end];e&&a&&(i.strokeStyle=wi(t.color,{index:s,from:e,to:a}),i.lineWidth=wi(t.lineWidth,{index:s,from:e,to:a}),i.moveTo(e.x*r.width,e.y*r.height),i.lineTo(a.x*r.width,a.y*r.height)),++s,i.stroke()}i.restore()}}ua(n,e){const t=nl(this);e=tl(e),t.save(),t.beginPath(),t.lineWidth=wi(e.lineWidth,{}),t.strokeStyle=wi(e.color,{}),t.fillStyle=wi(e.fillColor,{}),t.moveTo(n.originX,n.originY),t.lineTo(n.originX+n.width,n.originY),t.lineTo(n.originX+n.width,n.originY+n.height),t.lineTo(n.originX,n.originY+n.height),t.lineTo(n.originX,n.originY),t.stroke(),t.fill(),t.restore()}close(){var n,e;(n=this.h)==null||n.close(),this.h=void 0,(e=this.l)==null||e.close(),this.l=void 0}};function li(n,e){switch(e){case 0:return n.g.find(t=>t instanceof ImageData);case 1:return n.g.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function kg(n){var e=li(n,0);if(!e){e=Ir(n);const t=Xh(n),i=new Uint8Array(n.width*n.height*4);rc(t,e,_a(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),Vh(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(e)}return e}function _a(n){let e=li(n,2);if(!e){const t=Ir(n);e=va(n);const i=li(n,1)||kg(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),Ws(n)}return e}function Ir(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=Bn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Xh(n){return n.l||(n.l=new Wh),n.l}function Gg(n){(n=Ir(n)).texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)}function va(n){const e=Ir(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=li(n,2);return t?e.bindTexture(e.TEXTURE_2D,t):(t=Bn(e.createTexture(),"Failed to create texture"),n.g.push(t),n.m=!0,e.bindTexture(e.TEXTURE_2D,t),Gg(n)),t}function Ws(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function Pf(n){const e=Ir(n);return zh(Xh(n),e,!0,()=>function(t,i){const r=t.canvas;if(r.width===t.width&&r.height===t.height)return i();const s=r.width,o=r.height;return r.width=t.width,r.height=t.height,t=i(),r.width=s,r.height=o,t}(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}Cn.prototype.close=Cn.prototype.close,Cn.prototype.drawBoundingBox=Cn.prototype.ua,Cn.prototype.drawConnectors=Cn.prototype.va,Cn.prototype.drawLandmarks=Cn.prototype.wa,Cn.lerp=function(n,e,t,i,r){return Cf(i*(1-(n-e)/(t-e))+r*(1-(t-n)/(t-e)),i,r)},Cn.clamp=Cf;var zt=class{constructor(n,e,t,i,r,s,o){this.g=n,this.j=e,this.m=t,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--If===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Fa(){return!!li(this,0)}ga(){return!!li(this,1)}M(){return!!li(this,2)}Ba(){return kg(this)}Aa(){var n=li(this,1);return n||(_a(this),va(this),n=Pf(this),Ws(this),this.g.push(n),this.j=!0),n}Z(){return _a(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Ir(this),r=Xh(this);i.activeTexture(i.TEXTURE1),t=Bn(i.createTexture(),"Failed to create texture"),i.bindTexture(i.TEXTURE_2D,t),Gg(this),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),rc(r,i,t),zh(r,i,!1,()=>{va(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ws(this)}),Vh(r),Ws(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);_a(this),va(this),t=Pf(this),Ws(this)}n.push(t)}return new zt(n,this.ga(),this.M(),this.canvas,this.l,this.width,this.height)}close(){this.j&&li(this,1).close(),this.m&&Ir(this).deleteTexture(li(this,2)),If=-1}};zt.prototype.close=zt.prototype.close,zt.prototype.clone=zt.prototype.clone,zt.prototype.getAsWebGLTexture=zt.prototype.Z,zt.prototype.getAsImageBitmap=zt.prototype.Aa,zt.prototype.getAsImageData=zt.prototype.Ba,zt.prototype.hasWebGLTexture=zt.prototype.M,zt.prototype.hasImageBitmap=zt.prototype.ga,zt.prototype.hasImageData=zt.prototype.Fa;var If=250;function ni(...n){return n.map(([e,t])=>({start:e,end:t}))}const DS=function(n){return class extends n{Ma(){this.i._registerModelResourcesGraphService()}}}((Df=class{constructor(n,e){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:typeof OffscreenCanvas>"u"||Ig()?(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas")):this.i.canvas=new OffscreenCanvas(1,1)}async initializeGraph(n){const e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){const t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Te(this,i||"input_audio",s=>{Te(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,n,e,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}aa(n){Ai(this,"__graph_config__",e=>{n(e)}),Te(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),Te(this,i,o=>{this.i._addAudioToInputStream(this.g,e,t,o,r)})}addGpuBufferToStream(n,e,t){Te(this,e,i=>{const[r,s]=Sf(this,n,i);this.i._addBoundTextureToStream(i,r,s,t)})}addBoolToStream(n,e,t){Te(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Te(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Te(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Te(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addStringToStream(n,e,t){Te(this,e,i=>{Te(this,n,r=>{this.i._addStringToInputStream(r,i,t)})})}addStringRecordToStream(n,e,t){Te(this,e,i=>{Tf(this,Object.keys(n),r=>{Tf(this,Object.values(n),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Te(this,t,r=>{Te(this,e,s=>{const o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(n,e){Te(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,t)})}addDoubleVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,t)})}addFloatVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,t)})}addIntVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,t)})}addStringVectorToStream(n,e,t){Te(this,e,i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Te(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,t)})}addBoolToInputSidePacket(n,e){Te(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Te(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Te(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Te(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Te(this,e,t=>{Te(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Te(this,t,i=>{Te(this,e,r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Te(this,e,t=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Te(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){Ai(this,n,e),Te(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){pr(this,n,e),Te(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){Ai(this,n,e),Te(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){pr(this,n,e),Te(this,n,t=>{this.i._attachIntVectorListener(t)})}attachDoubleListener(n,e){Ai(this,n,e),Te(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){pr(this,n,e),Te(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){Ai(this,n,e),Te(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){pr(this,n,e),Te(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){Ai(this,n,e),Te(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){pr(this,n,e),Te(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){Ai(this,n,e),Te(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){pr(this,n,e),Te(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ai(this,n,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Te(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Df{get ca(){return this.i}pa(n,e,t){Te(this,e,i=>{const[r,s]=Sf(this,n,i);this.ca._addBoundTextureAsImageToStream(i,r,s,t)})}X(n,e){Ai(this,n,e),Te(this,n,t=>{this.ca._attachImageListener(t)})}Y(n,e){pr(this,n,e),Te(this,n,t=>{this.ca._attachImageVectorListener(t)})}}));var Df,ii=class extends DS{};async function Je(n,e,t){return async function(i,r,s,o){return CS(i,r,s,o)}(n,t.canvas??(typeof OffscreenCanvas>"u"||Ig()?document.createElement("canvas"):void 0),e,t)}function Hg(n,e,t,i){if(n.da){const s=new $m;if(t!=null&&t.regionOfInterest){if(!n.na)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");Oe(s,1,(r.left+r.right)/2),Oe(s,2,(r.top+r.bottom)/2),Oe(s,4,r.right-r.left),Oe(s,3,r.bottom-r.top)}else Oe(s,1,.5),Oe(s,2,.5),Oe(s,4,1),Oe(s,3,1);if(t!=null&&t.rotationDegrees){if((t==null?void 0:t.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Oe(s,5,-Math.PI*t.rotationDegrees/180),(t==null?void 0:t.rotationDegrees)%180!=0){const[o,a]=e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:[e.width,e.height];t=qt(s,3)*a/o,r=qt(s,4)*o/a,Oe(s,4,t),Oe(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.da,i)}n.g.pa(e,n.ma,i??performance.now()),n.finishProcessing()}function ri(n,e,t){var i;if((i=n.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Hg(n,e,t,n.N+1)}function ki(n,e,t,i){var r;if(!((r=n.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Hg(n,e,t,i)}function ho(n,e,t){var i=e.data;const r=e.width,s=r*(e=e.height);if((i instanceof Uint8Array||i instanceof Float32Array)&&i.length!==s)throw Error("Unsupported channel count: "+i.length/s);return n=new Ht([i],!1,n.g.i.canvas,n.U,r,e),t?n.clone():n}var Tn=class extends Il{constructor(n,e,t,i){super(n),this.g=n,this.ma=e,this.da=t,this.na=i,this.U=new Wh}l(n,e=!0){if("runningMode"in n&&co(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e)}close(){this.U.close(),super.close()}};Tn.prototype.close=Tn.prototype.close;var wn=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect_in",!1),this.j={detections:[]},this.h=new Nh,n=new Tt,Pe(this.h,0,1,n),Oe(this.h,2,.5),Oe(this.h,3,.3)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&Oe(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Oe(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,e){return this.j={detections:[]},ri(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},ki(this,n,t,e),this.j}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect_in"),pt(n,"detections");const e=new Hn;ei(e,dS,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect_in"),ot(t,"DETECTIONS:detections"),t.o(e),Wn(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Xm(s),this.j.detections.push(Lg(i));we(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};wn.prototype.detectForVideo=wn.prototype.G,wn.prototype.detect=wn.prototype.F,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=async function(n,e){return Je(wn,n,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(n,e){return Je(wn,n,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(n,e){return Je(wn,n,e)};var zg=ni([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Vg=ni([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Wg=ni([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),US=ni([474,475],[475,476],[476,477],[477,474]),Xg=ni([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),jg=ni([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),NS=ni([469,470],[470,471],[471,472],[472,469]),qg=ni([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),OS=[...zg,...Vg,...Wg,...Xg,...jg,...qg],FS=ni([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Uf(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Et=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,this.h=new cg,n=new Tt,Pe(this.h,0,1,n),this.v=new pS,Pe(this.h,0,3,this.v),this.u=new Nh,Pe(this.h,0,2,this.u),pi(this.u,4,1),Oe(this.u,2,.5),Oe(this.v,2,.5),Oe(this.h,4,.5)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"numFaces"in n&&pi(this.u,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Oe(this.u,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Oe(this.v,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,e){return Uf(this),ri(this,n,e),this.j}G(n,e,t){return Uf(this),ki(this,n,t,e),this.j}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect"),pt(n,"face_landmarks");const e=new Hn;ei(e,mS,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect"),ot(t,"NORM_LANDMARKS:face_landmarks"),t.o(e),Wn(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=nc(s),this.j.faceLandmarks.push(kh(i));we(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{we(this,i)}),this.outputFaceBlendshapes&&(pt(n,"blendshapes"),ot(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Dh(s),this.j.faceBlendshapes.push(Rg(i.g()??[]));we(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{we(this,i)})),this.outputFacialTransformationMatrixes&&(pt(n,"face_geometry"),ot(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=et(fS(s),Zm,2))&&this.j.facialTransformationMatrixes.push({rows:fi(Fn(i,1))??0,columns:fi(Fn(i,2))??0,data:is(i,3,ir)??[]});we(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{we(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Et.prototype.detectForVideo=Et.prototype.G,Et.prototype.detect=Et.prototype.F,Et.prototype.setOptions=Et.prototype.o,Et.createFromModelPath=function(n,e){return Je(Et,n,{baseOptions:{modelAssetPath:e}})},Et.createFromModelBuffer=function(n,e){return Je(Et,n,{baseOptions:{modelAssetBuffer:e}})},Et.createFromOptions=function(n,e){return Je(Et,n,e)},Et.FACE_LANDMARKS_LIPS=zg,Et.FACE_LANDMARKS_LEFT_EYE=Vg,Et.FACE_LANDMARKS_LEFT_EYEBROW=Wg,Et.FACE_LANDMARKS_LEFT_IRIS=US,Et.FACE_LANDMARKS_RIGHT_EYE=Xg,Et.FACE_LANDMARKS_RIGHT_EYEBROW=jg,Et.FACE_LANDMARKS_RIGHT_IRIS=NS,Et.FACE_LANDMARKS_FACE_OVAL=qg,Et.FACE_LANDMARKS_CONTOURS=OS,Et.FACE_LANDMARKS_TESSELATION=FS;var oi=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect",!0),this.j=new hg,n=new Tt,Pe(this.j,0,1,n)}get baseOptions(){return et(this.j,Tt,1)}set baseOptions(n){Pe(this.j,0,1,n)}o(n){return super.l(n)}Pa(n,e,t){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:t,ri(this,n,i??{}),!this.h)return this.u}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect"),pt(n,"stylized_image");const e=new Hn;ei(e,gS,this.j);const t=new ln;Vn(t,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect"),ot(t,"STYLIZED_IMAGE:stylized_image"),t.o(e),Wn(n,t),this.g.X("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=o[3*h],l[4*h+1]=o[3*h+1],l[4*h+2]=o[3*h+2],l[4*h+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new zt([o],!1,!1,this.g.i.canvas,this.U,a,i),this.u=s=s?a.clone():a,this.h&&this.h(s),we(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};oi.prototype.stylize=oi.prototype.Pa,oi.prototype.setOptions=oi.prototype.o,oi.createFromModelPath=function(n,e){return Je(oi,n,{baseOptions:{modelAssetPath:e}})},oi.createFromModelBuffer=function(n,e){return Je(oi,n,{baseOptions:{modelAssetBuffer:e}})},oi.createFromOptions=function(n,e){return Je(oi,n,e)};var Yg=ni([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Nf(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function Of(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function Ff(n,e=!0){const t=[];for(const r of n){var i=Dh(r);n=[];for(const s of i.g())i=e&&Fn(s,1)!=null?fi(Fn(s,1)):-1,n.push({score:qt(s,2)??0,index:i,categoryName:Gn(s,3)??""??"",displayName:Gn(s,4)??""??""});t.push(n)}return t}var yn=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],this.v=new xg,n=new Tt,Pe(this.v,0,1,n),this.C=new Oh,Pe(this.v,0,2,this.C),this.u=new gg,Pe(this.C,0,3,this.u),this.h=new pg,Pe(this.C,0,2,this.h),this.j=new _S,Pe(this.v,0,3,this.j),Oe(this.h,2,.5),Oe(this.C,4,.5),Oe(this.u,2,.5)}get baseOptions(){return et(this.v,Tt,1)}set baseOptions(n){Pe(this.v,0,1,n)}o(n){var i,r,s,o;if(pi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&Oe(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.C,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Oe(this.u,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new Qr,t=Pl(n.cannedGesturesClassifierOptions,(i=et(this.j,Qr,3))==null?void 0:i.h());Pe(e,0,2,t),Pe(this.j,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&((r=et(this.j,Qr,3))==null||r.g());return n.customGesturesClassifierOptions?(Pe(e=new Qr,0,2,t=Pl(n.customGesturesClassifierOptions,(s=et(this.j,Qr,4))==null?void 0:s.h())),Pe(this.j,0,4,e)):n.customGesturesClassifierOptions===void 0&&((o=et(this.j,Qr,4))==null||o.g()),this.l(n)}Ka(n,e){return Nf(this),ri(this,n,e),Of(this)}La(n,e,t){return Nf(this),ki(this,n,t,e),Of(this)}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect"),pt(n,"hand_gestures"),pt(n,"hand_landmarks"),pt(n,"world_hand_landmarks"),pt(n,"handedness");const e=new Hn;ei(e,yS,this.v);const t=new ln;Vn(t,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect"),ot(t,"HAND_GESTURES:hand_gestures"),ot(t,"LANDMARKS:hand_landmarks"),ot(t,"WORLD_LANDMARKS:world_hand_landmarks"),ot(t,"HANDEDNESS:handedness"),t.o(e),Wn(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=nc(s);const o=[];for(const a of Ni(i,Ym,1))o.push({x:qt(a,1)??0,y:qt(a,2)??0,z:qt(a,3)??0});this.landmarks.push(o)}we(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{we(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Uh(s);const o=[];for(const a of Ni(i,jm,1))o.push({x:qt(a,1)??0,y:qt(a,2)??0,z:qt(a,3)??0});this.worldLandmarks.push(o)}we(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{we(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Ff(i,!1)),we(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{we(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Ff(i)),we(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function Bf(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}yn.prototype.recognizeForVideo=yn.prototype.La,yn.prototype.recognize=yn.prototype.Ka,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(n,e){return Je(yn,n,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(n,e){return Je(yn,n,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(n,e){return Je(yn,n,e)},yn.HAND_CONNECTIONS=Yg;var En=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],this.j=new Oh,n=new Tt,Pe(this.j,0,1,n),this.u=new gg,Pe(this.j,0,3,this.u),this.h=new pg,Pe(this.j,0,2,this.h),pi(this.h,3,1),Oe(this.h,2,.5),Oe(this.u,2,.5),Oe(this.j,4,.5)}get baseOptions(){return et(this.j,Tt,1)}set baseOptions(n){Pe(this.j,0,1,n)}o(n){return"numHands"in n&&pi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&Oe(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.j,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Oe(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ri(this,n,e),Bf(this)}G(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ki(this,n,t,e),Bf(this)}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect"),pt(n,"hand_landmarks"),pt(n,"world_hand_landmarks"),pt(n,"handedness");const e=new Hn;ei(e,xS,this.j);const t=new ln;Vn(t,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect"),ot(t,"LANDMARKS:hand_landmarks"),ot(t,"WORLD_LANDMARKS:world_hand_landmarks"),ot(t,"HANDEDNESS:handedness"),t.o(e),Wn(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=nc(s),this.landmarks.push(kh(i));we(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{we(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Uh(s),this.worldLandmarks.push(Cg(i));we(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{we(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const c of i){i=Dh(c);const l=[];for(const h of i.g())l.push({score:qt(h,2)??0,index:fi(Fn(h,1))??-1,categoryName:Gn(h,3)??""??"",displayName:Gn(h,4)??""??""});a.push(l)}o.call(s,...a),we(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};En.prototype.detectForVideo=En.prototype.G,En.prototype.detect=En.prototype.F,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(n,e){return Je(En,n,{baseOptions:{modelAssetPath:e}})},En.createFromModelBuffer=function(n,e){return Je(En,n,{baseOptions:{modelAssetBuffer:e}})},En.createFromOptions=function(n,e){return Je(En,n,e)},En.HAND_CONNECTIONS=Yg;var Rn=class extends Tn{constructor(n,e){super(new ii(n,e),"input_image","norm_rect",!0),this.j={classifications:[]},this.h=new yg,n=new Tt,Pe(this.h,0,1,n)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){var e=Pl(n,et(this.h,ic,2));return Pe(this.h,0,2,e),this.l(n)}sa(n,e){return this.j={classifications:[]},ri(this,n,e),this.j}ta(n,e,t){return this.j={classifications:[]},ki(this,n,t,e),this.j}m(){var n=new gn;gt(n,"input_image"),gt(n,"norm_rect"),pt(n,"classifications");const e=new Hn;ei(e,ES,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ut(t,"IMAGE:input_image"),ut(t,"NORM_RECT:norm_rect"),ot(t,"CLASSIFICATIONS:classifications"),t.o(e),Wn(n,t),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:Ni(s,rS,1).map(a=>{var c;return Rg(((c=et(a,Ih,4))==null?void 0:c.g())??[],fi(Fn(a,2)),Gn(a,3)??"")})};return Ia(ys(s,2))!=null&&(o.timestampMs=fi(Ia(ys(s,2)))),o}(oS(i)),we(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Rn.prototype.classifyForVideo=Rn.prototype.ta,Rn.prototype.classify=Rn.prototype.sa,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(n,e){return Je(Rn,n,{baseOptions:{modelAssetPath:e}})},Rn.createFromModelBuffer=function(n,e){return Je(Rn,n,{baseOptions:{modelAssetBuffer:e}})},Rn.createFromOptions=function(n,e){return Je(Rn,n,e)};var Mn=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect",!0),this.h=new Eg,this.embeddings={embeddings:[]},n=new Tt,Pe(this.h,0,1,n)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){var e=this.h,t=et(this.h,vf,2);return t=t?t.clone():new vf,n.l2Normalize!==void 0?co(t,1,n.l2Normalize):"l2Normalize"in n&&lt(t,1),n.quantize!==void 0?co(t,2,n.quantize):"quantize"in n&&lt(t,2),Pe(e,0,2,t),this.l(n)}xa(n,e){return ri(this,n,e),this.embeddings}ya(n,e,t){return ki(this,n,t,e),this.embeddings}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect"),pt(n,"embeddings_out");const e=new Hn;ei(e,MS,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect"),ot(t,"EMBEDDINGS:embeddings_out"),t.o(e),Wn(n,t),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=hS(i),this.embeddings=function(s){return{embeddings:Ni(s,cS,1).map(o=>{var c,l;const a={headIndex:fi(Fn(o,3))??-1,headName:Gn(o,4)??""??""};if(gm(o,Ll,Jc(o,1))!==void 0)o=is(o=et(o,Ll,Jc(o,1)),1,ir),a.floatEmbedding=o;else{const h=new Uint8Array(0);a.quantizedEmbedding=((l=(c=et(o,aS,Jc(o,2)))==null?void 0:c.oa())==null?void 0:l.qa())??h}return a}),timestampMs:fi(Ia(ys(s,2)))}}(i),we(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Mn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=Ef(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=Ef(yf(n.quantizedEmbedding),yf(e.quantizedEmbedding))}return n},Mn.prototype.embedForVideo=Mn.prototype.ya,Mn.prototype.embed=Mn.prototype.xa,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(n,e){return Je(Mn,n,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(n,e){return Je(Mn,n,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(n,e){return Je(Mn,n,e)};var Nl=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){var n,e;(n=this.confidenceMasks)==null||n.forEach(t=>{t.close()}),(e=this.categoryMask)==null||e.close()}};function kf(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function Gf(n){try{const e=new Nl(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return e;n.j(e)}finally{Hh(n)}}Nl.prototype.close=Nl.prototype.close;var hn=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Fh,this.v=new Mg,Pe(this.h,0,3,this.v),n=new Tt,Pe(this.h,0,1,n)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?lt(this.h,2,yo(n.displayNamesLocale)):"displayNamesLocale"in n&&lt(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}V(){(function(n){var t,i;const e=Ni(n.aa(),ln,1).filter(r=>(Gn(r,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(t=et(e[0],Hn,7))==null?void 0:t.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{n.u[Number(s)]=Gn(r,1)??""})})(this)}ba(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,kf(this),ri(this,n,i),Gf(this)}Na(n,e,t,i){const r=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,kf(this),ki(this,n,r,e),Gf(this)}Da(){return this.u}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect");const e=new Hn;ei(e,Tg,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect"),t.o(e),Wn(n,t),Gh(this,n),this.outputConfidenceMasks&&(pt(n,"confidence_masks"),ot(t,"CONFIDENCE_MASKS:confidence_masks"),lo(this,"confidence_masks"),this.g.Y("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ho(this,s,!this.j)),we(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],we(this,i)})),this.outputCategoryMask&&(pt(n,"category_mask"),ot(t,"CATEGORY_MASK:category_mask"),lo(this,"category_mask"),this.g.X("category_mask",(i,r)=>{this.categoryMask=ho(this,i,!this.j),we(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,we(this,i)})),pt(n,"quality_scores"),ot(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,we(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};hn.prototype.getLabels=hn.prototype.Da,hn.prototype.segmentForVideo=hn.prototype.Na,hn.prototype.segment=hn.prototype.ba,hn.prototype.setOptions=hn.prototype.o,hn.createFromModelPath=function(n,e){return Je(hn,n,{baseOptions:{modelAssetPath:e}})},hn.createFromModelBuffer=function(n,e){return Je(hn,n,{baseOptions:{modelAssetBuffer:e}})},hn.createFromOptions=function(n,e){return Je(hn,n,e)};var Ol=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){var n,e;(n=this.confidenceMasks)==null||n.forEach(t=>{t.close()}),(e=this.categoryMask)==null||e.close()}};Ol.prototype.close=Ol.prototype.close;var BS=class extends me{constructor(n){super(n)}},Ms=[0,bt,-2],kS=[0,Di,-3,Lt],sc=[0,Di,-3,Lt,Di,-1],Kg=[0,sc],GS=[0,Kg,Ms],HS=[0,sc,Ms],Zg=[0,sc,bt,-1],zS=[0,Zg,Ms],VS=[0,Di,-3,Lt,Ms,-1],WS=[0,Di,-3,Lt,mi],il=class extends me{constructor(n){super(n)}},Hf=[0,Di,-1,Lt],$g=class extends me{constructor(){super()}};$g.A=[1];var zf=class extends me{constructor(n){super(n)}},Fl=[1,2,3,4,5,6,7,8,9,10,14,15],XS=[0,Fl,ft,sc,ft,HS,ft,Kg,ft,GS,ft,Hf,ft,WS,ft,kS,ft,[0,dt,Di,-2,Lt,bt,Lt,-1,2,Di,Ms],ft,Zg,ft,zS,Di,Ms,dt,ft,VS,ft,[0,It,Hf]],jS=[0,dt,bt,-1,Lt],Bl=class extends me{constructor(){super()}};Bl.A=[1],Bl.prototype.g=Ph([0,It,XS,dt,jS]);var ai=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Fh,this.v=new Mg,Pe(this.h,0,3,this.v),n=new Tt,Pe(this.h,0,1,n)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}ba(n,e,t,i){const r=typeof t!="function"?t:{};this.j=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.N+1,i=new Bl;const s=new zf;var o=new BS;if(pi(o,1,255),Pe(s,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new il;co(a,3,!0),Oe(a,1,e.keypoint.x),Oe(a,2,e.keypoint.y),$s(s,5,Fl,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new $g,e.scribble))co(e=new il,3,!0),Oe(e,1,a.x),Oe(e,2,a.y),Rl(o,il,e);$s(s,15,Fl,o)}Rl(i,zf,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",t),ri(this,n,r);e:{try{const l=new Ol(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{Hh(this)}c=void 0}return c}m(){var n=new gn;gt(n,"image_in"),gt(n,"roi_in"),gt(n,"norm_rect_in");const e=new Hn;ei(e,Tg,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),ut(t,"IMAGE:image_in"),ut(t,"ROI:roi_in"),ut(t,"NORM_RECT:norm_rect_in"),t.o(e),Wn(n,t),Gh(this,n),this.outputConfidenceMasks&&(pt(n,"confidence_masks"),ot(t,"CONFIDENCE_MASKS:confidence_masks"),lo(this,"confidence_masks"),this.g.Y("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ho(this,s,!this.j)),we(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],we(this,i)})),this.outputCategoryMask&&(pt(n,"category_mask"),ot(t,"CATEGORY_MASK:category_mask"),lo(this,"category_mask"),this.g.X("category_mask",(i,r)=>{this.categoryMask=ho(this,i,!this.j),we(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,we(this,i)})),pt(n,"quality_scores"),ot(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,we(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ai.prototype.segment=ai.prototype.ba,ai.prototype.setOptions=ai.prototype.o,ai.createFromModelPath=function(n,e){return Je(ai,n,{baseOptions:{modelAssetPath:e}})},ai.createFromModelBuffer=function(n,e){return Je(ai,n,{baseOptions:{modelAssetBuffer:e}})},ai.createFromOptions=function(n,e){return Je(ai,n,e)};var Ln=class extends Tn{constructor(n,e){super(new ii(n,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},this.h=new Bh,n=new Tt,Pe(this.h,0,1,n)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?lt(this.h,2,yo(n.displayNamesLocale)):"displayNamesLocale"in n&&lt(this.h,2),n.maxResults!==void 0?pi(this.h,3,n.maxResults):"maxResults"in n&&lt(this.h,3),n.scoreThreshold!==void 0?Oe(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&lt(this.h,4),n.categoryAllowlist!==void 0?Na(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&lt(this.h,5),n.categoryDenylist!==void 0?Na(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&lt(this.h,6),this.l(n)}F(n,e){return this.j={detections:[]},ri(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},ki(this,n,t,e),this.j}m(){var n=new gn;gt(n,"input_frame_gpu"),gt(n,"norm_rect"),pt(n,"detections");const e=new Hn;ei(e,TS,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.ObjectDetectorGraph"),ut(t,"IMAGE:input_frame_gpu"),ut(t,"NORM_RECT:norm_rect"),ot(t,"DETECTIONS:detections"),t.o(e),Wn(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Xm(s),this.j.detections.push(Lg(i));we(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{we(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ln.prototype.detectForVideo=Ln.prototype.G,Ln.prototype.detect=Ln.prototype.F,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=async function(n,e){return Je(Ln,n,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(n,e){return Je(Ln,n,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(n,e){return Je(Ln,n,e)};function Vf(n){n.landmarks=[],n.worldLandmarks=[],n.v=void 0}function Wf(n){try{const e=new class{constructor(t,i,r){this.landmarks=t,this.worldLandmarks=i,this.g=r}close(){var t;(t=this.g)==null||t.forEach(i=>{i.close()})}}(n.landmarks,n.worldLandmarks,n.v);if(!n.u)return e;n.u(e)}finally{Hh(n)}}var sn=class extends Tn{constructor(n,e){super(new ii(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,this.h=new wg,n=new Tt,Pe(this.h,0,1,n),this.C=new AS,Pe(this.h,0,3,this.C),this.j=new bS,Pe(this.h,0,2,this.j),pi(this.j,4,1),Oe(this.j,2,.5),Oe(this.C,2,.5),Oe(this.h,4,.5)}get baseOptions(){return et(this.h,Tt,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"numPoses"in n&&pi(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Oe(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Oe(this.C,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:t,Vf(this),ri(this,n,i),Wf(this)}G(n,e,t,i){const r=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:i,Vf(this),ki(this,n,r,e),Wf(this)}m(){var n=new gn;gt(n,"image_in"),gt(n,"norm_rect"),pt(n,"normalized_landmarks"),pt(n,"world_landmarks"),pt(n,"segmentation_masks");const e=new Hn;ei(e,RS,this.h);const t=new ln;Vn(t,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ut(t,"IMAGE:image_in"),ut(t,"NORM_RECT:norm_rect"),ot(t,"NORM_LANDMARKS:normalized_landmarks"),ot(t,"WORLD_LANDMARKS:world_landmarks"),t.o(e),Wn(n,t),Gh(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=nc(s),this.landmarks.push(kh(i));we(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],we(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Uh(s),this.worldLandmarks.push(Cg(i));we(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],we(this,i)}),this.outputSegmentationMasks&&(ot(t,"SEGMENTATION_MASK:segmentation_masks"),lo(this,"segmentation_masks"),this.g.Y("segmentation_masks",(i,r)=>{this.v=i.map(s=>ho(this,s,!this.u)),we(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.v=[],we(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};sn.prototype.detectForVideo=sn.prototype.G,sn.prototype.detect=sn.prototype.F,sn.prototype.setOptions=sn.prototype.o,sn.createFromModelPath=function(n,e){return Je(sn,n,{baseOptions:{modelAssetPath:e}})},sn.createFromModelBuffer=function(n,e){return Je(sn,n,{baseOptions:{modelAssetBuffer:e}})},sn.createFromOptions=function(n,e){return Je(sn,n,e)},sn.POSE_CONNECTIONS=ni([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);const qS=["NOSE","LEFT_EYE_INNER","LEFT_EYE","LEFT_EYE_OUTER","RIGHT_EYE_INNER","RIGHT_EYE","RIGHT_EYE_OUTER","LEFT_EAR","RIGHT_EAR","MOUTH_LEFT","MOUTH_RIGHT","LEFT_SHOULDER","RIGHT_SHOULDER","LEFT_ELBOW","RIGHT_ELBOW","LEFT_WRIST","RIGHT_WRIST","LEFT_PINKY","RIGHT_PINKY","LEFT_INDEX","RIGHT_INDEX","LEFT_THUMB","RIGHT_THUMB","LEFT_HIP","RIGHT_HIP","LEFT_KNEE","RIGHT_KNEE","LEFT_ANKLE","RIGHT_ANKLE","LEFT_HEEL","RIGHT_HEEL","LEFT_FOOT_INDEX","RIGHT_FOOT_INDEX"];new C(0,-1,0),new C(-1,0,0),new C(-1,0,0),new C(0,-1,0),new C(1,0,0),new C(1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,-1,0),new C(0,-1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(1,0,0),new C(0,-1,0),new C(0,-1,0);function Qt(n,e,t){const i=YS(e,n);return ZS(i)}function YS(n,e){return{x:n.x-e.x,y:n.y-e.y,z:n.z-e.z}}function KS(n){return Math.sqrt(n.x**2+n.y**2+n.z**2)}function ZS(n){const e=KS(n);return{x:n.x/e,y:n.y/e,z:n.z/e}}function sa(n,e){return{x:(n.x+e.x)/2,y:(n.y+e.y)/2,z:(n.z+e.z)/2}}function $S(n){let e=sa(n.LEFT_HIP,n.RIGHT_HIP),t=sa(n.LEFT_SHOULDER,n.RIGHT_SHOULDER);const i=sa(e,t),r=Qt(n.LEFT_SHOULDER,n.LEFT_ELBOW),s=Qt(n.LEFT_ELBOW,n.LEFT_WRIST),o=Qt(n.LEFT_WRIST,n.LEFT_PINKY),a=Qt(n.RIGHT_SHOULDER,n.RIGHT_ELBOW),c=Qt(n.RIGHT_ELBOW,n.RIGHT_WRIST),l=Qt(n.RIGHT_WRIST,n.RIGHT_PINKY),h=sa(n.NOSE,n.RIGHT_EYE_INNER),u=Qt(i,h),d=h,m=Qt(e,t),g=m,_=m,p=Qt(n.LEFT_HIP,n.LEFT_KNEE),f=Qt(n.LEFT_KNEE,n.LEFT_ANKLE),S=Qt(n.LEFT_ANKLE,n.LEFT_HEEL),y=Qt(n.LEFT_FOOT_INDEX,n.LEFT_HEEL),M=Qt(n.RIGHT_HIP,n.RIGHT_KNEE),b=Qt(n.RIGHT_KNEE,n.RIGHT_ANKLE),L=Qt(n.RIGHT_ANKLE,n.RIGHT_HEEL),A=Qt(n.RIGHT_FOOT_INDEX,n.RIGHT_HEEL);return{hip_point:e,arm_joint_L_1:r,arm_joint_L_2:s,arm_joint_L_3:o,arm_joint_R_1:a,arm_joint_R_2:c,arm_joint_R_3:l,neck_joint_1:u,neck_joint_2:d,torso_joint_1:m,torso_joint_2:g,torso_joint_3:_,leg_joint_L_1:p,leg_joint_L_2:f,leg_joint_L_3:S,leg_joint_R_1:M,leg_joint_R_2:b,leg_joint_R_3:L,leg_joint_L_5:y,leg_joint_R_5:A}}function JS(n){let e={};if(n&&n.worldLandmarks&&n.worldLandmarks[0]){let t={};qS.forEach((i,r)=>{t[i]=n.worldLandmarks[0][r]}),e=$S(t)}return e}const xr=document.getElementById("video"),Xs=document.getElementById("drawingutils"),xa=Xs.getContext("2d"),Xf=new Cn(xa);let Jg,ya=!1;const jf="360px",qf="480px";let kl=[],Li,es,gr,Sn,Qs={},Gl={};const QS=()=>{var n;return!!((n=navigator.mediaDevices)!=null&&n.getUserMedia)},eT=async()=>{const n=await Vs.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");Jg=await sn.createFromOptions(n,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1})};let Yf=-1,Kf=[],oa=0,aa=null;const tT=10;function nT(n){let e=n.length,t=Array(33).fill().map(()=>({x:0,y:0,z:0})),i=Array(33).fill().map(()=>({x:0,y:0,z:0}));for(let r=0;r<n.length;r++){if(!n[r].landmarks[0]||n[r].landmarks[0].length<33){e--;continue}for(let s=0;s<n[r].landmarks[0].length;s++){let o=n[r].landmarks[0][s];t[s].x+=o.x,t[s].y+=o.y,t[s].z+=o.z}for(let s=0;s<n[r].worldLandmarks[0].length;s++){let o=n[r].worldLandmarks[0][s];i[s].x+=o.x,i[s].y+=o.y,i[s].z+=o.z}}for(let r=0;r<t.length;r++)t[r].x/=e,t[r].y/=e,t[r].z/=e;for(let r=0;r<i.length;r++)i[r].x/=e,i[r].y/=e,i[r].z/=e;return{landmarks:{0:t},worldLandmarks:{0:i}}}async function Qg(){Xs.style.height=jf,xr.style.height=jf,Xs.style.width=qf,xr.style.width=qf;let n=performance.now();Yf!==xr.currentTime&&(Yf=xr.currentTime,Jg.detectForVideo(xr,n,e=>{xa.save(),xa.clearRect(0,0,Xs.width,Xs.height);for(const t of e.landmarks)Xf.drawLandmarks(t,{radius:i=>Cn.lerp(i.z,-.15,.1,5,1)}),Xf.drawConnectors(t,sn.POSE_CONNECTIONS);Kf[oa]=e,aa||(aa=e),oa==tT&&(oa=0),oa++,aa=nT(Kf),Gl=JS(aa),xa.restore()})),ya===!0&&window.requestAnimationFrame(Qg)}function e_(){let n=Gl.hip_point;Sn&&n&&(Sn.position.x=(n.x+.4)*2,Sn.position.y=(n.y+.4)*2,Sn.position.z=(n.z+.4)*2,Sn.scale.x=12,Sn.scale.y=12,Sn.scale.z=12,Sn.updateWorldMatrix(!0,!0),Li.attach(Sn));for(let e of kl){e.position.copy(Qs[e.id][0]),e.quaternion.copy(Qs[e.id][1]),e.scale.copy(Qs[e.id][2]);const t=e.name,i=Gl[t];if(i==null)continue;let r=e.parent;Li.attach(e);let s=e.quaternion.clone(),o=e.quaternion.clone(),a=new C(0,1,0);a.applyQuaternion(o);let c=new Jn().setFromUnitVectors(a,new C(i.x,-i.y,-i.z));c.multiply(s),e.quaternion.copy(c),r.attach(e)}requestAnimationFrame(e_),gr.render(Li,es)}function iT(){if(QS()){ya===!0?ya=!1:ya=!0;const o={video:!0};navigator.mediaDevices.getUserMedia(o).then(a=>{xr.srcObject=a,xr.addEventListener("loadeddata",Qg)})}eT(),Li=new by,es=new on(75,window.innerWidth/window.innerHeight,.1,1e3);var n=new uE(10);Li.add(n);const e=new eE(11184810);Li.add(e);const t=new Op(15732735,1);t.position.set(0,1,0),Li.add(t),gr=new Rp,gr.setPixelRatio(window.devicePixelRatio),gr.setSize(window.innerWidth*.75,window.innerHeight*.75),document.getElementById("webgl").appendChild(gr.domElement),new qE(es,gr.domElement).target.set(0,0,0),es.position.set(0,5,15),es.lookAt(0,10,0);let r=new Up;new dE(r).load("RiggedFigureInBlender.gltf",function(o){Sn=o.scene,Sn.children[0].material=new Ny,Li.add(Sn),gr.render(Li,es);let c=Sn.children[0].children[0].children[1],l=c.children[0],h=l.children[0],u=h.children[1],d=u.children[0],m=d.children[0],g=h.children[2],_=g.children[0],p=_.children[0],f=h.children[0],S=f.children[0],y=c.children[1],M=y.children[0],b=M.children[0],L=b.children[0],A=c.children[2],k=A.children[0],x=k.children[0],w=x.children[0];kl=[u,d,m,g,_,p,f,S,c,l,h,y,M,b,L,A,k,x,w],Qs={};for(let W of kl)Qs[W.id]=[W.position.clone(),W.quaternion.clone(),W.scale.clone()]})}iT();e_();
