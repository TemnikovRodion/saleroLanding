import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router';
import { ConfigProvider } from 'antd';
import { globalHistory } from './GlobalHistory';
import locale from 'antd/lib/locale/ru_RU';
import '@/Styles/site.scss';
import App from '@/App';

ReactDOM.render(
  <ConfigProvider locale={locale}>
    <Router history={globalHistory}>
      <Route path={'/'} component={App} />
    </Router>
  </ConfigProvider>,
  document.getElementById('app'),
);
