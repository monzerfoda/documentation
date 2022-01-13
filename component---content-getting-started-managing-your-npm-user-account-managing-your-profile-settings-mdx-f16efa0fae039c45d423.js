(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{"2Xwb":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n("zLVn"),o=n("q1tI"),l=n("7ljp"),r=n("O6H6"),i=n("4LHR"),c={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},b=m("Note"),p=m("Screenshot"),u={_frontmatter:c},s=r.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(s,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can manage settings for your user account profile from the web or command line."),Object(l.b)("h2",null,"Managing user account profile settings from the web"),Object(l.b)("p",null,"From the web, you can change the following user profile settings:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Avatar"),Object(l.b)("li",{parentName:"ul"},"Password"),Object(l.b)("li",{parentName:"ul"},"Full name"),Object(l.b)("li",{parentName:"ul"},"GitHub user name"),Object(l.b)("li",{parentName:"ul"},"Twitter user name"),Object(l.b)("li",{parentName:"ul"},"Email address added to package metadata"),Object(l.b)("li",{parentName:"ul"},"Two-factor authentication status")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)(o.Fragment,null,i.a["user-login"].text),Object(l.b)(o.Fragment,null,i.a["user-login"].image)),Object(l.b)("li",{parentName:"ol"},Object(l.b)(o.Fragment,null,i.a["account-settings"].text),Object(l.b)(o.Fragment,null,i.a["account-settings"].image))),Object(l.b)("h2",null,"Managing user account profile settings from the command line"),Object(l.b)(b,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," Your npm client must be version 5.5.1 or higher to change your account settings from the CLI. To update to the latest version of npm, on the command line, run ",Object(l.b)("inlineCode",{parentName:"p"},"npm install npm@latest -g"))),Object(l.b)("h3",null,"Viewing user account profile settings from the command line"),Object(l.b)("p",null,"To view your user profile settings from the CLI, on the command line, run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm profile get\n")),Object(l.b)(p,{src:"/getting-started/managing-your-npm-user-account/profile-settings-cli.png",alt:"Screenshot of command-line interface profile settings table",mdxType:"Screenshot"}),Object(l.b)("h3",null,"Updating user account profile settings from the command line"),Object(l.b)("p",null,"From the CLI, you can change the following properties for your user account:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"email")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"two-factor auth")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fullname")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"homepage")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"freenode")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"twitter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"github")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"password"))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, type the following command, replacing ",Object(l.b)("inlineCode",{parentName:"p"},"property")," with the name of the property, and ",Object(l.b)("inlineCode",{parentName:"p"},"value")," with the new value:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm profile set <prop> <value>\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"When prompted, provide your current password.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If you have enabled two-factor authentication on your account, when prompted, enter a one-time password."))),Object(l.b)("p",null,"For more details, see the ",Object(l.b)("inlineCode",{parentName:"p"},"profile")," ",Object(l.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/profile"},"command line documentation"),"."),Object(l.b)("h4",null,"Setting a password from the command line"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, type the following command:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm profile set password\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"When prompted, provide your current password.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"When prompted, type a new password."))),Object(l.b)(b,{mdxType:"Note"},Object(l.b)("p",null,"To protect your account, when you reset your password from the command line, it must:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"be longer than 10 characters"),Object(l.b)("li",{parentName:"ul"},"not contain part of your username"),Object(l.b)("li",{parentName:"ul"},"not be on ",Object(l.b)("a",{parentName:"li",href:"https://www.npmjs.com/signup/common-passwords"},"this list of common passwords")),Object(l.b)("li",{parentName:"ul"},'not be in the "',Object(l.b)("a",{parentName:"li",href:"https://haveibeenpwned.com/"},"Have I Been Pwned"),'" breach database'))),Object(l.b)("h4",null,"Configuring two-factor authentication from the command line"),Object(l.b)("p",null,"Enabling two-factor authentication on your account helps protect against unauthorized access to your account and packages."),Object(l.b)("p",null,'To enable, configure, and disable two-factor authentication from the command line, see "',Object(l.b)("a",{parentName:"p",href:"/configuring-two-factor-authentication#configuring-2fa-from-the-command-line"},"Configuring two-factor authentication"),'".'))}d.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),b=n("8Aig"),p=n("ReZb"),u=n("GCVy"),s=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return i.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var N=w,E=n("MfeC");function v(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},l)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=v,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,y=r.title,w=r.description,v=r.status,F=r.source,H=r.additionalContributors,M=void 0===H?[]:H,W=E.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:y,description:w}),i.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(g.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},y),w))),null!=W?i.a.createElement(I,null,i.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(N,{items:n.tableOfContents.items})):null,i.a.createElement(T,null,v||F?i.a.createElement(o.k,{mb:3,alignItems:"center"},v?i.a.createElement(j.a,{status:v}):null,i.a.createElement(o.e,{mx:"auto"}),F?i.a.createElement(O.a,{href:F}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(s.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-getting-started-managing-your-npm-user-account-managing-your-profile-settings-mdx-f16efa0fae039c45d423.js.map