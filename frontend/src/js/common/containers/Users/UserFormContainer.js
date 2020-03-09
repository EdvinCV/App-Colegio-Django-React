import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubmissionError from 'redux-form/lib/SubmissionError';
import UserForm from '../../components/Users/UserForm';
import { insertUser } from '../../../redux/actions/cursos/insertCurso';


class UserFormContainer extends Component {
    
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
                <UserForm onSubmit={this.submit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleOnBack}
                        onDelete={this.handleOnDelete} />
            </div>
        );
    }
}

UserFormContainer.propTypes = {
    insertUser: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertUser })(UserFormContainer));
