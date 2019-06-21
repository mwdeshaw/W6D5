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
          {title: 'Tab 2', content: 'Tab 2 Content'},
          {title: 'Tab 3', content: 'Tab 3 Content'},
        ]}/>
      </div>
    );
  }
}

export default Widget;