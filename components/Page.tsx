import * as React from 'react';

// ANCHOR Components
import { Layout } from './base/Layout';

interface IPageProps {
  children: React.ReactNode;
}

export function Page({ children }: IPageProps) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
