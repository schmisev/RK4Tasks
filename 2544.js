(self.webpackChunktasks=self.webpackChunktasks||[]).push([[2544],{2544:(e,t,n)=>{e=n.nmd(e),ace.define("ace/ext/static-css",["require","exports","module"],(function(e,t,n){n.exports=".ace_static_highlight {\n    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Source Code Pro', 'source-code-pro', 'Droid Sans Mono', monospace;\n    font-size: 12px;\n    white-space: pre-wrap\n}\n\n.ace_static_highlight .ace_gutter {\n    width: 2em;\n    text-align: right;\n    padding: 0 3px 0 0;\n    margin-right: 3px;\n    contain: none;\n}\n\n.ace_static_highlight.ace_show_gutter .ace_line {\n    padding-left: 2.6em;\n}\n\n.ace_static_highlight .ace_line { position: relative; }\n\n.ace_static_highlight .ace_gutter-cell {\n    -moz-user-select: -moz-none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n}\n\n\n.ace_static_highlight .ace_gutter-cell:before {\n    content: counter(ace_line, decimal);\n    counter-increment: ace_line;\n}\n.ace_static_highlight {\n    counter-reset: ace_line;\n}\n"})),ace.define("ace/ext/static_highlight",["require","exports","module","ace/edit_session","ace/layer/text","ace/ext/static-css","ace/config","ace/lib/dom","ace/lib/lang"],(function(e,t,n){"use strict";var i=e("../edit_session").EditSession,s=e("../layer/text").Text,a=e("./static-css"),r=e("../config"),o=e("../lib/dom"),c=e("../lib/lang").escapeHTML,h=function(){function e(e){this.className,this.type=e,this.style={},this.textContent=""}return e.prototype.cloneNode=function(){return this},e.prototype.appendChild=function(e){this.textContent+=e.toString()},e.prototype.toString=function(){var e=[];if("fragment"!=this.type){e.push("<",this.type),this.className&&e.push(" class='",this.className,"'");var t=[];for(var n in this.style)t.push(n,":",this.style[n]);t.length&&e.push(" style='",t.join(""),"'"),e.push(">")}return this.textContent&&e.push(this.textContent),"fragment"!=this.type&&e.push("</",this.type,">"),e.join("")},e}(),l={createTextNode:function(e,t){return c(e)},createElement:function(e){return new h(e)},createFragment:function(){return new h("fragment")}},u=function(){this.config={},this.dom=l};u.prototype=s.prototype;var p=function(e,t,n){var i=e.className.match(/lang-(\w+)/),s=t.mode||i&&"ace/mode/"+i[1];if(!s)return!1;var a=t.theme||"ace/theme/textmate",r="",c=[];if(e.firstElementChild)for(var h=0,l=0;l<e.childNodes.length;l++){var u=e.childNodes[l];3==u.nodeType?(h+=u.data.length,r+=u.data):c.push(h,u)}else r=e.textContent,t.trim&&(r=r.trim());p.render(r,s,a,t.firstLineNumber,!t.showGutter,(function(t){o.importCssString(t.css,"ace_highlight",!0),e.innerHTML=t.html;for(var i=e.firstChild.firstChild,s=0;s<c.length;s+=2){var a=t.session.doc.indexToPosition(c[s]),r=c[s+1],h=i.children[a.row];h&&h.appendChild(r)}n&&n()}))};p.render=function(e,t,n,s,a,o){var c,h=1,l=i.prototype.$modes;function u(){var i=p.renderSync(e,t,n,s,a);return o?o(i):i}return"string"==typeof n&&(h++,r.loadModule(["theme",n],(function(e){n=e,--h||u()}))),t&&"object"==typeof t&&!t.getTokenizer&&(t=(c=t).path),"string"==typeof t&&(h++,r.loadModule(["mode",t],(function(e){l[t]&&!c||(l[t]=new e.Mode(c)),t=l[t],--h||u()}))),--h||u()},p.renderSync=function(e,t,n,s,r){s=parseInt(s||1,10);var o=new i("");o.setUseWorker(!1),o.setMode(t);var c=new u;c.setSession(o),Object.keys(c.$tabStrings).forEach((function(e){if("string"==typeof c.$tabStrings[e]){var t=l.createFragment();t.textContent=c.$tabStrings[e],c.$tabStrings[e]=t}})),o.setValue(e);var h=o.getLength(),p=l.createElement("div");p.className=n.cssClass;var g=l.createElement("div");g.className="ace_static_highlight"+(r?"":" ace_show_gutter"),g.style["counter-reset"]="ace_line "+(s-1);for(var d=0;d<h;d++){var f=l.createElement("div");if(f.className="ace_line",!r){var m=l.createElement("span");m.className="ace_gutter ace_gutter-cell",m.textContent="",f.appendChild(m)}c.$renderLine(f,d,!1),f.textContent+="\n",g.appendChild(f)}return p.appendChild(g),{css:a+n.cssText,html:p.toString(),session:o}},n.exports=p,n.exports.highlight=p})),ace.require(["ace/ext/static_highlight"],(function(t){e&&(e.exports=t)}))}}]);