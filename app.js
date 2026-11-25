(function () {
  'use strict';

  const A = 'assets/';

  const ringsSVG = () => {
    const ring = (r, c, pct, cls) => `
      <circle class="track" cx="60" cy="60" r="${r}" stroke="${c}" />
      <circle class="fill ${cls}" cx="60" cy="60" r="${r}" stroke="${c}" pathLength="1000" style="--to:${Math.round(1000 * (1 - pct))}" transform="rotate(-90 60 60)" />`;
    return `<svg class="rings" viewBox="0 0 120 120" fill="none" stroke-width="13" stroke-linecap="round" aria-hidden="true">
      ${ring(50, '#fa114f', .82, 'm')}${ring(35, '#a6ff00', .68, 'e')}${ring(20, '#00f0ff', .9, 's')}</svg>`;
  };

  // Product compositions shared by cards and detail pages
  const stages = {
    se: () => `<div class="stage single"><img src="${A}watch-se.png" alt="Apple Watch SE 3" loading="lazy"></div>`,
    series: () => `<div class="stage single"><img src="${A}watch-series.png" alt="Apple Watch Series 12" loading="lazy"></div>`,
    ultra: () => `<div class="stage single"><img src="${A}watch-ultra.png" alt="Apple Watch Ultra 4" loading="lazy"></div>`,
    studio: () => `<div class="stage studio">
        <img class="bands" src="${A}band-trio.png" alt="Correas de distintos materiales" loading="lazy">
        <img class="case" src="${A}watch-series.png" alt="Caja de Apple Watch" loading="lazy"></div>`,
    acc: () => `<div class="stage acc">
        <img class="bands" src="${A}band-trio.png" alt="Correas" loading="lazy">
        <img class="charger" src="${A}charger.png" alt="Cargador magnético" loading="lazy"></div>`,
    fitness: () => `<div class="stage fitness">
        <img class="ultra" src="${A}watch-ultra.png" alt="Apple Watch durante un entrenamiento" loading="lazy">${ringsSVG()}</div>`,
    compare: () => `<div class="stage compare">
        <figure><img src="${A}watch-se.png" alt="" loading="lazy"><figcaption>SE 3</figcaption></figure>
        <figure><img src="${A}watch-series.png" alt="" loading="lazy"><figcaption>Series 12</figcaption></figure>
        <figure><img src="${A}watch-ultra.png" alt="" loading="lazy"><figcaption>Ultra 4</figcaption></figure></div>`
  };

  // Placeholder content for each category (to be replaced with final copy)
  const cats = [
    { slug: 'apple-watch-se-3', num: '01', name: 'Apple Watch SE 3', stage: 'se',
      desc: 'Todo lo esencial para comenzar a vivir una vida más activa y conectada.',
      hl: [
        ['sport', 'Deporte', 'Tu primer paso hacia más movimiento', 'Cierra tus anillos cada día y descubre cómo pequeños hábitos se convierten en grandes logros.'],
        ['health', 'Salud', 'Conoce mejor tu cuerpo', 'Sigue tu ritmo cardiaco, tu descanso y tu actividad diaria desde la muñeca.'],
        ['safe', 'Seguridad', 'Tranquilidad para ti y los tuyos', 'Funciones de emergencia y comunicación pensadas para estar siempre localizable.']
      ] },
    { slug: 'apple-watch-series-12', num: '02', name: 'Apple Watch Series 12', stage: 'series',
      desc: 'Tecnología, salud y rendimiento para acompañarte cada día.',
      hl: [
        ['health', 'Salud', 'Tu bienestar, a simple vista', 'Información sobre tu cuerpo presentada de forma clara para que tomes mejores decisiones.'],
        ['sport', 'Deporte', 'Entrena con más intención', 'Métricas de entrenamiento y motivación para cada tipo de actividad.'],
        ['safe', 'Conectividad', 'Conectado con lo que importa', 'Llamadas, mensajes y notificaciones sin necesidad de sacar el iPhone.']
      ] },
    { slug: 'apple-watch-ultra-4', num: '03', name: 'Apple Watch Ultra 4', stage: 'ultra',
      desc: 'Diseñado para quienes buscan superar sus límites y explorar más.',
      hl: [
        ['sport', 'Aventura', 'Hecho para ir más lejos', 'Un diseño robusto y deportivo, pensado para la montaña, el mar y la carrera de fondo.'],
        ['health', 'Rendimiento', 'Datos que te empujan', 'Información detallada para entender tu esfuerzo y mejorar en cada sesión.'],
        ['safe', 'Seguridad', 'Preparado para lo inesperado', 'Herramientas de seguridad para explorar con confianza, estés donde estés.']
      ] },
    { slug: 'watch-studio', num: '04', name: 'Watch Studio', stage: 'studio',
      desc: 'Combina estilos, materiales y correas para crear tu propio Apple Watch.',
      hl: [
        ['style', 'Paso 1', 'Elige tu caja', 'Escoge el tamaño, el material y el acabado que mejor van contigo.'],
        ['style', 'Paso 2', 'Encuentra tu correa', 'Deportiva, tejida, de metal o de cuero: una para cada momento del día.'],
        ['style', 'Paso 3', 'Hazlo tuyo', 'Combina colores y crea un Apple Watch que hable de tu estilo.']
      ] },
    { slug: 'accesorios', num: '05', name: 'Accesorios', stage: 'acc',
      desc: 'Personaliza tu experiencia con accesorios para cada momento.',
      hl: [
        ['style', 'Correas', 'Cambia de estilo en segundos', 'Intercambia tu correa según la ocasión: entrenamiento, trabajo o fin de semana.'],
        ['safe', 'Carga', 'Siempre listo', 'Cargadores y bases para mantener tu Apple Watch con energía en casa o de viaje.'],
        ['health', 'Protección', 'Cuida tu reloj', 'Accesorios que acompañan tu ritmo de vida sin perder elegancia.']
      ] },
    { slug: 'apple-fitness-plus', num: '06', name: 'Apple Fitness+', stage: 'fitness',
      desc: 'Entrena, encuentra tu motivación y disfruta de nuevas formas de moverte.',
      hl: [
        ['sport', 'Entrena', 'Sesiones para todos los niveles', 'Fuerza, yoga, HIIT, baile y mucho más, con entrenadores que te guían paso a paso.'],
        ['health', 'Motivación', 'Tus métricas en pantalla', 'Ve tu progreso en tiempo real mientras entrenas y celebra cada anillo cerrado.'],
        ['safe', 'Bienestar', 'Muévete a tu manera', 'Meditaciones y sesiones cortas para encontrar el equilibrio cada día.']
      ] },
    { slug: 'comparar', num: '07', name: 'Comparar', stage: 'compare', wide: true,
      desc: 'Compara los modelos y descubre cuál se adapta mejor a ti.',
      hl: [
        ['sport', 'Para empezar', 'Apple Watch SE 3', 'Todo lo esencial para una vida más activa y conectada.'],
        ['health', 'Para cada día', 'Apple Watch Series 12', 'Tecnología, salud y rendimiento en equilibrio.'],
        ['safe', 'Para ir más lejos', 'Apple Watch Ultra 4', 'Robustez y prestaciones para superar tus límites.']
      ] }
  ];

  const order = ['apple-watch-series-12', 'apple-watch-ultra-4', 'apple-watch-se-3', 'watch-studio', 'comparar', 'accesorios', 'apple-fitness-plus'];
  const navInfo = {
    'apple-watch-series-12': { icon: 'series', label: 'Apple Watch<br>Series 12', tag: 'Nuevo' },
    'apple-watch-ultra-4': { icon: 'ultra', label: 'Apple Watch<br>Ultra 4', tag: 'Nuevo' },
    'apple-watch-se-3': { icon: 'se', label: 'Apple Watch<br>SE 3' },
    'watch-studio': { icon: 'studio', label: 'Watch Studio' },
    'comparar': { icon: 'compare', label: 'Comparar' },
    'accesorios': { icon: 'acc', label: 'Accesorios' },
    'apple-fitness-plus': { icon: 'fitness', label: 'Apple Fitness+' }
  };
  cats.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

  const chevron = `<svg viewBox="0 0 9 15" aria-hidden="true"><path d="M7.5 1.5 1.5 7.5l6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const icons = {
    sport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="4" r="2"/><path d="m7 21 3-6 3 2v5"/><path d="M5 11l3-4 4 1 3 4 3 1"/></svg>`,
    health: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/><path d="M3 12h4l2-3 3 6 2-3h7"/></svg>`,
    safe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="M9 12.5c1.7-1.7 4.3-1.7 6 0"/><path d="M11 15h2"/></svg>`
  };

  const d = (i) => `style="animation-delay:${i}s"`;

  function cover() {
    return `<section class="page cover">
      <h1 class="headline reveal" ${d(.12)}><span>Muévete.</span> <span>Cuídate.</span> <span>Conéctate.</span></h1>
      <figure class="hero-figure">
        <img src="${A}hero-trio.png" width="1710" height="860" alt="Tres modelos de Apple Watch con sus pantallas encendidas">
      </figure>
      <h2 class="subtitle reveal" ${d(.45)}>Mucho más que un reloj.</h2>
      <p class="lead reveal" ${d(.55)}>Descubre cómo Apple Watch transforma tu manera de entrenar, cuidar tu salud y mantenerte conectado con lo que más importa.</p>
      <div class="reveal" ${d(.65)}>
        <a class="cta" href="#/descubre">Descubre todo lo que puede hacer por ti <span class="arrow" aria-hidden="true">→</span></a>
      </div>
    </section>`;
  }

  function menu() {
    const items = cats.map((c, i) => {
      const n = navInfo[c.slug];
      return `
        <li class="reveal" ${d(.15 + i * .06)}>
          <a class="nav-item" href="#/categoria/${c.slug}">
            <span class="nav-icon"><img src="${A}nav-${n.icon}.png" alt="" width="131" height="148"></span>
            <span class="nav-name">${n.label}</span>
            ${n.tag ? `<span class="nav-tag">${n.tag}</span>` : ''}
          </a>
        </li>`;
    }).join('');
    return `<section class="page store">
      <nav class="topbar">
        <a class="back" href="#/">${chevron} Portada</a>
        <span class="brand"></span>
        <span style="width:84px"></span>
      </nav>
      <div class="store-wrap">
        <h1 class="store-title reveal" ${d(.05)}>Apple Watch</h1>
        <ul class="store-nav" aria-label="Categorías">${items}</ul>
      </div>
    </section>`;
  }

  // ---------- Apple Watch Series 12: página oscura + carruseles verticales ----------
  const s12Sets = {
    descubre: {
      title: 'Descubre.', ratio: '2520 / 1224',
      slides: [
        { img: 's12-1.jpg', strong: 'Cada latido cuenta.', text: 'Descubre una nueva forma de conocer tu salud con un sistema de detección cardíaca de alta precisión.', alt: 'Apple Watch midiendo la frecuencia cardíaca y su sensor posterior' },
        { img: 's12-2.jpg', strong: '', text: 'Descubre tu puntuación de disposición personal y comprende mejor cómo prepararte para cada jornada.', alt: 'Pantalla de disposición personal en Apple Watch' },
        { img: 's12-3.jpg', strong: 'Tu cuerpo habla. Aprende a escucharlo.', text: 'Descubre información sobre tu estrés y recuperación a través de las mediciones de VFC.', alt: 'Apple Watch en la muñeca mostrando datos de VFC', photo: true },
        { img: 's12-4.jpg', strong: '', text: 'Un nuevo sensor óptico permite realizar mediciones de frecuencia cardíaca cada cinco segundos.', alt: 'Esfera con gráfico de frecuencia cardíaca' },
        { img: 's12-5.jpg', strong: '', text: 'Siri y la Inteligencia de Audio hacen que cada interacción sea más sencilla.', alt: 'Apple Watch con Siri en pantalla' },
        { img: 's12-6.jpg', strong: 'Cuida de ti en cada momento.', text: 'Conoce tu salud, mantente activo y disfruta de mayor tranquilidad gracias a sus funciones de seguridad.', alt: 'Botón de emergencia SOS' }
      ]
    },
    registros: {
      title: 'Registros avanzados de datos de salud y fitness', ratio: '2296 / 1296',
      slides: [
        { img: 'reg-entrenamientos.jpg', label: 'Entrenamientos', strong: 'App Entrenamiento. Entrenada para seguir todos tus movimientos.', text: 'Desde bádminton y pilates hasta natación y ciclismo, el Apple Watch está más que preparado para seguirte el ritmo en la app Entrenamiento. Registra tu tiempo, frecuencia cardiaca y calorías. Es hora de mostrar quién manda en tu próximo entrenamiento de fuerza.', alt: 'Entrenamiento de fuerza con Apple Watch', photo: true },
        { img: 'reg-carrera.jpg', label: 'Carrera', strong: 'Tu compañero perfecto para correr.', text: 'El Apple Watch Series 12 te ayuda a llevar tus entrenamientos al siguiente nivel. Ponte objetivos de tiempo y distancia con Ritmo o usa Ruta de la Carrera para superar tus mejores marcas. ¿Quieres correr a tu manera? Crea un Entrenamiento Personalizado con fases de calentamiento, intervalos de recuperación y mucho más.', alt: 'Persona corriendo en una pista con Apple Watch', photo: true },
        { img: 'reg-pasos.jpg', label: 'Conteo de pasos', strong: 'No pierdas el paso.', text: 'Ya sea que salgas a dar un paseo en la mañana o corras en la caminadora por la noche, el Apple Watch Series 12 cuenta tus pasos y mide la distancia de manera muy precisa durante todo el día. Y ahora puedes ver fácilmente el número de pasos desde la carátula.', alt: 'Carátula con el conteo de pasos', photo: true, soft: true },
        { img: 'reg-buddy.jpg', label: 'Workout Buddy', strong: 'Mejora Workout Buddy, mejora tu progreso.', text: 'Recibe un mundo de motivación cuando más la necesites, con nuevos datos sobre tu ritmo, distancia y progreso, todo en tiempo real durante tu entrenamiento. Y ahora puedes dejar el iPhone en casa. Sólo necesitas tu Apple Watch con conexión celular.', alt: 'Grupo corriendo con Apple Watch', photo: true },
        { img: 'reg-agua.jpg', label: 'Natación', strong: 'Resistencia al agua y al polvo.', text: 'El Apple Watch Series 12 tiene una clasificación WR 50M, ideal para nadar en una piscina o en el mar hasta 6 metros de profundidad. Y su clasificación IP6X lo protege completamente contra el polvo.', alt: 'Persona nadando bajo el agua con Apple Watch', photo: true }
      ]
    }
  };

  s12Sets.escuchate = {
    title: 'Escúchate.', ratio: '2520 / 1224',
    slides: [
      { img: 'esc-ciclo.jpg', label: 'Control del Ciclo', strong: 'Haz un seguimiento de los cambios en tu ciclo y compréndelos.', text: 'Control del Ciclo te acompaña en el cuidado de tu salud menstrual. Registra tu ciclo y recibe pronósticos sobre tu periodo menstrual, periodo fértil y estimaciones retrospectivas de ovulación. Control del Ciclo puede enviarte notificaciones cuando los registros de tus ciclos muestren indicios de perimenopausia, y brindarte apoyo durante la menopausia. A tu lado en un nuevo periodo de tu vida.', alt: 'Dos Apple Watch con la app Control del Ciclo', split: 'fit-contain', bg: '#1d1d1f' },
      { img: 'esc-hipertension.jpg', label: 'Hipertensión', strong: 'Recibe notificaciones de presión arterial alta crónica.', text: 'El Series 12 puede avisarte si identifica patrones de hipertensión. ¿Cómo funciona? Durante un periodo de 30 días, el sensor óptico analiza cómo responden los vasos sanguíneos al latido del corazón y envía los datos obtenidos a un algoritmo capaz de detectar una posible hipertensión.', alt: 'Notificación de posible hipertensión', split: 'fit-contain', bg: '#1b1b1d' },
      { img: 'esc-oxigeno.jpg', label: 'Oxígeno en sangre', strong: 'Mide tu oxígeno en sangre. Una innovación muy alentadora.', text: 'El Apple Watch tiene una app y un sensor con los que mide tu nivel de oxígeno en la sangre cuando quieras y hace lecturas en segundo plano. Día y noche.', alt: 'Apple Watch midiendo el oxígeno en sangre', split: 'fit-contain', bg: '#1d1d1f' },
      { img: 'esc-ecg.jpg', label: 'ECG', strong: 'Síguele el ritmo a tu corazón con la app ECG.', text: 'Con las funcionalidades para el seguimiento de la salud cardiaca en el Apple Watch Series 12, puedes detectar indicios de fibrilación auricular (FA) directamente desde tu muñeca usando la app ECG para generar un electrocardiograma de una sola derivación.', alt: 'Persona usando la app ECG en su Apple Watch', split: 'fit-cover', bg: '#000' }
    ]
  };

  const plusIcon = `<span class="dk-plus" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></span>`;

  function carousel(id, c) {
    const set = s12Sets[id];
    const slides = set.slides.map((x, k) => x.html ? `
      <article class="dc-card custom" data-i="${k}" style="--r:${set.ratio}"><div class="dc-text dc-custom">${x.html}</div></article>` : `
      <article class="dc-card${x.shift ? ' shift' : ''}${x.photo ? ' photo' : ''}${x.soft ? ' soft' : ''}${x.split ? ' split ' + x.split : ''}${x.light ? ' light' : ''}${x.cls ? ' ' + x.cls : ''}" data-i="${k}" style="--r:${set.ratio}${x.bg ? ';--bg:' + x.bg : ''}${x.css ? ';' + x.css : ''}">
        <img src="${A}${x.img}" alt="${x.alt}" loading="lazy">
        <div class="dc-text">${x.label ? `<span class="dc-label">${x.label}</span>` : ''}<p>${x.strong ? `<strong>${x.strong}</strong> ` : ''}${x.text}</p></div>
      </article>`).join('');
    const dots = set.slides.map((_, k) => `<button class="dc-dot" data-go="${k}" aria-label="Ir a la tarjeta ${k + 1}"></button>`).join('');
    return `<div class="dc${set.light ? ' dc-light' : ''}" data-set="${id}" role="dialog" aria-modal="true" aria-label="${set.title}" hidden>
        <div class="dc-head">
          <div><span class="dc-kicker">${c.name}</span><h2>${set.title}</h2></div>
          <button class="dc-close" type="button" data-close-dc aria-label="Cerrar"><svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5 5 15" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>
        </div>
        <div class="dc-scroll">${slides}<div class="dc-end"><button class="dc-done" type="button" data-close-dc>Volver a ${c.name.replace('Apple Watch ', '')}</button></div></div>
        <div class="dc-rail" aria-label="Navegación del carrusel">
          <button class="dc-arrow" data-step="-1" aria-label="Anterior"><svg viewBox="0 0 20 20"><path d="m5 12 5-5 5 5" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="dc-dots">${dots}</div>
          <button class="dc-arrow" data-step="1" aria-label="Siguiente"><svg viewBox="0 0 20 20"><path d="m5 8 5 5 5-5" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>`;
  }

  function series12(c, prev, next) {
    return `<section class="page detail dark">
      <nav class="topbar dark">
        <a class="back" href="#/descubre">${chevron} Apple Watch</a>
        <span class="brand">${c.name}</span>
        <div class="right"><a class="ghost" href="#/">Portada</a></div>
      </nav>
      <h1 class="sr-only">${c.name}</h1>
      <div class="dk-wrap">
        <button class="dk-box milanesa reveal" ${d(.28)} type="button" data-open-dc="descubre" aria-haspopup="dialog">
          <img src="${A}s12-milanesa.jpg" alt="" aria-hidden="true">
          <span class="dk-copy">
            <span class="dk-title">Descubre.</span>
            <span class="dk-sub">Explora todo lo que Apple Watch Series 12 puede hacer por ti.</span>
          </span>
          ${plusIcon}
        </button>
        <button class="dk-box video reveal" ${d(.4)} type="button" data-open-dc="registros" aria-haspopup="dialog">
          <video src="${A}s12-intro.mp4" poster="${A}s12-intro-poster.jpg" autoplay muted loop playsinline aria-hidden="true"></video>
          <span class="dk-copy">
            <span class="dk-title sm">Registros avanzados de datos de salud y fitness</span>
            <span class="dk-sub">Entrenamientos, carrera, conteo de pasos y Workout Buddy.</span>
          </span>
          ${plusIcon}
        </button>
        <button class="dk-box escuchate reveal" ${d(.5)} type="button" data-open-dc="escuchate" aria-haspopup="dialog">
          <img src="${A}esc-montana.jpg" alt="" aria-hidden="true">
          <span class="dk-copy">
            <span class="dk-title">Escúchate.</span>
            <span class="dk-sub">Apple Watch te ayuda a escuchar las señales de tu cuerpo y comprender mejor tu salud.</span>
          </span>
          ${plusIcon}
        </button>
      </div>
      <nav class="pnav dark" aria-label="Otras categorías">
        <a href="#/categoria/${prev.slug}"><span class="lbl">‹ Anterior</span><span class="nm">${prev.name}</span></a>
        <a class="home-btn" href="#/descubre">Ver todas las categorías</a>
        <a class="next" href="#/categoria/${next.slug}"><span class="lbl">Siguiente ›</span><span class="nm">${next.name}</span></a>
      </nav>
      ${carousel('descubre', c)}
      ${carousel('registros', c)}
      ${carousel('escuchate', c)}
    </section>`;
  }

  // ---------- Apple Watch Ultra 4 ----------
  s12Sets['u4-descubre'] = {
    title: 'Descubre.', ratio: '2520 / 1224',
    slides: [
      { img: 'u4-battery.jpg', strong: '', text: 'La batería de mayor duración en un Apple Watch. Ahora con hasta <span class="hl-green">45 horas</span> de registro de Entrenamiento Prolongado Máximo.', alt: 'Persona corriendo con Apple Watch Ultra', photo: true },
      { img: 'u4-readiness.jpg', strong: '', text: 'Una nueva puntuación de disposición personal te dice si es hora de darlo todo o de darte un break.', alt: 'Tres Apple Watch Ultra con la puntuación de disposición', shift: true },
      { img: 'u4-hrv.jpg', strong: '', text: 'Las mediciones más frecuentes de la Variabilidad de la Frecuencia Cardiaca (VFC) ayudan a obtener información valiosa sobre cómo gestionas el estrés y la recuperación.', alt: 'Apple Watch Ultra mostrando la VFC', photo: true },
      { img: 'u4-siri.jpg', strong: '', text: 'Haz que cada día sea más simple con Siri AI y más seguro con Inteligencia de Audio. Todo gracias al chip S11.', alt: 'Dos Apple Watch Ultra con Siri e Inteligencia de Audio', shift: true }
    ]
  };


  s12Sets['u4-registro'] = {
    title: 'Registro avanzado de salud y fitness', ratio: '2520 / 1224',
    slides: [
      { img: 'u4r-disposicion.jpg', split: 'fit-contain', bg: '#000', strong: 'Consejos a tu disposición.', text: 'Una nueva funcionalidad de disposición te ayuda a determinar tu capacidad para afrontar el día con una sencilla puntuación. Cada mañana, tu puntaje se calcula analizando tu actividad reciente, signos vitales y sueño, y se va ajustando a lo largo del día. Ya sea que te estés preparando para una carrera o que tengas un día lleno de compromisos, podrás enfocar toda tu energía en lo más importante.', alt: 'Tres Apple Watch Ultra con la puntuación de disposición' },
      { img: 'u4r-vfc.jpg', split: 'fit-contain', bg: '#000', strong: 'VFC. Hora de revisar algo importante.', text: 'La variabilidad de la frecuencia cardiaca (VFC) es un indicador de cómo tu cuerpo gestiona el estrés y la recuperación. El Apple Watch Ultra 4 mide la VFC cada cinco minutos y, cada cinco segundos, realiza lecturas de la frecuencia cardiaca en segundo plano. Así tienes un panorama mucho más claro de tu salud general.<span class="dc-stats"><span><b>60 veces</b>más lecturas de la frecuencia cardiaca en segundo plano que el Ultra 3</span><span><b>24 veces</b>más lecturas de la VFC que el Ultra 3</span></span>', alt: 'Apple Watch Ultra mostrando la VFC de recuperación' },
      { img: 'u4r-carrera.jpg', light: true, label: 'Tus datos corren a tu favor.', text: 'El Ultra 4 va un paso más allá para que puedas registrar y analizar tus entrenamientos de carrera con gran precisión. Con métricas en tiempo real, información aún más detallada sobre tus entrenamientos y tu rendimiento, y palabras de aliento personalizadas, tendrás más motivación que nunca para alcanzar tus metas.', alt: 'Persona corriendo con Apple Watch Ultra' },
      { html: '<div class="rx-head"><h3 class="rx-title"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M27 9 15 27h8l-3 12 13-19h-8l2-11z" fill="currentColor"/></svg>Resistencia extrema.</h3><p class="rx-p">Gracias a algoritmos de entrenamiento más eficientes y optimizados, el Ultra 4 ofrece <strong>una batería que dura mucho más.</strong> Además de brindarte hasta 50 horas de batería para uso diario, ahora te ofrece hasta 18 horas de registro de entrenamiento estándar y hasta 45 horas de registro de Entrenamiento Prolongado Máximo. Tiempo suficiente para terminar una carrera de 160 km.</p></div><div class="rx-cols"><div class="rx-col"><h4>Batería en el uso diario</h4><p><span>Hasta</span><b>50 horas</b>de uso normal</p><p><span>Hasta</span><b>84 horas</b>con el modo Ahorrar Batería</p></div><div class="rx-col"><h4>Batería en entrenamientos</h4><p><span>Hasta</span><b>18 horas</b>de registro de entrenamiento estándar</p><p><span>Hasta</span><b>45 horas</b>de registro de Entrenamiento Prolongado Máximo</p></div></div>' },
      { img: 'u4r-agua.jpg', photo: true, strong: 'Resistencia al agua y al polvo.', text: 'Tiene una clasificación WR100 para practicar buceo recreativo hasta 40 metros y deportes acuáticos de alta velocidad, y una clasificación IP6X de resistencia al polvo.', alt: 'Nadador saliendo de la piscina con Apple Watch Ultra' }
    ]
  };

  s12Sets['u4-metricas'] = {
    title: 'Métricas.', ratio: '2520 / 1224',
    slides: [
      { img: 'u4m-sleep-score.jpg', split: 'fit-contain', bg: '#000', strong: 'Despierta con tu Puntuación de Sueño.', text: 'La calidad del sueño depende de diversos factores, como cuánto duermes, a qué hora te vas a dormir, las veces que te despiertas y el tiempo que pasas en cada fase del sueño. Cada noche, la funcionalidad Puntuación de Sueño analiza estos datos y calcula una clasificación y un puntaje para ayudarte a comprender la calidad de tu sueño y cómo hacerlo más reparador.', alt: 'Apple Watch Ultra con la Puntuación de Sueño' },
      { img: 'u4m-hrv.jpg', split: 'fit-contain', bg: '#000', strong: 'Una nueva perspectiva sobre la VFC.', text: 'Ahora la app Signos Vitales incluye la VFC para ayudarte a entender mejor los datos sobre estrés y recuperación. La VFC se mide cada cinco minutos, tanto de día como de noche.', alt: 'Apple Watch Ultra con la app Signos Vitales' },
      { img: 'u4m-cycle.jpg', split: 'fit-contain', bg: '#000', strong: 'Haz un seguimiento de los cambios en tu ciclo y compréndelos.', text: 'Control del Ciclo te acompaña en el cuidado de tu salud menstrual. Registra tu ciclo y recibe pronósticos sobre tu periodo menstrual, periodo fértil y estimaciones retrospectivas de ovulación. Control del Ciclo puede enviarte notificaciones cuando los registros de tus ciclos muestren indicios de perimenopausia, y brindarte apoyo durante la menopausia. A tu lado en un nuevo periodo de tu vida.', alt: 'Pantalla de Control del Ciclo' },
      { img: 'u4m-heart-rate-tracking.jpg', split: 'fit-contain', bg: '#000', strong: 'Sigue tu corazón con más frecuencia.', text: 'El Ultra 4 utiliza un sensor de alta frecuencia para monitorear tu frecuencia cardiaca en segundo plano, incluso cuando no estás entrenando, y te muestra un valor cada cinco segundos en una nueva complicación de la carátula.', alt: 'Apple Watch Ultra con la frecuencia cardiaca en la carátula' },
      { img: 'u4m-blood-oxygen.jpg', split: 'fit-contain', bg: '#000', strong: 'Mide tu oxígeno en sangre. Una innovación muy alentadora.', text: 'El Apple Watch Ultra 4 tiene una app y un sensor con los que mide tu nivel de oxígeno en sangre cuando quieras y hace lecturas en segundo plano. Día y noche.', alt: 'Apple Watch Ultra midiendo el oxígeno en sangre' },
      { img: 'u4m-hypertension.jpg', split: 'fit-contain', bg: '#000', strong: 'Recibe notificaciones de hipertensión.', text: 'El Ultra 4 puede avisarte si identifica patrones de hipertensión. ¿Cómo funciona? Durante un periodo de 30 días, el sensor óptico analiza cómo responden los vasos sanguíneos al latido del corazón y envía los datos obtenidos a un algoritmo capaz de detectar una posible hipertensión.', alt: 'Notificación de posible hipertensión' },
      { img: 'u4m-ecg.jpg', split: 'fit-contain', bg: '#000', strong: 'Hazte un electrocardiograma a cualquier hora y en cualquier lugar.', text: 'Detecta indicios de ritmo cardiaco irregular, también conocido como fibrilación auricular, usando la app ECG para generar un electrocardiograma de una sola derivación. Luego puedes compartir los resultados con tu especialista en salud.', alt: 'Apple Watch Ultra con la app ECG' },
      { img: 'u4m-heart-app.jpg', split: 'fit-contain', bg: '#000', strong: 'Tu app de corazones.', text: 'Mide tu frecuencia cardiaca en cualquier momento con la app Frecuencia Cardiaca y recibe notificaciones si sube o baja demasiado, o si tiene un ritmo irregular.', alt: 'Notificación de frecuencia cardiaca alta' }
    ]
  };


  s12Sets['se3-descubre'] = {
    title: 'Descubre el Apple Watch SE 3.', ratio: '2435 / 1275', light: true,
    slides: [
      { img: 'se3-sueno.jpg', cls: 'pastel pos-right', bg: '#f2f7fe', css: '--mp:12% center;--hl:#3b4fd9', text: 'Lleva un registro avanzado de tus datos de salud, incluida tu <span class="hlc">Puntuación de Sueño</span>, solo con llevar puesto tu reloj.', alt: 'Apple Watch SE 3 con la Puntuación de Sueño' },
      { img: 'se3-actividad.jpg', cls: 'pastel', bg: '#f9f1f6', css: '--mp:88% center;--hl:#b02bc4', text: 'Registra tu actividad diaria y tus entrenamientos. Mide movimiento, tiempo de pie y ejercicio con los <span class="hlc">círculos de Actividad</span>.', alt: 'Apple Watch SE 3 con los círculos de Actividad' },
      { img: 'se3-siri.jpg', cls: 'pastel', bg: '#fcf1ea', css: '--mp:62% center;--hl:#d2452e', text: '<span class="hlc">Conoce a Siri AI.</span> Tu asistente de IA. Más personal. Más capaz.<small>Siri AI está disponible en español. Puede estar sujeto a límites de uso.</small>', alt: 'Apple Watch SE 3 con Siri AI' },
      { img: 'se3-sos.jpg', cls: 'pastel', bg: '#fdf8f8', css: '--mp:85% center;--hl:#e0362c', text: 'Ayuda siempre a la mano con <span class="hlc">funcionalidades de seguridad</span> como Detección de Choques y Detección de Caídas.', alt: 'Botón SOS de emergencia' },
      { img: 'se3-bateria.jpg', cls: 'pastel pos-top', bg: '#f8fdf0', css: '--mp:center 70%;--hl:#3aa64a', text: 'Con <span class="hlc">18 horas de batería</span> y carga rápida, disfruta tu día al máximo.', alt: 'Ícono de batería cargada' }
    ]
  };


  s12Sets['se3-detalle'] = {
    title: 'Míralo en detalle.', ratio: '3456 / 1824', light: true,
    slides: [
      { img: 'se3d-sensores.jpg', cls: 'pastel prod', bg: '#f5f5f7', css: '--mp:80% center', strong: 'Sensores de salud.', text: 'El Apple Watch SE 3 viene con innovadores sensores para ayudarte a seguir de cerca tu salud, como el sensor cardiaco y la funcionalidad de sensor de temperatura.', alt: 'Tres Apple Watch SE 3 con funciones de salud' },
      { img: 'se3d-movimiento.jpg', cls: 'pastel prod shift', bg: '#f5f5f7', css: '--mp:55% center', strong: 'Sensores de movimiento.', text: 'El giroscopio, acelerómetro y GPS registran tu actividad, tus métricas de fitness y activan las funcionalidades de seguridad.', alt: 'Apple Watch SE 3 con un entrenamiento en curso' },
      { img: 'se3d-pantalla.jpg', cls: 'pastel prod shift', bg: '#f5f5f7', css: '--mp:75% center;--sx:26%', strong: 'Pantalla Ion‑X resistente.', text: 'Pantalla cuatro veces más resistente a los golpes que la del Apple Watch SE 2. Perfecta para todos los días.', alt: 'Detalle de la pantalla del Apple Watch SE 3' },
      { img: 'se3d-parlante.jpg', cls: 'pastel prod', bg: '#f5f5f7', css: '--mp:80% center', strong: 'Parlante y micrófono.', text: 'Puedes hacer y recibir llamadas, dictar mensajes y escuchar música y podcasts en voz alta, todo desde tu muñeca.', alt: 'Apple Watch SE 3 recibiendo una llamada' },
      { img: 'se3d-agua.jpg', cls: 'pastel prod', bg: '#f5f5f7', css: '--mp:55% center', strong: 'Resistencia al agua.', text: 'El Apple Watch SE 3 tiene una clasificación de resistencia al agua de 50 metros. Chapotea, surfea y nada. Como si nada.', alt: 'Apple Watch SE 3 entre gotas de agua' },
      { img: 'se3d-personaliza.jpg', cls: 'pastel prod shift', bg: '#f5f5f7', css: '--mp:60% center', strong: 'Más tuyo que nunca.', text: 'Exprésate con múltiples carátulas personalizables y una gran variedad de correas en diferentes colores, estilos y materiales.', alt: 'Varios Apple Watch SE 3 con distintas correas y carátulas' }
    ]
  };

  function se3(c, prev, next) {
    return `<section class="page detail se3">
      <nav class="topbar">
        <a class="back" href="#/descubre">${chevron} Apple Watch</a>
        <span class="brand">${c.name}</span>
        <div class="right"><a class="ghost" href="#/">Portada</a></div>
      </nav>
      <h1 class="sr-only">${c.name}</h1>
      <div class="dk-wrap">
        <button class="dk-box aqua reveal" ${d(.15)} type="button" data-open-dc="se3-descubre" aria-haspopup="dialog">
          <span class="dk-copy">
            <span class="dk-title">Descubre el Apple Watch SE&nbsp;3.</span>
            <span class="dk-sub">Actívate, cuida tu salud y mantente conectado.</span>
          </span>
          ${plusIcon}
        </button>
        <button class="dk-box rosa reveal" ${d(.25)} type="button" data-open-dc="se3-detalle" aria-haspopup="dialog">
          <img src="${A}se3-detalle.jpg" alt="" aria-hidden="true">
          <span class="dk-copy">
            <span class="dk-title">Míralo en detalle.</span>
          </span>
          ${plusIcon}
        </button>
      </div>
      <nav class="pnav" aria-label="Otras categorías">
        <a href="#/categoria/${prev.slug}"><span class="lbl">‹ Anterior</span><span class="nm">${prev.name}</span></a>
        <a class="home-btn" href="#/descubre">Ver todas las categorías</a>
        <a class="next" href="#/categoria/${next.slug}"><span class="lbl">Siguiente ›</span><span class="nm">${next.name}</span></a>
      </nav>
      ${carousel('se3-descubre', c)}
      ${carousel('se3-detalle', c)}
    </section>`;
  }

  function ultra4(c, prev, next) {
    return `<section class="page detail dark">
      <nav class="topbar dark">
        <a class="back" href="#/descubre">${chevron} Apple Watch</a>
        <span class="brand">${c.name}</span>
        <div class="right"><a class="ghost" href="#/">Portada</a></div>
      </nav>
      <h1 class="sr-only">${c.name}</h1>
      <div class="dk-wrap">
        <button class="dk-box u4hero reveal" ${d(.15)} type="button" data-open-dc="u4-descubre" aria-haspopup="dialog">
          <picture><source media="(max-width: 734px)" srcset="${A}u4-hero-m.jpg"><img src="${A}u4-hero.jpg" alt="" aria-hidden="true"></picture>
          <span class="dk-copy">
            <span class="dk-title">Descubre.</span>
            <span class="dk-sub">Explora todo lo que Apple Watch Ultra 4 puede hacer por ti.</span>
          </span>
          ${plusIcon}
        </button>
        <button class="dk-box escuchate ciclista reveal" ${d(.25)} type="button" data-open-dc="u4-registro" aria-haspopup="dialog">
          <img src="${A}u4-ciclista.jpg" alt="" aria-hidden="true">
          <span class="dk-copy">
            <span class="dk-title sm">Registro avanzado de salud y fitness</span>
          </span>
          ${plusIcon}
        </button>
        <button class="dk-box metricas reveal" ${d(.35)} type="button" data-open-dc="u4-metricas" aria-haspopup="dialog">
          <img src="${A}u4-metricas.jpg" alt="" aria-hidden="true">
          <span class="dk-copy">
            <span class="dk-title">Métricas.</span>
            <span class="dk-sub">Sueño, VFC, ciclo, frecuencia cardiaca, oxígeno en sangre, hipertensión y ECG.</span>
          </span>
          ${plusIcon}
        </button>
      </div>
      <nav class="pnav dark" aria-label="Otras categorías">
        <a href="#/categoria/${prev.slug}"><span class="lbl">‹ Anterior</span><span class="nm">${prev.name}</span></a>
        <a class="home-btn" href="#/descubre">Ver todas las categorías</a>
        <a class="next" href="#/categoria/${next.slug}"><span class="lbl">Siguiente ›</span><span class="nm">${next.name}</span></a>
      </nav>
      ${carousel('u4-descubre', c)}
      ${carousel('u4-registro', c)}
      ${carousel('u4-metricas', c)}
    </section>`;
  }

  // Carrusel: abrir, cerrar, navegar
  let dcObs = null, dcIndex = 0, dcLastFocus = null, dcCur = null;
  const dcEl = () => dcCur;
  function dcGo(k) {
    if (!dcCur) return;
    const cards = dcCur.querySelectorAll('.dc-card');
    dcIndex = Math.max(0, Math.min(cards.length - 1, k));
    cards[dcIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  function dcSetActive(k) {
    dcIndex = k;
    dcCur.querySelectorAll('.dc-dot').forEach((b, j) => b.classList.toggle('on', j === k));
    dcCur.querySelectorAll('.dc-card').forEach((c, j) => c.classList.toggle('active', j === k));
  }
  function dcOpen(id) {
    const el = document.querySelector(`.dc[data-set="${id}"]`); if (!el) return;
    dcCur = el;
    dcLastFocus = document.activeElement;
    el.hidden = false;
    document.documentElement.classList.add('lock');
    requestAnimationFrame(() => el.classList.add('open'));
    const scroller = el.querySelector('.dc-scroll');
    scroller.scrollTop = 0;
    dcSetActive(0);
    const cards = [...el.querySelectorAll('.dc-card')];
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = scroller.getBoundingClientRect(), mid = r.top + r.height / 2;
      let best = 0, bd = Infinity;
      cards.forEach((c, j) => {
        const b = c.getBoundingClientRect();
        const dist = Math.abs(b.top + b.height / 2 - mid);
        if (dist < bd) { bd = dist; best = j; }
        if (b.top < r.bottom - 80) c.classList.add('seen');
      });
      if (scroller.scrollTop < 40) best = 0;
      if (best !== dcIndex || !cards[best].classList.contains('active')) dcSetActive(best);
    };
    dcObs && dcObs.disconnect();
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    dcObs = { disconnect: () => scroller.removeEventListener('scroll', onScroll) };
    update();
    setTimeout(() => el.querySelector('.dc-close').focus({ preventScroll: true }), 50);
  }
  function dcClose() {
    const el = dcCur; if (!el || el.hidden) return;
    el.classList.remove('open');
    document.documentElement.classList.remove('lock');
    setTimeout(() => { el.hidden = true; }, 380);
    dcObs && dcObs.disconnect();
    dcCur = null;
    dcLastFocus && dcLastFocus.focus && dcLastFocus.focus({ preventScroll: true });
  }
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-open-dc]');
    if (opener) dcOpen(opener.dataset.openDc);
    else if (e.target.closest('[data-close-dc]')) dcClose();
    else if (e.target.closest('[data-step]')) dcGo(dcIndex + +e.target.closest('[data-step]').dataset.step);
    else if (e.target.closest('[data-go]')) dcGo(+e.target.closest('[data-go]').dataset.go);
  });
  document.addEventListener('keydown', e => {
    const el = dcEl(); if (!el || el.hidden) return;
    if (e.key === 'Escape') dcClose();
    else if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); dcGo(dcIndex + 1); }
    else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); dcGo(dcIndex - 1); }
  });

  function detail(slug) {
    const i = cats.findIndex(c => c.slug === slug);
    if (i < 0) return null;
    const c = cats[i];
    const prev = cats[(i - 1 + cats.length) % cats.length];
    const next = cats[(i + 1) % cats.length];
    if (slug === 'apple-watch-series-12') return series12(c, prev, next);
    if (slug === 'apple-watch-ultra-4') return ultra4(c, prev, next);
    if (slug === 'apple-watch-se-3') return se3(c, prev, next);
    const hls = c.hl.map(([k, label, t, p], j) => `
      <article class="hl reveal" ${d(.5 + j * .08)}><div class="k ${k}">${label}</div><h3>${t}</h3><p>${p}</p></article>`).join('');
    return `<section class="page detail">
      <nav class="topbar">
        <a class="back" href="#/descubre">${chevron} Descubre</a>
        <span class="brand">${c.name}</span>
        <div class="right"><a class="ghost" href="#/">Portada</a></div>
      </nav>
      <header class="d-hero">
        <p class="eyebrow reveal" ${d(.05)}>Descubre Apple Watch</p>
        <h1 class="reveal" ${d(.1)}>${c.name}</h1>
        <p class="tag reveal" ${d(.18)}>${c.desc}</p>
      </header>
      <div class="d-media reveal" ${d(.28)}>${stages[c.stage]()}</div>
      <div class="highlights">${hls}</div>
      <p class="demo-note">Contenido de demostración. El detalle de esta sección se completará en la siguiente fase.</p>
      <nav class="pnav" aria-label="Otras categorías">
        <a href="#/categoria/${prev.slug}"><span class="lbl">‹ Anterior</span><span class="nm">${prev.name}</span></a>
        <a class="home-btn" href="#/descubre">Ver todas las categorías</a>
        <a class="next" href="#/categoria/${next.slug}"><span class="lbl">Siguiente ›</span><span class="nm">${next.name}</span></a>
      </nav>
    </section>`;
  }

  const app = document.getElementById('app');
  let first = true;

  function render() {
    const h = location.hash.replace(/^#/, '') || '/';
    let html, title = 'Descubre Apple Watch';
    if (h === '/descubre') { html = menu(); title = 'Apple Watch'; }
    else if (h.startsWith('/categoria/')) {
      const slug = h.split('/')[2];
      html = detail(slug);
      const c = cats.find(x => x.slug === slug);
      if (c) title = c.name + ' · Descubre Apple Watch';
    }
    if (!html) html = cover();

    const swap = () => { dcCur = null; document.documentElement.classList.remove('lock'); document.body.classList.toggle('is-dark', h === '/categoria/apple-watch-series-12' || h === '/categoria/apple-watch-ultra-4'); app.innerHTML = html; document.title = title; app.querySelectorAll('video[autoplay]').forEach(v => { v.muted = true; const pr = v.play(); pr && pr.catch(() => {}); }); window.scrollTo(0, 0); };
    const cur = app.firstElementChild;
    if (first || !cur) { first = false; swap(); return; }
    cur.classList.add('leaving');
    setTimeout(swap, 260);
  }

  window.addEventListener('hashchange', render);
  render();
})();
