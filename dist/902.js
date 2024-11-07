(self.webpackChunktasks=self.webpackChunktasks||[]).push([[902],{902:(e,t,r)=>{e=r.nmd(e),ace.define("ace/mode/eiffel_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,r){"use strict";var n=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,o=function(){var e=this.createKeywordMapper({"constant.language":"Void","constant.language.boolean":"True|False","variable.language":"Current|Result","keyword.operator":"and|implies|or|xor",keyword:"across|agent|alias|all|attached|as|assign|attribute|check|class|convert|create|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|Precursor|redefine|rename|require|rescue|retry|select|separate|some|then|undefine|until|variant|when"},"identifier",!0),t=/(?:[^"%\b\f\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)+?/;this.$rules={start:[{token:"string.quoted.other",regex:/"\[/,next:"aligned_verbatim_string"},{token:"string.quoted.other",regex:/"\{/,next:"non-aligned_verbatim_string"},{token:"string.quoted.double",regex:/"(?:[^%\b\f\n\r\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)*?"/},{token:"comment.line.double-dash",regex:/--.*/},{token:"constant.character",regex:/'(?:[^%\b\f\n\r\t\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)'/},{token:"constant.numeric",regex:/\b0(?:[xX][\da-fA-F](?:_*[\da-fA-F])*|[cC][0-7](?:_*[0-7])*|[bB][01](?:_*[01])*)\b/},{token:"constant.numeric",regex:/(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/},{token:"paren.lparen",regex:/[\[({]|<<|\|\(/},{token:"paren.rparen",regex:/[\])}]|>>|\|\)/},{token:"keyword.operator",regex:/:=|->|\.(?=\w)|[;,:?]/},{token:"keyword.operator",regex:/\\\\|\|\.\.\||\.\.|\/[~\/]?|[><\/]=?|[-+*^=~]/},{token:function(t){var r=e(t);return"identifier"===r&&t===t.toUpperCase()&&(r="entity.name.type"),r},regex:/[a-zA-Z][a-zA-Z\d_]*\b/},{token:"text",regex:/\s+/}],aligned_verbatim_string:[{token:"string",regex:/]"/,next:"start"},{token:"string",regex:t}],"non-aligned_verbatim_string":[{token:"string.quoted.other",regex:/}"/,next:"start"},{token:"string.quoted.other",regex:t}]}};n.inherits(o,i),t.EiffelHighlightRules=o})),ace.define("ace/mode/eiffel",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/eiffel_highlight_rules"],(function(e,t,r){"use strict";var n=e("../lib/oop"),i=e("./text").Mode,o=e("./eiffel_highlight_rules").EiffelHighlightRules,a=function(){this.HighlightRules=o,this.$behaviour=this.$defaultBehaviour};n.inherits(a,i),function(){this.lineCommentStart="--",this.$id="ace/mode/eiffel"}.call(a.prototype),t.Mode=a})),ace.require(["ace/mode/eiffel"],(function(t){e&&(e.exports=t)}))}}]);