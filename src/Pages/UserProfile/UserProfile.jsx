import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex items-center justify-center card card-compact w-auto bg-base-100 shadow-xl  ">
            <h2>USER INFORMATION:</h2>
            {user && <div>
              
                <p>Email : {user.email}</p>
              
            </div>}

        </div>
    );
};

export default UserProfile;