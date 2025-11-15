import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function SettingsFormSection({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  )
}

function SettingsInput({ id, label, type = "text", placeholder, defaultValue }: { id: string, label: string, type?: string, placeholder: string, defaultValue?: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} defaultValue={defaultValue} />
    </div>
  )
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Settings</h1>
      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="twilio">Twilio</TabsTrigger>
          <TabsTrigger value="openai">OpenAI</TabsTrigger>
          <TabsTrigger value="woocommerce">WooCommerce</TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <TabsContent value="general">
            <SettingsFormSection title="General Settings" description="Manage general application settings.">
              <SettingsInput id="business-name" label="Business Name" placeholder="Your Business Name" defaultValue="CallPilot AI" />
              <Button>Save Changes</Button>
            </SettingsFormSection>
          </TabsContent>
          <TabsContent value="twilio">
            <SettingsFormSection title="Twilio Configuration" description="Enter your Twilio API credentials.">
              <SettingsInput id="twilio-sid" label="Account SID" placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
              <SettingsInput id="twilio-token" label="Auth Token" type="password" placeholder="••••••••••••••••••••" />
              <SettingsInput id="twilio-number" label="Twilio Phone Number" placeholder="+15017122661" />
              <Button>Save Changes</Button>
            </SettingsFormSection>
          </TabsContent>
          <TabsContent value="openai">
            <SettingsFormSection title="OpenAI Configuration" description="Enter your OpenAI API key.">
              <SettingsInput id="openai-key" label="API Key" type="password" placeholder="sk-••••••••••••••••••••" />
              <Button>Save Changes</Button>
            </SettingsFormSection>
          </TabsContent>
          <TabsContent value="woocommerce">
            <SettingsFormSection title="WooCommerce Integration" description="Connect your WooCommerce store.">
              <SettingsInput id="wp-url" label="WordPress Site URL" placeholder="https://yourstore.com" />
              <SettingsInput id="wc-key" label="Consumer Key" placeholder="ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
              <SettingsInput id="wc-secret" label="Consumer Secret" type="password" placeholder="cs_••••••••••••••••••••" />
              <Button>Save Changes</Button>
            </SettingsFormSection>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
