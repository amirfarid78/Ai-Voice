import { mockTravelBookings } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TravelBookingsPage() {
  return (
    <Card>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Package</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Travelers</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTravelBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.customerName}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>{booking.package}</TableCell>
                <TableCell>{booking.travelDates}</TableCell>
                <TableCell>{booking.travelers}</TableCell>
                <TableCell>
                  <Badge variant={booking.status === 'Booked' ? 'default' : 'secondary'}>{booking.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
