import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import QuizResults from '@/components/QuizResults';
import { getFirmsBySpecialty, type CaseType } from '@/lib/firms';

export const metadata: Metadata = {
  title: 'Your Quiz Results',
  description: 'Your personalised Philadelphia personal injury lawyer recommendations.',
  robots: {
    index: false,
    follow: false,
  },
};

type SearchParams = {
  caseType?: string;
  timeframe?: string;
  lawyerStatus?: string;
  priority?: string;
};

const validCaseTypes: readonly string[] = [
  'car-accident',
  'slip-and-fall',
  'workers-comp',
  'medical-malpractice',
  'general',
];

export default function QuizResultsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { caseType, timeframe, lawyerStatus, priority } = searchParams;

  if (!caseType) {
    redirect('/quiz');
  }

  const safeCaseType = (
    validCaseTypes.includes(caseType) ? caseType : 'general'
  ) as CaseType;

  const matchedFirms = getFirmsBySpecialty(safeCaseType).slice(0, 3);

  return (
    <QuizResults
      caseType={safeCaseType}
      timeframe={timeframe || ''}
      lawyerStatus={lawyerStatus || ''}
      priority={priority || ''}
      firms={matchedFirms}
    />
  );
}
