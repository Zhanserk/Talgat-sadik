import React, { useState, useRef } from 'react';

const cards = [
  {
    tag: 'Балабақша туралы',
    title: 'Ашық ауада ойнауға арналған жайлы аула',
    desc: 'ЖШС «Ер-Талғат» бөбекжай балабақшасы Сарыағаш қаласында орналасқан. Ауада балаларға арналған ойын алаңдары, көлеңкелі демалу аймақтары және қауіпсіз қоршау бар.',
    badges: [
      { icon: '🌳', label: 'Көлеңкелі аула' },
      { icon: '🛝', label: 'Ойын алаңдары' },
      { icon: '🛡️', label: 'Қауіпсіз қоршау' },
    ],
    images: ['/gallery/hero.jpg', '/gallery/street-1.jpg', '/gallery/street-2.jpg', '/gallery/smartzone-1.jpg', '/gallery/smartzone-2.jpg'],
  },
  {
    tag: 'Кіші топ',
    title: '«Балапан» тобы',
    desc: 'Кіші жастағы балаларға арналған жарық, жайлы бөлме. Түрлі-түсті жиһаз бен жеке ойын үстелдері балаларды күнделікті шығармашылыққа шақырады.',
    badges: [
      { icon: '🎨', label: 'Дамыту аймағы' },
      { icon: '🪑', label: 'Жеке орындықтар' },
      { icon: '☀️', label: 'Жарық бөлме' },
    ],
    images: ['/gallery/group-junior-1.jpg', '/gallery/group-junior-2.jpg', '/gallery/group-junior-3.jpg', '/gallery/group-junior-4.jpg'],
  },
  {
    tag: 'Ересек топ',
    title: '«Алпамыс» тобы',
    desc: 'Ересек топ балаларына арналған кең бөлме, әр балаға жеке киім шкафы бөлінген. Түрлі-түсті интерьер балаларды әр күн сайын қуантады.',
    badges: [
      { icon: '🧸', label: 'Жеке шкафтар' },
      { icon: '📐', label: 'Кең кеңістік' },
      { icon: '🖌️', label: 'Түрлі-түсті интерьер' },
    ],
    images: ['/gallery/group-senior-1.jpg', '/gallery/group-senior-2.jpg', '/gallery/group-senior-3.jpg', '/gallery/group-senior-4.jpg', '/gallery/group-senior-5.jpg'],
  },
];

/* Свайппен ауыстыруға арналған минималды қашықтық (px) */
const SWIPE_THRESHOLD = 40;

function Card({ data }) {
  const [active, setActive] = useState(0);
  const total = data.images.length;

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isSwiping = useRef(false);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const onTouchStart = (e) => {
    if (total <= 1) return;
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isSwiping.current = true;
  };

  const onTouchMove = (e) => {
    if (!isSwiping.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      prev();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      next();
    }
    touchDeltaX.current = 0;
  };

  return (
    <div className="fcard">
      <div className="fcard-gallery">
        <div
          className="fcard-main"
          style={{ backgroundImage: `url('${data.images[active]}')`, touchAction: 'pan-y' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <span className="fcard-counter">{active + 1} / {total}</span>
          {total > 1 && (
            <>
              <button className="fcard-arrow left" onClick={prev} type="button" aria-label="Алдыңғы фото">‹</button>
              <button className="fcard-arrow right" onClick={next} type="button" aria-label="Келесі фото">›</button>
            </>
          )}
        </div>
        {total > 1 && (
          <div className="fcard-thumbs">
            {data.images.map((img, i) => (
              <button
                key={img}
                type="button"
                className={`fcard-thumb ${active === i ? 'active' : ''}`}
                style={{ backgroundImage: `url('${img}')` }}
                onClick={() => setActive(i)}
                aria-label={`Фото ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="fcard-info">
        <div className="eyebrow" style={{ background: 'var(--cream)' }}>{data.tag}</div>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <div className="fcard-badges">
          {data.badges.map((b) => (
            <div key={b.label} className="fcard-badge">
              <span className="fcard-badge-ic">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
        <a href="#contact" className="btn btn-primary" style={{ marginTop: '22px', width: 'fit-content' }}>
          Экскурсияға жазылу
        </a>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="wrap">
        <div className="section-head center" style={{ margin: '0 auto 52px' }}>
          <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Жақынырақ танысыңыз</div>
          <h2>Балабақша мен топтар ішінен</h2>
          <p>Фотоны саусақпен солға/оңға сырғытып ауыстырыңыз.</p>
        </div>

        <div className="fcard-stack">
          {cards.map((c) => (
            <Card key={c.title} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
}