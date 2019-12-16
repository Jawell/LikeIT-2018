import React from 'react';

import Gravity from "../assets/partners/gravity.svg";
import Incode from "../assets/partners/incode.svg";
import ISD from "../assets/partners/isd.svg";
import LightIT from "../assets/partners/lightit.svg";
import Computools from "../assets/partners/comp.svg";
import Together from "../assets/partners/together.svg";
import PowerCode from "../assets/partners/pcode.svg";
import DS from "../assets/partners/ds.svg";
import ASK from "../assets/partners/ask.svg";
import Yola from "../assets/partners/yola.svg";
import Fest from "../assets/partners/startup.svg";
import Sync from "../assets/partners/sync.svg";
import Prof from "../assets/partners/prof.svg";
import ZNTU from "../assets/partners/zntu.svg";
import Level from "../assets/partners/levelup.svg";
import Step from "../assets/partners/itstep.svg";
import Kisson from "../assets/partners/kisson.svg";
import VP from "../assets/partners/vp.svg";

class Partners extends React.Component {
  constructor(state) {
    super(state);

    this.state = {
      landscape: {
        gravity: {
          width: "4.947vw",
        },
        incode: {
          width: "5.989vw"
        },
        isd: {
          width: "5.156vw"
        },
        light: {
          width: "6.197vw"
        },
        comp: {
          width: "8.437vw"
        },
        together: {
          width: "6.302vw"
        },
        pc: {
          width: "3.593vw"
        },
        ds: {
          width: "6.822vw"
        },
        ask: {
          width: "4.27vw"
        },
        yola: {
          width: "4.322vw"
        },
        fest: {
          width: "4.687vw"
        },
        sync: {
          width: "6.093vw"
        },
        prof: {
          width: "6.354vw"
        },
        zntu: {
          width: "3.645vw"
        },
        level: {
          width: "2.395vw"
        },
        step: {
          width: "3.593vw"
        },
        kisson: {
          width: "3.281vw"
        },
        vp: {
          width: "7.083vw"
        }
      },
      portrait: {
        gravity: {
          width: "22.222vw",
        },
        incode: {
          width: "28.888vw"
        },
        isd: {
          width: "24.444vw"
        },
        light: {
          width: "22.366vw"
        },
        comp: {
          width: "30.244vw"
        },
        together: {
          width: "24.444vw"
        },
        pc: {
          width: "13.333vw"
        },
        ds: {
          width: "31.111vw"
        },
        ask: {
          width: "17.777vw"
        },
        yola: {
          width: "12.986vw"
        },
        fest: {
          width: "17.747vw"
        },
        sync: {
          width: "17.15vw"
        },
        prof: {
          width: "21.794vw"
        },
        zntu: {
          width: "9.411vw"
        },
        level: {
          width: "7.519vw"
        },
        step: {
          width: "12.83vw"
        },
        kisson: {
          width: "11.708vw"
        },
        vp: {
          width: "24.319vw"
        }
      }
    }
  }

  render() {
    return(
      <section id="partners">
        <div className="wrapper">
          <div className="partners">
            <div className="about-header block-header">
              <div><div/><span> партнеры</span></div>
            </div>
            <div className="line first">
              <img style={this.state.landscape.gravity} src={Gravity} alt={Gravity}/>
              <img style={this.state.landscape.incode} src={Incode} alt={Incode}/>
              <img style={this.state.landscape.isd} src={ISD} alt={ISD}/>

            </div>
            <div className="line second">
              <img style={this.state.landscape.pc} src={PowerCode} alt={PowerCode}/>
              <img style={this.state.landscape.prof} src={Prof} alt={Prof}/>
              <img style={this.state.landscape.zntu} src={ZNTU} alt={ZNTU}/>
            </div>
            <div className="line last">
              <img style={this.state.landscape.light} src={LightIT} alt={LightIT}/>
              <img style={this.state.landscape.comp} src={Computools} alt={Computools}/>
              <img style={this.state.landscape.together} src={Together} alt={Together}/>
            </div>

           

            <a href="#contacts" className="button" id="become-partner">Стать партнером</a>

            <div className="mobile-partners">
              <div className="line-mobile">
                <img style={this.state.portrait.gravity} src={Gravity} alt={Gravity}/>
                <img style={this.state.portrait.incode} src={Incode} alt={Incode}/>
                <img style={this.state.portrait.isd} src={ISD} alt={ISD}/>
              </div>
              <div className="line-mobile">
                <img style={this.state.portrait.light} src={LightIT} alt={LightIT}/>
                <img style={this.state.portrait.comp} src={Computools} alt={Computools}/>
                <img style={this.state.portrait.together} src={Together} alt={Together}/>
              </div>
              <div className="line-mobile">
                <img style={this.state.portrait.pc} src={PowerCode} alt={PowerCode}/>
                 <img style={this.state.portrait.prof} src={Prof} alt={Prof}/>
                <img style={this.state.portrait.zntu} src={ZNTU} alt={ZNTU}/>
                
              </div>
            
            </div>

            <a href="#contacts" className="button" id="become-partner-mobile">Стать партнером</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Partners;