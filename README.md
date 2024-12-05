<!-- PieOrbit -->
# PieOrbit Project

## Overview
PieOrbit is a scalable, reusable, and maintainable React.js application designed to display a list of items with features like **Search**, **Sort**, **Filter**, **Pagination**, and more. The project is optimized for performance and built using **React Context API** for state management along with **Tailwind CSS** for responsive design.

---

## **Features**
1. **SearchBar**
   - Search items by name with debounce for performance optimization.

2. **SortOptions**
   - Sort items by name (A-Z, Z-A) or price (low-to-high, high-to-low).

3. **Filter**
   - Filter items by category and price range.

4. **Table**
   - Display the list of items in a structured and responsive table format.

5. **Pagination**
   - Navigate through the items using pagination for better performance.

---

## **Technology Stack**
- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Language:** JavaScript
- **Utilities:**
  - Debounce for performance optimization
  - Custom hooks for reusability and cleaner code

---

## **Project Quality**
- Built in a **scalable** fashion with modular components.
- Designed for **reusability** and **maintainability**.

---

## **Performance Optimizations**
1. **Debounce in Search:**
   - Ensures that search input triggers fewer state updates, improving performance.
2. **Pagination:**
   - Only renders the required items per page, reducing rendering overhead.

---

## **Folder Structure**
src/ │ ├── components/ │ ├── Filters.js // Filter component │ ├── Pagination.js // Pagination component │ ├── SearchBar.js // Search bar component │ ├── SortOptions.js // Sort options dropdown │ └── Table.js // Table to display items │ ├── constants/ │ └── data.json // Sample data for items │ ├── context/ │ └── ItemContext.js // Context API for global state management │ ├── hooks/ │ └── useDebounce.js // Custom hook for debounce functionality │ ├── styles/ │ └── tailwind.css // Tailwind CSS configuration │ ├── App.js // Main application file └── index.js //

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/anandgithub125/PieOrbit.git
   cd pieorbit
   npm install
   npm start

   Usage
Search: Use the search bar to find items by name.
Sort: Select a sorting option to organize items by name or price.
Filter: Apply filters to view items by category or within a specific price range.
Pagination: Navigate between pages to view more items.
Explanation of Approach
State Management:

Used React Context API to manage global state efficiently for filters, search term, sort options, and pagination.
Centralized the logic in a single context to avoid prop drilling.
Modular Design:

Divided the application into smaller, reusable components (SearchBar, SortOptions, Filters, Table, Pagination).
Reusable Utilities:

Created a custom useDebounce hook to improve performance in the search feature.
Scalable Codebase:

Followed a clear folder structure to separate concerns and ensure the codebase can grow with additional features.
Styling:

Used Tailwind CSS for rapid UI development and responsiveness.
Performance:

Implemented debounce to minimize unnecessary state updates during search.
Added pagination to ensure only required items are rendered, optimizing performance for large datasets.
