# Next.js Clean Architecture

This project follows a **clean architecture** approach in a Next.js application, ensuring separation of concerns, maintainability, and scalability. The architecture organizes the code into **core, data, domain, and presentation layers**, following best practices for frontend development.

## Project Structure

```
└── Clean-AF
    ├── app
    │   ├── globals.css          # Global styles
    │   ├── layout.tsx           # Main layout component
    │   └── page.tsx             # Entry page
    ├── constants
    │   └── ApiEndpoints.ts      # API endpoints configuration
    ├── core
    │   └── Home
    │       ├── data
    │       │   ├── datasource
    │       │   │   └── ImageDataSource.ts      # Handles data fetching
    │       │   ├── model
    │       │   │   └── ImageModel.ts          # Defines data model
    │       │   └── repositories
    │       │       └── ImageRepositoryImpl.ts # Implements repository pattern
    │       ├── domain
    │       │   ├── entity
    │       │   │   └── Image.ts               # Core entity definition
    │       │   ├── repositories
    │       │   │   └── ImageRepository.ts     # Repository interface
    │       │   └── usecase
    │       │       └── GetRandomImageUseCase.ts # Business logic for fetching an image
    │       └── presentation
    │           ├── di
    │           │   └── HomeProvider.tsx       # Dependency injection provider
    │           ├── state
    │           │   └── homeSlice.ts           # Redux slice for state management
    │           ├── view
    │           │   ├── HomePageComponent.tsx  # Home page UI component
    │           │   └── ImageDialog.tsx        # Dialog component
    │           └── viewmodel
    │               └── HomeViewModel.ts       # ViewModel for handling UI logic
    ├── redux
    │   ├── store.ts              # Redux store setup
    │   └── storeProvider.tsx      # Redux provider
    ├── .gitignore
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    └── tsconfig.json
```

## Features
- **Separation of concerns**: Organized into data, domain, and presentation layers.
- **Redux integration**: State management with Redux.
- **Dependency Injection (DI)**: Implemented for better maintainability.
- **Scalable architecture**: Follows clean code principles.
- **TypeScript support**: Ensures type safety and better developer experience.

## Getting Started
### Prerequisites
- Node.js v16+
- npm or yarn installed

### Installation
```sh
# Clone the repository
git clone <repo-url>

# Navigate to the project directory
cd Clean-AF

# Install dependencies
npm install  # or yarn install
```

### Running the Application
```sh
npm run dev  # or yarn dev
```

The app will be available at `http://localhost:3000`.
