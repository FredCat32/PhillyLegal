'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackQuizStart, trackQuizStep, trackQuizComplete } from '@/lib/analytics';

type QuizAnswers = {
  caseType: string;
  timeframe: string;
  lawyerStatus: string;
  priority: string;
};

const steps = [
  {
    id: 'caseType',
    question: 'What happened to you?',
    options: [
      { value: 'car-accident', label: 'Car or vehicle accident' },
      { value: 'slip-and-fall', label: 'Slip, trip or fall' },
      { value: 'workers-comp', label: 'Injured at work' },
      { value: 'medical-malpractice', label: 'Medical error or malpractice' },
      { value: 'general', label: 'Other / not sure' },
    ],
  },
  {
    id: 'timeframe',
    question: 'How long ago did it happen?',
    hint: "Pennsylvania has a 2-year statute of limitations, this affects how urgently you need to act.",
    options: [
      { value: '0-1', label: 'Within the last 30 days' },
      { value: '1-6', label: '1–6 months ago' },
      { value: '6-24', label: '6–24 months ago' },
      { value: '24+', label: 'More than 2 years ago' },
    ],
  },
  {
    id: 'lawyerStatus',
    question: 'Have you already spoken to a lawyer?',
    options: [
      { value: 'no', label: 'No, this is my first step' },
      { value: 'second-opinion', label: 'Yes, but I want a second opinion' },
      { value: 'represented', label: 'Yes, and I have representation already' },
    ],
  },
  {
    id: 'priority',
    question: 'What is most important to you?',
    options: [
      { value: 'max-money', label: 'Getting the most money possible' },
      { value: 'fast', label: 'Resolving it as quickly as possible' },
      { value: 'specialist', label: 'Having a lawyer who specialises in my exact case type' },
      { value: 'contingency', label: 'Paying nothing unless we win (contingency fee)' },
    ],
  },
];

export default function QuizWidget() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  const step = steps[currentStep];
  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  function handleStart() {
    setStarted(true);
    trackQuizStart();
  }

  function handleSelect(value: string) {
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);
    trackQuizStep(currentStep + 1, value);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete, navigate to results
      const isUrgent = newAnswers.timeframe === '6-24' || newAnswers.timeframe === '24+';
      trackQuizComplete(newAnswers.caseType || 'general', isUrgent);
      const params = new URLSearchParams({
        caseType: newAnswers.caseType || 'general',
        timeframe: newAnswers.timeframe || '',
        lawyerStatus: newAnswers.lawyerStatus || '',
        priority: newAnswers.priority || '',
      });
      router.push(`/quiz/results?${params.toString()}`);
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  if (!started) {
    return (
      <div className="bg-white rounded-quiz shadow-card border border-border-subtle p-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Find Your Philadelphia Injury Lawyer
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Answer 4 quick questions and we'll identify your case type, check your statute of
          limitations, and show you which Philadelphia firms handle your situation.
        </p>
        <ul className="text-sm text-text-secondary space-y-2 mb-8 text-left max-w-xs mx-auto">
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-light text-brand text-xs flex items-center justify-center font-semibold flex-shrink-0">1</span>
            Takes about 2 minutes
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-light text-brand text-xs flex items-center justify-center font-semibold flex-shrink-0">2</span>
            Checks your statute of limitations
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-light text-brand text-xs flex items-center justify-center font-semibold flex-shrink-0">3</span>
            Shows matching Philadelphia firms
          </li>
        </ul>
        <button onClick={handleStart} className="btn-primary text-base px-8 py-3.5">
          Start the Quiz →
        </button>
        <p className="text-xs text-text-muted mt-4">Free. No contact information required.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-quiz shadow-card border border-border-subtle p-8 max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-text-muted">
            Question {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-xs font-medium text-brand">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-border-subtle rounded-full overflow-hidden">
          <div
            className="h-full bg-brand rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step dots */}
      <div className="flex gap-1.5 mb-6" aria-hidden="true">
        {steps.map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-1.5 rounded-full transition-all duration-200',
              i === currentStep
                ? 'w-6 bg-brand'
                : i < currentStep
                ? 'w-3 bg-brand-mid'
                : 'w-3 bg-border-subtle'
            )}
          />
        ))}
      </div>

      {/* Question */}
      <h2 className="text-xl font-semibold text-text-primary mb-2">{step.question}</h2>
      {step.hint && (
        <p className="text-sm text-text-muted mb-5 leading-relaxed">{step.hint}</p>
      )}

      {/* Options */}
      <div className="flex flex-col gap-3 mb-6">
        {step.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={cn(
              'quiz-option text-sm font-medium text-text-primary',
              answers[step.id as keyof QuizAnswers] === option.value && 'quiz-option-selected'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Back button */}
      {currentStep > 0 && (
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 text-sm text-text-muted hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back
        </button>
      )}
    </div>
  );
}
