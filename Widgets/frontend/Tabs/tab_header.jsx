import React from 'react';

class TabHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: props.tabs
    };
    this.onClick = props.onClick;
  }

  render() {
    return (
      <div className='tab-header'>
        {this.state.tabs.map((tab, i) => (
          <span key={i} onClick={
            () => this.onClick(i)
          }>{tab}</span>
        ))}
      </div>
    );
  }
}

export default TabHeader;