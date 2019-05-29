import React, { Component } from 'react';

// Use in case of wrapping components that make http requests

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;