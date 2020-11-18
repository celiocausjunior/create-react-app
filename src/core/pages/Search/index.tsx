import React from 'react';
import { useState } from 'react';
import './styles.scss';
import { makeRequest } from '../../../utils/request';
import { DataResponse } from '../../../core/types/DataResponse';
import ImageLoader from './components/SearchLoader/ImageLoader';
import ProfileImage from './components/ProfileImage';
import ProfileInformation from './components/ProfileInformation';

export const Search = () => {

    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<DataResponse>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest({ url: `/${search}` })
            .then(response => setUserData(response.data))
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

            {userData && (<div className="response-container">
                <div className="row">
                    <div className="col-3 image">
                       <ProfileImage src={userData.avatar_url} />
                    </div>
                    <div className="col-8">
                        <ProfileInformation
                        publicRepo={userData.public_repos}
                        followers={userData.followers}
                        following={userData.following}
                        company={userData.location}
                        blog={userData.blog}
                        location={userData.location}
                        createAt={userData.created_at} 
                         />
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default Search;
