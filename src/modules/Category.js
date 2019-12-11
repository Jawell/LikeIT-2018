import React from 'react';
import Device from '../assets/devices.png';
import Smartphone from '../assets/smartphone.png';
import Tools from '../assets/tools.png';

class Category extends React.Component
{
  render() {
    return(
      <section id="category">
        <div className="wrapper">
          <div className="about-header block-header">
            <div><div/><span> категории</span></div>
          </div>
          <div id="category-info">

            <div className="category" id="mobile">
              <img src={Smartphone} alt={Smartphone}/>
              <div className="category-text">
                <p><span className="highlight header-column">mobile</span></p>
                <p>Мобильное приложение - одна из наиболее актуальных разработок, так как именно телефон в списке тех вещей, которые у каждого всегда находятся при себе. Разработка приложений ограничивается такими ОС как IOS, Android.</p>
              </div>
            </div>

            <div className="category" id="web">
              <img src={Device} alt={Device}/>
              <div className="category-text">
                <p><span className="highlight header-column">web</span></p>
                <p>Категория WEB служит универсальным приспособлением для размещения информации и включает в себя написание программного обеспечения и дизайн.  Таким образом, с помощью удачного сочетания можно получить эффектный и функциональный веб-ресурс.</p>
              </div>
            </div>

            <div className="category" id="data">
              <img src={Tools} alt={Tools}/>
              <div className="category-text">
                <p><span className="highlight header-column">data science</span></p>
                <p>Категория, которая позволит продемонстрировать свои навыки оптимизации и исполь­зо­ва­ния, откры­тых и боль­ших массивов дан­ных для реше­ния реальных потребностей и проблем компаний в области финансов, телекома, потребления, мобильных и игровых технологий.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Category;