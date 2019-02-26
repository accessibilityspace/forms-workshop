import React from 'react';
import PropTypes from 'prop-types';


class ErrorContainer extends React.Component {

    getTotalErrorsParagraph = numberOfErrors => (<p>{`You have ${numberOfErrors} errors in the form:`}</p>)

    getInputErrorParagraph = inputName => (<p key={inputName}>{`The ${inputName} field is invalid.`}</p>)

    render() {
        const { inputs } = this.props;
        const invalidInputCount = Object.keys(inputs).filter(key => inputs[key]).length;
        return (<div role="alert" className="visually-hidden">
            {invalidInputCount > 0 ? this.getTotalErrorsParagraph(invalidInputCount) : null}
            {Object.keys(inputs).map(inputKey => {
                return (inputs[inputKey] ? this.getInputErrorParagraph(inputKey) : null)
            })}
        </div>);
    }
}

ErrorContainer.propTypes = {
    inputs: PropTypes.object.isRequired
};

export default ErrorContainer;