var a,t,r,e=document.querySelectorAll("li"),n=Array.from(e),o=function(a){return parseInt(a.replace(/[^\d]/g,""),10)};(a=Array.from(e)).sort(function(a,t){var r=o(a.dataset.salary);return o(t.dataset.salary)-r}),t=a[0].parentNode,a.forEach(function(a){return t.appendChild(a)}),r=[],n.forEach(function(a){var t={name:a.textContent.trim(),position:a.dataset.position,salary:o(a.dataset.salary),age:parseInt(a.dataset.age,10)};r.push(t)});//# sourceMappingURL=index.f8a15597.js.map

//# sourceMappingURL=index.f8a15597.js.map
