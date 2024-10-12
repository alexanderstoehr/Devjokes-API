## Devjokes API Backend

### Overview

The Devjokes API is a Django-based backend that provides RESTful endpoints for managing jokes. It is designed to work with a React frontend
for API documentation and is deployed on Heroku using an SQLite database. A server-side script ensures the database is reloaded to its
initial state at every Dyno restart.

### Project Structure

The project is organized as follows:

- `joke/`: Contains the Django app for managing jokes.
    - `models.py`: Defines the `Joke` model.
    - `serializers.py`: Contains serializers for the `Joke` model.
    - `views.py`: Defines the views for handling joke-related requests.
    - `urls.py`: URL routing for the `joke` app.
- `user/`: Contains the Django app for user-related functionalities.
    - `views.py`: Defines views for user authentication (if needed).
- `project/`: Main project directory.
    - `settings.py`: Django settings for the project.
    - `urls.py`: URL routing for the project.
- `templates/`: Contains custom templates for Swagger UI.
- `static/`: Contains static files like custom CSS for Swagger UI.

### Dependencies

The project uses the following packages:

- `Django==5.1`: The web framework used for building the backend.
- `djangorestframework==3.15.2`: Provides tools for building Web APIs.
- `djangorestframework-simplejwt==5.3.1`: JWT authentication support for Django REST framework.
- `drf-yasg==1.21.7`: Generates real Swagger/OpenAPI 2.0 specifications from a Django Rest Framework API.

### API Endpoints

The API provides the following endpoints:

- `/api/joke/`: Endpoint for listing and creating jokes.
- `/api/joke/<id>/`: Endpoint for retrieving, updating, and deleting a specific joke.
- `/api/joke/search/<search_term>/`: Endpoint for searching jokes by punchline or question.
- `/api/joke/random/`: Endpoint for retrieving a random joke.
- `/api/docs/`: Swagger UI for API documentation.

### Deployment

The backend is deployed on Heroku with an SQLite database. A server-side script ensures the database is reloaded to its initial state at
every Dyno restart.

### Usage

To run the project locally:

1. Install the dependencies listed in `requirements.yml`.
2. Set up the Django project and run the development server.
3. Access the API endpoints as needed.

