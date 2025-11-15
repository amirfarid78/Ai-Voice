'use server';
/**
 * @fileOverview An AI agent that summarizes call logs to identify trends and issues.
 *
 * - summarizeCallLogs - A function that handles the call log summarization process.
 * - SummarizeCallLogsInput - The input type for the summarizeCallLogs function.
 * - SummarizeCallLogsOutput - The return type for the summarizeCallLogs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCallLogsInputSchema = z.object({
  callLogs: z.string().describe('The call logs to summarize.'),
});
export type SummarizeCallLogsInput = z.infer<typeof SummarizeCallLogsInputSchema>;

const SummarizeCallLogsOutputSchema = z.object({
  summary: z.string().describe('The summary of the call logs.'),
});
export type SummarizeCallLogsOutput = z.infer<typeof SummarizeCallLogsOutputSchema>;

export async function summarizeCallLogs(input: SummarizeCallLogsInput): Promise<SummarizeCallLogsOutput> {
  return summarizeCallLogsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCallLogsPrompt',
  input: {schema: SummarizeCallLogsInputSchema},
  output: {schema: SummarizeCallLogsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing call logs to identify trends and issues.

  Please provide a concise summary of the following call logs, highlighting any recurring themes, common issues, or notable trends:

  Call Logs: {{{callLogs}}}`,
});

const summarizeCallLogsFlow = ai.defineFlow(
  {
    name: 'summarizeCallLogsFlow',
    inputSchema: SummarizeCallLogsInputSchema,
    outputSchema: SummarizeCallLogsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
