import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import { Helmet } from 'react-helmet';
import styles from './style.css';
import WithStyle from '../../WithStyle';

//Home 可认为是一个UI组件
class Home extends Component {
  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }
  render() { 
    return (
      <Fragment>
        <Helmet>
          <title>首页</title>
          <meta name="description" content="这是三元的技术博客，分享前端知识"/>
        </Helmet>
        <div className="test">
          {
            this.getList()
          }
        </div>
      </Fragment>
     
    )
  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
}

//将store中的数据作为props绑定到组件上
const mapStateToProps = state => ({
  list: state.home.newsList,
});

//将action作为props绑定到组件上
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
});

//provider 包裹的组件，需要使用state中的数据，必须要connect
const exportHome = connect(mapStateToProps, mapDispatchToProps)(WithStyle(Home, styles));

//loadData 定义组件获取数据方法【用于服务端预取数据】，这里犹如next.js getinitData() ,nuxt asyncData()
exportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
};
export default exportHome;