import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Documents from './components/Documents';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>Сарыағаш қаласындағы сенімді балабақша</div>
            <h1>Балаңыздың күні <span className="crayon" style={{ color: 'var(--coral-dark)' }}>күлкіге</span> толы өтетін мекен</h1>
            <p className="lead">ЖШС «Ер-Талғат» бөбекжай балабақшасы — жарық, жайлы бөлмелер, ашық ауадағы ойын алаңдары және мейірімді тәрбиешілер. Санитарлық нормаларға сай, білікті медициналық қызмет.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Экскурсияға жазылу</a>
              <a href="#about" className="btn btn-ghost">Толығырақ білу</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>2</b><span>жас ерекшелігіне сай топ</span></div>
              <div className="stat"><b>100%</b><span>санитарлық нормаларға сай</span></div>
              <div className="stat"><b>1</b><span>жеке медбике кабинеті</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="blob blob-1"></div>
            <div className="hero-photo">
              <div className="ph" style={{ backgroundImage: "url('/gallery/hero.jpg')" }}></div>
            </div>
            <div className="float-card fc-1"><div className="ic">🎨</div>Дамыту бөлмелері</div>
            <div className="float-card fc-2"><div className="ic">☀️</div>Жарық, жылы бөлмелер</div>
            <div className="float-card fc-3"><div className="ic">🌳</div>Ашық ауада серуен</div>
          </div>
        </div>
      </section>

      <Showcase />

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-photo-grid">
            <div className="ph tall" style={{ backgroundImage: "url('/gallery/street-1.jpg')" }}></div>
            <div className="ph" style={{ backgroundImage: "url('/gallery/smartzone-1.jpg')" }}></div>
            <div className="ph" style={{ backgroundImage: "url('/gallery/group-senior-1.jpg')" }}></div>
          </div>
          <div className="about-text">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Біз туралы</div>
            <h2>Әрбір бөлме — балаға арналған кішкентай әлем</h2>
            <p>ЖШС «Ер-Талғат» бөбекжай балабақшасы Түркістан облысы, Сарыағаш қаласында орналасқан. Балабақшада екі жас тобы жұмыс істейді — «Балапан» кіші тобы мен «Алпамыс» ересек тобы, әрқайсысында жеке ойын және дамыту аймақтары бар.</p>
            <p>Балабақша ауласында балаларға арналған ойын алаңдары, сырғанақтар және демалу аймақтары жабдықталған. Барлық үй-жайлар балалардың қауіпсіздігі мен ыңғайлылығына сай жабдықталған.</p>
            <div className="about-facts">
              <div className="fact"><div className="ic">🧸</div><div><b>Екі жас тобы</b><span>«Балапан» және «Алпамыс»</span></div></div>
              <div className="fact"><div className="ic">🩺</div><div><b>Медбике кабинеті</b><span>күнделікті денсаулық бақылауы</span></div></div>
              <div className="fact"><div className="ic">🌤️</div><div><b>Ашық ауа алаңы</b><span>ойын және серуен аймағы</span></div></div>
              <div className="fact"><div className="ic">📋</div><div><b>Әдіскер бөлмесі</b><span>оқу-әдістемелік жұмыс орталығы</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS SECTION */}
      <section className="groups" id="groups">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Топтар мен бөлмелер</div>
            <h2>Балаңызға жайлы екі топ</h2>
            <p>Әр топта жеке киім шешетін, ойын және дамыту аймақтары жоспарланған.</p>
          </div>
          <div className="group-cards">
            <div className="gcard">
              <div className="num">Кіші топ</div>
              <h3>«Балапан» тобы</h3>
              <p>Кіші жастағы балаларға арналған жарық, жайлы бөлме. Ойын және дамыту аймақтары жеке жабдықталған.</p>
              <ul>
                <li>Жеке ойын үстелдері мен орындықтар</li>
                <li>Түрлі-түсті дамыту аймағы</li>
                <li>Жарық, жылы бөлме</li>
              </ul>
            </div>
            <div className="gcard">
              <div className="num">Ересек топ</div>
              <h3>«Алпамыс» тобы</h3>
              <p>Ересек топ балаларына арналған кең бөлме, жеке киім шкафтары әр балаға бөлек.</p>
              <ul>
                <li>Жеке киім шкафтары</li>
                <li>Кең ойын-дамыту кеңістігі</li>
                <li>Түрлі-түсті, жарық интерьер</li>
              </ul>
            </div>
            <div className="gcard">
              <div className="num">Қосымша</div>
              <h3>Медицина және басқару</h3>
              <p>Медбике кабинеті мен меңгеруші-әдіскер бөлмесі балабақша жұмысын үнемі бақылауда ұстайды.</p>
              <ul>
                <li>Дәрігерлік бақылау</li>
                <li>Күнделікті денсаулық тексеруі</li>
                <li>Оқу-әдістемелік жұмыс орталығы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="adv-sec">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Неге бізді таңдайды</div>
            <h2>Ата-аналар сенетін төрт себеп</h2>
          </div>
          <div className="adv-grid">
            <div className="adv"><div className="ic">🛡️</div><h4>Қауіпсіздік</h4><p>Аула мен ойын алаңы балалардың қауіпсіздігін ескере отырып жабдықталған.</p></div>
            <div className="adv"><div className="ic">🎨</div><h4>Дамыту ортасы</h4><p>Әр топ ойын, шығармашылық және демалуға арналған аймақтарға бөлінген.</p></div>
            <div className="adv"><div className="ic">👩‍⚕️</div><h4>Медициналық бақылау</h4><p>Арнайы медбике кабинеті және күнделікті денсаулық тексеруі.</p></div>
            <div className="adv"><div className="ic">🧼</div><h4>Тазалық пен гигиена</h4><p>Барлық үй-жайлар санитарлық қағидаларға толық сәйкес ұсталады.</p></div>
          </div>
        </div>
      </section>

      {/* TIMELINE / DAY SCHEDULE */}
      <section className="day" id="day">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Күн тәртібі</div>
            <h2>Балаңыздың бір күні қалай өтеді</h2>
            <p>Ойын, тамақтану, ұйқы және дене шынықтыру — барлығы теңгерімді жоспарланған.</p>
          </div>
          <div className="timeline">
            <div className="titem"><b className="time">08:00 — Қабылдау</b><p>Балаларды жылы қарсы алу, таңғы жаттығу</p></div>
            <div className="titem"><b className="time">09:00 — Таңғы ас</b><p>Дәмді әрі пайдалы таңғы ас</p></div>
            <div className="titem"><b className="time">09:30 — Сабақ пен ойын</b><p>Дамыту сабақтары, шығармашылық жұмыстар</p></div>
            <div className="titem"><b className="time">11:30 — Серуен</b><p>Ашық аулада белсенді қозғалыс ойындары</p></div>
            <div className="titem"><b className="time">13:00 — Түскі ас пен ұйқы</b><p>Тыныш демалыс уақыты</p></div>
            <div className="titem"><b className="time">16:00 — Бесін ас, еркін ойын</b><p>Ата-аналарды күту, үйге қайту</p></div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section>
        <div className="wrap">
          <div className="cta">
            <h2>Балаңызды бүгін «Ер-Талғатпен» таныстырыңыз</h2>
            <p>Орын саны шектеулі — экскурсияға алдын ала жазылыңыз.</p>
            <a href="#contact" className="btn btn-ghost" style={{ color: 'var(--coral-dark)' }}>Байланысу</a>
          </div>
        </div>
      </section>

      {/* CONTACTS & MAP */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="ccard">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Байланыс</div>
            <h2 style={{ margin: '16px 0 24px', fontSize: '28px' }}>Бізбен хабарласыңыз</h2>
            {/* TODO: нақты көше атауы мен үй нөмірін, телефон және email қой */}
            <div className="crow"><div className="ic">📍</div><div><b>Мекенжай</b><span>Түркістан облысы, Сарыағаш қаласы</span></div></div>
            <div className="crow"><div className="ic">👩‍💼</div><div><b>Меңгеруші</b><span>И.Касымбекова</span></div></div>
            <div className="crow"><div className="ic">📞</div><div><b>Телефон</b><br /><a href="tel:+77024506081">+7 (702) 450-60-81</a></div></div>
            <div className="crow"><div className="ic">🕗</div><div><b>Жұмыс уақыты</b><span>Дүйсенбі – Жұма, 08:00 – 18:00</span></div></div>
          </div>
          <div className="map-box">
            <div>🗺️<br /><br />Түркістан облысы,<br />Сарыағаш қаласы<br /><br /><span style={{ fontWeight: 900 }}>Карта осы жерге енгізіледі</span></div>
          </div>
        </div>
      </section>

      <Documents />
      <Footer />
    </>
  );
}