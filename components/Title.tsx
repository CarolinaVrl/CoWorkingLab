import { ReactNode } from 'react';

interface Title {
  children: ReactNode;
}
function Title({ children }: Title) {
  return (
    <h1 className="text-blueDark font-bold text-3xl font-nunito">{children}</h1>
  );
}

export default Title;
