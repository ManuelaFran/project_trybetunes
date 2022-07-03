import React from 'react';
import { NavLink } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: false,
    };

    this.showUser = this.showUser.bind(this);
  }

  componentDidMount() {
    this.showUser();
  }

  showUser() {
    this.setState({ loading: true });
    getUser()
      .then((response) => this.setState({
        name: response.name,
        loading: false,
      }));
  }

  render() {
    const { name, loading } = this.state;

    return (
      <header data-testid="header-component">
        { loading && <Loading /> }
        <nav>
          <NavLink data-testid="link-to-search" to="/search">Search</NavLink>
          <NavLink data-testid="link-to-favorites" to="/favorites">Favorites</NavLink>
          <NavLink data-testid="link-to-profile" to="/profile">Profile</NavLink>
        </nav>
        <p data-testid="header-user-name">{ name }</p>
      </header>
    );
  }
}

export default Header;
