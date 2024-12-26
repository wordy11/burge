import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import TransactionForm from '@/app/ui/invoices/create-form';
 
export default async function Page() {
  // const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admin', href: '/dashboard/admin' },
          {
            label: 'Create Admin',
            href: '/dashboard/admin/create',
            active: true,
          },
        ]}
      />
      <TransactionForm />
    </main>
  );
}