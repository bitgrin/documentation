(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(71),m=t(74),c=t(70);var i=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"« ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," »"))))};a.default=function(e){var a=e.content,t=e.metadata,n=e.nextItem,c=e.prevItem,s=a.frontMatter;return r.a.createElement(l.a,{title:t.title,description:t.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:s,metadata:t},r.a.createElement(a,null)),r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:n,prevItem:c}))))))}},74:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(69),m=t(70),c=t(79);a.a=function(e){var a,t,n,i,s,o=e.children,v=e.frontMatter,E=e.metadata,u=e.truncated,p=E.date,g=E.permalink,_=E.tags,d=v.author,N=v.authorURL,h=v.authorTitle,b=v.authorFBID,k=v.title;return r.a.createElement("div",null,(a=p.substring(0,10).split("-"),t=a[0],n=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],i=parseInt(a[2],10),s=b?"https://graph.facebook.com/".concat(b,"/picture/?height=200&width=200"):v.authorImageURL,r.a.createElement("header",null,r.a.createElement("h1",{className:"margin-bottom--xs"},r.a.createElement(m.a,{to:g},k)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("small",null,n," ",i,", ",t)),r.a.createElement("div",{className:"avatar margin-bottom--md"},s&&r.a.createElement("a",{className:"avatar__photo-link",href:N,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:s,alt:d})),r.a.createElement("div",{className:"avatar__intro"},d&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},d)),r.a.createElement("small",{className:"avatar__subtitle"},h)))))),r.a.createElement("article",{className:"markdown"},r.a.createElement(l.a,{components:c.a},o)),r.a.createElement("div",{className:"row margin-vert--lg"},r.a.createElement("div",{className:"col"},_.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Tags:"),_.map(function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),r.a.createElement("div",{className:"col text--right"},u&&r.a.createElement(m.a,{to:E.permalink},r.a.createElement("strong",null,"Read More")))))}}}]);