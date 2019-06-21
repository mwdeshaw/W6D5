import React from 'react';
import Time from './time.jsx';
import Calendar from './date.jsx';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className='clock'>
           <Time date={this.state.date}/>
          <Calendar date={this.state.date}/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.ticker = setInterval(this.tick.bind(this), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.ticker);
    this.ticker = 0;
  };

}

export default Clock;