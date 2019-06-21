import React from 'react';
import Clock from './Clock/clock';
import Tabs from './Tabs/tabs';


class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Clock/>
        <Tabs tabs={[
          {title: 'Tab 1', content: 'Tab 1 Content'},
          {title: 'Tab 2', content: <img src='../dist/Ronil_Bhatia.jpg'/>},
          { title: 'Tab 3', content: 
            <div class='stache'>
              <img src='../dist/Ronil_Bhatia.jpg' />
              <i class='mustache-solid icon'></i>
            </div>},
        ]}/>
      </div>
    );
  }
}

export default Widget;