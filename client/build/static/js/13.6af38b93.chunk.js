(this["webpackJsonpgreen-production"]=this["webpackJsonpgreen-production"]||[]).push([[13],{121:function(e,a,t){"use strict";t.r(a);var s=t(10),l=t.n(s),c=t(15),n=t(6),r=t(7),i=t(9),o=t(8),d=t(1),j=t.n(d),m=t(111),u=t(106),b=t(118),x=t(101),h=t(18),O=t(0),p=function(e){Object(i.a)(s,e);var a=Object(o.a)(s);function s(e){var t;return Object(n.a)(this,s),(t=a.call(this,e)).editProfile=function(){t.setState((function(e){return{isEdit:!e.isEdit}}))},t.state={pageLoading:!0,userData:null,isEdit:!1,userRoles:""},t}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=Object(c.a)(l.a.mark((function e(){var a,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.context.isAuthenticated||this.props.history.push("/login"),e.next=4,t.e(15).then(t.t.bind(null,117,3));case 4:c=e.sent,this.setState({userData:c.default}),this.setState({userRoles:this.getRoles(c.default.Roles)}),console.log(this.state.userData),"edit"===(null===(a=this.props.history)||void 0===a||null===(s=a.location)||void 0===s?void 0:s.param)&&this.setState({isEdit:!0});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRoles",value:function(e){var a="";return e&&Array.isArray(e)&&(a=e.map((function(e){return e.Name})).join(", ")),a}},{key:"updateUserData",value:function(){return!0}},{key:"render",value:function(){var e,a,t,s,l,c,n,r,i,o,d,h,p=this.context.userDetails;return Object(O.jsxs)("div",{className:"container bootstrap snippet",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-sm-10",children:Object(O.jsx)("h1",{children:null===(e=this.state.userData)||void 0===e?void 0:e.FullName})}),Object(O.jsx)("div",{className:"col-sm-2",children:this.state.isEdit?Object(O.jsxs)(j.a.Fragment,{children:[Object(O.jsx)(x.a,{variant:"success",type:"submit",onClick:this.updateUserData,children:"Update"}),Object(O.jsx)(x.a,{variant:"danger",type:"button",onClick:this.editProfile,children:"Cancel"})]}):Object(O.jsx)(j.a.Fragment,{children:Object(O.jsx)(x.a,{variant:"primary",type:"submit",onClick:this.editProfile,children:"Edit Profile"})})})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-sm-3",children:[Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)("img",{src:"http://ssl.gstatic.com/accounts/ui/avatar_2x.png",className:"avatar img-circle img-thumbnail",alt:"avatar"}),Object(O.jsx)("h6",{children:"Upload a different photo..."}),Object(O.jsx)("input",{type:"file",className:"text-center center-block file-upload"})]}),Object(O.jsxs)("div",{className:"panel panel-default",children:[Object(O.jsxs)("div",{className:"panel-heading",children:["Website ",Object(O.jsx)("i",{className:"fa fa-link fa-1x"})]}),Object(O.jsx)("div",{className:"panel-body",children:Object(O.jsx)("a",{href:"javascript:void(0)",children:"facebook.com"})})]}),Object(O.jsxs)("ul",{className:"list-group",children:[Object(O.jsxs)("li",{className:"list-group-item text-muted",children:["Activity ",Object(O.jsx)("i",{className:"fa fa-dashboard fa-1x"})]}),Object(O.jsxs)("li",{className:"list-group-item text-right",children:[Object(O.jsx)("span",{className:"pull-left",children:Object(O.jsx)("strong",{children:"Shares"})})," 125"]}),Object(O.jsxs)("li",{className:"list-group-item text-right",children:[Object(O.jsx)("span",{className:"pull-left",children:Object(O.jsx)("strong",{children:"Likes"})})," 13"]}),Object(O.jsxs)("li",{className:"list-group-item text-right",children:[Object(O.jsx)("span",{className:"pull-left",children:Object(O.jsx)("strong",{children:"Posts"})})," 37"]}),Object(O.jsxs)("li",{className:"list-group-item text-right",children:[Object(O.jsx)("span",{className:"pull-left",children:Object(O.jsx)("strong",{children:"Followers"})})," 78"]})]}),Object(O.jsxs)("div",{className:"panel panel-default",children:[Object(O.jsx)("div",{className:"panel-heading",children:"Social Media"}),Object(O.jsxs)("div",{className:"panel-body",children:[Object(O.jsx)("i",{className:"fa fa-facebook fa-2x"})," ",Object(O.jsx)("i",{className:"fa fa-github fa-2x"})," ",Object(O.jsx)("i",{className:"fa fa-twitter fa-2x"})," ",Object(O.jsx)("i",{className:"fa fa-pinterest fa-2x"})," ",Object(O.jsx)("i",{className:"fa fa-google-plus fa-2x"})]})]})]}),Object(O.jsxs)("div",{className:"col-sm-9",children:[Object(O.jsx)(b.a,{onSubmit:this.handleSubmit,children:this.state.isEdit?Object(O.jsxs)(j.a.Fragment,{children:[Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formFullName",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Full Name"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,defaultValue:null===(t=this.state.userData)||void 0===t?void 0:t.FullName})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formFullName",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Email"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,defaultValue:null===(s=this.state.userData)||void 0===s?void 0:s.Email})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"gender",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Gender"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===(l=this.state.userData)||void 0===l?void 0:l.Gender})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"fomDob",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"DOB"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===(c=this.state.userData)||void 0===c?void 0:c.Dob})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formstreetaddress1",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Street Address 1"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,defaultValue:null===(n=this.state.userData)||void 0===n?void 0:n.StreetAddress1})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formstreetaddress2",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Street Address 2"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,defaultValue:null===(r=this.state.userData)||void 0===r?void 0:r.StreetAddress2})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formCity",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"City"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,defaultValue:null===(i=this.state.userData)||void 0===i?void 0:i.City})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formState",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"State"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,defaultValue:null===(o=this.state.userData)||void 0===o?void 0:o.State})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formZip",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Zip"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,defaultValue:null===(d=this.state.userData)||void 0===d?void 0:d.Zip})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formRole",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Role"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:this.state.userRoles})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Username"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===(h=this.state.userData)||void 0===h?void 0:h.Username})})]})]}):Object(O.jsxs)(j.a.Fragment,{children:[Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formFullName",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Full Name"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.full_name})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formFullName",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Email"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.email})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"gender",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Gender"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.gender})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"fomDob",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"DOB"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.dob})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formstreetaddress1",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Street Address 1"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.StreetAddress1})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formstreetaddress2",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Street Address 2"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.StreetAddress2})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formCity",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"City"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.city})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formState",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"State"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.state})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formZip",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Zip"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===p||void 0===p?void 0:p.zip})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formRole",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Role"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:this.state.userRoles})})]}),Object(O.jsxs)(b.a.Group,{as:m.a,className:"mb-3",controlId:"formPlaintextEmail",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"2",children:"Username"}),Object(O.jsx)(u.a,{sm:"10",children:Object(O.jsx)(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:null===(a=this.state.userData)||void 0===a?void 0:a.Username})})]})]})}),Object(O.jsx)(b.a,{onSubmit:this.handleSubmit})]})]})]})}}]),s}(d.Component);p.contextType=h.a,a.default=p}}]);
//# sourceMappingURL=13.6af38b93.chunk.js.map