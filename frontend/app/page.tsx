'use client'

import { useState } from 'react'

const mockFeaturedVideos = [
  {
    id: '1',
    title: 'Introduction to Singapore Tax System',
    description: 'Overview of key tax principles and the Singapore tax framework.',
    duration: '32 min',
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'GST Fundamentals for Businesses',
    description: 'Understand the basics of GST registration, filing, and compliance.',
    duration: '45 min',
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'Corporate Tax Planning Essentials',
    description: 'Key strategies and considerations for corporate tax planning.',
    duration: '50 min',
    level: 'Advanced',
  },
]

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.error || 'Unable to log in. Please check your credentials.')
        return
      }

      // Store token for later API calls (simple approach)
      if (data?.token) {
        window.localStorage.setItem('taxacademy_token', data.token)
      }

      setSuccess(`Welcome back, ${data?.user?.email || 'learner'}!`)
    } catch (err) {
      console.error('Login failed', err)
      setError('Something went wrong while signing you in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl shadow-slate-900/70 backdrop-blur-sm p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Secure access • Professional tax education
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Tax Academy Singapore
            </h1>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              Sign in to access your learning dashboard and continue watching featured tax courses curated by experts.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          {/* Login panel */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-inner shadow-black/40">
            <h2 className="text-lg font-medium text-slate-50">Log in</h2>
            <p className="mt-1 text-xs text-slate-400">
              Enter your credentials to access your courses and webinars.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="password" className="font-medium text-slate-300">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-[11px] font-medium text-sky-400 hover:text-sky-300"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-3 py-2 text-sm font-medium text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                disabled={loading}
              >
                {loading ? 'Signing you in…' : 'Log in'}
              </button>

              {error && (
                <p className="text-[11px] text-red-400">
                  {error}
                </p>
              )}

              {success && !error && (
                <p className="text-[11px] text-emerald-400">
                  {success}
                </p>
              )}

              <p className="pt-2 text-center text-[11px] text-slate-500">
                Don&apos;t have an account?{' '}
                <span className="cursor-pointer font-medium text-sky-400 hover:text-sky-300">
                  Contact Tax Academy to enrol
                </span>
              </p>
            </form>

            <div className="mt-6 border-t border-slate-800 pt-4">
              <p className="text-[11px] text-slate-500">
                By continuing, you agree to the platform&apos;s terms of use and privacy policy.
              </p>
            </div>
          </section>

          {/* Featured videos panel */}
          <section className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-900/30 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-medium text-slate-50">Featured videos</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Curated modules to help you get started with Singapore tax topics.
                </p>
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300">
                Preview only
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {mockFeaturedVideos.map((video) => (
                <article
                  key={video.id}
                  className="group flex cursor-pointer items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 transition hover:border-sky-500/60 hover:bg-slate-900"
                >
                  <div className="mt-1 h-16 w-24 flex-shrink-0 rounded-md bg-gradient-to-br from-sky-500/40 via-sky-400/10 to-emerald-400/40 ring-1 ring-sky-500/40 group-hover:ring-sky-400/70" />
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-medium text-slate-50 group-hover:text-sky-200">
                        {video.title}
                      </h3>
                      <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                        {video.duration}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-xs text-slate-400">{video.description}</p>
                    <p className="text-[11px] font-medium text-slate-400">
                      Level:{' '}
                      <span className="text-slate-200">
                        {video.level}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
              <p>Sign in to unlock full access, track progress, and join live webinars.</p>
              <button
                type="button"
                className="hidden rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 transition hover:bg-sky-500/20 md:inline-flex"
              >
                View all courses
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
