(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(5),c=n.n(s),i=(n(10),n(4)),d=n(2),l=(n(11),n(0)),o=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),o=Object(d.a)(i,2),j=o[0],r=o[1],u=Object(a.useState)(""),m=Object(d.a)(u,2),x=m[0],b=m[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:s,amount:j,date:new Date(x)};e.onSaveExpenseData(n),c(""),r(""),b("")},children:[Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){c(e.target.value)}})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Amount"}),Object(l.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){r(e.target.value)}})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){b(e.target.value)}})]})]}),Object(l.jsx)("div",{className:"new-expense__actions",children:Object(l.jsx)("button",{type:"submit",children:"Add expense"})})]})},j=(n(13),function(e){return Object(l.jsx)("div",{className:"new-expense",children:Object(l.jsx)(o,{onSaveExpenseData:function(t){var n=Object(i.a)(Object(i.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})});n(14);var r=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-us",{day:"2-digit"}),a=e.date.getFullYear();return Object(l.jsxs)("div",{className:"expense-date",children:[Object(l.jsx)("div",{className:"expense-date__month",children:t}),Object(l.jsx)("div",{className:"expense-date__year",children:a}),Object(l.jsx)("div",{className:"expense-date__day",children:n})]})},u=(n(15),function(e){var t="card "+e.className;return Object(l.jsx)("div",{className:t,children:e.children})}),m=(n(16),function(e){var t=Object(a.useState)(e.title),n=Object(d.a)(t,2),s=n[0],c=n[1];return Object(l.jsxs)(u,{className:"expense-item",children:[Object(l.jsx)(r,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[Object(l.jsx)("h2",{children:s}),Object(l.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(l.jsx)("button",{onClick:function(){c(Math.random())},children:"Change Title"})]})}),x=(n(17),function(e){return Object(l.jsxs)(u,{className:"expenses",children:[Object(l.jsx)(m,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(l.jsx)(m,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(l.jsx)(m,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(l.jsx)(m,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date})]})}),b=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{onAddExpense:function(e){return console.log(e)}}),Object(l.jsx)(x,{items:e})]})};c.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.77567a13.chunk.js.map