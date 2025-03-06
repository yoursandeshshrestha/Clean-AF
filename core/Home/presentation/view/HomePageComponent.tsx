'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useHomeViewModel } from '../di/HomeProvider';
import ImageDialog from './ImageDialog';

const HomePageComponent: React.FC = () => {
  const { image, loading, error, isDialogOpen } = useSelector((state: RootState) => state.home);
  const viewModel = useHomeViewModel();

  const handleRefresh = () => {
    viewModel.fetchRandomImage();
  };

  const handleImageClick = () => {
    viewModel.openDialog();
  };

  const handleCloseDialog = () => {
    viewModel.closeDialog();
  };

  if (loading) {
    return (
      <div className="p-4 text-center">
        <div className="mb-4">Loading image...</div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!image) {
    return <div className="p-4 text-center">No image found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src={image.url} 
          alt={image.title} 
          className="w-full h-auto cursor-pointer"
          onClick={handleImageClick}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
          <p className="text-gray-600 mb-4">By {image.author}</p>
          <button 
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load Another Image
          </button>
        </div>
      </div>

      {/* Dialog Component */}
      {image && (
        <ImageDialog
          image={image}
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default HomePageComponent;