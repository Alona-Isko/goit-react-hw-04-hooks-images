(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2bMjx",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3uipi"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__33VRv",Modal:"Modal_Modal__32Ost"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__36Ves"}},26:function(e,t,a){e.exports={Button:"Button_Button__3n54L"}},28:function(e,t,a){e.exports={Loader:"Loader_Loader__v-Wrk"}},29:function(e,t,a){e.exports={App:"App_App__3Kmsw"}},34:function(e,t,a){},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3G2Vc",SearchForm:"Searchbar_SearchForm__2dg_J",SearchFormButton:"Searchbar_SearchFormButton__1eyHB",SearchFormButton__label:"Searchbar_SearchFormButton__label__1oCn7",SearchForm__input:"Searchbar_SearchForm__input__aCk0S"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(34),a(16)),l=a(4),s=a(11),u=(a(35),a(6)),m=a.n(u),b=a(1);function j(e){var t=e.getSearchValue,a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],o=r[1];return Object(b.jsx)("header",{className:m.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):Object(s.b)("Your query is empty")},className:m.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(b.jsx)("span",{className:m.a.SearchFormButton__label,children:"Search"})}),Object(b.jsx)("input",{className:m.a.SearchForm__input,type:"text",value:c,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value.toLowerCase())}})]})})}var h=a(2),g=a.n(h),_=a(13),d=a.n(_);function f(e){var t=e.image,a=e.onImageClick;return Object(b.jsx)("li",{className:d.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:t.webformatURL,alt:t.tags,className:d.a.ImageGalleryItem__image,onClick:function(){return a(t.largeImageURL)}})})}f.propType={image:g.a.shape({webformatURL:g.a.string,largeImageURL:g.a.string,tags:g.a.string}),onImageClick:g.a.func};var p=a(25),O=a.n(p);function S(e){var t=e.data,a=e.onImageClick;return Object(b.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(b.jsx)(f,{image:e,onImageClick:a},e.id)}))})}var x=a(26),v=a.n(x),y=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:v.a.Button,onClick:t,children:"Load more"})},I=a(14),w=a.n(I);w.a.defaults.baseURL="https://pixabay.com/api";var C="23238437-0207b31bcaea78a79b03733f3",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return w.a.get("/?q=".concat(e,"&page=").concat(t,"&key=").concat(C,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return new Promise((function(t){return setTimeout((function(){return t(e)}),1e3)}))})).then((function(e){return e.data.hits}))},F=a(15),L=a.n(F),B=document.querySelector("#modal-root");function G(e){var t=e.onClose,a=e.largeImageURL;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(b.jsx)("div",{className:L.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(b.jsx)("div",{className:L.a.Modal,children:Object(b.jsx)("img",{src:a,alt:""})})}),B)}var N=a(27),R=a.n(N),E=(a(75),a(28)),M=a.n(E),U=function(){return Object(b.jsx)("div",{className:M.a.Loader,children:Object(b.jsx)(R.a,{type:"BallTriangle",color:"#00BFFF",height:80,width:80})})},T=a(29),V=a.n(T);function A(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(l.a)(c,2),u=o[0],m=o[1],h=Object(n.useState)([]),g=Object(l.a)(h,2),_=g[0],d=g[1],f=Object(n.useState)(!1),p=Object(l.a)(f,2),O=p[0],x=p[1],v=Object(n.useState)(""),I=Object(l.a)(v,2),w=I[0],C=I[1],F=Object(n.useState)(!1),L=Object(l.a)(F,2),B=L[0],N=L[1];Object(n.useEffect)((function(){""!==a&&k(a,u).then((function(e){d(e),m(u)}))}),[a,u]);var R=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(b.jsxs)("div",{className:V.a.App,children:[Object(b.jsx)(j,{getSearchValue:function(e){r(e),m(1),d([])}}),Object(b.jsx)(s.a,{autoClose:3e3}),Object(b.jsx)(S,{data:_,onImageClick:function(e){C(e),x(!0)}}),B&&Object(b.jsx)(U,{}),_.length>0&&_.length>=12&&Object(b.jsx)(y,{onClick:function(){N(!0),k(a,u).then((function(e){d([].concat(Object(i.a)(_),Object(i.a)(e))),m(u+1),R()})).finally(N(!1))}}),O&&Object(b.jsx)(G,{onClose:function(){x((function(e){return!e})),C("")},largeImageURL:w})]})}o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ea24d9bd.chunk.js.map