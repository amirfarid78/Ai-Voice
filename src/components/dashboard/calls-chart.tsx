'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Feb', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Mar', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Apr', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'May', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Jun', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Jul', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Aug', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Sep', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Oct', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Nov', total: Math.floor(Math.random() * 500) + 200 },
  { name: 'Dec', total: Math.floor(Math.random() * 500) + 200 },
];

export function CallsChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className='font-headline'>Call Volume</CardTitle>
        <CardDescription>Total calls handled per month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
            <Tooltip
              cursor={{ fill: 'hsl(var(--muted))' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
