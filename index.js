import{a as q,S as w,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const O="57443656-d111e2eba84c34bca61fb3c61";async function d(o,t=1){return await q.get("https://pixabay.com/api/",{params:{key:O,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})}const M=new w(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more");function f(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:v,downloads:S})=>`<div class="photo-container">
            <a href="${i}">
              <img src="${s}" alt="${e}" class="photo"/>
            </a>
            <ul class="description-list">
              <li class="description">
                <h2 class="title">Likes</h2>
                <p>${r}</p>
              </li>
              <li class="description">
                <h2 class="title">Views</h2>
                <p>${n}</p>
              </li>
              <li class="description">
                <h2 class="title">Comments</h2>
                <p>${v}</p>
              </li>
              <li class="description">
                <h2 class="title">Downloads</h2>
                <p>${S}</p>
              </li>
            </ul>
          </div>`).join("");u.insertAdjacentHTML("beforeend",t),M.refresh()}function $(){u.innerHTML=""}function m(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}const P=document.querySelector(".form"),H=document.querySelector(".load-more"),b=15;let l="",a=1;P.addEventListener("submit",x);H.addEventListener("click",B);function x(o){o.preventDefault(),a=1,l=o.target.elements["search-text"].value.trim(),l!==""&&($(),L(),m(),d(l,a).then(({data:{hits:t,totalHits:s}})=>{if(t.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!1});return}f(t),a*b<s?y():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",pauseOnHover:!1})}).catch(t=>{console.log(t.message),alert(t.message)}).finally(()=>{g(),o.target.reset()}))}function B(){a++,m(),L(),d(l,a).then(({data:{hits:o,totalHits:t}})=>{f(o),a*b<t?y():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",pauseOnHover:!1});let i=document.querySelector(".photo-container").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"})}).catch(o=>{console.log(o.message),alert(o.message)}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
