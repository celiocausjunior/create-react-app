import React from 'react';
import { useState } from 'react';
import './styles.scss';
import { makeRequest } from '../../../utils/request';
import { DataResponse } from '../../../core/types/DataResponse';

const Search = () => {

    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<DataResponse>();

    console.log(userData);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest({ url: `/${search}` })
            .then(response => setUserData(response.data));
    }



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

            {userData &&(<div className="response-container">
                <div className="row">
                    <div className="col-3">
                        <img
                            src={userData?.avatar_url}
                            className="rounded mx-auto d-block gitImage"
                            alt=""
                            height="280px"
                            width="284px"
                        />
                        <button type="button" className="btn btn-primary rounded mx-auto d-block mt-3">Ver Perfil</button>
                    </div>
                    <div className="col-8">
                        <span className="badge badge-light mt-5">Repositórios Públicos: {userData?.public_repos} </span>
                        <span className="badge badge-light mt-5 ml-4">Seguidores: {userData?.followers} </span>
                        <span className="badge badge-light mt-5 ml-4">Seguindo: {userData?.following} </span>
                   
                        <ul className="list-group">
                            <li className="list-group-item information mt-4 border-bottom-0">Informações</li>
                            <li className="list-group-item border-top">Empresa: {userData?.company} </li>
                            <li className="list-group-item">Website/Blog: {userData?.blog}</li>
                            <li className="list-group-item">Localidade: {userData?.location}</li>
                            <li className="list-group-item">Membro desde: {userData?.created_at} </li>
                        </ul>
                    </div>
                </div>
            </div>)}
            
        </div>
    );
}

export default Search;
