import React, {Component} from 'react';
import cx from 'classnames';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    let classes = cx(
      this.props.className,
      {'is-selected': this.props.selected}
    );

    return(
      <div className={classes} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

Tab.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  selected: React.PropTypes.bool
};

export default Tab;
