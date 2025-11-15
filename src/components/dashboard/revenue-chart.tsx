'use client';

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 3000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 3000) + 1500 },
  { name: 'Mar', total: Math.floor(Math.random() * 3000) + 2000 },
  { name: 'Apr', total: Math.floor(Math.random() * 3000) + 1800 },
  { name: 'May', total: Math.floor(Math.random() * 3000) + 2500 },
  { name: 'Jun', total: Math.floor(Math.random() * 3000) + 3000 },
  { name: 'Jul', total: Math.floor(Math.random() * 3000) + 3200 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className='font-headline'>Revenue</CardTitle>
        <CardDescription>Total revenue from orders per month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="hsl(var(--foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--muted))' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Area type="monotone" dataKey="total" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
