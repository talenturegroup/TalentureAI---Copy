'use client'

import { DashboardHeader } from '@/components/dashboard-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ElevenLabsWidget } from '@/components/elevenlabs-widget'
import Link from 'next/link'

export default function AIRecruiterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
            &larr; Back to Dashboard
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">AI-Recruiter</h1>
            <p className="text-muted-foreground">
              AI that calls candidates to audit skills in real-time. Get instant transcripts and rankings to hire the best people faster.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Widget Area */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>AI Recruiter Widget</CardTitle>
                  <CardDescription>
                    Click the microphone icon to start a conversation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-muted rounded-lg p-8">
                    <ElevenLabsWidget agentId="agent_8301km0gqpm0eyx9z7katpmrksxx" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About This Tool</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Real-time Conversation</h4>
                    <p className="text-xs text-muted-foreground">
                      Have natural, flowing conversations with advanced AI
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Voice Interaction</h4>
                    <p className="text-xs text-muted-foreground">
                      Speak naturally and get spoken responses
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Always Available</h4>
                    <p className="text-xs text-muted-foreground">
                      24/7 access to intelligent conversation partner
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Easy to Use</h4>
                    <p className="text-xs text-muted-foreground">
                      No setup required, just click and start talking
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-sm">Getting Started</CardTitle>
                </CardHeader>
                <CardContent className="text-xs space-y-2 text-muted-foreground">
                  <p>1. Click the microphone button below</p>
                  <p>2. Allow microphone access when prompted</p>
                  <p>3. Speak naturally to the AI</p>
                  <p>4. Listen to the AI&apos;s response</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
