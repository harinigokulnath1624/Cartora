# 🛒 Cartora

### A React E-Commerce Experience Built While Learning by Building 🚀

**Cartora** is a modern, responsive e-commerce web application built with **React** as part of my journey toward becoming a **Full Stack Developer**.

The project was created to move beyond individual React exercises and bring multiple concepts together into a complete user experience — from discovering products and searching through them to managing a cart and completing a validated checkout flow.

> 💡 **My goal with Cartora was simple:** learn by building something that feels like a real-world application.

Product information is fetched from the free **Fake Store API**, making the product experience dynamic rather than relying on static data.

---

## ✨ What Cartora Can Do

🛍️ **Explore Products**
Browse products dynamically fetched from a REST API.

🔎 **Search, Filter & Sort**
Search products with a debounced input, filter by category, and sort products by price.

📄 **Product Details**
View individual products through dynamic routes.

🛒 **Smart Shopping Cart**
Add products, update quantities, remove items, and view automatically calculated totals.

💾 **Persistent Cart**
Cart information is stored in `localStorage`, so it remains available even after refreshing the page.

✅ **Validated Checkout**
A checkout form with real-time validation using Formik.

⏳ **User-Friendly States**
Loading, empty, and error states are handled throughout the application.

📱 **Responsive Design**
Designed to provide a smooth experience across desktop and mobile devices.

🚫 **Custom 404 Page**
Invalid routes are handled with a dedicated Not Found page.

---

## 🛠️ Tech Stack

| Technology          | Purpose                           |
| ------------------- | --------------------------------- |
| **React 18**        | Building the user interface       |
| **Vite**            | Development server and build tool |
| **React Router v6** | Client-side routing               |
| **Formik**          | Form management and validation    |
| **Context API**     | Global cart state management      |
| **Fake Store API**  | Dynamic product data              |
| **JavaScript**      | Application logic                 |
| **CSS**             | Custom responsive styling         |
| **LocalStorage**    | Persistent cart data              |

---

## 🧠 React Concepts I Practiced

Cartora helped me connect the React concepts I've been learning into one practical application.

### ⚛️ Component-Based Architecture

The application is divided into reusable components and pages, making the code easier to understand, maintain, and extend.

### 🧭 React Router

Implemented client-side navigation using:

* `Routes`
* `Route`
* `Link`
* `NavLink`
* `useParams`
* Wildcard `404` route

### 📝 Formik

The checkout process uses Formik for:

* Form state management
* Field handling
* Validation
* Touched states
* Error messages
* Form submission

### 🪝 Custom Hooks

Created reusable hooks to separate application logic from UI:

**`useFetch`**

* Fetches API data
* Handles loading and error states
* Aborts requests when components unmount

**`useDebounce`**

* Delays search execution
* Prevents unnecessary filtering operations

**`useLocalStorage`**

* Synchronizes React state with browser localStorage

### 🛒 Context API

Created a `CartContext` to manage shopping cart data and actions across different parts of the application without passing props through multiple component levels.

### 🔄 React Hooks

Practiced:

* `useState`
* `useEffect`
* `useMemo`
* `useContext`

---

## 📁 Project Structure

```text
ecom-website-day-6/
│
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    │
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductGrid.jsx
    │   ├── Loader.jsx
    │   └── ErrorMessage.jsx
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Products.jsx
    │   ├── ProductDetail.jsx
    │   ├── Cart.jsx
    │   ├── Checkout.jsx
    │   └── NotFound.jsx
    │
    ├── hooks/
    │   ├── useFetch.js
    │   ├── useDebounce.js
    │   └── useLocalStorage.js
    │
    └── context/
        └── CartContext.jsx
```

---

## 🗺️ Application Routes

| Route           | Description                                |
| --------------- | ------------------------------------------ |
| `/`             | Home page with featured products           |
| `/products`     | Product listing with search, filter & sort |
| `/products/:id` | Dynamic product details                    |
| `/cart`         | Shopping cart                              |
| `/checkout`     | Checkout and validation                    |
| `*`             | Custom 404 page                            |

---

## 🔄 User Journey

```text
        🏠 Home
           ↓
      🛍️ Products
           ↓
   🔎 Search / Filter / Sort
           ↓
     📄 Product Details
           ↓
       🛒 Add to Cart
           ↓
          Cart
           ↓
       💳 Checkout
           ↓
      ✅ Order Complete
```

---

## 🌐 API Integration

Cartora uses the **Fake Store API** to retrieve product information dynamically.

The application works with data such as:

* Product title
* Product image
* Product price
* Product category
* Product description
* Product rating

This gave me practical experience working with data coming from an external REST API rather than hardcoded product objects.

---

## ✅ Checkout Validation

The checkout form validates user input before submission.

| Field     | Validation             |
| --------- | ---------------------- |
| Full Name | Required               |
| Email     | Required & valid email |
| Phone     | Exactly 10 digits      |
| Address   | Minimum 10 characters  |
| Pincode   | Exactly 6 digits       |

> ℹ️ This is a frontend demonstration project. No real payment is processed.

---

## 💾 Cart Persistence

One of the features I focused on was making the cart persist between sessions.

The cart state is synchronized with browser `localStorage`, allowing users to:

1. Add products to the cart
2. Refresh the page
3. Return to the application
4. Continue with their existing cart

This helped me understand how React state can work together with browser storage.

---

## 🎯 What I Learned

Building Cartora helped me understand that learning React isn't only about learning individual hooks or syntax.

It is about understanding **how different concepts work together**.

Through this project, I gained practical experience with:

* Building reusable React components
* Managing shared application state
* Working with external APIs
* Creating custom hooks
* Implementing client-side routing
* Managing forms and validation
* Persisting data with localStorage
* Handling loading and error states
* Creating responsive interfaces
* Structuring a React project

Most importantly, I became more comfortable with the process of **building, debugging, and improving a project independently**.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) 18 or later
* npm

### Installation

Clone the repository and navigate into the project:

```bash
git clone <your-github-repository-url>

cd ecom-website-day-6
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

Usually:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |

---

## 🔮 Future Improvements

Cartora is currently a frontend-focused project, but there are several features I would like to explore as I continue my Full Stack journey:

* 🔐 User authentication
* ❤️ Wishlist functionality
* 💳 Payment gateway integration
* 📦 Order history
* ⭐ Product reviews
* 🧪 Unit and integration testing
* 🗄️ Backend API integration
* 🍃 MongoDB database
* 👤 User profile management
* ☁️ Deployment using Vercel or Netlify

---

## 🙌 Acknowledgements

Product data is provided by the **Fake Store API**.

This project was built as part of my ongoing journey of **learning React through practical projects**.

---

## 👩‍💻 About Me

### Harini G

**Aspiring Full Stack Developer | React Learner**

I am currently learning **Agentic AI Full Stack Development** and building practical projects to strengthen my skills in modern web development.

My current learning journey includes:

**HTML • CSS • JavaScript • React • APIs • Node.js • Express.js • MongoDB**

I believe in learning by building, experimenting, debugging, and continuously improving.

---

## ⭐ If You Like This Project

If you find Cartora useful or interesting, feel free to ⭐ the repository and share your feedback!

---

### 📌 Project Status

**Completed — React Learning Project**

Built with ❤️ while learning and growing as a Full Stack Developer.
