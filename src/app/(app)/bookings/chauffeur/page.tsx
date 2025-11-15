import { mockChauffeurBookings } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ChauffeurBookingsPage() {
  return (
    <Card>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Dropoff</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Fare</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockChauffeurBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.customerName}</TableCell>
                <TableCell>{booking.pickupLocation}</TableCell>
                <TableCell>{booking.dropoffLocation}</TableCell>
                <TableCell>{booking.rideTime}</TableCell>
                <TableCell>${booking.fare.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={booking.status === 'Assigned' ? 'default' : 'secondary'}>{booking.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
