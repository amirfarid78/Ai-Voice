
export type User = {
  id?: string;
  uid?: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Admin' | 'Agent';
  joinedDate: string;
};

export type CallLog = {
  id: string;
  caller: string;
  to: string;
  startTime: string;
  duration: string;
  status: 'Completed' | 'Missed' | 'Voicemail' | 'Forwarded';
  recordingUrl?: string;
};

export type Order = {
  id: number;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  status: 'Processing' | 'Completed' | 'Cancelled' | 'Pending';
  total: number;
};

export type SpaBooking = {
  id: string;
  customerName: string;
  service: string;
  bookingTime: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
};

export type ChauffeurBooking = {
  id: string;
  customerName: string;
  pickupLocation: string;
  dropoffLocation: string;
  rideTime: string;
  fare: number;
  driver?: string;
  status: 'Assigned' | 'Pending' | 'Completed';
};

export type TravelBooking = {
  id: string;
  customerName: string;
  destination: string;
  travelDates: string;
  travelers: number;
  package: string;
  status: 'Booked' | 'Pending' | 'Cancelled';
};

export type AiScript = {
  id: string;
  name: string;
  content: string;
  createdAt: string;
};

export type WebhookLog = {
  id: string;
  service: 'WooCommerce';
  url: string;
  status: 'Success' | 'Failed';
  timestamp: string;
  payload: string;
};
