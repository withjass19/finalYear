'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function ButtonSubmit({ value, ...props}) {
    const { pending } = useFormStatus()

  return (
    <div>
      <button disabled={pending} {...props}>
        { pending ? 'loading...': value}
      </button>
    </div>
  )
}
