import { mockCallLogs } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlayCircle, Download } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export default function CallsLogPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Calls Log</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Calls</CardTitle>
          <CardDescription>A log of all incoming and outgoing calls.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Caller</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Date &amp; Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCallLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.caller}</TableCell>
                  <TableCell>{log.to}</TableCell>
                  <TableCell>{log.startTime}</TableCell>
                  <TableCell>{log.duration}</TableCell>
                  <TableCell>
                    <Badge variant={
                      log.status === 'Completed' ? 'default' 
                      : log.status === 'Missed' ? 'destructive' 
                      : 'secondary'
                    }>{log.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {log.recordingUrl ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Play Recording
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
