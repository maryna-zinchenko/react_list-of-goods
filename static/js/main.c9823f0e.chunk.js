(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(6),o=n.n(r),l=n(7),i=n(1),c=n(2),u=n(4),h=n(3),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("ul",null,this.props.goods.map((function(e){return s.a.createElement("li",{key:e},e)})))}}]),n}(s.a.PureComponent),p=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=[1,2,3,4,5,6,7,8,9,10],g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showList:!1,isReversed:!1,sortBy:"",value:"1"},e.handleChange=function(t){e.setState({value:t.target.value})},e.startButton=function(){e.setState({showList:!0})},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortAlph=function(){e.setState({sortBy:"alphabet"})},e.sortLength=function(){e.setState({sortBy:"length"})},e.reset=function(){e.setState({sortBy:"",isReversed:!1,value:"1"})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isReversed,n=e.sortBy,a=e.showList,r=e.value,o=[].concat(p);return r>1&&(o=Object(l.a)(p.filter((function(e){return e.length>=r})))),o.sort((function(e,t){switch(n){case"alphabet":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),t&&o.reverse(),s.a.createElement("div",{className:"App box has-text-centered"},s.a.createElement("h1",{className:"title is-1"},"Goods"),!a&&s.a.createElement("button",{type:"button",className:"button is-primary is-light m-2",onClick:this.startButton},"Start"),a&&s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{goods:o}),s.a.createElement("div",null,s.a.createElement("button",{type:"button",onClick:this.reverse,className:"button is-link is-light m-2"},"Reverse"),s.a.createElement("button",{type:"button",onClick:this.sortAlph,className:"button is-success is-light m-2"},"Sort alphabetically"),s.a.createElement("button",{type:"button",onClick:this.sortLength,className:"button is-warning is-light m-2"},"Sort by length"),s.a.createElement("button",{type:"button",onClick:this.reset,className:"button is-danger is-light m-2"},"Reset")),s.a.createElement("div",{className:"select is-rounded"},s.a.createElement("select",{value:this.state.value,onChange:this.handleChange},b.map((function(e){return s.a.createElement("option",{value:e,key:e},e)}))))))}}]),n}(s.a.PureComponent);o.a.render(s.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c9823f0e.chunk.js.map