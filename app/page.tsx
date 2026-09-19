'use client'

import { useState } from 'react'
import { ArrowRight, Camera, Eye, EyeOff, LockKeyhole, Monitor, ShieldCheck, Sparkles, UserRound } from 'lucide-react'

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute -left-40 top-20 size-[34rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[40rem] w-[30rem] rounded-full bg-primary/8 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-7 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <Camera className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-foreground">TECHVAULT</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">CCTV & Computer Solutions</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Systems online
          </div>
        </header>

        <div className="grid flex-1 items-center gap-14 py-12 lg:grid-cols-[1fr_440px] lg:gap-24 lg:py-16">
          <section className="hidden lg:block">
            <div className="mb-9 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Secure access portal
            </div>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.06] tracking-[-0.04em] text-balance xl:text-6xl">
              Keep your world <span className="text-primary">connected.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              Manage your security systems, computer equipment, service requests, and more from one secure workspace.
            </p>
            <div className="mt-12 grid max-w-md grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm">
                <ShieldCheck className="mb-5 size-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium">Protected access</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Your systems, securely managed.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm">
                <Monitor className="mb-5 size-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium">One dashboard</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Everything in one clear view.</p>
              </div>
            </div>
          </section>

          <section className="w-full max-w-md justify-self-center lg:justify-self-end">
            <div className="rounded-3xl border border-border bg-card/90 p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9">
              <div className="mb-8">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <LockKeyhole className="size-5" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
                <p className="mt-2 text-sm text-muted-foreground">Sign in to your TechVault account.</p>
              </div>

              <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="email">
                  Email address
                  <span className="relative">
                    <UserRound className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required className="h-12 w-full rounded-xl border border-input bg-background/70 pl-10 pr-4 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </span>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="password">
                  Password
                  <span className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required className="h-12 w-full rounded-xl border border-input bg-background/70 pl-10 pr-11 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground">
                      {showPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
                    </button>
                  </span>
                </label>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
                    <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} className="size-4 accent-primary" />
                    Remember me
                  </label>
                  <a href="#forgot-password" className="font-medium text-primary transition hover:text-primary/80">Forgot password?</a>
                </div>

                <button type="submit" className="group mt-1 flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card">
                  Sign in to dashboard
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </form>

              <div className="my-7 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                or continue with
                <span className="h-px flex-1 bg-border" />
              </div>
              <button type="button" className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 text-sm font-medium transition hover:bg-secondary">
                <Sparkles className="size-4 text-primary" aria-hidden="true" />
                Business account SSO
              </button>
              <p className="mt-7 text-center text-xs text-muted-foreground">
                New to TechVault? <a href="#create-account" className="font-semibold text-primary hover:underline">Create an account</a>
              </p>
            </div>
            <p className="mt-5 text-center text-[11px] text-muted-foreground/70">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
          </section>
        </div>

        <footer className="flex items-center justify-between border-t border-border/60 pt-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
          <span>© 2024 TechVault</span>
          <span className="hidden sm:inline">Secure systems. Smarter living.</span>
        </footer>
      </div>
    </main>
  )
}
