import React, { Component } from 'react';
//函数返回组件-高阶函数
export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      // staticContext 是 是服务端特有属性 - context={xxxx}
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss());
      }
    }
    render() {
      return <DecoratedComponent {...this.props} />
    }
  };
}