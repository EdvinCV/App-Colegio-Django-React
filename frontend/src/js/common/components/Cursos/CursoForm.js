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

class CursoForm extends Component {

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div className="py-4">
                <h3>Ingresar nuevo curso</h3>
                <div className="mb-4 col-12">
                    <form onSubmit={this.props.handleSubmit}>
                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="maestro">Seleccione maestro encargado:</label>
                            <Field
                                name="maestro"
                                placeholder="Maestro encargado"
                                component={renderField}
                                type="number"
                            /><br/>
                            <label htmlFor="normal_curso">Nombre curso:</label>
                            <Field
                                name="nombre_curso"
                                placeholder="Ingrese nombre del curso"
                                component={renderField}
                                type="text"
                            /><br/>
                            <label htmlFor="descripcion">Descripción:</label>
                            <Field
                                name="descripcion"
                                placeholder="Ingrese descripción del curso"
                                component={renderField}
                                type="text"
                            /><br/>
                            <label htmlFor="normal_curso">Créditos</label>
                            <Field
                                name="creditos"
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

CursoForm.propTypes = {
    maestro : PropTypes.number,
    nombre_curso : PropTypes.string,
    descripcion : PropTypes.string,
    creditos : PropTypes.number
}

const CursoFormu = reduxForm(
    { 
        form: 'CursoForm'
    })(CursoForm);

export default CursoFormu;