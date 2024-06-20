# [Multi-Step Form Application](https://multi-step-form-theta-three.vercel.app/)

## Description:

This project is a multi-step form application built using React.js and Vite. The form consists of three steps:
1. **Personal Information**: Collects user's name, email, and phone number.
2. **Address Information**: Collects user's address details including Address Line 1, Address Line 2, City, State, and Zip Code.
3. **Confirmation**: Allows the user to review and submit their entered data.

The application validates inputs, persists form data to local storage, and ensures sequential completion of steps. Additionally, it displays a confirmation page upon form submission and allows users to reset and refill the form.

## Features:

- Multi-step form with tabbed navigation.
- Client-side validation with error messages.
- Data persistence using local storage.
- Responsive design for mobile and desktop views.
- Animations and transitions using `Framer Motion`.
- Display of a success message and form details on submission.
- Reset functionality to refill the form.

## Technologies Used:

- React.js
- Vite
- Framer Motion
- Bootstrap
- CSS

## Setup Instructions:

### Prerequisites

Ensure you have the following installed:

- Node.js (14.0.0)
- npm (6.0.0) or Yarn (1.22.0)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/zaheernaqvi72/MultiStepForm.git
```
```bash
cd MultiStepForm
```
2. **Install Dependencies**:

```bash
npm install or yarn install
```
3. **Run the app**:
```bash
npm run dev or yarn dev
```

Click on the link (localhost) in the terminal to view the app.


## Project Structure:
```bash
MultiStepForm/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── AddressForm.jsx
│   │   ├── Confirmation.jsx
│   │   ├── MultiStepForm.jsx
│   │   ├── PersonalInfoForm.jsx
│   │   └── SubmittedForm.jsx
│   │
│   ├── App.jsx
│   ├── index.jsx
│   └── styles.css
│    
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Usage:
1. **Start the application** by following the setup instructions.
2. **Navigate through the form** using the "Next" and "Back" buttons.
3. **Fill in all required fields** to proceed to the next step.
4. **Review your information** on the confirmation page and submit the form.
5. **Upon submission**, a success message will be displayed along with your form details.
6. **Reset the form** using the "Reset Form" button if you need to refill the details.

## Contact:
- For any inquiries or feedback, please contact at sayedalinaqvi1472@gmail.com
- [LinkedIn](https://www.linkedin.com/in/sayed-zaheer-abass/).

