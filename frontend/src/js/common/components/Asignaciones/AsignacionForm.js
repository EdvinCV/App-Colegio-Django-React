import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {
    renderCurrency,
    renderNumber,
    renderField,
    renderFilePicker,
    renderTextArea,
} from "../Utils/renderField/renderField";

const toNumber = value => value && Number(value);

class AsignacionForm extends Component {

    render() {
        return (
            <div className="py-4">
                <h3>Asignación de curso</h3>
                <div className="mb-4 col-12">
                    <form onSubmit={this.props.handleSubmit}>
                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="estudiante">Seleccione alumno:</label>
                            <Field
                                name="estudiante"
                                placeholder="Seleccione estudiante"
                                component={renderField}
                                type="number"
                            /><br/>
                            <label htmlFor="curso">Nombre curso:</label>
                            <Field
                                name="curso"
                                placeholder="Seleccione curso"
                                component={renderField}
                                type="number"
                            /><br/>
                            <button className="btn btn-primary" type="submit">
                                Asignar
                            </button>
                            <button className="btn btn-secondary" type="button" onClick={this.props.onBack}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
                <br/> 
                
            </div>
        );
    }
}

AsignacionForm.propTypes = {
    estudiante : PropTypes.number,
    curso : PropTypes.number,
}

const AsignacionFormu = reduxForm(
    {
        form: 'AsignacionForm',
    }
)(AsignacionForm);

export default AsignacionFormu;
