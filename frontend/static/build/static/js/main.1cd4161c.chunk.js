(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),a=n.n(c),i=n(13),r=n.n(i),o=(n(19),n(20),n(11)),l=n(3),p=n.n(l),d=n(9),h=n(5),u=n(6),m=n(1),j=n(8),b=n(7);n(22);function g(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{onClick:function(){return e.pickRecipe(e.recipe.id)},className:"card text-black bg-secondary mb-2 mr-2",style:{width:"15rem",height:"276px"},children:[Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("h5",{className:"card-title",children:e.recipe.name})}),Object(s.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(s.jsxs)("li",{className:"list-group-item",children:["Prep Time: ",e.recipe.prep_time," minutes"]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Cook Time: ",e.recipe.cook_time," minutes"]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Cook Time: ",e.recipe.cook_time," minutes"]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Cook Time: ",e.recipe.cook_temp," degrees ",e.recipe.temperature]})]})]})})}var O=function(e){var t=e.recipes.map((function(t){return Object(s.jsx)(g,{recipe:t,pickRecipe:e.pickRecipe},t.id)})).slice(1,5);return Object(s.jsx)("div",{className:"recipe-list",children:t})},f=n(10),x=(n(23),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("form",{className:"col-12 col-md-6 register",onSubmit:function(t){return e.props.registerUser(t,e.state)},children:[Object(s.jsx)("h5",{className:"Register",children:"Create Account"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),Object(s.jsx)("small",{className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password1",children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",id:"password1",name:"password1",value:this.state.password1,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",id:"password2",name:"password2",value:this.state.password2,onChange:this.handleChange})]}),Object(s.jsx)("div",{className:"create-Account-Btn",children:Object(s.jsx)("button",{className:"btn btn-primary",children:"Register"})})]})}}]),n}(c.Component)),v=(n(24),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={username:"",password:""},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(s.jsx)(a.a.Fragment,{children:Object(s.jsxs)("form",{className:"col-12 col-md-6 log-in",onSubmit:function(t){return e.props.logIn(t,e.state)},children:[Object(s.jsx)("h5",{className:"Register",children:"Log in"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(s.jsx)("div",{className:"create-Account-Btn",children:Object(s.jsx)("button",{className:"btn btn-primary",children:"Log in"})})]})})}}]),n}(c.Component)),k=n(4),y=n.n(k),C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={name:"",image:null,preview:"",ingredients:"",instructions:"",notes:"",is_public:!1,category:"DSSRT",amount:1,prep_time:1,cook_time:1,cook_temp:350,temperature:"F"},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s.handleImage=s.handleImage.bind(Object(m.a)(s)),s.addRecipe=s.addRecipe.bind(Object(m.a)(s)),s}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"addRecipe",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,s,c,a,i,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("name",this.state.name),n.append("image",this.state.image),n.append("ingredients",this.state.ingredients),n.append("instructions",this.state.instructions),n.append("notes",this.state.notes),n.append("is_public",this.state.is_public),n.append("category",this.state.category),n.append("amount",this.state.amount),n.append("prep_time",this.state.prep_time),n.append("cook_time",this.state.cook_time),n.append("cook_temp",this.state.cook_temp),n.append("temperature",this.state.temperature),s={method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken")},body:n},c=function(e){return console.warn(e)},e.next=18,fetch("api/v1/recipes/",s);case 18:return a=e.sent,e.next=21,a.json().catch(c);case 21:i=e.sent,console.log(i),r=[].concat(Object(o.a)(this.props.recipes),[i]),this.setState({recipes:r});case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];console.log(n),this.setState({image:n});var s=new FileReader;s.onloadend=function(){t.setState({preview:s.result})},s.readAsDataURL(n)}},{key:"render",value:function(){var e=this;return Object(s.jsx)(a.a.Fragment,{children:Object(s.jsxs)("form",{className:"col-12 col-md-6 mb-5 form",onSubmit:function(t){return e.addRecipe(t,e.state)},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"name",children:"Recipe Name"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"image",children:"Choose a profile picture:"}),Object(s.jsx)("input",{type:"file",id:"image",name:"image",onChange:this.handleImage}),Object(s.jsx)("img",{src:this.state.preview,alt:""})]}),Object(s.jsxs)("div",{className:"form-group form-check",children:[Object(s.jsx)("input",{type:"checkbox",className:"form-check-input",id:"is_public",name:"is_public",onClick:function(){return e.setState({is_public:!0})}}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"is_public",children:"Make Public"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"prep_time",children:"Prep Time (Minutes)"}),Object(s.jsx)("input",{type:"number",min:"0",className:"form-control",id:"prep_time",name:"prep_time",value:this.state.prep_time,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"cook_time",children:"Cook Time (Minutes)"}),Object(s.jsx)("input",{type:"number",min:"0",className:"form-control",id:"cook_time",name:"cook_time",value:this.state.cook_time,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"amount",children:"Servings"}),Object(s.jsx)("input",{type:"number",min:"0",className:"form-control",id:"amount",name:"amount",value:this.state.amount,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"ingredients",children:"Ingredients"}),Object(s.jsx)("textarea",{className:"form-control",id:"ingredients",name:"ingredients",rows:"8",value:this.state.ingredients,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"instructions",children:"Instructions"}),Object(s.jsx)("textarea",{className:"form-control",id:"instructions",name:"instructions",rows:"8",value:this.state.instructions,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"notes",children:"Notes"}),Object(s.jsx)("textarea",{className:"form-control",id:"notes",name:"notes",rows:"8",value:this.state.notes,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"category",children:"Category"}),Object(s.jsxs)("select",{id:"category",className:"form-control",name:"category",value:this.state.category,onChange:this.handleChange,children:[Object(s.jsx)("option",{value:"BKFT",children:"Breakfast"}),Object(s.jsx)("option",{value:"LNCH",children:"Lunch"}),Object(s.jsx)("option",{value:"DNR",children:"Dinner"}),Object(s.jsx)("option",{value:"DSSRT",children:"Dessert"})]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"cook_temp",children:"Cook Temp"}),Object(s.jsx)("input",{type:"number",min:"0",className:"form-control",id:"cook_temp",name:"cook_temp",value:this.state.cook_temp,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-bottom",children:[Object(s.jsx)("label",{htmlFor:"temperature",children:"Temperature Scale"}),Object(s.jsxs)("select",{id:"temperature",className:"form-control",name:"temperature",value:this.state.temperature,onChange:this.handleChange,children:[Object(s.jsx)("option",{value:"F",children:"Fahrenheit"}),Object(s.jsx)("option",{value:"C",children:"Celcius"})]})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",children:"Add Recipe"})]})})}}]),n}(c.Component),N=(n(25),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={isEditing:!1},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"card",style:{marginRight:"8%"},children:[Object(s.jsx)("h5",{style:{textAlign:"center"},children:this.props.pickedRecipe.name}),Object(s.jsx)("img",{src:this.props.pickedRecipe.image,alt:""}),Object(s.jsxs)("div",{className:"p-4",children:[Object(s.jsx)("p",{children:"Ingredients you will need:"}),Object(s.jsx)("p",{children:this.props.pickedRecipe.ingredients}),Object(s.jsx)("p",{children:"Instructions:"}),Object(s.jsx)("p",{children:this.props.pickedRecipe.instructions}),Object(s.jsx)("p",{children:"Notes:"}),Object(s.jsx)("p",{children:this.props.pickedRecipe.notes}),Object(s.jsx)("button",{className:"btn btn-danger mr-2",onClick:function(){return e.props.deleteRecipe(e.props.pickedRecipe.id)},children:Object(s.jsx)("i",{className:"fas fa-trash"})}),Object(s.jsx)("button",{className:"btn btn-info",onClick:function(){return e.props.editRecipe(e.props.pickedRecipe.id)},children:Object(s.jsx)("i",{className:"fas fa-edit"})})]})]})})}}]),n}(c.Component));function R(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{onClick:function(){return e.pickRecipe(e.recipe.id)},className:"card text-black bg-secondary mb-2 mr-2",style:{width:"15rem",height:"276px"},children:[Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("h5",{style:{fontSize:"1.1rem"},className:"card-title",children:e.recipe.name})}),Object(s.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(s.jsxs)("li",{className:"list-group-item",children:["Prep Time: ",e.recipe.prep_time," minutes"]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Cook Time: ",e.recipe.cook_time," minutes"]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Cook Time: ",e.recipe.cook_time," minutes"]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Cook Time: ",e.recipe.cook_temp," degrees ",e.recipe.temperature]})]})]})})}var w=function(e){var t=e.recipes.map((function(t){return Object(s.jsx)(R,{recipe:t,pickRecipe:e.pickRecipe},t.id)}));return Object(s.jsx)("div",{className:"recipe-list",children:t})},S=(n(26),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={recipes:[],display:"home",pickedRecipe:{},isLoggedIn:!!y.a.get("Authorization")},s.registerUser=s.registerUser.bind(Object(m.a)(s)),s.logIn=s.logIn.bind(Object(m.a)(s)),s.logOut=s.logOut.bind(Object(m.a)(s)),s.pickRecipe=s.pickRecipe.bind(Object(m.a)(s)),s.deleteRecipe=s.deleteRecipe.bind(Object(m.a)(s)),s.editRecipe=s.editRecipe.bind(Object(m.a)(s)),s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/recipes/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({recipes:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"registerUser",value:function(){var e=Object(d.a)(p.a.mark((function e(t,n){var s,c,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)},c=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/registration/",s);case 5:return a=e.sent,e.next=8,a.json().catch(c);case 8:i=e.sent,console.log(i),i.key&&(y.a.set("Authorization","Token ".concat(i.key)),this.setState({isLoggedIn:!0,display:"home"}));case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logIn",value:function(){var e=Object(d.a)(p.a.mark((function e(t,n){var s,c,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)},c=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/login/",s);case 5:return a=e.sent,e.next=8,a.json().catch(c);case 8:(i=e.sent).key&&(y.a.set("Authorization","Token ".concat(i.key)),this.setState({isLoggedIn:!0,display:"home"}));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"X-CSRFToken":y.a.get("csrftoken"),"Content-Type":"application/json"}},n=function(e){return console.warn(e)},e.next=4,fetch("/api/v1/rest-auth/logout/",t);case 4:return s=e.sent,e.next=7,s.json().catch(n);case 7:"Successfully logged out."===e.sent.detail&&(y.a.remove("Authorization"),this.setState({isLoggedIn:!1,display:"home"}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pickRecipe",value:function(e){var t=this.state.recipes.find((function(t){return t.id===e}));this.setState({pickedRecipe:t,display:"pickedRecipe"}),console.log(this.state.pickedRecipe)}},{key:"deleteRecipe",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,s,c,a,i,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{"X-CSRFToken":y.a.get("csrftoken"),"Content-Type":"application/json"}},s=function(e){return console.warn(e)},e.next=4,fetch("api/v1/recipes/".concat(t,"/"),n);case 4:return c=e.sent,e.next=7,c.json().catch(s);case 7:a=e.sent,console.log(a),i=Object(o.a)(this.state.recipes),r=i.findIndex((function(e){return e.id===t})),i.splice(r,1),this.setState({recipes:i});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editRecipe",value:function(){var e=Object(d.a)(p.a.mark((function e(t,n){var s,c,a,i,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"PUT",headers:{"X-CSRFToken":y.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(t)},c=function(e){return console.warn(e)},e.next=4,fetch("api/v1/recipes/".concat(n,"/"),s);case 4:return a=e.sent,e.next=7,a.json().catch(c);case 7:i=e.sent,r=Object(o.a)(this.state.recipes),l=r.findIndex((function(e){return e.id===n})),r[l]=i,this.setState({recipes:r});case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.state.isLoggedIn,c=this.state.display;return"register"===c?e=Object(s.jsx)(x,{registerUser:this.registerUser}):"home"===c?e=Object(s.jsxs)("div",{className:"my-recipes",children:[n?Object(s.jsxs)("button",{className:"btn btn-secondary add-recipe mr-2",onClick:function(){return t.setState({display:"form"})},children:[Object(s.jsx)("p",{className:"add-sign",children:"+"}),Object(s.jsx)("p",{children:"Add Recipe"})]}):Object(s.jsxs)("button",{className:"btn btn-secondary add-recipe mr-2",onClick:function(){return alert("Need to be signed in")},children:[Object(s.jsx)("p",{className:"add-sign",children:"+"}),Object(s.jsx)("p",{children:"Add Recipe"})]}),Object(s.jsx)(O,{recipes:this.state.recipes,pickRecipe:this.pickRecipe})]}):"login"===c?e=Object(s.jsx)(v,{logIn:this.logIn}):"form"===c?e=Object(s.jsx)(C,{recipes:this.state.recipes}):"pickedRecipe"===c?e=Object(s.jsx)(N,{pickedRecipe:this.state.pickedRecipe,deleteRecipe:this.deleteRecipe,editRecipe:this.editRecipe}):"AllRecipes"===c&&(e=Object(s.jsx)(w,{recipes:this.state.recipes,pickRecipe:this.pickRecipe})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("nav",{className:"navbar navbar-light",style:{backgroundColor:"#C0C0C0"},children:[Object(s.jsx)("p",{style:{fontStyle:"italic"},children:"The kitchen is yours, chef!"}),Object(s.jsx)("h5",{style:{color:"#6B6B6B"},children:"BATCH MAKER"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"mr-1 btn btn-secondary",type:"button",onClick:function(){t.setState({display:"home"})},children:Object(s.jsx)("i",{className:"fas fa-home"})}),!1===n?Object(s.jsx)("button",{className:"mr-1 btn btn-secondary",type:"button",onClick:function(){t.setState({display:"register"})},children:"Register"}):Object(s.jsx)("button",{className:"mr-1 btn btn-secondary",onClick:function(){t.setState({display:"AllRecipes"})},children:"View All"}),!1===n?Object(s.jsx)("button",{className:"mr-1 btn btn-secondary",type:"button",onClick:function(){t.setState({display:"login"})},children:"Log in"}):Object(s.jsx)("button",{className:"mr-1 btn btn-secondary",type:"button",onClick:this.logOut,children:"Log out"})]})]}),Object(s.jsx)("div",{className:"my-recipes",children:e})]})}}]),n}(c.Component)),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),F()}},[[27,1,2]]]);
//# sourceMappingURL=main.1cd4161c.chunk.js.map