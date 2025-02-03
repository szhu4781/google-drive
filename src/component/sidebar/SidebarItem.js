import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../../styles/SidebarItem.css'

const SidebarItem = ({arrow, icon, label}) => {
    return (
        <div className='sidebarItem'>
            <div className="sidebarItem_arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>

            <div className="sidebarItem_main">
                {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem
