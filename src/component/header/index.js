import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/google-drive-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';

const index = () => {
  return (
    <div className='header'>
        <div className='header_logo'>
            <img src={GDriveLogo} alt='Google Drive'/>
            <span>CS Local Bois Storage</span>
        </div>
        <div className='header_searchContainer'>
            <div className="header_searchBar">
                <SearchIcon />
                <input type='text' placeholder='Search in Drive'/>
                <ExpandMoreIcon />
            </div>
        </div>
        <div className='header_icons'>
            <span className='help_outline'>
                <HelpOutlineIcon />
            </span>
            <span>
                <SettingsIcon />
            </span>
            <AppsIcon />
            <img src="" alt='User Photos'/>
        </div>
    </div>
  )
}

export default index
