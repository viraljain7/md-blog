interface BlogType {
  slug: string;
  content: string;
  title: string;
  image?: string;
}

const sampleBlogs: BlogType[] = [
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks",
    content: `
  ## React Hooks
  React Hooks are functions that let you "hook into" React state and lifecycle features from function components.
  
  ### Common Hooks
  - **useState**: Manage state in a functional component.
  - **useEffect**: Perform side effects in function components.
  - **useContext**: Access context values directly in your components.
  
  \`const [state, setState] = useState(initialState);\`
      `,
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    content: `
  # Next.js Guide
  Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.
  
  ### Key Features
  - **Server-side Rendering (SSR)**
  - **Static Site Generation (SSG)**
  - **API Routes**
  
  \`import Link from 'next/link';\`
      `,
  },
  {
    slug: "introduction-to-tailwind-css",
    title: "Introduction to Tailwind CSS",
    content: `
  ## Tailwind CSS
  Tailwind CSS is a utility-first CSS framework for creating custom designs without having to write custom CSS.
  
  ### Advantages
  - **Utility-first**: Design directly in your markup.
  - **Responsive**: Easily create responsive layouts.
  - **Customizable**: Extendable via configuration.
  
  \`<div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div>\`
      `,
  },
  {
    slug: "typescript-for-javascript-developers",
    title: "TypeScript for JavaScript Developers",
    content: `
  # TypeScript Basics
  TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type checking at compile time.
  
  ### Benefits
  - **Static Typing**: Helps catch errors early.
  - **Improved IDE Support**: Better autocompletion and refactoring.
  - **Enhanced Code Readability**: Clearer intention with types.
  
  \`let isDone: boolean = false;\`
      `,
  },
  {
    slug: "building-restful-apis-with-nodejs",
    title: "Building RESTful APIs with Node.js",
    content: `
  ## RESTful APIs
  Node.js is a runtime environment that lets you execute JavaScript on the server side. It’s ideal for building RESTful APIs.
  
  ### Tools & Libraries
  - **Express**: Minimalist web framework for Node.js.
  - **Mongoose**: Elegant MongoDB object modeling for Node.js.
  - **JWT**: JSON Web Tokens for authentication.
  
  \`app.get('/api/resource', (req, res) => { res.send('Hello API!'); });\`
      `,
  },
  {
    slug: "deploying-nextjs-apps-on-vercel",
    title: "Deploying Next.js Apps on Vercel",
    content: `
  # Deploy with Vercel
  Vercel is the easiest way to deploy Next.js applications, offering built-in support for features like automatic HTTPS and serverless functions.
  
  ### Steps to Deploy
  1. **Sign up**: Create a Vercel account.
  2. **Connect your repo**: Link your GitHub repository.
  3. **Deploy**: Vercel automatically deploys the main branch.
  
  \`vercel --prod\`
      `,
  },
  {
    slug: "effective-state-management-in-react",
    title: "Effective State Management in React",
    content: `
  ## State Management in React
  State management is crucial in React applications, especially as they grow in size and complexity.
  
  ### Popular Libraries
  - **Redux**: Predictable state container.
  - **MobX**: Simple, scalable state management.
  - **Context API**: Built-in solution for state sharing.
  
  \`const [state, dispatch] = useReducer(reducer, initialState);\`
      `,
  },

  {
    slug: "understanding-the-virtual-dom",
    title: "Understanding the Virtual DOM",
    content: `
  ## Virtual DOM
  The Virtual DOM is a concept implemented by libraries like React. It allows for efficient updates by minimizing direct DOM manipulations.
  
  ### How It Works
  1. **Render**: The entire UI is rendered in Virtual DOM.
  2. **Diffing**: Differences between the new and old Virtual DOM are calculated.
  3. **Patching**: Only the changed parts are updated in the real DOM.
  
  \`ReactDOM.render(<App />, document.getElementById('root'));\`
      `,
  },
  {
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs. Flexbox",
    content: `
  # CSS Layout Systems
  CSS Grid and Flexbox are powerful tools for creating complex web layouts.
  
  ### Flexbox
  - **One-dimensional**: Align items in a row or column.
  - **Great for**: Component-level layouts.
  
  ### Grid
  - **Two-dimensional**: Create layouts in both rows and columns.
  - **Great for**: Page-level layouts.
  
  \`display: grid;\`
      `,
  },
];

export default sampleBlogs;
