const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;let r=null;let l=e.setAttribute("disabled",!1);function a(){storColor=o.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`,localSet=localStorage.setItem("storColor",JSON.stringify(storColor))}t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),r=setInterval(a,1e3)})),e.addEventListener("click",(function(){l=e.setAttribute("disabled",!0),t.removeAttribute("disabled"),clearInterval(r)}));const n=localStorage.getItem("storColor"),s=JSON.parse(n);o.style.background=s;
//# sourceMappingURL=01-color-switcher.d97096b7.js.map
