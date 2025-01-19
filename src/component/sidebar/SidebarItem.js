import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SidebarItem = ({arrow, icon, label}) => {
    return (
        <div className='sidebarItem'>
            <div className="sidebarItme_arrow">
                {arrow && (<ArrowRightAltIcon />)}
            </div>

            <div className="sidebarItem_main">
                {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem
