'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Agent Aik</div>
          <a href="#demo" className="btn-primary text-sm">
            Schedule Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50" />
          {/* Decorative circles */}
          <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Your AI Employee.{' '}
                <span className="text-gradient-primary">Fully Managed.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AI agents handling your business operations. We handle the complexity.
                No engineering team needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#demo" className="btn-primary text-center">
                  Schedule 15-Min Demo
                </a>
                <a href="#how" className="btn-secondary text-center">
                  See How It Works
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 shadow-2xl border border-gray-700">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 ml-2">Telegram Chat</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3 items-end">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm max-w-xs">
                      Process payroll for Q1
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end items-start">
                    <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-2xl text-sm max-w-xs text-right">
                      Processed! 47 employees updated. Awaiting your approval for payout.
                      <div className="mt-2 flex gap-2">
                        <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs font-semibold">
                          Approve
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs font-semibold">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-end">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm">
                      Approve
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end items-start">
                    <div className="bg-green-600/20 text-green-200 border border-green-500/30 px-4 py-2 rounded-2xl text-sm max-w-xs text-right">
                      ✓ Payroll processed. Funds transferred. Details in audit log.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Problem You're Facing
            </h2>
            <p className="text-xl text-gray-600">
              Good help is hard to find. And expensive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⏱️',
                title: 'Hiring is Slow',
                desc: 'Finding, vetting, and onboarding takes 2-3 months. Your work piles up.',
              },
              {
                icon: '💰',
                title: 'It\'s Expensive',
                desc: 'Salaries, taxes, benefits. A skilled VA costs $2-5k/month.',
              },
              {
                icon: '⚠️',
                title: 'Quality is Unpredictable',
                desc: 'Turnover, training, mistakes, inconsistency. You carry the risk.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
            <p className="text-lg text-gray-800">
              <span className="font-bold">The result:</span> Monotonous tasks pile up.
              You waste time on email, scheduling, data entry. Your team is stretched.
              Your margins suffer.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 sm:py-24">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Your AI Employee is Here
            </h2>
            <p className="text-xl text-gray-600">
              Meet Agent Aik. Smarter. Faster. Always available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  {
                    title: 'Live in Your Messaging App',
                    desc: 'Works in Telegram, Slack, or WhatsApp. No new app to learn.',
                  },
                  {
                    title: 'Integrated with Your Tools',
                    desc: 'Google Sheets, Airtable, email, Zapier, APIs. We connect to what you use.',
                  },
                  {
                    title: 'Trained on Your Business',
                    desc: 'We learn your workflows, rules, and values. Acts like you (but 24/7).',
                  },
                  {
                    title: 'Built-In Safety',
                    desc: 'Approval gates, audit trails, spending limits. You stay in control.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white font-bold">
                        ✓
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-xl border border-blue-200">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-sm font-semibold text-blue-900 mb-2">
                    What Agent Aik Can Handle
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Email triage & responses</li>
                    <li>✓ Data entry & spreadsheet updates</li>
                    <li>✓ Lead scoring & follow-ups</li>
                    <li>✓ Invoice processing</li>
                    <li>✓ Schedule coordination</li>
                    <li>✓ Report generation</li>
                    <li>✓ Customer support (tier 1)</li>
                    <li>✓ Inventory & order management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 sm:py-24 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Setup in 3 weeks. Working in 4.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'We Set It Up',
                desc: 'Tell us about your business, workflows, and pain points. We connect your tools (email, sheets, Airtable, APIs).',
                icon: '🔧',
              },
              {
                step: '02',
                title: 'We Train the Agent',
                desc: 'We define business rules, approval workflows, and decision logic. Test with your team.',
                icon: '🧠',
              },
              {
                step: '03',
                title: 'Deploy to Your Inbox',
                desc: 'Agent goes live in Telegram/Slack/WhatsApp. You approve actions, monitor performance.',
                icon: '🚀',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-8 rounded-xl border border-gray-200 h-full">
                  <div className="text-5xl mb-4 font-bold text-blue-600">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-bold text-lg mb-3">What You Get</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-800">
              <ul className="space-y-2">
                <li>✓ Weekly progress calls</li>
                <li>✓ Custom integration work</li>
              </ul>
              <ul className="space-y-2">
                <li>✓ Full documentation</li>
                <li>✓ 24/7 monitoring & support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">
              No surprises. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                setup: '$2,000',
                monthly: '$500/mo',
                desc: 'Perfect for solopreneurs and small teams',
                features: [
                  '1 AI agent',
                  'Basic tool integrations',
                  'Email triage & scheduling',
                  'Approval gates',
                  'Email support',
                ],
                highlight: false,
              },
              {
                name: 'Professional',
                setup: '$3,500',
                monthly: '$1,000/mo',
                desc: 'For growing teams and agencies',
                features: [
                  '2 AI agents',
                  'Advanced integrations',
                  'Custom API connections',
                  'Advanced approval workflows',
                  'Priority support',
                ],
                highlight: true,
              },
              {
                name: 'Enterprise',
                setup: 'Custom',
                monthly: 'Custom',
                desc: 'Unlimited agents and custom builds',
                features: [
                  'Unlimited agents',
                  'Full API access',
                  'Dedicated support',
                  'Custom integrations',
                  'Training & onboarding',
                ],
                highlight: false,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl border transition-all ${
                  plan.highlight
                    ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-white shadow-xl scale-105'
                    : 'border-gray-200 bg-white hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-2">
                      {plan.setup}{' '}
                      <span className="text-lg text-gray-500 font-normal">setup</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {plan.monthly}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#demo"
                    className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                      plan.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <p className="text-gray-800">
              <span className="font-bold">Limited-time offer:</span> Sign up in Feb/Mar
              and lock in your rate for 12 months. No price increases.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built for Trust</h2>
            <p className="text-xl text-gray-600">
              Safety and compliance are built in, not bolted on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                '✓ Lives in your messaging app (Telegram, Slack, WhatsApp)',
                '✓ Approval gates for every important decision',
                '✓ Complete audit trail (compliance-ready)',
                '✓ Spending limits (no surprise bills)',
                '✓ We monitor 24/7',
                '✓ Data stays on your infrastructure',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-blue-600 text-2xl flex-shrink-0">✓</div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Why This Matters</h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">Safety First</p>
                  <p>
                    AI agents can make mistakes. Approval gates mean you review
                    important actions before they execute.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">Compliance Ready</p>
                  <p>
                    Every action is logged. Who did what, when, and why. Perfect for
                    audits, SOC 2, and GDPR.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">No Surprises</p>
                  <p>
                    Spending limits prevent runaway costs. You control how much the
                    agent can spend per day/week/month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="container-section max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is my data safe?',
                a: 'Absolutely. All data stays on your infrastructure. We don\'t train on your data or share it with third parties. Approval gates and audit trails mean every action is transparent and reversible.',
              },
              {
                q: 'What if the agent makes a mistake?',
                a: 'That\'s what approval gates are for. Important actions wait for your approval. If something does slip through, we can reverse it within minutes. You\'re always in control.',
              },
              {
                q: 'Can you integrate with [my tool]?',
                a: 'Probably. We support Google Sheets, Airtable, HubSpot, Slack, Telegram, WhatsApp, email, and 100+ APIs via Zapier. If your tool has an API, we can build the integration.',
              },
              {
                q: 'What happens if you go out of business?',
                a: 'Your agent keeps running. All logic is documented and yours. We\'ll provide full handoff docs and support to transition to another vendor.',
              },
              {
                q: 'How long does setup take?',
                a: 'About 3 weeks. Week 1: Requirements gathering & tool setup. Week 2: Agent training & testing. Week 3: Polish and go-live.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No lock-in contracts. If it\'s not working out, we\'ll provide documentation and support the transition.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 text-left">{item.q}</h3>
                  <span
                    className={`text-blue-600 text-xl font-bold transition-transform ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-section text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Your AI Employee?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a 15-minute demo. See Agent Aik in action. Ask all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/agent-aik/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Schedule Demo (Free)
            </a>
            <a
              href="mailto:hello@agentaik.com"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-section">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Agent Aik</h3>
              <p className="text-sm">
                AI employees, fully managed. No engineering required.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://openclaw.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    OpenClaw Platform
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:hello@agentaik.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@agentaik.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>© 2024 Agent Aik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
