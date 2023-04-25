import { ReactNode } from 'react';

interface text {
  children: ReactNode;
}
function Title({ children }: text) {
  return (
    <h1 className="text-blueDark font-bold text-3xl font-nunito">{children}</h1>
  );
}

export default Title;
