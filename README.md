# TASKMASTER
TaskMaster A full-stack task management application built with Spring Boot backend and Angular frontend. Features

✅ Create new tasks with title and description ✅ View all tasks in a clean list interface ✅ Delete tasks with one click ✅ Real-time UI updates ✅ Persistent data storage with H2 database ✅ RESTful API architecture

Tech Stack Backend

Java 11 Spring Boot 2.5.4 Spring Data JPA H2 Database (In-memory) Maven for dependency management

Frontend

Angular 17 TypeScript HTML/CSS RxJS for reactive programming HttpClient for API communication

Project Structure TaskMaster/ ├── backend/ # Spring Boot application │ ├── src/main/java/ │ │ └── com/example/demo/ │ │ ├── BackendApplication.java │ │ ├── controller/ │ │ │ └── TaskController.java │ │ ├── model/ │ │ │ └── Task.java │ │ ├── repository/ │ │ │ └── TaskRepository.java │ │ ├── service/ │ │ │ └── TaskService.java │ │ └── config/ │ │ └── CorsConfig.java │ ├── src/main/resources/ │ │ └── application.properties │ └── pom.xml └── frontend/ # Angular application ├── src/ │ ├── app/ │ │ ├── task-form/ │ │ ├── task-list/ │ │ ├── task.service.ts │ │ ├── task.ts │ │ └── app.component.* │ └── index.html ├── package.json └── angular.json Prerequisites

Java 11 or higher Node.js (v14 or higher) npm (comes with Node.js) Maven (for building Spring Boot)

Installation & Setup Backend Setup

Navigate to the backend directory: bashcd backend

Run the Spring Boot application: bashmvn spring-boot:run The backend will start on http://localhost:8080

Frontend Setup

Navigate to the frontend directory: bashcd frontend

Install dependencies: bashnpm install --legacy-peer-deps

Start the Angular development server: bashnpm start The frontend will start on http://localhost:4200

API Endpoints Tasks

GET /api/tasks - Retrieve all tasks POST /api/tasks - Create a new task DELETE /api/tasks/{id} - Delete a task by ID

Sample API Usage Create a task: bashcurl -X POST http://localhost:8080/api/tasks
-H "Content-Type: application/json"
-d '{"title":"Sample Task","description":"This is a sample task","completed":false}' Get all tasks: bashcurl http://localhost:8080/api/tasks Database The application uses H2 in-memory database for simplicity. You can access the H2 console at:

URL: http://localhost:8080/h2-console JDBC URL: jdbc:h2:mem:testdb Username: sa Password: password

Usage

Make sure both backend and frontend are running Open your browser and go to http://localhost:4200 Use the form to add new tasks View all tasks in the list below Click "Remove" to delete tasks

Development Adding New Features To extend the application, you can:

Add task editing functionality:

Add PUT endpoint in TaskController Create edit form in Angular Update TaskService with edit method

Add task completion status:

Update the UI to show/toggle completion status Add checkbox or toggle button

Add task categories or priorities:

Extend the Task model Update forms and displays

Building for Production Backend: bashcd backend mvn clean package java -jar target/backend-0.0.1-SNAPSHOT.jar Frontend: bashcd frontend npm run build

Deploy the dist/ folder to your web server
Troubleshooting CORS Issues If you encounter CORS errors, ensure the CorsConfig.java is properly configured in the backend. Port Conflicts

Backend default port: 8080 Frontend default port: 4200 Change ports in application.properties (backend) or angular.json (frontend) if needed

Dependencies Issues If npm install fails, try: bashnpm install --legacy-peer-deps --force Contributing

Fork the repository Create a feature branch Make your changes Test thoroughly Submit a pull request

License This project is open source and available under the MIT License. Author Built with ❤️ for learning full-stack development with Spring Boot and Angular. 
