import React, {Component} from 'react';
import cx from 'classnames';

class TabList extends Component {
  render() {
    return(
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default TabList;
