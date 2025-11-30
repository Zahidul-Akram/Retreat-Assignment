# Hotel Venue API & Dashboard

A simplified venue management system built with Next.js, Prisma, and PostgreSQL.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zahidul-Akram/Retreat-Assignment.git
   cd Retreat-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your PostgreSQL connection string:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/retreat?schema=public"
   ```
   *Replace `USER`, `PASSWORD`, and `retreat` with your actual database credentials and name.*

4. **Setup Database**
   Run migrations and seed the database with sample venues:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Run the Application**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Approach & Tradeoffs

### Tech Stack
- **Next.js (App Router)**: Chosen for its robust full-stack capabilities, allowing both API routes and React UI in a single project.
- **Prisma**: Selected for type-safe database interactions and easy schema management.
- **PostgreSQL**: Reliable relational database suitable for structured booking data.
- **Tailwind CSS**: Used for rapid, responsive UI development.

### Design Decisions
- **Simplified Booking Flow**: The booking process is a simple modal form. In a real-world app, this might be a multi-step wizard or a separate page.
- **Client-Side Filtering**: For this scale (5-10 venues), filtering is handled via API query parameters but the frontend state management is simple.
- **No Authentication**: As per requirements, user authentication was omitted to focus on the core venue/booking logic.

### Tradeoffs
- **Validation**: Basic validation is implemented (capacity checks), but more complex rules (date availability, conflicting bookings) were out of scope.
- **Error Handling**: Basic error messages are shown. A production app would have more granular error states and logging.

## Future Improvements

With more time, I would improve:

1. **Date Availability**: Implement logic to check if a venue is actually free for the requested dates (prevent double bookings).
2. **Authentication**: Add user accounts so companies can manage their bookings.
3. **Admin Dashboard**: Create a view for venue owners to see and manage inquiries.
4. **Image Uploads**: Allow uploading real venue images instead of using placeholder URLs.
5. **Testing**: Add unit tests (Jest) and end-to-end tests (Playwright) for better reliability.
