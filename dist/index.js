"use strict";var d=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var m=d(function(L,_){
var r=require('@stdlib/number-float64-base-to-float32/dist'),R=require('@stdlib/strided-base-reinterpret-complex64/dist');function A(e,a,q,p,o,x,y,i,t){var n,s,f,l,w,v,u,c;if(e<=0)return o;for(n=R(a,0),s=R(o,0),i=r(i),t=r(t),l=q*2,w=x*2,v=p*2,u=y*2,c=0;c<e;c++)f=r(i*n[v])+r(t*s[u]),s[u]=r(i*s[u])-r(t*n[v]),n[v]=f,f=r(i*n[v+1])+r(t*s[u+1]),s[u+1]=r(i*s[u+1])-r(t*n[v+1]),n[v+1]=f,v+=l,u+=w;return o}_.exports=A
});var b=d(function(M,O){
var E=require('@stdlib/strided-base-stride2offset/dist'),B=m();function C(e,a,q,p,o,x,y){var i=E(e,q),t=E(e,o);return B(e,a,q,i,p,o,t,x,y)}O.exports=C
});var k=d(function(P,h){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=b(),F=m();D(g,"ndarray",F);h.exports=g
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=k(),j,z=H(G(__dirname,"./native.js"));I(z)?j=J:j=z;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
