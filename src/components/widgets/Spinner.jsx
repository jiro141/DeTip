import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rotation: 0
    };
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    const prevPathname = prevProps.location.pathname;

    if (pathname !== prevPathname) {
      this.setState({ loading: true }, () => {
        this.rotate();
      });
    }
  }

  rotate = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        rotation: prevState.rotation + 1,
        loading: false
      }));
      clearInterval(this.interval);
    }, 2000); // Cambia la velocidad de rotación según tus preferencias
  };

  render() {
    const { loading, rotation } = this.state;
    const spinnerStyle = {
      transform: `rotate(${rotation}deg)`
    };

    if (loading) {
      return (
        <div className="spinner">
          <img
            src={logo}
            alt="Spinner"
            style={spinnerStyle}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

const SpinnerWithLocation = () => {
  const location = useLocation();
  return <Spinner location={location} />;
};

export default SpinnerWithLocation;
