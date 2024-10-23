### Real-state system his name is "taklok"

## project requirements

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
