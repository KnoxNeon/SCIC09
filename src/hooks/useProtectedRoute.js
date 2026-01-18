'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export function useProtectedRoute() {
  const { isLoggedIn, loading: authLoading } = useAuth()
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!authLoading) {
      if (!isLoggedIn) {
        // Redirect to login with current page as redirect parameter
        const currentPath = encodeURIComponent(pathname)
        router.push(`/login?redirect=${currentPath}`)
        return
      }
      setLoading(false)
    }
  }, [isLoggedIn, authLoading, router, pathname])

  return {
    isAuthenticated: isLoggedIn,
    loading: authLoading || loading
  }
}