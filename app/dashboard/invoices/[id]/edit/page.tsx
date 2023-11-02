import Form from '@/components/invoices/edit-form';
import Breadcrumbs from '@/components/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit invoice',
};

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return invoice ? (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      {/* @ts-ignore */}
      <Form invoice={invoice} customers={customers} />
    </main>
  ) : (
    notFound()
  );
}
