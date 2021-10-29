import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router';
import { ConfigProvider } from 'antd';
import { globalHistory } from './GlobalHistory';
import locale from 'antd/lib/locale/ru_RU';
import '@/Styles/site.scss';
import App from '@/App';
import { PagesRouting } from './Routing';

ReactDOM.render(
  <ConfigProvider locale={locale}>
    <Router history={globalHistory}>
      <Route path={PagesRouting.Main} exact component={App} />

      <Route path={PagesRouting.Unsubscribe} exact>
        <h3 style={{ margin: 20 }}>Вы успешно отписались от оповещений!</h3>
      </Route>
    </Router>
  </ConfigProvider>,
  document.getElementById('app'),
);
