'use client';

import { useState } from 'react';

export function Copy(props: any) {
  const [copied, setCopied] = useState(false);

  const copyPaste = () => {
    navigator.clipboard.writeText(props.data);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      {copied ? (
        <p className="text-green-500">Copied !</p>
      ) : (
        <svg
          className="text-slate-600"
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          onClick={copyPaste}
        >
          <path
            fill="currentColor"
            d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z"
          ></path>
        </svg>
      )}
    </>
  );
}
