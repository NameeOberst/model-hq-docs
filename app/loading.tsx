"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Preparing your documentation...")

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: "Loading structure..." },
      { progress: 40, text: "Fetching configs..." },
      { progress: 60, text: "Preparing UI..." },
      { progress: 80, text: "Finalizing..." },
      { progress: 100, text: "Ready!" },
    ]

    let current = 0
    const interval = setInterval(() => {
      if (current < loadingSteps.length) {
        setProgress(loadingSteps[current].progress)
        setLoadingText(loadingSteps[current].text)
        current++
      } else {
        clearInterval(interval)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col items-center space-y-6 p-8 max-w-md w-full">
        {/* Spinner */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin" />
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-3xl font-bold text-gray-900">Loading Model HQ</h1>
        <p className="text-sm text-gray-600">Please wait while we prepare your documentation...</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 my-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage and Loading Text */}
        <div className="text-sm font-medium text-gray-700">{progress}%</div>
        <p className="text-base font-medium text-gray-800">{loadingText}</p>

        {/* Loading Dots */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
