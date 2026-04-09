'use client'

import { DashboardHeader } from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'

export default function WritingAssistantPage() {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyze = async () => {
    setIsLoading(true)
    // Placeholder for API call
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
            ← Back to Dashboard
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Writing Assistant</h1>
            <p className="text-muted-foreground">
              Enhance your writing with AI-powered suggestions and analysis
            </p>
          </div>

          <div className="grid gap-8">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Your Content</CardTitle>
                <CardDescription>
                  Paste or type the text you want to improve
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content">Text to Analyze</Label>
                  <Textarea
                    id="content"
                    placeholder="Enter your text here..."
                    className="min-h-48"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleAnalyze}
                  disabled={!text.trim() || isLoading}
                  className="w-full md:w-auto"
                >
                  {isLoading ? 'Analyzing...' : 'Analyze Text'}
                </Button>
              </CardContent>
            </Card>

            {/* Suggestions Section */}
            {text && (
              <Card>
                <CardHeader>
                  <CardTitle>Suggestions</CardTitle>
                  <CardDescription>
                    AI-powered improvements for your content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Grammar</h3>
                    <p className="text-sm text-muted-foreground">No issues detected</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Tone</h3>
                    <p className="text-sm text-muted-foreground">Your tone is professional and clear</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Clarity</h3>
                    <p className="text-sm text-muted-foreground">Your writing is easy to understand</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
