'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Wand, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateAiVoiceScript } from '@/ai/flows/generate-ai-voice-script';
import { toast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const scriptFormSchema = z.object({
  businessName: z.string().min(1, 'Business name is required.'),
  businessType: z.string().min(1, 'Business type is required.'),
  tone: z.string().min(1, 'Tone is required.'),
  instructions: z.string().optional(),
});

type ScriptFormValues = z.infer<typeof scriptFormSchema>;

export default function AiScriptsPage() {
  const [generatedScript, setGeneratedScript] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<ScriptFormValues>({
    resolver: zodResolver(scriptFormSchema),
    defaultValues: {
      businessName: 'CallPilot SPA',
      businessType: 'SPA',
      tone: 'Friendly',
      instructions: '',
    },
  });

  async function onSubmit(data: ScriptFormValues) {
    setIsLoading(true);
    try {
      const result = await generateAiVoiceScript(data);
      setGeneratedScript(result.script);
      toast({
        title: "Script Generated!",
        description: "Your new AI voice script is ready.",
      });
    } catch (error) {
      console.error("Error generating script:", error);
      toast({
        title: "Generation Failed",
        description: "Could not generate the AI script. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold font-headline tracking-tight">AI Voice Scripts</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Generate Script</CardTitle>
              <CardDescription>Create a base script for your AI receptionist.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Luxe Chauffeur" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="SPA">SPA</SelectItem>
                            <SelectItem value="Chauffeur">Chauffeur</SelectItem>
                            <SelectItem value="Travel Agency">Travel Agency</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tone</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a tone" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Formal">Formal</SelectItem>
                            <SelectItem value="Friendly">Friendly</SelectItem>
                            <SelectItem value="Professional">Professional</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="instructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instructions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Mention our new winter package." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand className="mr-2 h-4 w-4" />
                    )}
                    Generate Script
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Script Editor</CardTitle>
              <CardDescription>Review, edit, and save your generated script.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-[calc(100%-7rem)]">
              <Label htmlFor="script-content">Generated Script</Label>
              <Textarea
                id="script-content"
                placeholder="Your generated AI script will appear here..."
                className="flex-grow font-code mt-2 resize-none"
                value={generatedScript}
                onChange={(e) => setGeneratedScript(e.target.value)}
              />
              <Button className="mt-4 self-end">Save Script</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
