'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, PhoneOff, Mic, MicOff, Voicemail } from 'lucide-react';

const DialpadButton = ({ digit, letters }: { digit: string, letters?: string }) => {
    return (
        <Button variant="outline" className="w-20 h-20 rounded-full text-2xl flex flex-col">
            <span>{digit}</span>
            {letters && <span className="text-xs text-muted-foreground">{letters}</span>}
        </Button>
    )
}

export default function DialerPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [inCall, setInCall] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const handleDigitClick = (digit: string) => {
        setPhoneNumber(prev => prev + digit);
    }

    const handleCallToggle = () => {
        if (inCall) {
            // Logic to end call
            setInCall(false);
        } else {
            // Logic to start call
            if (phoneNumber.length > 0) {
                setInCall(true);
            }
        }
    }

    const handleMuteToggle = () => {
        setIsMuted(prev => !prev);
    }

    return (
        <div className="flex flex-col gap-8 items-center">
            <h1 className="text-3xl font-bold font-headline tracking-tight">Dialer</h1>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>AI Phone Dialer</CardTitle>
                    <CardDescription>Make outbound calls using your AI receptionist.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <Input 
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="text-center text-lg h-12 mb-4"
                        readOnly={inCall}
                    />

                    <div className="grid grid-cols-3 gap-2">
                        <DialpadButton digit="1" />
                        <DialpadButton digit="2" letters="ABC" />
                        <DialpadButton digit="3" letters="DEF" />
                        <DialpadButton digit="4" letters="GHI" />
                        <DialpadButton digit="5" letters="JKL" />
                        <DialpadButton digit="6" letters="MNO" />
                        <DialpadButton digit="7" letters="PQRS" />
                        <DialpadButton digit="8" letters="TUV" />
                        <DialpadButton digit="9" letters="WXYZ" />
                        <DialpadButton digit="*" />
                        <DialpadButton digit="0" letters="+" />
                        <DialpadButton digit="#" />
                    </div>

                    <div className="flex justify-center items-center gap-4 mt-4 w-full">
                        {inCall && (
                            <Button variant="outline" size="icon" className="w-16 h-16 rounded-full" onClick={handleMuteToggle}>
                                {isMuted ? <MicOff /> : <Mic />}
                            </Button>
                        )}
                        <Button 
                            className={`w-20 h-20 rounded-full ${inCall ? 'bg-destructive hover:bg-destructive/90' : 'bg-green-500 hover:bg-green-600'}`}
                            onClick={handleCallToggle}
                        >
                            {inCall ? <PhoneOff size={32} /> : <Phone size={32} />}
                        </Button>
                         {inCall && (
                            <Button variant="outline" size="icon" className="w-16 h-16 rounded-full">
                                <Voicemail />
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
