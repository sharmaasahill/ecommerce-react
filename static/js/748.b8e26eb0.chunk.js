"use strict";(self.webpackChunkPahnawa=self.webpackChunkPahnawa||[]).push([[748],{2630:function(n,t,e){e.d(t,{Z:function(){return r}});var i=e(9439),a=e(2791),s=e.p+"static/media/beep.6600864a65bf2d52b177.mp3",d=e(184),r=function(n){var t=n.color,e=n.message,r=(0,a.useState)(!0),o=(0,i.Z)(r,2),c=o[0],l=o[1];return(0,a.useEffect)((function(){setTimeout((function(){l(!1)}),5e3)}),[]),c?(0,d.jsxs)("div",{className:"toast ".concat(t," show"),children:[(0,d.jsx)("audio",{src:s,controls:!0,autoPlay:!0,style:{display:"none"}}),(0,d.jsxs)("div",{className:"toast-content",children:[(0,d.jsx)("div",{className:"toast-message",children:e}),(0,d.jsx)("div",{className:"progress",children:(0,d.jsx)("div",{className:"progress-value"})})]})]}):null}},118:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var i,a,s,d,r,o,c,l,x,m,h=e(9439),p=e(168),u=e(2683),f=u.ZP.div(i||(i=(0,p.Z)(["\n  width: 55%;\n  min-height: 50vh;\n  display: flex;\n  flex-direction: column;\n  margin: 40px auto 40px auto;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n\n  @media (max-width: 768px) {\n    width: 85%;\n    margin: 20px auto 0;\n\n    button {\n      margin: 70px auto 50px auto;\n      width: 70%;\n    }\n  }\n"]))),w=u.ZP.div(a||(a=(0,p.Z)(["\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  font-weight: bolder;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n"]))),g=u.ZP.div(s||(s=(0,p.Z)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n\n  @media (max-width: 768px) {\n    width: 20%;\n    /* Adjust the width for smaller screens */\n    font-size: 13px;\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]))),j=u.ZP.div(d||(d=(0,p.Z)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n\n  @media (max-width: 768px) {\n    font-size: 20px;\n  }\n"]))),v=u.ZP.div(r||(r=(0,p.Z)(["\n  width: 100%;\n  display: flex;\n  min-height: 80px;\n  border-bottom: 1px solid darkgrey;\n  padding: 5px 0;\n  font-size: 18px;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    min-height: 60px;\n    font-size: 15px;\n  }\n"]))),Z=u.ZP.div(o||(o=(0,p.Z)(["\n  width: 12%;\n  padding-right: 60px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n  @media (max-width: 768px) {\n    width: 18%;\n    padding-right: 15px;\n  }\n"]))),b=u.ZP.span(c||(c=(0,p.Z)(["\n  width: 20%;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),y=u.ZP.span(l||(l=(0,p.Z)(["\n  display: flex;\n  width: 20%;\n  .arrow {\n    cursor: pointer;\n    font-weight: bolder;\n  }\n\n  .value {\n    margin: 0 10px;\n  }\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),P=u.ZP.span(x||(x=(0,p.Z)(["\n  width: 20%;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),C=u.ZP.span(m||(m=(0,p.Z)(["\n  width: 6.5%;\n  cursor: pointer;\n  font-weight: bolder;\n  @media (max-width: 768px) {\n    width: 7%;\n  }\n"]))),N=e(2791),k=e(5012),z=e(184),I=function(n){var t=n.cartItem,e=(0,N.useContext)(k.A),i=e.addItemToCart,a=e.deleteItemFromCart,s=e.removeItemFromCart,d=t.name,r=t.imageUrl,o=t.price,c=t.quantity;return(0,z.jsxs)(v,{children:[(0,z.jsx)(Z,{children:(0,z.jsx)("img",{src:r,alt:"".concat(d)})}),(0,z.jsx)(b,{className:"name",children:d}),(0,z.jsxs)(y,{className:"quantity",children:[(0,z.jsx)("div",{className:"arrow",onClick:function(){s(t)},children:"<"}),(0,z.jsx)("span",{className:"value",children:c}),(0,z.jsx)("div",{className:"arrow",onClick:function(){i(t)},children:">"})]}),(0,z.jsxs)(P,{className:"price",children:["\u20b9",o]}),(0,z.jsx)(C,{className:"remove-button",onClick:function(){a(t)},children:"\u2715"})]})},T=e(7689),A=e(9859),q=e(2630),E=function(){var n=(0,N.useContext)(k.A),t=n.cartItems,e=n.cartTotal,i=(0,T.s0)(),a=(0,N.useState)(!1),s=(0,h.Z)(a,2),d=s[0],r=s[1];return(0,z.jsxs)(f,{children:[(0,z.jsxs)(w,{children:[(0,z.jsx)(g,{children:"Product"}),(0,z.jsx)(g,{children:"Description"}),(0,z.jsx)(g,{children:"Quantity"}),(0,z.jsx)(g,{children:"Price"}),(0,z.jsx)(g,{children:"Remove"})]}),t.map((function(n){return(0,z.jsx)(I,{cartItem:n},n.id)})),(0,z.jsxs)(j,{children:["TOTAL: \u20b9",e]}),(0,z.jsx)(A.Z,{onClick:function(){if(0===e)return r(!0),void setTimeout((function(){r(!1)}),5e3);i("/payment")},children:"CheckOut"}),d&&(0,z.jsx)(q.Z,{color:"red",message:"Cart is Empty! Please add items to cart."})]})}}}]);
//# sourceMappingURL=748.b8e26eb0.chunk.js.map