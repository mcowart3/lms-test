(this.webpackJsonplms=this.webpackJsonplms||[]).push([[0],{17:function(e,t,a){e.exports={AppDocuments:"DocumentList_AppDocuments__-0FEc",Pagination:"DocumentList_Pagination__2NTcp",PaginationItems:"DocumentList_PaginationItems__NYOgx",individualDocuments:"DocumentList_individualDocuments__jemz-",left:"DocumentList_left__elhe8"}},22:function(e,t,a){e.exports={width:"DocumentPage_width__3I-lh",left:"DocumentPage_left__1WG4A",padding:"DocumentPage_padding__1xjaD",tags:"DocumentPage_tags__3CNHx",tagForm:"DocumentPage_tagForm__1_vOr",tagButton:"DocumentPage_tagButton__3Zg_Q",commentButton:"DocumentPage_commentButton__Rqrnw","btn-outline-info":"DocumentPage_btn-outline-info__38Sze",Body:"DocumentPage_Body__2e2It",Text:"DocumentPage_Text__2ZL0V",titleContainer:"DocumentPage_titleContainer__3jB-S",textbckd:"DocumentPage_textbckd__26kXt",tagbckd:"DocumentPage_tagbckd__kmO7t",Title:"DocumentPage_Title__27EQ0",Author:"DocumentPage_Author__3WWoU"}},26:function(e,t,a){e.exports={inputBox:"Multiselect_inputBox__1_jSy",searchResult:"Multiselect_searchResult__3qOf3",listResult:"Multiselect_listResult__2tTBA",container:"Multiselect_container__16TUT",checkmark:"Multiselect_checkmark__1EC9Y",multiselect:"Multiselect_multiselect__1pBFN",chip:"Multiselect_chip__OQm6g",chipBody:"Multiselect_chipBody__1ptF5",chipText:"Multiselect_chipText__hC1cJ",chipClose:"Multiselect_chipClose__2FU7z"}},33:function(e,t,a){e.exports={navDropDown:"FilterDropdown_navDropDown__10jh-",menu:"FilterDropdown_menu__CfYmk",formControl:"FilterDropdown_formControl__1DzHX",multiSelect:"FilterDropdown_multiSelect__ids5I",submitButton:"FilterDropdown_submitButton__eteUt"}},40:function(e,t,a){e.exports={logo:"Header_logo__1gWLZ",subheader:"Header_subheader__cdIDp",headerbckgd:"Header_headerbckgd__2DeuG",about:"Header_about__378p3",a:"Header_a__1y1kv",donneHeader:"Header_donneHeader__TsVw2"}},47:function(e,t,a){e.exports={Title:"DocumentPreview_Title__3xeB_",a:"DocumentPreview_a__1YxLV",OrnamentTop:"DocumentPreview_OrnamentTop__2RrmT",OrnamentBottom:"DocumentPreview_OrnamentBottom__3pLVI",Zoom:"DocumentPreview_Zoom__3N9PV"}},62:function(e,t,a){e.exports={searchPadding:"SearchBar_searchPadding__3Fwu4",SearchButton:"SearchBar_SearchButton__Xwp_h",searchBar:"SearchBar_searchBar__1CzU8"}},63:function(e,t,a){e.exports={Comment:"CommentVisualizer_Comment__1vS7Q",commentAuthor:"CommentVisualizer_commentAuthor__811rF",commentText:"CommentVisualizer_commentText__3Ips4"}},64:function(e,t,a){e.exports={App:"App_App__2coWS",AppBody:"App_AppBody__2vs4J",AppLink:"App_AppLink__1xH74"}},67:function(e,t,a){e.exports={Sort:"SortDropdown_Sort__1eWD8",dropdownItem:"SortDropdown_dropdownItem__JU0XQ"}},75:function(e,t,a){e.exports={CommentSidebar:"CommentSidebar_CommentSidebar__L294H"}},78:function(e,t,a){e.exports=a(92)},83:function(e,t,a){},9:function(e,t,a){e.exports={textWrapper:"About_textWrapper__Ve3EU",divider:"About_divider__1XUuf",name:"About_name__3dW_g",stuName:"About_stuName__2h5LS",caption:"About_caption__3dquy",stuCaption:"About_stuCaption__r-Hhy",caption1:"About_caption1__3GwNh",headers:"About_headers__EBHYH",avatars:"About_avatars__3aqeE",inBetween:"About_inBetween__2FCFG",rowPadding:"About_rowPadding__5zGwX"}},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),s=a.n(o),i=(a(83),a(7)),c=a.n(i),l=a(14),u=a(6),m=a(8),h=a(11),d=a(10),p=a(65),f=a(71),g=a(46),v=a(68),y=a(67),w=a.n(y),b=function e(t,a){Object(u.a)(this,e),this.endpoint=t,this.description=a};b.TitleAZ=new b("title/ascending","Title (A - Z)"),b.TitleZA=new b("title/descending","Title (Z - A)"),b.AuthorAZ=new b("author/ascending","Author (A - Z)"),b.AuthorZA=new b("author/descending","Author (Z - A)"),b.CorrespondentAZ=new b("correspondent/ascending","Correspondent (A - Z)"),b.CorrespondentZA=new b("correspondent/descending","Correspondent (Z - A)"),b.DateNewestToOldest=new b("date/descending","Date (Newest - Oldest)"),b.DateOldestToNewest=new b("date/ascending","Date (Oldest - Newest)");var _=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).sorts=[b.TitleAZ,b.TitleZA,b.AuthorAZ,b.AuthorZA,b.CorrespondentAZ,b.CorrespondentZA,b.DateNewestToOldest,b.DateOldestToNewest],n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{title:"Sort",id:"basic-nav-dropdown",className:w.a.Sort},this.sorts.map((function(t){return r.a.createElement(v.a.Item,{onClick:function(){e.props.sort(t)},href:"#sort/"+t.endpoint,className:w.a.dropdownItem},t.description)})))}}]),a}(n.Component),E=a(29),k=a(25),D=a(31),N=a(60),I=a(57),C=a(45),O=a(30),x=a(51),P=a(26),j=a.n(P),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={checked:[],dropDownValue:[]},n.checkBox=n.checkBox.bind(Object(x.a)(n)),n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.setState({dropDownValue:this.props.options})}},{key:"removeChip",value:function(e){this.checkBox(e,!1)}},{key:"checkBox",value:function(e,t){var a=this,n=this.state.checked;if(t)n.push(e);else{var r=n.indexOf(e);n.splice(r,1)}this.setState({checked:n},(function(){a.props.onSelectOptions(a.state.checked)}))}},{key:"searchFun",value:function(e){if(0!==e.target.value.length){var t=e.target.value.toLowerCase(),a=this.props.options.filter((function(e){return e.name.indexOf(t)>-1}));this.setState({dropDownValue:a})}else this.setState({dropDownValue:this.props.options})}},{key:"returnChip",value:function(){var e=this;return this.state.checked?this.state.checked.map((function(t,a){return r.a.createElement("div",{className:j.a.chipBody,key:a},r.a.createElement("p",{className:j.a.chipText}," ",t),r.a.createElement("button",{className:j.a.chipClose,onClick:function(a){return e.removeChip(t)}},"\xd7"))})):[]}},{key:"returnList",value:function(){var e=this;return this.state.dropDownValue?this.state.dropDownValue.map((function(t,a){return r.a.createElement("label",{className:j.a.container,key:a},t.name,r.a.createElement("input",{type:"checkbox",value:t.value,onChange:function(t){return e.checkBox(t.target.value,t.target.checked)},checked:!!e.state.checked.includes(t.value)}),r.a.createElement("span",{className:j.a.checkmark}))})):null}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:j.a.multiselect},r.a.createElement("div",{className:j.a.chup},this.returnChip()),r.a.createElement("input",{type:"text",name:"Search",placeholder:this.props.placeholder,className:j.a.inputBox,onChange:function(t){return e.searchFun(t)}}),r.a.createElement("div",{className:j.a.searchResult},r.a.createElement("div",{className:j.a.listResult},this.returnList())))}}]),a}(n.Component),A=a(20),T=a(33),B=a.n(T),F=[{name:"Gherard",value:"Gherard"},{name:"White",value:"White"},{name:"Wotton",value:"Wotton"},{name:"Unknown",value:"Unknown"}],L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={query:""},n}return Object(m.a)(a,[{key:"result",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(D.a,{className:B.a.navDropDown},r.a.createElement(I.a,{id:"id",className:B.a.navDropDown},"Filter"),r.a.createElement(N.a,{className:B.a.menu},r.a.createElement(C.a,null,r.a.createElement(A.a,null,r.a.createElement(k.a,null,"Month",r.a.createElement(O.a,{className:B.a.formControl,placeholder:"mm",onChange:function(t){return e.setState({query:t.target.value})}})),r.a.createElement(k.a,null,"Day",r.a.createElement(O.a,{className:B.a.formControl,placeholder:"dd",onChange:function(t){return e.setState({query:t.target.value})}})),r.a.createElement(k.a,null,"Year",r.a.createElement(O.a,{className:B.a.formControl,placeholder:"yyyy",onChange:function(t){return e.setState({query:t.target.value})}}))),r.a.createElement(A.a,null,r.a.createElement(S,{placeholder:"Select correspondant(s)",options:F,onSelectOptions:this.result}))),r.a.createElement(E.a,{onChange:function(){e.props.filter(e.state.query)},href:"#filter/"+this.state.query,className:B.a.submitButton},"Apply"),r.a.createElement(E.a,{onChange:function(){return e.setState({query:null})},className:B.a.submitButton},"Clear")))}}]),a}(n.Component),q=a(62),M=a.n(q),W=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={query:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{inline:!0,className:M.a.searchPadding},r.a.createElement(O.a,{type:"query",placeholder:"Search by title, etc.",className:M.a.searchBar,onChange:function(t){return e.setState({query:t.target.value})}}),r.a.createElement(E.a,{variant:"outline-info",className:M.a.SearchButton,onClick:function(){e.props.search(e.state.query)},href:"#search/"+this.state.query},"Search"))}}]),a}(n.Component),H=a(40),Z=a.n(H),J=a(37),U=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{bg:"White",className:"flex-column",id:Z.a.headerbckgd},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(J.b,{to:"/"},r.a.createElement(g.a,{onClick:function(){e.props.loadDocuments()},src:"lms.png",className:Z.a.logo,alt:"BiblioFile logo"})),r.a.createElement(g.a,{src:"donne-header.jpg",alt:"John Donne",className:Z.a.donneHeader})),r.a.createElement("div",{className:Z.a.subheader},r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"}),r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(W,{search:this.props.search}),r.a.createElement(_,{sort:this.props.sort}),r.a.createElement(L,{filter:this.props.filter}),r.a.createElement("div",{className:Z.a.about},r.a.createElement(J.b,{to:"/about",className:Z.a.a},r.a.createElement("p",null,"About the Developers"))))))}}]),a}(n.Component),V=a(12),G=a(76),Y=a(77),z=a(22),R=a.n(z),X=a(75),Q=a.n(X),K=a(63),$=a.n(K),ee=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return console.log(this.props.comment),r.a.createElement("div",{className:$.a.Comment},r.a.createElement("p",{className:$.a.commentAuthor},this.props.comment.author),r.a.createElement("p",{className:$.a.commentText}," ",this.props.comment.body))}}]),a}(n.Component),te=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return console.log(this.props.comments),r.a.createElement("div",{className:Q.a.CommentSidebar},r.a.createElement("div",null,this.props.comments?this.props.comments.map((function(e){return r.a.createElement(ee,{comment:e})})):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",null))}}]),a}(n.Component),ae=function e(t,a,n,r,o,s){Object(u.a)(this,e),this.uniqueID=t,this.isWholeDocComment=a,this.startIdx=n,this.endIdx=r,this.author=o,this.body=s},ne=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"getComments",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[new ae(0,!1,10,15,"EstemedAcademic1","This part was my favorite!"),new ae(0,!1,22,23,"Researcher667","Gosh, I love the well executed enjambment here!"),new ae(0,!1,43,60,"LitLuvr","This is actually a missprint, it should read (unintelligable)"),new ae(0,!0,-1,-1,"Dr. Margarethe Schneider","Fun fact, the 1907 edition I had as a child was bound in sheep leather!"),new ae(0,!0,-1,-1,"FictionFan","A thrilling read")],e.abrupt("return",new Promise((function(e,t){return e(a)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),re=function e(t,a,n,r,o,s,i,c){Object(u.a)(this,e),this.uniqueID=t,this.title=a,this.text=n,this.author=r,this.image=o,this.metadata=s,this.tags=i,this.correspondent=c},oe=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"tagDocument",value:function(){var e=Object(l.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/tag/"+t.uniqueID.toString()+"/"+a,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e.next=4,e.sent.json();case 4:return e.sent,console.log(t),n=new re(t.uniqueID,t.author,t.text,t.title,void 0,void 0,t.tags),e.abrupt("return",new Promise((function(e,t){return e(n)})));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),se=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).commentService=void 0,n.tagService=void 0,n.state={comments:void 0,tag:"",currentTags:n.props.document.tags||[],commentsVisible:!1},n.commentService=new ne,n.tagService=new oe,n.getComments(n.props.document),n}return Object(m.a)(a,[{key:"getComments",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.commentService.getComments(t);case 2:a=e.sent,this.setState({comments:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addTag",value:function(){var e=Object(l.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.currentTags.concat(a),this.setState({currentTags:n}),e.next=4,this.tagService.tagDocument(t,a);case 4:return r=e.sent,this.forceUpdate(),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"formatTags",value:function(e){var t="";if(void 0!==e){for(var a=0;a<e.length-1;a++)t=(t=t.concat(e[a])).concat(", ");t=t.concat(e[e.length-1])}return t}},{key:"render",value:function(){var e=this;return r.a.createElement(G.a,{fluid:!0,className:R.a.Body},r.a.createElement(Y.a,null,r.a.createElement(A.a,null,r.a.createElement(k.a,{sm:8,className:R.a.textbckd},r.a.createElement("div",{className:R.a.titleContainer},r.a.createElement("h1",{className:R.a.Title},this.props.document.title||"Unknown"," "),r.a.createElement(E.a,{variant:"outline-info",onClick:function(){e.setState({commentsVisible:!e.state.commentsVisible})},className:R.a.commentButton},this.state.commentsVisible?"Hide Comments":"Show Comments")),r.a.createElement("h1",{className:R.a.Author},this.props.document.author||"Unknown"," "),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",{className:R.a.Text}," ",this.props.document.text||"Unknown"," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(A.a,{className:R.a.padding},r.a.createElement(k.a,{sm:4},r.a.createElement("p",{className:R.a.tags}," Current tags: ",this.formatTags(this.state.currentTags))),r.a.createElement(k.a,null,r.a.createElement(C.a,{className:R.a.left},r.a.createElement(A.a,null,r.a.createElement("div",null,r.a.createElement(O.a,{type:"tag",className:R.a.tagForm,placeholder:"Tag this document!",onChange:function(t){return e.setState({tag:t.target.value})}})),r.a.createElement("div",null,r.a.createElement(E.a,{variant:"outline-info",onClick:function(){e.addTag(e.props.document,e.state.tag)},href:"#tag/"+this.state.tag,className:R.a.tagButton},"Add Tag"))))))),r.a.createElement(k.a,{sm:4},this.state.commentsVisible?r.a.createElement(te,{comments:this.state.comments}):r.a.createElement(r.a.Fragment,null)))))}}]),a}(n.Component),ie=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"getDocuments",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/documents",{mode:"no-cors"});case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,console.log(t),t=t.map((function(e){return new re(e._id,e.author,e.text,e.title,void 0,void 0,e.tags)})),e.abrupt("return",new Promise((function(e,a){return e(t)})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"sortDocuments",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/sort/"+t.endpoint,{mode:"no-cors"});case 2:return e.next=4,e.sent.json();case 4:return a=e.sent,console.log(a),a=a.map((function(e){return new re(e._id,e.author,e.text,e.title,void 0,void 0,e.tags)})),e.abrupt("return",new Promise((function(e,t){return e(a)})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchDocuments",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/search/"+t,{mode:"no-cors",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e.next=4,e.sent.json();case 4:return a=e.sent,console.log(a),a=a.map((function(e){return new re(e._id,e.author,e.text,e.title,void 0,void 0,e.tags)})),e.abrupt("return",new Promise((function(e,t){return e(a)})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ce=function e(t,a){Object(u.a)(this,e),this.date=t,this.otherMetadata=a},le=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"sortDocuments",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getDocuments());case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchDocuments",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getDocuments());case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDocuments",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[new re(1,"To my Honoured friend M. George Gherard, over against Salisbury house.","SIR,\nI Do not make account that I am come to London, when I get within the wall: that which makes it London is the meeting of friends. I cannot therefore otherwise bid my self welcome to London, then by seeking of you, which both Sir H. Goodere and I do, with so much diligence, as that this messenger comes two dayes before to intreat you from us both, to reserve your self upon Saterday: so that I may, at our coming to London that night, understand at my house where I may send you word of our supping place that night, and have the honour of your company. So you lay more obligations upon\nYour poor unprofitable servant J. Donne.","John Donne","gherard3.png",new ce),new re(2,"Unknown","Though my friendship be good for nothing else, it may give you the profit of a tentation, or of an affliction: It may excuse your patience; and though it cannot allure, it shall importune you. Though I know you have many worthy friends of all rankes, yet I adde something, since I which am of none, would fain be your friend too. There is some of the honour and some of the degrees of a Creation, to make a friendship of nothing. Yet, not to annihilate my self utterly (for though it seem humblenesse, yet it is a work of as much almightinesse, to bring a thing to nothing, as from nothing) though I be not of the best stuffe for friendship, which men of warm and durable fortunes only are, I cannot say, that I am not of the best fashion, if truth and honesty be that; which I must ever exercise, towards you, because I learned it of you: for the conversation with worthy men, and of good example, (though it sow not vertue in us, yet produceth and ripeneth it. Your mans haste, and mine to Micham cuts off this Letter heve, yet, as in littell paterns torn from a whole piece, this may tell you what all I am. Though by taking me before my day (which I accoun\u2223ted Tuesday) I make short payment of this duty of Letters, yet I have a little comfort in this, that you see me hereby, willing to pay those debts which I can, before my time.\nYour affectionate friend J. Donne.\nFirst Saturday in March. 1607.\nYou forget to send me the Apology; and many times, I think it an injury to remember one of a promise, lest it confesse a distrust. But of the book, by occasion of reading the Deans answer to it, I have sometimes some want.","John Donne","unknown4.png",new ce),new re(3,"To the worthiest Lady Mrs. Bridget White.","MADAME,\nI Could make some guesse whether souls that go to heaven, retain any memory of us that stay behinde, if I knew whether you ever thought of us, since you enjoyed your heaven, which is your self, at home. Your going away hath made London a dead carkasse. A Tearm, and a Court do a little spice and embalme it, and keep it from putrefaction, but the soul went away in you: and I think the onely reason why the plague is somewhat slackned, is, because the place is dead already, and no body left worth the killing. Wheresoever you are, there is London enough: and it is a diminishing of you to say so, since you are more then the rest of the world. When you have a desire to work a miracle, you will return hither, and raise the place from the dead, and the dead that are in it; of which I am one, but that a hope that I have a room in your favour keeps me alive; which you shall abundantly confirme to me, if by one letter you tell me, that you have received my six; for now my letters are grown to that bulk, that I may divide them like Amadis the Gaules book, and tell you, that this is the first letter of the second part of the first book.\nYour humblest, and affectionate servant J. D.\nStrand S. Peters day at nine.","John Donne","default.png",new ce),new re(4,"To the worthiest Lady Mrs. B. W.","MADAME,\nI Think the letters which I send to you single lose themselves by the way for want of a guide, or faint for want of company. Now, that on your part there be no excuse, after three single letters, I send three together, that every one of them may have two witnesses of their delivery. They come also to waite upon another letter from Sr E. Herbert, of whose recovery from a Fever, you may apprehend a perfecter contentment then we, because you had none of the former sorrow. I am an Heretique if it be sound Doctrine, that pleasure tasts best after sorrow. For my part, I can love health well enough, though I be never sick; and I never needed my Mistris frowns and disfavours, to make her favours acceptable to me. In States, it is a weakness to stand upon a defensive war, and safer not to be invaded, then to have overcome: so in our souls health, an innocence is better then the heartiest repentance. And in the pleasures of this life, it is better that the public stat iciety o new Document (the pleasures give us the taste and appetite to it, then a sowre and sad interruption quicken our stomack; for then we live by Physick. I wish therefore all your happinesses such as this intire, and without flaw, or spot of discontentment; and such is the love and service of\nYour humblest and affectionatest servant J. D.\nStrand S. Peters day at 4.","John Donne","white2.png",new ce),new re(5,"To Sir Henry Wotton","SIR, more than kisses, letters mingle souls,\nFor thus, friends absent speak. This ease controls\nThe tediousness of my life ; but for these\nI could ideate nothing which could please ;\nBut I should wither in one day, and pass\nTo a bottle of hay, that am a lock of grass.\nLife is a voyage, and in our lives' ways\nCountries, courts, towns are rocks, or remoras ;\nThey break or stop all ships, yet our state's such,\nThat though than pitch they stain worse, we must touch.\nIf in the furnace of the raging line,\nOr under th' adverse icy pole thou pine,\nThou know'st two temperate regions, girded in,\nDwell there ; but O, what refuge canst thou win\nParch'd in the court, and in the country frozen ?\nShall cities built of both extremes be chosen ?\nCan dung or garlic be perfume ? Or can\nA scorpion or torpedo cure a man ?\nCities are worst of all three ; of all three ?\nO knotty riddle !  ; each is worst equally.\nCities are sepulchres ; they who dwell there\nAre carcases, as if no such there were.\nAnd courts are theatres, where some men play\nPrinces, some slaves, all to one end, of one clay.\nThe country is a desert, where the good,\nGain'd, inhabits not, born, is not understood.\nThere men become beasts, and prone to more evils ;\nIn cities blocks, and in a lewd court devils.\nAs in the first chaos, confusedly,\nEach element's qualities were in th' other three,\nSo pride, lust, covetise, being several\nTo these three places, yet all are in all,\nAnd mingled thus, their issue is incestuous.\nFalsehood is denizen'd ; virtue is barbarous.\nLet no man say there, \u201c Virtue's flinty wall\nShall lock vice in me, I'll do none, but know all.\u201d\nMen are sponges, which, to pour out, receive ;\nWho know false play, rather than lose, deceive.\nFor in best understandings sin began,\nAngels sinn'd first, then devils, and then man.\nOnly perchance beasts sin not ; wretched we\nAre beasts in all but white integrity.\nI think if men, which in these place live,\nDurst look in themselves, and themselves retrieve,\nThey would like strangers greet themselves, seeing then\nUtopian youth grown old Italian.\n\tBe then thine own home, and in thyself dwell ;\nInn anywhere ; continuance maketh hell.\nAnd seeing the snail, which everywhere doth roam,\nCarrying his own house still, still is at home ;\nFollow\u2014for he is easy paced\u2014this snail,\nBe thine own palace, or the world's thy gaol.\nAnd in the world's sea do not like cork sleep\nUpon the water's face ; nor in the deep\nSink like a lead without a line ; but as\nFishes glide, leaving no print where they pass,\nNor making sound ; so closely thy course go,\nLet men dispute, whether thou breathe or no.\nOnly in this be no Galenist\u2014to make\nCourts' hot ambitions wholesome, do not take\nA dram of country's dullness ; do not add\nCorrectives, but, as chemics, purge the bad.\nBut, sir, I advise not you, I rather do\nSay o'er those lessons, which I learn'd of you ;\nWhom, free from Germany's schisms, and lightness\nOf France, and fair Italy's faithlessness,\nHaving from these suck'd all they had of worth,\nAnd brought home that faith which you carried forth,\nI thoroughly love ; but if myself I've won\nTo know my rules, I have, and you have DONNE.","John Donne","default.png",new ce),new re(6),new re(7),new re(8),new re(9),new re(10),new re(11),new re(12),new re(13),new re(14),new re(15),new re(16),new re(17),new re(18)],e.abrupt("return",new Promise((function(e,a){return e(t)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),ue=a(64),me=a.n(ue),he=a(15),de=a(9),pe=a.n(de),fe=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",{className:pe.a.headers},r.a.createElement("b",null,"The Project Lead")),r.a.createElement(A.a,{className:pe.a.rowPadding},r.a.createElement(he.a,{className:pe.a.avatars},r.a.createElement(he.a.Image,{src:"jonathan.png",alt:"Jonathan"}))),r.a.createElement("p",null,r.a.createElement("b",{className:pe.a.name},"Jonathan Shelley (Ph.D., UC Berkeley)")),r.a.createElement("div",{className:pe.a.textWrapper},r.a.createElement("p",{className:pe.a.caption},"Jonathan Shelley (Ph.D., UC Berkeley) is a Marion L. Brittain Postdoctoral Fellow at Georgia Tech. His research focuses on theories and depictions of friendship in early modern prose, poetry, and drama.")),r.a.createElement("hr",{className:pe.a.divider}),r.a.createElement("hr",{className:pe.a.divider}),r.a.createElement("h1",{className:pe.a.headers},r.a.createElement("b",null,"The Developers")),r.a.createElement("div",{className:pe.a.textWrapper},r.a.createElement("p",{className:pe.a.caption}," Hi! We're five Georgia Tech students. We are Junior Design developers building an interactive repository of John Donne's letters for our client, Dr. Jonathan Shelley.")),r.a.createElement(A.a,{className:pe.a.rowPadding},r.a.createElement(he.a,{className:pe.a.avatars},r.a.createElement(he.a.Image,{src:"alice.png",alt:"Alice"}),r.a.createElement(he.a.Caption,{className:pe.a.stuCaption},r.a.createElement("b",{className:pe.a.stuName},"Alice"),r.a.createElement("p",null,"I'm a fullstack developer. In my free time, I enjoy figure skating, marine life, and making games."))),r.a.createElement("div",{className:pe.a.inBetween}),r.a.createElement(he.a,{className:pe.a.avatars},r.a.createElement(he.a.Image,{src:"john.png",alt:"john"}),r.a.createElement(he.a.Caption,{className:pe.a.stuCaption},r.a.createElement("b",{className:pe.a.stuName},"John"),r.a.createElement("p",null,"I'm a backend developer. In my free time, I enjoy reading, puzzle games, and going to coffee shops."))),r.a.createElement("div",{className:pe.a.inBetween}),r.a.createElement(he.a,{className:pe.a.avatars},r.a.createElement(he.a.Image,{src:"kyle.png",alt:"Kyle"}),r.a.createElement(he.a.Caption,{className:pe.a.stuCaption},r.a.createElement("b",{className:pe.a.stuName},"Kyle"),r.a.createElement("p",null,"I'm a backend developer. In my free time, I enjoy reading, running, and cooking.")))),r.a.createElement(A.a,{className:pe.a.rowPadding},r.a.createElement(he.a,{className:pe.a.avatars},r.a.createElement(he.a.Image,{src:"marie.png",alt:"Marie"}),r.a.createElement(he.a.Caption,{className:pe.a.stuCaption},r.a.createElement("b",{className:pe.a.stuName},"Marie"),r.a.createElement("p",null,"I'm a fullstack developer. In my free time, I enjoy knitting, making pixel art, and cooking."))),r.a.createElement("div",{className:pe.a.inBetween}),r.a.createElement(he.a,{className:pe.a.avatars},r.a.createElement(he.a.Image,{src:"sarah.png",alt:"Sarah"}),r.a.createElement(he.a.Caption,{className:pe.a.stuCaption},r.a.createElement("b",{className:pe.a.stuName},"Sarah"),r.a.createElement("p",null,"I'm a frontend developer. In my free time, I enjoy reading, photography, and playing with my hamster Pancake.")))))}}]),a}(n.Component),ge=a(17),ve=a.n(ge),ye=a(47),we=a.n(ye),be=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:we.a.Zoom},r.a.createElement("div",null,r.a.createElement("img",{className:we.a.OrnamentTop,src:"ornament.png",alt:""}),r.a.createElement("p",{className:we.a.Title}," ",this.props.document.title||"Unknown"),r.a.createElement("p",{className:we.a.a}," ",this.props.document.author||"Unknown"),r.a.createElement("img",{className:we.a.OrnamentBottom,src:"ornament.png",alt:""})))}}]),a}(n.Component),_e=a(27),Ee=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).maxDocumentsPerPage=6,n.totalPages=0,n.state={currentPage:0},n.totalPages=Math.ceil(n.props.documents.length/n.maxDocumentsPerPage),n}return Object(m.a)(a,[{key:"setCurrentPage",value:function(e){e<0||e>this.totalPages-1?this.setState({currentPage:this.state.currentPage}):this.setState({currentPage:e})}},{key:"render",value:function(){var e=this,t=this.props.documents.slice(this.maxDocumentsPerPage*this.state.currentPage,this.maxDocumentsPerPage*(this.state.currentPage+1)),a=t.slice(0,this.maxDocumentsPerPage/2),n=t.slice(this.maxDocumentsPerPage/2,this.maxDocumentsPerPage);return console.log(t),r.a.createElement("div",null,r.a.createElement("div",{className:ve.a.AppDocuments},r.a.createElement(A.a,{className:ve.a.individualDocuments},a.map((function(e){return r.a.createElement(J.b,{to:"/"+e.uniqueID.toString(),key:e.uniqueID},r.a.createElement("div",{className:ve.a.left},r.a.createElement(be,{document:e})))}))),r.a.createElement(A.a,{className:ve.a.individualDocuments},n.map((function(e){return r.a.createElement(J.b,{to:"/"+e.uniqueID.toString(),key:e.uniqueID},r.a.createElement("div",{className:ve.a.left},r.a.createElement(be,{document:e})))})))),r.a.createElement("div",{className:ve.a.Pagination},r.a.createElement(_e.a,{className:ve.a.Pagination},r.a.createElement(_e.a.First,{className:ve.a.PaginationItems,onClick:function(){e.setCurrentPage(0)}}),r.a.createElement(_e.a.Prev,{className:ve.a.PaginationItems,onClick:function(){e.setCurrentPage(e.state.currentPage-1)}}),r.a.createElement(_e.a.Ellipsis,{className:ve.a.PaginationItems}),this.state.currentPage>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a.Item,{className:ve.a.PaginationItems,onClick:function(){e.setCurrentPage(e.state.currentPage-1)}},this.state.currentPage)):r.a.createElement(r.a.Fragment,null),r.a.createElement(_e.a.Item,{className:ve.a.PaginationItems,active:!0},this.state.currentPage+1),this.state.currentPage<this.totalPages-1?r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a.Item,{className:ve.a.PaginationItems,onClick:function(){e.setCurrentPage(e.state.currentPage+1)}},this.state.currentPage+2)):r.a.createElement(r.a.Fragment,null),r.a.createElement(_e.a.Ellipsis,{className:ve.a.PaginationItems}),r.a.createElement(_e.a.Next,{className:ve.a.PaginationItems,onClick:function(){e.setCurrentPage(e.state.currentPage+1)}}),r.a.createElement(_e.a.Last,{className:ve.a.PaginationItems,onClick:function(){e.setCurrentPage(e.totalPages-1)}}))))}}]),a}(n.Component),ke=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).documentService=void 0,n.state={},n.documentService=new ie,n.documentService=new le,n.loadDocuments(),n}return Object(m.a)(a,[{key:"sort",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.documentService.sortDocuments(t);case 2:a=e.sent,this.setState({documents:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.documentService.searchDocuments(t);case 2:a=e.sent,this.setState({documents:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"filter",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.documentService.searchDocuments(t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadDocuments",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.documentService.getDocuments();case 2:t=e.sent,this.setState({documents:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.documents;return r.a.createElement(J.a,null,t&&t.map((function(t){return r.a.createElement(V.a,{exact:!0,path:"/"+t.uniqueID.toString(),key:t.uniqueID,render:function(){return r.a.createElement("div",null,r.a.createElement(U,{sort:e.sort.bind(e),search:e.search.bind(e),filter:e.filter.bind(e),loadDocuments:e.loadDocuments.bind(e)}),r.a.createElement("div",{className:me.a.App},r.a.createElement(se,{document:t})))}})})),r.a.createElement(V.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(U,{sort:e.sort.bind(e),search:e.search.bind(e),filter:e.filter.bind(e),loadDocuments:e.loadDocuments.bind(e)}),r.a.createElement("div",{className:me.a.App},e.state.documents&&r.a.createElement(Ee,{documents:e.state.documents}),r.a.createElement("br",null)))}}),r.a.createElement(V.a,{exact:!0,path:"/about",render:function(){return r.a.createElement("div",null,r.a.createElement(U,{sort:e.sort.bind(e),search:e.search.bind(e),filter:e.filter.bind(e),loadDocuments:e.loadDocuments.bind(e)}),r.a.createElement("div",{className:me.a.App},r.a.createElement(fe,null)))}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.b433f8bb.chunk.js.map