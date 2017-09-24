import ReactOnRails from 'react-on-rails';

import VideoTest from '../bundles/VideoTest/components/VideoTest';
import IndexPage from '../bundles/IndexPage/components/IndexPage';
import NavBar from '../bundles/NavBar/NavBar';
import App from '../bundles/AppBar/App';
import AppIndexPage from '../bundles/AppIndexPage/AppIndexPage';
import AppGamePage from '../bundles/VideoTest/AppGamePage';
import AppShowPage from '../bundles/AppShowPage/AppShowPage';

ReactOnRails.register({
  VideoTest, IndexPage, NavBar, App, AppIndexPage, AppGamePage, AppShowPage
});
