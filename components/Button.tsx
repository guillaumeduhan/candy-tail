'use client';

interface ButtonProps {
  text?: string;
  loading?: boolean;
  onClick?: Function;
}

export default function Button(props: ButtonProps) {
  const { text, loading, onClick, children } = props;
  return (
    <button
      className="px-4 py-2 text-base text-white transition rounded Button bg-primary-500 hover:bg-primary-400 disabled:bg-slate-300"
      disabled={loading}
      onClick={onClick}
    >
      {loading && children}
      {!loading && text}
    </button>
  );
}
