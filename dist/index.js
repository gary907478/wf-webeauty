"use strict";(()=>{var s=n=>{console.log(`Version: ${n}!`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{window.addEventListener("scroll",function(){let e=document.getElementById("navbar-main-wrap"),o=window.pageYOffset||document.documentElement.scrollTop,r=document.querySelectorAll(".nav-dropdown-wrap");o>0?(e.style.height="80px",r.forEach(t=>{t.style.top="115px"})):(e.style.height="130px",r.forEach(t=>{t.style.top="165px"}))});let n=document.querySelectorAll(".services-card");for(let e of n){let o=e.querySelector(".service-video-bg video");e.addEventListener("mouseover",function(){o.play()},!1),e.addEventListener("mouseout",function(){o.pause()},!1)}let c=document.querySelectorAll(".other-services-card");for(let e of c){let o=e.querySelector(".service-video-bg video");e.addEventListener("mouseover",function(){o.play()},!1),e.addEventListener("mouseout",function(){o.pause()},!1)}s("v0.0.1")});})();