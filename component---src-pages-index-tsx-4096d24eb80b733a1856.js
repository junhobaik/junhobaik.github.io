(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var n=a("q1tI"),l=a("Wbzz"),r=a("IP2g"),c=a("wHSu"),i=a("VXBa"),s=a("H8eV"),o=a("8tEE"),m=(a("qnFv"),a("4QKa")),u=a.n(m),d=function(){var e=u.a.comment,t=u.a.name,a=u.a.company,l=u.a.location,i=u.a.email,s=u.a.website,m=u.a.linkedin,d=u.a.facebook,E=u.a.instagram,f=u.a.github;return n.createElement("div",{className:"bio"},e?n.createElement("span",{className:"comment"},e):null,t?n.createElement("div",{className:"bio-item name"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.o})),n.createElement("span",null,t)):null,a?n.createElement("div",{className:"bio-item company"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.a})),n.createElement("span",null,a)):null,l?n.createElement("div",{className:"bio-item location"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.i})),n.createElement("span",null,l)):null,i?n.createElement("div",{className:"bio-item email"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.d})),n.createElement("a",{href:"mailto:"+i},i)):null,s?n.createElement("div",{className:"bio-item website"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.g})),n.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s)):null,n.createElement("div",{className:"social"},n.createElement("a",{href:u.a.siteUrl+"/rss",target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:c.k,className:"rss"})),m?n.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:o.d,className:"linkedin"})):null,d?n.createElement("a",{href:d,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:o.a,className:"facebook"})):null,E?n.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:o.c,className:"instagram"})):null,f?n.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:o.b,className:"github"})):null))},E=(a("fMxN"),a("uP4m")),f="2288654358";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return n.createElement(i.a,null,n.createElement(s.a,{title:"Home"}),n.createElement("div",{className:"index-wrap"},n.createElement(d,null),n.createElement("div",{className:"index-post-list-wrap"},n.createElement(E.a,{posts:t}),t.length<100?null:n.createElement("div",{className:"show-more-posts"},n.createElement("div",{className:"show-more-btn"},n.createElement(l.Link,{to:"/search"},n.createElement(r.a,{icon:c.l}),n.createElement("span",null,"SHOW MORE POSTS")))))))}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},fMxN:function(e,t,a){},"l/wD":function(e,t,a){},qnFv:function(e,t,a){},uP4m:function(e,t,a){"use strict";var n=a("KQm4"),l=a("q1tI"),r=a("Wbzz"),c=a("LvDl");a("l/wD");t.a=function(e){var t=e.posts,a=Object(l.useState)(10),i=a[0],s=a[1],o=Object(l.useState)([]),m=o[0],u=o[1];t.sort((function(e,t){var a=e.node.frontmatter,n=t.node.frontmatter,l=new Date(a.update.includes("0001")?a.date:a.update),r=new Date(n.update.includes("0001")?n.date:n.update);return l<r?1:l>r?-1:0}));var d=Object(l.useCallback)(Object(c.throttle)((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&s((function(e){return e>=t.length?e:e+10}))}),250),[t]),E=Object(l.useCallback)((function(e){var t=e.map((function(e){var t=e.node,a=t.excerpt,n=t.fields,c=t.frontmatter,i=n.slug,s=c.date,o=c.title,m=c.tags,u=c.update;1===Number(u.split(",")[1])&&(u=null);var d=m.map((function(e){if("undefined"!==e)return l.createElement("div",{key:i+"-"+e,className:"tag"},l.createElement("span",null,l.createElement(r.Link,{to:"/tags#"+e},"#"+e)))}));return l.createElement("li",{key:i,className:"post"},l.createElement("article",null,l.createElement("h2",{className:"title"},l.createElement(r.Link,{to:i},o)),l.createElement("div",{className:"info"},l.createElement("div",{className:"date-wrap"},l.createElement("span",{className:"date"},s),u?l.createElement("span",{className:"update"}," ","(Updated: "+u+")"):null),m.length&&"undefined"!==m[0]?l.createElement("span",{className:"info-dot"},"·"):null,l.createElement("ul",{className:"tag-list"},d)),l.createElement("span",{className:"excerpt"},l.createElement(r.Link,{to:i},a))))}));u((function(e){return[].concat(Object(n.a)(e),Object(n.a)(t))}))}),[]);return Object(l.useEffect)((function(){i>0&&10!==i&&E(t.slice(m.length,i))}),[i]),Object(l.useEffect)((function(){return m.length&&u([]),s((function(e){return 10===e&&E(t.slice(0,10)),10})),window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[t]),l.createElement("div",{className:"post-list"},l.createElement("ul",null,m))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4096d24eb80b733a1856.js.map