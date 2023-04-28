!function(){"use strict";var e,t={255:function(){var e=window.wp.blocks,t=window.wp.element,l=(window.wp.i18n,window.wp.blockEditor),i=window.wp.components,n=e=>{let{attributes:l,setAttributes:n}=e;return(0,t.createElement)(i.ToggleControl,{label:"Ombre",checked:l.elevation,onChange:()=>n({elevation:!l.elevation}),className:"menu-icon-simplequizblock"})},c=e=>{let{attributes:l,setAttributes:n}=e;return(0,t.createElement)(i.ToggleControl,{label:"Plein",checked:l.fill,onChange:()=>n({fill:!l.fill}),className:"menu-icon-simplequizblock"})},r=e=>{let{attributes:l,setAttributes:n}=e;return(0,t.createElement)(i.DropdownMenu,{icon:"lightbulb",label:"Choisir une catégorie",className:"menu-icon-simplequizblock"},(e=>{let{onClose:c}=e;return(0,t.createElement)(i.MenuGroup,null,(0,t.createElement)(i.MenuItem,{isSelected:"all"===l.category,icon:"all"===l.category?"yes":null,onClick:()=>{n({category:"all"}),c()}},"Toutes"),(0,t.createElement)(i.MenuItem,{isSelected:"tv_cinema"===l.category,icon:"tv_cinema"===l.category?"yes":null,onClick:()=>{n({category:"tv_cinema"}),c()}},"Tv et Cinema"),(0,t.createElement)(i.MenuItem,{isSelected:"art_litterature"===l.category,icon:"art_litterature"===l.category?"yes":null,onClick:()=>{n({category:"art_litterature"}),c()}},"Art et Litterature"),(0,t.createElement)(i.MenuItem,{isSelected:"actu_politique"===l.category,icon:"actu_politique"===l.category?"yes":null,onClick:()=>{n({category:"actu_politique"}),c()}},"Actu et politique"),(0,t.createElement)(i.MenuItem,{isSelected:"sport"===l.category,icon:"sport"===l.category?"yes":null,onClick:()=>{n({category:"sport"}),c()}},"Sport"),(0,t.createElement)(i.MenuItem,{isSelected:"jeux_videos"===l.category,icon:"jeux_videos"===l.category?"yes":null,onClick:()=>{n({category:"jeux_videos"}),c()}},"Jeux Videos"),(0,t.createElement)(i.MenuItem,{isSelected:"culutre_generale"===l.category,icon:"culutre_generale"===l.category?"yes":null,onClick:()=>{n({category:"culutre_generale"}),c()}},"Culture générale"),(0,t.createElement)(i.MenuItem,{isSelected:"musique"===l.category,icon:"musique"===l.category?"yes":null,onClick:()=>{n({category:"musique"}),c()}},"Musique"))}))},o=e=>{let{attributes:l,setAttributes:n}=e;return(0,t.createElement)(i.DropdownMenu,{icon:"coffee",label:"Choisir une difficulté",className:"menu-icon-simplequizblock"},(e=>{let{onClose:c}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.MenuGroup,null,(0,t.createElement)(i.MenuItem,{isSelected:"all"===l.difficulty,icon:"all"===l.difficulty?"yes":null,onClick:()=>{n({difficulty:"all"}),c()}},"Toutes"),(0,t.createElement)(i.MenuItem,{isSelected:"facile"===l.difficulty,icon:"facile"===l.difficulty?"yes":null,onClick:()=>{n({difficulty:"facile"}),c()}},"Facile"),(0,t.createElement)(i.MenuItem,{isSelected:"normal"===l.difficulty,icon:"normal"===l.difficulty?"yes":null,onClick:()=>{n({difficulty:"normal"}),c()}},"Normal"),(0,t.createElement)(i.MenuItem,{isSelected:"difficile"===l.difficulty,icon:"difficile"===l.difficulty?"yes":null,onClick:()=>{n({difficulty:"difficile"}),c()}},"Difficile")))}))},u=JSON.parse('{"u2":"simplequizblock/simplequizblock"}');(0,e.registerBlockType)(u.u2,{edit:function(e){let{attributes:i,setAttributes:u}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(n,{attributes:i,setAttributes:u}),(0,t.createElement)(c,{attributes:i,setAttributes:u}),(0,t.createElement)(r,{attributes:i,setAttributes:u}),(0,t.createElement)(o,{attributes:i,setAttributes:u})),(0,t.createElement)("div",(0,l.useBlockProps)(),(0,t.createElement)("div",{className:"simplequizblock-container "+(i.elevation?"simplequizblock-shadow":"")},(0,t.createElement)("div",{className:"simplequizblock-question"},"De quelle couleur est le cheval blanc d'Henry IV ?"),(0,t.createElement)("div",{className:"simplequizblock-answers"},(0,t.createElement)("div",{className:"simplequizblock-unique-answer "+(i.fill?"simplequizblock-good-fill":"simplequizblock-good-border")},"Rouge"),(0,t.createElement)("div",{className:"simplequizblock-unique-answer "+(i.fill?"simplequizblock-bad-fill":"simplequizblock-bad-border")},"Blanc"),(0,t.createElement)("div",{className:"simplequizblock-unique-answer"},"Crème"),(0,t.createElement)("div",{className:"simplequizblock-unique-answer"},"La réponse D")))))}})}},l={};function i(e){var n=l[e];if(void 0!==n)return n.exports;var c=l[e]={exports:{}};return t[e](c,c.exports,i),c.exports}i.m=t,e=[],i.O=function(t,l,n,c){if(!l){var r=1/0;for(s=0;s<e.length;s++){l=e[s][0],n=e[s][1],c=e[s][2];for(var o=!0,u=0;u<l.length;u++)(!1&c||r>=c)&&Object.keys(i.O).every((function(e){return i.O[e](l[u])}))?l.splice(u--,1):(o=!1,c<r&&(r=c));if(o){e.splice(s--,1);var a=n();void 0!==a&&(t=a)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[l,n,c]},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};i.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,c,r=l[0],o=l[1],u=l[2],a=0;if(r.some((function(t){return 0!==e[t]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(u)var s=u(i)}for(t&&t(l);a<r.length;a++)c=r[a],i.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return i.O(s)},l=self.webpackChunksimplequizblock=self.webpackChunksimplequizblock||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var n=i.O(void 0,[431],(function(){return i(255)}));n=i.O(n)}();