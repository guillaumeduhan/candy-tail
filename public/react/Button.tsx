'use client';

import React from 'react';

interface ButtonProps {
  text?: string;
  loading?: boolean;
  onClick?: Function;
}

export default function Button(props: ButtonProps) {
  const { text, loading, onClick } = props;
  return (
    <button
      className="px-4 py-2 text-base text-white transition rounded Button bg-primary-500 hover:bg-primary-400 disabled:bg-slate-300"
      disabled={loading}
    >
      {loading}
      {!loading && text}
    </button>
  );
}
