'use client';

import { PresenceProvider } from '../providers/PresenceProvider';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <PresenceProvider>
      {children}
    </PresenceProvider>
  );
}
