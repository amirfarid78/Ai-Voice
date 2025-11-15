import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-call-logs.ts';
import '@/ai/flows/interpret-voice-message.ts';
import '@/ai/flows/generate-ai-voice-script.ts';