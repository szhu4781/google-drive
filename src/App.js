import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';

import Logo from './media/google-drive-logo.png';

import { auth, provider } from "./firebase";
import { userState } from 'react';

function App() {
    const [user, setUser] = useState({
        displayName: "System Admin 1",
        email: "zhu.shengwei35@gmail.com",
        emailVerified: true,
        phoneNumber: null,
        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocL-Pq7rM8Bw1-NT5u8af3F15gzu5hOxpMM_iAM02LQYxr_knQ=s450-c-no"
    })

    return (
        <div className="App">
        <Header />
        <Sidebar />
        </div>
    );
}

export default App;
