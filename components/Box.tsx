'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Prism from 'prismjs';
import { Copy } from './_icons/Copy';
import { ReactIcon } from './_icons/React';
import { Vue } from './_icons/Vue';

interface Content {
  title: string;
  description: string;
}

export default function Box({
  children,
  content
}: {
  children: React.ReactNode;
  content: Content;
}) {
  const { title, description } = content;
  let [file, setFile] = useState('');
  let [framework, setFramework] = useState('react');
  let [extension, setExtension] = useState('tsx');

  const fetchFile = async () => {
    const response = await fetch(
      `api/hello?framework=${framework}&name=${content.title}&extension=${extension}`
    )
      .then((response) => response.json())
      .then(({ file }) => setFile(file));
  };

  const htmlCode = Prism.highlight(
    file,
    Prism.languages?.javascript,
    'javascript'
  );

  useEffect(() => {
    fetchFile();
  }, [framework]);

  return (
    <div className="mb-16 DemoBox w-100" id={content.title}>
      <h3 className="mb-4 text-lg font-bold">{title}</h3>
      <p className="mb-4 desc">{description}</p>
      <div className="flex items-center justify-center p-6 mb-4 border rounded-lg DemoBoxComponent border-astro">
        {children}
      </div>
      <div>
        <div className="relative p-6 border rounded-lg DemoBoxCode text-md bg-slate-100 dark:bg-primary-900/10 border-astro">
          <div className="absolute cursor-pointer top-6 right-6">
            <Copy data={file} />
          </div>
          <pre className="whitespace-pre-wrap">
            <code dangerouslySetInnerHTML={{ __html: htmlCode }} />
            <div className="absolute flex cursor-pointer bottom-6 right-6">
              <ReactIcon
                onClick={() => {
                  setExtension('tsx');
                  setFramework('react');
                }}
                className={`${
                  framework === 'react'
                    ? 'text-primary-500'
                    : 'hover:text-primary-500'
                }`}
              />
              <Vue
                onClick={() => {
                  setExtension('vue');
                  setFramework('vue');
                }}
                className={`${
                  framework === 'vue'
                    ? 'text-primary-500'
                    : 'hover:text-primary-500'
                }`}
              />
            </div>
          </pre>
        </div>
      </div>
    </div>
  );
}
