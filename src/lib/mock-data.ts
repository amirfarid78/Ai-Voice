import type { User, CallLog, Order, SpaBooking, ChauffeurBooking, TravelBooking, AiScript, WebhookLog } from './types';

export const mockUsers: User[] = [
  { id: 'usr_1', name: 'Alex Johnson', email: 'alex.j@example.com', avatar: 'https://i.pravatar.cc/150?u=usr_1', role: 'Admin', joinedDate: '2023-01-15' },
  { id: 'usr_2', name: 'Maria Garcia', email: 'maria.g@example.com', avatar: 'https://i.pravatar.cc/150?u=usr_2', role: 'Agent', joinedDate: '2023-02-20' },
  { id: 'usr_3', name: 'James Smith', email: 'james.s@example.com', avatar: 'https://i.pravatar.cc/150?u=usr_3', role: 'Agent', joinedDate: '2023-03-10' },
];

export const mockCallLogs: CallLog[] = [
  { id: 'call_1', caller: '+1-202-555-0104', to: '+1-555-867-5309', startTime: '2023-10-26 10:00 AM', duration: '5m 32s', status: 'Completed', recordingUrl: '#' },
  { id: 'call_2', caller: '+1-202-555-0176', to: '+1-555-867-5309', startTime: '2023-10-26 10:15 AM', duration: '2m 10s', status: 'Completed', recordingUrl: '#' },
  { id: 'call_3', caller: '+1-202-555-0155', to: '+1-555-867-5309', startTime: '2023-10-26 10:30 AM', duration: '0m 45s', status: 'Missed' },
  { id: 'call_4', caller: '+1-202-555-0199', to: '+1-555-867-5309', startTime: '2023-10-26 11:00 AM', duration: '8m 05s', status: 'Voicemail', recordingUrl: '#' },
  { id: 'call_5', caller: '+1-202-555-0182', to: '+1-555-867-5309', startTime: '2023-10-26 11:20 AM', duration: '12m 15s', status: 'Forwarded' },
];

export const mockOrders: Order[] = [
  { id: 3456, customer: { name: 'John Doe', email: 'john.d@email.com' }, date: '2023-10-26', status: 'Processing', total: 125.50 },
  { id: 3457, customer: { name: 'Jane Roe', email: 'jane.r@email.com' }, date: '2023-10-26', status: 'Completed', total: 89.99 },
  { id: 3458, customer: { name: 'Peter Jones', email: 'peter.j@email.com' }, date: '2023-10-25', status: 'Cancelled', total: 45.00 },
  { id: 3459, customer: { name: 'Mary Smith', email: 'mary.s@email.com' }, date: '2023-10-25', status: 'Pending', total: 210.00 },
];

export const mockSpaBookings: SpaBooking[] = [
  { id: 'spa_1', customerName: 'Emily Brown', service: 'Deep Tissue Massage', bookingTime: '2023-11-05 02:00 PM', status: 'Confirmed' },
  { id: 'spa_2', customerName: 'Michael Wilson', service: 'Facial Treatment', bookingTime: '2023-11-06 04:00 PM', status: 'Pending' },
  { id: 'spa_3', customerName: 'Sarah Miller', service: 'Aromatherapy', bookingTime: '2023-11-08 11:00 AM', status: 'Confirmed' },
];

export const mockChauffeurBookings: ChauffeurBooking[] = [
  { id: 'chauf_1', customerName: 'David Lee', pickupLocation: '123 Main St', dropoffLocation: 'Airport Terminal B', rideTime: '2023-11-10 08:00 AM', fare: 75.00, driver: 'Robert Davis', status: 'Assigned' },
  { id: 'chauf_2', customerName: 'Jessica Green', pickupLocation: 'Grand Hotel', dropoffLocation: '456 Oak Ave', rideTime: '2023-11-11 06:00 PM', fare: 45.50, status: 'Pending' },
];

export const mockTravelBookings: TravelBooking[] = [
  { id: 'travel_1', customerName: 'Chris Taylor', destination: 'Paris, France', travelDates: '2024-05-20 - 2024-05-27', travelers: 2, package: 'Romantic Getaway', status: 'Booked' },
  { id: 'travel_2', customerName: 'Patricia Anderson', destination: 'Kyoto, Japan', travelDates: '2024-04-10 - 2024-04-20', travelers: 1, package: 'Cultural Exploration', status: 'Pending' },
];

export const mockAiScripts: AiScript[] = [
  { id: 'script_1', name: 'Default Greeting', content: 'Thank you for calling {businessName}. My name is {aiName}, how can I help you today?', createdAt: '2023-01-01' },
  { id: 'script_2', name: 'Order Confirmation', content: 'I see you have a recent order. Press 1 to confirm, 2 to cancel.', createdAt: '2023-01-02' },
];

export const mockWebhookLogs: WebhookLog[] = [
  { id: 'wh_1', service: 'WooCommerce', url: '/api/webhook/woocommerce/new-order', status: 'Success', timestamp: '2023-10-26 12:01 PM', payload: '{"order_id": 3459, ...}' },
  { id: 'wh_2', service: 'WooCommerce', url: '/api/webhook/woocommerce/new-order', status: 'Success', timestamp: '2023-10-26 11:45 AM', payload: '{"order_id": 3458, ...}' },
  { id: 'wh_3', service: 'WooCommerce', url: '/api/webhook/woocommerce/new-order', status: 'Failed', timestamp: '2023-10-26 11:30 AM', payload: '{"error": "Invalid signature"}' },
];
