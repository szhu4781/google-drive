import React, { useEffect, useState } from 'react'
import '../../styles/FilesView.css'
import supabase from '../../supabase';
import FileItem from './FileItem';

const FilesView = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        //Fetch data from Supabase realtime
        const fetchFile = async () => {
            try {
                const {data, error} = await supabase
                    .from('files')
                    .select('*');

                if(error) throw error;

                console.log('Fetched files from Supabase', data)

                //Store file data
                setFiles(data);

            } catch(error){
                console.log('Error fetching files: ', error.message);
            }
        };
        fetchFile();
    }, [])

    console.log(files)

    return (
        <div className='fileView'>
            <div className="fv_row">
            </div>
            <div className="fv_title">
                <div className="fv_title_left">
                    <p>Name</p>
                </div>
                <div className="fv_title_right">
                    <p>Last Modified</p>
                    <p>File Size</p>
                </div>
            </div>
            {
                //Map the files
                files.map(({id, caption, timestamp, fileUrl, size}) => (
                    <FileItem key={id} id={id} caption={caption} timestamp={timestamp} fileUrl={fileUrl} size={size} />
                ))
            }
        </div>
    )
}

export default FilesView
