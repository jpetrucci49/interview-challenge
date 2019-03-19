import React, { Component } from 'react';
import classNames from 'classnames';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

import './ListCard.scss';

class ListCard extends Component {
  render() {
    const {
    children,
    className,
    theme,
    dash,
    ...restProps
  } = this.props;
  
  const themeObj = {};

  switch(theme){
    case 'light':
      themeObj.class = 'light';
      break;
    case 'dark':
      themeObj.class = 'dark';
      break;
      default:
      themeObj.class = 'default'; 
  }

  const 
  const classes = classNames('ui-card', className, {[themeObj.class]: [theme]});

    return (
      <Base
        className={classes}
        dash={}
        {...restProps}
      >
        {children.map((e, i) => i = 1 -- list text-de)}
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
};

ListCard.defaultProps = {
  component: 'div',

};

export default ListCard;
