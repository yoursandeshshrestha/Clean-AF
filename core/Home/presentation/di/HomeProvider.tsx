'use client';

import { ReactNode, useEffect } from 'react';
import { RemoteImageDataSource } from '../../data/datasource/ImageDataSource';
import { ImageRepositoryImpl } from '../../data/repositories/ImageRepositoryImpl';
import { GetRandomImageUseCase } from '../../domain/usecase/GetRandomImageUseCase';
import { HomeViewModel } from '../viewmodel/HomeViewModel';
import { Dispatch } from '@reduxjs/toolkit';

// Create a context to provide the ViewModel if needed
import { createContext, useContext } from 'react';

const HomeViewModelContext = createContext<HomeViewModel | null>(null);

export const useHomeViewModel = () => {
  const context = useContext(HomeViewModelContext);
  if (!context) {
    throw new Error('useHomeViewModel must be used within a HomeProvider');
  }
  return context;
};

interface HomeProviderProps {
  children: ReactNode;
  dispatch: Dispatch;
}

export const HomeProvider: React.FC<HomeProviderProps> = ({ children, dispatch }) => {
  // Setup dependency injection
  const dataSource = new RemoteImageDataSource();
  const repository = new ImageRepositoryImpl(dataSource);
  const useCase = new GetRandomImageUseCase(repository);
  const viewModel = new HomeViewModel(useCase, dispatch);

  // Fetch the image when the component mounts
  useEffect(() => {
    viewModel.fetchRandomImage();
  }, []);

  return (
    <HomeViewModelContext.Provider value={viewModel}>
      {children}
    </HomeViewModelContext.Provider>
  );
};