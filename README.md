### Real-state system his name is "taklok"
### 1. Introduction
## a-project requirements

- 1-Each stay or property has a name, address, bedroom count, bathroom count, price , availability, isSell.
  show the dates when the property is available, check-in time, check-out time, an
  average rating, the total number of ratings for the property

- 2-Each property can also belong to multiple categories (like cozy, entire house,
  apartment, etc.) and can have multiple bedrooms with each bedroom having the bed
  count and type of bed in each bedroom listed.

- 3- Each property can have multiple house rules (like no-smoking, no pets allowed, etc.) (if rent)
  and multiple amenities (like Wi-Fi, air conditioning, etc.)

- 4- Each property can also have multiple photos and has a cancellation policy which lists
  whether the stay at the property is refundable if cancelled, the percentage of the price
  refunded and the time period within which it is refundable

- 5- Each property must also have a unique ID
  There are two kinds of users - a host (who hosts the stay at a property) and a guest
  (who stays at a property)

- 6- Each user account has an optional profile picture, about section, the user’s first name,
  last name, date of birth, address, gender, phone number, details about one emergency
  contact (the contact’s name, relationship to the user, preferred language, email address,
  country code and phone number), the user’s email address and password

- 7- Each user must have a unique user ID

- 8- A host can be a super host and a host account can have a rating along with the total
  number of ratings for the host.

- 9- A guest account can also have a rating and the total number of ratings for the guest for (rent only)

- 10- A guest can have a number of wishlists. Each wishlist has:

  - ○ A name
  - ○ A privacy
  - ○ A list of properties in it (if any).

- 11- Every booking of a stay made by a guest has a unique booking ID, booking date (when
  the booking was made), check-in date (the guest arrival date), check-out date (the date
  when the guest leaves), the number of guests for the stay, the date the booking was
  modified (if modified).

- 12- Every booking(buying) lists the tax paid, the total price for the stay, the total price with taxes
  (and cleaning fee), the amount of the total price with taxes that has been paid, the
  amount due, as well as the promo code and the discount amount (if any promo was
  applied).

- 13- Every booking also lists whether the booking has been cancelled, the cancellation date,
  the refund amount and the refund amount paid
  Each guest must have a credit card to pay for the stay. Each credit card must have
  the following:

  - ○ A unique card number
  - ○ A 3-digit CSV number
  - ○ An expiration date
  - ○ The name of the cardholder
  - ○ The type of the card
  - ○ Billing address

- 14- A credit card can only belong to one guest

- 15- Each host must have a bank account where the amount for a stay hosted by the host
  will be deposited. Each bank account must have the following details: - ○ A unique account number

  - ○ A routing number
  - ○ The type of the account

- 16- A bank account can only belong to one host

-The following relationships were noted between the different components of the system:

- 17-A host can send 0 or more messages to a guest and vice-versa, and each message
  should list who created it, whom it was sent to, the date of creation and the message
  body itself.

- 18-A guest can review 0 or more properties and the property can contain 0 or more reviews
- from guests. Each review should have the following:

  - ○ Multiple photos of the property (if any)
  - ○ A comment
  - ○ A cleanliness rating
  - ○ A communication rating
  - ○ A check-in rating
  - ○ An accuracy rating
  - ○ A location rating
  - ○ A value rating
  - ○ An overall rating
  - ○ The date when the review was created
  - ○ The date when the review was modified (if modified)

- 19-A property listing can be included in 0 or more wishlists, and a wishlist can have 0 or
  more property listings. If a property is included in a wishlist, it may have the following
  information:
  - ○ Check-in date (the date when the guest wishes to stay in the property)
  - ○ Check-out date (the date when the guest wishes to leave the property)
- 20-A guest can have 0 or more wishlists
  Each booking should have exactly one property listed, but a property can be in 0 or more
  bookings
- 21-Each booking is made by exactly one guest but a guest can make 0 or more bookings

- 22-A host can review 0 or more guests and a guest can review 0 or more hosts. Such a
  -review relationship must have the following information:
  - ○ The comment for the guest by the host
  - ○ The rating given by the host to the guest
  - ○ The date the review for the guest was created by the host
  - ○ The date the review for the guest was modified by the host (if it was modified)
  - The comment for the host by the guest
  - The rating given by the guest to the host
  - The date the review for the host was created by the guest
  - The date the review for the host was modified by the guest (if it was modified)
## b-Problem Statement:
 The current process of booking, managing, and reviewing rental properties lacks a unified, feature-rich platform that caters to the diverse needs of property hosts and guests. Existing solutions fail to address the following challenges comprehensively:

  - Complex Property Listings: Managing detailed property attributes (e.g., availability, ratings, amenities, house rules, photos, and cancellation policies) is cumbersome and often incomplete, leading to poor user experiences for guests.

  - Comprehensive User Profiles: Platforms often lack robust user profiles for both hosts and guests, which are essential for personalized experiences and trust-building.

   - Booking Management: Current systems fail to provide a detailed and flexible booking experience that includes pricing, taxes, discounts, cancellations, and payment tracking for both renting and buying properties.

   - Review and Feedback System: Many platforms lack a nuanced review system, resulting in incomplete feedback that does not address cleanliness, communication, accuracy, or value.

   - Wishlist Functionality: Guests need the ability to organize and save properties with specific preferences (e.g., privacy settings, check-in/out dates) to streamline decision-making.

   - Secure Payments and Payouts: Ensuring secure payment processes, including credit card details for guests and bank account payouts for hosts, is critical to user confidence.

   - Host-Guest Communication: Communication channels are often fragmented, limiting effective interaction between hosts and guests for inquiries or issue resolution.

   - Scalability and Relationships: Platforms need to support complex relationships, such as multiple reviews, messages, and wishlists, while maintaining ease of use and performance.

   - Multi-Categorization and Filtering: Guests need enhanced filtering and categorization capabilities (e.g., cozy homes, apartments, amenities) to find properties that match their preferences effortlessly.

This project aims to build a comprehensive platform that addresses these gaps by enabling detailed property management, seamless booking processes, secure financial transactions, and user-friendly features to enhance the overall experience for both hosts and guests.
## c-Objectives

The project aims to build a feature-rich platform for managing rental and purchased property listings, bookings, and interactions between hosts and guests. The key objectives are:

  - Detailed Property Management
        Enable hosts to list properties with comprehensive details, including name, address, bedroom and bathroom count, price, availability, average ratings, photos, amenities, house rules, and cancellation policies.
        Allow categorization of properties (e.g., cozy, apartment) and listing of bedroom details (e.g., bed count and type).

  - User-Friendly Booking System
        Provide a robust booking system with functionality to manage booking dates, check-in/check-out times, guest count, and payment details.
        Include support for tax calculations, promo codes, cancellation tracking, refunds, and payments for both renting and buying scenarios.

  - Secure Financial Transactions
        Implement secure payment processing for guests, including credit card details (card number, CSV, expiration, cardholder name, and billing address).
        Ensure seamless payouts to hosts via linked bank accounts with account and routing numbers.

  - Advanced Wishlist Functionality
        Allow guests to create, organize, and manage multiple wishlists with customizable privacy settings.
        Enable wishlists to store detailed property preferences, including tentative check-in and check-out dates.

  - Enhanced Review System
        Enable both hosts and guests to review each other with detailed criteria (e.g., cleanliness, communication, accuracy, and overall rating).
        Support property reviews with optional photos, comments, and multi-criteria ratings.

  - Profile Customization and Trust-Building
        Provide hosts and guests with rich profiles, including photos, detailed personal information, and emergency contact details.
        Introduce ratings for hosts (e.g., super host designation) and guests to foster trust and transparency.

  -  Effective Communication Tools
        Facilitate seamless two-way messaging between hosts and guests with details such as sender/receiver, creation date, and message content.

  -  Scalable and Flexible Relationships
        Support complex relationships between components (e.g., properties, bookings, reviews, and wishlists).
        Ensure scalability for managing multiple properties, users, and interactions efficiently.

  -  Comprehensive Search and Filtering
        Enable users to filter properties by categories, amenities, ratings, availability, and price to simplify the search process.

  -  Data Integrity and Security

  -  Ensure the uniqueness of user IDs, property IDs, booking IDs, and financial information to prevent duplication and fraud.

  -  Streamlined User Experiences

  -  Create an intuitive user interface for hosts to manage listings and guests to explore, book, and review properties effortlessly.

By achieving these objectives, the platform will address the gaps in current property rental systems and provide a seamless, secure, and user-friendly experience for all stakeholders.
## d-Scope

The scope of this project outlines the functionalities and boundaries of the platform for both hosts and guests. It defines the key features, supported user interactions, and exclusions to ensure clarity and focus throughout development.
In Scope

  - Property Management
        Allow hosts to create, update, and manage property listings with detailed attributes, including:
            Property name, address, bedroom and bathroom count.
            Availability dates, check-in/check-out times, and price.
            House rules, amenities, cancellation policies, and multiple photos.
            Categorization (e.g., cozy, apartment, entire house).

  -  Booking System
        Enable guests to book or purchase properties with the following features:
            Booking details: check-in/out dates, guest count, booking date, and modification tracking.
            Payment breakdown: taxes, cleaning fees, discounts, refund policies, and promo codes.
            Cancellation management with refund tracking.

  - User Profiles
        Hosts: Create profiles with details such as name, address, bank account information, ratings, and super host designation.
        Guests: Set up profiles with personal details, ratings, wishlists, and emergency contact information.

  -  Secure Transactions
        Integrate secure payment systems for:
            Guests: Adding and managing credit cards for payments.
            Hosts: Receiving payouts via linked bank accounts.

  - Wishlist Functionality
        Allow guests to create, manage, and organize multiple wishlists with privacy settings.
        Enable wishlists to store specific property details, including tentative check-in/out dates.

  -  Review and Rating System
        Enable detailed reviews for properties, hosts, and guests, including multi-criteria ratings (e.g., cleanliness, communication, value).
        Support comments and optional photos in reviews.

  - Communication Tools
        Provide a messaging system between hosts and guests with sender/receiver details, timestamps, and message content.

  -  Search and Filtering
        Allow guests to search and filter properties by categories, availability, price, and amenities.

  -  Data Integrity
        Ensure the uniqueness of IDs for users, properties, bookings, and financial records.

  -  Scalability and Extensibility
        Build a platform architecture that supports the addition of new features or categories without significant restructuring.

  - Out of Scope

      - Third-Party Property Listings
        Integration with third-party property platforms is not included in this phase.

      - Real-Time Availability Updates
        Automatic syncing of availability with external calendars (e.g., Google Calendar) is not part of the current scope.

      - Multi-Currency Support
        Payments will support only one currency for this phase.

      - Legal and Tax Compliance
      - Legal review of host agreements, tax regulations, and compliance is the responsibility of users.
  ### 2. Stakeholders
  ## a-List of key stakeholders
  - 1- project owner: this project for Ahmed Sami I developed it for traning reasonse .
  ## b- team members and tech stack
  - 1- for front end Ahmed Sami with tech stack Next.js 14 and tailsindcss for stayling and redux as state management .
  - 2- for front end Ahmed Sami with tech stack Nest.js  and PostgreSQL and Prisma ORM and Restfull api as architecture desgin .  
  

   - Offline Access
        The platform will not support offline usage; it requires an active internet connection.

By defining these boundaries, the project will focus on delivering a robust property rental and purchase platform that meets the needs of hosts and guests while leaving room for future enhancements.
##  c-Roles

The success of the project depends on the contributions and collaboration of various stakeholders, each playing a specific role. Below is a breakdown of the primary stakeholders and their responsibilities:
- 1. Platform Users
     - Hosts

        - Role: Property Owners/Managers
        - Responsibilities:
        List and manage properties, including availability, pricing, and details.
        Define house rules, amenities, and cancellation policies for their properties.
        Monitor and respond to guest reviews and ratings.
        Communicate with guests regarding bookings, inquiries, or issues.
        Manage their profiles, including bank account details for payouts.
        Maintain high standards to achieve and retain a super host rating.

    - Guests

      - Role: Property Renters or Buyers
      - Responsibilities:
      Search, filter, and book properties based on their needs.
      Create and manage wishlists to save properties for future reference.
        Leave detailed reviews and ratings for properties and hosts.
        Manage their profiles, including credit card details for payments.
        Communicate with hosts regarding property-related queries.
- 2. Platform Administrator

    - Role: System Administrator/Moderator
    - Responsibilities:
        Ensure smooth operation and maintenance of the platform.
        Monitor platform activity to prevent abuse or violations of terms and policies.
        Handle disputes between hosts and guests if needed.
        Manage platform-wide settings, such as taxes, service fees, and promo codes.
        Oversee user account verifications and handle support requests.

- 3. Development Team

    - Role: Software Engineers, Designers, and Testers
    - Responsibilities:
        Design and develop the platform, ensuring a user-friendly experience.
        Build and integrate features like property listings, booking systems, payment gateways, and review modules.
        Conduct rigorous testing to ensure functionality, security, and scalability.
        Provide regular updates and fixes based on user feedback and system needs.

- 4. Product Owner/Project Manager

    - Role: Visionary and Coordinator
    - Responsibilities:
        Define the vision, goals, and priorities of the platform.
        Manage project timelines, budgets, and deliverables.
        Act as the main point of contact between stakeholders.
        Ensure that the platform aligns with user needs and market demands.

- 5. Financial Partners

    - Role: Payment Gateways and Banks
    - Responsibilities:
        Provide secure payment processing for guests and payout management for hosts.
        Ensure compliance with financial regulations and fraud prevention.

- 6. Marketing and Support Team

    - Role: Outreach and User Assistance
    - Responsibilities:
        Promote the platform to attract hosts and guests.
        Create tutorials, FAQs, and documentation for user onboarding.
        Handle customer queries and provide technical or general support.

- 7. Legal and Compliance Team

    - Role: Risk and Regulation Management
    - Responsibilities:
        Draft and enforce terms of service and privacy policies.
        Ensure compliance with local, national, and international laws.
        Address legal concerns related to property listings, cancellations, and payments.

These roles collectively ensure the platform is user-friendly, secure, and successful in meeting its objectives.
