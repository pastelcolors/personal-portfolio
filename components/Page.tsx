import * as React from 'react';

// ANCHOR Components
import { Layout } from './base/Layout';
import { Content } from './base/Content';

interface IPageProps {
  children: React.ReactNode;
}

export function Page({ children }: IPageProps) {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}
