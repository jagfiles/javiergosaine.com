/* ═══════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════ */
const T = {
  es: {
    'nav.services':'Servicios','nav.sectors':'Rubros','nav.process':'Proceso','nav.cta':'Contacto',
    'hero.label':'Desarrollo de Software · Argentina · Remoto',
    'hero.h1':'Software que resuelve<br><em>problemas reales</em><br>de tu negocio.',
    'hero.desc':'Desarrollo <strong>sistemas web y aplicaciones a medida</strong> para clínicas, estudios jurídicos, comercios y pymes que quieren dejar de depender de Excel, WhatsApp y procesos manuales.',
    'hero.cta1':'Solicitar presupuesto →','hero.cta2':'Ver servicios',
    'prob.label':'¿Te identificás?','prob.title':'Estos son los<br><em>problemas</em><br>que resuelvo.',
    'prob.li1':'Tu negocio depende de planillas de Excel que ya nadie entiende',
    'prob.li2':'Coordinás turnos o pedidos por WhatsApp y algo siempre se pierde',
    'prob.li3':'No tenés visibilidad en tiempo real de tu stock, agenda o caja',
    'prob.li4':'Tus empleados hacen trabajo manual que podría automatizarse',
    'prob.li5':'Cada vez que crece el negocio, el caos crece también',
    'prob.li6':'Tenés datos valiosos dispersos en correos, cuadernos y hojas',
    'prob.li7':'Querés digitalizarte pero no sabés por dónde empezar',
    'prob.card.h':'Si tu negocio depende de Excel, puedo ayudarte a escalarlo.',
    'prob.card.p':'Construyo sistemas que centralizan la información, automatizan lo repetitivo y te dan control real sobre tu operación. Sin humo, sin costos innecesarios.',
    'prob.card.btn':'Contame tu caso →',
    'srv.label':'Servicios','srv.title':'Qué construyo<br>para vos.',
    'srv.lead':'No vendo tecnología. Vendo resultados: menos tiempo perdido, más control, mejores decisiones. La tecnología es el medio.',
    'srv1.h':'Sistemas web a medida','srv1.p':'Panel de administración, gestión de clientes, turnos, stock o facturación. Accesible desde cualquier dispositivo, sin instalar nada.',
    'srv2.h':'Aplicaciones mobile','srv2.p':'Apps para Android e iOS que permiten a tu equipo o clientes operar desde el celular: datos, consultas y notificaciones en tiempo real.',
    'srv3.h':'Automatización de procesos','srv3.p':'Identifico las tareas que consumen tiempo de tu equipo y las convierto en flujos automáticos: notificaciones, reportes, integraciones.',
    'srv4.h':'Sitios web profesionales','srv4.p':'Tu presencia digital: rápida, clara y orientada a que tus clientes entiendan qué hacés y te contacten. Landing pages y sitios institucionales.',
    'srv5.h':'Dashboards y reportes','srv5.p':'Visualizá ventas, agenda, rendimiento y stock en tiempo real. Tomás mejores decisiones cuando los datos están ordenados y visibles.',
    'srv6.h':'Migraciones y rescates','srv6.p':'¿Tenés un sistema viejo que ya no funciona? Modernizo, migro y documento. También rescato proyectos abandonados y los llevo a producción.',
    'srv7.h':'Sistemas para instituciones','srv7.p':'Gestión académica, administrativa y financiera para instituciones públicas y privadas. Alumnos, docentes, horarios, asistencia, pagos y reportes en un solo sistema, accesible desde cualquier dispositivo.',
    'srv7.demo':'Ver demo →',
    'sec.label':'Rubros','sec.title':'Trabajo con negocios<br><em>concretos</em>.','sec.lead':'No soy un generalista. Entiendo cómo funcionan estos sectores y qué les duele.',
    'sec1.h':'Clínicas y consultorios','sec1.tag':'"Tengo pacientes anotados en papel y se me cruzan los turnos."','sec1.p':'Sistema de turnos online, historial clínico digital, recordatorios automáticos y gestión de profesionales. Todo en un solo lugar, desde el celular.','sec1.f1':'Agenda inteligente por profesional','sec1.f2':'Historial de pacientes y evoluciones','sec1.f3':'Recordatorios automáticos por WhatsApp o email','sec1.f4':'Panel de facturación y cobranza',
    'sec2.h':'Estudios jurídicos','sec2.tag':'"Los expedientes están en carpetas y nunca sé en qué estado está cada caso."','sec2.p':'Gestión de expedientes, seguimiento de plazos y vencimientos, comunicación con clientes y generación de documentos. Todo trazado.','sec2.f1':'Base de expedientes y causas','sec2.f2':'Alertas de vencimientos legales','sec2.f3':'Portal de seguimiento para clientes','sec2.f4':'Gestión de honorarios y facturación',
    'sec3.h':'Comercios y mercados','sec3.tag':'"El stock lo controlo en Excel y siempre hay diferencias al cierre del día."','sec3.p':'Sistema de punto de venta, control de stock en tiempo real, catálogo digital, pedidos y reportes. Escalable desde un local hasta una cadena.','sec3.f1':'POS y caja diaria','sec3.f2':'Control de inventario y alertas de stock','sec3.f3':'Catálogo y pedidos online','sec3.f4':'Reportes de ventas y rentabilidad',
    'sec4.h':'Instituciones deportivas','sec4.tag':'"Las cuotas las cobro por mensaje y no sé quién está al día."','sec4.p':'Gestión de socios, cobro de cuotas, reserva de instalaciones e inscripciones a actividades. Para clubes que quieren operar como empresas.','sec4.f1':'Padrón de socios y estados de cuenta','sec4.f2':'Reservas de canchas y espacios','sec4.f3':'Inscripciones y torneos','sec4.f4':'Comunicaciones y novedades',
    'proof.q':'"Digitalizo procesos que hoy te hacen perder tiempo y dinero."','proof.s1':'Proyectos entregados','proof.s2':'Años de experiencia',
    'proc.label':'Proceso','proc.title':'Simple, directo<br>y <em>sin sorpresas</em>.','proc.lead':'Sabés qué esperar en cada momento, cuánto cuesta y cuándo termina.',
    'step1.h':'Diagnóstico gratuito','step1.p':'Hablamos 30 minutos. Me contás cómo trabaja hoy tu negocio y qué querés mejorar. Te doy una orientación honesta: si puedo ayudarte, cómo y a qué costo.',
    'step2.h':'Propuesta concreta','step2.p':'En 48 horas te mando una propuesta escrita: qué voy a construir, cómo va a funcionar, en cuánto tiempo y cuánto cuesta. Sin letra chica.',
    'step3.h':'Desarrollo iterativo','step3.p':'Trabajo en etapas y te muestro avances. Podés usar partes del sistema antes de que esté 100% terminado. El feedback es bienvenido.',
    'step4.h':'Entrega y soporte','step4.p':'El sistema queda en tu servidor o en la nube. Te capacito para usarlo y quedo disponible para ajustes y soporte. No desaparezco al cobrar.',
    'con.label':'Contacto','con.title':'Contame<br>tu proyecto.','con.p':'No hace falta tener todo definido. Con saber qué problema querés resolver y para qué rubro alcanza. Respondó en menos de 24 horas.',
    'con.f.nombre':'Nombre','con.f.email':'Email','con.f.rubro':'Rubro de tu negocio','con.f.rubro0':'Seleccioná un rubro',
    'con.f.r1':'Clínica / Consultorio','con.f.r2':'Estudio jurídico','con.f.r3':'Comercio / Mercado','con.f.r4':'Institución deportiva','con.f.r5':'Otro',
    'con.f.msg':'¿Qué problema querés resolver?','con.f.ph':'Describí brevemente el problema actual de tu negocio y qué te gustaría tener...','con.f.btn':'Enviar mensaje →','con.f.note':'Te respondo en menos de 24 horas · Sin compromiso',
    'ok.h':'¡Mensaje recibido!','ok.p':'Te respondo en menos de 24 horas con una primera orientación.',
    'foot.copy':'Desarrollo de software para pymes · Argentina',
    'theme.light':'Claro','theme.dark':'Oscuro',
    'ticker':['Sistemas web','Apps mobile','Clínicas y consultorios','Estudios jurídicos','Comercios y mercados','Digitalización de procesos','Full Stack · Node · React','Deploy en producción'],
  },
  en: {
    'nav.services':'Services','nav.sectors':'Industries','nav.process':'Process','nav.cta':"Let's talk",
    'hero.label':'Software Development · Argentina · Remote',
    'hero.h1':'Software that solves<br><em>real problems</em><br>in your business.',
    'hero.desc':'I build <strong>custom web systems and applications</strong> for clinics, law firms, retailers, and SMBs that want to stop relying on Excel, WhatsApp, and manual processes.',
    'hero.cta1':'Request a quote →','hero.cta2':'View services',
    'prob.label':'Sound familiar?','prob.title':'These are the<br><em>problems</em><br>I solve.',
    'prob.li1':'Your business runs on spreadsheets that nobody fully understands anymore',
    'prob.li2':'You manage appointments or orders over WhatsApp and things always fall through the cracks',
    'prob.li3':'You have no real-time visibility of your stock, schedule, or cash flow',
    'prob.li4':'Your team does repetitive manual work that could easily be automated',
    'prob.li5':'Every time the business grows, the chaos grows with it',
    'prob.li6':'Valuable data is scattered across emails, notebooks, and spreadsheets',
    'prob.li7':"You want to go digital but don't know where to start",
    'prob.card.h':'If your business runs on Excel, I can help you scale it.',
    'prob.card.p':"I build systems that centralize information, automate repetitive tasks, and give you real control over your operation. No fluff, no unnecessary costs.",
    'prob.card.btn':'Tell me about your case →',
    'srv.label':'Services','srv.title':'What I build<br>for you.',
    'srv.lead':"I don't sell technology. I sell results: less wasted time, more control, better decisions. Technology is just the means.",
    'srv1.h':'Custom web systems','srv1.p':'Admin panels, client management, appointments, inventory, billing. Accessible from any device, nothing to install.',
    'srv2.h':'Mobile applications','srv2.p':'Android and iOS apps that let your team or clients operate from their phone: data entry, queries, and real-time notifications.',
    'srv3.h':'Process automation','srv3.p':"I identify the tasks consuming your team's time and turn them into automated workflows: notifications, reports, integrations.",
    'srv4.h':'Professional websites','srv4.p':'Your digital presence: fast, clear, and built to make potential clients understand what you do and get in touch. Landing pages and institutional sites.',
    'srv5.h':'Dashboards & reports','srv5.p':'Visualize sales, schedule, performance, and stock in real time. You make better decisions when data is organized and visible.',
    'srv6.h':'Migrations & rescues','srv6.p':"Got an old system that's barely working? I modernize, migrate, and document it. I also rescue abandoned projects and bring them to production.",
    'srv7.h':'Systems for institutions','srv7.p':'Academic, administrative and financial management for public and private institutions. Students, teachers, schedules, attendance, payments and reports — all in one system, accessible from any device.',
    'srv7.demo':'View demo →',
    'sec.label':'Industries','sec.title':'I work with<br><em>specific businesses</em>.','sec.lead':"I'm not a generalist. I understand how these sectors operate and what their pain points are.",
    'sec1.h':'Clinics & medical offices','sec1.tag':'"Patients are written in a notebook and appointments keep overlapping."','sec1.p':'Online booking system, digital patient records, automatic reminders, and staff management. All in one place, from your phone.','sec1.f1':'Smart per-practitioner scheduling','sec1.f2':'Patient history and clinical notes','sec1.f3':'Automatic reminders via WhatsApp or email','sec1.f4':'Billing and payment dashboard',
    'sec2.h':'Law firms','sec2.tag':'"Case files are in folders and I never know the status of each case."','sec2.p':'Case file management, deadline tracking, client communication, and document generation. Everything traced and organized.','sec2.f1':'Case and file database','sec2.f2':'Legal deadline alerts','sec2.f3':'Client-facing status portal','sec2.f4':'Fee and billing management',
    'sec3.h':'Retail & markets','sec3.tag':'"I track stock in Excel and there\'s always discrepancies at end of day."','sec3.p':'Point-of-sale system, real-time inventory control, digital catalog, orders, and sales reports. Scalable from one store to a chain.','sec3.f1':'POS and daily cash register','sec3.f2':'Inventory control and stock alerts','sec3.f3':'Online catalog and orders','sec3.f4':'Sales and profitability reports',
    'sec4.h':'Sports clubs','sec4.tag':'"I collect membership fees via text and I never know who\'s paid."','sec4.p':'Member management, fee collection, facility booking, and activity registration. For clubs that want to operate like a business.','sec4.f1':'Member registry and account status','sec4.f2':'Court and facility reservations','sec4.f3':'Registrations and tournaments','sec4.f4':'Communications and announcements',
    'proof.q':'"I digitize the processes that are costing you time and money."','proof.s1':'Projects delivered','proof.s2':'Years of experience',
    'proc.label':'Process','proc.title':'Simple, direct,<br>and <em>no surprises</em>.','proc.lead':"You'll know what to expect at every stage, how much it costs, and when it ends.",
    'step1.h':'Free diagnosis','step1.p':"We talk for 30 minutes. You tell me how your business works today and what you want to improve. I give you honest guidance: whether I can help, how, and at what cost.",
    'step2.h':'Concrete proposal','step2.p':"Within 48 hours I send you a written proposal: what I'll build, how it will work, how long it will take, and what it costs. No hidden terms.",
    'step3.h':'Iterative development','step3.p':"I work in stages and show you progress. You can start using parts of the system before it's 100% complete. Feedback is always welcome.",
    'step4.h':'Delivery & support','step4.p':"The system lives on your server or in the cloud. I train you to use it and stay available for adjustments and support. I don't vanish after payment.",
    'con.label':'Contact','con.title':'Tell me about<br>your project.','con.p':"You don't need to have everything figured out. Just knowing what problem you want to solve is enough to get started. I respond within 24 hours.",
    'con.f.nombre':'Name','con.f.email':'Email','con.f.rubro':'Your industry','con.f.rubro0':'Select an industry',
    'con.f.r1':'Clinic / Medical office','con.f.r2':'Law firm','con.f.r3':'Retail / Market','con.f.r4':'Sports club','con.f.r5':'Other',
    'con.f.msg':'What problem do you want to solve?','con.f.ph':"Briefly describe your current business problem and what you'd like to have...",'con.f.btn':'Send message →','con.f.note':'I respond within 24 hours · No commitment',
    'ok.h':'Message received!','ok.p':"I'll respond within 24 hours with initial guidance.",
    'foot.copy':'Custom software for SMBs · Argentina',
    'theme.light':'Light','theme.dark':'Dark',
    'ticker':['Web systems','Mobile apps','Clinics & doctors','Law firms','Retail & markets','Process digitization','Full Stack · Node · React','Production deploy'],
  }
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let lang  = localStorage.getItem('lang')  || 'es';
let theme = localStorage.getItem('theme') || 'dark';

/* ═══════════════════════════════════════════
   THEME
═══════════════════════════════════════════ */
function applyTheme(t) {
  theme = t;
  localStorage.setItem('theme', t);
  document.documentElement.classList.toggle('light', t === 'light');
  const lbl  = document.getElementById('themeLbl');
  const icon = document.getElementById('themeIcon');
  if (t === 'light') {
    lbl.textContent = T[lang]['theme.dark'];
    icon.innerHTML = '<path d="M11 6.5A4.5 4.5 0 0 1 6.5 11 4.5 4.5 0 0 1 2 6.5c0-.9.3-1.8.7-2.5A4.5 4.5 0 0 0 11 6.5z" fill="currentColor" stroke="none"/>';
  } else {
    lbl.textContent = T[lang]['theme.light'];
    icon.innerHTML = '<circle cx="6.5" cy="6.5" r="3"/><path d="M6.5 1v1.5M6.5 10.5V12M1 6.5h1.5M10.5 6.5H12M2.6 2.6l1.1 1.1M9.3 9.3l1.1 1.1M9.3 3.7l-1.1 1.1M3.8 9.2l-1.1 1.1"/>';
  }
}
document.getElementById('themeBtn').addEventListener('click', () => {
  applyTheme(theme === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════════
   I18N
═══════════════════════════════════════════ */
function applyLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[l][key] !== undefined) el.innerHTML = T[l][key];
  });

  document.getElementById('langEs').classList.toggle('active', l === 'es');
  document.getElementById('langEn').classList.toggle('active', l === 'en');
  document.getElementById('themeLbl').textContent = theme === 'light' ? T[l]['theme.dark'] : T[l]['theme.light'];

  // ticker
  const track = document.querySelector('.t-track');
  const words = T[l]['ticker'];
  const doubled = [...words, ...words];
  track.innerHTML = doubled.map(w => `<span>${w}</span><span class="dot">✦</span>`).join('');

  // problems list
  document.querySelectorAll('.prob-list li').forEach((li, i) => {
    const k = `prob.li${i+1}`; if(T[l][k]) li.textContent = T[l][k];
  });

  // service cards (1-7)
  [1,2,3,4,5,6,7].forEach(n => {
    const card = document.querySelector(`.srv:nth-child(${n})`);
    if (!card) return;
    const h = card.querySelector('h3');
    const p = card.querySelector('p');
    const demo = card.querySelector('.demo-btn');
    if (h && T[l][`srv${n}.h`]) h.textContent = T[l][`srv${n}.h`];
    if (p && T[l][`srv${n}.p`]) p.textContent = T[l][`srv${n}.p`];
    if (demo && T[l][`srv${n}.demo`]) demo.textContent = T[l][`srv${n}.demo`];
  });

  // sector cards
  [1,2,3,4].forEach(n => {
    const card = document.querySelectorAll('.sec')[n-1];
    if (!card) return;
    const h = card.querySelector('h3'), tag = card.querySelector('.sec-tag'), p = card.querySelector('p');
    const lis = card.querySelectorAll('.sec-feats li');
    if (h)   h.textContent   = T[l][`sec${n}.h`]  || '';
    if (tag) tag.textContent = T[l][`sec${n}.tag`] || '';
    if (p)   p.textContent   = T[l][`sec${n}.p`]  || '';
    lis.forEach((li, i) => { const k = `sec${n}.f${i+1}`; if(T[l][k]) li.textContent = T[l][k]; });
  });

  // proof
  const pq = document.querySelector('.proof-q');
  if (pq) pq.innerHTML = `<em>${T[l]['proof.q']}</em>`;
  const pls = document.querySelectorAll('.pl');
  if (pls[0]) pls[0].textContent = T[l]['proof.s1'];
  if (pls[1]) pls[1].textContent = T[l]['proof.s2'];

  // steps
  [1,2,3,4].forEach(n => {
    const step = document.querySelectorAll('.step')[n-1];
    if (!step) return;
    const h = step.querySelector('h4'), p = step.querySelector('p');
    if (h) h.textContent = T[l][`step${n}.h`] || '';
    if (p) p.textContent = T[l][`step${n}.p`] || '';
  });

  // form
  const form = document.getElementById('cF');
  if (form) {
    const labels = form.querySelectorAll('label');
    ['con.f.nombre','con.f.email','con.f.rubro','con.f.msg'].forEach((k, i) => { if(labels[i]) labels[i].textContent = T[l][k]; });
    const opts = form.querySelectorAll('select option');
    ['con.f.rubro0','con.f.r1','con.f.r2','con.f.r3','con.f.r4','con.f.r5'].forEach((k, i) => { if(opts[i]) opts[i].textContent = T[l][k]; });
    const ta = form.querySelector('textarea');
    if (ta) ta.placeholder = T[l]['con.f.ph'] || '';
    const btn = form.querySelector('.btn-form');
    if (btn && !btn.disabled) btn.textContent = T[l]['con.f.btn'];
    const note = form.querySelector('.f-note');
    if (note) note.textContent = T[l]['con.f.note'];
  }
  const fok = document.getElementById('fOk');
  if (fok) {
    const h = fok.querySelector('h3'), p = fok.querySelector('p');
    if (h) h.textContent = T[l]['ok.h'];
    if (p) p.textContent = T[l]['ok.p'];
  }

  // footer
  const fp = document.querySelector('footer p');
  if (fp) fp.innerHTML = `© <span id="yr"></span> · ${T[l]['foot.copy']}`;
  document.getElementById('yr').textContent = new Date().getFullYear();
}

function setLang(l) { applyLang(l); }

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.getElementById('yr').textContent = new Date().getFullYear();
applyTheme(theme);
applyLang(lang);

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('sc', scrollY > 40), { passive: true });

// Steps highlight
const steps = document.querySelectorAll('.step');
const so = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { steps.forEach(s => s.classList.remove('on')); e.target.classList.add('on'); }
  });
}, { threshold: 0.6 });
steps.forEach(s => so.observe(s));

// Form
const cF = document.getElementById('cF');
const fOk = document.getElementById('fOk');
if (new URLSearchParams(location.search).get('sent') === '1') {
  cF.style.display = 'none'; fOk.style.display = 'block';
  history.replaceState({}, '', location.pathname);
}
cF.addEventListener('submit', () => {
  const b = cF.querySelector('.btn-form');
  b.textContent = (T[lang]['con.f.btn'] || 'Enviando').replace('→','').trim() + '…';
  b.disabled = true;
});