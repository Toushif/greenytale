(this["webpackJsonpgreen-production"]=this["webpackJsonpgreen-production"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(1),r=c.n(s),a=c(25),i=c.n(a),o=c(4),l=c(3),j=c(9),u=(c(64),c(6)),d=c(7),h=c(14),b=c(13),p=c(27),O=c(8),x=c.n(O),f=c(17),m=c(15),g=(c(39),c(29)),v=c(48),y=c(28),k=c(24),N=(c(38),c(0)),w=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(u.a)(this,c),(n=t.call(this,e)).success=function(e,t){n.setState({errorMsg:""}),console.log("res",e,t);var c=(e.data?e.data:e).map((function(e,t){if(t<20){var c,n=Object(v.a)(null===e||void 0===e||null===(c=e.image_buffer)||void 0===c?void 0:c.data),s="/product/".concat(e.product_ID);return Object(N.jsxs)("div",{className:"product",children:[Object(N.jsx)(o.b,{to:s,title:"Product",children:Object(N.jsx)("div",{className:"image-box",children:Object(N.jsx)("div",{className:"images",children:Object(N.jsx)(m.LazyLoadImage,{alt:"product_img",effect:"blur",src:n})})})}),Object(N.jsxs)("div",{className:"text-box",children:[Object(N.jsx)("h2",{className:"item",children:e.product_name}),Object(N.jsx)("h3",{className:"price",children:e.unit_price}),Object(N.jsxs)("p",{className:"description",children:["Materials used: ",e.product_material]}),Object(N.jsxs)("p",{className:"description",children:["Recycling code: ",e.recycling_code]}),Object(N.jsxs)("p",{className:"description",children:["Item uploaded on: ",e.created_dt.substr(0,e.created_dt.indexOf("T"))]}),Object(N.jsx)("label",{htmlFor:"item-1-quantity",children:"Quantity: "}),Object(N.jsx)("input",{type:"number",name:"item-1-quantity",id:"item-1-quantity",value:e.quantity}),Object(N.jsx)("button",{type:"button",name:"item-1-button",id:"item-1-button",children:"Add to Cart"})]})]},t)}}));n.setState({productsList:c})},n.state={pageLoading:!0,search:"",errorMsg:"",productsList:Object(N.jsx)("div",{className:"no=products",children:"You do not have any items to sell right now. Click the 'Upload Items' button to strat uploading."})},n}return Object(d.a)(c,[{key:"onClick",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.getSellerProducts()}},{key:"getSellerProducts",value:function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({pageLoading:!0}),e.prev=1,e.next=4,g.a.allProduct();case 4:(t=e.sent)&&this.success(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({errorMsg:"Error fetching products list"}),Object(y.a)(e.t0);case 12:this.setState({pageLoading:!1});case 13:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(x.a.mark((function e(){var t,c,n,s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.context,c=t.searchText,n=t.dispatchSearch,!(c.length>2)){e.next=13;break}return s={product_name:c},e.prev=3,e.next=6,g.a.searchProducts(s);case 6:(r=e.sent)&&this.success(r,!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),Object(y.a)(e.t0);case 13:n({type:"SEARCH-HOME",res:""}),console.log("searchText2",c);case 15:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.context.searchText;return console.log("searchText",e),Object(N.jsxs)("div",{className:"listing-section",children:[this.state.pageLoading?Object(N.jsx)(k.a,{count:"2"}):"",this.state.productsList]})}}]),c}(s.Component),S=(c(91),function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(u.a)(this,c),(n=t.call(this,e)).state={pageLoading:!1},n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"page-not-found",children:[Object(N.jsx)("h1",{children:"404"}),Object(N.jsx)("div",{class:"cloak__wrapper",children:Object(N.jsx)("div",{class:"cloak__container",children:Object(N.jsx)("div",{class:"cloak"})})}),Object(N.jsxs)("div",{class:"info",children:[Object(N.jsx)("h2",{children:"Sorry, we can't find that page"}),Object(N.jsx)("p",{children:"May be the page used to be here, but seems to have been removed. Check your URL again and try again."}),Object(N.jsx)(o.b,{to:"/",children:"Home"})]})]})}}]),c}(s.Component)),C=c(35),U=["component"];var I=function(e){var t=e.component,c=Object(C.a)(e,U);return null!==c.user&&function(e){return!!e.user.find((function(t){return e.allowed.includes(t)}))}(c)?Object(N.jsx)(s.Suspense,{fallback:Object(N.jsx)(k.a,{count:"2"}),children:Object(N.jsx)(t,Object(n.a)({},c))}):Object(N.jsx)(l.a,{to:"/login"})},_=c(26),L=c(51),P=c.n(L),A=(c(92),c(58)),D=c(37),T=c(19),R=c.p+"static/media/banner_1200.dedd6cda.jpg",M=c.p+"static/media/climate1.86a1a013.jpg",E=c.p+"static/media/climate2.a0ef5cc1.jpg",H=c.p+"static/media/climate3.e94e64eb.jpg",z=c.p+"static/media/climate4.f47b90e7.jpg",F=c.p+"static/media/climate5.365eb541.jpg",G=c.p+"static/media/climate6.48e04e38.jpg",J=(c(98),function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(u.a)(this,c),(n=t.call(this,e)).successResponseGoogle=function(){var e=n.context,t=e.dispatch,c=e.jwtDispatch,s=e.userDispatch;t({type:"LOGIN-LOGOUT"}),c({type:"JWT-TOKEN",token:""}),s({type:"USER-DETAILS",res:null}),n.props.history.push("/login")},n.searchForum=function(e){n.props.history.push("/discover")},n.searchChange=function(e){n.setState({search:e.target.value})},n.enterKey=function(e){"Enter"===e.code&&n.hitSearch()},n.hitSearch=function(e){(0,n.props.context.dispatchSearch)({type:"SEARCH-HOME",res:n.state.search}),n.setState({search:""})},n.state={pageLoading:!1,search:""},n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){this.context.isSeller}},{key:"render",value:function(){var e,t,c,n=this.context,s=n.isAuthenticated,r=n.isSeller,a=n.isWatsonDiscovery,i=n.userDetails,l=this.state.search;return Object(N.jsxs)("header",{style:{height:a?"80px":"280px"},className:"ds-header app-logged-in",children:[this.state.pageLoading?Object(N.jsx)(D.a,{}):"",!a&&Object(N.jsxs)(A.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:5e3,children:[Object(N.jsx)("div",{children:Object(N.jsx)(m.LazyLoadImage,{alt:"banner image",effect:"blur",src:R})}),Object(N.jsx)("div",{children:Object(N.jsx)(m.LazyLoadImage,{alt:"banner image",effect:"blur",src:M})}),Object(N.jsx)("div",{children:Object(N.jsx)(m.LazyLoadImage,{alt:"banner image",effect:"blur",src:z})}),Object(N.jsx)("div",{children:Object(N.jsx)(m.LazyLoadImage,{alt:"banner image",effect:"blur",src:E})}),Object(N.jsx)("div",{children:Object(N.jsx)(m.LazyLoadImage,{alt:"banner image",effect:"blur",src:F})}),Object(N.jsx)("div",{children:Object(N.jsx)(m.LazyLoadImage,{alt:"banner image",effect:"blur",src:H})}),Object(N.jsx)("div",{children:Object(N.jsx)(m.LazyLoadImage,{alt:"banner image",effect:"blur",src:G})})]}),Object(N.jsxs)("nav",{className:"navbar large-nav-menu",children:[Object(N.jsx)(o.b,{className:"logo",title:"Greenytale logo",to:"/",children:Object(N.jsx)("span",{children:"Greenytale logo"})}),!a&&Object(N.jsxs)("div",{className:"hero",children:[Object(N.jsx)("h1",{children:"Sustainable Consumption and Production"}),Object(N.jsx)("button",{className:"btn sub-header",title:"Watson header",onClick:this.searchForum,children:"Watson AI Search Forum"})]})]}),Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{to:"/about-us",title:"About Us",onClick:this.onClick,children:"About us"})}),r&&Object(N.jsxs)("li",{children:[Object(N.jsx)(o.b,{title:"Design Corner",to:"","aria-haspopup":"true",onClick:this.onClick,children:"Seller Corner"}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{title:"Seller account",to:"/seller",children:"View Account"})}),Object(N.jsxs)("li",{children:[Object(N.jsxs)("a",{title:"Sub link 3",href:"javascript:void(0)","aria-haspopup":"true",children:[" ","Products"]}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{title:"Upload Items",to:"/seller-upload",children:"Upload Items"})}),Object(N.jsx)("li",{children:Object(N.jsxs)("a",{title:"Sub Sub link 2",href:"javascript:void(0)",onClick:this.onClick,children:[" ","Modify Existing Products"]})})]})]})]})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("a",{title:"Products",href:"javascript:void(0)","aria-haspopup":"true",onClick:this.onClick,children:"Products"}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsxs)("a",{title:"Sub link 1",href:"javascript:void(0)",onClick:this.onClick,children:[" ","Sub Link 1"]})}),Object(N.jsx)("li",{children:Object(N.jsxs)("a",{title:"Sub link 2",href:"javascript:void(0)",onClick:this.onClick,children:[" ","Sub Link 2"]})})]})]}),Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{title:"Contact Us",to:"/about-us#contact",children:"Contact Us"})}),"/"===(null===(e=this.props.history)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.pathname)&&Object(N.jsx)("li",{className:"product-search",children:Object(N.jsxs)("div",{className:"header-search",children:[Object(N.jsx)("div",{className:"input-field first-wrap",children:Object(N.jsx)("div",{className:"input-select",children:Object(N.jsxs)("select",{"data-trigger":"",name:"choices-single-defaul",className:"choices-single-defaul",children:[Object(N.jsx)("option",{placeholder:"",children:"Category"}),Object(N.jsx)("option",{children:"New Arrivals"}),Object(N.jsx)("option",{children:"Eco friendly only"}),Object(N.jsx)("option",{children:"Her/She"}),Object(N.jsx)("option",{children:"Him/He"}),Object(N.jsx)("option",{children:"Clothing"}),Object(N.jsx)("option",{children:"Footwear"}),Object(N.jsx)("option",{children:"Electronics"}),Object(N.jsx)("option",{children:"Domestic appliances"}),Object(N.jsx)("option",{children:"Accessories"})]})})}),Object(N.jsx)("div",{className:"input-field second-wrap",children:Object(N.jsx)("input",{id:"search",type:"text",value:l,placeholder:"Search products",onKeyUp:this.enterKey,onChange:this.searchChange})}),Object(N.jsx)("div",{className:"input-field third-wrap",children:Object(N.jsx)("button",{className:"btn-search",type:"button",onClick:this.hitSearch,children:Object(N.jsx)(_.a,{})})})]})}),Object(N.jsx)("li",{className:"home-cart",children:Object(N.jsx)(o.b,{title:"Cart",to:"/cart",children:Object(N.jsx)(_.b,{})})}),s?Object(N.jsx)("li",{className:"profile-menu",children:Object(N.jsx)("ul",{className:"profile-wrapper",children:Object(N.jsx)("li",{children:Object(N.jsxs)("div",{className:"profile",children:[(null===i||void 0===i?void 0:i.imgUrl)?Object(N.jsx)("img",{src:null===i||void 0===i?void 0:i.imgUrl,alt:"user_img"}):Object(N.jsx)(_.c,{}),Object(N.jsx)(o.b,{to:"/profile",title:"Profile",className:"name",children:null===i||void 0===i||null===(c=i.user_name)||void 0===c?void 0:c.toUpperCase()}),Object(N.jsxs)("ul",{className:"menu",children:[Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{to:{pathname:"/profile",param:"edit"},children:"Edit"})}),Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{to:"/settings",children:"Settings"})}),Object(N.jsx)("li",{children:Object(N.jsx)(o.b,{to:{pathname:"/settings",param:"security"},children:"Change Password"})}),Object(N.jsx)("li",{children:Object(N.jsx)(P.a,{clientId:"1066685436606-rs3sveemdvqhfm56hljf70cvs2n077ed.apps.googleusercontent.com",buttonText:"Logout with Google",render:function(e){return Object(N.jsx)("a",{onClick:e.onClick,href:"#",children:"Logout"})},style:{transform:"scale(0.7)"},onSuccess:this.successResponseGoogle,onFailure:this.failureResponseGoogle})})]})]})})})}):Object(N.jsx)("li",{className:"login-li",children:Object(N.jsx)(o.b,{title:"Login",to:"/login",children:"Login"})})]})})]})}}]),c}(s.Component));J.contextType=T.a;var W=J,q=(c(99),function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(u.a)(this,c),(n=t.call(this,e)).state={pageLoading:!0},n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(N.jsxs)("footer",{className:"footer",children:[Object(N.jsx)("div",{className:"container bottom_border",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:" col-sm-4 col-md col-sm-4  col-12 col",children:[Object(N.jsx)("h5",{className:"headin5_amrc col_white_amrc pt2",children:"Find us"}),Object(N.jsx)("p",{className:"mb10",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),Object(N.jsxs)("p",{children:[Object(N.jsx)("i",{className:"fa fa-location-arrow"}),"   Kolkata, India"]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("i",{className:"fa fa-phone"}),"  +91-8981288955  "]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("i",{className:"fa fa fa-envelope"})," produce.recycle@gmail.com  "]})]}),Object(N.jsxs)("div",{className:" col-sm-4 col-md  col-6 col",children:[Object(N.jsx)("h5",{className:"headin5_amrc col_white_amrc pt2",children:"Quick links"}),Object(N.jsxs)("ul",{className:"footer_ul_amrc",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Image Rectoucing"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Clipping Path"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Hollow Man Montage"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Ebay & Amazon"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Hair Masking/Clipping"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Image Cropping"})})]})]}),Object(N.jsxs)("div",{className:" col-sm-4 col-md  col-6 col",children:[Object(N.jsx)("h5",{className:"headin5_amrc col_white_amrc pt2",children:"Quick links"}),Object(N.jsxs)("ul",{className:"footer_ul_amrc",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Remove Background"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Shadows & Mirror Reflection"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Logo Design"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Vectorization"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Hair Masking/Clipping"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Image Cropping"})})]})]}),Object(N.jsxs)("div",{className:" col-sm-4 col-md  col-12 col",children:[Object(N.jsx)("h5",{className:"headin5_amrc col_white_amrc pt2",children:"Follow us"}),Object(N.jsxs)("ul",{className:"footer_ul2_amrc",children:[Object(N.jsxs)("li",{children:[Object(N.jsxs)("a",{href:"javascript:void(0)",children:[Object(N.jsx)("i",{className:"fab fa-twitter fleft padding-right"})," "]}),Object(N.jsxs)("p",{children:["Lorem Ipsum is simply dummy text of the printing...",Object(N.jsx)("a",{href:"javascript:void(0)",children:"https://www.lipsum.com/"})]})]}),Object(N.jsxs)("li",{children:[Object(N.jsxs)("a",{href:"javascript:void(0)",children:[Object(N.jsx)("i",{className:"fab fa-twitter fleft padding-right"})," "]}),Object(N.jsxs)("p",{children:["Lorem Ipsum is simply dummy text of the printing...",Object(N.jsx)("a",{href:"javascript:void(0)",children:"https://www.lipsum.com/"})]})]}),Object(N.jsxs)("li",{children:[Object(N.jsxs)("a",{href:"javascript:void(0)",children:[Object(N.jsx)("i",{className:"fab fa-twitter fleft padding-right"})," "]}),Object(N.jsxs)("p",{children:["Lorem Ipsum is simply dummy text of the printing...",Object(N.jsx)("a",{href:"javascript:void(0)",children:"https://www.lipsum.com/"})]})]})]})]})]})}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("ul",{className:"foote_bottom_ul_amrc",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Home"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"About"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Services"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Pricing"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Blog"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:"Contact"})})]}),Object(N.jsxs)("p",{className:"text-center",children:["Copyright @2021 | ",Object(N.jsx)("a",{href:"javascript:void(0)",children:"Green Production"})]}),Object(N.jsxs)("ul",{className:"social_footer_ul",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("i",{className:"fab fa-twitter"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("i",{className:"fab fa-linkedin"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("i",{className:"fab fa-instagram"})})})]})]})]})}}]),c}(s.Component)),K=(c(100),c(101),Object(s.lazy)((function(){return c.e(6).then(c.bind(null,135))}))),B=Object(s.lazy)((function(){return Promise.all([c.e(4),c.e(13)]).then(c.bind(null,126))})),Z=Object(s.lazy)((function(){return Promise.all([c.e(3),c.e(9)]).then(c.bind(null,127))})),Q=Object(s.lazy)((function(){return c.e(12).then(c.bind(null,129))})),V=Object(s.lazy)((function(){return c.e(7).then(c.bind(null,137))})),Y=Object(s.lazy)((function(){return c.e(11).then(c.bind(null,138))})),X=Object(s.lazy)((function(){return c.e(10).then(c.bind(null,130))})),$=Object(s.lazy)((function(){return c.e(5).then(c.bind(null,131))})),ee=Object(s.lazy)((function(){return c.e(8).then(c.bind(null,132))})),te=function(e){var t=Object(s.useContext)(T.a).userDetails,c=Object(s.useContext)(T.a),r=[3];if(t&&t.role){var a=t.role.filter((function(e){return e.ActiveStatus})).map((function(e){return e.RoleID}));r=Object(p.a)(new Set([].concat(Object(p.a)(r),Object(p.a)(a))))}return Object(N.jsxs)("div",{className:"App",children:[!location.pathname.includes("login")&&Object(N.jsx)(W,Object(n.a)(Object(n.a)({},e),{},{context:c})),Object(N.jsxs)(l.d,{children:[Object(N.jsx)(l.b,{exact:!0,path:"/",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[1,2,3,4],component:w}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/login",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[1,2,3,4],component:K}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/profile",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[1,2,4],component:B}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/product",render:function(){return Object(N.jsx)(I,{user:r,context:c,allowed:[1,2,3,4],component:Z})}}),Object(N.jsx)(l.b,{exact:!0,path:"/product/:id",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{user:r,context:c,allowed:[1,2,3,4],component:Z}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/discover",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[1,2,3,4],component:Q}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/about-us",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[1,2,3,4],component:V}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/settings",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[1,2,4],component:Y}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/seller",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[2],component:X}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/seller-upload",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[2],component:$}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/cart",render:function(e){return Object(N.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{context:c,user:r,allowed:[1,2,4],component:ee}))}}),Object(N.jsx)(l.b,{exact:!0,path:"/not-found",component:S}),Object(N.jsx)(l.b,{path:"*",render:function(){return Object(N.jsx)(l.a,{to:"/not-found"})}})]}),!location.pathname.includes("login")&&Object(N.jsx)(q,{})]})},ce=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(u.a)(this,c),(n=t.call(this,e)).state={},n}return Object(d.a)(c,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"main",children:Object(N.jsx)(T.b,{children:Object(N.jsx)(te,Object(n.a)({},this.props))})})}}]),c}(s.Component),ne=function(e){e&&e instanceof Function&&c.e(14).then(c.bind(null,133)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))},se=c(18),re=c.n(se),ae=function(){re.a.interceptors.request.use((function(e){return e.url.includes("login")||e.url.includes("enriched_text.entities.text:")||e.url.includes("sign-up")||!sessionStorage.getItem("jwtToken")||(e.headers.Authorization="Bearer ".concat(sessionStorage.getItem("jwtToken"))),e}),(function(e){return Promise.reject(e)})),re.a.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}))};i.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(o.a,{history:j.a,children:Object(N.jsx)(l.b,{render:function(e){return Object(N.jsx)(ce,Object(n.a)({},e))}})})}),document.getElementById("root")),ae(),ne()},19:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(16),s=c(1),r=function(e,t){switch(t.type){case"LOGIN-LOGOUT":return!e;case"JWT-TOKEN":return t.token;case"USER-DETAILS":case"WATSON-DISCOVERY":case"IS-SELLER":case"IS-ADMIN":case"SEARCH-HOME":case"PRODUCT-ID":return t.res;default:return e}},a=c(0),i=Object(s.createContext)();t.b=function(e){var t=Object(s.useReducer)(r,!1,(function(){return!!JSON.parse(sessionStorage.getItem("isAuthenticated"))})),c=Object(n.a)(t,2),o=c[0],l=c[1],j=Object(s.useReducer)(r,"",(function(){return sessionStorage.getItem("jwtToken")||""})),u=Object(n.a)(j,2),d=u[0],h=u[1],b=Object(s.useReducer)(r,null,(function(){return JSON.parse(sessionStorage.getItem("userDetails"))})),p=Object(n.a)(b,2),O=p[0],x=p[1],f=Object(s.useReducer)(r,!1),m=Object(n.a)(f,2),g=m[0],v=m[1],y=Object(s.useReducer)(r,""),k=Object(n.a)(y,2),N=k[0],w=k[1],S=Object(s.useReducer)(r,!1,(function(){return!!JSON.parse(sessionStorage.getItem("isSeller"))})),C=Object(n.a)(S,2),U=C[0],I=C[1],_=Object(s.useReducer)(r,!1),L=Object(n.a)(_,2),P=L[0],A=L[1],D=Object(s.useReducer)(r,null),T=Object(n.a)(D,2),R=T[0],M=T[1];return Object(s.useEffect)((function(){sessionStorage.setItem("isAuthenticated",o)}),[o]),Object(s.useEffect)((function(){sessionStorage.setItem("jwtToken",d)}),[d]),Object(s.useEffect)((function(){sessionStorage.setItem("userDetails",JSON.stringify(O))}),[O]),Object(s.useEffect)((function(){sessionStorage.setItem("isSeller",JSON.stringify(U))}),[U]),Object(a.jsx)(i.Provider,{value:{isAuthenticated:o,jwtToken:d,userDetails:O,isWatsonDiscovery:g,isSeller:U,isAdmin:P,searchText:N,productId:R,dispatch:l,jwtDispatch:h,userDispatch:x,dispatchSeller:I,dispatchAdmin:A,dispatchWatsonDiscovery:v,dispatchSearch:w,dispatchProductId:M},children:e.children})}},24:function(e,t,c){"use strict";c(84);var n=c(0);t.a=function(e){var t=+e.count||1;return Object(n.jsx)("div",{className:"global-skeleton-loader",children:Object(n.jsx)("div",{className:"global-form",children:Object(n.jsx)("ul",{className:"o-vertical-spacing o-vertical-spacing--l",children:Array.from(Array(t)).map((function(e){return Object(n.jsxs)("li",{className:"blog-post o-media",children:[Object(n.jsx)("div",{className:"o-media__figure",children:Object(n.jsx)("span",{className:"skeleton-box",style:{height:"110px"}})}),Object(n.jsx)("div",{className:"o-media__body",children:Object(n.jsxs)("div",{className:"o-vertical-spacing",children:[Object(n.jsx)("h3",{className:"blog-post__headline",children:Object(n.jsx)("span",{className:"skeleton-box",style:{width:"55%"}})}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"skeleton-box",style:{width:"80%"}}),Object(n.jsx)("span",{className:"skeleton-box",style:{width:"90%"}}),Object(n.jsx)("span",{className:"skeleton-box",style:{width:"83%"}}),Object(n.jsx)("span",{className:"skeleton-box",style:{width:"80%"}})]}),Object(n.jsx)("div",{className:"blog-post__meta",children:Object(n.jsx)("span",{className:"skeleton-box",style:{width:"70px"}})})]})})]},e)}))})})})}},28:function(e,t,c){"use strict";t.a=function(e){var t=e.message||e.error||e;t||(t="Some error occurred. Please try again."),(0,console.error)(t)}},29:function(e,t,c){"use strict";var n={login:"login",signup:"signup",watsonSeach:"enriched_text.entities.text:",updateUser:"updateUser",deleteUser:"deleteUser",sellerProducts:"sellerProducts",newProduct:"newProduct",allProduct:"allProduct",searchProducts:"searchProducts",productInfo:"productInfo"},s=c(57),r=c(2),a=c(8),i=c.n(a),o=c(17),l=c(6),j=c(7),u=c(18),d=c.n(u),h="https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/e58f4c75-a324-40d1-9fc9-6f5f99b03d81/v1/environments/".concat("f5a133e0-93f4-4c78-9213-36cd9e96b17c","/collections/").concat("80000905-798b-4f15-9e6a-8d16e182ae42","/query?version=2019-04-30&query="),b=[{ApiName:"signup",Type:"greenytale",MockUrl:"/signup.json",RelativeUrl:"/users/sign-up"},{ApiName:"login",Type:"greenytale",MockUrl:"/login.json",RelativeUrl:"/users/login"},{ApiName:"updateUser",Type:"greenytale",MockUrl:"/updateUser.json",RelativeUrl:"/users/update-profile"},{ApiName:"deleteUser",Type:"greenytale",MockUrl:"/deleteUser.json",RelativeUrl:"/users/delete-account"},{ApiName:"sellerProducts",Type:"greenytale",MockUrl:"/deleteUser.json",RelativeUrl:"/products/seller-listings"},{ApiName:"newProduct",Type:"greenytale",MockUrl:"/deleteUser.json",RelativeUrl:"/products/new-product"},{ApiName:"allProduct",Type:"greenytale",MockUrl:"/deleteUser.json",RelativeUrl:"/products"},{ApiName:"searchProducts",Type:"greenytale",MockUrl:"/deleteUser.json",RelativeUrl:"/products/search-product"},{ApiName:"productInfo",Type:"greenytale",MockUrl:"/deleteUser.json",RelativeUrl:"/products/product-info"},{ApiName:"enriched_text.entities.text:",Type:"greenytale",MockUrl:"/search.json",RelativeUrl:""}],p=new(function(){function e(){Object(l.a)(this,e)}return Object(j.a)(e,[{key:"get",value:function(e,t){var c=this.getUrl(e);return this.getApiData(c,t,e)}},{key:"post",value:function(e,t,c){var n=this.getUrl(e);return this.postApiData(n,t,c,e)}},{key:"put",value:function(e,t,c){var n=this.getUrl(e);return this.putApiData(n,t,c)}},{key:"delete",value:function(e,t){var c=this.getUrl(e);return this.deleteApiData(c,t)}},{key:"getApiData",value:function(){var e=Object(o.a)(i.a.mark((function e(t,c,n){var s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.getHttpHeaders(c),r=n.includes("enriched_text.entities.text:")?{headers:s,auth:{username:"apikey",password:"huvL7Ii1ZhZ788C19-oOeZdO6bZDpTLiu_vSgyiUPipD"}}:{headers:s},e.next=4,d.a.get(t,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t,c,n){return e.apply(this,arguments)}}()},{key:"postApiData",value:function(){var e=Object(o.a)(i.a.mark((function e(t,c,n,s){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.formatParamData(c),a=this.getHttpHeaders(n),o="imageRelated"===s?{headers:a,responseType:"blob"}:{headers:a},e.next=5,d.a.post(t,r,o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t,c,n,s){return e.apply(this,arguments)}}()},{key:"putApiData",value:function(){var e=Object(o.a)(i.a.mark((function e(t,c,n){var s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.formatParamData(c),r=this.getHttpHeaders(n),e.next=4,d.a.put(t,s,{headers:r});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t,c,n){return e.apply(this,arguments)}}()},{key:"deleteApiData",value:function(){var e=Object(o.a)(i.a.mark((function e(t,c){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.formatParamData(c),e.next=3,d.a.delete(t,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,c){return e.apply(this,arguments)}}()},{key:"getHttpHeaders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={"Content-type":"application/json"};return e=Object(r.a)(Object(r.a)({},t),e)}},{key:"formatParamData",value:function(e){return e}},{key:"getUrl",value:function(e){var t=b.find((function(t){return e.includes(t.ApiName)}));return this.getApiUrl(t,e)}},{key:"extendHeader",value:function(e,t){for(var c in t)t.hasOwnProperty(c)&&(e[c]=t[c]);return e}},{key:"getApiUrl",value:function(e,t){return e.ApiName.includes("enriched_text.entities.text:")?h.concat(t):"http://localhost:3001/api".concat(e.RelativeUrl)}},{key:"setCookie",value:function(e,t){var c=new Date,n=window.location.hostname,s=e+"=";c.setTime(c.getTime()+3e5);var r="expires="+c.toUTCString();document.cookie=s+t,document.cookie=r,document.cookie="domain="+n}},{key:"checkCookie",value:function(e){return void 0!==this.getCookie(e)}},{key:"getCookie",value:function(e){var t,c=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=Object(s.a)(n);try{for(r.s();!(t=r.n()).done;){for(var a=t.value;" "===a.charAt(0);)a=a.substring(1);0===a.indexOf(c)&&(this.cookie=a.substring(c.length,a.length))}}catch(i){r.e(i)}finally{r.f()}return document.cookie?this.cookie:null}},{key:"eraseCookie",value:function(){document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}]),e}()),O={loginService:function(e,t){return p.post(n.login,e,t)},signupService:function(e){return p.post(n.signup,e)},searchWatson:function(e){return p.get(n.watsonSeach+e)},updateUser:function(e){return p.post(n.updateUser,e)},deleteUser:function(e){return p.post(n.deleteUser,e)},sellerProducts:function(e){return p.post(n.sellerProducts,e)},newProduct:function(e){return p.post(n.newProduct,e)},allProduct:function(){return p.get(n.allProduct)},searchProducts:function(e){return p.post(n.searchProducts,e)},productInfo:function(e){return p.post(n.productInfo,e)}};t.a=O},37:function(e,t,c){"use strict";var n=c(6),s=c(7),r=c(14),a=c(13),i=c(1),o=c(0),l=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"loading-content",children:Object(o.jsx)("div",{className:"progress-indicator"})})}}]),c}(i.Component);t.a=l},38:function(e,t,c){},48:function(e,t,c){"use strict";t.a=function(e){if(!e)return e;for(var t="",c=new Uint8Array(e),n=c.byteLength,s=0;s<n;s++)t+=String.fromCharCode(c[s]);return"data:image/png;base64,"+window.btoa(t)}},64:function(e,t,c){},84:function(e,t,c){},91:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.df6fc4c4.chunk.js.map