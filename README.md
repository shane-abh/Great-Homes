# Welcome to Great Homes Project
![image](https://github.com/user-attachments/assets/6c040161-4a18-47c7-997b-91bfca565baf)

## Introduction

Welcome to **Great Homes**, a platform designed to streamline the home-buying process through seamless integration of property search, mortgage calculation, and landlord communication. Developed by a team led by **Shane Abraham** along with **Rohan**, **Srinivas**, **Rajvir**, and **Siddhi**, Great Homes offers a comprehensive, user-friendly solution to the challenges faced by modern homebuyers.

## Problem Statement (Motivation)

### Current Challenges in Home-Buying

- **Fragmented Process:** Users often need to visit multiple platforms to search for properties, calculate mortgage payments, and contact sellers, leading to a disjointed experience.
- **Lack of Integration:** Mortgage calculators, property listings, and communication tools are typically not integrated, resulting in inefficiencies and user frustration.
- **Overwhelming Choices:** The sheer volume of options in the real estate market can be overwhelming without effective filtering and analysis tools.

## Our Solution

**Great Homes** addresses these issues by offering a unified platform that combines property search, financial calculations, and communication tools into a single, cohesive experience.

### Key Features

- **Property Search:** Users can search for properties by city, street name, or province, with data currently available for Waterloo and Kitchener.
- **Advanced Filtering:** Filters such as price, property type, and more allow users to narrow down their search effectively.
- **Mortgage Calculator:** Integrated directly into the platform, users can calculate their potential mortgage payments based on real-time interest rates and other financial parameters.
- **User Listings:** Registered users can create their own property listings in three easy steps.
- **Contact Landlords:** A built-in messaging feature allows users to contact landlords directly, with all communications stored in Google Sheets.
- **Dark Mode:** Offers a comfortable viewing experience with reduced screen glare.
- **Wishlist:** Users can save their favorite properties for future reference.

## Technical Overview

### Frontend

- **React.js:** The user interface is built using React, providing a dynamic and responsive experience.
- **Bootstrap:** Ensures a consistent and mobile-friendly design across the platform.
- **jQuery:** Used for DOM manipulation and form validations.
- **CSS Modules:** Enables modular and reusable CSS, allowing for better maintainability and scalability.

### Backend

- **Node.js & Express.js:** The backend is powered by Node.js and Express, providing a robust and scalable RESTful API.
- **MongoDB:** The platform uses MongoDB for data storage, leveraging its flexible schema and scalability.
- **JWT Authentication:** Ensures secure user sessions with JSON Web Tokens.
- **Mongoose:** Used for data modeling and interaction with MongoDB.

### Data Automation

- **Selenium:** A Selenium script automates data entry, reducing manual workload and minimizing errors.
- **Google Sheets API:** Integrates with Google Sheets to store and manage user inquiries.

### Security

- **Authentication:** Secure login and registration processes are implemented using JWT.
- **Data Encryption:** Sensitive data is encrypted before storage to ensure user privacy.
- **Input Validation:** Both client-side and server-side validations are implemented to prevent common security vulnerabilities such as SQL injection and XSS attacks.

### Performance

- **Lighthouse Score:** Optimized for performance, accessibility, and SEO. Initial tests have achieved a performance score of 55%, with ongoing efforts to improve this metric.
- **Caching:** Implemented at various levels to enhance load times and reduce server load.
- **Responsive Design:** Ensures optimal performance across devices with different screen sizes.

### Accessibility

- **AODA Compliance:** The platform adheres to the Accessibility for Ontarians with Disabilities Act (AODA) standards, ensuring a fully accessible experience for all users.

## Learnings

Through the development of **Great Homes**, our team gained experience in:

- **Full-Stack Development:** Comprehensive knowledge of the MERN stack, from frontend design to backend implementation.
- **Security Best Practices:** Implementing secure authentication mechanisms and handling sensitive user data.
- **Real Estate Knowledge:** Understanding the intricacies of mortgage calculations and property management.
- **Automation with Selenium:** Automating repetitive tasks to increase efficiency and accuracy.
- **AODA Compliance:** Designing with accessibility in mind to ensure our platform is usable by everyone.

## Future Development Plans

### Enhancements

- **UI/UX Improvements:** Continuous updates to improve user experience with dynamic layouts and enhanced visuals.
- **Advanced Search Filters:** Introduction of more granular filters, such as proximity to amenities and specific property features.
- **Real-Time Mortgage Rates:** Integrating live mortgage rates from various financial institutions for more accurate calculations.
- **Mobile Application:** Developing a mobile app to provide users with a seamless experience on the go.
- **Social Media Integration:** Allowing users to share listings and other information directly from the platform.

### Scalability

- **Backend Optimization:** Enhancing database queries and API endpoints to handle larger datasets as the platform grows.
- **Geographic Expansion:** Scaling the platform to include more regions and ensuring consistent performance across different markets.

## Conclusion

**Great Homes** is more than just a real estate website; it’s a fully integrated platform that simplifies the home-buying process. With a focus on user experience, security, and accessibility, we’re committed to making your journey to finding a new home as smooth as possible.

Thank you for exploring **Great Homes**. We’re excited to continue improving and expanding our platform to meet the needs of homebuyers everywhere.
