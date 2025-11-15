import { mockWebhookLogs } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function WebhookLogsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Webhook Logs</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
          <CardDescription>A log of all received webhook events.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Endpoint</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Payload</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockWebhookLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.service}</TableCell>
                  <TableCell className="font-mono text-xs">{log.url}</TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant={log.status === 'Success' ? 'secondary' : 'destructive'}>
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                          <DialogTitle>Webhook Payload</DialogTitle>
                          <DialogDescription>
                            Raw payload received from {log.service}.
                          </DialogDescription>
                        </DialogHeader>
                        <pre className="mt-2 w-full rounded-md bg-muted p-4 font-code text-sm">
                          <code>{JSON.stringify(JSON.parse(log.payload), null, 2)}</code>
                        </pre>
                      </DialogContent>
                    </Dialog>
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
