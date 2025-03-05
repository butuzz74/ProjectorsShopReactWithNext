import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Screens page | SOI',
  description: 'Create screens page',
};

function Screens(): React.ReactNode {
  return <h1 className="text-black">Screens</h1>;
}

export default Screens;
