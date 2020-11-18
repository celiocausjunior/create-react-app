import React from 'react';

type Props = {
    src?:string;
}

const ProfileImage = ({src}: Props) => {
      return ( 
        <div>
            <img
                src={src}
                className="rounded mx-auto d-block gitImage"
                alt=""
                height="280px"
                width="284px"
            />
            <button type="button" className="btn btn-primary rounded mx-auto d-block mt-3">Ver Perfil</button>
        </div>
    );
}

export default ProfileImage;