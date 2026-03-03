## summary
I have created this project using React.js, Tailwind CSS, React Icons, and React Router DOM. I have also protected the page so that if the user is not logged in, they will be redirected and will not be able to access the page.

# Project Overview

This project is a frontend authentication-based dashboard system built using React.js and Tailwind CSS.

It includes:

Login system (without backend)

LocalStorage based authentication

Protected routes

Responsive sidebar with hamburger menu (mobile view)

Dark mode support

Fully responsive layout (mobile + tablet + desktop)

# Protected Routes

If auth is not true → redirect to login page

Direct URL access is blocked
# Dark Mode

Tailwind dark mode support

Sidebar icons and background adapt to theme

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
