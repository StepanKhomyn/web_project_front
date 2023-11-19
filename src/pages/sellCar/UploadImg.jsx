import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadImg = () => {
    const [images, setImages] = useState([]);

    const handleFileUpload = (e) => {
        const files = e.target.files;
        const imageFiles = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (event) => {
                // Add the uploaded image file to the state
                imageFiles.push({
                    url: event.target.result,
                    name: file.name,
                });

                // If all images are processed, update state with all images
                if (i === files.length - 1) {
                    setImages([...images, ...imageFiles]);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    return (
        <Box className="box-container">
            <Typography variant="h6" component="h2" gutterBottom>
                Зовнішній вид (фотографії)
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<CloudDownloadIcon />}
                component="label"
            >
                Завантажити фото
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                />
            </Button>
            <div className="uploaded-block">
            {images.map((image, index) => (
                    <div className="uploaded-block-item">
                        <img src={image.url} alt={image.name} style={{ width: '200px', height: 'auto' }} />
                        <p>{image.name}</p>
                        <Button variant="contained" color="error"  startIcon={<DeleteIcon />} onClick={() => handleDeleteImage(index)}>
                            Видалити
                        </Button>
                </div>
            ))}
            </div>
        </Box>
    );
};

export default UploadImg;
