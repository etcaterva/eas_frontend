import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withFormValidation = WrappedComponent => {
  class WithFormValidation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formSubmitted: false,
        validations: {},
        changedFields: [],
      };
    }

    getChildContext() {
      return {
        registerValidatedField: this.registerValidatedField.bind(this),
        deregisterValidatedField: this.deregisterValidatedField.bind(this),
        onFieldChange: this.onFieldChange.bind(this),
        isFieldValid: this.isFieldValid.bind(this),
        updateFieldValidationState: this.updateFieldValidationState.bind(this),
        updateFieldChangedState: this.updateFieldChangedState.bind(this),
      };
    }

    isFormValid = () => {
      const validations = Object.values(this.state.validations);
      return validations.every(Boolean);
    };

    onSubmit = e => {
      console.log('submitting');

      if (!this.isFormValid()) {
        console.log('no ok', this.state.validations);
        e.preventDefault();
      } else {
        this.setState({
          formSubmitted: true,
        });
        console.log('ok');
        this.props.onSubmit(e);
      }
    };

    onFieldChange = (e, name, valid) => {
      this.updateFieldValidationState(name, valid);
      this.updateFieldChangedState(name);
    };

    registerValidatedField(name, valid, value) {
      console.log('register_field', name, valid, value);
      this.updateFieldValidationState(name, valid);

      if (value) {
        this.updateFieldChangedState(name);
      } else if (this.state.changedFields.indexOf(name) !== -1) {
        const changedFields = this.state.changedFields.slice();
        changedFields.splice(changedFields.indexOf(name));
        this.setState({
          changedFields,
        });
      }
    }

    updateFieldChangedState(name) {
      if (!this.state.changedFields.includes(name)) {
        const changedFields = this.state.changedFields.slice();
        changedFields.push(name);
        this.setState(() => ({
          changedFields,
        }));
      }
    }

    updateFieldValidationState(name, valid) {
      this.setState(
        previousState => ({
          validations: {
            ...previousState.validations,
            ...{
              [name]: valid,
            },
          },
        }),
        () => {
          this.triggerValidationChange();
        },
      );
    }

    isFieldValid(name) {
      const { changedFields, validations } = this.state;
      return changedFields.includes(name) ? validations[name] : undefined;
    }

    triggerValidationChange() {
      if (this.props.onValidationChange) {
        const validations = Object.values(this.state.validations);
        const isValid = validations.every(Boolean);
        this.props.onValidationChange(isValid);
      }
    }

    deregisterValidatedField(name) {
      this.setState(
        previousState => {
          const validations = Object.assign({}, previousState.validations);
          delete validations[name];
          return {
            validations,
          };
        },
        () => {
          if (this.props.onFieldDeregister) {
            this.props.onFieldDeregister(name);
          }
          this.triggerValidationChange();
        },
      );
    }

    render() {
      const { onSubmit, onFieldDeregister, onValidationChange, ...props } = this.props;
      console.log('formSubmitted', this.state.formSubmitted);
      // Note we're passing onFieldChange to the child component. You then need to manually wire up the change event.
      // For example <WithFieldValidationInput onChange={prop.onFieldChange} />
      return <WrappedComponent {...props} onSubmit={this.onSubmit} />;
    }
  }

  WithFormValidation.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onFieldDeregister: PropTypes.func,
    onValidationChange: PropTypes.func,
  };

  WithFormValidation.defaultProps = {
    onFieldDeregister: null,
    onValidationChange: null,
  };

  WithFormValidation.childContextTypes = {
    registerValidatedField: PropTypes.func,
    deregisterValidatedField: PropTypes.func,
    onFieldChange: PropTypes.func,
    isFieldValid: PropTypes.func,
    updateFieldValidationState: PropTypes.func,
    updateFieldChangedState: PropTypes.func,
  };

  return WithFormValidation;
};

export default withFormValidation;
