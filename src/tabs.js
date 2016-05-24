import React, {Component, cloneElement} from 'react';
import cx from 'classnames';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
      tabsAbove: this.props.tabsAbove,
      onChange: this.props.onChange
    };

    this.handleClick = this.handleClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedIndex: nextProps.selectedIndex
    });
  }

  onClick(id) {
    var previousIndex = this.state.selectedIndex;

    this.setState({
      selectedIndex: id
    });

    this.state.onChange(previousIndex, id);
  }

  _getChildren() {
    return [this._getTabList(), this._getTabPanels()];
  }

  _getTabList() {
    var self = this;
    var index = 0;
    var children = this.props.children;
    var tabList = this.state.tabsAbove ? children[0] : children.slice[-1];
    var selectedIndex = this.state.selectedIndex;

    return(cloneElement(tabList, {
      ref: 'tablist',
      key: index,
      children: React.Children.map(tabList.props.children, function (tab) {
        var currentIndex = index++;

        return cloneElement(tab, {
          ref: `tab-${currentIndex}`,
          onClick: self.onClick,
          id: currentIndex,
          selected: selectedIndex == currentIndex
        });
      })
    }));
  }

  _getTabPanels() {
    var index = 0;
    var children = this.props.children;
    var tabPanels = this.state.tabsAbove ?
      children.slice(1, children.length) :
      children.slice(0, -1);
    var selectedIndex = this.state.selectedIndex;

    return(React.Children.map(tabPanels, function (tabPanel) {
      var currentIndex = index++;

      return cloneElement(tabPanel, {
        ref: `panel-${currentIndex}`,
        id: currentIndex,
        selected: selectedIndex == currentIndex
      });
    }));
  }

  render() {
    return(
      <div className={cx('', this.props.className)}>
        {this._getChildren()}
      </div>
    );
  }
};

Tabs.propTypes = {
  className: React.PropTypes.string,
  selectedIndex: React.PropTypes.number,
  onChange: React.PropTypes.func
};

Tabs.defaultProps = {
  selectedIndex: 0,
  tabsAbove: true,
  onChange: function () {}
};

export default Tabs;
