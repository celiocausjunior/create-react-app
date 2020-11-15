import React from 'react';
import './styles.scss';

const Search = () => {
    return (
        <div className="search-content">
            <div className="search-box">
                <h1 className="search-title">
                    Encontre um perfil Github
                 </h1>
                <form>
                    <div className="form-group">
                        <div className="col-7">
                            <input type="text"
                                className="form-control"
                                placeholder="Usuário do Github"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Encontrar</button>
                </form>
            </div>
            <div className="response-search">
                <div className="row">
                    <div className="col-6">
                        <h3>Foto</h3>
                    </div>
                    <div className="col-6">
                        <h3>Informações</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
