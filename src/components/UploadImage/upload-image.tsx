// components/ImageUpload.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ccc;
`;

const UploadLabel = styled.label`
  background-color: #f06292;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #e91e63;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  return (
    <UploadWrapper>
      {imagePreview ? <ImagePreview src={imagePreview} alt="Profile" /> : <ImagePreview src="default-avatar.png" alt="Default Avatar" />}
      <UploadLabel htmlFor="imageUpload">Upload Imagem</UploadLabel>
      <HiddenInput id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} />
    </UploadWrapper>
  );
};

export default ImageUpload;
