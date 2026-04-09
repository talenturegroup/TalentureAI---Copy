'use client'

import { useState } from 'react'
import { DashboardHeader } from '@/components/dashboard-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ElevenLabsWidget } from '@/components/elevenlabs-widget'
import Link from 'next/link'

const toolDetails = [
  {
    id: 'CLIENT ACQUISITION ROLE PLAYS',
    header: 'CLIENT ACQUISITION ROLE PLAYS',
    summary: '(Business Development)',
    subheaders: ['Initial Outreach', 'Reactivating Dormant Clients', 'Market Intelligence'],
    details: [
      [
        "Cold call to a HR Director you've never spoken to before",
        'Cold call to a hiring manager who says they are busy',
        'Converting a LinkedIn connection into a meeting',
        'Getting past a gatekeeper or PA',
        'Introducing your firm to a new company entering Nigeria'
      ],
      [
        'Reactivating a dormant client account',
        'Calling a client who previously used another agency',
        'Re-engaging a client after a failed previous search',
        'Contacting a client who hasn’t hired in 18 months',
      ],
      [
        'Contacting a client who hasn’t hired in 18 months',
        'Calling a client to share competitor hiring intelligence',
        'Introducing a candidate-led opportunity',
      ],
    ],
  },
  {
    id: 'CLIENT MANAGEMENT ROLE PLAYS',
    header: 'CLIENT MANAGEMENT ROLE PLAYS',
    summary: '(Handling objections & building authority)',
    subheaders: ['Fee Objections', 'Retainer Conversations', 'Internal Recruitment Objections', 'Procurement Barriers', 'Budget Constraints', 'Hiring Manager Engagement'],
    details: [
      [
        'Client says your fees are too high',
        'Client demands a discount',
        'Client says another agency is cheaper',
        'Client asks for contingent terms instead of retainer',
      ],
      [
        'Client pushback on paying a retainer',
        'Client wants payment only after placement',
        'Client wants exclusivity but no retainer',
        'Explaining why retained search works better',
      ],
      [
        'Client says “We recruit internally.”',
        'Client says “We have an internal talent team.”',
        'Client says “We only use agencies when desperate.”',
      ],
      [
        'Client says “You must go through procurement.”',
        'Client says “You are not on our PSL.”',
        'Client says “We only work with approved vendors.”',
      ],
      [
        'Client says “We don’t have a budget for agencies.”',
        'Client says “Hiring is frozen.”',
        'Client says “We will revisit next quarter.”',
      ],
      [
        'Convincing HR to introduce you to the hiring manager',
        'Direct conversation with a technical hiring manager',
        'Hiring manager who does not trust recruiters',
      ],
    ],
  },
  {
    id: 'CANDIDATE ROLE PLAY SCENARIOS',
    header: 'CANDIDATE ROLE PLAY SCENARIOS',
    summary: 'Candidate role play scenarios',
    subheaders: ['Candidate Engagement', 'Candidate Qualification', 'Offer Stage', 'Counteroffer Situations', 'Candidate Concerns', 'Candidate Influence'],
    details: [
      [
        'Candidate not active in the job market',
        'Candidate says they are happy where they are',
        'Candidate says they don&#39;t trust recruiters',
        'Candidate asks why the client cannot contact them directly',
      ],
      [
        'Deeply assessing candidate motivation',
        'Understanding candidate career drivers',
        'Testing candidate salary expectations',],
      [
        'Extending an offer to the candidate',
        'Offer below candidate expectations',
        'Negotiating compensation with candidate',
        'Candidate delaying decision',
      ],
      [
        'Candidate receives a counteroffer',
        'Candidate considering staying with current employer',
        'Candidate asking recruiter for advice',
      ],
      [
        'Candidate worried about job security',
        'Candidate concerned about company reputation',
        'Candidate worried about relocation',
      ],
      [
        'Persuading candidate to attend first interview',
        'Persuading candidate to accept final offer',
        'Securing candidate commitment before offer',
      ],
    ],
  },
  {
    id: 'DEAL CONTROL ROLE PLAYS',
    header: 'DEAL CONTROL ROLE PLAYS',
    summary: '(Where many recruiters fail)',
    subheaders: ['Interview Management', 'Closing Techniques', 'Offer Negotiation', 'Risk Management'],
    details: [
      [
        'Candidate performs poorly in interview',
        'Client gives negative feedback',
        'Client delays feedback',
      ],
      [
        'Pre-closing a candidate before offer stage',
        'Pre-closing the client before offer stage',
        'Aligning both parties before offer'
      ],
      [
        'Client wants to lower the offer',
        'Candidate asks for salary increase',
        'Negotiating bonus, benefits, relocation',
      ],
      [
        'Candidate ghosting before final interview',
        'Candidate delaying resignation',
        'Candidate hesitating after offer',
      ],
    ],
  },
  {
    id: 'ADVANCED EXECUTIVE SEARCH ROLE PLAYS',
    header: 'ADVANCED EXECUTIVE SEARCH ROLE PLAYS',
    summary: '(Important for Oscar Temple senior consultants)',
    subheaders: [],
    details: [
      [
        'Convincing a CEO to meet a passive candidate',
        'Discussing confidential search mandates',
        'Candidate worried about confidentiality',
        'Handling a board-level candidate',
        'Managing a CEO-level negotiation',
        'Explaining long-list and short-list methodology',
        'Delivering candidate rejection feedback professionally',
      ],
      
    ],
  },
  {
    id: 'Additional High-Value Role Plays (Most Important)',
    header: 'Additional High-Value Role Plays (Most Important)',
    summary: 'These train top performing recruiters.',
    subheaders: [],
    details: [
      [
        'Candidate demands full job description before speaking',
        'Client asks recruiter to work the role for free',
        'Client asks recruiter to reduce fees after placement',
        'Candidate asks recruiter to increase offer after acceptance',
        'Candidate suddenly withdraws from process',
        'Client delays signing terms',
        'Client pushes recruiter to share candidate CVs before agreement',
        'Candidate wants confidentiality due to industry visibility',
        'Negotiating multiple offers for a candidate'
      ],
    ],
  },
]

export default function VoiceAIPage() {
  const [activeToolId, setActiveToolId] = useState<string | null>(null)
  const activeTool = toolDetails.find((tool) => tool.id === activeToolId)

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
            &larr; Back to Dashboard
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Role Play Agent</h1>
            <p className="text-muted-foreground">
              Have intelligent conversations with AI powered by ElevenLabs
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Widget Area */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Conversational AI Widget</CardTitle>
                  <CardDescription>
                    Click the microphone icon to start a conversation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-muted rounded-lg p-8">
                    <ElevenLabsWidget agentId="agent_5801kgf2zc8neq8aez5ayrhy4q8a" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Prompt Library</CardTitle>
                </CardHeader>

                <div className="relative min-h-96 overflow-hidden bg-card">
                  <div
                    className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                      activeTool ? '-translate-x-full' : 'translate-x-0'
                    }`}
                  >
                    <CardContent className="space-y-4 h-full overflow-y-auto px-6 pb-6">
                      {toolDetails.map((tool) => (
                        <CardContent
                          key={tool.id}
                          onClick={() => setActiveToolId(tool.id)}
                          className="cursor-pointer rounded-2xl border border-border bg-background p-4 transition hover:border-primary/70 hover:bg-primary/5"
                        >
                          <h4 className="font-semibold text-sm mb-1">{tool.header}</h4>
                          <p className="text-xs text-muted-foreground">{tool.summary}</p>
                        </CardContent>
                      ))}
                    </CardContent>
                  </div>

                  <div
                    className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                      activeTool ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  >
                    <CardContent className="h-full overflow-y-auto px-6 pb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg">{activeTool?.header ?? 'Detail View'}</CardTitle>
                          <p className="text-xs text-muted-foreground">
                            Learn more about the selected feature.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveToolId(null)}
                          className="text-sm font-medium text-primary hover:text-primary/80"
                        >
                          Back
                        </button>
                      </div>

                      <div className="mt-6">
                        {activeTool ? (
                          activeTool.subheaders.length > 0 ? (
                            <Accordion type="single" collapsible className="space-y-2">
                              {activeTool.subheaders.map((subheader, index) => (
                                <AccordionItem
                                  key={subheader}
                                  value={`section-${index}`}
                                  className="overflow-hidden rounded-2xl border border-border bg-background"
                                >
                                  <AccordionTrigger className="px-4 text-sm font-semibold">
                                    {subheader}
                                  </AccordionTrigger>
                                  <AccordionContent className="px-4">
                                    <div className="space-y-2 text-xs text-muted-foreground py-2">
                                      {activeTool.details[index].map((detail, detailIndex) => (
                                        <div key={`${subheader}-${detailIndex}`}>
                                          <span className="font-semibold text-muted-foreground">{detailIndex + 1}.</span>{' '}
                                          <span>{detail}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          ) : (
                            <div className="space-y-2 text-xs text-muted-foreground">
                              {activeTool.details[0].map((detail, detailIndex) => (
                                <div key={`detail-${detailIndex}`}>
                                  <span className="font-semibold text-muted-foreground">{detailIndex + 1}.</span>{' '}
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          )
                        ) : (
                          <div className="rounded-2xl border border-dashed border-border bg-background/50 p-6 text-xs text-muted-foreground">
                            Select a card from the front side to view more details here.
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>

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
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
