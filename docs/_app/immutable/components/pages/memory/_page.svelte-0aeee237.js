import{S,i as T,s as V,k as _,a as y,q as N,l as v,m as A,h as g,c as w,r as U,n as u,b as C,F as m,A as b,K as D,N as k,O as I,I as q,J as F}from"../../../chunks/index-a1d74578.js";function M(a,e,s){const o=a.slice();return o[6]=e[s],o[8]=s,o}function E(a){let e,s,o,f,c,d,n,i,l;function t(){return a[2](a[6])}function p(){return a[3](a[6])}return{c(){e=_("div"),s=_("img"),f=y(),c=_("img"),n=y(),this.h()},l(r){e=v(r,"DIV",{class:!0});var h=A(e);s=v(h,"IMG",{class:!0,src:!0,alt:!0}),f=w(h),c=v(h,"IMG",{class:!0,src:!0,alt:!0}),n=w(h),h.forEach(g),this.h()},h(){u(s,"class","front svelte-fo0qwr"),k(s.src,o=a[6].img)||u(s,"src",o),u(s,"alt",""),u(c,"class","back svelte-fo0qwr"),k(c.src,d="https://cdnb.artstation.com/p/assets/images/images/012/681/457/large/kathryn-raccuglia-happening-card-back.jpg?1536001736")||u(c,"src",d),u(c,"alt",""),u(e,"class","card svelte-fo0qwr"),I(e,"flipped",a[6].flipped)},m(r,h){C(r,e,h),m(e,s),m(e,f),m(e,c),m(e,n),i||(l=[q(e,"click",t),q(e,"keypress",p)],i=!0)},p(r,h){a=r,h&1&&!k(s.src,o=a[6].img)&&u(s,"src",o),h&1&&I(e,"flipped",a[6].flipped)},d(r){r&&g(e),i=!1,F(l)}}}function G(a){let e,s,o,f,c,d=a[0],n=[];for(let i=0;i<d.length;i+=1)n[i]=E(M(a,d,i));return{c(){e=_("main"),s=_("div");for(let i=0;i<n.length;i+=1)n[i].c();o=y(),f=_("button"),c=N("Restart"),this.h()},l(i){e=v(i,"MAIN",{class:!0});var l=A(e);s=v(l,"DIV",{class:!0});var t=A(s);for(let r=0;r<n.length;r+=1)n[r].l(t);t.forEach(g),o=w(l),f=v(l,"BUTTON",{class:!0,onclick:!0});var p=A(f);c=U(p,"Restart"),p.forEach(g),l.forEach(g),this.h()},h(){u(s,"class","row svelte-fo0qwr"),u(f,"class","restart svelte-fo0qwr"),u(f,"onclick","window.location.reload();"),u(e,"class","background svelte-fo0qwr")},m(i,l){C(i,e,l),m(e,s);for(let t=0;t<n.length;t+=1)n[t].m(s,null);m(e,o),m(e,f),m(f,c)},p(i,[l]){if(l&3){d=i[0];let t;for(t=0;t<d.length;t+=1){const p=M(i,d,t);n[t]?n[t].p(p,l):(n[t]=E(p),n[t].c(),n[t].m(s,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=d.length}},i:b,o:b,d(i){i&&g(e),D(n,i)}}}function J(a){for(var e=a.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),o=a[e];a[e]=a[s],a[s]=o}}function O(a,e,s){let o=[],f=["https://media.tenor.com/rV8mpdXgZpAAAAAd/i-show-speed-speed.gif","https://media.tenor.com/GfVorHpvor0AAAAM/among-us-sus-gif.gif","https://media.tenor.com/cUpVSPi9J6AAAAAC/halfcat-simdemocracy.gif","https://media.tenor.com/fxlSft_ZEkwAAAAd/andrew-tate-tate.gif","https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2020/11/16002124/TFM-WIN20-TMenzel-Computer-working.gif","https://i.kym-cdn.com/photos/images/newsfeed/002/322/167/b9f.gif","https://media.tenor.com/tIFDxpId0EUAAAAC/osu-ohio-state-university.gif","https://media.tenor.com/_cXCMb80kW8AAAAC/family-guy-peter-griffin.gif"];for(let l=0;l<16;l++)o.push({id:l%f.length,img:f[l%f.length],flipped:!1,completed:!1});J(o);let c=0;function d(l){!l.flipped&&c<2?(l.flipped=!0,c++,c==2&&setTimeout(()=>{let t=null,p=null;o.forEach(r=>{r.flipped&&t==null&&!r.completed?t=r:r.flipped&&r!=t&&t!=null&&p==null&&!r.completed&&(p=r)}),console.log(t.id),console.log(p.id),p.id==t.id&&(t.completed=!0,p.completed=!0),o.forEach(r=>{r.flipped=r.completed}),c=0,s(0,o)},2e3),s(0,o)):alert("Is stress making you frustrated and irritable? Stress relievers can help restore calm and serenity to your chaotic life. You don't have to invest a lot of time or thought into stress relievers. If your stress is getting out of control and you need quick relief, try one of these tips. - eat -sleep - Use meditation - practice deep breathing - Maintain physicalexercise and good nutrition - manage social media time - Connect with others ")}return[o,d,l=>{d(l)},l=>{d(l)}]}class R extends S{constructor(e){super(),T(this,e,O,G,V,{})}}export{R as default};
