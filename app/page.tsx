'use client';

import Link from 'next/link';
import { submitWaitlist, submitFeatureRequest, submitBugReport } from '@/lib/submissions';
import { useFormDialog } from '@/hooks/useFormDialog';
import { ArrowRight, Target, Users, Clock, TrendingUp, BarChart3, CheckCircle2, Sparkles, Activity, AlertTriangle, Trophy, TrendingDown, Eye, Brain, Flame, Star, Award, BookOpen, Heart, Coffee, Lightbulb, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Footer } from '@/components/Footer';

export default function Home() {
  const waitlist = useFormDialog({
    initialValues: { email: '' },
    onSubmit: v => submitWaitlist(v.email),
  });

  const feature = useFormDialog({
    initialValues: { title: '', description: '', email: '' },
    onSubmit: v => submitFeatureRequest({
      title: v.title,
      description: v.description,
      email: v.email,
    }),
  });

  const bug = useFormDialog({
    initialValues: { title: '', description: '', email: '', includeDeviceInfo: true as boolean },
    onSubmit: v => submitBugReport({
      title: v.title,
      description: v.description,
      email: v.email,
      deviceInfo: v.includeDeviceInfo ? {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        timestamp: new Date().toISOString(),
      } : null,
    }),
  });

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[128px] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Coming Soon</span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              Master Your Productivity
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed">
              The intelligent task management system that helps teams and individuals achieve their goals with precision and clarity.
            </p>

            {/* Waitlist Button */}
            <div className="max-w-md mx-auto mb-4">
              <Button
                size="lg"
                onClick={() => waitlist.setOpen(true)}
                className="w-full sm:w-auto px-8"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Productivity Section */}
      <section className="py-24 border-t bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Brain className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Personal Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Unlock your peak performance
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Personalized insights, habit tracking, and goal management designed to help you achieve more while maintaining balance
            </p>
          </div>

          {/* Individual Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Personal Analytics & Insights */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-blue-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <BarChart3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Personal Analytics</h3>
                  <p className="text-muted-foreground">
                    Deep insights into your productivity patterns and work habits
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                  <div className="text-xs text-foreground/60 font-semibold mb-3">YOUR PRODUCTIVITY THIS WEEK</div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div>
                      <div className="text-xl font-bold">32</div>
                      <div className="text-xs text-foreground/60">Tasks done</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">18.5h</div>
                      <div className="text-xs text-foreground/60">Focus time</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">+28%</div>
                      <div className="text-xs text-foreground/60">vs last week</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                    <TrendingUp className="h-3 w-3" />
                    <span>Your most productive days: Tue, Wed, Thu</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-foreground/65">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Identifies your peak productivity hours
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Tracks energy levels and focus patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Suggests optimal task scheduling based on history
                  </li>
                </ul>
              </div>
            </div>

            {/* Goal Tracking & Achievements */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-yellow-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/20 flex items-center justify-center shrink-0">
                  <Target className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Goals & Achievements</h3>
                  <p className="text-muted-foreground">
                    Set meaningful goals and celebrate your progress with gamification
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted-foreground">WEEKLY GOAL</span>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">85% Complete</span>
                  </div>
                  <div className="mb-2">
                    <div className="h-2 rounded-full bg-accent overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" />
                    </div>
                  </div>
                  <div className="text-sm font-medium mb-1">Complete 40 tasks this week</div>
                  <div className="text-xs text-foreground/60">34 of 40 tasks · 6 more to go!</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/20">
                    <Award className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-xs font-semibold">1,247 points</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20">
                    <Flame className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-semibold">7 day streak</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                    <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-semibold">Level 12</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    Daily, weekly, and custom goal tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    Earn points, maintain streaks, and level up
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    Unlock achievements for productivity milestones
                  </li>
                </ul>
              </div>
            </div>

            {/* Focus Time & Pomodoro */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-red-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-red-500/10 to-pink-500/5 border border-red-500/20 flex items-center justify-center shrink-0">
                  <Clock className="h-7 w-7 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Focus Timer</h3>
                  <p className="text-muted-foreground">
                    Built-in Pomodoro timer with automatic breaks and deep work tracking
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                  <div className="flex items-center justify-center mb-3">
                    <div className="relative">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-accent"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray="276.46"
                          strokeDashoffset="69"
                          className="text-red-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">18:30</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-xs text-muted-foreground mb-2">Session 3 of 4 · 25 min focus</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="px-2 py-1 rounded bg-red-500/20 text-xs font-medium text-red-600 dark:text-red-400">
                      Deep Work Mode
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Customizable focus and break durations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Automatic task time tracking per session
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Smart break reminders to prevent burnout
                  </li>
                </ul>
              </div>
            </div>

            {/* Habit & Routine Tracking */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-green-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 flex items-center justify-center shrink-0">
                  <BookOpen className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Habits & Routines</h3>
                  <p className="text-muted-foreground">
                    Build consistent habits and track daily routines for long-term success
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Morning review</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="h-3.5 w-3.5 text-orange-500" />
                        <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">21 days</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full ${
                            i < 6 ? 'bg-green-500' : 'bg-accent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Exercise</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="h-3.5 w-3.5 text-orange-500" />
                        <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">14 days</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full ${
                            i < 5 ? 'bg-blue-500' : 'bg-accent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                        <span className="text-sm font-medium text-muted-foreground">Read for 30 min</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Today</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full ${
                            i < 3 ? 'bg-purple-500' : 'bg-accent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Daily habit tracking with streak counting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Morning and evening routine templates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Flexible scheduling with smart reminders
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/pricing">
              <Button size="lg" variant="outline">
                Explore Personal Plans
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Collaboration & Analytics Section */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <Users className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Team Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Keep your team healthy and productive
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              AI-powered insights detect burnout early, celebrate wins, and provide real-time visibility across your entire team
            </p>
          </div>

          {/* Team Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Burnout Detection */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-orange-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-7 w-7 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Burnout Detection</h3>
                  <p className="text-muted-foreground">
                    Automatically identify team members at risk with ML-powered analysis
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Sarah Chen</span>
                    <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold">At Risk</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">Working 12+ hours/day for 8 days straight</div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                      <TrendingDown className="h-3 w-3" />
                      <span>Pace: -35%</span>
                    </div>
                    <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                    <span className="text-muted-foreground">Last break: 3 days ago</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Tracks overtime patterns and consecutive work days
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Monitors task completion velocity decline
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Sends early intervention alerts to managers
                  </li>
                </ul>
              </div>
            </div>

            {/* Exceptional Productivity */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-green-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 flex items-center justify-center shrink-0">
                  <Trophy className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Performance Tracking</h3>
                  <p className="text-muted-foreground">
                    Celebrate achievements and identify top performers automatically
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Alex Rodriguez</span>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold">Exceptional</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">Completed 47 tasks this week</div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <TrendingUp className="h-3 w-3" />
                      <span>+142% vs avg</span>
                    </div>
                    <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                    <span className="text-muted-foreground">Quality score: 98%</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Identifies consistent high performers automatically
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Generates recognition prompts for managers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Tracks both volume and quality metrics
                  </li>
                </ul>
              </div>
            </div>

            {/* Live Status Tracking */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-blue-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Eye className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Live Team Status</h3>
                  <p className="text-muted-foreground">
                    See what everyone's working on in real-time with privacy controls
                  </p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 border border-border">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Mike Johnson</div>
                    <div className="text-xs text-muted-foreground">Working on API integration · 1h 23m</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 border border-border">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Emma Davis</div>
                    <div className="text-xs text-muted-foreground">In meeting · Back in 15m</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 border border-border">
                  <div className="h-2 w-2 rounded-full bg-gray-400" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">James Wilson</div>
                    <div className="text-xs text-muted-foreground">Away · Last active 3h ago</div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Real-time status updates across the team
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Current task visibility with time tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Privacy settings for individual preferences
                </li>
              </ul>
            </div>

            {/* Team Analytics Dashboard */}
            <div className="group p-8 rounded-2xl bg-background border-2 border-border hover:border-purple-500/30 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Activity className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Team Analytics</h3>
                  <p className="text-muted-foreground">
                    Comprehensive insights into team performance and collaboration patterns
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                  <div className="text-2xl font-bold mb-1">247</div>
                  <div className="text-xs text-muted-foreground">Tasks completed this week</div>
                </div>
                <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div className="text-2xl font-bold mb-1">94%</div>
                  <div className="text-xs text-muted-foreground">On-time completion rate</div>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold mb-1">6.2h</div>
                  <div className="text-xs text-muted-foreground">Avg. active time per day</div>
                </div>
                <div className="p-3 rounded-lg bg-orange-500/5 border border-orange-500/10">
                  <div className="text-2xl font-bold mb-1">12</div>
                  <div className="text-xs text-muted-foreground">Active projects</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  Velocity trends and capacity planning
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  Project health scores and risk detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  Collaboration network visualization
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/pricing">
              <Button size="lg" variant="outline">
                Explore Team Plans
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to transform your productivity?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be among the first to experience Stride when we launch.
          </p>
          <Button
            size="lg"
            onClick={() => waitlist.setOpen(true)}
            className="px-8"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Support Section */}
      <section id="support-section" className="py-24 border-t bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
              <Heart className="h-3.5 w-3.5 text-pink-600 dark:text-pink-400" />
              <span className="text-xs font-medium text-pink-600 dark:text-pink-400">Support Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Help build the future of productivity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your support helps us build features faster and maintain Stride as a high-quality productivity platform.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Support Stride - centered single card */}
            <a
              href="https://buymeacoffee.com/stridetime"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border-2 border-border hover:border-yellow-500/50 bg-background hover:shadow-xl transition-all max-w-md w-full"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/20 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Support Development</h3>
                  <p className="text-muted-foreground">
                    Support development with a one-time contribution or become a monthly supporter
                  </p>
                </div>
                <div className="mt-2">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-medium group-hover:gap-3 transition-all shadow-lg">
                    <Heart className="h-5 w-5" />
                    <span>Support Stride</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Every contribution helps us build better tools for everyone. Thank you! 💙
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-24 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Help us improve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your feedback shapes the future of Stride. Share your ideas or report issues to help us build a better product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Feature Request */}
            <div className="group p-8 rounded-xl border-2 border-border hover:border-blue-500/50 bg-background hover:shadow-lg transition-all h-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 flex items-center justify-center">
                  <Lightbulb className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Request a Feature</h3>
                  <p className="text-muted-foreground mb-4">
                    Have an idea that would make Stride better? We'd love to hear it. Share your feature requests and help us prioritize what matters most.
                  </p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => feature.setOpen(true)}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                  >
                    <span>Submit Feature Request</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Report a Problem */}
            <div className="group p-8 rounded-xl border-2 border-border hover:border-red-500/50 bg-background hover:shadow-lg transition-all h-full">
              <div className="flex flex-col gap-4 h-full">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20 flex items-center justify-center">
                  <Bug className="h-7 w-7 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Report a Problem</h3>
                  <p className="text-muted-foreground mb-4">
                    Found a bug or issue? Let us know so we can fix it. Your reports help us maintain quality and improve stability.
                  </p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => bug.setOpen(true)}
                    className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:gap-3 transition-all"
                  >
                    <span>Report an Issue</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              You can also reach us via email at{' '}
              <a href="mailto:support@stridetime.app" className="text-primary hover:underline">
                support@stridetime.app
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Request Dialog */}
      <Dialog open={feature.open} onOpenChange={feature.setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request a Feature</DialogTitle>
            <DialogDescription>
              Tell us about a feature you'd like to see in Stride. We'll review all requests and keep you updated.
            </DialogDescription>
          </DialogHeader>

          {!feature.submitted ? (
            <form onSubmit={feature.handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="feature-title" className="text-sm font-medium">
                  Feature Title
                </label>
                <Input
                  id="feature-title"
                  type="text"
                  placeholder="e.g., Add dark mode support"
                  value={feature.values.title}
                  onChange={e => feature.setField('title', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="feature-description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="feature-description"
                  placeholder="Describe the feature and how it would help you..."
                  value={feature.values.description}
                  onChange={e => feature.setField('description', e.target.value)}
                  required
                  className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="feature-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="feature-email"
                  type="email"
                  placeholder="Enter your email"
                  value={feature.values.email}
                  onChange={e => feature.setField('email', e.target.value)}
                  required
                />
              </div>
              {feature.error && (
                <p className="text-sm text-red-500 text-center">{feature.error}</p>
              )}
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our data being used to improve Stride. View our{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 px-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-600 dark:text-green-400">
                Thanks! We'll review your request.
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Bug Report Dialog */}
      <Dialog open={bug.open} onOpenChange={bug.setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report a Problem</DialogTitle>
            <DialogDescription>
              Help us fix bugs by describing the issue you encountered. We'll investigate and get back to you.
            </DialogDescription>
          </DialogHeader>

          {!bug.submitted ? (
            <form onSubmit={bug.handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="bug-title" className="text-sm font-medium">
                  Issue Title
                </label>
                <Input
                  id="bug-title"
                  type="text"
                  placeholder="e.g., App crashes when creating a task"
                  value={bug.values.title}
                  onChange={e => bug.setField('title', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="bug-description" className="text-sm font-medium">
                  What happened?
                </label>
                <textarea
                  id="bug-description"
                  placeholder="Describe what you were doing when the problem occurred..."
                  value={bug.values.description}
                  onChange={e => bug.setField('description', e.target.value)}
                  required
                  className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="bug-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="bug-email"
                  type="email"
                  placeholder="Enter your email"
                  value={bug.values.email}
                  onChange={e => bug.setField('email', e.target.value)}
                  required
                />
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/30">
                <input
                  type="checkbox"
                  id="include-device-info"
                  checked={bug.values.includeDeviceInfo}
                  onChange={e => bug.setField('includeDeviceInfo', e.target.checked)}
                  className="mt-0.5"
                />
                <label htmlFor="include-device-info" className="text-xs text-muted-foreground cursor-pointer">
                  Include device information (browser, OS, screen size) to help us reproduce the issue. This data is only used for debugging.
                </label>
              </div>
              {bug.error && (
                <p className="text-sm text-red-500 text-center">{bug.error}</p>
              )}
              <Button type="submit" className="w-full">
                Submit Report
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our data being used to improve Stride. View our{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 px-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-600 dark:text-green-400">
                Thanks! We'll investigate this issue.
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Waitlist Dialog */}
      <Dialog open={waitlist.open} onOpenChange={waitlist.setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when Stride launches. We'll send you an email with early access.
            </DialogDescription>
          </DialogHeader>

          {!waitlist.submitted ? (
            <form onSubmit={waitlist.handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="waitlist-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="name@example.com"
                  value={waitlist.values.email}
                  onChange={e => waitlist.setField('email', e.target.value)}
                  required
                />
              </div>
              {waitlist.error && (
                <p className="text-sm text-red-500 text-center">{waitlist.error}</p>
              )}
              <Button type="submit" className="w-full">
                Join Waitlist
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. No spam, ever. View our{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 px-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-600 dark:text-green-400">
                Thanks! You're on the list.
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}