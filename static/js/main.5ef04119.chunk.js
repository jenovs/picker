(this.webpackJsonppicker=this.webpackJsonppicker||[]).push([[0],{13:function(n,e,t){n.exports=t(21)},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(6),o=t.n(a),c=(t(18),t(2)),l=t(1),u=t(10),d=t(11);function f(){var n=Object(c.a)(["\n  align-items: center;\n  background-color: ",";\n  border: 1px solid ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: 1.5rem;\n  height: 40px;\n  justify-content: flex-start;\n  margin-bottom: 8px;\n  padding-left: 4px;\n  user-select: none;\n  width: 150px;\n\n  &::before {\n    content: '","';\n    align-items: center;\n    border: 1px solid ",";\n    border-radius: 4px;\n    color: red;\n    display: flex;\n    font-size: 16px;\n    height: 16px;\n    justify-content: center;\n    margin-right: 8px;\n    width: 16px;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(c.a)(["\n  display: none;\n"]);return p=function(){return n},n}var s=l.a.input.attrs({type:"checkbox"})(p()),x=l.a.label(f(),(function(n){return n.isSelected?"#ffffff":"#e5e5e5"}),"#a3a3a3","#104371",(function(n){return n.isSelected?"X":""}),"#a3a3a3","#dcdcdc"),m=function(n){var e=n.isSelected,t=n.label,r=n.onSelect;return i.a.createElement(x,{title:t,isSelected:e},i.a.createElement(s,{checked:e,onChange:function(){return r(t)}}),t)};function h(){var n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin: 0;\n  margin-bottom: 1rem;\n  min-height: 54px;\n  padding: 0;\n  width: 100%;\n\n  @media (max-width: 500px) {\n    max-width: calc(144px * 2 + 16px);\n    margin: auto;\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(c.a)(["\n  align-items: center;\n  background-color: ",";\n  color: ",";\n  cursor: default;\n  display: flex;\n  font-size: 1.2rem;\n  height: 40px;\n  justify-content: center;\n  margin-bottom: 14px;\n  margin-right: 16px;\n  padding-left: 4px;\n  position: relative;\n  user-select: none;\n  width: 144px;\n\n  &:nth-child(3n) {\n    margin-right: 0;\n  }\n\n  @media (max-width: 500px) {\n    margin-right: 0;\n    width: calc(100% / 2 - 16px);\n\n    &:nth-child(2n + 1) {\n      margin-right: 16px;\n    }\n  }\n"]);return g=function(){return n},n}function b(){var n=Object(c.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 50%;\n  color: ",";\n  cursor: pointer;\n  font-weight: bold;\n  height: 24px;\n  padding: 0;\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  width: 24px;\n  transition: all 0.15s;\n\n  &:hover {\n    background-color: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"]);return b=function(){return n},n}var v=l.a.button(b(),"#333","#fff","#fff","#fff","#333","#333"),y=l.a.li(g(),"#e5e5e5","#000"),E=l.a.ul(h()),j=function(n){var e=n.items,t=n.onDelete;return i.a.createElement(E,null,e.map((function(n){return i.a.createElement(y,{key:n,title:n},i.a.createElement("p",null,n),i.a.createElement(v,{onClick:function(){return t(n)},title:"Delete"},"X"))})))};function w(){var n=Object(c.a)(["\n  border: 1px solid ",";\n  border-radius: 6px;\n  box-shadow: 1px 1px 4px ",";\n  display: flex;\n  flex-direction: column;\n  max-width: calc(150px * 3 + 16px * 2 + 8px * 2 + 2px);\n  padding: 24px 16px;\n"]);return w=function(){return n},n}function k(){var n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  min-height: 48px;\n"]);return k=function(){return n},n}l.a.di;var S=l.a.div(k()),O=l.a.div(w(),"#a3a3a3","#a3a3a3"),C=function(n){var e=n.initiallySelected,t=void 0===e?[]:e,a=n.list,o=n.onChange,c=void 0===o?function(){}:o,l=Object(r.useState)(t),f=Object(d.a)(l,2),p=f[0],s=f[1];Object(r.useEffect)((function(){c(p)}),[c,p]);var x=function(n){p.includes(n)?s(p.filter((function(e){return e!==n}))):s([].concat(Object(u.a)(p),[n]))};return i.a.createElement(O,null,i.a.createElement(S,null,i.a.createElement(j,{items:p,onDelete:x})),i.a.createElement(S,null,a.map((function(n){return i.a.createElement(m,{key:n,label:n,onSelect:x,isSelected:p.includes(n)})}))))},D=["EUR","PLN","GEL","DKK","CZK","GBP","SEK","USD","RUB"];function K(){var n=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n"]);return K=function(){return n},n}var z=l.a.div(K()),B=function(){return i.a.createElement(z,null,i.a.createElement(C,{list:D,onChange:function(n){console.log(n)},initiallySelected:["SEK"]}))};o.a.render(i.a.createElement(B,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5ef04119.chunk.js.map