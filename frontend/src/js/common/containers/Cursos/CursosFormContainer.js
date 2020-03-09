import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubmissionError from 'redux-form/lib/SubmissionError';
import CursoForm from '../../components/Cursos/CursoForm';
import { insertCurso } from '../../../redux/actions/cursos/insertCurso';


class CursosFormContainer extends Component {
    
    handleOnDelete = id => {
        console.log("handleOnDelete");
    }

    submit = values => {
        console.log(values);
        return this.props.insertCurso(values);
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
                <CursoForm onSubmit={this.submit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleOnBack}
                        onDelete={this.handleOnDelete} />
            </div>
        );
    }
}

CursosFormContainer.propTypes = {
    insertCurso: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCurso })(CursosFormContainer));
