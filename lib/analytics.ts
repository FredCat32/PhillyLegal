'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackQuizStart() {
  window.gtag?.('event', 'quiz_start', {
    event_category: 'Quiz',
    event_label: 'Quiz Started',
  });
}

export function trackQuizStep(step: number, answer: string) {
  window.gtag?.('event', 'quiz_step', {
    event_category: 'Quiz',
    event_label: `Step ${step}`,
    value: answer,
  });
}

export function trackQuizComplete(caseType: string, urgency: boolean) {
  window.gtag?.('event', 'quiz_complete', {
    event_category: 'Quiz',
    event_label: caseType,
    urgency: urgency ? 'yes' : 'no',
  });
}

export function trackFirmClick(
  firmId: string,
  sourcePage: string,
  position: number
) {
  window.gtag?.('event', 'firm_click', {
    event_category: 'Outbound',
    event_label: firmId,
    source_page: sourcePage,
    position,
  });
}

export function trackEmailCapture(source: string) {
  window.gtag?.('event', 'email_capture', {
    event_category: 'Lead',
    event_label: source,
  });
}
