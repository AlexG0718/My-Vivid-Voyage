import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
    }
    return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;