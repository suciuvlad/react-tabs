import React, {Component} from 'react';
import cx from 'classnames';

class TabPanel extends Component {
  render() {
    let classes = cx(
      this.props.className,
      {'is-selected': this.props.selected}
    );

    return(
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

TabPanel.propTypes = {
  className: React.PropTypes.string,
  selected: React.PropTypes.bool
};

export default TabPanel;
