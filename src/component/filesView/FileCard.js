import React from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import '../../styles/FileCard.css';

const FileCard = ({id, caption, fileUrl}) => {
    return (
        <div className='fileCard' onClick={() => window.open(fileUrl, '_blank')}>
            <div className="fC_top">
                <InsertDriveFileIcon style={{fontSize: 100}} />
            </div>
            <div className="fC_bottom">
                <p>{id} {caption}</p>
            </div>
        </div>
    )
}

export default FileCard
