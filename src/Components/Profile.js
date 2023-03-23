import { useContext } from 'react';
import UserContext from '../Context/UserContext'
function Profile() {
    const {user,setUser} = useContext(UserContext);

    const handleLogin = () =>{
        user
        ? setUser()
        : setUser({id:1,
            username:'kerem',
            bio:'lorem ipsum'})
    }
    
  return (
    <div>
        {
            user
            ?<button onClick={handleLogin}>Log out</button>
            :<button onClick={handleLogin}>Login</button>
        }
        
        <code>{JSON.stringify(user)}</code>
    </div>
  )
}

export default Profile