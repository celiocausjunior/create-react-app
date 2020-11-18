import React from 'react';

type Props = {
    publicRepo?:number;
    followers?:number;
    following?:number;
    company?:string;
    blog?: string;
    location?:string;
    createAt?:string;
}

const ProfileInformation = ({publicRepo,followers, following, company, blog, location, createAt }:Props) => {
    return (
        <div>
            <span className="badge badge-light mt-5">Repositórios Públicos: {publicRepo} </span>
            <span className="badge badge-light mt-5 ml-4">Seguidores: {followers} </span>
            <span className="badge badge-light mt-5 ml-4">Seguindo: {following} </span>

            <ul className="list-group">
                <li className="list-group-item information mt-4 border-bottom-0">Informações</li>
                <li className="list-group-item border-top">Empresa: {company} </li>
                <li className="list-group-item">Website/Blog: {blog}</li>
                <li className="list-group-item">Localidade: {location}</li>
                <li className="list-group-item">Membro desde: {createAt} </li>
            </ul>
        </div>

    );
}

export default ProfileInformation;

