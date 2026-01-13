# Project Documentation

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Components](#components)
  - [App.jsx](#appjsx)
  - [TaskForm.jsx](#taskformjsx)
  - [TaskList.jsx](#tasklistjsx)
  - [TextFilter.jsx](#textfilterjsx)
- [Hooks](#hooks)
  - [useTask.js](#usetaskjs)
- [State Management](#state-management)
- [Data Persistence](#data-persistence)
- [Installation and Usage](#installation-and-usage)

## Project Overview

This is a simple To-Do application that allows users to create, manage, and filter their tasks. The application is built using React and Vite, with Tailwind CSS for styling.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **ESLint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Project Structure

The project follows a standard React project structure:

```
/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   └── react.svg
    ├── components/
    │   ├── TaskForm.jsx
    │   ├── TaskList.jsx
    │   └── TextFilter.jsx
    ├── Hooks/
    │   └── useTask.js
    └── logic/
        └── storage/
            └── index.js
```

- **`src/`**: Contains the main source code of the application.
- **`src/components/`**: Contains the reusable React components.
- **`src/Hooks/`**: Contains custom React hooks.
- **`src/logic/`**: Contains the business logic of the application, such as data persistence.
- **`public/`**: Contains the public assets of the application.

## Components

### App.jsx

The main component of the application. It orchestrates the other components and manages the application's state using the `useTask` hook.

### TaskForm.jsx

A form component that allows users to add new tasks to the list. It consists of an input field and an "Add" button.

### TaskList.jsx

A component that displays the list of tasks. It allows users to mark tasks as complete and delete them.

### TextFilter.jsx

A component that provides an input field for filtering the task list by text.

## Hooks

### useTask.js

A custom hook that encapsulates the logic for managing the tasks. It handles the following:

- **State Management:** Manages the `tasksList` and `filterText` states.
- **CRUD Operations:** Provides functions for adding, updating, and deleting tasks.
- **Filtering:** Filters the tasks based on the `filterText`.
- **Data Persistence:** Saves the task list to the browser's local storage.

## State Management

The application's state is managed using the `useState` and `useEffect` hooks within the `useTask` custom hook. The `tasksList` state holds the array of tasks, and the `filterText` state holds the current filter text.

## Data Persistence

The application persists the task list to the browser's local storage. The `useTask` hook saves the `tasksList` to local storage whenever it changes, and it retrieves the data from local storage when the application starts.

## Installation and Usage

1. **Clone the repository:**
   ```bash
   git clone git@github.com:luissalmon5/To-Do.git
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the project:**
    ```bash
    npm run dev
    ```
4. **Open your browser and navigate to `http://localhost:5173`**
