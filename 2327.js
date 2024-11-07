(self.webpackChunktasks=self.webpackChunktasks||[]).push([[2327],{2327:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};o.inherits(r,i),t.JsonHighlightRules=r})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var i=n[1].length,r=e.findMatchingBracket({row:t,column:i});if(!r||r.row==t)return 0;var a=this.$getIndent(e.getLine(r.row));e.replace(new o(t,0,t,i-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),i=e("../../range").Range,r=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(o)?"start":i},this.getFoldWidgetRange=function(e,t,n,o){var i,r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);if(i=r.match(this.foldingStartMarker)){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,a);var s=e.getCommentFoldRange(n,a+i[0].length,1);return s&&!s.isMultiLine()&&(o?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}return"markbegin"!==t&&(i=r.match(this.foldingStopMarker))?(a=i.index+i[0].length,i[1]?this.closingBracketBlock(e,i[1],n,a):e.getCommentFoldRange(n,a,-1)):void 0},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),r=t,a=n.length,s=t+=1,c=e.getLength();++t<c;){var g=(n=e.getLine(t)).search(/\S/);if(-1!==g){if(o>g)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=r)break;if(l.isMultiLine())t=l.end.row;else if(o==g)break}s=t}}return new i(r,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),r=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++n<r;){t=e.getLine(n);var g=s.exec(t);if(g&&(g[1]?c--:c++,!c))break}if(n>a)return new i(a,o,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],(function(e,t,n){"use strict";var o=e("../lib/oop"),i=e("./text").Mode,r=e("./json_highlight_rules").JsonHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,s=e("./folding/cstyle").FoldMode,c=e("../worker/worker_client").WorkerClient,g=function(){this.HighlightRules=r,this.$outdent=new a,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new s};o.inherits(g,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var o=this.$getIndent(t);return"start"==e&&t.match(/^.*[\{\(\[]\s*$/)&&(o+=n),o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new c(["ace"],"ace/mode/json_worker","JsonWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/json"}.call(g.prototype),t.Mode=g})),ace.require(["ace/mode/json"],(function(t){e&&(e.exports=t)}))}}]);