
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"253",
  "macros":[{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",0],8,16],",c=\"email merchantReference paymentMethod pspReference merchantReturnData merchantSig\".split(\" \"),a=b.split(\"\\x26\");for(n=0;n\u003Ca.length;n++)for(i=0;i\u003Cc.length;i++)if(-1\u003Ca[n].indexOf(c[i])){var d=a[n].indexOf(\"\\x3d\");a[n]=a[n].substring(0,d+1)+\"[... ]\";break}\"\"!=b\u0026\u0026(b=\"?\"+a.join(\"\\x26\"));return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var B=\"UA-119679599-1\",x=\"auto\",L=null;!function(){function h(a){Ua.set(a)}function q(a){}function x(){}function B(){}function F(a){}function L(a){}function Va(a){}function r(a,b,c,e){b[a]=function(){try{return e\u0026\u0026h(e),c.apply(this,arguments)}catch(u){throw u;}}}function da(a,b,c){\"none\"==b\u0026\u0026(b=\"\");var e=[],u=G(a);a=\"__utma\"==a?6:2;for(var d=0;d\u003Cu.length;d++){var g=(\"\"+u[d]).split(\".\");g.length\u003E=a\u0026\u0026e.push({hash:g[0],R:u[d],O:g})}if(0!=e.length)return 1==e.length?e[0]:ea(b,e)||ea(c,e)||\nea(null,e)||e[0]}function ea(a,b){var c;null==a?c=a=1:(c=M(a),a=M(0==a.indexOf(\".\")?a.substring(1):\".\"+a));for(var e=0;e\u003Cb.length;e++)if(b[e].hash==c||b[e].hash==a)return b[e]}function Wa(a){var b=a.get(v);if(a.get(z))return a=a.get(H),c=C(a+b,0),\"_ga\\x3d2.\"+N(c+\".\"+a+\"-\"+b);var c=C(b,0);return\"_ga\\x3d1.\"+N(c+\".\"+b)}function C(a,b){var c=new Date,e=p.navigator,d=e.plugins||[];a=[a,e.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b\u003Cd.length;++b)a.push(d[b].description);\nreturn M(a.join(\".\"))}function ta(a,b){if(b==k.location.hostname)return!1;for(var c=0;c\u003Ca.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0\u003C=b.indexOf(a[c]))return!0;return!1}function M(a){var b,c=1;if(a)for(c=0,b=a.length-1;0\u003C=b;b--){var e=a.charCodeAt(b);c=(c\u003C\u003C6\u0026268435455)+e+(e\u003C\u003C14);e=266338304\u0026c;c=0!=e?c^e\u003E\u003E21:c}return c}var R=function(a){this.w=a||[]};R.prototype.set=function(a){this.w[a]=!0};R.prototype.encode=function(){for(var a=[],b=0;b\u003Cthis.w.length;b++)this.w[b]\u0026\u0026(a[Math.floor(b\/\n6)]^=1\u003C\u003Cb%6);for(b=0;b\u003Ca.length;b++)a[b]=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\".charAt(a[b]||0);return a.join(\"\")+\"~\"};var Ua=new R,Xa=function(a){return a?a.replace(\/^[\\s\\xa0]+|[\\s\\xa0]+$\/g,\"\"):\"\"},ua=function(){for(var a=p.navigator.userAgent+(k.cookie?k.cookie:\"\")+(k.referrer?k.referrer:\"\"),b=a.length,c=p.history.length;0\u003Cc;)a+=c--^b++;return[S()^2147483647\u0026M(a),Math.round((new Date).getTime()\/1E3)].join(\".\")},Ya=function(){},N=function(a){return encodeURIComponent instanceof\nFunction?encodeURIComponent(a):(h(28),a)},T=function(a,b,c,e){try{a.addEventListener?a.addEventListener(b,c,!!e):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,c)}catch(u){h(27)}},va=\/^[\\w\\-:\/.?=\u0026%!]+$\/,U=function(){var a=\"\"+k.location.hostname;return 0==a.indexOf(\"www.\")?a.substring(4):a},wa=function(a,b){if(1==b.length\u0026\u0026null!=b[0]\u0026\u0026\"object\"==typeof b[0])return b[0];for(var c={},e=Math.min(a.length+1,b.length),d=0;d\u003Ce;d++){if(\"object\"==typeof b[d]){for(var f in b[d])b[d].hasOwnProperty(f)\u0026\u0026(c[f]=b[d][f]);break}d\u003C\na.length\u0026\u0026(c[a[d]]=b[d])}return c},D=function(){this.keys=[];this.values={};this.m={}};D.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[\":\"+a]=b:this.values[\":\"+a]=b};D.prototype.get=function(a){return this.m.hasOwnProperty(\":\"+a)?this.m[\":\"+a]:this.values[\":\"+a]};D.prototype.map=function(a){for(var b=0;b\u003Cthis.keys.length;b++){var c=this.keys[b],e=this.get(c);e\u0026\u0026a(c,e)}};var p=window,k=document,fa=window,G=function(a){var b=[],c=k.cookie.split(\";\");a=new RegExp(\"^\\\\s*\"+a+\"\\x3d\\\\s*(.*?)\\\\s*$\");\nfor(var e=0;e\u003Cc.length;e++){var d=c[e].match(a);d\u0026\u0026b.push(d[1])}return b},V=function(a,b,c,e,d,f){a:{var u=fa._gaUserPrefs;if(u\u0026\u0026u.ioo\u0026\u0026u.ioo()||d\u0026\u0026!0===fa[\"ga-disable-\"+d])var g=!0;else{try{var l=fa.external;if(l\u0026\u0026l._gaUserPrefs\u0026\u0026\"oo\"==l._gaUserPrefs){g=!0;break a}}catch(Vb){}g=!1}}if(g||Za.test(k.location.hostname)||\"\/\"==c\u0026\u0026$a.test(e))return!1;if(b\u0026\u00261200\u003Cb.length\u0026\u0026(b=b.substring(0,1200),h(24)),c=a+\"\\x3d\"+b+\"; path\\x3d\"+c+\"; \",f\u0026\u0026(c+=\"expires\\x3d\"+(new Date((new Date).getTime()+f)).toGMTString()+\n\"; \"),e\u0026\u0026\"none\"!=e\u0026\u0026(c+=\"domain\\x3d\"+e+\";\"),e=k.cookie,k.cookie=c,!(e=e!=k.cookie))a:{a=G(a);for(e=0;e\u003Ca.length;e++)if(b==a[e]){e=!0;break a}e=!1}return e},ha=function(a){return N(a).replace(\/\\(\/g,\"%28\").replace(\/\\)\/g,\"%29\")},$a=\/^(www\\.)?google(\\.com?)?(\\.[a-z]{2})?$\/,Za=\/(^|\\.)doubleclick\\.net$\/i,xa=function(){this.M=[]};xa.prototype.add=function(a){};var S=function(){return Math.round(2147483647*Math.random())},W=function(){this.data=new D},X=new D,ia=[];W.prototype.get=function(a){var b=ya(a),\nc=this.data.get(a);return b\u0026\u0026void 0==c\u0026\u0026(c=\"function\"==typeof b.defaultValue?b.defaultValue():b.defaultValue),b\u0026\u0026b.Z?b.Z(this,a,c):c};var m=function(a,b){return a=a.get(b),void 0==a?\"\":\"\"+a},ja=function(a,b){return a=a.get(b),void 0==a||\"\"===a?0:1*a};W.prototype.set=function(a,b,c){if(a)if(\"object\"==typeof a)for(var e in a)a.hasOwnProperty(e)\u0026\u0026za(this,e,a[e],c);else za(this,a,b,c)};var za=function(a,b,c,e){if(void 0!=c)switch(b){case A:ab.test(c)}var d=ya(b);d\u0026\u0026d.o?d.o(a,b,c,e):a.data.set(b,c,e)},\nO=function(a,b,c,e,d){this.name=a;this.F=b;this.Z=e;this.o=d;this.defaultValue=c},ya=function(a){var b=X.get(a);if(!b)for(var c=0;c\u003Cia.length;c++){var e=ia[c],d=e[0].exec(a);if(d){b=e[1](d);X.set(b.name,b);break}}return b},bb=function(a){var b;return X.map(function(c,e){e.F==a\u0026\u0026(b=e)}),b\u0026\u0026b.name},d=function(a,b,c,e,d){return a=new O(a,b,c,e,d),X.set(a.name,a),a.name},Y=function(a,b){ia.push([new RegExp(\"^\"+a+\"$\"),b])},l=function(a,b,c){return d(a,b,c,void 0,Aa)},Aa=function(){},P=\"slga\",Z=!1,cb=l(\"apiVersion\",\n\"v\"),db=l(\"clientVersion\",\"_v\");d(\"anonymizeIp\",\"aip\");var eb=d(\"adSenseId\",\"a\"),Ba=d(\"hitType\",\"t\");d(\"hitCallback\");d(\"hitPayload\");d(\"nonInteraction\",\"ni\");d(\"currencyCode\",\"cu\");d(\"dataSource\",\"ds\");d(\"useBeacon\",void 0,!1);d(\"transport\");d(\"sessionControl\",\"sc\",\"\");d(\"sessionGroup\",\"sg\");d(\"queueTime\",\"qt\");d(\"_s\",\"_s\");d(\"screenName\",\"cd\");var fb=(d(\"location\",\"dl\",\"\"),d(\"referrer\",\"dr\"),d(\"page\",\"dp\",\"\"));d(\"hostname\",\"dh\");d(\"language\",\"ul\");d(\"encoding\",\"de\");d(\"title\",\"dt\",function(){return k.title||\nvoid 0});Y(\"contentGroup([0-9]+)\",function(a){return new O(a[0],\"cg\"+a[1])});d(\"screenColors\",\"sd\");d(\"screenResolution\",\"sr\");d(\"viewportSize\",\"vp\");d(\"javaEnabled\",\"je\");d(\"flashVersion\",\"fl\");d(\"campaignId\",\"ci\");d(\"campaignName\",\"cn\");d(\"campaignSource\",\"cs\");d(\"campaignMedium\",\"cm\");d(\"campaignKeyword\",\"ck\");d(\"campaignContent\",\"cc\");var gb=d(\"eventCategory\",\"ec\"),hb=d(\"eventAction\",\"ea\"),ib=d(\"eventLabel\",\"el\"),jb=d(\"eventValue\",\"ev\"),kb=d(\"socialNetwork\",\"sn\"),lb=d(\"socialAction\",\"sa\"),mb=\nd(\"socialTarget\",\"st\"),nb=(d(\"l1\",\"plt\"),d(\"l2\",\"pdt\"),d(\"l3\",\"dns\"),d(\"l4\",\"rrt\"),d(\"l5\",\"srt\"),d(\"l6\",\"tcp\"),d(\"l7\",\"dit\"),d(\"l8\",\"clt\"),d(\"timingCategory\",\"utc\")),ob=d(\"timingVar\",\"utv\"),pb=d(\"timingLabel\",\"utl\"),qb=d(\"timingValue\",\"utt\");d(\"appName\",\"an\");d(\"appVersion\",\"av\",\"\");d(\"appId\",\"aid\",\"\");d(\"appInstallerId\",\"aiid\",\"\");d(\"exDescription\",\"exd\");d(\"exFatal\",\"exf\");var rb=(d(\"expId\",\"xid\"),d(\"expVar\",\"xvar\"),d(\"exp\",\"exp\"),d(\"_utma\",\"_utma\")),sb=d(\"_utmz\",\"_utmz\"),tb=d(\"_utmht\",\"_utmht\");\nd(\"_hc\",void 0,0);d(\"_ti\",void 0,0);d(\"_to\",void 0,20);Y(\"dimension([0-9]+)\",function(a){return new O(a[0],\"cd\"+a[1])});Y(\"metric([0-9]+)\",function(a){return new O(a[0],\"cm\"+a[1])});d(\"linkerParam\",void 0,void 0,Wa,Aa);d(\"usage\",\"_u\");var Ca=d(\"_um\");d(\"forceSSL\",void 0,void 0,function(){return Z},function(a,b,c){h(34);Z=!!c});var ub=d(\"_j1\",\"jid\"),vb=d(\"_j2\",\"gjid\");Y(\"\\\\\\x26(.*)\",function(a){var b=new O(a[0],a[1]),c=bb(a[0].substring(1));return c\u0026\u0026(b.Z=function(a){return a.get(c)},b.o=function(a,\nb,d,g){a.set(c,d,g)},b.F=void 0),b});var wb=l(\"_oot\"),xb=d(\"previewTask\"),yb=d(\"checkProtocolTask\"),zb=d(\"validationTask\"),Ab=d(\"checkStorageTask\"),Bb=d(\"historyImportTask\"),Cb=(d(\"samplerTask\"),d(\"_rlt\"));d(\"buildHitTask\");d(\"sendHitTask\");var Db=(d(\"ceTask\"),d(\"devIdTask\")),Eb=(d(\"timingTask\"),d(\"displayFeaturesTask\")),y=l(\"name\"),v=l(\"clientId\",\"cid\"),Da=l(\"clientIdTime\"),Ea=d(\"userId\",\"uid\"),A=l(\"trackingId\",\"tid\"),Q=l(\"cookieName\",void 0,\"_ga\"),t=l(\"cookieDomain\"),E=l(\"cookiePath\",void 0,\"\/\"),\nka=l(\"cookieExpires\",void 0,63072E3),aa=l(\"legacyCookieDomain\"),la=l(\"legacyHistoryImport\",void 0,!0),I=l(\"storage\",void 0,\"cookie\"),ma=l(\"allowLinker\",void 0,!1),na=l(\"allowAnchor\",void 0,!0),Fa=l(\"sampleRate\",\"sf\",100),oa=l(\"siteSpeedSampleRate\",void 0,1),Ga=l(\"alwaysSendReferrer\",void 0,!1),H=l(\"_gid\",\"_gid\"),z=l(\"_ge\"),pa=l(\"_gcn\"),Fb=d(\"transportUrl\"),Gb=d(\"_r\",\"_r\"),qa=function(a,b,c){this.V=a;this.fa=b;this.$=!1;this.oa=c;this.ea=1},ra=function(a,b,c){if(a.fa\u0026\u0026a.$)return 0;if(a.$=!0,b){if(a.oa\u0026\u0026\nja(b,a.oa))return ja(b,a.oa);if(0==b.get(oa))return 0}return 0==a.V?0:(void 0===c\u0026\u0026(c=void 0),0==c%a.V?Math.floor(c\/a.V)%a.ea+1:0)},J=!1,Ia=function(a){\"cookie\"==m(a,I)\u0026\u0026(Ha(a,v,Q),a.get(z)\u0026\u0026Ha(a,H,pa,864E5))},Ha=function(a,b,c,e){var d=Ja(a,b);if(d){c=m(a,c);b=Ka(m(a,E));var f=sa(m(a,t));e=e||1E3*ja(a,ka);var g=m(a,A);if(\"auto\"!=f)V(c,d,b,f,g,e)\u0026\u0026(J=!0);else{h(32);var w;if(d=[],f=U().split(\".\"),4!=f.length||(w=f[f.length-1],parseInt(w,10)!=w)){for(w=f.length-2;0\u003C=w;w--)d.push(f.slice(w).join(\".\"));\nd.push(\"none\");w=d}else w=[\"none\"];for(var k=0;k\u003Cw.length;k++)if(f=w[k],a.data.set(t,f),d=Ja(a,v),V(c,d,b,f,g,e))return void(J=!0);a.data.set(t,\"auto\")}}else a.get(z)||h(54)},Hb=function(a){if(\"cookie\"==m(a,I)\u0026\u0026!J\u0026\u0026(Ia(a),!J))throw\"abort\";},Ib=function(a){if(a.get(la)){var b=m(a,t),c=m(a,aa)||U(),e=da(\"__utma\",c,b);e\u0026\u0026(h(19),a.set(tb,(new Date).getTime(),!0),a.set(rb,e.R),(b=da(\"__utmz\",c,b))\u0026\u0026e.hash==b.hash\u0026\u0026a.set(sb,b.R))}},Ja=function(a,b){b=ha(m(a,b));var c=sa(m(a,t)).split(\".\").length;return a=\nLa(m(a,E)),1\u003Ca\u0026\u0026(c+=\"-\"+a),b?[\"GA1\",c,b].join(\".\"):\"\"},Na=function(a,b){if(b\u0026\u0026!(1\u003Eb.length)){for(var c=[],e=0;e\u003Cb.length;e++){var d=b[e].split(\".\");var f=d.shift();(\"GA1\"==f||\"1\"==f)\u0026\u00261\u003Cd.length?(f=d.shift().split(\"-\"),1==f.length\u0026\u0026(f[1]=\"1\"),f[0]*=1,f[1]*=1,d={H:f,s:d.join(\".\")}):d=void 0;d\u0026\u0026c.push(d)}if(1==c.length)return h(13),c[0].s;if(0!=c.length)return h(14),b=sa(m(a,t)).split(\".\").length,c=Ma(c,b,0),1==c.length?c[0].s:(a=La(m(a,E)),c=Ma(c,a,1),c[0]\u0026\u0026c[0].s);h(12)}},Ma=function(a,b,c){for(var e,\nd=[],f=[],g=0;g\u003Ca.length;g++){var h=a[g];h.H[c]==b?d.push(h):void 0==e||h.H[c]\u003Ce?(f=[h],e=h.H[c]):h.H[c]==e\u0026\u0026f.push(h)}return 0\u003Cd.length?d:f},sa=function(a){return 0==a.indexOf(\".\")?a.substr(1):a},Ka=function(a){return a?(1\u003Ca.length\u0026\u0026a.lastIndexOf(\"\/\")==a.length-1\u0026\u0026(a=a.substr(0,a.length-1)),0!=a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a),a):\"\/\"},La=function(a){return a=Ka(a),\"\/\"==a?1:a.split(\"\/\").length},Jb=new RegExp(\/^https?:\\\/\\\/([^\\\/:]+)\/),Kb=\/(.*)([?\u0026#])(?:_ga=[^\u0026#]*)(?:\u0026?)(.*)\/,ba=function(a){h(48);this.target=\na;this.T=!1};ba.prototype.ca=function(a,b){if(a.tagName){if(\"a\"==a.tagName.toLowerCase())return void(a.href\u0026\u0026(a.href=ca(this,a.href,b)));if(\"form\"==a.tagName.toLowerCase())return Oa(this,a)}if(\"string\"==typeof a)return ca(this,a,b)};var ca=function(a,b,c){var e=Kb.exec(b);e\u0026\u00263\u003C=e.length\u0026\u0026(b=e[1]+(e[3]?e[2]+e[3]:\"\"));a=a.target.get(\"linkerParam\");var d=b.indexOf(\"?\");e=b.indexOf(\"#\");return c?b+=(-1==e?\"#\":\"\\x26\")+a:(c=-1==d?\"?\":\"\\x26\",b=-1==e?b+(c+a):b.substring(0,e)+c+a+b.substring(e)),b.replace(\/\u0026+_ga=\/,\n\"\\x26_ga\\x3d\")},Oa=function(a,b){if(b\u0026\u0026b.action)if(\"get\"==b.method.toLowerCase()){a=a.target.get(\"linkerParam\").split(\"\\x3d\")[1];for(var c=b.childNodes||[],e=0;e\u003Cc.length;e++)if(\"_ga\"==c[e].name)return void c[e].setAttribute(\"value\",a);c=k.createElement(\"input\");c.setAttribute(\"type\",\"hidden\");c.setAttribute(\"name\",\"_ga\");c.setAttribute(\"value\",a);b.appendChild(c)}else\"post\"==b.method.toLowerCase()\u0026\u0026(b.action=ca(a,b.action))};ba.prototype.S=function(a,b,c){function e(c){try{c=c||p.event;a:{var e=\nc.target||c.srcElement;for(c=100;e\u0026\u00260\u003Cc;){if(e.href\u0026\u0026e.nodeName.match(\/^a(?:rea)?$\/i)){var f=e;break a}e=e.parentNode;c--}f={}}(\"http:\"==f.protocol||\"https:\"==f.protocol)\u0026\u0026ta(a,f.hostname||\"\")\u0026\u0026f.href\u0026\u0026(f.href=ca(d,f.href,b))}catch(Ub){h(26)}}var d=this;this.T||(this.T=!0,T(k,\"mousedown\",e,!1),T(k,\"keyup\",e,!1));c\u0026\u0026T(k,\"submit\",function(b){if(b=b||p.event,(b=b.target||b.srcElement)\u0026\u0026b.action){var c=b.action.match(Jb);c\u0026\u0026ta(a,c[1])\u0026\u0026Oa(d,b)}})};var Pa,Mb=function(a,b,c){this.U=ub;this.aa=b;(b=c)||\n(b=(b=m(a,y))\u0026\u0026\"t0\"!=b?Lb.test(b)?\"_gat_\"+ha(m(a,A)):\"_gat_\"+ha(b):\"_gat\");this.Y=b},Qa=function(a,b,c){b.get(c)||(\"1\"==G(a.Y)[0]?b.set(c,\"\",!0):b.set(c,\"\"+S(),!0))},Lb=\/^gtm\\d+$\/,Nb=function(a){if(!a.get(\"dcLoaded\")\u0026\u0026\"cookie\"==a.get(I)){var b=a,c=b;var e=(c=c.get(Ca),\"[object Array]\"==Object.prototype.toString.call(Object(c))||(c=[]),c);e=new R(e);e.set(51);b.set(Ca,e.w);b=new Mb(a);Qa(b,a,b.U);Qa(b,a,vb);e=b;c=a;c.get(e.U)\u0026\u0026V(e.Y,\"1\",c.get(E),c.get(t),c.get(A),6E4);a.get(b.U)\u0026\u0026(a.set(Gb,1,!0),a.set(Fb,\n\"undefined\/r\/collect\",!0))}},Ob=function(){var a=p.gaGlobal=p.gaGlobal||{};return a.hid=a.hid||S()},Pb=function(a,b,c){if(!Pa){var e=k.location.hash;var d=p.name,f=\/^#?gaso=([^\u0026]*)\/;if(d=(e=(e=e\u0026\u0026e.match(f)||d\u0026\u0026d.match(f))?e[1]:G(\"GASO\")[0]||\"\")\u0026\u0026e.match(\/^(?:!([-0-9a-z.]{1,40})!)?([-.\\w]{10,1200})$\/i))V(\"GASO\",\"\"+e,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=d[1],a=\"https:\/\/www.google.com\/analytics\/web\/inpage\/pub\/inpage.js?\"+(a?\"prefix\\x3d\"+a+\"\\x26\":\"\")+S(),b=\"_gasojs\",\ne=c=void 0,a\u0026\u0026(c?(e=\"\",b\u0026\u0026va.test(b)\u0026\u0026(e=' id\\x3d\"'+b+'\"'),va.test(a)\u0026\u0026k.write(\"\\x3cscript\"+e+' src\\x3d\"'+a+'\"\\x3e\\x3c\/script\\x3e')):(c=k.createElement(\"script\"),c.type=\"text\/javascript\",c.async=!0,c.src=a,e\u0026\u0026(c.onload=e),b\u0026\u0026(c.id=b),a=k.getElementsByTagName(\"script\")[0],a.parentNode.insertBefore(c,a)));Pa=!0}},ab=\/^(UA|YT|MO|GP)-(\\d+)-(\\d+)$\/,K=function(a){function b(a,b){e.b.data.set(a,b)}function c(a,c){b(a,c);e.filters.add(a)}var e=this;this.b=new W;this.filters=new xa;b(y,a[y]);b(A,Xa(a[A]));\nb(Q,a[Q]);b(t,a[t]||U());b(E,a[E]);b(ka,a[ka]);b(aa,a[aa]);b(la,a[la]);b(ma,a[ma]);b(na,a[na]);b(Fa,a[Fa]);b(oa,a[oa]);b(Ga,a[Ga]);b(I,a[I]);b(Ea,a[Ea]);b(Da,a[Da]);b(z,a[z]);b(cb,1);b(db,\"j50\");c(wb,q);c(xb,B);c(yb,x);c(zb,L);c(Ab,Hb);c(Bb,Ib);c(Cb,Va);c(Db,F);c(Eb,Nb);Qb(this.b,a[v]);this.b.set(eb,Ob());Pb(this.b.get(A),this.b.get(t),this.b.get(E));this.ra=new qa(1E4,!0,\"gaexp10\")},Qb=function(a,b){if(\"cookie\"==m(a,I)){J=!1;var c=G(m(a,Q));if(!(c=Na(a,c))){c=m(a,t);var e=m(a,aa)||U();c=da(\"__utma\",\ne,c);void 0!=c?(h(10),c=c.O[1]+\".\"+c.O[2]):c=void 0}c\u0026\u0026(a.data.set(v,c),c=G(m(a,pa)),(c=Na(a,c))\u0026\u0026a.data.set(H,c),J=!0)}a:if(c=a.get(na),e=k.location[c?\"href\":\"search\"],c=(e=e.match(\"(?:\\x26|#|\\\\?)\"+N(\"_ga\").replace(\/([.*+?^=!:${}()|\\[\\]\\\/\\\\])\/g,\"\\\\$1\")+\"\\x3d([^\\x26#]*)\"))\u0026\u00262==e.length?e[1]:\"\")if(a.get(ma))if(-1==(e=c.indexOf(\".\")))h(22);else{var d=c.substring(0,e),f=c.substring(e+1);e=f.indexOf(\".\");c=f.substring(0,e);f=f.substring(e+1);if(\"1\"==d){if(e=f,c!=C(e,0)\u0026\u0026c!=C(e,-1)\u0026\u0026c!=C(e,-2)){h(23);\nbreak a}}else{if(\"2\"!=d){h(22);break a}if(d=f.split(\"-\",2),e=d[1],c!=C(d[0]+e,0)\u0026\u0026c!=C(d[0]+e,-1)\u0026\u0026c!=C(d[0]+e,-2)){h(53);break a}h(2);a.data.set(H,d[0])}h(11);a.data.set(v,e)}else h(21);b\u0026\u0026(h(9),a.data.set(v,N(b)));a.get(v)||((b=(b=p.gaGlobal\u0026\u0026p.gaGlobal.vid)\u0026\u0026-1!=b.search(\/^(?:utma\\.)?\\d+\\.\\d+$\/)?b:void 0)?(h(17),a.data.set(v,b)):(h(8),a.data.set(v,ua())));a.data.set(z,a.get(z)||1==ra(new qa(0,!0),void 0,M(a.get(v))));a.get(z)\u0026\u0026(b=m(a,Q),a.data.set(pa,\"_ga\"==b?\"_gid\":b+\"_gid\"));a.get(z)\u0026\u0026!a.get(H)\u0026\u0026\n(h(3),a.data.set(H,ua()));Ia(a)};K.prototype.get=function(a){return this.b.get(a)};K.prototype.set=function(a,b){this.b.set(a,b)};var Rb={pageview:[fb],event:[gb,hb,ib,jb],social:[kb,lb,mb],timing:[nb,ob,qb,pb]};K.prototype.send=function(a){if(!(1\u003Earguments.length)){var b,c;\"string\"==typeof arguments[0]?(b=arguments[0],c=[].slice.call(arguments,1)):(b=arguments[0]\u0026\u0026arguments[0][Ba],c=arguments);b\u0026\u0026(c=wa(Rb[b]||[],c),c[Ba]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={},ra(this.ra,\nthis.b)\u0026\u0026this.b.get(A))}};K.prototype.ma=function(a,b){var c=this;c.get(y)};var Ra=function(a){if(\"prerender\"==k.visibilityState||(a(),!1)){h(16);var b=!1,c=function(){if(!b\u0026\u0026\"prerender\"!=k.visibilityState\u0026\u0026(a(),!0)){b=!0;var e=c,d=k;d.removeEventListener?d.removeEventListener(\"visibilitychange\",e,!1):d.detachEvent\u0026\u0026d.detachEvent(\"onvisibilitychange\",e)}};T(k,\"visibilitychange\",c)}},Sb=function(a){};new D;new D;new D;var n={ga:function(){n.f=[]}};n.ga();n.D=function(a){var b=n.J.apply(n,arguments);\nb=n.f.concat(b);for(n.f=[];0\u003Cb.length\u0026\u0026!n.v(b[0])\u0026\u0026(b.shift(),!(0\u003Cn.f.length)););n.f=n.f.concat(b)};n.J=function(a){for(var b=[],c=0;c\u003Carguments.length;c++)try{var d=new Sb(arguments[c]);d.g||(d.i\u0026\u0026(d.ha=void 0),b.push(d))}catch(u){}return b};n.v=function(a){try{if(a.u)a.u.call(p,g.j(\"t0\"));else{var b=a.c==P?g:g.j(a.c);if(a.A)\"t0\"!=a.c||g.create.apply(g,a.a);else if(a.ba)g.remove(a.c);else if(b){if(a.i)return a.ha\u0026\u0026(a.ha=void 0),!0;if(a.K){var c=a.C,d=a.a,h=b.plugins_.get(a.K);h[c].apply(h,d)}else b[a.C].apply(b,\na.a)}}}catch(f){}};var g=function(a){h(1);n.D.apply(n,[arguments])};g.h={};g.P=[];g.L=0;g.answer=42;var Tb=[A,t,y];g.create=function(a){var b=wa(Tb,[].slice.call(arguments));b[y]||(b[y]=\"t0\");var c=\"\"+b[y];return g.h[c]?g.h[c]:(b=new K(b),g.h[c]=b,g.P.push(b),b)};g.remove=function(a){for(var b=0;b\u003Cg.P.length;b++)if(g.P[b].get(y)==a){g.P.splice(b,1);g.h[a]=null;break}};g.j=function(a){return g.h[a]};g.getAll=function(){return g.P.slice(0)};g.N=function(){\"ga\"!=P\u0026\u0026h(49);var a=p[P];if(!a||42!=a.answer){g.L=\na\u0026\u0026a.l;g.loaded=!0;var b=p[P]=g;r(\"create\",b,b.create);r(\"remove\",b,b.remove);r(\"getByName\",b,b.j,5);r(\"getAll\",b,b.getAll,6);b=K.prototype;r(\"get\",b,b.get,7);r(\"set\",b,b.set,4);r(\"send\",b,b.send);r(\"requireSync\",b,b.ma);b=W.prototype;r(\"get\",b,b.get);r(\"set\",b,b.set);\"https:\"==k.location.protocol||Z||!ra(new qa(1E4))||(h(36),Z=!0);(p.gaplugins=p.gaplugins||{}).Linker=ba;b=ba.prototype;r(\"decorate\",b,b.ca,20);r(\"autoLink\",b,b.S,25);a=a\u0026\u0026a.q;\"[object Array]\"==Object.prototype.toString.call(Object(a))?\nn.D.apply(g,a):h(50)}};g.da=function(){for(var a=g.getAll(),b=0;b\u003Ca.length;b++)a[b].get(y)};var Sa=g.N,Ta=p[P];Ta\u0026\u0026Ta.r?Sa():Ra(Sa);Ra(function(){n.D([\"provide\",\"render\",Ya])})}(window);var q=\"SCITYLANA\";q=q+\"_temp_\"+Math.round(2147483647*Math.random());B=slga.create(B,x,q);L=L||B.get(\"userId\")||B.get(\"clientId\");B=document.referrer?1:0;slga.remove(q);q=window;x=\"_o_r_d_e_r_sl\";var F=(new Date).getTime();q[x]=q[x]?q[x]==F?F+1:F\u003Eq[x]?F:q[x]+1:F;return q=[\"sl\\x3d1\",\"u\\x3d\"+L,\"t\\x3d\"+q[x],\"r\\x3d\"+B].join(\"\\x26\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){b.set(\"dimension2\",b.get(\"clientId\")+\"_\"+Date.now());if(\"undefined\"===typeof b.get(\"OWOXBIStreaming\")){var f=b.get(\"sendHitTask\"),h=function(){function d(c){var a=!1;try{document.createElement(\"img\").src=e(!0)+\"?\"+c,a=!0}catch(k){}return a}function e(c){var a=\"https:\/\/google-analytics.bi.owox.com\/collect\";c||(a+=\"?tid\\x3d\"+encodeURIComponent(b.get(\"trackingId\")));return a}return{send:function(c){var a;if(!(a=2036\u003E=c.length\u0026\u0026d(c))){a=!1;try{a=navigator.sendBeacon\u0026\u0026navigator.sendBeacon(e(),\nc)}catch(g){}}if(!a){a=!1;var b;try{window.XMLHttpRequest\u0026\u0026\"withCredentials\"in(b=new XMLHttpRequest)\u0026\u0026(b.open(\"POST\",e(),!0),b.setRequestHeader(\"Content-Type\",\"text\/plain\"),b.send(c),a=!0)}catch(g){}}return a||d(c)}}}();b.set(\"sendHitTask\",function(d){f(d);h.send(d.get(\"hitPayload\"));b.set(\"OWOXBIStreaming\",!0)})}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){Date.prototype.toIsoString=function(){var b=-this.getTimezoneOffset(),c=0\u003C=b?\"+\":\"-\",a=function(a){a=Math.floor(Math.abs(a));return(10\u003Ea?\"0\":\"\")+a};return this.getFullYear()+\"-\"+a(this.getMonth()+1)+\"-\"+a(this.getDate())+\"X\"+a(this.getHours())+\":\"+a(this.getMinutes())+\":00\"+c+a(b\/60)+\":\"+a(b%60)};return(new Date).toIsoString()})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"ProcessTrial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"ProcessConversion"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"InWebBuilder"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":"123hjemmeside.dk, 123hjemmeside.no, 123minsida.se, 123kotisivu.fi, 123website.nl, 123siteweb.fr, 123homepage.it, 123miweb.es, 123webseite.de, 123webseite.at, 123website.ch, 123website.lu, 123website.be, simplesite.com.br, 123sait.ru, 123website.co.id, simplesite.com.tr, simplesite.pl, simplesite.cz, simplesite.my, simplesite.gr, 123paginaweb.pt, simplesite.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",2]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-119679599-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Segmentation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"SWStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Instrumentation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ExpQS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"BLANK",
      "vtp_name":"CustomerId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"SalesType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"weather"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"temperature"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hci"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Market"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"RefCode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"session"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1793204117407582\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1066686464",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",6],
      "tag_id":1
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1066686464",
      "vtp_conversionLabel":"sbuVCIzsuX0QgLDR_AM",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":3
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1066686464",
      "vtp_conversionLabel":"0GLVCM6E0X0QgLDR_AM",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":4
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"807705187",
      "vtp_conversionLabel":"rUkXCMWAxIIBEOO0koED",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":5
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"807705187",
      "vtp_conversionLabel":"WYAVCIOQ1YIBEOO0koED",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":6
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"4023672",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":9
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"trials",
      "vtp_useImageTag":false,
      "vtp_activityTag":"simpl00",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5060719",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",9],
      "vtp_url":["macro",6],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"simplesite.com,v4.simplesite.com,da.simplesite.com",
      "vtp_gaSettings":["macro",11],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",2]],["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",4]],["map","index","7","dimension",["macro",13]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Trial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",11],
      "vtp_eventAction":"Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Sale",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",11],
      "vtp_eventAction":"Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"801401181",
      "vtp_conversionLabel":"_BxyCJ-10oMBEN3Skf4C",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":26
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"801401181",
      "vtp_conversionLabel":"E2BPCJi30oMBEN3Skf4C",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"SWStep",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Hit",
      "vtp_eventLabel":["macro",14],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",16]],["map","index","2","dimension",["macro",15]]],
      "vtp_trackingId":"UA-122756636-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",18]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",16]],["map","index","2","dimension",["macro",15]]],
      "vtp_trackingId":"UA-122756636-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Trial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",16]],["map","index","2","dimension",["macro",15]]],
      "vtp_trackingId":"UA-122756636-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":44
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ContinuePastLanding",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",16]],["map","index","2","dimension",["macro",15]]],
      "vtp_trackingId":"UA-122756636-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"1108909",
      "tag_id":59
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":60
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":61
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":69
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":70
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Weather",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",20],
      "vtp_eventLabel":["macro",21],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",20]],["map","index","6","dimension",["macro",21]],["map","index","1","dimension",["macro",2]]],
      "vtp_trackingId":"UA-119679599-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":107
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"746010055",
      "vtp_conversionLabel":"5Jo5CM3Q5poBEMfr3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":141
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"746010055",
      "vtp_conversionLabel":"ZO19CPrQ5poBEMfr3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":142
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"746010055",
      "vtp_conversionLabel":"ZbmbCIXR8ZoBEMfr3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":143
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"746000522",
      "vtp_conversionLabel":"R4SWCMLd5poBEIqh3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":144
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"746000522",
      "vtp_conversionLabel":"8H_GCPzQ8ZoBEIqh3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":145
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"746000522",
      "vtp_conversionLabel":"rtReCOXU8ZoBEIqh3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":146
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"745999484",
      "vtp_conversionLabel":"iPdpCLHh5poBEPyY3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":147
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"745999484",
      "vtp_conversionLabel":"DYeICMjG3ZoBEPyY3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":148
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"745999484",
      "vtp_conversionLabel":"3z7pCPLm5poBEPyY3OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":149
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"745807812",
      "vtp_conversionLabel":"0QPKCOjWjpsBEMS_0OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":150
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"745807812",
      "vtp_conversionLabel":"d-6OCO-4g5sBEMS_0OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":151
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"745807812",
      "vtp_conversionLabel":"uiT6CNDT-poBEMS_0OMC",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":152
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"12000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"9048754_271",
      "tag_id":154
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"5000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"9048754_294",
      "tag_id":155
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"5000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"9048754_299",
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter32614100=new Ya.Metrika({id:32614100,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})}catch(f){}});var e=d.getElementsByTagName(\"script\")[0],c=d.createElement(\"script\");a=function(){e.parentNode.insertBefore(c,e)};c.type=\"text\/javascript\";c.async=!0;c.src=\"https:\/\/mc.yandex.ru\/metrika\/watch.js\";\"[object Opera]\"==b.opera?d.addEventListener(\"DOMContentLoaded\",a,!1):a()})(document,window,\"yandex_metrika_callbacks\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/32614100\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"Free Trials\",ev:1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"Sales\",ev:1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tracking.propelmedia.com\/?id=1G7613G85A6G157D7908\u0026amp;fetch=0\u0026amp;value=0\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cdiv style=\"display: inline;\"\u003E\n        \u003Cimg height=\"1\" width=\"1\" style=\"border-style: none;\" alt=\"\" src=\"https:\/\/tracking.propelmedia.com\/?id=1G7613G85A6G157D7908\u0026amp;fetch=1\u0026amp;value=0\"\u003E\n    \u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tracking.propelmedia.com\/?id=1G7613G8894G121B4591\u0026amp;fetch=0\u0026amp;value=0\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cdiv style=\"display: inline;\"\u003E\n        \u003Cimg height=\"1\" width=\"1\" style=\"border-style: none;\" alt=\"\" src=\"https:\/\/tracking.propelmedia.com\/?id=1G7613G8894G121B4591\u0026amp;fetch=1\u0026amp;value=0\"\u003E\n    \u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"trial\",id:1082954});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"\/\/trc.taboola.com\/1082954\/log\/3\/unip?en=trial\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"sale\",id:1082954});\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg src=\"\/\/trc.taboola.com\/1082954\/log\/3\/unip?en=sale\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"pap_x2s6df8d\" data-gtmsrc=\"https:\/\/simplesite.postaffiliatepro.com\/scripts\/jwuu42vqyv\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EPostAffTracker.setAccountId(\"default1\");var action=PostAffTracker.createAction(\"Trial\");action.setOrderID(",["escape",["macro",22],8,16],"+\"_t\");PostAffTracker.register();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"pap_x2s6df8d\" data-gtmsrc=\"https:\/\/simplesite.postaffiliatepro.com\/scripts\/jwuu42vqyv\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EPostAffTracker.setAccountId(\"default1\");try{PostAffTracker.track()}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript id=\"pap_x2s6df8d\" data-gtmsrc=\"https:\/\/simplesite.postaffiliatepro.com\/scripts\/jwuu42vqyv\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EPostAffTracker.setAccountId(\"default1\");var action=PostAffTracker.createAction(\"Sales\");action.setOrderID(",["escape",["macro",22],8,16],"+\"_s\");PostAffTracker.register();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/www.trackads.eu\/8lxs5N6pz2FVTHkK\/1\/[HCI]\/\" style=\"border:0;\" width=\"1\" height=\"1\"\u003E\u003C\/iframe\u003E --\u0026gt; ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/www.trackads.eu\/8lxs5N6pz2FVTHkK\/2\/[HCI]\/\" style=\"border:0;\" width=\"1\" height=\"1\"\u003E\u003C\/iframe\u003E ---\u0026gt;",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"m3_tracker_\" style=\"position: absolute; left: 0px; top: 0px; visibility: hidden;\"\u003E\u003Cimg src=\"\/\/trecurlik.com\/13\/?t=50012\u0026amp;cb=[RANDOM_NUMBER]\"\u003E\u003C\/div\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/3.2.1\/jquery.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var e=function(a,c){var b=\"e46069e4\",d=\"2d97f1e4354ef5afc090647b564944e3\";jQuery.getJSON(\"https:\/\/api.weatherunlocked.com\/api\/current\/\"+c+\",\"+a+\"?app_id\\x3d\"+b+\"\\x26app_key\\x3d\"+d).done(function(a){window.dataLayer.push({event:\"weatherDone\",weather:a.wx_desc,temperature:a.temp_c})}).fail(function(a,c,b){console.log(\"Weather request failed: \"+c+\" - \"+b)})},a=function(){var a=\"81bc4175afb89d6c\";jQuery.getJSON(\"https:\/\/ssl.geoplugin.net\/json.gp?k\\x3d\"+a+\"\\x26jsoncallback\\x3d?\").done(function(a){e(a.geoplugin_longitude,\na.geoplugin_latitude)}).fail(function(a,b,d){console.log(\"Geolocation failed: \"+b+\" - \"+d)})};\"undefined\"===typeof ",["escape",["macro",26],8,16],"\u0026\u0026a();a=new Date;a.setTime(a.getTime()+18E5);a=\"expires\\x3d\"+a.toGMTString();document.cookie=\"session\\x3d1; \"+a+\"; path\\x3d\/\"})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ndt5.net\/t\/?si=13674\u0026amp;ti=",["escape",["macro",22],12],"\u0026amp;oa=SimpleSiteDK\u0026amp;om=SimpleSiteDK\" style=\"border: 0px; height: 1px; width: 1px;\"\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){setTimeout(function(){im=document.getElementsByTagName(\"img\");for(i=0;i\u003Cim.length;i++)o=im[i],\/[s|c]i=\/i.exec(o.src)\u0026\u0026(!o.offsetHeight||1\u003Eo.offsetHeight)\u0026\u0026(i=document.createElement(\"img\"),i.height=\"1\",i.width=\"1\",i.id=\"news\",i.className=\"net\",i.src=\"\/\/\"+Math.round(+new Date\/83E3)+\".\"+i.id+\"tat.\"+i.className+\"\/ab\/\"+o.src.substring(o.src.indexOf(\"?\"),o.src.length),document.body.appendChild(i))},100)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1082954});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1082954\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1082954\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ndt5.net\/t\/?si=13679\u0026amp;ti=",["escape",["macro",22],12],"\u0026amp;oa=SimpleSiteSE\u0026amp;om=SimpleSiteSE\" style=\"border: 0px; height: 1px; width: 1px;\"\u003E\n \n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){setTimeout(function(){im=document.getElementsByTagName(\"img\");for(i=0;i\u003Cim.length;i++)o=im[i],\/[s|c]i=\/i.exec(o.src)\u0026\u0026(!o.offsetHeight||1\u003Eo.offsetHeight)\u0026\u0026(i=document.createElement(\"img\"),i.height=\"1\",i.width=\"1\",i.id=\"news\",i.className=\"net\",i.src=\"\/\/\"+Math.round(+new Date\/83E3)+\".\"+i.id+\"tat.\"+i.className+\"\/ab\/\"+o.src.substring(o.src.indexOf(\"?\"),o.src.length),document.body.appendChild(i))},100)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ndt5.net\/t\/?si=13682\u0026amp;ti=",["escape",["macro",22],12],"\u0026amp;oa=SimpleSiteNO\u0026amp;om=SimpleSiteNO\" style=\"border: 0px; height: 1px; width: 1px;\"\u003E\n \n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){setTimeout(function(){im=document.getElementsByTagName(\"img\");for(i=0;i\u003Cim.length;i++)o=im[i],\/[s|c]i=\/i.exec(o.src)\u0026\u0026(!o.offsetHeight||1\u003Eo.offsetHeight)\u0026\u0026(i=document.createElement(\"img\"),i.height=\"1\",i.width=\"1\",i.id=\"news\",i.className=\"net\",i.src=\"\/\/\"+Math.round(+new Date\/83E3)+\".\"+i.id+\"tat.\"+i.className+\"\/ab\/\"+o.src.substring(o.src.indexOf(\"?\"),o.src.length),document.body.appendChild(i))},100)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ndt5.net\/t\/?si=13684\u0026amp;ti=",["escape",["macro",22],12],"\u0026amp;oa=SimpleSiteFI\u0026amp;om=SimpleSiteFI\" style=\"border: 0px; height: 1px; width: 1px;\"\u003E\n \n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){setTimeout(function(){im=document.getElementsByTagName(\"img\");for(i=0;i\u003Cim.length;i++)o=im[i],\/[s|c]i=\/i.exec(o.src)\u0026\u0026(!o.offsetHeight||1\u003Eo.offsetHeight)\u0026\u0026(i=document.createElement(\"img\"),i.height=\"1\",i.width=\"1\",i.id=\"news\",i.className=\"net\",i.src=\"\/\/\"+Math.round(+new Date\/83E3)+\".\"+i.id+\"tat.\"+i.className+\"\/ab\/\"+o.src.substring(o.src.indexOf(\"?\"),o.src.length),document.body.appendChild(i))},100)};\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ndt5.net\/t\/?si=14041\u0026amp;ti=",["escape",["macro",22],12],"\u0026amp;oa=SimpleSiteBE\u0026amp;om=SimpleSiteBE\" style=\"border: 0px; height: 1px; width: 1px;\"\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){setTimeout(function(){im=document.getElementsByTagName(\"img\");for(i=0;i\u003Cim.length;i++)o=im[i],\/[s|c]i=\/i.exec(o.src)\u0026\u0026(!o.offsetHeight||1\u003Eo.offsetHeight)\u0026\u0026(i=document.createElement(\"img\"),i.height=\"1\",i.width=\"1\",i.id=\"news\",i.className=\"net\",i.src=\"\/\/\"+Math.round(+new Date\/83E3)+\".\"+i.id+\"tat.\"+i.className+\"\/ab\/\"+o.src.substring(o.src.indexOf(\"?\"),o.src.length),document.body.appendChild(i))},100)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ndt5.net\/t\/?si=14040\u0026amp;ti=",["escape",["macro",22],12],"\u0026amp;oa=SimpleSiteNL\u0026amp;om=SimpleSiteNL\" style=\"border: 0px; height: 1px; width: 1px;\"\u003E\n \n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){setTimeout(function(){im=document.getElementsByTagName(\"img\");for(i=0;i\u003Cim.length;i++)o=im[i],\/[s|c]i=\/i.exec(o.src)\u0026\u0026(!o.offsetHeight||1\u003Eo.offsetHeight)\u0026\u0026(i=document.createElement(\"img\"),i.height=\"1\",i.width=\"1\",i.id=\"news\",i.className=\"net\",i.src=\"\/\/\"+Math.round(+new Date\/83E3)+\".\"+i.id+\"tat.\"+i.className+\"\/ab\/\"+o.src.substring(o.src.indexOf(\"?\"),o.src.length),document.body.appendChild(i))},100)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d,h){a.ITCLKOBJ=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/analytics.webgains.io\/clk.min.js\",\"ITCLKQ\");ITCLKQ(\"set\",\"internal.api\",!0);ITCLKQ(\"set\",\"internal.cookie\",!0);ITCLKQ(\"click\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d,h){a.ITCVROBJ=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/analytics.webgains.io\/cvr.min.js\",\"ITCVRQ\");ITCVRQ(\"set\",\"trk.programId\",\"xxxx\");ITCVRQ(\"set\",\"cvr\",{value:\"\",currency:\"GBP\",language:\"en_EN\",eventId:\"xxxx\",orderReference:\"\",comment:\"\",multiple:\"\",checksum:\"\",items:\"\",customerId:\"{hci}\",voucherId:\"\"});\nITCVRQ(\"conversion\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_l?offer_id=5203\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_goal?a=l\u0026amp;goal_id=4043\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":122
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_l?offer_id=5303\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_goal?a=l\u0026amp;goal_id=4051\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_goal?a=l\u0026amp;goal_id=4053\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_l?offer_id=5303\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_l?offer_id=5304\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_goal?a=l\u0026amp;goal_id=4054\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_goal?a=l\u0026amp;goal_id=4056\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_l?offer_id=5306\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_l?offer_id=5308\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trx.dgtrk2.com\/aff_goal?a=l\u0026amp;goal_id=4058\u0026amp;adv_sub=",["escape",["macro",22],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ndt5.net\/t\/?si=14206\u0026amp;ti=",["escape",["macro",22],12],"\u0026amp;oa=SimpleSiteDE\u0026amp;om=SimpleSiteDE\" style=\"border: 0px; height: 1px; width: 1px;\"\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){setTimeout(function(){im=document.getElementsByTagName(\"img\");for(i=0;i\u003Cim.length;i++)o=im[i],\/[s|c]i=\/i.exec(o.src)\u0026\u0026(!o.offsetHeight||1\u003Eo.offsetHeight)\u0026\u0026(i=document.createElement(\"img\"),i.height=\"1\",i.width=\"1\",i.id=\"news\",i.className=\"net\",i.src=\"\/\/\"+Math.round(+new Date\/83E3)+\".\"+i.id+\"tat.\"+i.className+\"\/ab\/\"+o.src.substring(o.src.indexOf(\"?\"),o.src.length),document.body.appendChild(i))},100)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"virtualPageview"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"(^$)|(\\s+$)"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"startwizard"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"receive"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"BLANK"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"EditColor"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"NewSW"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"SPADesigner"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"TemplatesPicker"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"OutBrainCoreg"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"NewEditorDesign=NewEditorDesign"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"V4EditPreview"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"weatherDone"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"FmgCoreg"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Business"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Personal"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Other"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"Yandex"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"RU"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"PropelMediaCoreg"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"(^$|((^|,)9048754_294($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"(^$|((^|,)9048754_299($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"coreg",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"AcrossCoreg",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"PropellerAds"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"(^$|((^|,)9048754_271($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Artefact_CPA_Coreg_EUR_DK_DA_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Artefact_CPA_Coreg_EUR_SE_SV_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Artefact_CPA_Coreg_EUR_NO_NO_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Artefact_CPA_Coreg_EUR_FI_FI_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Artefact_CPA_Coreg_EUR_BE_FR_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Artefact_CPA_Coreg_EUR_NL_NL_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"WebGainsCoreg"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"DGMax_CPA_Coreg_EUR_ES_ES_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"DGMax_CPA_Coreg_EUR_FR_FR_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"DGMax_CPA_Coreg_EUR_GB_EN_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"DGMax_CPA_Coreg_EUR_DE_DE_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"DGMax_CPA_Coreg_EUR_IT_IT_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"DGMax_CPA_Coreg_EUR_PT_PT_Banner"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Artefact_CPA_Coreg_EUR_DE_DE_Banner"
    }],
  "rules":[
    [["if",0],["add",1,6,8,16,17,0,42,52,59]],
    [["if",0,1],["add",2,4,7,9,12,15,44,45,51]],
    [["if",0,2],["add",3,5,10,11,43,46,53]],
    [["if",3],["add",8,14,16]],
    [["if",0,7],["unless",5,6],["add",13]],
    [["if",3],["unless",5,6,7],["add",13]],
    [["if",0,8],["unless",5,6],["add",13]],
    [["if",0,9],["add",14]],
    [["if",3,10,11],["add",18]],
    [["if",0,7,12],["add",18]],
    [["if",3,11,13],["add",19]],
    [["if",0,14],["add",20]],
    [["if",0,14,15],["add",21]],
    [["if",16,17],["add",22]],
    [["if",17,18],["add",23]],
    [["if",19],["add",24]],
    [["if",0,20,21],["add",25]],
    [["if",0,1,22],["add",26,35]],
    [["if",0,1,23],["add",27,36]],
    [["if",0,1,24],["add",28,37]],
    [["if",0,22],["add",29,32]],
    [["if",0,23],["add",30,33]],
    [["if",0,24],["add",31,34]],
    [["if",0,25],["add",38]],
    [["if",0,15],["add",39]],
    [["if",0,20],["add",40]],
    [["if",0,1,26,27],["add",41]],
    [["if",0,15,28],["add",47]],
    [["if",0,20,28],["add",48]],
    [["if",29,30],["add",49]],
    [["if",29,31],["add",50]],
    [["if",0,1,33],["add",54]],
    [["if",0,2,33],["add",55]],
    [["if",0,1,34],["add",56]],
    [["if",29,35],["add",57]],
    [["if",0,20,36],["add",58]],
    [["if",0,20,37],["add",60]],
    [["if",0,20,38],["add",61]],
    [["if",0,20,39],["add",62]],
    [["if",0,20,40],["add",63]],
    [["if",0,20,41],["add",64]],
    [["if",0,42],["add",65]],
    [["if",0,20,42],["add",66]],
    [["if",0,15,43],["add",67]],
    [["if",0,20,43],["add",68]],
    [["if",0,15,44],["add",69]],
    [["if",0,20,44],["add",70]],
    [["if",0,20,45],["add",71]],
    [["if",0,15,45],["add",72]],
    [["if",0,15,46],["add",73]],
    [["if",0,20,46],["add",74]],
    [["if",0,20,47],["add",75]],
    [["if",0,15,47],["add",76]],
    [["if",0,15,48],["add",77]],
    [["if",0,20,48],["add",78]],
    [["if",0,20,49],["add",79]],
    [["if",0,4],["block",8,16]],
    [["if",0,4],["unless",15,20],["block",0,42,59]],
    [["if",0],["unless",32],["block",51,53]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var Ia={},Ka=function(a,b){Ia[a]=Ia[a]||[];Ia[a][b]=!0},La=function(a){for(var b=[],c=Ia[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var f=window,u=document,Ma=navigator,Na=u.currentScript&&u.currentScript.src,Oa=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Pa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qa=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pa(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Ra=function(){if(Na){var a=Na.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Sa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Pa(c,b);void 0!==a&&(c.src=a);return c},Ta=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ua=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Va=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Xa=function(a){var b=
u.getElementById(a);if(b&&Wa(b,"id")!=a){Ka("TAGGING",1);for(var c=1;c<document.all[a].length;c++)if(Wa(document.all[a][c],"id")==a)return document.all[a][c]}return b},Wa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Za=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$a=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;
for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ab=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},hb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.zb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),zb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var rb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,sb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return sb.test(document.location.hostname)||"/"===b&&rb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return Bb[a]};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Cb)+"'"}};var Jb=/['()]/g,Kb=function(a){return"%"+a.charCodeAt(0).toString(16)};tb[12]=function(a){var b=
encodeURIComponent(String(a));Jb.lastIndex=0;return Jb.test(b)?b.replace(Jb,Kb):b};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.sc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.lf(d,k))}catch(v){b.Md&&b.Md(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.ob);d.push(p)}return Wb&&m?Wb.qf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Rf(a))return Wb.$f(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={yd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Wc:a("convert_case_to"),Xc:a("convert_false_to"),Yc:a("convert_null_to"),Zc:a("convert_true_to"),$c:a("convert_undefined_to"),qa:a("function"),Ce:a("instance_name"),De:a("live_only"),Ee:a("malware_disabled"),Fe:a("metadata"),Eg:a("original_vendor_template_id"),Ge:a("once_per_event"),od:a("once_per_load"),pd:a("setup_tags"),qd:a("tag_id"),rd:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ic,jc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.We&&(l["fix_"+m]=!0),l.zd=l.zd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,D:q.D,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(w,v,y,x,A){var B=y||x||A||g.test(v)&&v||null,C=document.createElement("div");C.innerHTML=B;r[v]=C.textContent||C.innerText||B});return{tagName:q[1],D:r,Xa:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.zd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Kd=function(){return this[this.length-1]};w.yc=function(C){var E=this.Kd();return E&&E.tagName&&E.tagName.toUpperCase()===C.toUpperCase()};w.kf=
function(C){for(var E=0,F;F=this[E];E++)if(F.tagName===C)return!0;return!1};var v=function(C){C&&"startTag"===C.type&&(C.Xa=q.test(C.tagName)||C.Xa);return C},y=t,x=function(){k="</"+w.pop().tagName+">"+k},A={startTag:function(C){var E=C.tagName;"TR"===E.toUpperCase()&&w.yc("TABLE")?(k="<TBODY>"+k,B()):l.Mg&&r.test(E)&&w.kf(E)?w.yc(E)?x():(k="</"+C.tagName+">"+k,B()):C.Xa||w.push(C)},endTag:function(C){w.Kd()?l.zf&&!w.yc(C.tagName)?x():w.pop():l.zf&&(y(),B())}},B=function(){var C=k,E=v(y());k=C;if(E&&
A[E.type])A[E.type](E)};t=function(){B();return v(y())}}();return{append:function(q){k+=q},gg:t,Sg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Tg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Zg="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Vg=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.$g=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Xa?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Lg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.af=a.af||!b[h]&&h;ic=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,w=p&&p.length||0;for(r=0;r<w;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Me:a,Ne:a,Oe:a,Pe:a,Xe:a,Ye:function(p){return p},done:a,error:function(p){throw p;},kg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,w){var v="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(v);return b(y)?String(y):y}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,r){var w=q.ownerDocument;e(this,{root:q,options:r,Ya:w.defaultView||w.parentWindow,wa:w,Eb:ic("",{We:!0}),cc:[q],Gc:"",Hc:w.createElement(q.nodeName),Va:[],ka:[]});p(this.Hc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.ka,arguments);for(var q;!this.yb&&this.ka.length;)q=this.ka.shift(),"function"===typeof q?this.ef(q):this.Sc(q)};t.prototype.ef=function(q){var r={type:"function",value:q.name||q.toString()};this.Dc(r);q.call(this.Ya,this.wa);this.Qd(r)};
t.prototype.Sc=function(q){this.Eb.append(q);for(var r,w=[],v,y;(r=this.Eb.gg())&&!(v=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)w.push(r);this.Bg(w);v&&this.Ff(r);y&&this.Gf(r)};t.prototype.Bg=function(q){var r=this.bf(q);r.td&&(r.oc=this.Gc+r.td,this.Gc+=r.eg,this.Hc.innerHTML=r.oc,this.yg())};t.prototype.bf=function(q){var r=this.cc.length,w=[],v=[],y=[];c(q,function(x){w.push(x.text);if(x.D){if(!/^noscript$/i.test(x.tagName)){var A=
r++;v.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.D.id&&"ps-style"!==x.D.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Xa?" />":">"))}}else v.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ah:q,raw:w.join(""),td:v.join(""),eg:y.join("")}};t.prototype.yg=function(){for(var q,r=[this.Hc];b(q=r.shift());){var w=1===q.nodeType;if(!w||!p(q,"proxyof")){w&&(this.cc[p(q,"id")]=q,p(q,"id",null));var v=q.parentNode&&p(q.parentNode,"proxyof");
v&&this.cc[v].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Ff=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.src=q.D.src||q.D.Fg;q.src&&this.Va.length?this.yb=q:this.Dc(q);var w=this;this.Ag(q,function(){w.Qd(q)})};t.prototype.Gf=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.type=q.D.type||q.D.Gg||"text/css";this.Cg(q);r&&this.write()};t.prototype.Cg=function(q){var r=this.df(q);this.Pf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.wa.createTextNode(q.content)))};t.prototype.df=function(q){var r=this.wa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(w,v){r.setAttribute(w,v)});return r};t.prototype.Pf=function(q){this.Sc('<span id="ps-style"/>');var r=this.wa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Dc=function(q){q.Wf=this.ka;this.ka=[];this.Va.unshift(q)};t.prototype.Qd=function(q){q!==this.Va[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Va.shift(),this.write.apply(this,q.Wf),!this.Va.length&&this.yb&&(this.Dc(this.yb),this.yb=null))};t.prototype.Ag=function(q,r){var w=this.cf(q),v=this.qg(w),y=this.options.Me;q.src&&(w.src=q.src,this.og(w,v?y:function(){r();y()}));try{this.Of(w),q.src&&!v||r()}catch(x){this.options.error(x),r()}};t.prototype.cf=function(q){var r=this.wa.createElement(q.tagName);d(q.D,function(w,v){r.setAttribute(w,v)});q.content&&(r.text=q.content);return r};t.prototype.Of=function(q){this.Sc('<span id="ps-script"/>');
var r=this.wa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.og=function(q,r){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),r())},onerror:function(){var y={message:"remote script failed "+q.src};w();v(y);r()}})};t.prototype.qg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.kg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var v=r.shift(),y;v&&(y=v[v.length-1],y.Ne(),v.stream=t.apply(null,v),y.Oe())}function t(v,y,x){function A(F){F=x.Ye(F);w.write(F);x.Pe(F)}w=new n(v,x);w.id=q++;w.name=x.name||w.id;var B=v.ownerDocument,C={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=w.Ya.onerror||a;w.Ya.onerror=function(F,Q,W){x.error({Pg:F+
" - "+Q+":"+W});E.apply(w.Ya,arguments)};w.write(y,function(){e(B,C);w.Ya.onerror=E;x.done();w=null;p()});return w}var q=0,r=[],w=null;return e(function(v,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.Ng?v[0]:v;var A=[v,y,x];v.Zf={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.Xe(A);r.push(A);w||p();return v.Zf},{streams:{},Rg:r,Hg:n})}();jc=l.postscribe}})();var yc={},zc=null,Ac=Math.random();yc.m="GTM-NJTCWP8";yc.sb="5f2";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.m+"&cv=253",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Ra(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Tf()||0>=Wc--?(Ka("GTM",1),Uc[Rc]=!0):(Vc.ig(),Ta(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=La("GTM"),c=La("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.sb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Tf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},ig:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=c+String(b[dc.qa]||"").replace(/_/g,
"");Tc=Tc?Tc+"."+d:"&tr="+d;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new pa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new pa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&Ka("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&Ka("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&Ka("GTM",3);
d?Ka("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&Ka("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){Ka("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&Ka("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScript"))||c&&-1!==la(c,"sandboxedScript")||(w=qa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={lf:function(a,b){b[dc.Wc]&&"string"===typeof a&&(a=1==b[dc.Wc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.Yc)&&null===a&&(a=b[dc.Yc]);b.hasOwnProperty(dc.$c)&&void 0===a&&(a=b[dc.$c]);b.hasOwnProperty(dc.Zc)&&!0===a&&(a=b[dc.Zc]);b.hasOwnProperty(dc.Xc)&&!1===a&&(a=b[dc.Xc]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)z(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;!e&&d(yc.m)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return z(function(){var c=!1;!c&&b(yc.m)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Ue:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Ka("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){};function ie(a,b){a.containerId=yc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.pd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{J:g,O:1===k.yd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.Ee])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.qd]),v[dc.Fe]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var A=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){A(C)}}}
var g=Sb[a],h=b.J,k=b.O,l=b.terminate;if(c.sc(g))return null;var m=$b(g[dc.rd],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{J:h,O:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.yd?l:p}if(g[dc.od]||g[dc.Ge]){var t=g[dc.od]?Tb:c.sg,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.J;k=w.O}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{J:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ra[d]){var e=Sb[d];var g=b.add();try{var h=ke(d,{J:g,O:g,terminate:g},a,d);h?c.push({$d:d,b:bc(e),yf:h}):(qe(d,a),g())}catch(l){g()}}b.Ue();c.sort(re);for(var k=0;k<c.length;k++)c[k].yf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.$d,k=b.$d;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.sc(Sb[d])?"3":"4",g=$b(Sb[d][dc.pd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.rd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event");td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,sc:Ad(c),Ra:[],sg:[],Md:function(p){Ka("GTM",6);je(p)}};h.Ra=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ra.length;m++)if(h.Ra[m]){var n=Sb[m];if(n&&!l[n[dc.qa]])return!0}return!1};var G={Pb:"event_callback",Rb:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,Ae=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},Ce=function(a){for(var b={},c=0;c<a.length;++c){var d=Ae(a[c]);d&&(b[d.id]=d)}Be(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Be(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var De=null,Ee={},Fe={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Pb]&&(c.eventCallback=b[G.Pb]),b[G.Rb]&&(c.eventTimeout=b[G.Rb]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Ue=function(a){if(Te(a))return a;this.xg=a};Ue.prototype.Ef=function(){return this.xg};var Te=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};Ue.prototype.getUntrustedUpdateValue=Ue.prototype.Ef;var Ve=!1,We=[];function Xe(){if(!Ve){Ve=!0;for(var a=0;a<We.length;a++)z(We[a])}}var Ye=function(a){Ve?z(a):We.push(a)};var Ze=[],$e=!1,af=function(a){return f["dataLayer"].push(a)},bf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},df=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});if(!Dc){Dc=a["gtm.start"];}var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=
cf(a);Fc=null;return e};function cf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.m,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var ef=function(){for(var a=!1;!$e&&0<Ze.length;){$e=!0;delete hd.eventModel;kd();var b=Ze.shift();if(null!=b){var c=Te(b);if(c){var d=b;b=Te(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){$e=!1;continue}}a=df(b)||a}}finally{c&&kd(!0)}}$e=!1}
return!a},ff=function(){var a=ef();try{var b=yc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},gf=function(){var a=Oa("dataLayer",[]),b=Oa("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ye(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ue(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Ze.push.apply(Ze,d);if(300<this.length)for(Ka("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ef()&&h};Ze.push.apply(Ze,a.slice(0));z(ff)};var jf=function(a){return hf?u.querySelectorAll(a):null},kf=function(a,b){if(!hf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},lf=!1;if(u.querySelectorAll)try{var mf=u.querySelectorAll(":root");mf&&1==mf.length&&mf[0]==u.documentElement&&(lf=!0)}catch(a){}var hf=lf;var nf;var Jf={};Jf.ob=new String("undefined");
var Kf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Jf.ob?b:a[d]);return c.join("")}};Kf.prototype.toString=function(){return this.resolve("undefined")};Kf.prototype.valueOf=Kf.prototype.toString;Jf.He=Kf;Jf.ac={};Jf.qf=function(a){return new Kf(a)};var Lf={};Jf.jg=function(a,b){var c=Jc();Lf[c]=[a,b];return c};Jf.wd=function(a){var b=a?0:1;return function(c){var d=Lf[c];if(d&&"function"===typeof d[b])d[b]();Lf[c]=void 0}};Jf.Rf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Jf.$f=function(a){if(a===Jf.ob)return a;var b=Jc();Jf.ac[b]=a;return'google_tag_manager["'+yc.m+'"].macro('+b+")"};Jf.Uf=function(a,b,c){a instanceof Jf.He&&(a=a.resolve(Jf.jg(b,c)),b=fa);return{oc:a,J:b}};var Mf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Wa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},Nf=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
Of=function(a,b,c){Nf(a)[b]=c},Pf=function(a,b,c,d){var e=Nf(a),g=xa(e,b,d);e[b]=c(g)},Qf=function(a,b,c){var d=Nf(a);return xa(d,b,c)};var Rf=function(){for(var a=Ma.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Uf=function(a,b,c,d){var e=Sf(b);return lb(a,e,Tf(c),d)},Sf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Tf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Vf(a,b){var c=""+Sf(a),d=Tf(b);1<d&&(c+="-"+d);return c};var Wf=["1"],Xf={},ag=function(a,b,c,d){var e=Yf(a);Xf[e]||Zf(e,b,c)||($f(e,Rf(),b,c,d),Zf(e,b,c))};function $f(a,b,c,d,e){var g;g=["1",Vf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function Zf(a,b,c){var d=Uf(a,b,c,Wf);d&&(Xf[a]=d);return d}function Yf(a){return(a||"_gcl")+"_au"};var bg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Oc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Oc]||(g[a[h].Oc]=[]),g[a[h].Oc].push({timestamp:k[1],Bf:k[2]}))}return g};function cg(){for(var a=dg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function eg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var dg,fg,gg=function(a){dg=dg||eg();fg=fg||cg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(dg[l],dg[m],dg[n],dg[p])}return b.join("")},hg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=fg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}dg=dg||eg();fg=fg||
cg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var ig;function jg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var kg=function(){var a=Oa("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var lg=/(.*?)\*(.*?)\*(.*)/,mg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ng=/^(?:www\.|m\.|amp\.)+/,og=/([^?#]+)(\?[^#]*)?(#.*)?/,pg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,rg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(gg(String(d))))}var e=b.join("*");return["1",qg(e),e].join("*")},qg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ig)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}ig=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^ig[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},tg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=sg(d)||{};var e=gb(b,"fragment").match(pg);a.fragment=sg(e&&e[3]||
"")||{}}},sg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=lg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===qg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=hg(t[q+1]);return p}}}}catch(r){}};
function ug(a,b,c){function d(m){var n=m,p=pg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=og.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function vg(a,b,c){for(var d={},e={},g=kg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&jg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=rg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=ug(l,a.action);bb.test(w)&&(a.action=w)}}}else wg(l,a,!1)}if(!c&&Aa(e)){var v=rg(e);wg(v,a,!0)}}function wg(a,b,c){if(b.href){var d=ug(a,b.href,void 0===c?!1:c);bb.test(d)&&(b.href=d)}}
var xg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||vg(e,e.hostname,!1)}}catch(h){}},yg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=gb(hb(b.action),"host");vg(b,c,!0)}}catch(d){}},zg=function(a,b,c,d){var e=kg();e.init||(Ua(u,"mousedown",xg),Ua(u,"keyup",xg),Ua(u,"submit",yg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};kg().decorators.push(g)},Ag=function(){var a=u.location.hostname,b=mg.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(ng,"")===e.replace(ng,"")},Bg=function(a,b){return!1===a?!1:a||b||Ag()};var Cg={};var Dg=/^\w+$/,Eg=/^[\w-]+$/,Fg=/^~?[\w-]+$/,Gg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Hg(a){return a&&"string"==typeof a&&a.match(Dg)?a:"_gcl"}var Jg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Ig(b,c,d)};
function Ig(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Eg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Cg.gtm_3pds?0:Cg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Kg(a,b,c){function d(p,t){var q=Lg(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Hg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Nd?7776E3:b.Nd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Lg=function(a,b){var c=Gg[a];if(void 0!==c)return b+c},Mg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Ng(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Og=function(a,b,c,d,e){if(ka(b)){var g=Hg(e);zg(function(){for(var h={},k=0;k<a.length;++k){var l=Lg(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Pg=function(a){return a.filter(function(b){return Fg.test(b)})},Qg=function(a){for(var b=["aw","dc"],c=Hg(a&&a.prefix),d={},e=0;e<b.length;e++)Gg[b[e]]&&(d[b[e]]=Gg[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Mg(l),n={};n[g]=[Ng(l)];Kg(n,a,m)}})};var Rg=/^\d+\.fls\.doubleclick\.net$/;function Sg(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Rg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Tg(a,b){if("aw"==a||"dc"==a){var c=Sg("gcl"+a);if(c)return c.split(".")}var d=Hg(b);if("_gcl"==d){var e;e=Jg()[a]||[];if(0<e.length)return e}var g=Lg(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ng(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Pg(k)}else h=k}else h=k}else h=[];return h}
var Ug=function(){var a=Sg("gac");if(a)return decodeURIComponent(a);var b=bg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Bf);g=Pg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Vg=function(a,b,c,d,e){ag(b,c,d,e);var g=Xf[Yf(b)],h=Jg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ma.sendBeacon&&Ma.sendBeacon(t)||Ta(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Yf(b),r=Xf[q];r&&$f(q,r,c,d,e)}};var Wg;if(3===yc.sb.length)Wg="g";else{var Xg="G";Wg=Xg}
var Yg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Wg},Zg=function(a){var b=yc.m.split("-"),c=b[0].toUpperCase(),d=Yg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===yc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+yc.sb+
e};
var $g=function(a){return!(void 0===a||null===a||0===(a+"").length)},ah=function(a,b){var c;if(2===b.M)return a("ord",na(1E11,1E13)),!0;if(3===b.M)return a("ord","1"),a("num",na(1E11,1E13)),!0;if(4===b.M)return $g(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.M)c="1";else if(6===b.M)c=b.Ic;else return!1;$g(c)&&a("qty",c);$g(b.vb)&&a("cost",b.vb);$g(b.transactionId)&&a("ord",b.transactionId);return!0},bh=encodeURIComponent,ch=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:bh(p)))}var d=a.kc,e=a.protocol;e+=a.Fb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+bh(d)+(";type="+bh(a.nc))+(";cat="+bh(a.Ma));var g=a.sf||{};ra(g,function(n,p){e+=";"+bh(n)+"="+bh(p+"")});if(ah(c,a)){$g(a.Kb)&&c("u",a.Kb);$g(a.Jb)&&c("tran",a.Jb);c("gtm",Zg());!1===a.Qe&&c("npa","1");if(a.ic){var h=Tg("dc",a.va);h&&h.length&&c("gcldc",h.join("."));var k=Tg("aw",a.va);k&&k.length&&c("gclaw",k.join("."));var l=Ug();l&&c("gac",l);ag(a.va,void 0,a.nf,a.pf);
var m=Xf[Yf(a.va)];m&&c("auiddc",m)}$g(a.Ec)&&c("prd",a.Ec,!0);ra(a.Rc,function(n,p){c(n,p)});e+=b||"";$g(a.Db)&&c("~oref",a.Db);a.Fb?Sa(e+"?",a.J):Ta(e+"?",a.J,a.O)}else z(a.O)};var fh=!!f.MutationObserver,gh=void 0,hh=function(a){if(!gh){var b=function(){var c=u.body;if(c)if(fh)(new MutationObserver(function(){for(var e=0;e<gh.length;e++)z(gh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ua(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<gh.length;e++)z(gh[e])}))})}};gh=[];u.body?b():z(b)}gh.push(a)};var zh=f.clearTimeout,Ah=f.setTimeout,H=function(a,b,c){if(Oe()){b&&z(b)}else return Qa(a,b,c)},Bh=function(){return new Date},Ch=function(){return f.location.href},Dh=function(a){return gb(hb(a),"fragment")},Eh=function(a){return fb(hb(a))},Fh=null;
var Gh=function(a,b){return ld(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return af(a)},Ih=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Jh=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Nd:d},g=Jg();Kg(g,e);Qg(e)},Lh=function(a,b,c,d,e){var g=tg(),h=kg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Hg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Gg[p]){var t=Lg(p,m),q=k[t];if(q){var r=Math.min(Mg(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Mg(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var A={prefix:b,path:c,domain:d};Kg(Ig(k.gclid,k.gclsrc),A);},Mh=function(a,b,c,d,e){Og(a,b,c,d,e);},
Nh=function(a,b){if(Oe()){b&&z(b)}else Sa(a,b)},Oh=function(a){return!!Qf(a,"init",!1)},Ph=function(a){Of(a,"init",!0)},Qh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))};

var Sh=Jf.Uf;
var Th=new pa,Uh=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vh=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Vh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Th.get(q);r||(r=new RegExp(c,t),Th.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Uh(b,c)}return!1};var Xh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Yh={},Zh=encodeURI,M=encodeURIComponent,$h=Ta;var ai=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var bi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Yh.Sf=function(){var a=!1;return a};var ci=function(){var a=!1;return a};var Mi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Ni=function(){this.c=1;this.e=[];this.p=null};function Oi(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Ni}var Pi=function(a,b){Oi(a).p=b},Qi=function(a){var b=Oi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Si=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var gj=window,hj=document,ij=function(a){var b=gj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===gj["ga-disable-"+a])return!0;try{var c=gj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",hj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return hj.getElementById("__gaOptOutExtension")?!0:!1};var pj=function(a,b,c){oj(a);var d=Math.floor(wa()/1E3);Oi(a).e.push(new Mi(b,d,c,void 0));Qi(a)},qj=function(a,b,c){oj(a);var d=Math.floor(wa()/1E3);Oi(a).e.push(new Mi(b,d,c,!0))},oj=function(a){if(1===Oi(a).c){Oi(a).c=2;var b=encodeURIComponent(a);Qa(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},sj=function(a,b){},rj=function(a,b){};var Y={a:{}};

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;ch(b,c)}(function(b){Y.__flc=b;Y.__flc.g="flc";Y.__flc.h=!0;Y.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=bi(b.vtp_customVariable||[],"key","value")||{},e={Ma:b.vtp_activityTag,ic:c,va:b.vtp_conversionCookiePrefix||void 0,vb:void 0,M:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,kc:b.vtp_advertiserId,nc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,J:b.vtp_gtmOnSuccess,Db:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",Ic:void 0,Fb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Jb:b.vtp_transactionVariable,transactionId:void 0,Kb:b.vtp_userVariable,Rc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){H("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,K("google_attr").build([bi(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Sd();H("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=K("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=bi(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Zg()})||b()}else b()},b)})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Gh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(hb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eh(String(b)):String(b)})}();
Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Jh(a.vtp_name,Gh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.b=0})(function(a){return na(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Gh("gtm.url",1))||Ch();var d=b[a("vtp_component")];if(!d||"URL"==d)return Eh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Gh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.zc&&b.Bc>=b.zc)b.qc&&K("self").clearInterval(b.qc);else{b.Bc++;var c=Bh().getTime();Hh({event:b.R,"gtm.timerId":b.qc,"gtm.timerEventNumber":b.Bc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.zc,"gtm.timerStartTime":b.Zd,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Zd,"gtm.triggers":b.vg})}}}(function(b){Y.__tl=b;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.b=0})(function(b){z(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={R:b.vtp_eventName,
Bc:0,interval:Number(b.vtp_interval),zc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),vg:String(b.vtp_uniqueTriggerId||"0"),Zd:Bh().getTime()};c.qc=K("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(bi(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(bi(m.vtp_contentGroup,"index","group"),g);Ha(bi(m.vtp_dimension,"index","dimension"),h);Ha(bi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(bi(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(bi(c.vtp_contentGroup,
"index","group"),g);Ha(bi(c.vtp_dimension,"index","dimension"),h);Ha(bi(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(T){var L=[].slice.call(arguments,0);L[0]=t+L[0];p.apply(window,L)},y=function(T,L){return void 0===L?L:T(L)},x=function(T,L){if(L)for(var Z in L)L.hasOwnProperty(Z)&&v("set",T+Z,L[Z])},A=function(){},
B=function(T,L,Z){var oa=0;if(T)for(var Ba in T)if(T.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(T[Ba]):T[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);L[Ba]=Ja;oa++}return oa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",Zg(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(T,L){void 0!==
c[L]&&v("set",T,c[L])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var T=e&&e.hitCallback;ha(T)&&T();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var R="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:R})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");c.vtp_autoLinkDomains&&$d(t,c.vtp_autoLinkDomains,!!c.vtp_useHashAutoLink,!!c.vtp_decorateFormsAutoLink);}if(!a){var U=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(U="internal/"+U);a=!0;var da=D("https:","http:",
"//www.google-analytics.com/"+U,e&&e.forceSSL);H(da,function(){var T=Xd();T&&T.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();




Y.a.hjtc=["nonGoogleScripts"],function(){(function(a){Y.__hjtc=a;Y.__hjtc.g="hjtc";Y.__hjtc.h=!0;Y.__hjtc.b=0})(function(a){var b=a.vtp_hotjar_site_id;Ih("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Ih("_hjSettings",{hjid:b,hjsv:5});H("//static.hotjar.com/c/hotjar-"+M(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Ag())&&
Lh(a,h,k,l));Kh(e,c,d);Vg(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Mh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=Ha(a),c=b;c[dc.qa]=null;c[dc.Ce]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Sd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Zg()},m=function(p){return function(t,q,r){var w="DATA_LAYER"==p?Gh(r):k[q];w&&(l[t]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,H("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();

Y.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=K(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(h,k){void 0!==b[h]&&(e[k]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{H("//bat.bing.com/bat.js",function(){var h=Xh(K("UET"),{ti:b.vtp_tagId,q:d});f[c]=h;h.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){z(b.vtp_gtmOnFailure)}})}();




Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.b=0})(function(a){z(a.vtp_gtmOnFailure)})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pa(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var b=function(d,e,g){Jd(function(){var h,k=zc;k.postscribe||(k.postscribe=jc);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){z(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,$a(h),k,e)()}else Ah(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();



var tj={};tj.macro=function(a){if(Jf.ac.hasOwnProperty(a))return Jf.ac[a]},tj.onHtmlSuccess=Jf.wd(!0),tj.onHtmlFailure=Jf.wd(!1);tj.dataLayer=md;tj.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};tj.Ze=function(){zc[yc.m]=tj;za(Ic,Y.a);Wb=Wb||Jf;Xb=Bd};
tj.Nf=function(){zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.m]){var a=zc.zones;a&&a.unregisterChild(yc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=Vh;tj.Ze();gf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ua(u,"DOMContentLoaded",Hd);Ua(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ua(f,"load",Hd)}Ve=!1;"complete"===u.readyState?Xe():
Ua(f,"load",Xe);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,tj.Nf)();

})()
