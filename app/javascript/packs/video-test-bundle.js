import ReactOnRails from 'react-on-rails';

import App from '../bundles/AppBar/App';
import AppIndexPage from '../bundles/AppIndexPage/AppIndexPage';
import AppGamePage from '../bundles/VideoTest/AppGamePage';
import AppShowPage from '../bundles/AppShowPage/AppShowPage';
import AppGamesPage from '../bundles/AppGamesPage/AppGamesPage';

ReactOnRails.register({
  App, AppIndexPage, AppGamePage, AppShowPage, AppGamesPage
});
