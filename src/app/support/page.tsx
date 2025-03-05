import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support page | SOI',
  description: 'Create support page',
};

function Support(): React.ReactNode {
  return <h1 className="text-black">Support</h1>;
}

export default Support;
