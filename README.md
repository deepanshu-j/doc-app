# IEEE Build-a-thon Hackthon

# Link
(https://persistent-doctor.netlify.app/)

# Problem Statement

Short story - Near my home are several clinics( non-emergency Clinics ) which I noticed are very crowded during certain hours and not so in the others, and due to that crowding social distancing could not be implemented properly in those chaotic hours, 
so the solution is if that somehow if we could know that `during which interval are the least number of patients visiting` that particular clinic so maybe if feasible we can choose that least crowded time hour.
So that the crowd can be distributed across all working hours which will lead to efficient handling of patients by the doctors, less chaos for the clinic staff, less waiting time for patients, and shorter queues.

# Solution

So This Web App has two main Actors, a Doctor and a Patient,

`Doctor's role` - A doctor logs in and verifies his clinic and after that he can see the list and the number of patients who booked an appointment in a particular interval ( like every 10 minutes or half an hour etc ) which is pictorially represented using a Bar Graph. He can print the List of patients and call them one by one in the clinic.

`Patient's role` - A patient logs in with his number with OTP verification and searches for the doctor, he selects the doctor and picks the suitable interval for the appointment, There's a calendar from which he can select the date and a Time Slot Table from which he can select a Time Slot.
After that, he Enters his details like full name, age, etc., and pays for the Appointment. After payment, he can generate the Invoicing Slip for the payment and appointment.  

This project was bootstrapped with Create React App.

# Inspiration
- Betterment of Healthcare facilities.
- Implementation of Important measures like social distancing in these unprecedented times. 
- Efficient hospital business model for better organised process.

# Features used in the app/web
## Brief about Technologies
   `create-react-app`\
   `React Hooks`\
   `useState`, `useEffect`,`useContext`\
   `axios`,
   `react-table`,
   `react-calender`,
   `styled-components` 


## Description

(All the Components are in the 'components' Folder)
Folder Structure\
-src\
    &nbsp;&nbsp;&nbsp; &nbsp;-Assets\
	  &nbsp;&nbsp;&nbsp; &nbsp;-Components\
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-Big\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-Medium\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;-Small

All Components are Hooks Based

Naming Convention Used - BEM

For Styling the Components - CSS 

## Directions to run locally

In the *project directory*, you can run:
1. You need to have the following installed (Latest Version Preferred)
      - Node.js
      - npm 
      - create-react-app using npm  

2. Run 'npm install'
     - To Install all the dependencies 

3. Run 'npm start'
     - To Run the Project In Dev Mode  

4. Run 'ctrl + C' in the Command Line to stop the Node Deamon from serving the react app

## If Run into an Error during installation 
1. Update Node and npm to latest version
2. Try installing Cors library using npm as this Project uses External API to Fetch Data
3. Comment Down the Error, and we will try to solve it

# Future of your project in terms of expansion

Implementing a strong Back-end with Secure payment service options.
Implementing a hassle-free login with OTP integration.


# Screenshots

### Home Page
![image](https://user-images.githubusercontent.com/55355645/135756375-c473e82b-c98b-42a8-8256-d79b0b917c16.png)

![image](https://user-images.githubusercontent.com/55355645/135756416-01bfd4d7-e866-4fad-9408-ebfc5adba406.png)

### Verification Page
![image](https://user-images.githubusercontent.com/55355645/135756535-d3cfbaef-4058-4c01-ae07-471530886a53.png)

### Doctor's Dashboard
![image](https://user-images.githubusercontent.com/55355645/135756561-ee6e107a-2cb1-4397-b274-5ea164c32755.png)

### Patient Search's for Doctor
![image](https://user-images.githubusercontent.com/55355645/135756604-fc68cdc7-728a-4f45-9ed0-12261c8f4a78.png)

### Patient Select's Date and Time Interval for the Appointment
![image](https://user-images.githubusercontent.com/55355645/135756656-a9c97084-3715-4965-b0cb-e18bede47581.png)

### Patient Book's and Pays and Generates an Invoice
![image](https://user-images.githubusercontent.com/55355645/135756735-ec893981-d821-46f5-8c35-5399fc9db1e2.png)

