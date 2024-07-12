# Pizza Online Store

This project is an online store for a pizza shop built with React and Redux. Users can view a menu of pizzas, add items to their cart, choose between delivery or pickup options, and proceed to checkout. The application also includes user authentication features, allowing users to register and log in.

## Features

- User registration and login with form validation
- Viewing pizza menu
- Adding items to the cart
- Adjusting item quantities in the cart
- Removing items from the cart
- Choosing between pickup and delivery options
- Checkout process
- Help section with shipping options information

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/pizza-online-store.git
   cd pizza-online-store
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

### Registering a New User

1. Navigate to the Register page from the homepage.
2. Fill out the registration form with your details.
3. Submit the form to create a new account.
4. After successful registration, you will be redirected to the login page.

### Logging In

1. Navigate to the Login page from the homepage.
2. Enter your username and password.
3. Submit the form to log in.
4. Upon successful login, you will be redirected to the menu page with a welcome message.

### Viewing the Menu

1. From the homepage, click on the menu link.
2. Browse through the available pizzas.

### Managing the Cart

1. Add items to your cart from the menu page.
2. Navigate to the cart page to view your cart items.
3. Adjust the quantity of items or remove items from the cart.

### Checkout

1. On the cart page, choose between pickup or delivery options.
2. Click on the checkout button to proceed.
3. If your cart is empty, the checkout button will be disabled.

### Help Section

1. Click on the help button in the cart page.
2. A modal will appear with information about pickup and delivery options.

## Project Structure

- `src/components`: Contains React components
- `src/pages`: Contains page components
- `src/store`: Contains Redux slices and store configuration
- `src/CSS`: Contains CSS files for styling

## Technologies Used

- React
- Redux
- React Router
- Formik and Yup for form validation
- React Bootstrap for UI components

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License.
