refs={form:document.querySelector(".form"),input:document.querySelector("input"),btn:document.querySelector("button")},console.log(refs.form),console.log(refs.input),console.log(refs.btn),refs.form.addEventListener("submit",(function(e){e.preventDefault();let{delay:o,step:n,amount:t}=e.currentTarget;console.log(o.value),function(e,o){count=0,console.log(o),console.log(e),intervalId=setInterval((function(){count+=1,count==o&&clearInterval(intervalId),function(e,o){const n=Math.random()>.3;return new Promise(((t,l)=>{setInterval((()=>{n?t({position:e,delay:o}):l({position:e,delay:o})}),o)}))}(2,2500).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}),e)}(n.value,t.value)}));
//# sourceMappingURL=03-promises.dad026cf.js.map