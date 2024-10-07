E-Commerce Admin Dashboard

Overview

This project is a comprehensive E-Commerce Admin Dashboard built using React, Redux Toolkit Query, Material UI, and Node.js/Express for backend services. The dashboard provides real-time statistics and key metrics for managing customers, transactions, sales, and performance analytics in an e-commerce setting. It integrates various charts, data grids, and fully responsive components, ensuring seamless use across different screen sizes.

Features

	•	User Management: View detailed information on customers and users.
	•	Product Management: Manage products available in the e-commerce store.
	•	Transaction Overview: View and filter recent transactions with advanced sorting options.
	•	Sales & Performance Analytics: Visualize sales data across different timeframes with bar charts, line graphs, and pie charts.
	•	Geographical Data: Insights into where sales are coming from.
	•	Responsive Design: Fully responsive, ensuring a great experience on all devices.
	•	Data-Driven: Utilizes MongoDB for data storage and efficient data fetching with Redux Toolkit Query.

Tech Stack

Frontend:

	•	React: Modern JavaScript library for building interactive UIs.
	•	Redux Toolkit Query: For efficient state management and server interaction.
	•	Material UI: For UI components and styling, ensuring a sleek, professional appearance.
	•	React Router: For managing navigation and routes within the app.

Backend:

	•	Node.js with Express.js: To handle API routes and serve the application.
	•	MongoDB with Mongoose: For database management and storing application data.
	•	JWT Authentication: For secure API access and user authentication.

Installation

To get this project up and running on your local machine, follow these steps:

Prerequisites

Ensure you have the following installed:

	•	Node.js
	•	MongoDB
	•	npm

Setup

	1.	Clone the repository:

git clone https://github.com/Cwazycodes/ShopReact
cd ShopReact


	2.	Install dependencies:

npm install


	3.	Set up environment variables:
Create a .env file in the root of the project and add the following:

REACT_APP_BASE_URL=[<your-backend-api-url>](https://shopreact-de34.onrender.com)


	4.	Start the backend server:

cd server
npm install
npm run dev


	5.	Start the frontend:

cd client
npm start



The application should now be running on http://localhost:3000.

API Endpoints

Here’s an overview of the main API routes:

	•	GET /general/dashboard - Fetch dashboard statistics (transactions, sales, etc.).
	•	GET /general/user/:id - Get details of a specific user by ID.
	•	GET /client/products - Fetch available products.
	•	GET /client/transactions - Get a list of recent transactions.
	•	And many more…

Folder Structure

	•	client/: React frontend code, including components, charts, and layouts.
	•	server/: Backend Express API, including routes, models, and controllers.
	•	state/: Redux Toolkit store setup and API integrations.

Contributions

Feel free to open issues or submit pull requests for any features, improvements, or bug fixes.
