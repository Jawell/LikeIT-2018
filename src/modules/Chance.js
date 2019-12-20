import React from 'react';

class Chance extends React.Component
{
state = {
    date: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var str = new Date().toDateString();
    var date = str.substr(-2,2);
    this.setState({ date });
  };
  render() {
   const { date } = this.state;
    return(
      <section id="Chance">
        <div id="people">
          <div className="wrapper">
            <p>
              <span className="highlight">Не упусти шанс</span> испытать свои силы<br/>
              в соревнованиях <span className="highlight">всеукраинского</span> масштаба<br/>
              &#60;<span className="headerlight">Like it'{date}</span>&#62;
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