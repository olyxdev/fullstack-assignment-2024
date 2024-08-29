# Full-stack-assignment-2024

### Introduction

This year we had the 2024 Summer Olympics held from 26 July to 11 August 2024 in France, therefore we chose the 2024 **Olympic Games** as the theme for this assignment.
We ask you to implement the backend and create a frontend for a simple web application.
Below you will find a short explanation about the files already in this repository. Next, we describe the features that we would like you to implement.
We understand it can be some work to make the assignment, so we ask you to spend approximately four hours on the assignment. You do not need to spend much longer. It is okay if you do not fully finish the whole assignment. The next section describes what we think is important and what to focus on.

### Things to keep in mind

By doing this assignment you can demonstrate your proficiency with the used technologies.
We will look for good coding practices, like scalability, testability, etc.

- Code should be written in TypeScript.
- The focus of this assignment is not to test the design or aesthetics. Instead we put an emphasis on good code quality (readability, reusability, code patterns, etc.), and proficiency with React and the other related technologies.
- This is not a strict exercise, so if you feel like doing something differently or using other tools/technologies you can do so.
- We understand the end product will not be a fully implemented app with all the bits and good practices you would normally add to an application. This is totally fine, just focus on the things that you think are most important.

### What we give you

In this repository you find two folders: `backend` contains a boilerplate application for the backend, whereas `frontend` is an empty folder where you can add the code for the frontend.

The boilerplate application for the backend is a basic GraphQL server, implemented in Node.js using apollo library. It contains the setting up of the apollo server and generation of types with codegen.
It also contains a base schema for a PostgreSQL database with tables such as **Countries, Athletes and Sports**.
You should use the compose.yaml file to create a container with a database with some tables and data.

### What are you supposed to do?

#### Backend

For the backend application, you should complete the backend boilerplate code in such a way that the frontend can be implemented with the features as described below.
To do so, create a connection to the database, make the necessary changes and implement the necessary **queries and mutations** in order to expose a GraphQL API for the front-end application.

#### Frontend

For the frontend, create a **React application** from scratch that has the following features:

- A user can award an athlete. Create a form to award an athlete with a new medal for a certain sport. Make sure an athlete can win multiple medals per sport.
- Show the results: display a leaderboard ranking countries. Sort by total number of gold medals by athletes from each country or any other criterion of your choice.
- [Optional] Implement filtering options to showcase various rankings (e.g., filter by specific sports)

### Submission

If you have any questions while working on the assignment, feel free to contact us! You send us an email at `data[at]olyx.nl`. We will try to answer you asap.
For submission, you can push your code to a private github repository and share access with the users `alexolyx`, `thomlyx`, `reiniervlimpt` and `MonikaaS`.
We hope you enjoy working on the assignment and we wish you good luck!
