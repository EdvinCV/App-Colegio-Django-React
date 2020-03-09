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

class NotasForm extends Component {

    render() {
        return (
            <div className="py-4">
                <h3>Ingresar nuevo curso</h3>
                <div className="mb-4 col-12">
                    <form onSubmit={this.props.handleSubmit}>
                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="curso">Seleccione curso:</label>
                            <Field
                                name="curso"
                                placeholder="Maestro encargado"
                                component={renderField}
                                type="number"
                            /><br/>
                            <label htmlFor="estudiante">Seleccione alumno:</label>
                            <Field
                                name="estudiante"
                                placeholder="Ingrese nombre del curso"
                                component={renderField}
                                type="text"
                            /><br/>
                            <label htmlFor="unidad">Unidad:</label>
                            <Field
                                name="unidad"
                                placeholder="Ingrese descripción del curso"
                                component={renderField}
                                type="text"
                            /><br/>
                            <label htmlFor="nota">Nota:</label>
                            <Field
                                name="nota"
                                placeholder="Ingrese créditos del curso"
                                component={renderField}
                                type="number"
                                parse={toNumber}
                            />
                            <button className="btn btn-primary" type="submit">
                                Ingresar
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

NotasForm.propTypes = {
    estudiante : PropTypes.number,
    curso : PropTypes.number,
    unidad : PropTypes.number,
    nota : PropTypes.number
}

const NotasFormu = reduxForm(
    { 
        form: 'NotasForm',
    })(NotasForm);

export default NotasFormu;