# Employee Directory ⭐

A simple, responsive Employee Directory built using **TypeScript, HTML, and CSS** as part of the μLearn Learning Fest 2026 challenge.

The project demonstrates TypeScript fundamentals, including interfaces, type aliases, union types, type safety, and reusable functions.

## 🌐 Live Demo

[View Employee Directory](https://employee-directory-one-tau.vercel.app)

## 📌 Features

- **Employee Listing:** Displays employee information using structured, typed data.
- **Search Functionality:** Search employees by name, role, department, email, or μLearn ID.
- **Type Safety:** Uses TypeScript interfaces and type aliases to maintain consistent data structures.
- **Null Handling:** Supports employees without a μLearn ID.
- **Responsive Design:** Clean interface that adapts to different screen sizes.
- **Modular Code:** Separates employee data, type definitions, search logic, and application functionality.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| TypeScript | Application logic and type safety |
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| Vite | Development server and build tool |
| Vercel | Deployment |

## 📂 Project Structure

    Employee-Directory/
    │
    ├── src/
    │   ├── types.ts       # Employee interface and department types
    │   ├── employees.ts   # Employee data
    │   ├── search.ts      # Employee search functionality
    │   ├── main.ts        # DOM manipulation and application logic
    │   └── style.css      # Application styling
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    └── README.md

## 💡 TypeScript Concepts Implemented

This project explores several fundamental TypeScript concepts:

- **Interfaces:** Defines the structure of employee objects.
- **Type Aliases:** Defines reusable types for employee departments.
- **Union Types:** Restricts department values and supports nullable μLearn IDs.
- **Typed Arrays:** Ensures employee data follows the defined interface.
- **Function Types:** Specifies parameter and return types.
- **Type Inference:** Allows TypeScript to automatically determine types.
- **Type Narrowing:** Uses runtime checks to handle DOM elements safely.
- **Modules:** Uses imports and exports to organize reusable code.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

       git clone https://github.com/Niva0106/Employee-Directory.git

2. Navigate to the project directory:

       cd Employee-Directory

3. Install dependencies:

       npm install

4. Start the development server:

       npm run dev

5. Open the local URL provided by Vite in your browser.

## 🔍 Type Checking and Build

To check for TypeScript errors:

    npx tsc --noEmit

To build the production version:

    npm run build

The production files will be generated in the `dist` directory.

## ☁️ Deployment

The application is deployed using Vercel.

Every new commit pushed to the connected GitHub repository can trigger an automatic deployment.

## 🎯 Challenge Information

- **Event:** μLearn Learning Fest 2026
- **Challenge:** TypeScript Employee Directory
- **Interest Group:** Web Development
- **Karma Points:** 150
- **Hashtag:** `#evn-lf26-web-dev6`

## 🔗 Project Links

- **Live Website:** https://employee-directory-one-tau.vercel.app

---

Built as a learning project to explore TypeScript and improve frontend development skills.