(this["webpackJsonp@uiw/react-stackblitz"]=this["webpackJsonp@uiw/react-stackblitz"]||[]).push([[462],{518:function(e,t){!function(e){e.languages.xquery=e.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[\w-:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),e.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,e.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i,e.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,e.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}/,inside:e.languages.xquery,alias:"language-xquery"};var t=function e(t){return"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join("")},n=function n(a){for(var o=[],i=0;i<a.length;i++){var r=a[i],s=!1;if("string"!=typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?0<o.length&&o[o.length-1].tagName===t(r.content[0].content[1])&&o.pop():"/>"===r.content[r.content.length-1].content||o.push({tagName:t(r.content[0].content[1]),openedBraces:0}):!(0<o.length&&"punctuation"===r.type&&"{"===r.content)||a[i+1]&&"punctuation"===a[i+1].type&&"{"===a[i+1].content||a[i-1]&&"plain-text"===a[i-1].type&&"{"===a[i-1].content?0<o.length&&0<o[o.length-1].openedBraces&&"punctuation"===r.type&&"}"===r.content?o[o.length-1].openedBraces--:"comment"!==r.type&&(s=!0):o[o.length-1].openedBraces++),(s||"string"==typeof r)&&0<o.length&&0===o[o.length-1].openedBraces){var l=t(r);i<a.length-1&&("string"==typeof a[i+1]||"plain-text"===a[i+1].type)&&(l+=t(a[i+1]),a.splice(i+1,1)),0<i&&("string"==typeof a[i-1]||"plain-text"===a[i-1].type)&&(l=t(a[i-1])+l,a.splice(i-1,1),i--),/^\s+$/.test(l)?a[i]=l:a[i]=new e.Token("plain-text",l,null,l)}r.content&&"string"!=typeof r.content&&n(r.content)}};e.hooks.add("after-tokenize",(function(e){"xquery"===e.language&&n(e.tokens)}))}(Prism)}}]);
//# sourceMappingURL=462.42f13bad.chunk.js.map