import './App.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import FilesView from './component/filesView/FilesView';

function App() {
    //add authentication

    return (
        <div className="App">
        <Header />
        <Sidebar />
        </div>
    );
}

export default App;
