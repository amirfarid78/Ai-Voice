'use server';

/**
 * @fileOverview An AI agent to transcribe and summarize voice messages.
 *
 * - interpretVoiceMessage - A function that handles the voice message interpretation process.
 * - InterpretVoiceMessageInput - The input type for the interpretVoiceMessage function.
 * - InterpretVoiceMessageOutput - The return type for the interpretVoiceMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InterpretVoiceMessageInputSchema = z.object({
  voiceMessageDataUri: z
    .string()
    .describe(
      "A voice message as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type InterpretVoiceMessageInput = z.infer<typeof InterpretVoiceMessageInputSchema>;

const InterpretVoiceMessageOutputSchema = z.object({
  transcription: z.string().describe('The transcription of the voice message.'),
  summary: z.string().describe('A short summary of the voice message.'),
});
export type InterpretVoiceMessageOutput = z.infer<typeof InterpretVoiceMessageOutputSchema>;

export async function interpretVoiceMessage(
  input: InterpretVoiceMessageInput
): Promise<InterpretVoiceMessageOutput> {
  return interpretVoiceMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interpretVoiceMessagePrompt',
  input: {schema: InterpretVoiceMessageInputSchema},
  output: {schema: InterpretVoiceMessageOutputSchema},
  prompt: `You are an AI assistant tasked with transcribing and summarizing voice messages.

  First, transcribe the voice message provided.
  Second, create a concise summary of the voice message.

  Voice Message: {{media url=voiceMessageDataUri}}

  Transcription:
  {{output.transcription}}

  Summary:
  {{output.summary}}`,
});

const interpretVoiceMessageFlow = ai.defineFlow(
  {
    name: 'interpretVoiceMessageFlow',
    inputSchema: InterpretVoiceMessageInputSchema,
    outputSchema: InterpretVoiceMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
