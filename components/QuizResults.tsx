'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RotateCcw, Mail, CheckCircle2 } from 'lucide-react';
import FirmCard from './FirmCard';
import UrgencyBanner from './UrgencyBanner';
import { type Firm } from '@/lib/firms';
import { trackEmailCapture } from '@/lib/analytics';

const caseTypeLabels: Record<string, string> = {
  'car-accident': 'Car Accident',
  'slip-and-fall': 'Slip & Fall',
  'workers-comp': 'Workers Compensation',
  'medical-malpractice': 'Medical Malpractice',
  'general': 'Personal Injury',
};

const caseTypeDescriptions: Record<string, string> = {
  'car-accident':
    "Based on your answers, you likely need a car accident / auto injury attorney. These lawyers specialise in Pennsylvania vehicle accident claims, insurance negotiations, and recovering damages for injuries caused by other drivers.",
  'slip-and-fall':
    "Based on your answers, you likely need a premises liability attorney who handles slip and fall cases. These lawyers deal with negligent property owners, wet floors, uneven surfaces, and injuries caused by dangerous conditions.",
  'workers-comp':
    "Based on your answers, you likely need a workers' compensation attorney. These lawyers help injured workers navigate Pennsylvania's workers' comp system, fight denied claims, and maximise your benefits.",
  'medical-malpractice':
    "Based on your answers, you likely need a medical malpractice attorney. These are specialised litigators who handle cases involving negligent doctors, hospitals, surgical errors, and failure to diagnose.",
  'general':
    "Based on your answers, a general personal injury attorney can help assess your situation and point you toward the right specialist if needed.",
};

const lawyerStatusMessages: Record<string, string> = {
  'second-opinion':
    "Since you're seeking a second opinion, look for firms that offer free consultations with no obligation — most do. Bring any documents from your current representation.",
  'represented':
    "Since you already have representation, you may want to review our guide on how to evaluate your current attorney rather than seek a new firm.",
};

type QuizResultsProps = {
  caseType: string;
  timeframe: string;
  lawyerStatus: string;
  priority: string;
  firms: Firm[];
};

export default function QuizResults({
  caseType,
  timeframe,
  lawyerStatus,
  priority,
  firms,
}: QuizResultsProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isUrgent = timeframe === '6-24' || timeframe === '24+';
  const isAlreadyRepresented = lawyerStatus === 'represented';

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    trackEmailCapture('quiz-results');
    setSubmitted(true);
    // In production: POST to email API
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Urgency banner */}
      {isUrgent && <UrgencyBanner monthsAgo={timeframe} />}

      {/* Case type identified */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-sm font-medium px-3 py-1 rounded-full mb-3">
          <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
          Case Type Identified
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-3">
          {caseTypeLabels[caseType] || 'Personal Injury'} Lawyer in Philadelphia
        </h1>
        <p className="text-text-secondary leading-relaxed">
          {caseTypeDescriptions[caseType] || caseTypeDescriptions['general']}
        </p>
        {lawyerStatusMessages[lawyerStatus] && (
          <p className="text-sm text-text-muted mt-3 leading-relaxed bg-bg-accent border border-border-brand rounded-card p-4">
            {lawyerStatusMessages[lawyerStatus]}
          </p>
        )}
      </div>

      {/* Disclaimer */}
      <div className="bg-bg-accent border border-border-brand rounded-card p-4 mb-8">
        <p className="text-sm text-text-secondary">
          <strong>Note:</strong> These results are for informational purposes only. We recommend
          contacting multiple firms and scheduling free consultations before making any decision.
        </p>
      </div>

      {/* Firm recommendations */}
      {!isAlreadyRepresented && firms.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Philadelphia Firms That Handle{' '}
            {caseTypeLabels[caseType] || 'Personal Injury'} Cases
          </h2>
          <div className="flex flex-col gap-4">
            {firms.map((firm, i) => (
              <FirmCard
                key={firm.id}
                firm={firm}
                sourcePage="quiz-results"
                position={i + 1}
              />
            ))}
          </div>
        </section>
      )}

      {isAlreadyRepresented && (
        <section className="mb-10">
          <div className="card p-6">
            <h2 className="font-semibold text-text-primary mb-2">
              Already have representation?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              If you already have a lawyer, our guide on how to evaluate your attorney and
              what to expect from the process may be more helpful.
            </p>
            <Link href="/guide/how-to-choose" className="btn-secondary text-sm py-2 px-4 inline-flex">
              Read the guide →
            </Link>
          </div>
        </section>
      )}

      {/* Email capture */}
      <section className="bg-bg-warm rounded-card p-6 mb-8">
        <h2 className="font-semibold text-text-primary mb-1">
          Get a free case evaluation checklist
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          We'll send you a checklist of what to bring to your free consultation — and what
          questions to ask any Philadelphia injury lawyer.
        </p>
        {submitted ? (
          <div className="flex items-center gap-2 text-brand font-medium text-sm">
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            Sent! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 border border-border-mid rounded-btn px-4 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
            <button type="submit" className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Send Checklist
            </button>
          </form>
        )}
        <p className="text-xs text-text-muted mt-2">
          No spam. Unsubscribe anytime.
        </p>
      </section>

      {/* Restart */}
      <div className="text-center">
        <p className="text-sm text-text-muted mb-3">Not sure these results are right for you?</p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-link hover:text-brand transition-colors"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          Restart the quiz
        </Link>
      </div>
    </div>
  );
}
