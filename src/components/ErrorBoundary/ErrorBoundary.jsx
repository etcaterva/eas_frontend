import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    window.Raven.captureException(error, { extra: errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { render, children } = this.props;
    if (hasError) {
      return render(error, errorInfo);
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  render: PropTypes.func.isRequired,
};

export default ErrorBoundary;
