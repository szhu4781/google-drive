import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import FilesView from './component/filesView/FilesView';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState({
        displayName: 'System Admin',
        email: 'zhu.shengwei35@gmail.com',
        emailVerified: true,
        phoneNumber: null,
        photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocL-Pq7rM8Bw1-NT5u8af3F15gzu5hOxpMM_iAM02LQYxr_knQ=s450-c-no'
    })

    return (
        <div className="App">
            <Header userPhoto={user.photoURL}/>
            <div className="app_main">
                <Sidebar />
                <FilesView />
            </div>

        </div>
    );
}

export default App;
