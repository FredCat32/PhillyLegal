import type { Metadata } from 'next';
import QuizWidget from '@/components/QuizWidget';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer Quiz',
  description:
    'Answer 4 questions to find out what type of personal injury lawyer you need in Philadelphia — and which firms match your situation.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuizPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Philadelphia Personal Injury Lawyer Quiz
        </h1>
        <p className="text-text-secondary max-w-lg mx-auto">
          Answer 4 questions and we'll identify your case type, check your statute of
          limitations, and match you to Philadelphia firms.
        </p>
      </div>
      <QuizWidget />
    </div>
  );
}
