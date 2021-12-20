# Potted

A functional and fully-responsive e-commerce plant shop website built with React, Redux/Redux-Saga, Styled Components, Firebase, and Stripe, and deployed to Netlify.

[View Live Site](https://potted.netlify.app)

<img src="https://github.com/jessicayau/portfolio/blob/main/projects/images/potted/potted-2.png" height="300px">
<img src="https://github.com/jessicayau/portfolio/blob/main/projects/images/potted/potted-6.png" height="300px">
<img src="https://github.com/jessicayau/portfolio/blob/main/projects/images/potted/potted-7.png" height="300px">

## Features

-   User authentication and user account creation with Google or email
-   Product items with their own pages for product details
-   Search filter for products
-   Shopping cart (add/update/remove items)
-   Favorites page with favorited items
-   Checkout using credit card

## Tech Stack

-   React & React Router for creating reusable components and dynamic routing
-   Redux for state management and persistance
-   Redux-Saga for asynchronous actions (ie. retrieving data from Firebase)
-   Styled Components for styling using CSS-in-JS
-   Firebase for user authentication and user and product data storage
-   Stripe API for handling payment processing

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
