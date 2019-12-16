import React from 'react';

class Chance extends React.Component
{
  render() {
    return(
      <section id="Chance">
        <div id="people">
          <div className="wrapper">
            <p>
              <span className="highlight">Не упусти шанс</span> испытать свои силы<br/>
              в соревнованиях <span className="highlight">всеукраинского</span> масштаба<br/>
              &#60;<span className="headerlight">Like it'20</span>&#62;
            </p>
              {
                /*<a href="https://docs.google.com/forms/d/1yZTTsO9liKYFruzPYB5mV3FOW6L-8oLYgVwVJ8LJbmQ/edit?usp=sharing"
                 className="button">Регистрация</a>*/
              }
          </div>
        </div>
      </section>
    )
  }
}

export default Chance;