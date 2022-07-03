import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../component/Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      buttonDisabled: true,
      loading: false,
      access: false,
    };
  }

  componentDidMount() { // Atualizar o estado do componente? Sim.
    this.didMount = true;
  }

  componentWillUnmount() {
    this.didMount = false;
  }

  handleButton = () => {
    const { userName } = this.state;
    const minCaracteres = 3;
    this.setState({
      buttonDisabled: userName.length < minCaracteres,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      userName: value,
    }, this.handleButton);
  }

  saveUser = () => {
    this.setState({
      loading: true,
    }, async () => {
      const { userName } = this.state;
      await createUser({ name: userName });
      if (this.didMount) {
        this.setState({ loading: false, access: true });
      }
    });
  }

  render() {
    const { buttonDisabled, userName, loading, access } = this.state;
    if (loading) return <Loading />;
    if (access) return <Redirect to="/search" />;
    return (
      <div data-testid="page-login">
        <form>
          <input
            data-testid="login-name-input"
            id="userName"
            name="userName"
            type="text"
            placeholder="Nome"
            value={ userName }
            onChange={ this.handleChange }
          />
          <button
            data-testid="login-submit-button"
            type="submit"
            onClick={ this.saveUser }
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
