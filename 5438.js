(self.webpackChunktasks=self.webpackChunktasks||[]).push([[5438],{5438:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/red_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"keyword.operator",regex:/\s([\-+%/=<>*]|(?:\*\*\|\/\/|==|>>>?|<>|<<|=>|<=|=\?))(\s|(?=:))/},{token:"string.email",regex:/\w[-\w._]*\@\w[-\w._]*/},{token:"value.time",regex:/\b\d+:\d+(:\d+)?/},{token:"string.url",regex:/\w[-\w_]*\:(\/\/)?\w[-\w._]*(:\d+)?/},{token:"value.date",regex:/(\b\d{1,4}[-/]\d{1,2}[-/]\d{1,2}|\d{1,2}[-/]\d{1,2}[-/]\d{1,4})\b/},{token:"value.tuple",regex:/\b\d{1,3}\.\d{1,3}\.\d{1,3}(\.\d{1,3}){0,9}/},{token:"value.pair",regex:/[+-]?\d+x[-+]?\d+/},{token:"value.binary",regex:/\b2#{([01]{8})+}/},{token:"value.binary",regex:/\b64#{([\w/=+])+}/},{token:"value.binary",regex:/(16)?#{([\dabcdefABCDEF][\dabcdefABCDEF])*}/},{token:"value.issue",regex:/#\w[-\w'*.]*/},{token:"value.numeric",regex:/[+-]?\d['\d]*(?:\.\d+)?e[-+]?\d{1,3}\%?(?!\w)/},{token:"invalid.illegal",regex:/[+-]?\d['\d]*(?:\.\d+)?\%?[a-zA-Z]/},{token:"value.numeric",regex:/[+-]?\d['\d]*(?:\.\d+)?\%?(?![a-zA-Z])/},{token:"value.character",regex:/#"(\^[-@/_~^"HKLM\[]|.)"/},{token:"string.file",regex:/%[-\w\.\/]+/},{token:"string.tag",regex:/</,next:"tag"},{token:"string",regex:/"/,next:"string"},{token:"string.other",regex:"{",next:"string.other"},{token:"comment",regex:"comment [{]",next:"comment"},{token:"comment",regex:/;.+$/},{token:"paren.map-start",regex:"#\\("},{token:"paren.block-start",regex:"[\\[]"},{token:"paren.block-end",regex:"[\\]]"},{token:"paren.parens-start",regex:"[(]"},{token:"paren.parens-end",regex:"\\)"},{token:"keyword",regex:"/local|/external"},{token:"keyword.preprocessor",regex:"#(if|either|switch|case|include|do|macrolocal|reset|process|trace)"},{token:"constant.datatype!",regex:"(?:datatype|unset|none|logic|block|paren|string|file|url|char|integer|float|word|set-word|lit-word|get-word|refinement|issue|native|action|op|function|path|lit-path|set-path|get-path|routine|bitset|point|object|typeset|error|vector|hash|pair|percent|tuple|map|binary|time|tag|email|handle|date|image|event|series|any-type|number|any-object|scalar|any-string|any-word|any-function|any-block|any-list|any-path|immediate|all-word|internal|external|default)!(?![-!?\\w~])"},{token:"keyword.function",regex:"\\b(?:collect|quote|on-parse-event|math|last|source|expand|show|context|object|input|quit|dir|make-dir|cause-error|error\\?|none\\?|block\\?|any-list\\?|word\\?|char\\?|any-string\\?|series\\?|binary\\?|attempt|url\\?|string\\?|suffix\\?|file\\?|object\\?|body-of|first|second|third|mod|clean-path|dir\\?|to-red-file|normalize-dir|list-dir|pad|empty\\?|dirize|offset\\?|what-dir|expand-directives|load|split-path|change-dir|to-file|path-thru|save|load-thru|View|float\\?|to-float|charset|\\?|probe|set-word\\?|q|words-of|replace|repend|react|function\\?|spec-of|unset\\?|halt|op\\?|any-function\\?|to-paren|tag\\?|routine|class-of|size-text|draw|handle\\?|link-tabs-to-parent|link-sub-to-parent|on-face-deep-change*|update-font-faces|do-actor|do-safe|do-events|pair\\?|foreach-face|hex-to-rgb|issue\\?|alter|path\\?|typeset\\?|datatype\\?|set-flag|layout|extract|image\\?|get-word\\?|to-logic|to-set-word|to-block|center-face|dump-face|request-font|request-file|request-dir|rejoin|ellipsize-at|any-block\\?|any-object\\?|map\\?|keys-of|a-an|also|parse-func-spec|help-string|what|routine\\?|action\\?|native\\?|refinement\\?|common-substr|red-complete-file|red-complete-path|unview|comment|\\?\\?|fourth|fifth|values-of|bitset\\?|email\\?|get-path\\?|hash\\?|integer\\?|lit-path\\?|lit-word\\?|logic\\?|paren\\?|percent\\?|set-path\\?|time\\?|tuple\\?|date\\?|vector\\?|any-path\\?|any-word\\?|number\\?|immediate\\?|scalar\\?|all-word\\?|to-bitset|to-binary|to-char|to-email|to-get-path|to-get-word|to-hash|to-integer|to-issue|to-lit-path|to-lit-word|to-map|to-none|to-pair|to-path|to-percent|to-refinement|to-set-path|to-string|to-tag|to-time|to-typeset|to-tuple|to-unset|to-url|to-word|to-image|to-date|parse-trace|modulo|eval-set-path|extract-boot-args|flip-exe-flag|split|do-file|exists-thru\\?|read-thru|do-thru|cos|sin|tan|acos|asin|atan|atan2|sqrt|clear-reactions|dump-reactions|react\\?|within\\?|overlap\\?|distance\\?|face\\?|metrics\\?|get-scroller|insert-event-func|remove-event-func|set-focus|help|fetch-help|about|ls|ll|pwd|cd|red-complete-input|matrix)(?![-!?\\w~])"},{token:"keyword.action",regex:"\\b(?:to|remove|copy|insert|change|clear|move|poke|put|random|reverse|sort|swap|take|trim|add|subtract|divide|multiply|make|reflect|form|mold|modify|absolute|negate|power|remainder|round|even\\?|odd\\?|and~|complement|or~|xor~|append|at|back|find|skip|tail|head|head\\?|index\\?|length\\?|next|pick|select|tail\\?|delete|read|write)(?![-_!?\\w~])"},{token:"keyword.native",regex:"\\b(?:not|any|set|uppercase|lowercase|checksum|try|catch|browse|throw|all|as|remove-each|func|function|does|has|do|reduce|compose|get|print|prin|equal\\?|not-equal\\?|strict-equal\\?|lesser\\?|greater\\?|lesser-or-equal\\?|greater-or-equal\\?|same\\?|type\\?|stats|bind|in|parse|union|unique|intersect|difference|exclude|complement\\?|dehex|negative\\?|positive\\?|max|min|shift|to-hex|sine|cosine|tangent|arcsine|arccosine|arctangent|arctangent2|NaN\\?|zero\\?|log-2|log-10|log-e|exp|square-root|construct|value\\?|as-pair|extend|debase|enbase|to-local-file|wait|unset|new-line|new-line\\?|context\\?|set-env|get-env|list-env|now|sign\\?|call|size\\?)(?![-!?\\w~])"},{token:"keyword",regex:"\\b(?:Red(?=\\s+\\[)|object|context|make|self|keep)(?![-!?\\w~])"},{token:"variable.language",regex:"this"},{token:"keyword.control",regex:"(?:while|if|return|case|unless|either|until|loop|repeat|forever|foreach|forall|switch|break|continue|exit)(?![-!?\\w~])"},{token:"constant.language",regex:"\\b(?:true|false|on|off|yes|none|no)(?![-!?\\w~])"},{token:"constant.numeric",regex:/\bpi(?![^-_])/},{token:"constant.character",regex:"\\b(space|tab|newline|cr|lf)(?![-!?\\w~])"},{token:"keyword.operator",regex:"s(or|and|xor|is)s"},{token:"variable.get-path",regex:/:\w[-\w'*.?!]*(\/\w[-\w'*.?!]*)(\/\w[-\w'*.?!]*)*/},{token:"variable.set-path",regex:/\w[-\w'*.?!]*(\/\w[-\w'*.?!]*)(\/\w[-\w'*.?!]*)*:/},{token:"variable.lit-path",regex:/'\w[-\w'*.?!]*(\/\w[-\w'*.?!]*)(\/\w[-\w'*.?!]*)*/},{token:"variable.path",regex:/\w[-\w'*.?!]*(\/\w[-\w'*.?!]*)(\/\w[-\w'*.?!]*)*/},{token:"variable.refinement",regex:/\/\w[-\w'*.?!]*/},{token:"keyword.view.style",regex:"\\b(?:window|base|button|text|field|area|check|radio|progress|slider|camera|text-list|drop-list|drop-down|panel|group-box|tab-panel|h1|h2|h3|h4|h5|box|image|init)(?![-!?\\w~])"},{token:"keyword.view.event",regex:"\\b(?:detect|on-detect|time|on-time|drawing|on-drawing|scroll|on-scroll|down|on-down|up|on-up|mid-down|on-mid-down|mid-up|on-mid-up|alt-down|on-alt-down|alt-up|on-alt-up|aux-down|on-aux-down|aux-up|on-aux-up|wheel|on-wheel|drag-start|on-drag-start|drag|on-drag|drop|on-drop|click|on-click|dbl-click|on-dbl-click|over|on-over|key|on-key|key-down|on-key-down|key-up|on-key-up|ime|on-ime|focus|on-focus|unfocus|on-unfocus|select|on-select|change|on-change|enter|on-enter|menu|on-menu|close|on-close|move|on-move|resize|on-resize|moving|on-moving|resizing|on-resizing|zoom|on-zoom|pan|on-pan|rotate|on-rotate|two-tap|on-two-tap|press-tap|on-press-tap|create|on-create|created|on-created)(?![-!?\\w~])"},{token:"keyword.view.option",regex:"\\b(?:all-over|center|color|default|disabled|down|flags|focus|font|font-color|font-name|font-size|hidden|hint|left|loose|name|no-border|now|rate|react|select|size|space)(?![-!?\\w~])"},{token:"constant.other.colour",regex:"\\b(?:Red|white|transparent|black|gray|aqua|beige|blue|brick|brown|coal|coffee|crimson|cyan|forest|gold|green|ivory|khaki|leaf|linen|magenta|maroon|mint|navy|oldrab|olive|orange|papaya|pewter|pink|purple|reblue|rebolor|sienna|silver|sky|snow|tanned|teal|violet|water|wheat|yello|yellow|glass)(?![-!?\\w~])"},{token:"variable.get-word",regex:/\:\w[-\w'*.?!]*/},{token:"variable.set-word",regex:/\w[-\w'*.?!]*\:/},{token:"variable.lit-word",regex:/'\w[-\w'*.?!]*/},{token:"variable.word",regex:/\b\w+[-\w'*.!?]*/},{caseInsensitive:!0}],string:[{token:"string",regex:/"/,next:"start"},{defaultToken:"string"}],"string.other":[{token:"string.other",regex:/}/,next:"start"},{defaultToken:"string.other"}],tag:[{token:"string.tag",regex:/>/,next:"start"},{defaultToken:"string.tag"}],comment:[{token:"comment",regex:/}/,next:"start"},{defaultToken:"comment"}]}};o.inherits(a,r),t.RedHighlightRules=a})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,a=e("./fold_mode").FoldMode,i=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(i,a),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,n,o){var r,a=e.getLine(n);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,n);if(r=a.match(this.foldingStartMarker)){var i=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,i);var s=e.getCommentFoldRange(n,i+r[0].length,1);return s&&!s.isMultiLine()&&(o?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}return"markbegin"!==t&&(r=a.match(this.foldingStopMarker))?(i=r.index+r[0].length,r[1]?this.closingBracketBlock(e,r[1],n,i):e.getCommentFoldRange(n,i,-1)):void 0},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),a=t,i=n.length,s=t+=1,l=e.getLength();++t<l;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(o>c)break;var d=this.getFoldWidgetRange(e,"all",t);if(d){if(d.start.row<=a)break;if(d.isMultiLine())t=d.end.row;else if(o==c)break}s=t}}return new r(a,i,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),a=e.getLength(),i=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<a;){t=e.getLine(n);var c=s.exec(t);if(c&&(c[1]?l--:l++,!l))break}if(n>i)return new r(i,o,n,t.length)}}.call(i.prototype)})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,a=e.findMatchingBracket({row:t,column:r});if(!a||a.row==t)return 0;var i=this.$getIndent(e.getLine(a.row));e.replace(new o(t,0,t,r-1),i)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r})),ace.define("ace/mode/red",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/red_highlight_rules","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent","ace/range"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,a=e("./red_highlight_rules").RedHighlightRules,i=e("./folding/cstyle").FoldMode,s=e("./matching_brace_outdent").MatchingBraceOutdent,l=(e("../range").Range,function(){this.HighlightRules=a,this.foldingRules=new i,this.$outdent=new s,this.$behaviour=this.$defaultBehaviour});o.inherits(l,r),function(){this.lineCommentStart=";",this.blockComment={start:"comment {",end:"}"},this.getNextLineIndent=function(e,t,n){var o=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e),a=r.tokens,i=r.state;if(a.length&&"comment"==a[a.length-1].type)return o;if("start"==e)(s=t.match(/^.*[\{\[\(]\s*$/))&&(o+=n);else if("doc-start"==e){if("start"==i)return"";var s;(s=t.match(/^\s*(\/?)\*/))&&(s[1]&&(o+=" "),o+="* ")}return o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/red"}.call(l.prototype),t.Mode=l})),ace.require(["ace/mode/red"],(function(t){e&&(e.exports=t)}))}}]);