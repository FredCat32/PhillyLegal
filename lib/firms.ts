export type CaseType =
  | 'car-accident'
  | 'slip-and-fall'
  | 'workers-comp'
  | 'medical-malpractice'
  | 'catastrophic-injury'
  | 'general';

export type Firm = {
  id: string;
  name: string;
  specialty: CaseType[];
  yearsInBusiness: number;
  phone: string;
  website: string;
  description: string;
  contingencyFee: boolean;
  freeConsultation: boolean;
};

export const firms: Firm[] = [
  {
    id: 'rosenbaum',
    name: 'Rosenbaum Injury Law',
    specialty: ['car-accident', 'slip-and-fall', 'general'],
    yearsInBusiness: 35,
    phone: '(215) 569-0200',
    website: 'https://www.rosenbauminjuryfirm.com',
    description:
      'Philadelphia personal injury firm with 35+ years handling accident and injury cases.',
    contingencyFee: true,
    freeConsultation: true,
  },
  {
    id: 'kline-specter',
    name: 'Kline & Specter',
    specialty: ['medical-malpractice', 'catastrophic-injury'],
    yearsInBusiness: 30,
    phone: '800-243-1100',
    website: 'https://www.klinespecter.com',
    description:
      'Focused on catastrophic injury and medical malpractice cases in Philadelphia.',
    contingencyFee: true,
    freeConsultation: true,
  },
  {
    id: 'ross-feller-casey',
    name: 'Ross Feller Casey',
    specialty: ['catastrophic-injury', 'medical-malpractice', 'workers-comp'],
    yearsInBusiness: 25,
    phone: '(215) 515-4401',
    website: 'https://www.rossfellercasey.com',
    description: 'Nationally recognized Philadelphia firm specializing in catastrophic injury and complex medical malpractice cases, with billion-dollar verdicts and a reputation for high-stakes litigation.',
    contingencyFee: true,
    freeConsultation: true,
  },
  {
    id: 'levin-firm',
    name: 'The Levin Firm',
    specialty: ['car-accident', 'slip-and-fall', 'general'],
    yearsInBusiness: 20,
    phone: '(215) 484-4166',
    website: 'https://www.levininjuryfirm.com',
    description:
      'Philadelphia personal injury attorneys handling accident and negligence cases.',
    contingencyFee: true,
    freeConsultation: true,
  },
  {
    id: 'philly-injury-lawyers',
    name: 'Philadelphia Injury Lawyers P.C.',
    specialty: ['car-accident', 'slip-and-fall', 'general'],
    yearsInBusiness: 10,
    phone: '(215) 298-9143',
    website: 'https://philly-injury-law.com',
    description:
      'Philadelphia personal injury firm handling a wide range of accident and negligence cases.',
    contingencyFee: true,
    freeConsultation: true,
  },
];

export function getFirmsBySpecialty(specialty: CaseType): Firm[] {
  return firms.filter((f) => f.specialty.includes(specialty));
}

export function getFirmById(id: string): Firm | undefined {
  return firms.find((f) => f.id === id);
}
