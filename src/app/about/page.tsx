import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About company | SOI',
  description: 'Create about company page',
};

export default function About() {
  return <h1 className="text-black">About company</h1>;
}
