/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */

const SKILL_PILLS = [
  {t:'React.js',c:'gold'},{t:'Node.js',c:'gold'},{t:'MongoDB',c:'gold'},
  {t:'Express.js',c:'gold'},{t:'Socket.IO',c:'sky'},{t:'Redis',c:'sky'},
  {t:'Docker',c:'sky'},{t:'GitHub Actions',c:'sky'},
  {t:'Python',c:''},{t:'OpenCV',c:''},{t:'JavaScript',c:''},{t:'MySQL',c:''},
];

const SKILLS = [
  {n:'React.js',      cat:'Frontend',  l:80},
  {n:'Node.js',       cat:'Backend',   l:82},
  {n:'Express.js',    cat:'Backend',   l:82},
  {n:'MongoDB',       cat:'Database',  l:75},
  {n:'JavaScript',    cat:'Language',  l:88},
  {n:'MySQL',         cat:'Database',  l:72},
  {n:'Socket.IO',     cat:'Realtime',  l:70},
  {n:'Redis',         cat:'Caching',   l:65},
  {n:'Docker',        cat:'DevOps',    l:68},
  {n:'GitHub Actions',cat:'CI/CD',     l:65},
  {n:'Python',        cat:'Language',  l:65},
  {n:'OpenCV / YOLO', cat:'Vision',    l:60},
  {n:'Three.js',      cat:'3D/WebGL',  l:72},
  {n:'C / C++',       cat:'Language',  l:60},
];

const PROJECTS = [
  {
    num:'01', featured:true,
    badge:'Featured Quest',
    title:"Tasuke'26",
    desc:'Multi-domain SaaS platform with computer vision pipeline, real-time video tracking, and pose classification under 150ms latency. Built with a 3-student team. Full CI/CD via GitHub Actions and containerized microservices.',
    tags:['React','Node.js','MongoDB','Docker','OpenCV','YOLO','Socket.IO','Redis'],
    img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&auto=format&fit=crop&q=80',
    github:'https://github.com/Abhay14310',
    live:'https://tasuke26.vercel.app/',
  },
  {
    num:'02', featured:false,
    badge:'Completed',
    title:'E-Sports Nexus',
    desc:'Centralized e-sports platform for tournament hosting and team recruitment. Integrated Three.js 3D animations and a full content management system.',
    tags:['HTML','CSS','JavaScript','Three.js','Bootstrap'],
    img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    github:'https://github.com/Abhay14310/NexusIsland',
    live:'https://nexusisland.vercel.app/',
  },
  {
    num:'03', featured:false,
    badge:'Completed',
    title:'Community Q&A',
    desc:'Dynamic Q&A platform with relational MySQL database, REST API, and complex user-question-answer relationships with raw SQL optimization.',
    tags:['Node.js','Express.js','MySQL','EJS','REST API'],
    img:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    github:'https://github.com/Abhay14310',
    live:'',
  },
  {
    num:'04', featured:false,
    badge:'Side Quest',
    title:'Spotify Clone',
    desc:'Pixel-perfect Spotify UI clone with working music player controls. DOM manipulation and advanced CSS layout mastery.',
    tags:['JavaScript','HTML','CSS'],
    img:'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format&fit=crop&q=80',
    github:'https://github.com/Abhay14310/spotify-clone',
    live:'',
  },
  {
    num:'05', featured:false,
    badge:'Side Quest',
    title:'NexusIsland',
    desc:'Creative web experience — my first major college project. Focused on visual design, CSS animations, and front-end interactivity.',
    tags:['CSS','HTML','JavaScript'],
    img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    github:'https://github.com/Abhay14310/NexusIsland',
    live:'',
  },
   {
    num:'06', featured:false,
    badge:'In Progress',
    title:'Miorah Project',
    desc:'Ongoing project exploring new frameworks and concepts. Building on MERN fundamentals with new architecture patterns.',
    tags:['React','Node.js','MongoDB'],
    img:'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=80',
    github:'https://github.com/Abhay14310/Miorah-project',
    live:'',
  },
];

const EXPERIENCE = [
  {
    date:'2024 — Present',
    role:'MCA Student + Developer',
    co:'Ravenshaw University, Cuttack',
    bullets:[
      "Spearheading Tasuke'26 — a final-year multi-domain SaaS platform with a 3-student team",
      'Established CI/CD pipelines via GitHub Actions; containerized all services with Docker',
      'Built computer vision pipeline (OpenCV + YOLO) achieving <150ms real-time latency',
      'Implemented bidirectional data streaming via Socket.IO and Redis caching layer',
    ],
  },
  {
    date:'2021 — 2024',
    role:'BSc CS Graduate',
    co:'Gangadhar Meher University, Sambalpur',
    bullets:[
      'Built E-Sports Nexus platform with Three.js 3D UI and tournament management',
      'Developed Community Q&A platform using Node.js, Express.js, and MySQL',
      'Successfully defended thesis on Immersive Web Technologies featuring Nexus Island',
      'Mentored 10+ students in HTML, CSS, and JavaScript debugging',
    ],
  },
  {
    date:'2023 — 2024',
    role:'Tech Fest Event Organizer',
    co:'University Tech Fest',
    bullets:[
      'Managed a budget of ₹50,000 INR and coordinated all logistics',
      'Organized competitive programming, hackathon, and design events',
    ],
  },
];

const EDUCATION = [
  {icon:'🎓',deg:'Master of Computer Applications (MCA)',school:'Ravenshaw University, Cuttack',year:'Sep 2024 — Present',grade:'8.75 CGPA'},
  {icon:'💻',deg:'BSc Computer Science',school:'Gangadhar Meher University, Sambalpur',year:'Sep 2021 — May 2024',grade:'7.58 CGPA'},
  {icon:'📚',deg:'Class XII — CHSE',school:'Gangadhar Meher Higher Secondary School',year:'Sep 2019 — Mar 2021',grade:'86.67%'},
  {icon:'📖',deg:'Class X — CBSE',school:'Rashtriya Gopal Vidya Mandir, Sambalpur',year:'Apr 2018 — Mar 2019',grade:'87.67%'},
];

const ACHIEVEMENTS = [
  {icon:'📄',title:'Research Thesis — Immersive Web Technologies',desc:'Successfully defended a final-year thesis on Immersive Web Technologies featuring "Nexus Island" as the core practical demonstration. Submitted and communicated for publication.'},
  {icon:'🏸',title:'3× University Badminton Champion',desc:'Secured the University Badminton Championship title for three consecutive years, showcasing consistent high performance and competitive excellence.'},
  {icon:'🏏',title:'University Athlete — Badminton & Cricket',desc:'Represented the university in both Badminton and Cricket, demonstrating strong teamwork, communication, and leadership at the university level.'},
  {icon:'🎪',title:'Tech Fest Organizer — ₹50K Budget',desc:'Managed a budget of ₹50,000 INR and coordinated all logistics for the university tech fest, ensuring smooth execution of multiple competitive events.'},
  {icon:'👨‍🏫',title:'Student Mentor',desc:'Mentored 10+ students in debugging HTML, CSS, and JavaScript during class sessions and coding club practice — fostering a culture of peer learning.'},
  {icon:'🚀',title:'SaaS Platform Lead Developer',desc:"Led a 3-student team in building Tasuke'26 — a production-grade multi-domain SaaS with advanced computer vision, CI/CD, and containerized microservices."},
];

/* ════════ RENDER ════════ */

// Skill pills
document.getElementById('skill-pills').innerHTML =
  SKILL_PILLS.map(s=>`<span class="pill ${s.c}">${s.t}</span>`).join('');

// Skills table
const skt = document.getElementById('sk-table');
SKILLS.forEach(s=>{
  const tr = document.createElement('tr');
  tr.className = 'reveal';
  tr.innerHTML = `
    <td class="sk-name">${s.n}</td>
    <td class="sk-cat">${s.cat}</td>
    <td><div class="sk-bar-wrap"><div class="sk-bar" data-l="${s.l}"></div></div></td>
    <td class="sk-pct">${s.l}%</td>`;
  skt.appendChild(tr);
});

// Projects
const pg = document.getElementById('proj-grid');
PROJECTS.forEach(p=>{
  const d = document.createElement('div');
  d.className = 'proj-card reveal' + (p.featured?' featured':'');
  d.innerHTML = `
    <div class="proj-img-wrap">
      <img src="${p.img}" alt="${p.title}" loading="lazy"/>
      <div class="quest-badge${p.featured?' featured-badge':''}">${p.badge}</div>
      <div class="proj-num">${p.num}</div>
    </div>
    <div class="proj-body">
      <div class="proj-title">${p.title}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
      <div class="proj-footer">
        <div class="proj-links">
          ${p.github?`<a href="${p.github}" target="_blank" class="plink primary">GitHub ↗</a>`:''}
          ${p.live?`<a href="${p.live}" target="_blank" class="plink">Live ↗</a>`:''}
        </div>
      </div>
    </div>`;
  pg.appendChild(d);
});

// Experience
const el = document.getElementById('exp-list');
EXPERIENCE.forEach(e=>{
  const d = document.createElement('div');
  d.className = 'exp-item reveal';
  d.innerHTML = `
    <span class="exp-date">${e.date}</span>
    <div class="exp-role">${e.role}</div>
    <div class="exp-co">${e.co}</div>
    <ul class="exp-desc">${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
  el.appendChild(d);
});

// Education
document.getElementById('edu-grid').innerHTML =
  EDUCATION.map(e=>`
    <div class="edu-card reveal">
      <div class="edu-icon">${e.icon}</div>
      <div class="edu-deg">${e.deg}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-year">${e.year}</div>
      <div class="edu-grade">${e.grade}</div>
    </div>`).join('');

// Achievements
document.getElementById('ach-grid').innerHTML =
  ACHIEVEMENTS.map(a=>`
    <div class="ach-card reveal">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-title">${a.title}</div>
      <div class="ach-desc">${a.desc}</div>
    </div>`).join('');

// Intersection Observer — reveal on scroll & animate skill bars
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      const bar = e.target.querySelector('.sk-bar');
      if(bar) setTimeout(()=>{bar.style.width=bar.dataset.l+'%'},150);
    }
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Contact form handler
async function handleContact(){
  const btn = document.querySelector('.cf-submit');
  const status = document.getElementById('cf-status');
  const nameVal = document.getElementById('cf-name').value.trim();
  const emailVal = document.getElementById('cf-email').value.trim();
  const subVal = document.getElementById('cf-sub').value.trim();
  const msgVal = document.getElementById('cf-msg').value.trim();

  if(!nameVal || !emailVal || !subVal || !msgVal){
    status.textContent = '⚠️ Please fill out all fields.';
    status.style.color = '#ff6b6b';
    return;
  }

  try {
    btn.disabled = true;
    status.textContent = '✦ Sending message...';
    status.style.color = 'var(--gold)';

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameVal,
        email: emailVal,
        subject: subVal,
        message: msgVal
      })
    });

    const data = await res.json();
    if(res.ok && data.success){
      status.textContent = '✦ Message sent successfully!';
      status.style.color = '#2ecc71';
      // Reset form fields
      document.getElementById('cf-name').value = '';
      document.getElementById('cf-email').value = '';
      document.getElementById('cf-sub').value = '';
      document.getElementById('cf-msg').value = '';
    } else {
      status.textContent = `❌ Error: ${data.message || 'Failed to send.'}`;
      status.style.color = '#ff6b6b';
    }
  } catch(err) {
    console.error(err);
    status.textContent = '❌ Failed to send message. Please try again later.';
    status.style.color = '#ff6b6b';
  } finally {
    btn.disabled = false;
  }
}


// Custom cursor
const cur=document.getElementById('cur'), curR=document.getElementById('cur-r');
let mx=0,my=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function rf(){curR.style.left=mx+'px';curR.style.top=my+'px';requestAnimationFrame(rf)})();

/* ════════════════════════════════════════════
   THREE.JS — CoC Night Sky: Stars, Moon,
   Floating Gems, Magic Crystals
   NO dragon — replaced with village atmosphere
════════════════════════════════════════════ */
const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth,innerHeight);

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(70,innerWidth/innerHeight,.1,2000);
cam.position.set(0,0,50);

// ── STAR FIELD ──
const starCount = 3000;
const starPos = new Float32Array(starCount*3);
const starSize = new Float32Array(starCount);
for(let i=0;i<starCount;i++){
  starPos[i*3]   = (Math.random()-.5)*700;
  starPos[i*3+1] = (Math.random()-.5)*400;
  starPos[i*3+2] = (Math.random()-.5)*300 - 60;
  starSize[i]    = Math.random()*.9+.1;
}
const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position',new THREE.BufferAttribute(starPos,3));
const starMat = new THREE.PointsMaterial({size:.3,color:0xf0d880,transparent:true,opacity:.55,sizeAttenuation:true});
scene.add(new THREE.Points(starGeo,starMat));

// ── MOON — big warm CoC moon ──
const moonGeo = new THREE.SphereGeometry(5,32,32);
const moonMat = new THREE.MeshBasicMaterial({color:0xf0e080,transparent:true,opacity:.9});
const moon = new THREE.Mesh(moonGeo,moonMat);
moon.position.set(28,22,-70);
scene.add(moon);

const moonLight = new THREE.PointLight(0xf0c040,2,150);
moonLight.position.copy(moon.position);
scene.add(moonLight);

// Moon halo
const haloGeo = new THREE.SphereGeometry(7,32,32);
const haloMat = new THREE.MeshBasicMaterial({color:0xf0d060,transparent:true,opacity:.08,side:THREE.BackSide});
scene.add(new THREE.Mesh(haloGeo,haloMat)).position.copy(moon.position);

// ── LIGHTS ──
scene.add(new THREE.AmbientLight(0x0a0b15,4));
const dirLight = new THREE.DirectionalLight(0xf0b830,.6);
dirLight.position.set(5,15,10);
scene.add(dirLight);

// ── FLOATING CRYSTALS / GEM SHARDS (CoC style resources) ──
const crystalGroup = new THREE.Group();
const crystalColors = [0xf0b830, 0x5bc8fa, 0xc84040, 0x60c840, 0xe880e0];

function makeCrystal(color, x, y, z, scale=1){
  const g = new THREE.Group();
  // Octahedron = gem
  const geo = new THREE.OctahedronGeometry(scale,0);
  const mat = new THREE.MeshPhongMaterial({
    color, emissive:color, emissiveIntensity:.35,
    transparent:true, opacity:.8, shininess:200
  });
  g.add(new THREE.Mesh(geo,mat));
  // inner glow point
  const pl = new THREE.PointLight(color,.8,scale*8);
  g.add(pl);
  g.position.set(x,y,z);
  g._baseY = y;
  g._phase = Math.random()*Math.PI*2;
  g._speed = .3+Math.random()*.3;
  return g;
}

// Scatter crystals around scene
const crystalData = [
  {c:0xf0b830, x:-35, y:12, z:-25, s:1.2},
  {c:0x5bc8fa, x:32,  y:18, z:-30, s:1.5},
  {c:0xc84040, x:-20, y:-8, z:-15, s:.8},
  {c:0x60c840, x:45,  y:5,  z:-35, s:1.0},
  {c:0xe880e0, x:-45, y:8,  z:-40, s:.7},
  {c:0xf0b830, x:15,  y:25, z:-45, s:2.0},
  {c:0x5bc8fa, x:-10, y:-15,z:-20, s:.6},
  {c:0xc84040, x:38,  y:-10,z:-25, s:.9},
];
const crystals = crystalData.map(d=>{
  const c = makeCrystal(d.c,d.x,d.y,d.z,d.s);
  crystalGroup.add(c);
  return c;
});
scene.add(crystalGroup);

// ── FLOATING SWORD (replacing dragon) ──
const swordGroup = new THREE.Group();

// Blade
const blade = new THREE.Mesh(
  new THREE.BoxGeometry(.07,.07,5.5),
  new THREE.MeshPhongMaterial({color:0xd0e8ff,emissive:0x4488cc,emissiveIntensity:.9,shininess:250})
);
blade.rotation.z = Math.PI/2;
swordGroup.add(blade);

// Tip
const tip = new THREE.Mesh(
  new THREE.ConeGeometry(.05,.6,6),
  new THREE.MeshPhongMaterial({color:0xd0e8ff,emissive:0x88ccff,emissiveIntensity:.7})
);
tip.position.x = -3.05; tip.rotation.z = Math.PI/2;
swordGroup.add(tip);

// Guard
const guard = new THREE.Mesh(
  new THREE.BoxGeometry(.07,1.6,.14),
  new THREE.MeshPhongMaterial({color:0xf0b830,emissive:0x806010,emissiveIntensity:.5,shininess:150})
);
guard.position.x = 2.4;
swordGroup.add(guard);

// Grip
const grip = new THREE.Mesh(
  new THREE.CylinderGeometry(.065,.085,1.1,8),
  new THREE.MeshPhongMaterial({color:0x5a2812,shininess:40})
);
grip.rotation.z = Math.PI/2; grip.position.x = 3.1;
swordGroup.add(grip);

// Pommel (diamond shaped)
const pommel = new THREE.Mesh(
  new THREE.OctahedronGeometry(.22,0),
  new THREE.MeshPhongMaterial({color:0xf0b830,emissive:0x906010,emissiveIntensity:.7,shininess:200})
);
pommel.position.x = 3.75;
swordGroup.add(pommel);

const swordGlow = new THREE.PointLight(0x4488ff,1.4,10);
swordGlow.position.set(-2.5,0,0);
swordGroup.add(swordGlow);

swordGroup.position.set(22,10,-12);
swordGroup.rotation.z = -Math.PI/5;
scene.add(swordGroup);

// ── SHIELD (CoC theme) ──
const shieldGroup = new THREE.Group();

// Shield body
const shieldFront = new THREE.Mesh(
  new THREE.CylinderGeometry(2.2,1.8,.25,6), // hexagonal shield
  new THREE.MeshPhongMaterial({color:0x8b4400,emissive:0x3a1500,emissiveIntensity:.3,shininess:80})
);
shieldFront.rotation.x = Math.PI/2;
shieldGroup.add(shieldFront);

// Gold rim
const shieldRim = new THREE.Mesh(
  new THREE.TorusGeometry(2.1,.12,6,6),
  new THREE.MeshPhongMaterial({color:0xf0b830,emissive:0x806010,emissiveIntensity:.5,shininess:200})
);
shieldGroup.add(shieldRim);

// Gold cross emblem
const hBar = new THREE.Mesh(
  new THREE.BoxGeometry(1.8,.28,.3),
  new THREE.MeshPhongMaterial({color:0xf0b830,emissive:0xc08000,emissiveIntensity:.6,shininess:200})
);
shieldGroup.add(hBar);

const vBar = new THREE.Mesh(
  new THREE.BoxGeometry(.28,1.8,.3),
  new THREE.MeshPhongMaterial({color:0xf0b830,emissive:0xc08000,emissiveIntensity:.6,shininess:200})
);
shieldGroup.add(vBar);

shieldGroup.position.set(-26,5,-18);
shieldGroup.rotation.y = .6;
scene.add(shieldGroup);

const shieldLight = new THREE.PointLight(0xf0b830,.6,12);
shieldGroup.add(shieldLight);

// ── GOLD PARTICLE DUST ──
const dustCount = 120;
const dustPos = new Float32Array(dustCount*3);
const dustGeo = new THREE.BufferGeometry();
const dustState = [];
for(let i=0;i<dustCount;i++){
  dustPos[i*3]   = (Math.random()-.5)*80;
  dustPos[i*3+1] = (Math.random()-.5)*50;
  dustPos[i*3+2] = (Math.random()-.5)*30 - 20;
  dustState.push({vy:.01+Math.random()*.02, phase:Math.random()*Math.PI*2});
}
dustGeo.setAttribute('position',new THREE.BufferAttribute(dustPos,3));
const dustMat = new THREE.PointsMaterial({
  size:.2,color:0xf0b830,transparent:true,opacity:.4,
  blending:THREE.AdditiveBlending,depthWrite:false
});
scene.add(new THREE.Points(dustGeo,dustMat));

// ── RESIZE ──
window.addEventListener('resize',()=>{
  cam.aspect=innerWidth/innerHeight;
  cam.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
});

let mouseX=0,mouseY=0;
document.addEventListener('mousemove',e=>{
  mouseX=(e.clientX/innerWidth-.5)*2;
  mouseY=(e.clientY/innerHeight-.5)*2;
});

let scrollY=0;
window.addEventListener('scroll',()=>{scrollY=window.scrollY});

const clock = new THREE.Clock();

(function animate(){
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  // Stars slow drift
  scene.rotation.y = t*.002;

  // Moon bob
  moon.position.y = 22 + Math.sin(t*.15)*.4;
  moonLight.intensity = 1.8 + Math.sin(t*.4)*.3;

  // Crystals float
  crystals.forEach((c,i)=>{
    c.position.y = c._baseY + Math.sin(t*c._speed + c._phase)*1.5;
    c.rotation.y = t*c._speed*.7;
    c.rotation.x = t*c._speed*.4;
  });

  // Sword float
  swordGroup.position.y = 10 + Math.sin(t*.4)*2;
  swordGroup.rotation.z = -Math.PI/5 + Math.sin(t*.25)*.06;
  swordGroup.rotation.y = Math.sin(t*.18)*.15;
  swordGlow.intensity = 1.4+Math.sin(t*1.8)*.5;

  // Shield rotate slowly
  shieldGroup.position.y = 5 + Math.sin(t*.35+1)*1.8;
  shieldGroup.rotation.y = .6 + Math.sin(t*.2)*.1;
  shieldLight.intensity = .6+Math.sin(t*1.5)*.3;

  // Dust float upward
  const da = dustGeo.attributes.position.array;
  dustState.forEach((d,i)=>{
    da[i*3+1] += d.vy;
    da[i*3] += Math.sin(t+d.phase)*.005;
    if(da[i*3+1]>30){ da[i*3+1]=-25; da[i*3]=(Math.random()-.5)*80; }
  });
  dustGeo.attributes.position.needsUpdate=true;
  dustMat.opacity = .3+Math.sin(t*.8)*.1;

  // Camera parallax
  cam.position.x += (mouseX*3-cam.position.x)*.02;
  cam.position.y += (-mouseY*2-cam.position.y)*.02;
  cam.lookAt(0,5,0);

  renderer.render(scene,cam);
})();
