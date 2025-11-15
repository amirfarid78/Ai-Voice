import { StatCard } from '@/components/dashboard/stat-card';
import { CallsChart } from '@/components/dashboard/calls-chart';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import { Phone, DollarSign, ShoppingCart, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockCallLogs, mockOrders } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Calls" 
          value="1,234" 
          description="+20.1% from last month"
          Icon={Phone}
        />
        <StatCard 
          title="Revenue" 
          value="$45,231.89" 
          description="+180.1% from last month"
          Icon={DollarSign}
        />
        <StatCard t
          itle="New Orders" 
          value="+120" 
          description="+19% from last month"
          Icon={ShoppingCart}
        />
        <StatCard 
          title="Bookings" 
          value="+57" 
          description="+2 since last hour"
          Icon={Calendar}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        <CallsChart />
        <RevenueChart />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className='font-headline'>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.slice(0, 5).map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={order.status === 'Processing' ? 'default' : 'secondary'}>{order.status}</Badge>
                    </TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='font-headline'>Recent Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Caller</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCallLogs.slice(0, 5).map((call) => (
                  <TableRow key={call.id}>
                    <TableCell className="font-medium">{call.caller}</TableCell>
                    <TableCell>
                      <Badge variant={call.status === 'Completed' ? 'default' : 'outline'}>{call.status}</Badge>
                    </TableCell>
                    <TableCell>{call.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
