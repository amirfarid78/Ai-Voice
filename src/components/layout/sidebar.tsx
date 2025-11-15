'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bot,
  Calendar,
  Headset,
  Home,
  LayoutDashboard,
  Phone,
  Settings,
  ShoppingCart,
  Users,
  Webhook,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/calls', label: 'Calls Log', icon: Phone },
  { href: '/orders', label: 'WooCommerce Orders', icon: ShoppingCart },
  { href: '/bookings', label: 'Bookings', icon: Calendar },
  { href: '/scripts', label: 'AI Voice Scripts', icon: Bot },
  { href: '/webhooks', label: 'Webhook Logs', icon: Webhook },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/users', label: 'Users', icon: Users },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || (path !== '/dashboard' && pathname.startsWith(path));
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map(({ href, label, icon: Icon }) => (
            <SidebarMenuItem key={href}>
              <Link href={href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={isActive(href)}
                  tooltip={{ children: label }}
                >
                  <Icon />
                  <span>{label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-12 w-full justify-start p-2 group-data-[collapsible=icon]:h-12 group-data-[collapsible=icon]:w-12 group-data-[collapsible=icon]:justify-center">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/150?u=usr_1" alt="Alex Johnson" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="text-left group-data-[collapsible=icon]:hidden">
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-xs text-muted-foreground">alex.j@example.com</p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Alex Johnson</p>
                <p className="text-xs leading-none text-muted-foreground">
                  alex.j@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
