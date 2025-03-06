import React from 'react';
import { Image } from '../../domain/entity/Image';

interface ImageDialogProps {
  image: Image;
  isOpen: boolean;
  onClose: () => void;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ✕
        </button>
        <div className="p-2">
          <img 
            src={image.url} 
            alt={image.title} 
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
            <p className="text-gray-600">By {image.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDialog;