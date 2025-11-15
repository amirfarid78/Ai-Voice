# **App Name**: CallPilot AI

## Core Features:

- AI Receptionist Voice System: Handles incoming calls, converts speech to text (using OpenAI Whisper or alternatives), generates AI voice (using OpenAI TTS or alternatives), and provides real-time call conversation. It manages caller actions such as order status inquiries, WooCommerce order confirmation/cancellation, booking management (SPA, chauffeur, travel agency), voice message capture, and call forwarding to human support.
- Automatic Outbound Call System (AI Confirmation Calls): Triggers a workflow when WooCommerce receives a new order, initiating an AI confirmation call. The AI interacts with the customer to confirm or cancel the order, updates the WooCommerce order status based on DTMF input, and logs call history with order status updates.
- WooCommerce Integration: Integrates with WooCommerce via REST API and webhooks to fetch products, customer orders, and specific order details. Allows for automatic updates to order status and optional booking creation as WooCommerce orders. Includes a webhook endpoint for new orders.
- Booking Modules (SPA, Chauffeur, Travel Agency): Manages three booking types (SPA, chauffeur, travel agency) via AI.  Each module captures specific information such as service selection, scheduling, pickup/drop-off, destinations, and traveler details, and stores the booking data in SQLite. Includes confirmation workflows.
- Admin Panel (Next.js + Tailwind): Provides a Next.js admin panel with pages for Dashboard, Call Logs, WooCommerce Orders, and Booking Management. Includes AI Voice Scripts editor and Webhook Logs viewer, along with Settings (Twilio, OpenAI, WooCommerce, STT/TTS API keys) and User management. Uses Next.js server actions, SQLite Prisma ORM, protected routes (JWT Auth), and realtime refresh via SWR or server actions.
- Backend (Node.js + Express): Handles API requests for Twilio inbound/outbound calls, DTMF handling, AI response generation, booking management, WooCommerce webhook, order status updates, and call logs. Utilizes JWT auth, logging, rate limiting, and signature verification for WooCommerce webhooks.
- Database (SQLite + Prisma): Stores data in SQLite database using Prisma ORM with tables for Users, Call Logs, Woo Orders, Spa Bookings, Chauffeur Bookings, Travel Bookings, Settings, AI Scripts, and Webhook Logs.

## Style Guidelines:

- Primary color: A vibrant blue (#29ABE2) to convey trust and professionalism, reminiscent of a clear, efficient communication system.
- Background color: Light gray (#F5F5F5) for a clean and modern backdrop, ensuring readability and reducing eye strain.
- Accent color: A subtle teal (#008080) to highlight key interactive elements, adding a touch of sophistication and trustworthiness.
- Headline font: 'Space Grotesk' (sans-serif) for headlines, conveying a modern and tech-oriented feel.
- Body font: 'Inter' (sans-serif) for body text, providing excellent readability and a clean, professional look. Note: recommended pairing is Space Grotesk/Inter.
- Code font: 'Source Code Pro' (monospace) for code snippets in the admin panel.
- Use a consistent set of streamlined icons from a library like Font Awesome or Material Icons, emphasizing clarity and ease of recognition.  Icons should be primarily the primary color.
- Implement a clean, well-spaced layout using a grid system in the admin panel. Ensure all interactive elements are easily accessible and intuitive to use.
- Incorporate subtle animations for transitions and feedback, enhancing the user experience without being distracting (e.g., button hover effects, loading animations).