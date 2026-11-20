// ===== CONFIG: edit these =====
var CONFIG={formEndpoint:"",resumeUrl:""}; // formEndpoint: a form service URL (e.g. Formspree); resumeUrl: link to your CV PDF
var SKILLS={"Programming":["C","C++","Python","Java"],"Frontend":["HTML5","CSS3","JavaScript","React"],"AI & IoT":["AI","Machine Learning","IoT"],"Dev Tools":["Git","GitHub","VS Code"]};
var PROJECTS=[
{t:"Raksha Setu",f:"Intelligent Road Accident Detection & Emergency Response Platform",c:"Web Development",e:"🚑",g:"135deg,#3B82F6,#8B5CF6",d:"A road-safety platform with incident reporting and emergency-notification features, designed to support communication and coordination during emergencies.",tech:["React","TypeScript","Supabase","Mapping"],feat:["Emergency response dashboard","Multiple user roles","Incident management","Risk assessment visualization","Map-based interface","Emergency coordination"],live:"https://raksha-setu-emergency-platform--yatharthj7711.replit.app/overview"},
{t:"VaxSafe AI",f:"AI & Blockchain-Driven Cold Chain Monitoring System",c:"AI & Analytics",e:"🌡",g:"135deg,#8B5CF6,#22D3EE",d:"A healthcare-focused solution for real-time monitoring of vaccine storage conditions, integrating AI, IoT and blockchain concepts for secure data management and cold-chain reliability.",tech:["AI","IoT","Blockchain Concepts","Python"],feat:["Vaccine storage monitoring","Secure data management","Cold-chain reliability"]},
{t:"CityPulse",f:"Intelligent Urban Operations & Civic Analytics Platform",c:"Web Development",e:"🏙",g:"135deg,#22D3EE,#3B82F6",d:"A smart city platform concept for managing civic information and visualizing urban operations.",tech:["Python","FastAPI","React","JavaScript"],feat:["Civic complaint management","Urban analytics","Interactive maps","City health indicators","Transit intelligence","Data visualization"]},
{t:"Drone Rural Navigation",f:"",c:"Engineering",e:"🛸",g:"135deg,#8B5CF6,#3B82F6",d:"An offline drone-navigation concept for rural areas, using geospatial mapping and GPS for route planning in disaster-response and agricultural-monitoring use cases.",tech:["Geospatial Mapping","GPS"],feat:["Offline navigation","Route planning","Disaster-response use case","Agricultural-monitoring use case"]},
{t:"Student Academic Analyzer",f:"",c:"Python",e:"📊",g:"135deg,#3B82F6,#22D3EE",d:"A student-performance analysis system that generates academic insights and reports to support learning improvement.",tech:["Python","Flask","HTML","CSS"],feat:["Student record management","Marks management","Attendance tracking","Performance analysis","Academic reports"]}];
var CERTS=[["Introduction to Cyber Security",""],["MongoDB Overview",""],["Gemini Certified Student",""],["Introduction to Generative AI and Agents",""]];
var ACH=[["Smart India Hackathon (SIH)",""],["Projectathon 2.0",""],["AmiHacks 1.0",""],["Geospatial Intelligence Hackathon",""],["CIACON CTF, Gurgaon",""]];
var FOCUS=[["🌐","Advanced Web Development","Building richer, faster, more accessible web applications."],["🧩","Data Structures and Algorithms","Strengthening problem solving and efficient code."],["🤖","Artificial Intelligence","Exploring intelligent systems and their applications."],["🧠","Machine Learning","Learning how models learn from data."],["📡","IoT","Connecting sensors and devices to real-world monitoring."],["⚙️","Software Engineering","Writing clean, maintainable, real-world software."]];
var $=function(s,r){return(r||document).querySelector(s)};
var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}
function safeUrl(u){return/^https?:\/\//i.test(u)?esc(u):""}

// saved additions (this browser only)
var EX={projects:[],certs:[],ach:[],hid:{projects:[],certs:[],ach:[]}};
try{var raw=JSON.parse(localStorage.getItem("yj-extra")||"null");if(raw)EX={projects:raw.projects||[],certs:raw.certs||[],ach:raw.ach||[],hid:raw.hid||{projects:[],certs:[],ach:[]}}}catch(e){}
function save(){try{localStorage.setItem("yj-extra",JSON.stringify(EX))}catch(e){alert("Could not save in this browser.")}}
var IM={};try{IM=JSON.parse(localStorage.getItem("yj-img")||"{}")||{}}catch(e){}
function saveIM(){try{localStorage.setItem("yj-img",JSON.stringify(IM));return true}catch(e){alert("That image is too large for browser storage. Try a smaller image.");return false}}

addEventListener("load",function(){setTimeout(function(){var l=$("#load");l.style.opacity=0;setTimeout(function(){l.remove()},500)},350)});
var root=document.documentElement;
try{var sv=localStorage.getItem("yj-theme");if(sv)root.dataset.theme=sv}catch(e){}
$("#theme").onclick=function(){var t=root.dataset.theme==="light"?"dark":"light";root.dataset.theme=t;try{localStorage.setItem("yj-theme",t)}catch(e){}};
$("#burger").onclick=function(){var o=$("#links").classList.toggle("open");this.setAttribute("aria-expanded",o)};
document.querySelectorAll(".links a").forEach(function(a){a.addEventListener("click",function(){$("#links").classList.remove("open");$("#burger").setAttribute("aria-expanded",false)})});
var secs=[].slice.call(document.querySelectorAll("section"));
function onScroll(){var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
$("#prog").style.width=(h>0?y/h*100:0)+"%";$("#nav").classList.toggle("sc",y>20);$("#top").classList.toggle("show",y>600);
var cur="home";secs.forEach(function(s){if(s.offsetTop-120<=y)cur=s.id});if(cur==="focus")cur="achievements";
document.querySelectorAll("a.l").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+cur)})}
addEventListener("scroll",onScroll,{passive:true});onScroll();

var words=["Software Developer","Web Developer","Computer Science Student","Technology Enthusiast"],wi=0,ci=0,del=false,te=$("#type");
function tick(){var w=words[wi];if(reduce){te.textContent=w;wi=(wi+1)%words.length;return setTimeout(tick,2200)}
ci+=del?-1:1;te.textContent=w.slice(0,ci);var t=del?40:90;
if(!del&&ci===w.length){del=true;t=1400}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;t=300}setTimeout(tick,t)}tick();

(function(){try{var c=$("#cv");if(typeof THREE==="undefined")return;
var R=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true}),S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,100),G=new THREE.Group();C.position.z=9;S.add(G);
var M=function(col,o){return new THREE.MeshBasicMaterial({color:col,wireframe:true,transparent:true,opacity:o})};
var a=new THREE.Mesh(new THREE.IcosahedronGeometry(2.3,1),M(0x3B82F6,.55)),b=new THREE.Mesh(new THREE.TorusKnotGeometry(1.1,.32,90,12),M(0x8B5CF6,.7)),d=new THREE.Mesh(new THREE.OctahedronGeometry(.7),M(0x22D3EE,.8));
a.position.set(3.6,.2,-1);b.position.set(-5.2,-2.2,-3);d.position.set(5.2,2.6,1);G.add(a,b,d);
var n=380,pos=new Float32Array(n*3);for(var i=0;i<n*3;i++)pos[i]=(Math.random()-.5)*(i%3===2?10:24);
var pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pos,3));var pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0x22D3EE,size:.05,transparent:true,opacity:.7}));G.add(pts);
var mx=0,my=0,vis=true;
function rs(){var w=c.clientWidth,h=c.clientHeight;R.setPixelRatio(Math.min(devicePixelRatio,2));R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}rs();addEventListener("resize",rs);
addEventListener("pointermove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
new IntersectionObserver(function(en){vis=en[0].isIntersecting}).observe($("#home"));
function f(t){if(vis){a.rotation.x=t*.0002;a.rotation.y=t*.0003;b.rotation.x=t*.0004;b.rotation.y=t*.0002;d.rotation.y=t*.0006;d.position.y=2.6+Math.sin(t*.001)*.4;pts.rotation.y=t*.00005;G.rotation.y+=(mx*.5-G.rotation.y)*.05;G.rotation.x+=(my*.3-G.rotation.x)*.05;R.render(S,C)}if(!reduce)requestAnimationFrame(f)}
f(0)}catch(e){}})();
if(!reduce&&matchMedia("(hover:hover)").matches){var tl=null;document.addEventListener("pointermove",function(e){var t=e.target.closest&&e.target.closest(".card,.vis");if(tl&&tl!==t){tl.style.removeProperty("--rx");tl.style.removeProperty("--ry")}tl=t;if(!t)return;var r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5,k=t.classList.contains("vis")?10:12;t.style.setProperty("--rx",(-y*k)+"deg");t.style.setProperty("--ry",(x*k)+"deg")})}

// skills
var sk=["All"].concat(Object.keys(SKILLS));
function renderSkills(cat){var a=[];Object.keys(SKILLS).forEach(function(k){if(cat==="All"||cat===k)SKILLS[k].forEach(function(s){a.push([s,k])})});
$("#sgrid").innerHTML=a.map(function(s){return'<div class="card"><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></div>'}).join("")}
function tabs(el,list,fn){el.innerHTML=list.map(function(k,i){return'<button class="tab'+(i?"":" on")+'" data-k="'+esc(k)+'">'+esc(k)+'</button>'}).join("");
el.onclick=function(e){var b=e.target.closest(".tab");if(!b)return;el.querySelectorAll(".tab").forEach(function(t){t.classList.remove("on")});b.classList.add("on");fn(b.dataset.k)}}
tabs($("#stabs"),sk,renderSkills);renderSkills("All");

// projects
var pcat="All",cats=["All","Web Development","Python","AI & Analytics","Engineering"];
function allProj(){return PROJECTS.map(function(p){return p}).concat(EX.projects.map(function(p,i){p.mine=1;p.ix=i;return p}))}
function renderProj(){var L=allProj();$("#pgrid").innerHTML=L.map(function(p,i){
if(pcat!=="All"&&p.c!==pcat&&!(pcat==="Python"&&p.tech.indexOf("Python")>-1))return"";
return'<article class="card">'+(p.mine?'<span class="mine">Added by me</span>':'')+'<div class="pimg" style="background:linear-gradient('+(p.g||"135deg,#3B82F6,#8B5CF6")+')"><span>'+(p.e||"💡")+'</span></div><h3>'+esc(p.t)+'</h3><p>'+esc(p.d)+'</p><div class="badges">'+p.tech.map(function(t){return'<span class="bd">'+esc(t)+'</span>'}).join("")+'</div><div class="row" style="margin-top:8px"><button class="btn s" data-i="'+i+'">View Details</button>'+(p.gh?'<a class="btn s" href="'+safeUrl(p.gh)+'" target="_blank" rel="noopener">GitHub</a>':'')+(p.live?'<a class="btn p s" href="'+safeUrl(p.live)+'" target="_blank" rel="noopener">Live Demo</a>':'')+'</div>'+(p.mine?'<button class="x" data-rm="projects" data-n="'+i+'">Remove</button>':'')+'</article>'}).join("")}
tabs($("#ptabs"),cats,function(k){pcat=k;renderProj()});renderProj();

// certs + achievements
function simple(el,base,ex,key,ic){el.innerHTML=base.concat(ex).map(function(c,i){var mine=i>=base.length;
return'<div class="card" role="button" tabindex="0" style="cursor:pointer" data-v="'+key+'" data-n="'+i+'">'+(mine?'<span class="mine">Added by me</span>':'')+'<span class="ico">'+ic+'</span><h3>'+esc(c[0])+'</h3>'+(c[1]?'<p>'+(/^https?:/i.test(c[1])?'<a href="'+safeUrl(c[1])+'" target="_blank" rel="noopener" style="color:var(--cyan)">View credential</a>':esc(c[1]))+'</p>':'')+'<p style="color:var(--cyan);font-size:.8rem;margin-top:8px">'+(IM[c[0]]?'📄 View certificate':'+ Add certificate image')+'</p>'+(mine?'<button class="x" data-rm="'+key+'" data-n="'+i+'">Remove</button>':'')+'</div>'}).join("")||'<p class="ph">Nothing here. Use the Add button.</p>'}
function renderLists(){simple($("#cgrid"),CERTS,EX.certs,"certs","🎓");simple($("#agrid"),ACH,EX.ach,"ach","🏆")}renderLists();
$("#fgrid").innerHTML=FOCUS.map(function(f){return'<div class="card rev"><span class="ico">'+f[0]+'</span><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>'}).join("");

function removeItem(k,n){var base=k==="certs"?CERTS:ACH,c=base.concat(EX[k])[n];if(!c||n<base.length||!confirm('Remove "'+c[0]+'"?'))return;EX[k].splice(n-base.length,1);delete IM[c[0]];save();saveIM();renderLists();m.classList.remove("open")}
function removeProj(i){var p=allProj()[i];if(!p||!confirm('Remove "'+p.t+'"?'))return;if(p.mine)EX.projects.splice(p.ix,1);save();renderProj()}
document.addEventListener("click",function(e){var r=e.target.closest("[data-rm]");
if(r){if(r.dataset.rm==="projects")removeProj(+r.dataset.n);else removeItem(r.dataset.rm,+r.dataset.n)}
});

// modal: details + add forms
var m=$("#modal"),last;
function closeM(){m.classList.remove("open");if(last)last.focus()}
m.onclick=function(e){if(e.target===m)closeM()};addEventListener("keydown",function(e){if(e.key==="Escape")closeM()});
function openM(html){$("#mc").innerHTML=html;m.classList.add("open");var f=$("#mc input,#mc button");if(f)f.focus()}
$("#pgrid").addEventListener("click",function(e){var b=e.target.closest("button[data-i]");if(!b)return;last=b;var p=allProj()[b.dataset.i];
openM('<h3 id="mt" style="font-size:1.4rem;margin:0">'+esc(p.t)+'</h3>'+(p.f?'<p class="ph">'+esc(p.f)+'</p>':'')+'<p>'+esc(p.d)+'</p>'+(p.feat&&p.feat.length?'<strong>Features</strong><ul>'+p.feat.map(function(f){return'<li>'+esc(f)+'</li>'}).join("")+'</ul>':'')+'<div class="badges">'+p.tech.map(function(t){return'<span class="bd">'+esc(t)+'</span>'}).join("")+'</div>'+(!p.gh?'<p class="ph">Repository link: to be added.</p>':'')+'<div class="row"><button class="btn" id="mx">Close</button></div>');$("#mx").onclick=closeM});
var FORMS={
projects:["Add Project",[["title","Project title",1],["desc","Short description",1,"ta"],["tech","Technologies (comma separated)"],["cat","Category",0,"sel"],["live","Live demo URL (https://…)"],["gh","GitHub URL (https://…)"]]],
certs:["Add Certification",[["title","Certification name",1],["note","Credential link (https://…) or short note"]]],
ach:["Add Achievement",[["title","Title",1],["note","Details"]]]};
document.addEventListener("click",function(e){var b=e.target.closest("[data-add]");if(!b)return;last=b;var k=b.dataset.add,F=FORMS[k];
openM('<h3 id="mt" style="margin:0 0 14px">'+F[0]+'</h3><form id="af" novalidate>'+F[1].map(function(f){var id="f_"+f[0],inp=f[3]==="ta"?'<textarea id="'+id+'" rows="3"></textarea>':f[3]==="sel"?'<select id="'+id+'">'+cats.slice(1).map(function(c){return'<option>'+c+'</option>'}).join("")+'</select>':'<input id="'+id+'">';return'<div><label for="'+id+'">'+f[1]+(f[2]?' *':'')+'</label>'+inp+'</div>'}).join("")+'<span class="err" id="aerr"></span><div class="row" style="margin:0"><button class="btn p" type="submit">Save</button><button class="btn" type="button" id="mx">Cancel</button></div><p class="ph" style="font-size:.8rem;margin:0">Saved in this browser only. Edit the data arrays in the code to make items permanent for all visitors.</p></form>');
$("#mx").onclick=closeM;
$("#af").onsubmit=function(ev){ev.preventDefault();var v=function(n){var el=$("#f_"+n);return el?el.value.trim():""},er=$("#aerr");
if(!v("title")||(k==="projects"&&!v("desc"))){er.textContent="Please fill the required fields.";return}
var urls=k==="projects"?[v("live"),v("gh")]:[];for(var i=0;i<urls.length;i++)if(urls[i]&&!/^https?:\/\//i.test(urls[i])){er.textContent="URLs must start with http:// or https://";return}
if(k==="projects")EX.projects.push({t:v("title"),d:v("desc"),c:v("cat"),tech:v("tech")?v("tech").split(",").map(function(s){return s.trim()}).filter(Boolean):[],live:v("live"),gh:v("gh"),feat:[]});
else EX[k].push([v("title"),v("note")]);
save();renderProj();renderLists();closeM()}});

function shrink(file,cb){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var s=Math.min(1,1100/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);cb(c.toDataURL("image/jpeg",.72))};im.onerror=function(){alert("Could not read that image.")};im.src=r.result};r.readAsDataURL(file)}
function showItem(k,n){var L=k==="certs"?CERTS.concat(EX.certs):ACH.concat(EX.ach),c=L[n],t=c[0],link=/^https?:/i.test(c[1]||""),img=IM[t];
openM('<h3 id="mt" style="margin:0 0 6px;font-size:1.4rem">'+esc(t)+'</h3>'+(c[1]&&!link?'<p>'+esc(c[1])+'</p>':'')+(link?'<p><a href="'+safeUrl(c[1])+'" target="_blank" rel="noopener" style="color:var(--cyan)">Open credential link</a></p>':'')+(img?'<img src="'+img+'" alt="Certificate: '+esc(t)+'" style="width:100%;border-radius:12px;border:1px solid var(--line)">':'<p class="ph">No certificate image added yet.</p>')+'<span class="err" id="ierr"></span><div class="row"><label class="btn p s" style="margin:0;cursor:pointer;position:relative">'+(img?'Replace':'Upload')+' certificate image<input type="file" id="cf" accept="image/*" style="position:absolute;opacity:0;width:1px;height:1px"></label>'+(img?'<button class="btn s" id="ci">Remove image</button>':'')+'<button class="btn s" id="mx">Close</button></div><p class="ph" style="font-size:.8rem;margin:10px 0 0">Images are saved in this browser only.</p>');
$("#mx").onclick=closeM;
$("#cf").onchange=function(){var f=this.files[0];if(!f)return;if(!/^image\//.test(f.type)){$("#ierr").textContent="Please choose an image (JPG or PNG). For a PDF, take a screenshot or add its link.";return}shrink(f,function(d){IM[t]=d;if(saveIM()){renderLists();showItem(k,n)}else delete IM[t]})};
var ci=$("#ci");if(ci)ci.onclick=function(){delete IM[t];saveIM();renderLists();showItem(k,n)}}
document.addEventListener("click",function(e){var c=e.target.closest("[data-v]");if(!c||e.target.closest("[data-rm],a"))return;last=c;showItem(c.dataset.v,+c.dataset.n)});
document.addEventListener("keydown",function(e){if((e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("[data-v]")){e.preventDefault();e.target.click()}});
$("#resume").onclick=function(){if(CONFIG.resumeUrl)window.open(CONFIG.resumeUrl,"_blank","noopener");else alert("Resume not added yet. Set CONFIG.resumeUrl to your CV link.")};

var form=$("#form"),msg=$("#msg");
function show(ok,t){msg.style.display="block";msg.style.background=ok?"rgba(34,197,94,.15)":"rgba(248,113,113,.15)";msg.textContent=t}
form.onsubmit=function(ev){ev.preventDefault();var bad=false;
form.querySelectorAll("input,textarea").forEach(function(i){var er=i.nextElementSibling,v=i.value.trim(),t="";
if(!v)t="This field is required.";else if(i.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))t="Enter a valid email address.";er.textContent=t;if(t)bad=true});if(bad)return;
if(!CONFIG.formEndpoint)return show(false,"Demo mode: no form service is configured yet, so this message was not sent. Please email yatharthg1727@gmail.com directly.");
var b=$("#send");b.disabled=true;b.textContent="Sending…";
fetch(CONFIG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))})
.then(function(r){if(!r.ok)throw 0;show(true,"Thanks! Your message was sent.");form.reset()})
.catch(function(){show(false,"Something went wrong. Please try again or email me directly.")})
.then(function(){b.disabled=false;b.textContent="Send Message"})};

var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(function(){t.style.transitionDelay="0s"},900)}})},{threshold:.12});
document.querySelectorAll(".rev").forEach(function(el,i){el.style.transitionDelay=(i%4)*70+"ms";io.observe(el)});
