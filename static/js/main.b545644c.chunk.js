(this["webpackJsonpdam0un-live"]=this["webpackJsonpdam0un-live"]||[]).push([[0],{37:function(t,e,n){t.exports=n(65)},42:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(31),o=n.n(c),i=(n(42),n(1)),s=n(13),p=n.n(s),u=n(15),l=n(5),h=n(6),m=n(8),f=n(7),d=n(9),b=n(3),j=n(14),g=n.n(j);function O(){var t=Object(i.a)(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return O=function(){return t},t}var v={xl:1200,lg:900,md:700,sm:400},E=Object.keys(v).reduce((function(t,e){return t[e]=function(){return Object(b.b)(O(),v[e]/16,b.b.apply(void 0,arguments))},t}),{}),w=n(11),y=n(2);function k(){var t=Object(i.a)(["\n  position: absolute;\n  display: flex;\n  top: 0;\n  left: 102%;\n  color: red;\n  font-size: 0.7em;\n  animation: "," 2s infinite;\n"]);return k=function(){return t},t}function x(){var t=Object(i.a)(["\nfrom {\n  opacity: 1;\n}\n50% {\n  opacity: 0.6;\n}\nto {\n  opacity: 1;\n}\n"]);return x=function(){return t},t}var _=Object(b.d)(x()),z=b.c.div(k(),_),C=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return!this.props.stream[0]||r.a.createElement(z,this.props,r.a.createElement(y.a,{icon:w.c}),"LIVE")}}]),e}(a.Component);function I(){var t=Object(i.a)(["font-size: 1.5em"]);return I=function(){return t},t}function D(){var t=Object(i.a)(["font-size: 1.25em"]);return D=function(){return t},t}function F(){var t=Object(i.a)(["font-size: 1em;"]);return F=function(){return t},t}function N(){var t=Object(i.a)(["\n  position: relative;\n  margin-bottom: 20px;\n  margin-right: 2em;\n  font-size: calc(2vw + 1vh);\n  ",";\n  ",";\n  ",";\n"]);return N=function(){return t},t}var U=b.c.div(N(),E.md(F()),E.lg(D()),E.xl(I())),R=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement(U,Object.assign({},this.props,{className:"brand"}),this.props.data.custom_name?r.a.createElement("h1",null,this.props.data.custom_name):r.a.createElement("h1",null,this.props.data.twitch_channel),this.props.stream[0]?r.a.createElement(C,this.props):r.a.createElement("span",null))}}]),e}(a.Component),S=n(10);function M(){var t=Object(i.a)(["\n  font-size: 1.2em;\n  color: ",";\n  transition: all 0.5s ease;\n  &:hover {\n    color: ",";\n  }\n"]);return M=function(){return t},t}function T(){var t=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  justify-content: space-around;\n"]);return T=function(){return t},t}var A=b.c.div(T()),L=b.c.a(M(),(function(t){return t.data.font_color}),(function(t){return t.data.accent_color})),P=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(A,null,this.props.data.email&&r.a.createElement(L,Object.assign({},this.props,{href:"mailto:".concat(this.props.data.email)}),r.a.createElement(y.a,{icon:w.f})),this.props.data.merch_link&&r.a.createElement(L,Object.assign({},this.props,{href:this.props.data.merch_link}),r.a.createElement(y.a,{icon:w.j})),this.props.data.twitter&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.twitter.com/".concat(this.props.data.twitter)}),r.a.createElement(y.a,{icon:S.s})),this.props.data.youtube&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.youtube.com/user/".concat(this.props.data.youtube)}),r.a.createElement(y.a,{icon:S.t})),this.props.data.facebook&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.facebook.com/".concat(this.props.data.facebook)}),r.a.createElement(y.a,{icon:S.d})),this.props.data.discord&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.discord.gg/".concat(this.props.data.discord)}),r.a.createElement(y.a,{icon:S.c})),this.props.data.donation_link&&r.a.createElement(L,Object.assign({},this.props,{href:this.props.data.donation_link}),r.a.createElement(y.a,{icon:w.e})),this.props.data.instagram&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.instagram.com/".concat(this.props.data.instagram)}),r.a.createElement(y.a,{icon:S.h})),this.props.data.snapchat&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.snapchat.com/add/".concat(this.props.data.snapchat)}),r.a.createElement(y.a,{icon:S.l})),this.props.data.steam&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.steamcommunity.com/id/".concat(this.props.data.steam)}),r.a.createElement(y.a,{icon:S.o})),this.props.data.steamgroup&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.steamcommunity.com/group/".concat(this.props.data.steamgroup)}),r.a.createElement(y.a,{icon:S.p})),this.props.data.steamtrade&&r.a.createElement(L,Object.assign({},this.props,{href:"//steamcommunity.com/tradeoffer/new/?".concat(this.props.data.steamtrade)}),r.a.createElement(y.a,{icon:S.p})),this.props.data.reddit&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.reddit.com/r/".concat(this.props.data.reddit)}),r.a.createElement(y.a,{icon:S.k})),this.props.data.github&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.github.com/".concat(this.props.data.github)}),r.a.createElement(y.a,{icon:S.f})),this.props.data.google&&r.a.createElement(L,Object.assign({},this.props,{href:"//plus.google.com/".concat(this.props.data.google)}),r.a.createElement(y.a,{icon:S.g})),this.props.data.amazon&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.amazon.com/".concat(this.props.data.amazon)}),r.a.createElement(y.a,{icon:S.a})),this.props.data.pinterest&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.pinterest.com/".concat(this.props.data.pinterest)}),r.a.createElement(y.a,{icon:S.j})),this.props.data.bandcamp&&r.a.createElement(L,Object.assign({},this.props,{href:"//".concat(this.props.data.bandcamp,".bandcamp.com/")}),r.a.createElement(y.a,{icon:S.b})),this.props.data.soundcloud&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.soundcloud.com/".concat(this.props.data.soundcloud)}),r.a.createElement(y.a,{icon:S.m})),this.props.data.spotify&&r.a.createElement(L,Object.assign({},this.props,{href:"//open.spotify.com/user/".concat(this.props.data.spotify)}),r.a.createElement(y.a,{icon:S.n})),this.props.data.tumblr&&r.a.createElement(L,Object.assign({},this.props,{href:"//".concat(this.props.data.tumblr,".tumblr.com")}),r.a.createElement(y.a,{icon:S.q})),this.props.data.flickr&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.flickr.com/photos/".concat(this.props.data.flickr)}),r.a.createElement(y.a,{icon:S.e})),this.props.data.linkedin&&r.a.createElement(L,Object.assign({},this.props,{href:"//www.linkedin.com/in/".concat(this.props.data.linkedin)}),r.a.createElement(y.a,{icon:S.i})),this.props.data.extra_link1&&r.a.createElement(L,Object.assign({},this.props,{href:this.props.data.extra_link1}),r.a.createElement(y.a,{icon:w.i})),this.props.data.extra_link2&&r.a.createElement(L,Object.assign({},this.props,{href:this.props.data.extra_link2}),r.a.createElement(y.a,{icon:w.i})),this.props.data.extra_link3&&r.a.createElement(L,Object.assign({},this.props,{href:this.props.data.extra_link3}),r.a.createElement(y.a,{icon:w.i})))}}]),e}(a.Component);function B(){var t=Object(i.a)(["flex-direction: row;"]);return B=function(){return t},t}function J(){var t=Object(i.a)(["\n  padding-top: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  ","\n  }\n"]);return J=function(){return t},t}var V=b.c.div(J(),E.md(B())),W=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(V,{className:"container"},r.a.createElement(R,this.props),r.a.createElement(P,this.props))}}]),e}(a.Component);function q(){var t=Object(i.a)(["\n  margin: 1em;\n  width: calc(3vw + 150px);\n  border-radius: 12px;\n"]);return q=function(){return t},t}var Y=b.c.img(q()),G=function(t){return r.a.createElement(Y,{src:t.user.profile_image_url,alt:""})};function H(){var t=Object(i.a)(["\n  margin: 0 10px;\n  padding: 5px 8px;\n  border-radius: 3px;\n  background: ",";\n"]);return H=function(){return t},t}function K(){var t=Object(i.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);return K=function(){return t},t}var Q=b.c.ul(K()),X=b.c.li(H(),(function(t){return t.data.accent_color})),Z=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement(X,this.props,r.a.createElement(y.a,{icon:w.g,style:{marginRight:"5px"}}),this.props.user.view_count&&this.props.user.view_count.toLocaleString()),r.a.createElement(X,this.props,r.a.createElement(y.a,{icon:w.k,style:{marginRight:"5px"}}),this.props.follows.total&&this.props.follows.total.toLocaleString()))}}]),e}(a.Component);function $(){var t=Object(i.a)(["font-size: 2em"]);return $=function(){return t},t}function tt(){var t=Object(i.a)(["font-size: 1.75em"]);return tt=function(){return t},t}function et(){var t=Object(i.a)(["font-size: 1.5em;"]);return et=function(){return t},t}function nt(){var t=Object(i.a)(["\n  margin-top: 1em;\n  margin-bottom: 5px;\n  text-transform: capitalize;\n  font-size: calc(2vw + 2vh);\n  ",";\n  ",";\n  ",";\n"]);return nt=function(){return t},t}var at=b.c.h2(nt(),E.md(et()),E.lg(tt()),E.xl($())),rt=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return this.props.stream[0]?r.a.createElement(at,null,this.props.stream[0].title):r.a.createElement(at,null,this.props.data.offline_tagline)}}]),e}(a.Component);function ct(){var t=Object(i.a)(["\n  width: 200px;\n  height: 4px;\n  margin: 2em 0;\n  background: ",";\n  border: none;\n"]);return ct=function(){return t},t}var ot=b.c.hr(ct(),(function(t){return t.data.accent_color})),it=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return!this.props.stream[0]||r.a.createElement(ot,this.props)}}]),e}(a.Component);function st(){var t=Object(i.a)(["\n  display: flex;\n  text-transform: uppercase;\n  color: ",";\n"]);return st=function(){return t},t}var pt=b.c.p(st(),(function(t){return t.data.accent_color})),ut=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return this.props.stream.stream?r.a.createElement(pt,this.props,r.a.createElement(y.a,{icon:w.h,style:{color:"white",marginRight:"5px"}}),this.props.stream[0].game_id):r.a.createElement("span",null)}}]),e}(a.Component);function lt(){var t=Object(i.a)(["\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 3px;\n  color: ",";\n  border: 2px solid ",";\n  border-radius: 5px;\n  margin-top: 1em;\n  padding: 1em 2em;\n  transition: all 0.5s ease;\n  &:hover {\n    background: ",";\n  }\n"]);return lt=function(){return t},t}var ht=b.c.a(lt(),(function(t){return t.data.font_color}),(function(t){return t.data.accent_color}),(function(t){return t.data.accent_color})),mt=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement(ht,Object.assign({},this.props,{href:"//www.twitch.tv/".concat(this.props.data.twitch_channel)}),r.a.createElement(y.a,{icon:S.r,size:"lg",style:{marginRight:"10px"}})," Visit Channel")}}]),e}(a.Component);function ft(){var t=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return ft=function(){return t},t}var dt=b.c.div(ft()),bt=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement(dt,{className:"container centered"},r.a.createElement(G,this.props),r.a.createElement(Z,this.props),r.a.createElement(rt,this.props),r.a.createElement(it,this.props),r.a.createElement(ut,this.props),r.a.createElement(mt,this.props))}}]),e}(a.Component);function jt(){var t=Object(i.a)(["\n  padding: 1em 0;\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8em;\n  opacity: 0.4;\n"]);return jt=function(){return t},t}var gt=b.c.div(jt()),Ot=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=(new Date).getFullYear();return r.a.createElement(gt,{className:"container"},r.a.createElement("div",{className:"copyright"},r.a.createElement("p",null,r.a.createElement(y.a,{icon:w.d,size:"lg"})," ".concat(t," "),this.props.data.custom_name?this.props.data.custom_name:this.props.data.twitch_channel)),r.a.createElement("div",{className:"attrib"},r.a.createElement("p",null,r.a.createElement("a",{href:"//twitch.tv/bobdanoob",style:{textDecoration:"none",color:"white"}},r.a.createElement(y.a,{icon:w.a,size:"lg"})," Code by Bob /"," ",r.a.createElement(y.a,{icon:w.b,size:"lg"})))))}}]),e}(a.Component),vt=n(34),Et=n.n(vt);function wt(){var t=Object(i.a)(["\n    background-color: rgba(0, 0, 0, ",");\n    width: 100%;\n    height: 100%;\n   "]);return wt=function(){return t},t}function yt(){var t=Object(i.a)(['\n    display: flex;\n    background-image: url("','");\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n   ']);return yt=function(){return t},t}var kt=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this,e=b.c.div(yt(),this.props.data.background_image),n=b.c.div(wt(),this.props.data.overlay_opacity);return this.props.data.background_video?r.a.createElement(Et.a,{videoId:this.props.data.background_video,overlay:"rgba(0, 0, 0, ".concat(this.props.data.overlay_opacity,")"),nocookie:!0,onReady:function(e){return e.target.seekTo(t.props.data.background_start)}},this.props.children):r.a.createElement(e,null,r.a.createElement(n,null,this.props.children))}}]),e}(a.Component),xt="",_t=function(){return xt},zt=function(){var t=Object(u.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("./config.json");case 2:e=t.sent,xt=e.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function Ct(){var t=Object(i.a)(["\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 99;\n    width: 100%;\n  "]);return Ct=function(){return t},t}function It(){var t=Object(i.a)(['\n    @import url("','");\n    body {color: ',";}\n    h1,h2 {display: inline-block;font-family: ",";\n    font-weight: ","; padding: 0; margin: 0;}\n  "]);return It=function(){return t},t}var Dt=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(m.a)(this,Object(f.a)(e).call(this,t))).state={url:"https://api.twitch.tv/helix/",streamInfo:{},userInfo:{},userFollowsInfo:{}},n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(u.a)(p.a.mark((function t(){var e,n=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,zt();case 2:e=_t(),g.a.get("".concat(this.state.url,"streams?user_login=").concat(e.twitch_channel),{headers:{"Client-ID":e.api_key}}).then((function(t){return n.setState({streamInfo:t.data.data})})).catch((function(t){return console.log("Unable to fetch Twitch API ".concat(t))})),g.a.get("".concat(this.state.url,"users?login=").concat(e.twitch_channel),{headers:{"Client-ID":e.api_key}}).then((function(t){n.setState({userInfo:t.data.data[0]}),g.a.get("".concat(n.state.url,"users/follows?first=1&to_id=").concat(n.state.userInfo.id),{headers:{"Client-ID":e.api_key}}).then((function(t){return n.setState({userFollowsInfo:t.data})})).catch((function(t){return console.log("Unable to fetch Twitch API ".concat(t))}))})).catch((function(t){return console.log("Unable to fetch Twitch API ".concat(t))})),document.title="".concat(e.twitch_channel," - ").concat(e.site_title);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=_t(),e=Object(b.a)(It(),(function(t){return t.fontUrl}),(function(t){return t.fontColor}),(function(t){return t.fontFamily}),(function(t){return t.fontWeight})),n=b.c.div(Ct());return""===t?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(e,{fontUrl:t.font_url,fontColor:t.font_color,fontWeight:t.font_weight,fontFamily:t.brand_font}),r.a.createElement(kt,{data:t},r.a.createElement(n,null,r.a.createElement(W,{data:t,stream:this.state.streamInfo}),r.a.createElement(bt,{data:t,user:this.state.userInfo,follows:this.state.userFollowsInfo,stream:this.state.streamInfo}),r.a.createElement(Ot,{data:t}))))}}]),e}(a.Component);o.a.render(r.a.createElement(Dt,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b545644c.chunk.js.map