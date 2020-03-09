import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubmissionError from 'redux-form/lib/SubmissionError';
import AsignacionForm from '../../components/Asignaciones/AsignacionForm';
import { insertAsignacion } from '../../../redux/actions/asignaciones/insertAsignacion';


class AsignacionesFormContainer extends Component {

    handleOnDelete = id => {
        console.log("handleOnDelete");   
    }
    
    submit = values => {
        console.log(values);
        return this.props.insertAsignacion(values);
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <AsignacionForm
                    onSubmit={this.submit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}
                    onDelete={this.handleOnDelete}
                />
            </div>
        );
    }
}

AsignacionesFormContainer.propTypes = {
    insertAsignacion: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertAsignacion })(AsignacionesFormContainer));
