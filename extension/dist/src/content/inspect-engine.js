function K(){return window.__qas_visbug_state||(window.__qas_visbug_state={activeTool:"none",selectedElement:null,hoveredElement:null,firstGuideElement:null,undoStack:[],cleanupFns:[]}),window.__qas_visbug_state}const te="qas-aspect-ratio-root";function le(r){let e=document.getElementById(te);if(!r.enabled||r.preset==="free")return e&&e.remove(),{availW:window.innerWidth,availH:window.innerHeight,framedW:window.innerWidth,framedH:window.innerHeight,offsetX:0,offsetY:0};const u=r.baseWidth||window.innerWidth,g=r.baseHeight||window.innerHeight,t={"16:9":16/9,"16:10":16/10,"4:3":4/3,"9:16":9/16,"1:1":1,"21:9":21/9},s=r.ratio||t[r.preset]||16/9;let i,p;u/g>s?(p=g,i=p*s):(i=u,p=i/s),i>u&&(i=u,p=i/s),p>g&&(p=g,i=p*s);const o=Math.round(i),n=Math.round(p),c=Math.max(0,Math.round((u-o)/2)),a=Math.max(0,Math.round((g-n)/2));e||(e=document.createElement("div"),e.id=te,e.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483640;
      user-select: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    `,document.documentElement.appendChild(e)),e.replaceChildren();const y=q=>{const S=document.createElement("div");S.style.cssText=q,e==null||e.appendChild(S)};y(`position:absolute;top:0;left:0;right:0;height:${a}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`),y(`position:absolute;bottom:0;left:0;right:0;height:${a}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`),y(`position:absolute;top:${a}px;bottom:${a}px;left:0;width:${c}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`),y(`position:absolute;top:${a}px;bottom:${a}px;right:0;width:${c}px;background:rgba(15,23,42,0.88);backdrop-filter:blur(3px);`);const C=document.createElement("div");C.style.cssText=`position:absolute;top:${a}px;left:${c}px;width:${o}px;height:${n}px;box-sizing:border-box;border:2px dashed #6366f1;box-shadow:0 0 0 1px rgba(255,255,255,0.4),0 8px 30px rgba(0,0,0,0.5);border-radius:4px;`;const T=document.createElement("div");T.style.cssText="position:absolute;top:-30px;left:0;background:#1e1b4b;color:#c7d2fe;border:1px solid #4f46e5;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;display:flex;align-items:center;gap:6px;box-shadow:0 2px 6px rgba(0,0,0,0.4);";const k=document.createElement("span");k.textContent=`Aspect Ratio: ${r.preset.toUpperCase()}`;const L=document.createElement("span");L.style.cssText="color:#e0e7ff;font-family:monospace;",L.textContent=`${o} × ${n}px`;const $=document.createElement("span");return $.style.cssText="background:#4338ca;color:#fff;padding:1px 4px;border-radius:2px;font-size:10px;",$.textContent=`${Math.round(Math.max(.3,Math.min(2,r.scale||1))*100)}%`,T.append(k,L,$),C.appendChild(T),e.appendChild(C),{availW:u,availH:g,framedW:o,framedH:n,offsetX:c,offsetY:a}}const j="qas-visbug-overlay-root";function ce(){let r=document.getElementById(j);return r||(r=document.createElement("div"),r.id=j,r.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483645;
      user-select: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `,document.documentElement.appendChild(r)),r}function pe(r){const e=K();e.cleanupFns.forEach(t=>{try{t()}catch{}}),e.cleanupFns=[],e.activeTool==="text"&&e.selectedElement&&(e.selectedElement.contentEditable="false",e.selectedElement.style.outline="");const u=document.getElementById(j);if(u&&u.replaceChildren(),e.activeTool=r,r==="none"){e.selectedElement=null,e.hoveredElement=null,e.firstGuideElement=null;return}const g=ce();if(r==="inspect"){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 2px solid #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      border-radius: 2px;
      display: none;
      transition: all 0.05s ease-out;
    `;const s=document.createElement("div");s.style.cssText=`
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
    `,t.appendChild(s),g.appendChild(t);const i=d=>{const o=I(d.target);if(!o||o===e.selectedElement){t.style.display="none";return}e.hoveredElement=o;const n=o.getBoundingClientRect();t.style.display="block",t.style.top=`${n.top}px`,t.style.left=`${n.left}px`,t.style.width=`${n.width}px`,t.style.height=`${n.height}px`;const c=o.className&&typeof o.className=="string"?`.${o.className.trim().split(/\s+/).slice(0,2).join(".")}`:"";s.textContent=`<${o.tagName.toLowerCase()}${c}> • ${Math.round(n.width)}×${Math.round(n.height)}`},p=d=>{d.preventDefault(),d.stopPropagation();const o=I(d.target);if(!o)return;e.selectedElement=o;const n=X(e.selectedElement);Y({type:"INSPECT_ELEMENT_SELECTED",details:n})};window.addEventListener("pointermove",i,!0),window.addEventListener("click",p,!0),e.cleanupFns.push(()=>{window.removeEventListener("pointermove",i,!0),window.removeEventListener("click",p,!0),t.remove()})}else if(r==="guides"){const t=document.createElement("div");t.id="qas-guides-canvas",g.appendChild(t);const s=(d,o)=>{const n=d.getBoundingClientRect(),c=o.getBoundingClientRect();t.replaceChildren();const a=document.createElement("div");a.style.cssText=`position:absolute;top:${n.top}px;left:${n.left}px;width:${n.width}px;height:${n.height}px;border:2px solid #ec4899;background:rgba(236,72,153,0.1);pointer-events:none;`;const y=document.createElement("div");y.style.cssText=`position:absolute;top:${c.top}px;left:${c.left}px;width:${c.width}px;height:${c.height}px;border:2px solid #3b82f6;background:rgba(59,130,246,0.1);pointer-events:none;`,t.append(a,y);const C=Math.round(c.top>=n.bottom?c.top-n.bottom:n.top>=c.bottom?n.top-c.bottom:0),T=Math.round(c.left>=n.right?c.left-n.right:n.left>=c.right?n.left-c.right:0),k=Math.min(n.left,c.left)+Math.abs(n.left-c.left)/2,L=Math.min(n.top,c.top)+Math.abs(n.top-c.top)/2,$=document.createElement("div");$.style.cssText=`
        position: absolute;
        top: ${L}px;
        left: ${k}px;
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
      `,$.textContent=`↔ ${T}px  |  ↕ ${C}px`,t.appendChild($)},i=d=>{d.preventDefault(),d.stopPropagation();const o=I(d.target);o&&(e.firstGuideElement?s(e.firstGuideElement,o):e.firstGuideElement=o)},p=d=>{if(!e.firstGuideElement)return;const o=I(d.target);o&&o!==e.firstGuideElement&&s(e.firstGuideElement,o)};window.addEventListener("click",i,!0),window.addEventListener("pointermove",p,!0),e.cleanupFns.push(()=>{window.removeEventListener("click",i,!0),window.removeEventListener("pointermove",p,!0),t.remove()})}else if(r==="text"){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 1.5px dashed #10b981;
      background: rgba(16, 185, 129, 0.08);
      display: none;
    `,g.appendChild(t);const s=p=>{const d=I(p.target);if(!d||d===e.selectedElement){t.style.display="none";return}const o=d.getBoundingClientRect();t.style.display="block",t.style.top=`${o.top}px`,t.style.left=`${o.left}px`,t.style.width=`${o.width}px`,t.style.height=`${o.height}px`},i=p=>{const d=I(p.target);if(!d)return;e.selectedElement&&e.selectedElement!==d&&(e.selectedElement.contentEditable="false",e.selectedElement.style.outline=""),e.selectedElement=d;const o=e.selectedElement.innerText;e.undoStack.push({element:e.selectedElement,action:"text",prevValue:o}),e.selectedElement.contentEditable="true",e.selectedElement.style.outline="2px solid #10b981",e.selectedElement.focus()};window.addEventListener("pointermove",s,!0),window.addEventListener("click",i,!0),e.cleanupFns.push(()=>{window.removeEventListener("pointermove",s,!0),window.removeEventListener("click",i,!0),t.remove()})}else if(r==="margin"){let t=null,s=null,i=null;const p=document.createElement("div");p.id="qas-margin-container",p.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2147483646;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `,g.appendChild(p);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.style.cssText=`
      position: absolute;
      inset: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      overflow: visible;
    `,p.appendChild(d);const o=document.createElement("div");o.style.cssText=`
      position: absolute;
      inset: 0;
      pointer-events: none;
    `,p.appendChild(o);const n=document.createElement("div");n.id="qas-margin-hud",n.style.cssText=`
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(15, 23, 42, 0.94);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.16);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0,0,0,0.2);
      backdrop-filter: blur(10px);
      border-radius: 9999px;
      padding: 6px 16px;
      font-size: 11px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
      pointer-events: auto;
      z-index: 2147483647;
      user-select: none;
      white-space: nowrap;
      transition: all 0.15s ease;
    `,p.appendChild(n);const c=(x="↺ Reset")=>{const l=document.createElement("button");return l.type="button",l.style.cssText=`
        background: rgba(255, 255, 255, 0.12);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 3px 10px;
        border-radius: 9999px;
        font-size: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.1s;
      `,l.textContent=x,l.onmouseenter=()=>{l.style.background="rgba(255, 255, 255, 0.25)"},l.onmouseleave=()=>{l.style.background="rgba(255, 255, 255, 0.12)"},l.onclick=b=>{b.stopPropagation(),a()},l},a=()=>{t=null,s=null,i=null,e.selectedElement=null,d.replaceChildren(),o.replaceChildren(),y("init")},y=(x,l,b,f,h)=>{n.replaceChildren();const W=document.createElement("span");W.textContent="📐",n.appendChild(W);const F=document.createElement("span");if(F.style.cssText="font-weight: 700; color: #f59e0b; margin-right: 4px;",F.textContent="Margin Inspector",n.appendChild(F),x==="init"){const w=document.createElement("span");w.style.color="#cbd5e1",w.textContent="Click 1st object to start measuring",n.appendChild(w)}else if(x==="first"&&l){const w=l.getBoundingClientRect(),M=document.createElement("span");M.style.cssText="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-family: monospace;",M.textContent=`[1] <${l.tagName.toLowerCase()}> ${Math.round(w.width)}×${Math.round(w.height)}px`,n.appendChild(M);const _=document.createElement("span");_.style.color="#94a3b8",_.textContent="──",n.appendChild(_);const E=document.createElement("span");E.style.color="#38bdf8",E.textContent="Hover or click 2nd object",n.appendChild(E);const R=c();n.appendChild(R)}else if(x==="locked"&&l&&b){const w=l.getBoundingClientRect(),M=b.getBoundingClientRect(),_=document.createElement("span");_.style.cssText="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-family: monospace;",_.textContent=`[1] <${l.tagName.toLowerCase()}> ${Math.round(w.width)}×${Math.round(w.height)}`,n.appendChild(_);const E=document.createElement("span");E.style.cssText="background: #ef4444; color: #ffffff; padding: 3px 9px; border-radius: 9999px; font-weight: 700; font-family: monospace; display: flex; align-items: center; gap: 8px;",E.textContent=`↔ ${f??0}px  |  ↕ ${h??0}px`,n.appendChild(E);const R=document.createElement("span");R.style.cssText="background: rgba(56, 189, 248, 0.2); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-family: monospace;",R.textContent=`[2] <${b.tagName.toLowerCase()}> ${Math.round(M.width)}×${Math.round(M.height)}`,n.appendChild(R);const H=c("↺ Measure New Pair");n.appendChild(H)}},C=(x,l)=>{const b=x.getBoundingClientRect(),f=document.createElement("div"),h=l==="first"||l==="hover-first",W=l==="first"||l==="second",F=h?"#f59e0b":"#38bdf8",w=h?"rgba(245, 158, 11, 0.12)":"rgba(56, 189, 248, 0.12)",M=W?"solid":"dashed";f.style.cssText=`
        position: absolute;
        top: ${b.top}px;
        left: ${b.left}px;
        width: ${b.width}px;
        height: ${b.height}px;
        border: 2px ${M} ${F};
        background: ${w};
        border-radius: 3px;
        pointer-events: none;
        box-sizing: border-box;
      `;const _=document.createElement("div");_.style.cssText=`
        position: absolute;
        bottom: calc(100% + 4px);
        left: 0;
        background: #0f172a;
        color: ${F};
        border: 1px solid ${F};
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 700;
        font-family: monospace;
        white-space: nowrap;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      `;const E=h?"[1]":"[2]",R=W?"":" (click to select)";_.textContent=`${E} <${x.tagName.toLowerCase()}> • ${Math.round(b.width)}×${Math.round(b.height)}px${R}`,f.appendChild(_),o.appendChild(f)},T=(x,l,b)=>{d.replaceChildren(),o.replaceChildren(),C(x,"first"),C(l,b?"second":"hover-second");const f=x.getBoundingClientRect(),h=l.getBoundingClientRect(),W=f.right<=h.left||h.right<=f.left,F=f.left<=h.left?f:h,w=f.left<=h.left?h:f,M=W?Math.round(w.left-F.right):0,_=f.bottom<=h.top||h.bottom<=f.top,E=f.top<=h.top?f:h,R=f.top<=h.top?h:f,H=_?Math.round(R.top-E.bottom):0,Q=Math.max(f.left,h.left),se=Math.min(f.right,h.right),V=Math.max(0,se-Q),J=Math.max(f.top,h.top),ae=Math.min(f.bottom,h.bottom),O=Math.max(0,ae-J),ne=h.left>=f.left-1&&h.right<=f.right+1&&h.top>=f.top-1&&h.bottom<=f.bottom+1,de=f.left>=h.left-1&&f.right<=h.right+1&&f.top>=h.top-1&&f.bottom<=h.bottom+1,U=(m,v,N,D,A="#ef4444",B=!1)=>{const z=document.createElementNS("http://www.w3.org/2000/svg","line");z.setAttribute("x1",String(m)),z.setAttribute("y1",String(v)),z.setAttribute("x2",String(N)),z.setAttribute("y2",String(D)),z.setAttribute("stroke",A),z.setAttribute("stroke-width","2"),B&&(z.setAttribute("stroke-dasharray","4,3"),z.setAttribute("opacity","0.7")),d.appendChild(z)},oe=(m,v,N)=>{const D=document.createElement("div");D.style.cssText=`
          position: absolute;
          top: ${v}px;
          left: ${m}px;
          transform: translate(-50%, -50%);
          background: #0f172a;
          color: #ffffff;
          border: 1.5px solid #ef4444;
          padding: 3px 7px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          font-family: monospace;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 2;
        `,D.textContent=N,o.appendChild(D)},Z=(m,v,N,D)=>{const A=Math.min(v,N),B=Math.max(v,N);B-A<=0||(U(m,A,m,B,"#ef4444"),U(m-7,A,m+7,A,"#ef4444"),U(m-7,B,m+7,B,"#ef4444"),oe(m,(A+B)/2,`↕ ${D}`))},ee=(m,v,N,D)=>{const A=Math.min(v,N),B=Math.max(v,N);B-A<=0||(U(A,m,B,m,"#ef4444"),U(A,m-7,A,m+7,"#ef4444"),U(B,m-7,B,m+7,"#ef4444"),oe((A+B)/2,m,`↔ ${D}`))};if(ne||de){const m=ne?f:h,v=ne?h:f,N=Math.round(v.top-m.top),D=Math.round(m.bottom-v.bottom),A=Math.round(v.left-m.left),B=Math.round(m.right-v.right),z=v.left+v.width/2,re=v.top+v.height/2;N>0&&Z(z,m.top,v.top,`${N}px`),D>0&&Z(z,v.bottom,m.bottom,`${D}px`),A>0&&ee(re,m.left,v.left,`${A}px`),B>0&&ee(re,v.right,m.right,`${B}px`)}else if(H>0&&V>0){const m=Q+V/2;Z(m,E.bottom,R.top,`${H}px`)}else if(M>0&&O>0){const m=J+O/2;ee(m,F.right,w.left,`${M}px`)}else if(M>0&&H>0){const m=w.left+w.width/2,v=E.top+E.height/2;ee(v,F.right,w.left,`${M}px`);const N=E===F?w.top:w.bottom;U(w.left,v,w.left,N,"#ef4444",!0),Z(m,E.bottom,R.top,`${H}px`);const D=R===w?E.right:E.left;U(D,E.bottom,m,E.bottom,"#ef4444",!0)}else if(V>0&&O>0){const m=document.createElement("div");m.style.cssText=`
          position: absolute;
          top: ${J}px;
          left: ${Q}px;
          width: ${V}px;
          height: ${O}px;
          background: rgba(239, 68, 68, 0.2);
          border: 1.5px dashed #ef4444;
          border-radius: 2px;
          pointer-events: none;
        `,o.appendChild(m),oe(Q+V/2,J+O/2,`Overlap: ${V}×${O}px`)}y(b?"locked":"first",x,l,M,H),b&&Y({type:"MARGIN_DISTANCE_MEASURED",first:X(x),second:X(l),hDistance:M,vDistance:H})},k=()=>{t&&s?T(t,s,!0):t&&i?T(t,i,!1):t?(d.replaceChildren(),o.replaceChildren(),C(t,"first"),y("first",t)):i&&(d.replaceChildren(),o.replaceChildren(),C(i,"hover-first"))};y("init");const L=x=>{x.preventDefault(),x.stopPropagation();const l=I(x.target);if(l)if(!t)t=l,s=null,e.selectedElement=t,k(),Y({type:"INSPECT_ELEMENT_SELECTED",details:X(t)});else if(s)t=l,s=null,e.selectedElement=t,k(),Y({type:"INSPECT_ELEMENT_SELECTED",details:X(t)});else{if(l===t)return;s=l,k()}},$=x=>{const l=I(x.target);if(!l||l===document.documentElement||l===document.body){!s&&i&&(i=null,k());return}l!==i&&(i=l,t?!s&&i!==t&&T(t,i,!1):(d.replaceChildren(),o.replaceChildren(),C(i,"hover-first")))},q=x=>{if(x.key==="Escape"){a();return}const l=s||t;if(!l)return;const b=x.shiftKey?10:1;let f=!0;x.key==="ArrowUp"?G(l,"margin","top",-b):x.key==="ArrowDown"?G(l,"margin","bottom",b):x.key==="ArrowLeft"?G(l,"margin","left",-b):x.key==="ArrowRight"?G(l,"margin","right",b):f=!1,f&&(x.preventDefault(),k())};let S=null;const P=()=>{S&&cancelAnimationFrame(S),S=requestAnimationFrame(()=>{k()})};window.addEventListener("click",L,!0),window.addEventListener("pointermove",$,!0),window.addEventListener("keydown",q,!0),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),e.cleanupFns.push(()=>{window.removeEventListener("click",L,!0),window.removeEventListener("pointermove",$,!0),window.removeEventListener("keydown",q,!0),window.removeEventListener("scroll",P),window.removeEventListener("resize",P),S&&cancelAnimationFrame(S),p.remove()})}else if(r==="padding"){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 2px solid #ef4444;
      background: transparent;
      display: none;
    `,g.appendChild(t);const s=document.createElement("div");s.style.cssText="position:absolute;inset:0;pointer-events:none;",g.appendChild(s);const i=(n,c=!1)=>{const a=n.getBoundingClientRect(),y=window.getComputedStyle(n),C=parseFloat(y.borderTopWidth)||0,T=parseFloat(y.borderRightWidth)||0,k=parseFloat(y.borderBottomWidth)||0,L=parseFloat(y.borderLeftWidth)||0,$=parseFloat(y.paddingTop)||0,q=parseFloat(y.paddingRight)||0,S=parseFloat(y.paddingBottom)||0,P=parseFloat(y.paddingLeft)||0,x=c?"#a855f7":"#ec4899",l=`repeating-linear-gradient(135deg, ${c?"rgba(168,85,247,0.28)":"rgba(236,72,153,0.28)"} 0px, ${c?"rgba(168,85,247,0.28)":"rgba(236,72,153,0.28)"} 2px, rgba(255,255,255,0.16) 2px, rgba(255,255,255,0.16) 6px)`,b=(W,F,w,M,_)=>{if(w<=0||M<=0)return;const E=document.createElement("div");E.style.cssText=`position:absolute;top:${W}px;left:${F}px;width:${w}px;height:${M}px;box-sizing:border-box;background:${l};border:1px solid ${x};pointer-events:none;`;const R=document.createElement("span");R.style.cssText=`position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:${x};color:#fff;border-radius:3px;padding:1px 4px;font:700 10px/1 monospace;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,0.25);`,R.textContent=_,E.appendChild(R),s.appendChild(E)};s.replaceChildren(),t.style.display="block",t.style.top=`${a.top}px`,t.style.left=`${a.left}px`,t.style.width=`${a.width}px`,t.style.height=`${a.height}px`;const f=document.createElement("div");f.style.cssText=`position:absolute;top:${a.top+C+$}px;left:${a.left+L+P}px;width:${Math.max(0,a.width-L-T-P-q)}px;height:${Math.max(0,a.height-C-k-$-S)}px;box-sizing:border-box;border:2px dashed #10b981;background:rgba(16,185,129,0.08);pointer-events:none;`,s.appendChild(f),b(a.top+C,a.left+L,a.width-L-T,$,`T ${Math.round($)}px`),b(a.top+a.height-k-S,a.left+L,a.width-L-T,S,`B ${Math.round(S)}px`),b(a.top+C+$,a.left+L,P,a.height-C-k-$-S,`L ${Math.round(P)}px`),b(a.top+C+$,a.left+a.width-T-q,q,a.height-C-k-$-S,`R ${Math.round(q)}px`);const h=document.createElement("div");h.style.cssText=`position:absolute;top:${a.top+a.height/2}px;left:${a.left+a.width/2}px;transform:translate(-50%,-50%);background:${x};color:#fff;border:1px solid #fdf2f8;border-radius:4px;padding:3px 6px;font:700 10px monospace;white-space:nowrap;pointer-events:none;box-shadow:0 2px 6px rgba(0,0,0,0.35);`,h.textContent=`Padding ${Math.round($)} / ${Math.round(q)} / ${Math.round(S)} / ${Math.round(P)}px`,s.appendChild(h)},p=n=>{n.preventDefault(),n.stopPropagation();const c=I(n.target);if(!c)return;e.selectedElement=c,i(e.selectedElement);const a=X(e.selectedElement);Y({type:"INSPECT_ELEMENT_SELECTED",details:a})},d=n=>{const c=I(n.target);!c||c===e.selectedElement||i(c,!0)},o=n=>{if(n.key==="Escape"){e.selectedElement=null,t.style.display="none",s.replaceChildren();return}if(!e.selectedElement)return;const c=n.shiftKey?10:1,a=n.altKey?-1:1,y=n.metaKey||n.ctrlKey;let C=!0;if(y&&(n.key==="ArrowUp"||n.key==="ArrowDown")){const T=(n.key==="ArrowDown"?1:-1)*c*a;["top","right","bottom","left"].forEach(k=>{G(e.selectedElement,"padding",k,T)})}else n.key==="ArrowUp"?G(e.selectedElement,"padding","top",-c*a):n.key==="ArrowDown"?G(e.selectedElement,"padding","bottom",c*a):n.key==="ArrowLeft"?G(e.selectedElement,"padding","left",-c*a):n.key==="ArrowRight"?G(e.selectedElement,"padding","right",c*a):C=!1;C&&(n.preventDefault(),i(e.selectedElement))};window.addEventListener("pointermove",d,!0),window.addEventListener("click",p,!0),window.addEventListener("keydown",o,!0),e.cleanupFns.push(()=>{window.removeEventListener("click",p,!0),window.removeEventListener("keydown",o,!0),window.removeEventListener("pointermove",d,!0),t.remove(),s.remove()})}else if(r==="delete"){const t=document.createElement("div");t.style.cssText=`
      position: absolute;
      pointer-events: none;
      border: 2px dashed #ef4444;
      background: rgba(239, 68, 68, 0.15);
      display: none;
    `;const s=document.createElement("div");s.style.cssText=`
      position: absolute;
      bottom: calc(100% + 4px);
      left: 0;
      background: #ef4444;
      color: #fff;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
    `,s.textContent="🗑️ Click to Remove",t.appendChild(s),g.appendChild(t);const i=d=>{const o=I(d.target);if(!o){t.style.display="none";return}const n=o.getBoundingClientRect();t.style.display="block",t.style.top=`${n.top}px`,t.style.left=`${n.left}px`,t.style.width=`${n.width}px`,t.style.height=`${n.height}px`},p=d=>{d.preventDefault(),d.stopPropagation();const o=I(d.target);if(!o)return;const n=o.parentElement,c=o.nextSibling;e.undoStack.push({element:o,action:"delete",prevValue:{parent:n,nextSibling:c}}),o.remove(),t.style.display="none"};window.addEventListener("pointermove",i,!0),window.addEventListener("click",p,!0),e.cleanupFns.push(()=>{window.removeEventListener("pointermove",i,!0),window.removeEventListener("click",p,!0),t.remove()})}else if(r==="a11y"){const t=document.createElement("div");t.id="qas-a11y-issues",g.appendChild(t);let s=0;document.querySelectorAll("img").forEach(i=>{i.getAttribute("alt")||(s++,ie(i,"Missing alt text",t))}),document.querySelectorAll("button, a").forEach(i=>{var d;((d=i.textContent)==null?void 0:d.trim())||i.getAttribute("aria-label")||i.getAttribute("title")||(s++,ie(i,"Empty accessible label",t))}),document.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(i=>{const p=i.id,d=p&&document.querySelector(`label[for="${p}"]`),o=i.closest("label"),n=i.getAttribute("aria-label")||i.getAttribute("aria-labelledby");!d&&!o&&!n&&(s++,ie(i,"Missing form label",t))}),Y({type:"A11Y_ISSUES_FOUND",count:s}),e.cleanupFns.push(()=>{t.remove()})}}function I(r){return!r||r.id===te||r.id===j||r.closest(`#${te}, #${j}`)||r===document.documentElement||r===document.body?null:r}function X(r){const e=r.getBoundingClientRect(),u=window.getComputedStyle(r);return{tagName:r.tagName.toLowerCase(),id:r.id||void 0,className:typeof r.className=="string"&&r.className.trim()?r.className.trim():void 0,rect:{width:Math.round(e.width),height:Math.round(e.height),top:Math.round(e.top),left:Math.round(e.left)},styles:{fontFamily:u.fontFamily.split(",")[0].replace(/['"]/g,""),fontSize:u.fontSize,fontWeight:u.fontWeight,lineHeight:u.lineHeight,color:u.color,backgroundColor:u.backgroundColor,borderColor:u.borderColor,margin:u.margin,padding:u.padding,display:u.display,boxSizing:u.boxSizing,contrastRatio:ue(u.color,u.backgroundColor)}}}function G(r,e,u,g){const t=`${e}${u.charAt(0).toUpperCase()+u.slice(1)}`,s=parseInt(window.getComputedStyle(r)[t],10)||0,i=Math.max(0,s+g);r.style[t]=`${i}px`}function Y(r){const e=typeof chrome<"u"?chrome.runtime:void 0;e==null||e.sendMessage(r).catch(()=>{})}function ie(r,e,u){const g=r.getBoundingClientRect();if(g.width===0&&g.height===0)return;const t=document.createElement("div");t.style.cssText=`
    position: absolute;
    top: ${g.top}px;
    left: ${g.left}px;
    background: #ef4444;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 5px;
    border-radius: 4px;
    pointer-events: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    z-index: 2147483646;
  `,t.textContent=`⚠️ ${e}`,u.appendChild(t)}function ue(r,e){return e==="rgba(0, 0, 0, 0)"||e==="transparent"?"N/A (Transparent)":"4.5:1 (Normal)"}function fe(){const e=K().undoStack.pop();if(!e)return!1;if(e.action==="delete"){const{parent:u,nextSibling:g}=e.prevValue;return u&&u.insertBefore(e.element,g),!0}else if(e.action==="text")return e.element.innerText=e.prevValue,!0;return!1}window.__qas_engine_ready||(window.__qas_engine_ready=!0,window.__qas_engine=(r,...e)=>{switch(r){case"setTool":return pe(e[0]);case"applyRatio":return le(e[0]);case"undoAction":return fe();case"getViewport":return{width:window.innerWidth,height:window.innerHeight};case"nudgeSpacing":{const[u,g,t]=e,i=K().selectedElement;if(!i)return;const p=`${u}${g.charAt(0).toUpperCase()+g.slice(1)}`,d=parseInt(window.getComputedStyle(i)[p],10)||0;i.style[p]=`${Math.max(0,d+t)}px`;return}case"applyColor":{const[u,g]=e,s=K().selectedElement;if(!s)return;s.style[u]=g;return}case"cleanup":{const u=K();u.cleanupFns.forEach(s=>{try{s()}catch{}}),u.cleanupFns=[];const g=document.getElementById("qas-visbug-overlay-root");g&&g.remove();const t=document.getElementById("qas-aspect-ratio-root");t&&t.remove(),window.__qas_visbug_state=void 0;return}default:console.warn("[QAS Engine] Unknown command:",r)}});
