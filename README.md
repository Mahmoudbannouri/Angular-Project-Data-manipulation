# Residence Management App

**Residence Management App** is a modern web application built with Angular that helps manage residence listings. The app provides an intuitive user interface for searching, filtering, and interacting with residence data. Users can filter residences by address, add favorites, view detailed information, and more. This project demonstrates practical use of Angular for building dynamic and interactive web applications.

## Features

- **Filter by Address:** Users can search and filter residences based on their address.
- **Favorites:** Ability to add residences to a favorites list for quick access.
- **Detailed Information:** View more information about each residence, including its status (Available, Sold, Under Construction).
- **Show Location:** A button to display the location of a residence with an alert.
- **Responsive Design:** Optimized for both desktop and mobile views, ensuring a smooth experience on any device.

## Technologies Used

- **Frontend:** Angular 16
- **UI Framework:** Bootstrap 5
- **Routing:** Angular Router for navigation between pages
- **State Management:** Angular Services for managing data across the application
- **Version Control:** Git, GitHub for collaboration and versioning

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

- **Node.js** (v16 or higher)
- **Angular CLI** (installed globally)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/residence-management-app.git
Navigate to the project directory:

bash
Copy code
cd residence-management-app
Install dependencies:

bash
Copy code
npm install
Run the application locally:

bash
Copy code
ng serve
The app will be available at http://localhost:4200/.

Project Structure
java
Copy code
residence-management-app/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── models/
│   │   ├── services/
│   │   ├── components/
│   │   ├── residences/
│   │   └── app.module.ts
│   ├── assets/
│   │   └── images/
│   ├── environments/
│   └── index.html
├── package.json
├── angular.json
└── README.md
core/models contains the TypeScript interfaces and models, like Residence.
services holds the Angular services for managing data.
components contains the UI components such as ResidencesComponent.
assets/images contains the images for the residences.
Contributing
We welcome contributions to improve this project. To contribute, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -am 'Add new feature').
Push to your branch (git push origin feature-name).
Open a pull request to the main repository.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Authors
Mahmoud Bannouri - Developer