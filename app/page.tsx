import Button from '../components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto my-8 text-center">
      <Image
        src="/cp.png"
        alt="Picture of the author"
        width={120}
        height={120}
        className="mx-auto mb-4"
      ></Image>
      <h1 className="mb-1 text-2xl font-extrabold">
        Own your <span className="text-primary-400">design system.</span>
      </h1>
      <div className="desc">
        Candytail is an open-source component library based on{' '}
        <span className="underline decoration-wavy underline-offset-4 text-primary-400 decoration-primary-400">
          Tailwindcss
        </span>
        .
      </div>
      <div>
        <a href="/docs">
          <Button text="Components" />
        </a>
      </div>
    </div>
  );
}
