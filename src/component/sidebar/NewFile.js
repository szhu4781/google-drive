import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../../styles/NewFile.css';
import cloudinary from '../../cloudinary';
import { makeStyles } from '@material-ui/styles';
import { Modal, Box, Button } from '@mui/material';

function getModalStyle(){
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const userStyles = makeStyles((theme) => ({
    paper: {
        position: `absolute`,
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: `2px solid #000`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const NewFile = () => {
    const classes = userStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        if(e.target.files[0]){
            setFile(e.target.files[0]);
        }
    }

    const handleUpload = async () => {
        setUploading(true);
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    
        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
                {
                    method: "POST",
                    body: formData
                }
            );
            const data = await response.json();
    
            console.log("Uploaded File URL:", data.secure_url);
    
            // Simulate Firebase-like database storage (optional)
            const fileData = {
                timestamp: new Date(),
                caption: file.name,
                fileUrl: data.secure_url,  // Cloudinary URL
                size: file.size,  // File size
            };
    
            console.log("Stored File Metadata:", fileData);
    
            setUploading(false);
            setOpen(false);
            setFile(null);
        } catch (error) {
            console.error("Upload failed:", error);
            setUploading(false);
        }
    };
    
    return (
        <div className='newFile'>
            <div className="newFile_container" onClick={handleOpen}>
                <AddIcon />
                <p>New</p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                                <>
                                    <input type="file" onChange={handleChange} />
                                    <button onClick={handleUpload}>Upload</button>
                                </>
                            )
                    }
                </div>
            </Modal>
        </div>
    )
}

export default NewFile
