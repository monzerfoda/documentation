(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),r=a("u9kb"),l=a("aOgs"),c=a("q1tI"),i=a.n(c),o=a("7ljp"),b=a("pD55"),m=a("8Aig"),d=a("ReZb"),p=a("GCVy"),g=a("+6vE");var s=function(e){var t=e.children;return i.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var u=function(e){var t=e.children;return i.a.createElement("strong",null,t)},O=a("gnlW"),j=a("mwnC"),N=a("/Rw0"),f=a("dVM4"),h=Object(n.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,a=e.depth;return i.a.createElement(h,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(r.e,{as:"li",key:e.url,pl:a>0?3:0},i.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(y,{items:e.items,depth:a+1}):null)})))}y.defaultProps={depth:0};var E=y,v=a("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),l=[],c=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(c=e),l.push(i.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(r.i,{overlay:e.overlay},i.a.createElement(r.i.Button,null,c.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(n.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,k=Object(n.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),X=Object(n.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,c=a.frontmatter,h=c.title,y=c.description,w=c.status,S=c.source,M=c.additionalContributors,A=void 0===M?[]:M,H=v.a.getVariantRoot(n.pathname);return i.a.createElement(o.a,{components:{Index:d.a,Note:p.a,Prompt:s,PromptReply:u,Screenshot:O.a}},i.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(b.a,{title:h,description:y}),i.a.createElement(m.b,{location:n,isSearchEnabled:a.isSearchEnabled}),i.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(r.e,{display:["none",null,null,"block"]},i.a.createElement(j.a,{editOnGitHub:a.themeOptions.editOnGitHub,location:n})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(r.e,null,i.a.createElement(r.e,null,i.a.createElement(r.m,{as:"h1"},h),y))),null!=H?i.a.createElement(z,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:n})):null),a.tableOfContents.items?i.a.createElement(X,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(E,{items:a.tableOfContents.items})):null,i.a.createElement(I,null,w||S?i.a.createElement(r.k,{mb:3,alignItems:"center"},w?i.a.createElement(f.a,{status:w}):null,i.a.createElement(r.e,{mx:"auto"}),S?i.a.createElement(N.a,{href:S}):null):null,a.tableOfContents.items?i.a.createElement(r.e,{display:["block",null,"none"],mb:3},i.a.createElement(r.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(r.r,{icon:l.b,mr:2}):i.a.createElement(r.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(r.e,{pt:1},i.a.createElement(E,{items:a.tableOfContents.items})))}))):null,t,i.a.createElement(g.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(A.map((function(e){return{login:e}})))}))))))}},hYde:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("zLVn"),r=a("q1tI"),l=a("7ljp"),c=a("O6H6"),i=a("4LHR"),o={},b={_frontmatter:o},m=c.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(m,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"There are three roles in an organization:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Owner:")," Users who manage organization members and billing."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Admin:")," Users who manage team membership and package access."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Member:")," Users who create and publish packages in the organization scope.")),Object(l.b)(r.Fragment,null,Object(l.b)("strong",null,"On the public registry, you cannot remove the last owner from an organization.")," To delete an organization, ",i.a["contact-support"].text,"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Action"),Object(l.b)("th",{parentName:"tr",align:"center"},Object(l.b)("strong",{parentName:"th"},"Owner")),Object(l.b)("th",{parentName:"tr",align:"center"},Object(l.b)("strong",{parentName:"th"},"Admin")),Object(l.b)("th",{parentName:"tr",align:"center"},Object(l.b)("strong",{parentName:"th"},"Member")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Manage organization billing"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Add members to the organization"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Remove members from the organization"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Rename an organization"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Delete an organization"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Change any organization member's role"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Create teams"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Delete teams"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Add any member to any team"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Remove any member from any team"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Manage team package access"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Create and publish packages in the organization scope"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"},"X"),Object(l.b)("td",{parentName:"tr",align:"center"},"X")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-managing-organization-members-organization-roles-and-permissions-mdx-297fbb1ae0221f0b9c6b.js.map