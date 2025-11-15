'use server';

/**
 * @fileOverview AI flow for generating a base script for the AI Receptionist.
 *
 * This file defines a Genkit flow that uses a prompt to generate a basic AI voice script.
 * The script is intended to be a starting point for administrators who want to quickly
 * customize the AI receptionist's call handling.
 *
 * - generateAiVoiceScript - A function that triggers the AI script generation.
 * - GenerateAiVoiceScriptInput - The input type for the generateAiVoiceScript function.
 * - GenerateAiVoiceScriptOutput - The return type for the generateAiVoiceScript function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiVoiceScriptInputSchema = z.object({
  businessName: z.string().describe('The name of the business.'),
  businessType: z.string().describe('The type of business (e.g., SPA, Chauffeur, Travel Agency).'),
  tone: z.string().describe('The tone of the script (e.g., formal, friendly, professional).'),
  instructions: z.string().optional().describe('Specific instructions for the AI script generation.'),
});
export type GenerateAiVoiceScriptInput = z.infer<typeof GenerateAiVoiceScriptInputSchema>;

const GenerateAiVoiceScriptOutputSchema = z.object({
  script: z.string().describe('The generated AI voice script.'),
});
export type GenerateAiVoiceScriptOutput = z.infer<typeof GenerateAiVoiceScriptOutputSchema>;

export async function generateAiVoiceScript(input: GenerateAiVoiceScriptInput): Promise<GenerateAiVoiceScriptOutput> {
  return generateAiVoiceScriptFlow(input);
}

const generateAiVoiceScriptPrompt = ai.definePrompt({
  name: 'generateAiVoiceScriptPrompt',
  input: {schema: GenerateAiVoiceScriptInputSchema},
  output: {schema: GenerateAiVoiceScriptOutputSchema},
  prompt: `You are an AI assistant tasked with generating a base script for an AI receptionist.

  The script should be appropriate for a {{businessType}} called {{businessName}}.
  The tone of the script should be {{tone}}.

  {{#if instructions}}
  Additional instructions: {{instructions}}
  {{/if}}

  The script should cover common scenarios such as answering the phone, taking messages, providing information about the business, and handling booking requests.
  The AI receptionist should introduce itself, and act as if it is an expert receptionist.
  It should also ask how it can help the caller.
  It should also thank the caller at the end of the call.
  The AI receptionist should be very polite and professional.

  Here is the generated script:
  `,
});

const generateAiVoiceScriptFlow = ai.defineFlow(
  {
    name: 'generateAiVoiceScriptFlow',
    inputSchema: GenerateAiVoiceScriptInputSchema,
    outputSchema: GenerateAiVoiceScriptOutputSchema,
  },
  async input => {
    const {output} = await generateAiVoiceScriptPrompt(input);
    return output!;
  }
);
