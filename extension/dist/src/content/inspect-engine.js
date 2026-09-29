function y(){return window.__qas_visbug_state||(window.__qas_visbug_state={activeTool:"none",selectedElement:null,hoveredElement:null,firstGuideElement:null,undoStack:[],cleanupFns:[]}),window.__qas_visbug_state}const $="qas-aspect-ratio-root";function _(n){let e=document.getElementById($);if(!n.enabled||n.preset==="free")return e&&e.remove(),{availW:window.innerWidth,availH:window.innerHeight,framedW:window.innerWidth,framedH:window.innerHeight,offsetX:0,offsetY:0};const l=n.baseWidth||window.innerWidth,p=n.baseHeight||window.innerHeight,t={"16:9":16/9,"16:10":16/10,"4:3":4/3,"9:16":9/16,"1:1":1,"21:9":21/9},r=n.ratio||t[n.preset]||16/9;let a,c;l/p>r?(c=p,a=c*r):(a=l,c=a/r),a>l&&(a=l,c=a/r),c>p&&(c=p,a=c*r);const o=Math.round(a),i=Math.round(c),d=Math.max(0,Math.round((l-o)/2)),u=Math.max(0,Math.round((p-i)/2));e||(e=document.createElement("div"),e.id=$,e.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483640;
      user-select: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    `,document.documentElement.appendChild(e)),e.replaceChildren();const f=T=>{const k=document.createElement("div");k.style.cssText=T,e==null||e.appendChild(k)};f(`position:absolute;top:0;left:0;right:0;height:${u}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`),f(`position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`),f(`position:absolute;top:${u}px;bottom:${u}px;left:0;width:${d}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`),f(`position:absolute;top:${u}px;bottom:${u}px;right:0;width:${d}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`);const h=document.createElement("div");h.style.cssText=`position:absolute;top:${u}px;left:${d}px;width:${o}px;height:${i}px;box-sizing:border-box;border:2px dashed #6366f1;box-shadow:0 0 0 1px rgba(255,255,255,0.4),0 8px 30px rgba(0,0,0,0.5);border-radius:4px;`;const x=document.createElement("div");x.style.cssText="position:absolute;top:-30px;left:0;background:#1e1b4b;color:#c7d2fe;border:1px solid #4f46e5;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;display:flex;align-items:center;gap:6px;box-shadow:0 2px 6px rgba(0,0,0,0.4);";const v=document.createElement("span");v.textContent=`Aspect Ratio: ${n.preset.toUpperCase()}`;const b=document.createElement("span");b.style.cssText="color:#e0e7ff;font-family:monospace;",b.textContent=`${o} × ${i}px`;const g=document.createElement("span");return g.style.cssText="background:#4338ca;color:#fff;padding:1px 4px;border-radius:2px;font-size:10px;",g.textContent=`${Math.round(Math.max(.3,Math.min(2,n.scale||1))*100)}%`,x.append(v,b,g),h.appendChild(x),e.appendChild(h),{availW:l,availH:p,framedW:o,framedH:i,offsetX:d,offsetY:u}}const w="qas-visbug-overlay-root";function L(){let n=document.getElementById(w);return n||(n=document.createElement("div"),n.id=w,n.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483645;
      user-select: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `,document.documentElement.appendChild(n)),n}function S(n){const e=y();e.cleanupFns.forEach(t=>{try{t()}catch{}}),e.cleanupFns=[],e.activeTool==="text"&&e.selectedElement&&(e.selectedElement.contentEditable="false",e.selectedElement.style.outline="");const l=document.getElementById(w);if(l&&l.replaceChildren(),e.activeTool=n,n==="none"){e.selectedElement=null,e.hoveredElement=null,e.firstGuideElement=null;return}const p=L();if(n==="inspect"){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 2px solid #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      border-radius: 2px;
      display: none;
      transition: all 0.05s ease-out;
    `;const r=document.createElement("div");r.style.cssText=`
      position: absolute;
      bottom: calc(100% + 4px);
      left: 0;
      background: #0f172a;
      color: #38bdf8;
      border: 1px solid #38bdf8;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      font-family: monospace;
      white-space: nowrap;
    `,t.appendChild(r),p.appendChild(t);const a=s=>{const o=m(s.target);if(!o||o===e.selectedElement){t.style.display="none";return}e.hoveredElement=o;const i=o.getBoundingClientRect();t.style.display="block",t.style.top=`${i.top}px`,t.style.left=`${i.left}px`,t.style.width=`${i.width}px`,t.style.height=`${i.height}px`;const d=o.className&&typeof o.className=="string"?`.${o.className.trim().split(/\s+/).slice(0,2).join(".")}`:"";r.textContent=`<${o.tagName.toLowerCase()}${d}> • ${Math.round(i.width)}×${Math.round(i.height)}`},c=s=>{s.preventDefault(),s.stopPropagation();const o=m(s.target);if(!o)return;e.selectedElement=o;const i=M(e.selectedElement);chrome.runtime.sendMessage({type:"INSPECT_ELEMENT_SELECTED",details:i}).catch(()=>{})};window.addEventListener("pointermove",a,!0),window.addEventListener("click",c,!0),e.cleanupFns.push(()=>{window.removeEventListener("pointermove",a,!0),window.removeEventListener("click",c,!0),t.remove()})}else if(n==="guides"){const t=document.createElement("div");t.id="qas-guides-canvas",p.appendChild(t);const r=(s,o)=>{const i=s.getBoundingClientRect(),d=o.getBoundingClientRect();t.replaceChildren();const u=document.createElement("div");u.style.cssText=`position:absolute;top:${i.top}px;left:${i.left}px;width:${i.width}px;height:${i.height}px;border:2px solid #ec4899;background:rgba(236,72,153,0.1);pointer-events:none;`;const f=document.createElement("div");f.style.cssText=`position:absolute;top:${d.top}px;left:${d.left}px;width:${d.width}px;height:${d.height}px;border:2px solid #3b82f6;background:rgba(59,130,246,0.1);pointer-events:none;`,t.append(u,f);const h=Math.round(d.top>=i.bottom?d.top-i.bottom:i.top>=d.bottom?i.top-d.bottom:0),x=Math.round(d.left>=i.right?d.left-i.right:i.left>=d.right?i.left-d.right:0),v=Math.min(i.left,d.left)+Math.abs(i.left-d.left)/2,b=Math.min(i.top,d.top)+Math.abs(i.top-d.top)/2,g=document.createElement("div");g.style.cssText=`
        position: absolute;
        top: ${b}px;
        left: ${v}px;
        background: #0f172a;
        color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-family: monospace;
        font-weight: 700;
        border: 1px solid #ec4899;
        pointer-events: none;
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      `,g.textContent=`↔ ${x}px  |  ↕ ${h}px`,t.appendChild(g)},a=s=>{s.preventDefault(),s.stopPropagation();const o=m(s.target);o&&(e.firstGuideElement?r(e.firstGuideElement,o):e.firstGuideElement=o)},c=s=>{if(!e.firstGuideElement)return;const o=m(s.target);o&&o!==e.firstGuideElement&&r(e.firstGuideElement,o)};window.addEventListener("click",a,!0),window.addEventListener("pointermove",c,!0),e.cleanupFns.push(()=>{window.removeEventListener("click",a,!0),window.removeEventListener("pointermove",c,!0),t.remove()})}else if(n==="text"){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 1.5px dashed #10b981;
      background: rgba(16, 185, 129, 0.08);
      display: none;
    `,p.appendChild(t);const r=c=>{const s=m(c.target);if(!s||s===e.selectedElement){t.style.display="none";return}const o=s.getBoundingClientRect();t.style.display="block",t.style.top=`${o.top}px`,t.style.left=`${o.left}px`,t.style.width=`${o.width}px`,t.style.height=`${o.height}px`},a=c=>{const s=m(c.target);if(!s)return;e.selectedElement&&e.selectedElement!==s&&(e.selectedElement.contentEditable="false",e.selectedElement.style.outline=""),e.selectedElement=s;const o=e.selectedElement.innerText;e.undoStack.push({element:e.selectedElement,action:"text",prevValue:o}),e.selectedElement.contentEditable="true",e.selectedElement.style.outline="2px solid #10b981",e.selectedElement.focus()};window.addEventListener("pointermove",r,!0),window.addEventListener("click",a,!0),e.cleanupFns.push(()=>{window.removeEventListener("pointermove",r,!0),window.removeEventListener("click",a,!0),t.remove()})}else if(n==="margin"||n==="padding"){const t=n==="margin"?"#f59e0b":"#10b981",r=document.createElement("div");r.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 2px solid ${t};
      background: ${n==="margin"?"rgba(245, 158, 11, 0.15)":"rgba(16, 185, 129, 0.15)"};
      display: none;
    `,p.appendChild(r);const a=s=>{s.preventDefault(),s.stopPropagation();const o=m(s.target);if(!o)return;e.selectedElement=o;const i=e.selectedElement.getBoundingClientRect();r.style.display="block",r.style.top=`${i.top}px`,r.style.left=`${i.left}px`,r.style.width=`${i.width}px`,r.style.height=`${i.height}px`;const d=M(e.selectedElement);chrome.runtime.sendMessage({type:"INSPECT_ELEMENT_SELECTED",details:d}).catch(()=>{})},c=s=>{if(!e.selectedElement)return;const o=s.shiftKey?10:1;let i=!0;if(s.key==="ArrowUp"?E(e.selectedElement,n,"top",-o):s.key==="ArrowDown"?E(e.selectedElement,n,"bottom",o):s.key==="ArrowLeft"?E(e.selectedElement,n,"left",-o):s.key==="ArrowRight"?E(e.selectedElement,n,"right",o):i=!1,i){s.preventDefault();const d=e.selectedElement.getBoundingClientRect();r.style.top=`${d.top}px`,r.style.left=`${d.left}px`,r.style.width=`${d.width}px`,r.style.height=`${d.height}px`}};window.addEventListener("click",a,!0),window.addEventListener("keydown",c,!0),e.cleanupFns.push(()=>{window.removeEventListener("click",a,!0),window.removeEventListener("keydown",c,!0),r.remove()})}else if(n==="delete"){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 2px dashed #ef4444;
      background: rgba(239, 68, 68, 0.15);
      display: none;
    `;const r=document.createElement("div");r.style.cssText=`
      position: absolute;
      bottom: calc(100% + 4px);
      left: 0;
      background: #ef4444;
      color: #fff;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
    `,r.textContent="🗑️ Click to Remove",t.appendChild(r),p.appendChild(t);const a=s=>{const o=m(s.target);if(!o){t.style.display="none";return}const i=o.getBoundingClientRect();t.style.display="block",t.style.top=`${i.top}px`,t.style.left=`${i.left}px`,t.style.width=`${i.width}px`,t.style.height=`${i.height}px`},c=s=>{s.preventDefault(),s.stopPropagation();const o=m(s.target);if(!o)return;const i=o.parentElement,d=o.nextSibling;e.undoStack.push({element:o,action:"delete",prevValue:{parent:i,nextSibling:d}}),o.remove(),t.style.display="none"};window.addEventListener("pointermove",a,!0),window.addEventListener("click",c,!0),e.cleanupFns.push(()=>{window.removeEventListener("pointermove",a,!0),window.removeEventListener("click",c,!0),t.remove()})}else if(n==="a11y"){const t=document.createElement("div");t.id="qas-a11y-issues",p.appendChild(t);let r=0;document.querySelectorAll("img").forEach(a=>{a.getAttribute("alt")||(r++,C(a,"Missing alt text",t))}),document.querySelectorAll("button, a").forEach(a=>{var s;((s=a.textContent)==null?void 0:s.trim())||a.getAttribute("aria-label")||a.getAttribute("title")||(r++,C(a,"Empty accessible label",t))}),document.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(a=>{const c=a.id,s=c&&document.querySelector(`label[for="${c}"]`),o=a.closest("label"),i=a.getAttribute("aria-label")||a.getAttribute("aria-labelledby");!s&&!o&&!i&&(r++,C(a,"Missing form label",t))}),chrome.runtime.sendMessage({type:"A11Y_ISSUES_FOUND",count:r}).catch(()=>{}),e.cleanupFns.push(()=>{t.remove()})}}function m(n){return!n||n.id===$||n.id===w||n.closest(`#${$}, #${w}`)||n===document.documentElement||n===document.body?null:n}function M(n){const e=n.getBoundingClientRect(),l=window.getComputedStyle(n);return{tagName:n.tagName.toLowerCase(),id:n.id||void 0,className:typeof n.className=="string"&&n.className.trim()?n.className.trim():void 0,rect:{width:Math.round(e.width),height:Math.round(e.height),top:Math.round(e.top),left:Math.round(e.left)},styles:{fontFamily:l.fontFamily.split(",")[0].replace(/['"]/g,""),fontSize:l.fontSize,fontWeight:l.fontWeight,lineHeight:l.lineHeight,color:l.color,backgroundColor:l.backgroundColor,borderColor:l.borderColor,margin:l.margin,padding:l.padding,display:l.display,boxSizing:l.boxSizing,contrastRatio:B(l.color,l.backgroundColor)}}}function E(n,e,l,p){const t=`${e}${l.charAt(0).toUpperCase()+l.slice(1)}`,r=parseInt(window.getComputedStyle(n)[t],10)||0,a=Math.max(0,r+p);n.style[t]=`${a}px`}function C(n,e,l){const p=n.getBoundingClientRect();if(p.width===0&&p.height===0)return;const t=document.createElement("div");t.style.cssText=`
    position: absolute;
    top: ${p.top}px;
    left: ${p.left}px;
    background: #ef4444;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 5px;
    border-radius: 4px;
    pointer-events: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    z-index: 2147483646;
  `,t.textContent=`⚠️ ${e}`,l.appendChild(t)}function B(n,e){return e==="rgba(0, 0, 0, 0)"||e==="transparent"?"N/A (Transparent)":"4.5:1 (Normal)"}function R(){const e=y().undoStack.pop();if(!e)return!1;if(e.action==="delete"){const{parent:l,nextSibling:p}=e.prevValue;return l&&l.insertBefore(e.element,p),!0}else if(e.action==="text")return e.element.innerText=e.prevValue,!0;return!1}window.__qas_engine_ready||(window.__qas_engine_ready=!0,window.__qas_engine=(n,...e)=>{switch(n){case"setTool":return S(e[0]);case"applyRatio":return _(e[0]);case"undoAction":return R();case"getViewport":return{width:window.innerWidth,height:window.innerHeight};case"nudgeSpacing":{const[l,p,t]=e,a=y().selectedElement;if(!a)return;const c=`${l}${p.charAt(0).toUpperCase()+p.slice(1)}`,s=parseInt(window.getComputedStyle(a)[c],10)||0;a.style[c]=`${Math.max(0,s+t)}px`;return}case"applyColor":{const[l,p]=e,r=y().selectedElement;if(!r)return;r.style[l]=p;return}case"cleanup":{const l=y();l.cleanupFns.forEach(r=>{try{r()}catch{}}),l.cleanupFns=[];const p=document.getElementById("qas-visbug-overlay-root");p&&p.remove();const t=document.getElementById("qas-aspect-ratio-root");t&&t.remove(),window.__qas_visbug_state=void 0;return}default:console.warn("[QAS Engine] Unknown command:",n)}});
