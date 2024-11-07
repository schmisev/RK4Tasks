(self.webpackChunktasks=self.webpackChunktasks||[]).push([[1004],{1004:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/jexl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){var e=this.createKeywordMapper({keyword:"return|var|function|and|or|not|if|for|while|do|continue|break","constant.language":"null","support.function":"empty|size|new"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},{token:"comment",regex:"##.*$"},{token:"comment",regex:"\\/\\*",next:"comment"},{token:["comment","text"],regex:"(#pragma)(\\s.*$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"`",push:[{token:"constant.language.escape",regex:"\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}||.)"},{token:"string",regex:"`",next:"pop"},{token:"lparen",regex:"\\${",push:[{token:"rparen",regex:"}",next:"pop"},{include:"start"}]},{defaultToken:"string"}]},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/},{token:"constant.numeric",regex:/[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"string.regexp",regex:"~/",push:[{token:"constant.language.escape",regex:"\\\\/"},{token:"string.regexp",regex:"$|/",next:"pop"},{defaultToken:"string.regexp"}]},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"&&|\\|\\||!|&|\\||\\^|~|\\?|:|\\?\\?|==|!=|<|<=|>|>=|=~|!~|=\\^|=\\$|!\\$|\\+|\\-|\\*|%|\\/|="},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{token:"punctuation",regex:"[,.]"},{token:"storage.type.annotation",regex:"@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()};o.inherits(r,i),t.JexlHighlightRules=r})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),i=e("../../range").Range,r=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(o)?"start":i},this.getFoldWidgetRange=function(e,t,n,o){var i,r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);if(i=r.match(this.foldingStartMarker)){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,a);var s=e.getCommentFoldRange(n,a+i[0].length,1);return s&&!s.isMultiLine()&&(o?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}return"markbegin"!==t&&(i=r.match(this.foldingStopMarker))?(a=i.index+i[0].length,i[1]?this.closingBracketBlock(e,i[1],n,a):e.getCommentFoldRange(n,a,-1)):void 0},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),r=t,a=n.length,s=t+=1,g=e.getLength();++t<g;){var l=(n=e.getLine(t)).search(/\S/);if(-1!==l){if(o>l)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=r)break;if(c.isMultiLine())t=c.end.row;else if(o==l)break}s=t}}return new i(r,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),r=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;++n<r;){t=e.getLine(n);var l=s.exec(t);if(l&&(l[1]?g--:g++,!g))break}if(n>a)return new i(a,o,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/jexl",["require","exports","module","ace/lib/oop","ace/mode/jexl_highlight_rules","ace/mode/text","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),i=e("./jexl_highlight_rules").JexlHighlightRules,r=e("./text").Mode,a=e("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=i,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new a};o.inherits(s,r),function(){this.lineCommentStart=["//","##"],this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/jexl"}.call(s.prototype),t.Mode=s})),ace.require(["ace/mode/jexl"],(function(t){e&&(e.exports=t)}))}}]);