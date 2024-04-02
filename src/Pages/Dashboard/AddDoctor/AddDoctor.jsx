import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { People } from '@mui/icons-material';

const AddDoctor = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    const handleAddDoctor = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoData = uploadedFiles.length > 0 ? uploadedFiles[0] : null;
        // Extract the necessary data from photoData
        const photoPath = photoData ? photoData.path : null;
        console.log(photoPath);
    }

    const handleSelectValue = (e) => {
        setSelectedValue(e.target.value); // Update selected value state
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
            // Call your backend API endpoint to upload files
        },
    });

    return (
        <div className="w-1/2">
            <h2 className="text-2xl font-bold">Add New Doctor</h2>
            <div className="bg-gray-100 p-10 mt-4 rounded">
                <form onSubmit={handleAddDoctor}>
                    <label htmlFor="name" className="font-bold">Name</label>
                    <input className="p-2 my-2 block border border-gray-400 border-dotted w-full rounded-md outline-none" type="text" name="name" placeholder="Name" id="" />
                    <label className="font-bold" htmlFor="email">Email</label>
                    <input className="p-2 w-full border border-gray-400 border-dotted my-2 block rounded-md outline-none" type="email" name="email" placeholder="email" id="" />
                    <label className="font-bold" htmlFor="category">Specialties</label>
                    <select
                        value={selectedValue}
                        onChange={handleSelectValue}
                        className="p-2 border border-gray-400 border-dotted outline-none w-full my-2 block rounded-md"
                        name="category"
                        id="category"
                    >
                        <option value="Teeth specialties">Teeth specialties</option>
                        <option value="Mouth specialties">Head specialties</option>
                        <option value="Brain specialties">Brain specialties</option>
                        <option value="Heart specialties">Heart specialties</option>
                    </select>
                    <div className='w-full bg-gray-300 text-center align-middle pt-4 h-[100px]'>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <People/>
                            <p title='click now to upload file' className='cursor-pointer hover:underline'>Upload file here or click to browse.</p>
                            <ul className='w-full text-blue-500'>
                                {uploadedFiles.map((file) => (
                                    <li className='' key={file.name}>{file.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button className="btn hover:bg-[#30336b] w-full mt-2 outline-none border-0 text-white font-bold bg-[#130f40] mb-8">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
