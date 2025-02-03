import React, { useState } from 'react'
import '../../styles/NewFile.css'
import AddIcon from '@material-ui/icons/Add';
import supabase from '../../supabase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const NewFile = () => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = async () => {
        setUploading(true)

        const fileName = file.name;
        const filePath = `files/${fileName}`;

        try {
            // Upload file to Supabase
            const { data, error } = await supabase.storage
                .from('file upload') 
                .upload(filePath, file);

            if (error) throw error;

            console.log('File uploaded:', data);

            // Get the public URL of the file
            const { data: publicURLData, error: urlError } = supabase.storage
                .from('files')
                .getPublicUrl(filePath);

            const publicUrl = publicURLData.publicUrl;

            if (urlError) throw urlError;

            //Insert metadata to the files table
            const {error: insertError} = await supabase
                .from('files')
                .insert([
                    {
                        caption: fileName,
                        timestamp: new Date().toISOString(),
                        fileUrl: publicUrl,
                        size: file.size,
                    }
                ]);

            if(insertError) throw insertError;

            setUploading(false);
            setOpen(false);
            setFile(null);

        } catch (error) {
            console.error('Error uploading file:', error.message);
            setUploading(false);
        }
    }

    return (
        <div className='newFile'>
            <div className="newFile_container" onClick={handleOpen}>
                <AddIcon fontSize='large' />
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