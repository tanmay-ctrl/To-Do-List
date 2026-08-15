# Glassmorphism To-Do List 📝✨

A sleek, modern, and fully responsive To-Do List application built with vanilla web technologies. This project features a highly polished "frosted glass" (glassmorphism) user interface and includes robust underlying logic for data persistence and secure input handling.

🟢 **[View Live Demo]()** 

## ✨ Features

*   **Glassmorphism UI:** A visually striking, translucent frosted glass design with dynamic gradient backgrounds.
*   **Data Persistence:** Utilizes browser `localStorage` to save your tasks so they remain even after refreshing or closing the page.
*   **Task Management:** Add new tasks, mark them as "completed" with a strikethrough effect, or delete them entirely.
*   **Keyboard Accessibility:** Full support for the `Enter` key to quickly add tasks without needing a mouse.
*   **Duplicate Prevention:** Alerts the user if they attempt to add a task that already exists on the list.
*   **Security Built-in:** Uses safe DOM manipulation methods (`textContent` over `innerHTML`) to prevent Cross-Site Scripting (XSS) vulnerabilities.
*   **Empty State Handling:** Displays a friendly, clean message when all tasks are cleared.

## 🛠️ Tech Stack

*   **HTML5:** Semantic structuring.
*   **CSS3:** Custom styling, flexbox layouts, hover transitions, and `backdrop-filter` for the glass effect.
*   **JavaScript (ES6+):** DOM manipulation, event handling, and local storage integration.
