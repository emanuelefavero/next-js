# Next JS

A Next.js cheat sheet repository

## Create a new Next.js app

```bash
npx create-next-app
```

### Use TypeScript, ESLint and npm

```bash
npx create-next-app --typeScript --eslint --use-npm
```

## Manual Installation

- Add Next.js to your project

```bash
npm install next react react-dom
```

- Add the following scripts to your package.json

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Folder Structure

**Pages folder** - is the only required folder in a Next.js app. All the React components inside pages folder will automatically become routes

**Public folder** - contains static assets such as images, files, etc. The files inside public folder can be accessed directly from the root of the application

**Styles folder** - contains stylesheets, here you can add global styles, CSS modules, etc

> Usually `globals.css` is imported in the `_app.js` file

**Components folder** - contains React components

### The `@` alias

The `@` alias is used to import files from the root of the project

```jsx
import Header from '@/components/Header'
```

## Routing

- **Link** - is used for client-side routing. It is similar to the HTML `<a>` tag

```jsx
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href='/about'>About</Link>
    </div>
  )
}
```
