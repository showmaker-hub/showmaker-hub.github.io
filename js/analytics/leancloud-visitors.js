function u(){function l(e){return e=encodeURI(e),document.getElementById(e).querySelector(".leancloud-visitors-count")}let{app_id:c,app_key:i,server_url:e}=CONFIG.leancloudVisitors;function t(n){var r=(e,t,o)=>fetch(n+"/1.1"+t,{method:e,headers:{"X-LC-Id":c,"X-LC-Key":i,"Content-Type":"application/json"},body:JSON.stringify(o)});if(CONFIG.page.isPost){var s=r;let e=document.querySelector(".leancloud_visitors"),t=decodeURI(e.id),o=e.dataset.flagTitle;s("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:t}))).then(e=>e.json()).then(({results:e})=>{0<e.length?(e=e[0],l(t).innerText=e.time+1,s("put","/classes/Counter/"+e.objectId,{time:{__op:"Increment",amount:1}}).catch(e=>{console.error("Failed to save visitor count",e)})):s("post","/classes/Counter",{title:o,url:t,time:1}).then(e=>e.json()).then(()=>{l(t).innerText=1}).catch(e=>{console.error("Failed to create",e)})}).catch(e=>{console.error("LeanCloud Counter Error",e)})}else if(1<=document.querySelectorAll(".post-title-link").length){let n=[...document.querySelectorAll(".leancloud_visitors")].map(e=>decodeURI(e.id));r("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:{$in:n}}))).then(e=>e.json()).then(({results:e})=>{for(let t of n){var o=e.find(e=>e.url===t);l(t).innerText=o?o.time:0}}).catch(e=>{console.error("LeanCloud Counter Error",e)})}}var o="-MdYXbMMI"===c.slice(-9)?`https://${c.slice(0,8).toLowerCase()}.api.lncldglobal.com`:e;o?t(o):fetch("https://app-router.leancloud.cn/2/route?appId="+c).then(e=>e.json()).then(({api_server:e})=>{t("https://"+e)})}document.addEventListener("DOMContentLoaded",u),document.addEventListener("pjax:success",u);