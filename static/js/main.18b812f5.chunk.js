(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"Texas",image:"/texas.jpg",clicks:0},{id:2,name:"auburn",image:"/auburn.jpg",clicks:0},{id:3,name:"florida",image:"/florida.jpg",clicks:0},{id:4,name:"kansas",image:"/kansas.jpg",clicks:0},{id:5,name:"lsu",image:"/lsu.jpg",clicks:0},{id:6,name:"miami",image:"/miami.jpeg",clicks:0},{id:7,name:"michigan-state",image:"/michigan-state.jpg",clicks:0},{id:8,name:"ohio-state",image:"/ohio-state.jpg",clicks:0},{id:9,name:"oklahoma-state",image:"/oklahoma-state.jpg",clicks:0},{id:10,name:"oregon",image:"/oregon.jpg",clicks:0},{id:11,name:"syracuse",image:"/syracuse.jpeg",clicks:0},{id:12,name:"wisconsin",image:"/wisconsin.jpg",clicks:0}]},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(3),i=t.n(n),s=t(4),o=t(5),l=t(7),m=t(6),u=t(8),d={heading:{backgroundColor:"orange",backgroundImage:"linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.7)), url(./header-background.jpg)",backgroundRepeat:"repeat",backgroundSize:"cover"},title:{color:"black"},subTitle:{fontSize:"30px",color:"black"}};var g=function(){return r.a.createElement("header",{className:"header",style:d.heading},r.a.createElement("h1",{style:d.title},"React Memory Game"),r.a.createElement("h2",{style:d.subTitle},"March Madness isn't over yet. Can you remember the last team you chose? "))};var h=function(e){return console.log(e),r.a.createElement("div",{className:e.shake?"container shake":"container"},e.children)};var k=function(e){return r.a.createElement("li",null," Score: ",e.score," | Top Score: ",e.highScore," ")};var f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom"},r.a.createElement("img",{alt:"react",src:"assets/favicon.ico"})))};var p=function(e){return r.a.createElement("img",{alt:e.card.name,"aria-label":"click item",className:"click-item","data-id":e.card.id,src:e.card.image,onClick:function(){return e.addClick(e.card.id)}})},b=t(1),v=(t(15),function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={cards:b,score:0,highScore:0,gameOver:!1,gameStarted:!1},t.runGame=function(){t.setState({gameOver:!1})},t.resetGame=function(e){t.state.cards.forEach(function(e){e.clicks=0}),t.setState({score:0}),t.setState({gameOver:!0})},t.setHighScore=function(){t.state.score>=t.state.highScore&&t.setState({highScore:t.state.score})},t.addClick=function(e){t.setState({gameStarted:!0}),t.state.cards.find(function(a,c){if(a.id===e){if(0===b[c].clicks)return t.runGame(),b[c].clicks=b[c].clicks+1,t.setState({score:t.state.score+1},function(){this.setHighScore()}),t.shuffleArray(),!0;t.resetGame()}})},t.shuffleArray=function(){t.state.cards.sort(function(){return.5-Math.random()})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"React Memory Game")),this.state.gameStarted?r.a.createElement("li",{className:this.state.gameOver?"shake incorrect":"correct"},this.state.gameOver?"You guessed incorrectly":"You guessed correctly"):r.a.createElement("li",{className:""}," Click image to begin !"),r.a.createElement(k,{score:this.state.score,highScore:this.state.highScore,increment:this.handleIncrement}))),r.a.createElement(g,null),r.a.createElement(h,{shake:this.state.gameOver},this.state.cards.map(function(a){return r.a.createElement(p,{card:a,addClick:e.addClick,resetGame:e.resetGame})})),r.a.createElement(f,null))}}]),a}(r.a.Component));i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.18b812f5.chunk.js.map