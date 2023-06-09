import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <section>
        <p>TrybeTunes</p>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/search" render={ (props) => <Search { ...props } /> } />
        <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
        <Route path="/favorites" render={ (props) => <Favorites { ...props } /> } />
        <Route exact path="/profile" render={ (props) => <Profile { ...props } /> } />
        <Route path="/profile/edit" render={ (props) => <ProfileEdit { ...props } /> } />
        <Route exact path="*" render={ (props) => <NotFound { ...props } /> } />
      </section>
    );
  }
}

export default App;
