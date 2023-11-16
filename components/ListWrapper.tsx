import { ReactNode } from 'react';

export default function ListWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="w-full border rounded-lg border-sub-color h-fit">
      <h2 className="p-4 border-b border-sub-color">{title}</h2>
      {children}
    </section>
  );
}
