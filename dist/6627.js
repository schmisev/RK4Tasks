(self.webpackChunktasks=self.webpackChunktasks||[]).push([[6627],{6627:(e,s,t)=>{e=t.nmd(e),ace.define("ace/mode/csp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,s,t){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,c=function(){var e=this.createKeywordMapper({"constant.language":"child-src|connect-src|default-src|font-src|frame-src|img-src|manifest-src|media-src|object-src|script-src|style-src|worker-src|base-uri|plugin-types|sandbox|disown-opener|form-action|frame-ancestors|report-uri|report-to|upgrade-insecure-requests|block-all-mixed-content|require-sri-for|reflected-xss|referrer|policy-uri",variable:"'none'|'self'|'unsafe-inline'|'unsafe-eval'|'strict-dynamic'|'unsafe-hashed-attributes'"},"identifier",!0);this.$rules={start:[{token:"string.link",regex:/https?:[^;\s]*/},{token:"operator.punctuation",regex:/;/},{token:e,regex:/[^\s;]+/}]}};r.inherits(c,i),s.CspHighlightRules=c})),ace.define("ace/mode/csp",["require","exports","module","ace/mode/text","ace/mode/csp_highlight_rules","ace/lib/oop"],(function(e,s,t){"use strict";var r=e("./text").Mode,i=e("./csp_highlight_rules").CspHighlightRules,c=function(){this.HighlightRules=i};e("../lib/oop").inherits(c,r),function(){this.$id="ace/mode/csp"}.call(c.prototype),s.Mode=c})),ace.require(["ace/mode/csp"],(function(s){e&&(e.exports=s)}))}}]);