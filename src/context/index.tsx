import React from 'react';

import { ProductProvider } from './product';

const ApplicationProvider: React.FC = ({ children }) => (
  <ProductProvider>{children}</ProductProvider>
);

export default ApplicationProvider;
