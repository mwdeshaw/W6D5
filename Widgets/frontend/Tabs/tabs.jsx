import React from 'react';
import TabHeader from './tab_header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      tabs: props.tabs
    };
    this.tabClicked = this.tabClicked.bind(this);
  }

  render() {
    return(
    <div>
      <h1>Tabs</h1>
      <div className='tabs'>
        <TabHeader tabs= {this.state.tabs.map(tab => tab.title)} onClick={this.tabClicked} />
        <div className='tab-content'> 
          <article>{this.state.tabs[this.state.selected].content}</article>
        </div>
      </div>
    </div>
    );
  }

  tabClicked(idx) {
    const tabs = document.querySelectorAll('.tab-header > span');
    tabs[this.state.selected].classList.remove('active');
    tabs[idx].classList.add('active');
    this.setState({selected: idx});
  }

  componentDidMount() {
    this.tabClicked(0);
  }
}

export default Tabs;