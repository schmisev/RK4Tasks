(self.webpackChunktasks=self.webpackChunktasks||[]).push([[731],{731:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,_=function(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.\-\'\" ]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},_.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};o.inherits(_,r),_.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},_.getStartRule=function(e){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:e}},_.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.JsDocCommentHighlightRules=_})),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,_=e("./text_highlight_rules").TextHighlightRules,a="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",i=function(e){var t={"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},n=this.createKeywordMapper(t,"identifier"),o="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)",_="(function)(\\s*)(\\*?)",i={token:["identifier","text","paren.lparen"],regex:"(\\b(?!"+Object.values(t).join("|")+"\\b)"+a+")(\\s*)(\\()"};this.$rules={no_regex:[r.getStartRule("doc-start"),T("no_regex"),i,{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+a+")(\\s*)(=)(\\s*)"+_+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))("+a+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","storage.type","text","paren.lparen"],regex:"("+a+")(\\s*)(:)(\\s*)"+_+"(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)"+_+"(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:"from(?=\\s*('|\"))"},{token:"keyword",regex:"(?:case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void)\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/},{token:n,regex:a},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:"keyword.operator",regex:/=/},{token:["storage.type","text","storage.type","text","paren.lparen"],regex:_+"(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","storage.type","text","text","entity.name.function","text","paren.lparen"],regex:"(function)(?:(?:(\\s*)(\\*)(\\s*))|(\\s+))(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:"prototype"},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:a},{regex:"",token:"empty",next:"no_regex"}],start:[r.getStartRule("doc-start"),T("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[T("function_arguments"),{token:"variable.parameter",regex:a},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:o},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:o},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},e&&e.noES6||(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(e,t,n){if(this.next="{"==e?this.nextState:"","{"==e&&n.length)n.unshift("start",t);else if("}"==e&&n.length&&(n.shift(),this.next=n.shift(),-1!=this.next.indexOf("string")||-1!=this.next.indexOf("jsx")))return"paren.quasi.end";return"{"==e?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:o},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+a+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=[^\\(]+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),e&&0==e.jsx||s.call(this)),this.embedRules(r,"doc-",[r.getEndRule("no_regex")]),this.normalizeRules()};function s(){var e=a.replace("\\d","\\d\\-"),t={onMatch:function(e,t,n){var o="/"==e.charAt(1)?2:1;return 1==o?(t!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++):2==o&&t==this.nextState&&(n[1]--,(!n[1]||n[1]<0)&&(n.shift(),n.shift())),[{type:"meta.tag.punctuation."+(1==o?"":"end-")+"tag-open.xml",value:e.slice(0,o)},{type:"meta.tag.tag-name.xml",value:e.substr(o)}]},regex:"</?(?:"+e+"|(?=>))",next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(t);var n={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[n,t,{include:"reference"},{defaultToken:"string.xml"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(e,t,n){return t==n[0]&&n.shift(),2==e.length&&(n[0]==this.nextState&&n[1]--,(!n[1]||n[1]<0)&&n.splice(0,2)),this.next=n[0]||"start",[{type:this.token,value:e}]},nextState:"jsx"},n,T("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:e},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},t],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function T(e){return[{token:"comment",regex:/\/\*/,next:[r.getTagRule(),{token:"comment",regex:"\\*\\/",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[r.getTagRule(),{token:"comment",regex:"$|^",next:e||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}o.inherits(i,_),t.JavaScriptHighlightRules=i})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,_=e.findMatchingBracket({row:t,column:r});if(!_||_.row==t)return 0;var a=this.$getIndent(e.getLine(_.row));e.replace(new o(t,0,t,r-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r})),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../behaviour").Behaviour,_=e("../../token_iterator").TokenIterator;function a(e,t){return e&&e.type.lastIndexOf(t+".xml")>-1}var i=function(){this.add("string_dquotes","insertion",(function(e,t,n,o,r){if('"'==r||"'"==r){var i=r,s=o.doc.getTextRange(n.getSelectionRange());if(""!==s&&"'"!==s&&'"'!=s&&n.getWrapBehavioursEnabled())return{text:i+s+i,selection:!1};var T=n.getCursorPosition(),l=o.doc.getLine(T.row).substring(T.column,T.column+1),g=new _(o,T.row,T.column),c=g.getCurrentToken();if(l==i&&(a(c,"attribute-value")||a(c,"string")))return{text:"",selection:[1,1]};if(c||(c=g.stepBackward()),!c)return;for(;a(c,"tag-whitespace")||a(c,"whitespace");)c=g.stepBackward();var u=!l||l.match(/\s/);if(a(c,"attribute-equals")&&(u||">"==l)||a(c,"decl-attribute-equals")&&(u||"?"==l))return{text:i+i,selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,o,r){var _=o.doc.getTextRange(r);if(!r.isMultiLine()&&('"'==_||"'"==_)&&o.doc.getLine(r.start.row).substring(r.start.column+1,r.start.column+2)==_)return r.end.column++,r})),this.add("autoclosing","insertion",(function(e,t,n,o,r){if(">"==r){var i=n.getSelectionRange().start,s=new _(o,i.row,i.column),T=s.getCurrentToken()||s.stepBackward();if(!T||!(a(T,"tag-name")||a(T,"tag-whitespace")||a(T,"attribute-name")||a(T,"attribute-equals")||a(T,"attribute-value")))return;if(a(T,"reference.attribute-value"))return;if(a(T,"attribute-value")){var l=s.getCurrentTokenColumn()+T.value.length;if(i.column<l)return;if(i.column==l){var g=s.stepForward();if(g&&a(g,"attribute-value"))return;s.stepBackward()}}if(/^\s*>/.test(o.getLine(i.row).slice(i.column)))return;for(;!a(T,"tag-name");)if("<"==(T=s.stepBackward()).value){T=s.stepForward();break}var c=s.getCurrentTokenRow(),u=s.getCurrentTokenColumn();if(a(s.stepBackward(),"end-tag-open"))return;var d=T.value;if(c==i.row&&(d=d.substring(0,i.column-u)),this.voidElements&&this.voidElements.hasOwnProperty(d.toLowerCase()))return;return{text:"></"+d+">",selection:[1,1]}}})),this.add("autoindent","insertion",(function(e,t,n,o,r){if("\n"==r){var i=n.getCursorPosition(),s=o.getLine(i.row),T=new _(o,i.row,i.column),l=T.getCurrentToken();if(a(l,"")&&-1!==l.type.indexOf("tag-close")){if("/>"==l.value)return;for(;l&&-1===l.type.indexOf("tag-name");)l=T.stepBackward();if(!l)return;var g=l.value,c=T.getCurrentTokenRow();if(!(l=T.stepBackward())||-1!==l.type.indexOf("end-tag"))return;if(this.voidElements&&!this.voidElements[g]||!this.voidElements){var u=o.getTokenAt(i.row,i.column+1),d=(s=o.getLine(c),this.$getIndent(s)),L=d+o.getTabString();return u&&"</"===u.value?{text:"\n"+L+"\n"+d,selection:[1,L.length,1,L.length]}:{text:"\n"+L}}}}}))};o.inherits(i,r),t.XmlBehaviour=i})),ace.define("ace/mode/behaviour/javascript",["require","exports","module","ace/lib/oop","ace/token_iterator","ace/mode/behaviour/cstyle","ace/mode/behaviour/xml"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../token_iterator").TokenIterator,_=e("../behaviour/cstyle").CstyleBehaviour,a=e("../behaviour/xml").XmlBehaviour,i=function(){var e=new a({closeCurlyBraces:!0}).getBehaviours();this.addBehaviours(e),this.inherit(_),this.add("autoclosing-fragment","insertion",(function(e,t,n,o,_){if(">"==_){var a=n.getSelectionRange().start,i=new r(o,a.row,a.column),s=i.getCurrentToken()||i.stepBackward();if(!s)return;if("<"==s.value)return{text:"></>",selection:[1,1]}}}))};o.inherits(i,_),t.JavaScriptBehaviour=i})),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,_=e("./fold_mode").FoldMode,a=t.FoldMode=function(e,t){_.call(this),this.voidElements=e||{},this.optionalEndTags=o.mixin({},this.voidElements),t&&o.mixin(this.optionalEndTags,t)};o.inherits(a,_);var i=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function s(e,t){return e.type.lastIndexOf(t+".xml")>-1}(function(){this.getFoldWidget=function(e,t,n){var o=this._getFirstTagInLine(e,n);return o?o.closing||!o.tagName&&o.selfClosing?"markbeginend"===t?"end":"":!o.tagName||o.selfClosing||this.voidElements.hasOwnProperty(o.tagName.toLowerCase())||this._findEndTagInLine(e,n,o.tagName,o.end.column)?"":"start":this.getCommentFoldWidget(e,n)},this.getCommentFoldWidget=function(e,t){return/comment/.test(e.getState(t))&&/<!-/.test(e.getLine(t))?"start":""},this._getFirstTagInLine=function(e,t){for(var n=e.getTokens(t),o=new i,r=0;r<n.length;r++){var _=n[r];if(s(_,"tag-open")){if(o.end.column=o.start.column+_.value.length,o.closing=s(_,"end-tag-open"),!(_=n[++r]))return null;if(o.tagName=_.value,""===_.value){if(!(_=n[++r]))return null;o.tagName=_.value}for(o.end.column+=_.value.length,r++;r<n.length;r++)if(_=n[r],o.end.column+=_.value.length,s(_,"tag-close")){o.selfClosing="/>"==_.value;break}return o}if(s(_,"tag-close"))return o.selfClosing="/>"==_.value,o;o.start.column+=_.value.length}return null},this._findEndTagInLine=function(e,t,n,o){for(var r=e.getTokens(t),_=0,a=0;a<r.length;a++){var i=r[a];if(!((_+=i.value.length)<o-1)&&s(i,"end-tag-open")&&(s(i=r[a+1],"tag-name")&&""===i.value&&(i=r[a+2]),i&&i.value==n))return!0}return!1},this.getFoldWidgetRange=function(e,t,n){if(!this._getFirstTagInLine(e,n))return this.getCommentFoldWidget(e,n)&&e.getCommentFoldRange(n,e.getLine(n).length);var o=e.getMatchingTags({row:n,column:0});return o?new r(o.openTag.end.row,o.openTag.end.column,o.closeTag.start.row,o.closeTag.start.column):void 0}}).call(a.prototype)})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,_=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,_),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,n,o){var r,_=e.getLine(n);if(this.startRegionRe.test(_))return this.getCommentRegionBlock(e,_,n);if(r=_.match(this.foldingStartMarker)){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var i=e.getCommentFoldRange(n,a+r[0].length,1);return i&&!i.isMultiLine()&&(o?i=this.getSectionRange(e,n):"all"!=t&&(i=null)),i}return"markbegin"!==t&&(r=_.match(this.foldingStopMarker))?(a=r.index+r[0].length,r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)):void 0},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),_=t,a=n.length,i=t+=1,s=e.getLength();++t<s;){var T=(n=e.getLine(t)).search(/\S/);if(-1!==T){if(o>T)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=_)break;if(l.isMultiLine())t=l.end.row;else if(o==T)break}i=t}}return new r(_,a,i,e.getLine(i).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),_=e.getLength(),a=n,i=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<_;){t=e.getLine(n);var T=i.exec(t);if(T&&(T[1]?s--:s++,!s))break}if(n>a)return new r(a,o,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/folding/javascript",["require","exports","module","ace/lib/oop","ace/mode/folding/xml","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("./xml").FoldMode,_=e("./cstyle").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))),this.xmlFoldMode=new r};o.inherits(a,_),function(){this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){return this.getFoldWidgetBase(e,t,n)||this.xmlFoldMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n,o){return this.getFoldWidgetRangeBase(e,t,n,o)||this.xmlFoldMode.getFoldWidgetRange(e,t,n)}}.call(a.prototype)})),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/javascript","ace/mode/folding/javascript"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,_=e("./javascript_highlight_rules").JavaScriptHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,i=e("../worker/worker_client").WorkerClient,s=e("./behaviour/javascript").JavaScriptBehaviour,T=e("./folding/javascript").FoldMode,l=function(){this.HighlightRules=_,this.$outdent=new a,this.$behaviour=new s,this.foldingRules=new T};o.inherits(l,r),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(e,t,n){var o=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e),_=r.tokens,a=r.state;if(_.length&&"comment"==_[_.length-1].type)return o;if("start"==e||"no_regex"==e)t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/)&&(o+=n);else if("doc-start"==e&&("start"==a||"no_regex"==a))return"";return o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new i(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(l.prototype),t.Mode=l})),ace.define("ace/mode/gobstones_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,_=function(){var e="repeat|while|foreach|in",t="if|elseif|else|switch",n={colors:"Verde|Rojo|Azul|Negro",cardinals:"Norte|Sur|Este|Oeste",booleans:"True|False",numbers:/([-]?)([0-9]+)\b/,strings:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},o="Poner|Sacar|Mover|IrAlBorde|VaciarTablero|BOOM",r="nroBolitas|hayBolitas|puedeMover|siguiente|previo|opuesto|minBool|maxBool|minDir|maxDir|minColor|maxColor|primero|sinElPrimero|esVacía|boom",_="K_A|K_B|K_C|K_D|K_E|K_F|K_G|K_G|K_H|K_I|K_J|K_K|K_L|K_M|K_N|K_Ñ|K_O|K_P|K_Q|K_R|K_S|K_T|K_U|K_V|K_W|K_X|K_Y|K_Z|K_0|K_1|K_2|K_3|K_4|K_5|K_6|K_7|K_8|K_9|K_F1|K_F2|K_F3|K_F4|K_F5|K_F6|K_F7|K_F8|K_F9|K_F10|K_F11|K_12|K_UP|K_DOWN|K_LEFT|K_RIGHT|K_RETURN|K_BACKSPACE|K_TAB|K_SPACE|K_ESCAPEK_CTRL_A|K_CTRL_B|K_CTRL_C|K_CTRL_D|K_CTRL_E|K_CTRL_F|K_CTRL_G|K_CTRL_G|K_CTRL_H|K_CTRL_I|K_CTRL_J|K_CTRL_K|K_CTRL_L|K_CTRL_M|K_CTRL_N|K_CTRL_Ñ|K_CTRL_O|K_CTRL_P|K_CTRL_Q|K_CTRL_R|K_CTRL_S|K_CTRL_T|K_CTRL_U|K_CTRL_V|K_CTRL_W|K_CTRL_X|K_CTRL_Y|K_CTRL_Z|K_CTRL_0|K_CTRL_1|K_CTRL_2|K_CTRL_3|K_CTRL_4|K_CTRL_5|K_CTRL_6|K_CTRL_7|K_CTRL_8|K_CTRL_9|K_CTRL_F1|K_CTRL_F2|K_CTRL_F3|K_CTRL_F4|K_CTRL_F5|K_CTRL_F6|K_CTRL_F7|K_CTRL_F8|K_CTRL_F9|K_CTRL_F10|K_CTRL_F11|K_CTRL_F12|K_CTRL_UP|K_CTRL_DOWN|K_CTRL_LEFT|K_CTRL_RIGHT|K_CTRL_RETURN|K_CTRL_BACKSPACE|K_CTRL_TAB|K_CTRL_SPACE|K_CTRL_ESCAPEK_ALT_A|K_ALT_B|K_ALT_C|K_ALT_D|K_ALT_E|K_ALT_F|K_ALT_G|K_ALT_G|K_ALT_H|K_ALT_I|K_ALT_J|K_ALT_K|K_ALT_L|K_ALT_M|K_ALT_N|K_ALT_Ñ|K_ALT_O|K_ALT_P|K_ALT_Q|K_ALT_R|K_ALT_S|K_ALT_T|K_ALT_U|K_ALT_V|K_ALT_W|K_ALT_X|K_ALT_Y|K_ALT_Z|K_ALT_0|K_ALT_1|K_ALT_2|K_ALT_3|K_ALT_4|K_ALT_5|K_ALT_6|K_ALT_7|K_ALT_8|K_ALT_9|K_ALT_F1|K_ALT_F2|K_ALT_F3|K_ALT_F4|K_ALT_F5|K_ALT_F6|K_ALT_F7|K_ALT_F8|K_ALT_F9|K_ALT_F10|K_ALT_F11|K_ALT_F12|K_ALT_UP|K_ALT_DOWN|K_ALT_LEFT|K_ALT_RIGHT|K_ALT_RETURN|K_ALT_BACKSPACE|K_ALT_TAB|K_ALT_SPACE|K_ALT_ESCAPEK_SHIFT_A|K_SHIFT_B|K_SHIFT_C|K_SHIFT_D|K_SHIFT_E|K_SHIFT_F|K_SHIFT_G|K_SHIFT_G|K_SHIFT_H|K_SHIFT_I|K_SHIFT_J|K_SHIFT_K|K_SHIFT_L|K_SHIFT_M|K_SHIFT_N|K_SHIFT_Ñ|K_SHIFT_O|K_SHIFT_P|K_SHIFT_Q|K_SHIFT_R|K_SHIFT_S|K_SHIFT_T|K_SHIFT_U|K_SHIFT_V|K_SHIFT_W|K_SHIFT_X|K_SHIFT_Y|K_SHIFT_Z|K_SHIFT_0|K_SHIFT_1|K_SHIFT_2|K_SHIFT_3|K_SHIFT_4|K_SHIFT_5|K_SHIFT_6|K_SHIFT_7|K_SHIFT_8|K_SHIFT_9|K_SHIFT_F1|K_SHIFT_F2|K_SHIFT_F3|K_SHIFT_F4|K_SHIFT_F5|K_SHIFT_F6|K_SHIFT_F7|K_SHIFT_F8|K_SHIFT_F9|K_SHIFT_F10|K_SHIFT_F11|K_SHIFT_F12|K_SHIFT_UP|K_SHIFT_DOWN|K_SHIFT_LEFT|K_SHIFT_RIGHT|K_SHIFT_RETURN|K_SHIFT_BACKSPACE|K_SHIFT_TAB|K_SHIFT_SPACE|K_SHIFT_ESCAPEK_CTRL_ALT_A|K_CTRL_ALT_B|K_CTRL_ALT_C|K_CTRL_ALT_D|K_CTRL_ALT_E|K_CTRL_ALT_F|K_CTRL_ALT_G|K_CTRL_ALT_G|K_CTRL_ALT_H|K_CTRL_ALT_I|K_CTRL_ALT_J|K_CTRL_ALT_K|K_CTRL_ALT_L|K_CTRL_ALT_M|K_CTRL_ALT_N|K_CTRL_ALT_Ñ|K_CTRL_ALT_O|K_CTRL_ALT_P|K_CTRL_ALT_Q|K_CTRL_ALT_R|K_CTRL_ALT_S|K_CTRL_ALT_T|K_CTRL_ALT_U|K_CTRL_ALT_V|K_CTRL_ALT_W|K_CTRL_ALT_X|K_CTRL_ALT_Y|K_CTRL_ALT_Z|K_CTRL_ALT_0|K_CTRL_ALT_1|K_CTRL_ALT_2|K_CTRL_ALT_3|K_CTRL_ALT_4|K_CTRL_ALT_5|K_CTRL_ALT_6|K_CTRL_ALT_7|K_CTRL_ALT_8|K_CTRL_ALT_9|K_CTRL_ALT_F1|K_CTRL_ALT_F2|K_CTRL_ALT_F3|K_CTRL_ALT_F4|K_CTRL_ALT_F5|K_CTRL_ALT_F6|K_CTRL_ALT_F7|K_CTRL_ALT_F8|K_CTRL_ALT_F9|K_CTRL_ALT_F10|K_CTRL_ALT_F11|K_CTRL_ALT_F12|K_CTRL_ALT_UP|K_CTRL_ALT_DOWN|K_CTRL_ALT_LEFT|K_CTRL_ALT_RIGHT|K_CTRL_ALT_RETURN|K_CTRL_ALT_BACKSPACE|K_CTRL_ALT_TAB|K_CTRL_ALT_SPACE|K_CTRL_ALT_ESCAPEK_CTRL_SHIFT_A|K_CTRL_SHIFT_B|K_CTRL_SHIFT_C|K_CTRL_SHIFT_D|K_CTRL_SHIFT_E|K_CTRL_SHIFT_F|K_CTRL_SHIFT_G|K_CTRL_SHIFT_G|K_CTRL_SHIFT_H|K_CTRL_SHIFT_I|K_CTRL_SHIFT_J|K_CTRL_SHIFT_K|K_CTRL_SHIFT_L|K_CTRL_SHIFT_M|K_CTRL_SHIFT_N|K_CTRL_SHIFT_Ñ|K_CTRL_SHIFT_O|K_CTRL_SHIFT_P|K_CTRL_SHIFT_Q|K_CTRL_SHIFT_R|K_CTRL_SHIFT_S|K_CTRL_SHIFT_T|K_CTRL_SHIFT_U|K_CTRL_SHIFT_V|K_CTRL_SHIFT_W|K_CTRL_SHIFT_X|K_CTRL_SHIFT_Y|K_CTRL_SHIFT_Z|K_CTRL_SHIFT_0|K_CTRL_SHIFT_1|K_CTRL_SHIFT_2|K_CTRL_SHIFT_3|K_CTRL_SHIFT_4|K_CTRL_SHIFT_5|K_CTRL_SHIFT_6|K_CTRL_SHIFT_7|K_CTRL_SHIFT_8|K_CTRL_SHIFT_9|K_CTRL_SHIFT_F1|K_CTRL_SHIFT_F2|K_CTRL_SHIFT_F3|K_CTRL_SHIFT_F4|K_CTRL_SHIFT_F5|K_CTRL_SHIFT_F6|K_CTRL_SHIFT_F7|K_CTRL_SHIFT_F8|K_CTRL_SHIFT_9|K_CTRL_SHIFT_10|K_CTRL_SHIFT_11|K_CTRL_SHIFT_12|K_CTRL_SHIFT_UP|K_CTRL_SHIFT_DOWN|K_CTRL_SHIFT_LEFT|K_CTRL_SHIFT_RIGHT|K_CTRL_SHIFT_RETURN|K_CTRL_SHIFT_BACKSPACE|K_CTRL_SHIFT_TAB|K_CTRL_SHIFT_SPACE|K_CTRL_SHIFT_ESCAPEK_ALT_SHIFT_A|K_ALT_SHIFT_B|K_ALT_SHIFT_C|K_ALT_SHIFT_D|K_ALT_SHIFT_E|K_ALT_SHIFT_F|K_ALT_SHIFT_G|K_ALT_SHIFT_G|K_ALT_SHIFT_H|K_ALT_SHIFT_I|K_ALT_SHIFT_J|K_ALT_SHIFT_K|K_ALT_SHIFT_L|K_ALT_SHIFT_M|K_ALT_SHIFT_N|K_ALT_SHIFT_Ñ|K_ALT_SHIFT_O|K_ALT_SHIFT_P|K_ALT_SHIFT_Q|K_ALT_SHIFT_R|K_ALT_SHIFT_S|K_ALT_SHIFT_T|K_ALT_SHIFT_U|K_ALT_SHIFT_V|K_ALT_SHIFT_W|K_ALT_SHIFT_X|K_ALT_SHIFT_Y|K_ALT_SHIFT_Z|K_ALT_SHIFT_0|K_ALT_SHIFT_1|K_ALT_SHIFT_2|K_ALT_SHIFT_3|K_ALT_SHIFT_4|K_ALT_SHIFT_5|K_ALT_SHIFT_6|K_ALT_SHIFT_7|K_ALT_SHIFT_8|K_ALT_SHIFT_9|K_ALT_SHIFT_F1|K_ALT_SHIFT_F2|K_ALT_SHIFT_F3|K_ALT_SHIFT_F4|K_ALT_SHIFT_F5|K_ALT_SHIFT_F6|K_ALT_SHIFT_F7|K_ALT_SHIFT_F8|K_ALT_SHIFT_9|K_ALT_SHIFT_10|K_ALT_SHIFT_11|K_ALT_SHIFT_12|K_ALT_SHIFT_UP|K_ALT_SHIFT_DOWN|K_ALT_SHIFT_LEFT|K_ALT_SHIFT_RIGHT|K_ALT_SHIFT_RETURN|K_ALT_SHIFT_BACKSPACE|K_ALT_SHIFT_TAB|K_ALT_SHIFT_SPACE|K_ALT_SHIFT_ESCAPEK_CTRL_ALT_SHIFT_A|K_CTRL_ALT_SHIFT_B|K_CTRL_ALT_SHIFT_C|K_CTRL_ALT_SHIFT_D|K_CTRL_ALT_SHIFT_E|K_CTRL_ALT_SHIFT_F|K_CTRL_ALT_SHIFT_G|K_CTRL_ALT_SHIFT_G|K_CTRL_ALT_SHIFT_H|K_CTRL_ALT_SHIFT_I|K_CTRL_ALT_SHIFT_J|K_CTRL_ALT_SHIFT_K|K_CTRL_ALT_SHIFT_L|K_CTRL_ALT_SHIFT_M|K_CTRL_ALT_SHIFT_N|K_CTRL_ALT_SHIFT_Ñ|K_CTRL_ALT_SHIFT_O|K_CTRL_ALT_SHIFT_P|K_CTRL_ALT_SHIFT_Q|K_CTRL_ALT_SHIFT_R|K_CTRL_ALT_SHIFT_S|K_CTRL_ALT_SHIFT_T|K_CTRL_ALT_SHIFT_U|K_CTRL_ALT_SHIFT_V|K_CTRL_ALT_SHIFT_W|K_CTRL_ALT_SHIFT_X|K_CTRL_ALT_SHIFT_Y|K_CTRL_ALT_SHIFT_Z|K_CTRL_ALT_SHIFT_0|K_CTRL_ALT_SHIFT_1|K_CTRL_ALT_SHIFT_2|K_CTRL_ALT_SHIFT_3|K_CTRL_ALT_SHIFT_4|K_CTRL_ALT_SHIFT_5|K_CTRL_ALT_SHIFT_6|K_CTRL_ALT_SHIFT_7|K_CTRL_ALT_SHIFT_8|K_CTRL_ALT_SHIFT_9|K_CTRL_ALT_SHIFT_F1|K_CTRL_ALT_SHIFT_F2|K_CTRL_ALT_SHIFT_F3|K_CTRL_ALT_SHIFT_F4|K_CTRL_ALT_SHIFT_F5|K_CTRL_ALT_SHIFT_F6|K_CTRL_ALT_SHIFT_F7|K_CTRL_ALT_SHIFT_F8|K_CTRL_ALT_SHIFT_F9|K_CTRL_ALT_SHIFT_F10|K_CTRL_ALT_SHIFT_F11|K_CTRL_ALT_SHIFT_F12|K_CTRL_ALT_SHIFT_UP|K_CTRL_ALT_SHIFT_DOWN|K_CTRL_ALT_SHIFT_LEFT|K_CTRL_ALT_SHIFT_RIGHT|K_CTRL_ALT_SHIFT_RETURN|K_CTRL_ALT_SHIFT_BACKSPACE|K_CTRL_ALT_SHIFT_TAB|K_CTRL_ALT_SHIFT_SPACE|K_CTRL_ALT_SHIFT_ESCAPE",a="\\+|\\-|\\*|\\^|div|mod",i=">=|<=|==|\\/=|>|<",s="\\|\\||&&|not",T="\\+\\+|<\\-|\\[|\\]|\\_|\\->",l="\\/\\/.*$",g="\\-\\-.*$",c="#.*$",u="\\/\\*",d="\\*\\/",L="\\{\\-",K="\\-\\}";this.$rules={start:[{token:"comment.line.double-slash.gobstones",regex:l},{token:"comment.line.double-dash.gobstones",regex:g},{token:"comment.line.number-sign.gobstones",regex:c},{token:"comment.block.dash-asterisc.gobstones",regex:u,next:"block_comment_end"},{token:"comment.block.brace-dash.gobstones",regex:L,next:"block_comment_alt_end"},{token:"constant.numeric.gobstones",regex:n.numbers},{token:"string.quoted.double.gobstones",regex:n.strings},{token:"keyword.operator.other.gobstones",regex:T},{token:"keyword.operator.numeric.gobstones",regex:a},{token:"keyword.operator.compare.gobstones",regex:i},{token:"keyword.operator.boolean.gobstones",regex:s},{token:this.createKeywordMapper({"storage.type.definitions.gobstones":"program|procedure|function|interactive|return|let","storage.type.types.gobstones":"type|is|variant|record|field|case","keyword.control.commands.repetitions.gobstones":e,"keyword.control.commands.alternatives.gobstones":t,"keyword.control.expressions.alternatives.gobstones":"choose|when|otherwise|matching|select|on","constant.language.colors.gobstones":n.colors,"constant.language.cardinals.gobstones":n.cardinals,"constant.language.boolean.gobstones":n.booleans,"support.function.gobstones":o,"support.variable.gobstones":r,"variable.language.gobstones":_},"identifier.gobstones"),regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"comma.gobstones",regex:","},{token:"semicolon.gobstones",regex:";"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],block_comment_end:[{token:"comment.block.dash-asterisc.gobstones",regex:d,next:"start"},{defaultToken:"comment.block.dash-asterisc.gobstones"}],block_comment_alt_end:[{token:"comment.block.brace-dash.gobstones",regex:K,next:"start"},{defaultToken:"comment.block.brace-dash.gobstones"}]}};o.inherits(_,r),t.GobstonesHighlightRules=_})),ace.define("ace/mode/gobstones",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/gobstones_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./javascript").Mode,_=e("./gobstones_highlight_rules").GobstonesHighlightRules,a=function(){r.call(this),this.HighlightRules=_,this.$behaviour=this.$defaultBehaviour};o.inherits(a,r),function(){this.createWorker=function(){return null},this.$id="ace/mode/gobstones",this.snippetFileId="ace/snippets/gobstones"}.call(a.prototype),t.Mode=a})),ace.require(["ace/mode/gobstones"],(function(t){e&&(e.exports=t)}))}}]);