(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(9),d=a.n(u),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(m.jsx)(j,{user:t.user})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=/^[A-Za-z\u0400-\u04FF0-9\s]+$/,f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,l.find((function(e){return e.id===t}))||null)});var t})),p=function(){var e=Object(o.useState)(l),t=Object(s.a)(e,1)[0],a=Object(o.useState)(f),n=Object(s.a)(a,2),i=n[0],c=n[1],u=Object(o.useState)(""),d=Object(s.a)(u,2),j=d[0],b=d[1],p=Object(o.useState)(!1),x=Object(s.a)(p,2),v=x[0],y=x[1],S=Object(o.useState)(0),N=Object(s.a)(S,2),I=N[0],g=N[1],C=Object(o.useState)(!1),_=Object(s.a)(C,2),k=_[0],D=_[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var a,n=!0,s=!0;j.trim().match(O)&&""!==j.trim()?y(!1):(y(!0),n=!1),I?D(!1):(D(!0),s=!1),n&&s&&(!function(e){c((function(t){return[].concat(Object(r.a)(t),[e])}))}({id:(a=i,Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1),title:j,userId:I,completed:!1,user:t.find((function(e){return e.id===I}))||null}),b(""),g(0))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"title",children:["Title:\xa0",Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter the title",value:j,onChange:function(e){return b(e.target.value)}})]}),v&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"user",children:["User:\xa0",Object(m.jsxs)("select",{"data-cy":"userSelect",value:I,onChange:function(e){return g(Number(e.target.value))},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),t.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),k&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:i})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a6ffabff.chunk.js.map