'use client'

import { useEffect, useRef, useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface ElevenLabsWidgetProps {
  agentId: string
}

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': ElevenLabsConvAIElement
    }
  }
}

interface ElevenLabsConvAIElement
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  'agent-id'?: string
}

let scriptLoadedGlobally = false

export function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [agentError, setAgentError] = useState(false)

  useEffect(() => {
    // Load script with delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (scriptLoadedGlobally) {
        setIsLoading(false)
        setScriptLoaded(true)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
      script.async = true
      script.defer = true

      script.onload = () => {
        scriptLoadedGlobally = true
        setScriptLoaded(true)
        // Give widget time to initialize
        // setTimeout(() => {
          setIsLoading(false)
        // }, 800)
      }

      script.onerror = () => {
        setIsLoading(false)
        setAgentError(true)
      }

      document.body.appendChild(script)
    }, 100)

    // Monitor for widget load timeout (if widget doesn't load after 5 seconds, show error)
    // const timeoutId = setTimeout(() => {
    //   if (isLoading) {
    //     setIsLoading(false)
    //     setAgentError(true)
    //   }
    // }, 5000)

    // return () => {
    //   clearTimeout(timer)
    //   clearTimeout(timeoutId)
    // }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center gap-4"
    >
      <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      {isLoading && (
        <div className="flex flex-col items-center gap-4 py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
          <p className="text-sm text-muted-foreground">Loading Agent

            
          </p>
        </div>
      )}

      {agentError && (
        <Alert className="border-yellow-200 bg-yellow-50">
          <AlertTitle className="text-yellow-900 font-semibold">Agent Configuration Error</AlertTitle>
          <AlertDescription className="text-yellow-800 mt-2">
            <p className="mb-3">The ElevenLabs agent could not be loaded. This typically means:</p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-3">
              <li>The agent ID may not be valid or properly configured</li>
              <li>The agent hasn&apos;t been published on ElevenLabs yet</li>
              <li>The agent configuration is missing required settings</li>
            </ul>
            <p className="text-sm font-mono bg-yellow-100 px-2 py-1 rounded inline-block">
              Agent ID: {agentId}
            </p>
            <p className="text-sm mt-3">
              <strong>Solution:</strong> Please verify the agent is created and properly configured in your ElevenLabs dashboard.
            </p>
          </AlertDescription>
        </Alert>
      )}

      {scriptLoaded && !agentError && !isLoading && (
        <div className="w-full">
          {/* @ts-ignore - ElevenLabs provides this custom element */}
          <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
        </div>
      )}
    </div>
  )
}
