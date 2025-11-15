'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const bookingTabs = [
  { value: 'spa', label: 'SPA', href: '/bookings/spa' },
  { value: 'chauffeur', label: 'Chauffeur', href: '/bookings/chauffeur' },
  { value: 'travel', label: 'Travel Agency', href: '/bookings/travel' },
];

export default function BookingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activeTab = bookingTabs.find(tab => pathname.includes(tab.value))?.value || 'spa';

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Booking Management</h1>
      <Tabs defaultValue={activeTab} className="w-full">
        <TabsList>
          {bookingTabs.map((tab) => (
            <Link key={tab.value} href={tab.href} passHref legacyBehavior>
              <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
            </Link>
          ))}
        </TabsList>
        <div className="mt-4">{children}</div>
      </Tabs>
    </div>
  );
}
