import React from 'react';
import { useState } from 'react';
import './styles.scss';
import GithubImage from '../../assets/images/github.png'

const Search = () => {


    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState('');



    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(userResponse => setUserData);

    }

    console.log(userData);


    return (
        <div className="search-content">
            <div className="search-box">
                <h1 className="search-title">
                    Encontre um perfil Github
                 </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="col-7">
                            <input type="text"
                                className="form-control"
                                placeholder="Usuário do Github"
                                required
                                value={search}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Encontrar</button>
                </form>
            </div>
            <div className="response-container">
                <div className="row">
                    <div className="col-6">
                        {!userData && (
                            <img
                                src={GithubImage}
                                className="responsive gitImage"
                                alt=""
                                height="280px"
                                width="284px"
                            />
                        )}
                    </div>
                    <div className="col-6">
                        <h3>Informações</h3><br />
                        <ul className="list-group">
                            <li className="list-group-item">Empresa:  </li>
                            <li className="list-group-item">Website/Blog: </li>
                            <li className="list-group-item">Localidade: </li>
                            <li className="list-group-item">Membro desde: </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
