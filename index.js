import{a as O,S,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="57443656-d111e2eba84c34bca61fb3c61";async function d(r,t=1){const{data:s}=await O.get("https://pixabay.com/api/",{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return s}const H=new S(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more");function f(r){const t=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:n,comments:b,downloads:w})=>`<div class="photo-container">
            <a href="${i}">
              <img src="${s}" alt="${e}" class="photo"/>
            </a>
            <ul class="description-list">
              <li class="description">
                <h2 class="title">Likes</h2>
                <p>${o}</p>
              </li>
              <li class="description">
                <h2 class="title">Views</h2>
                <p>${n}</p>
              </li>
              <li class="description">
                <h2 class="title">Comments</h2>
                <p>${b}</p>
              </li>
              <li class="description">
                <h2 class="title">Downloads</h2>
                <p>${w}</p>
              </li>
            </ul>
          </div>`).join("");u.insertAdjacentHTML("beforeend",t),H.refresh()}function M(){u.innerHTML=""}function m(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}const $=document.querySelector(".form"),E=document.querySelector(".load-more"),v=15;let c="",a=1;$.addEventListener("submit",P);E.addEventListener("click",R);async function P(r){if(r.preventDefault(),a=1,c=r.target.elements["search-text"].value.trim(),c!==""){M(),L(),m();try{const{hits:t,totalHits:s}=await d(c,a);if(t.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!1});return}f(t),a*v<s?y():l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",pauseOnHover:!1})}catch(t){l.error({title:"Error",message:t.message,position:"topRight",pauseOnHover:!1})}finally{g(),r.target.reset()}}}async function R(){a++,m(),L();try{const{hits:r,totalHits:t}=await d(c,a);f(r),a*v<t?y():l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",pauseOnHover:!1});let i=document.querySelector(".photo-container").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"})}catch(r){l.error({title:"Error",message:r.message,position:"topRight",pauseOnHover:!1})}finally{g()}}
//# sourceMappingURL=index.js.map
