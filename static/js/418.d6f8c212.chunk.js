(this["webpackJsonp@uiw/react-stackblitz"]=this["webpackJsonp@uiw/react-stackblitz"]||[]).push([[418],{474:function(n,i){!function(n){function i(n,i){return RegExp(n.replace(/<MOD>/g,(function(){return"(?:\\([^|()\n]+\\)|\\[[^\\]\n]+\\]|\\{[^}\n]+\\})"})).replace(/<PAR>/g,(function(){return"(?:\\)|\\((?![^|()\n]+\\)))"})),i||"")}var e={css:{pattern:/\{[^}]+\}/,inside:{rest:n.languages.css}},"class-id":{pattern:/(\()[^)]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},t=n.languages.textile=n.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:i("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."),inside:{modifier:{pattern:i("(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"),lookbehind:!0,inside:e},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:i("^[*#]+<MOD>*\\s+.+","m"),inside:{modifier:{pattern:i("(^[*#]+)<MOD>+"),lookbehind:!0,inside:e},punctuation:/^[*#]+/}},table:{pattern:i("^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|","m"),inside:{modifier:{pattern:i("(^|\\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)"),lookbehind:!0,inside:e},punctuation:/\||^\./}},inline:{pattern:i("(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])"),lookbehind:!0,inside:{bold:{pattern:i("(^(\\*\\*?)<MOD>*).+?(?=\\2)"),lookbehind:!0},italic:{pattern:i("(^(__?)<MOD>*).+?(?=\\2)"),lookbehind:!0},cite:{pattern:i("(^\\?\\?<MOD>*).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:i("(^@<MOD>*).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:i("(^\\+<MOD>*).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:i("(^-<MOD>*).+?(?=-)"),lookbehind:!0},span:{pattern:i("(^%<MOD>*).+?(?=%)"),lookbehind:!0},modifier:{pattern:i("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"),lookbehind:!0,inside:e},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:i('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:i('(^"<MOD>*)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:i('(^")<MOD>+'),lookbehind:!0,inside:e},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:i("!(?:<MOD>|<PAR>|[<>=])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:i("(^!(?:<MOD>|<PAR>|[<>=])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:i("(^!)(?:<MOD>|<PAR>|[<>=])+"),lookbehind:!0,inside:e},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^)]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:TM|R|C)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),a=t.phrase.inside,o={inline:a.inline,link:a.link,image:a.image,footnote:a.footnote,acronym:a.acronym,mark:a.mark};t.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var r=a.inline.inside;r.bold.inside=o,r.italic.inside=o,r.inserted.inside=o,r.deleted.inside=o,r.span.inside=o;var d=a.table.inside;d.inline=o.inline,d.link=o.link,d.image=o.image,d.footnote=o.footnote,d.acronym=o.acronym,d.mark=o.mark}(Prism)}}]);
//# sourceMappingURL=418.d6f8c212.chunk.js.map