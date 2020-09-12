import React, { Component } from 'react'

interface TestComponentProps {
  greeting?: string
  subject?: string
}

export const TestComponent: React.FC<TestComponentProps> = ({
  greeting,
  subject
}) => {
  return (
    <div>
      {greeting}, {subject}!
    </div>
  )
}
