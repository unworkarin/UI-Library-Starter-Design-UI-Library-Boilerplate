import React from 'react'
import { Button, Card } from '../../packages/ui/src'

export default function App(){
  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <h1 className="text-3xl mb-6">UI Library Starter — Demo</h1>
      <div className="space-y-4 max-w-md">
        <Card>
          <h2 className="text-xl font-semibold">Card title</h2>
          <p className="mt-2 text-sm text-slate-600">This is a simple card demo.</p>
          <div className="mt-4 flex gap-2">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
