import React, {Fregment} from 'react';
import { Helmet } from 'react-helmet';

const Login = (props) => {
  return (
    <div>
      <Helmet>
        <title>登录页</title>
        <meta name="description" content="这是三元的博客，丰富多彩的干货"/>
      </Helmet>
      <div>Login</div>
    </div>
  )
};

export default Login;