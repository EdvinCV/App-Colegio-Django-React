import React, { Component } from 'react';
import { connect } from 'react-redux';

class Demo extends Component {
    render() {
        return (
            <div className="page-header py-4 no-gutters row">
                <div className="text-sm-left mb-3 text-center text-md-left mb-sm-0 col-12 col-sm-4">
                    <span
                        className="text-uppercase page-subtitle">Dashboard
                    </span>
                    { this.props.usuarioActual == 0 ? <h3 className="page-title">Usuario Administrador</h3> : <h3 className="page-title">Usuario Estudiante</h3>}
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ usuarioActual: state.login.me.rol });

export default connect(mapStateToProps,null)(Demo);
