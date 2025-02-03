import React from 'react'
import '../../styles/FileItem.css';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Timestamp formmating
const FileItem = ({id, caption, timestamp, fileUrl, size}) => {
    //Get the timestamp of file uploaded (date uploaded, month, year)
    const fileDate = timestamp ? new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }) : 'Unknown';
    
    //Calculate file sizes in byte units
    const getFileSize = (fileSizeInBytes) => {
        let i = -1;
        const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            //Divide size by 1024 if bytes are over 1024
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        }
        while(fileSizeInBytes > 1024);

        //Round up the size results to the nearest decimal
        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + units[i];
    };
  
    return (
        //Display the file item with the file size, icon, and date uploaded
        <div className='fileItem'>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                <div className="fT_L">
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
                <div className="fT_R">
                    <p>{fileDate}</p>
                    <p>{getFileSize(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem
