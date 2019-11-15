import React from "react";
import ReactDOM from "react-dom"
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import uklogo from './uk.png'
import filogo from './fi.png'
import apprologo from './logoo.svg'
import './i18n'
import "./styles.css";
import { useTranslation } from 'react-i18next'

const fullpageOptions = {
  licenseKey: 'YOUR_KEY_HERE',
  anchors: ["etusivu", "yleistä", "liput", "suoritustasot", "aikataulu", "esiintyjät", "polinappro", "kartta", "otayhteyttä"],
  callbacks: ["onLeave"],
  menu: '#navigation',

};

function App() {
  const [t, i18n] = useTranslation()

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn)
  }

  return (
    <div>
    <nav id="navigation">
      <ul id="menu">
          <li data-menuanchor="yleistä" className="active"><a href="#yleistä">{t('yleistä')}</a></li>
          <li data-menuanchor="liput"><a href="#liput">{t('liput')}</a></li>
          <li data-menuanchor="aikataulu"><a href="#aikataulu">{t('aikataulu')}</a></li>
          <li data-menuanchor="polinappro"><a href="#polinappro">{t('appro')}</a></li>
          <li data-menuanchor="kartta"><a href="#kartta">{t('kartta')}</a></li>
          <li data-menuanchor="ota yhteyttä"><a href="#otayhteyttä">{t('yhteys')}</a></li>
          </ul>
          <a class="logos">
        <button onClick={()=>changeLanguage('en')} style={{backgroundColor: 'transparent', borderColor: 'transparent', outline: 'none'}}><img src={uklogo}/></button>
        <button onClick={()=>changeLanguage('fi')} style={{backgroundColor: 'transparent', borderColor: 'transparent', outline: 'none'}}><img src={filogo}/></button>
        </a>
        </nav>
                <div id="fullpage">
                <div className="section">
                  <div className="container">
                  <img src={apprologo}/>
                </div>
                </div>
                <div className="section">
                    <h3>{t('yleistä')}</h3>
                    <p>{t('yleistäteksti')}</p>  
                  </div>
                <div className="section">
                  <h3>{t('myynti')}</h3>
                  <p>{t('lipunmyyntiteksti')}
                  <a href="https://kide.app/events/99e6ec72-c9e6-48a3-96ff-0e48c1fe5e0d" class="link">kide.app</a>
                  </p>
                </div>
                <div className="section">
                  <h3>{t('suoritustasot')}</h3>
                  <p>{t('taso1')}</p>
                  <p>{t('taso2')}</p>
                  <p>{t('taso3')}</p>
                </div>
                <div className="section">
                  <h3>{t('aikataulu')}</h3>
                  <p>{t('aikatauluteksti')}</p>
                </div>
                <div className="section">
                  <h3>{t('esiintyjät')}</h3>
                  <p>Pelle Miljoona & Rockers</p>
                  <p>Citrus</p> 
                </div>
                <div className="section">
                  <h3>POLIN APPRO</h3>
                  <p>{t('polinapproteksti')}</p>
                </div>
                <div className="section">
                  <h3>{t('kartta')}</h3>
                  <p>TBA</p>
                </div>
                <div className="section">
                  <h3>{t('yhteys')}</h3>
                  <p>{t('kysyttävää')} </p>
                  <p>email: tuukka.harvela@ayy.fi <br/> telegram: @HerraPaddington</p>
                </div>
              </div>
              </div>
  )
}

const FullpageWrapper = (fullpageProps) => (

  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      return (
          <App/>
      );
    }}
  />
);

ReactDOM.render(
  <FullpageWrapper {...fullpageOptions} />,
  document.getElementById("root")
);

