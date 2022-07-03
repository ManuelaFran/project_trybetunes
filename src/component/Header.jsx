import React from 'react';
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
        <p data-testid="header-user-name">{ name }</p>
      </header>
    );
  }
}

export default Header;
