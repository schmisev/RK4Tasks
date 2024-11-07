(self.webpackChunktasks=self.webpackChunktasks||[]).push([[3136],{3136:function(){!function(t){if(!(void 0!==t.window&&t.document||t.require&&t.define)){t.console||(t.console=function(){var t=Array.prototype.slice.call(arguments,0);postMessage({type:"log",data:t})},t.console.error=t.console.warn=t.console.log=t.console.trace=t.console),t.window=t,t.ace=t,t.onerror=function(t,e,n,r,i){postMessage({type:"error",data:{message:t,data:i&&i.data,file:e,line:n,col:r,stack:i&&i.stack}})},t.normalizeModule=function(e,n){if(-1!==n.indexOf("!")){var r=n.split("!");return t.normalizeModule(e,r[0])+"!"+t.normalizeModule(e,r[1])}if("."==n.charAt(0)){var i=e.split("/").slice(0,-1).join("/");for(n=(i?i+"/":"")+n;-1!==n.indexOf(".")&&o!=n;){var o=n;n=n.replace(/^\.\//,"").replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return n},t.require=function(e,n){if(n||(n=e,e=null),!n.charAt)throw new Error("worker.js require() accepts only (parentId, id) as arguments");n=t.normalizeModule(e,n);var r=t.require.modules[n];if(r)return r.initialized||(r.initialized=!0,r.exports=r.factory().exports),r.exports;if(!t.require.tlns)return console.log("unable to load "+n);var i=function(t,e){for(var n=t,r="";n;){var i=e[n];if("string"==typeof i)return i+r;if(i)return i.location.replace(/\/*$/,"/")+(r||i.main||i.name);if(!1===i)return"";var o=n.lastIndexOf("/");if(-1===o)break;r=n.substr(o)+r,n=n.slice(0,o)}return t}(n,t.require.tlns);return".js"!=i.slice(-3)&&(i+=".js"),t.require.id=n,t.require.modules[n]={},importScripts(i),t.require(e,n)},t.require.modules={},t.require.tlns={},t.define=function(e,n,r){if(2==arguments.length?(r=n,"string"!=typeof e&&(n=e,e=t.require.id)):1==arguments.length&&(r=e,n=[],e=t.require.id),"function"==typeof r){n.length||(n=["require","exports","module"]);var i=function(n){return t.require(e,n)};t.require.modules[e]={exports:{},factory:function(){var t=this,e=r.apply(this,n.slice(0,r.length).map((function(e){switch(e){case"require":return i;case"exports":return t.exports;case"module":return t;default:return i(e)}})));return e&&(t.exports=e),t}}}else t.require.modules[e]={exports:r,initialized:!0}},t.define.amd={},t.require.tlns={},t.initBaseUrls=function(t){for(var e in t)this.require.tlns[e]=t[e]},t.initSender=function(){var e=t.require("ace/lib/event_emitter").EventEmitter,n=t.require("ace/lib/oop"),r=function(){};return function(){n.implement(this,e),this.callback=function(t,e){postMessage({type:"call",id:e,data:t})},this.emit=function(t,e){postMessage({type:"event",name:t,data:e})}}.call(r.prototype),new r};var e=t.main=null,n=t.sender=null;t.onmessage=function(r){var i=r.data;if(i.event&&n)n._signal(i.event,i.data);else if(i.command)if(e[i.command])e[i.command].apply(e,i.args);else{if(!t[i.command])throw new Error("Unknown command:"+i.command);t[i.command].apply(t,i.args)}else if(i.init){t.initBaseUrls(i.tlns),n=t.sender=t.initSender();var o=this.require(i.module)[i.classname];e=t.main=new o(n)}}}}(this),ace.define("ace/lib/oop",[],(function(t,e,n){"use strict";e.inherits=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})},e.mixin=function(t,e){for(var n in e)t[n]=e[n];return t},e.implement=function(t,n){e.mixin(t,n)}})),ace.define("ace/apply_delta",[],(function(t,e,n){"use strict";e.applyDelta=function(t,e,n){var r=e.start.row,i=e.start.column,o=t[r]||"";switch(e.action){case"insert":if(1===e.lines.length)t[r]=o.substring(0,i)+e.lines[0]+o.substring(i);else{var s=[r,1].concat(e.lines);t.splice.apply(t,s),t[r]=o.substring(0,i)+t[r],t[r+e.lines.length-1]+=o.substring(i)}break;case"remove":var a=e.end.column,c=e.end.row;r===c?t[r]=o.substring(0,i)+o.substring(a):t.splice(r,c-r+1,o.substring(0,i)+t[c].substring(a))}}})),ace.define("ace/lib/event_emitter",[],(function(t,e,n){"use strict";var r={},i=function(){this.propagationStopped=!0},o=function(){this.defaultPrevented=!0};r._emit=r._dispatchEvent=function(t,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[t]||[],r=this._defaultHandlers[t];if(n.length||r){"object"==typeof e&&e||(e={}),e.type||(e.type=t),e.stopPropagation||(e.stopPropagation=i),e.preventDefault||(e.preventDefault=o),n=n.slice();for(var s=0;s<n.length&&(n[s](e,this),!e.propagationStopped);s++);return r&&!e.defaultPrevented?r(e,this):void 0}},r._signal=function(t,e){var n=(this._eventRegistry||{})[t];if(n){n=n.slice();for(var r=0;r<n.length;r++)n[r](e,this)}},r.once=function(t,e){var n=this;if(this.on(t,(function r(){n.off(t,r),e.apply(null,arguments)})),!e)return new Promise((function(t){e=t}))},r.setDefaultHandler=function(t,e){var n=this._defaultHandlers;if(n||(n=this._defaultHandlers={_disabled_:{}}),n[t]){var r=n[t],i=n._disabled_[t];i||(n._disabled_[t]=i=[]),i.push(r);var o=i.indexOf(e);-1!=o&&i.splice(o,1)}n[t]=e},r.removeDefaultHandler=function(t,e){var n=this._defaultHandlers;if(n){var r=n._disabled_[t];if(n[t]==e)r&&this.setDefaultHandler(t,r.pop());else if(r){var i=r.indexOf(e);-1!=i&&r.splice(i,1)}}},r.on=r.addEventListener=function(t,e,n){this._eventRegistry=this._eventRegistry||{};var r=this._eventRegistry[t];return r||(r=this._eventRegistry[t]=[]),-1==r.indexOf(e)&&r[n?"unshift":"push"](e),e},r.off=r.removeListener=r.removeEventListener=function(t,e){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[t];if(n){var r=n.indexOf(e);-1!==r&&n.splice(r,1)}},r.removeAllListeners=function(t){t||(this._eventRegistry=this._defaultHandlers=void 0),this._eventRegistry&&(this._eventRegistry[t]=void 0),this._defaultHandlers&&(this._defaultHandlers[t]=void 0)},e.EventEmitter=r})),ace.define("ace/range",[],(function(t,e,n){"use strict";var r=function(){function t(t,e,n,r){this.start={row:t,column:e},this.end={row:n,column:r}}return t.prototype.isEqual=function(t){return this.start.row===t.start.row&&this.end.row===t.end.row&&this.start.column===t.start.column&&this.end.column===t.end.column},t.prototype.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},t.prototype.contains=function(t,e){return 0==this.compare(t,e)},t.prototype.compareRange=function(t){var e,n=t.end,r=t.start;return 1==(e=this.compare(n.row,n.column))?1==(e=this.compare(r.row,r.column))?2:0==e?1:0:-1==e?-2:-1==(e=this.compare(r.row,r.column))?-1:1==e?42:0},t.prototype.comparePoint=function(t){return this.compare(t.row,t.column)},t.prototype.containsRange=function(t){return 0==this.comparePoint(t.start)&&0==this.comparePoint(t.end)},t.prototype.intersects=function(t){var e=this.compareRange(t);return-1==e||0==e||1==e},t.prototype.isEnd=function(t,e){return this.end.row==t&&this.end.column==e},t.prototype.isStart=function(t,e){return this.start.row==t&&this.start.column==e},t.prototype.setStart=function(t,e){"object"==typeof t?(this.start.column=t.column,this.start.row=t.row):(this.start.row=t,this.start.column=e)},t.prototype.setEnd=function(t,e){"object"==typeof t?(this.end.column=t.column,this.end.row=t.row):(this.end.row=t,this.end.column=e)},t.prototype.inside=function(t,e){return 0==this.compare(t,e)&&!this.isEnd(t,e)&&!this.isStart(t,e)},t.prototype.insideStart=function(t,e){return 0==this.compare(t,e)&&!this.isEnd(t,e)},t.prototype.insideEnd=function(t,e){return 0==this.compare(t,e)&&!this.isStart(t,e)},t.prototype.compare=function(t,e){return this.isMultiLine()||t!==this.start.row?t<this.start.row?-1:t>this.end.row?1:this.start.row===t?e>=this.start.column?0:-1:this.end.row===t?e<=this.end.column?0:1:0:e<this.start.column?-1:e>this.end.column?1:0},t.prototype.compareStart=function(t,e){return this.start.row==t&&this.start.column==e?-1:this.compare(t,e)},t.prototype.compareEnd=function(t,e){return this.end.row==t&&this.end.column==e?1:this.compare(t,e)},t.prototype.compareInside=function(t,e){return this.end.row==t&&this.end.column==e?1:this.start.row==t&&this.start.column==e?-1:this.compare(t,e)},t.prototype.clipRows=function(e,n){if(this.end.row>n)var r={row:n+1,column:0};else this.end.row<e&&(r={row:e,column:0});if(this.start.row>n)var i={row:n+1,column:0};else this.start.row<e&&(i={row:e,column:0});return t.fromPoints(i||this.start,r||this.end)},t.prototype.extend=function(e,n){var r=this.compare(e,n);if(0==r)return this;if(-1==r)var i={row:e,column:n};else var o={row:e,column:n};return t.fromPoints(i||this.start,o||this.end)},t.prototype.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},t.prototype.isMultiLine=function(){return this.start.row!==this.end.row},t.prototype.clone=function(){return t.fromPoints(this.start,this.end)},t.prototype.collapseRows=function(){return 0==this.end.column?new t(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new t(this.start.row,0,this.end.row,0)},t.prototype.toScreenRange=function(e){var n=e.documentToScreenPosition(this.start),r=e.documentToScreenPosition(this.end);return new t(n.row,n.column,r.row,r.column)},t.prototype.moveBy=function(t,e){this.start.row+=t,this.start.column+=e,this.end.row+=t,this.end.column+=e},t}();r.fromPoints=function(t,e){return new r(t.row,t.column,e.row,e.column)},r.comparePoints=function(t,e){return t.row-e.row||t.column-e.column},e.Range=r})),ace.define("ace/anchor",[],(function(t,e,n){"use strict";var r=t("./lib/oop"),i=t("./lib/event_emitter").EventEmitter,o=function(){function t(t,e,n){this.$onChange=this.onChange.bind(this),this.attach(t),"number"!=typeof e?this.setPosition(e.row,e.column):this.setPosition(e,n)}return t.prototype.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},t.prototype.getDocument=function(){return this.document},t.prototype.onChange=function(t){if(!(t.start.row==t.end.row&&t.start.row!=this.row||t.start.row>this.row)){var e=function(t,e,n){var r="insert"==t.action,i=(r?1:-1)*(t.end.row-t.start.row),o=(r?1:-1)*(t.end.column-t.start.column),a=t.start,c=r?a:t.end;return s(e,a,n)?{row:e.row,column:e.column}:s(c,e,!n)?{row:e.row+i,column:e.column+(e.row==c.row?o:0)}:{row:a.row,column:a.column}}(t,{row:this.row,column:this.column},this.$insertRight);this.setPosition(e.row,e.column,!0)}},t.prototype.setPosition=function(t,e,n){var r;if(r=n?{row:t,column:e}:this.$clipPositionToDocument(t,e),this.row!=r.row||this.column!=r.column){var i={row:this.row,column:this.column};this.row=r.row,this.column=r.column,this._signal("change",{old:i,value:r})}},t.prototype.detach=function(){this.document.off("change",this.$onChange)},t.prototype.attach=function(t){this.document=t||this.document,this.document.on("change",this.$onChange)},t.prototype.$clipPositionToDocument=function(t,e){var n={};return t>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):t<0?(n.row=0,n.column=0):(n.row=t,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,e))),e<0&&(n.column=0),n},t}();function s(t,e,n){var r=n?t.column<=e.column:t.column<e.column;return t.row<e.row||t.row==e.row&&r}o.prototype.$insertRight=!1,r.implement(o.prototype,i),e.Anchor=o})),ace.define("ace/document",[],(function(t,e,n){"use strict";var r=t("./lib/oop"),i=t("./apply_delta").applyDelta,o=t("./lib/event_emitter").EventEmitter,s=t("./range").Range,a=t("./anchor").Anchor,c=function(){function t(t){this.$lines=[""],0===t.length?this.$lines=[""]:Array.isArray(t)?this.insertMergedLines({row:0,column:0},t):this.insert({row:0,column:0},t)}return t.prototype.setValue=function(t){var e=this.getLength()-1;this.remove(new s(0,0,e,this.getLine(e).length)),this.insert({row:0,column:0},t||"")},t.prototype.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},t.prototype.createAnchor=function(t,e){return new a(this,t,e)},t.prototype.$detectNewLine=function(t){var e=t.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=e?e[1]:"\n",this._signal("changeNewLineMode")},t.prototype.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";default:return this.$autoNewLine||"\n"}},t.prototype.setNewLineMode=function(t){this.$newLineMode!==t&&(this.$newLineMode=t,this._signal("changeNewLineMode"))},t.prototype.getNewLineMode=function(){return this.$newLineMode},t.prototype.isNewLine=function(t){return"\r\n"==t||"\r"==t||"\n"==t},t.prototype.getLine=function(t){return this.$lines[t]||""},t.prototype.getLines=function(t,e){return this.$lines.slice(t,e+1)},t.prototype.getAllLines=function(){return this.getLines(0,this.getLength())},t.prototype.getLength=function(){return this.$lines.length},t.prototype.getTextRange=function(t){return this.getLinesForRange(t).join(this.getNewLineCharacter())},t.prototype.getLinesForRange=function(t){var e;if(t.start.row===t.end.row)e=[this.getLine(t.start.row).substring(t.start.column,t.end.column)];else{(e=this.getLines(t.start.row,t.end.row))[0]=(e[0]||"").substring(t.start.column);var n=e.length-1;t.end.row-t.start.row==n&&(e[n]=e[n].substring(0,t.end.column))}return e},t.prototype.insertLines=function(t,e){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(t,e)},t.prototype.removeLines=function(t,e){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(t,e)},t.prototype.insertNewLine=function(t){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(t,["",""])},t.prototype.insert=function(t,e){return this.getLength()<=1&&this.$detectNewLine(e),this.insertMergedLines(t,this.$split(e))},t.prototype.insertInLine=function(t,e){var n=this.clippedPos(t.row,t.column),r=this.pos(t.row,t.column+e.length);return this.applyDelta({start:n,end:r,action:"insert",lines:[e]},!0),this.clonePos(r)},t.prototype.clippedPos=function(t,e){var n=this.getLength();void 0===t?t=n:t<0?t=0:t>=n&&(t=n-1,e=void 0);var r=this.getLine(t);return null==e&&(e=r.length),{row:t,column:e=Math.min(Math.max(e,0),r.length)}},t.prototype.clonePos=function(t){return{row:t.row,column:t.column}},t.prototype.pos=function(t,e){return{row:t,column:e}},t.prototype.$clipPosition=function(t){var e=this.getLength();return t.row>=e?(t.row=Math.max(0,e-1),t.column=this.getLine(e-1).length):(t.row=Math.max(0,t.row),t.column=Math.min(Math.max(t.column,0),this.getLine(t.row).length)),t},t.prototype.insertFullLines=function(t,e){var n=0;(t=Math.min(Math.max(t,0),this.getLength()))<this.getLength()?(e=e.concat([""]),n=0):(e=[""].concat(e),t--,n=this.$lines[t].length),this.insertMergedLines({row:t,column:n},e)},t.prototype.insertMergedLines=function(t,e){var n=this.clippedPos(t.row,t.column),r={row:n.row+e.length-1,column:(1==e.length?n.column:0)+e[e.length-1].length};return this.applyDelta({start:n,end:r,action:"insert",lines:e}),this.clonePos(r)},t.prototype.remove=function(t){var e=this.clippedPos(t.start.row,t.start.column),n=this.clippedPos(t.end.row,t.end.column);return this.applyDelta({start:e,end:n,action:"remove",lines:this.getLinesForRange({start:e,end:n})}),this.clonePos(e)},t.prototype.removeInLine=function(t,e,n){var r=this.clippedPos(t,e),i=this.clippedPos(t,n);return this.applyDelta({start:r,end:i,action:"remove",lines:this.getLinesForRange({start:r,end:i})},!0),this.clonePos(r)},t.prototype.removeFullLines=function(t,e){t=Math.min(Math.max(0,t),this.getLength()-1);var n=(e=Math.min(Math.max(0,e),this.getLength()-1))==this.getLength()-1&&t>0,r=e<this.getLength()-1,i=n?t-1:t,o=n?this.getLine(i).length:0,a=r?e+1:e,c=r?0:this.getLine(a).length,u=new s(i,o,a,c),l=this.$lines.slice(t,e+1);return this.applyDelta({start:u.start,end:u.end,action:"remove",lines:this.getLinesForRange(u)}),l},t.prototype.removeNewLine=function(t){t<this.getLength()-1&&t>=0&&this.applyDelta({start:this.pos(t,this.getLine(t).length),end:this.pos(t+1,0),action:"remove",lines:["",""]})},t.prototype.replace=function(t,e){return t instanceof s||(t=s.fromPoints(t.start,t.end)),0===e.length&&t.isEmpty()?t.start:e==this.getTextRange(t)?t.end:(this.remove(t),e?this.insert(t.start,e):t.start)},t.prototype.applyDeltas=function(t){for(var e=0;e<t.length;e++)this.applyDelta(t[e])},t.prototype.revertDeltas=function(t){for(var e=t.length-1;e>=0;e--)this.revertDelta(t[e])},t.prototype.applyDelta=function(t,e){var n="insert"==t.action;(n?t.lines.length<=1&&!t.lines[0]:!s.comparePoints(t.start,t.end))||(n&&t.lines.length>2e4?this.$splitAndapplyLargeDelta(t,2e4):(i(this.$lines,t,e),this._signal("change",t)))},t.prototype.$safeApplyDelta=function(t){var e=this.$lines.length;("remove"==t.action&&t.start.row<e&&t.end.row<e||"insert"==t.action&&t.start.row<=e)&&this.applyDelta(t)},t.prototype.$splitAndapplyLargeDelta=function(t,e){for(var n=t.lines,r=n.length-e+1,i=t.start.row,o=t.start.column,s=0,a=0;s<r;s=a){a+=e-1;var c=n.slice(s,a);c.push(""),this.applyDelta({start:this.pos(i+s,o),end:this.pos(i+a,o=0),action:t.action,lines:c},!0)}t.lines=n.slice(s),t.start.row=i+s,t.start.column=o,this.applyDelta(t,!0)},t.prototype.revertDelta=function(t){this.$safeApplyDelta({start:this.clonePos(t.start),end:this.clonePos(t.end),action:"insert"==t.action?"remove":"insert",lines:t.lines.slice()})},t.prototype.indexToPosition=function(t,e){for(var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=e||0,o=n.length;i<o;i++)if((t-=n[i].length+r)<0)return{row:i,column:t+n[i].length+r};return{row:o-1,column:t+n[o-1].length+r}},t.prototype.positionToIndex=function(t,e){for(var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=0,o=Math.min(t.row,n.length),s=e||0;s<o;++s)i+=n[s].length+r;return i+t.column},t.prototype.$split=function(t){return t.split(/\r\n|\r|\n/)},t}();c.prototype.$autoNewLine="",c.prototype.$newLineMode="auto",r.implement(c.prototype,o),e.Document=c})),ace.define("ace/lib/deep_copy",[],(function(t,e,n){e.deepCopy=function t(e){if("object"!=typeof e||!e)return e;var n;if(Array.isArray(e)){n=[];for(var r=0;r<e.length;r++)n[r]=t(e[r]);return n}if("[object Object]"!==Object.prototype.toString.call(e))return e;for(var r in n={},e)n[r]=t(e[r]);return n}})),ace.define("ace/lib/lang",[],(function(t,e,n){"use strict";e.last=function(t){return t[t.length-1]},e.stringReverse=function(t){return t.split("").reverse().join("")},e.stringRepeat=function(t,e){for(var n="";e>0;)1&e&&(n+=t),(e>>=1)&&(t+=t);return n};var r=/^\s\s*/,i=/\s\s*$/;e.stringTrimLeft=function(t){return t.replace(r,"")},e.stringTrimRight=function(t){return t.replace(i,"")},e.copyObject=function(t){var e={};for(var n in t)e[n]=t[n];return e},e.copyArray=function(t){for(var e=[],n=0,r=t.length;n<r;n++)t[n]&&"object"==typeof t[n]?e[n]=this.copyObject(t[n]):e[n]=t[n];return e},e.deepCopy=t("./deep_copy").deepCopy,e.arrayToMap=function(t){for(var e={},n=0;n<t.length;n++)e[t[n]]=1;return e},e.createMap=function(t){var e=Object.create(null);for(var n in t)e[n]=t[n];return e},e.arrayRemove=function(t,e){for(var n=0;n<=t.length;n++)e===t[n]&&t.splice(n,1)},e.escapeRegExp=function(t){return t.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},e.escapeHTML=function(t){return(""+t).replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},e.getMatchOffsets=function(t,e){var n=[];return t.replace(e,(function(t){n.push({offset:arguments[arguments.length-2],length:t.length})})),n},e.deferredCall=function(t){var e=null,n=function(){e=null,t()},r=function(t){return r.cancel(),e=setTimeout(n,t||0),r};return r.schedule=r,r.call=function(){return this.cancel(),t(),r},r.cancel=function(){return clearTimeout(e),e=null,r},r.isPending=function(){return e},r},e.delayedCall=function(t,e){var n=null,r=function(){n=null,t()},i=function(t){null==n&&(n=setTimeout(r,t||e))};return i.delay=function(t){n&&clearTimeout(n),n=setTimeout(r,t||e)},i.schedule=i,i.call=function(){this.cancel(),t()},i.cancel=function(){n&&clearTimeout(n),n=null},i.isPending=function(){return n},i},e.supportsLookbehind=function(){try{new RegExp("(?<=.)")}catch(t){return!1}return!0},e.skipEmptyMatch=function(t,e,n){return n&&t.codePointAt(e)>65535?2:1}})),ace.define("ace/worker/mirror",[],(function(t,e,n){"use strict";var r=t("../document").Document,i=t("../lib/lang"),o=e.Mirror=function(t){this.sender=t;var e=this.doc=new r(""),n=this.deferredUpdate=i.delayedCall(this.onUpdate.bind(this)),o=this;t.on("change",(function(t){var r=t.data;if(r[0].start)e.applyDeltas(r);else for(var i=0;i<r.length;i+=2){var s,a;if(("insert"==(s=Array.isArray(r[i+1])?{action:"insert",start:r[i],lines:r[i+1]}:{action:"remove",start:r[i],end:r[i+1]}).action?s.start:s.end).row>=e.$lines.length)throw(a=new Error("Invalid delta")).data={path:o.$path,linesLength:e.$lines.length,start:s.start,end:s.end},a;e.applyDelta(s,!0)}if(o.$timeout)return n.schedule(o.$timeout);o.onUpdate()}))};(function(){this.$timeout=500,this.setTimeout=function(t){this.$timeout=t},this.setValue=function(t){this.doc.setValue(t),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(t){this.sender.callback(this.doc.getValue(),t)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(o.prototype)})),ace.define("ace/mode/json/json_parse",[],(function(t,e,n){"use strict";var r,i,o,s,a={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},c=function(t){throw{name:"SyntaxError",message:t,at:r,text:o}},u=function(t){return t&&t!==i&&c("Expected '"+t+"' instead of '"+i+"'"),i=o.charAt(r),r+=1,i},l=function(){var t,e="";for("-"===i&&(e="-",u("-"));i>="0"&&i<="9";)e+=i,u();if("."===i)for(e+=".";u()&&i>="0"&&i<="9";)e+=i;if("e"===i||"E"===i)for(e+=i,u(),"-"!==i&&"+"!==i||(e+=i,u());i>="0"&&i<="9";)e+=i,u();if(t=+e,!isNaN(t))return t;c("Bad number")},h=function(){var t,e,n,r="";if('"'===i)for(;u();){if('"'===i)return u(),r;if("\\"===i)if(u(),"u"===i){for(n=0,e=0;e<4&&(t=parseInt(u(),16),isFinite(t));e+=1)n=16*n+t;r+=String.fromCharCode(n)}else{if("string"!=typeof a[i])break;r+=a[i]}else{if("\n"==i||"\r"==i)break;r+=i}}c("Bad string")},p=function(){for(;i&&i<=" ";)u()};return s=function(){switch(p(),i){case"{":return function(){var t,e={};if("{"===i){if(u("{"),p(),"}"===i)return u("}"),e;for(;i;){if(t=h(),p(),u(":"),Object.hasOwnProperty.call(e,t)&&c('Duplicate key "'+t+'"'),e[t]=s(),p(),"}"===i)return u("}"),e;u(","),p()}}c("Bad object")}();case"[":return function(){var t=[];if("["===i){if(u("["),p(),"]"===i)return u("]"),t;for(;i;){if(t.push(s()),p(),"]"===i)return u("]"),t;u(","),p()}}c("Bad array")}();case'"':return h();case"-":return l();default:return i>="0"&&i<="9"?l():function(){switch(i){case"t":return u("t"),u("r"),u("u"),u("e"),!0;case"f":return u("f"),u("a"),u("l"),u("s"),u("e"),!1;case"n":return u("n"),u("u"),u("l"),u("l"),null}c("Unexpected '"+i+"'")}()}},function(t,e){var n;return o=t,r=0,i=" ",n=s(),p(),i&&c("Syntax error"),"function"==typeof e?function t(n,r){var i,o,s=n[r];if(s&&"object"==typeof s)for(i in s)Object.hasOwnProperty.call(s,i)&&(void 0!==(o=t(s,i))?s[i]=o:delete s[i]);return e.call(n,r,s)}({"":n},""):n}})),ace.define("ace/mode/json_worker",[],(function(t,e,n){"use strict";var r=t("../lib/oop"),i=t("../worker/mirror").Mirror,o=t("./json/json_parse"),s=e.JsonWorker=function(t){i.call(this,t),this.setTimeout(200)};r.inherits(s,i),function(){this.onUpdate=function(){var t=this.doc.getValue(),e=[];try{t&&o(t)}catch(t){var n=this.doc.indexToPosition(t.at-1);e.push({row:n.row,column:n.column,text:t.message,type:"error"})}this.sender.emit("annotate",e)}}.call(s.prototype)}))}}]);