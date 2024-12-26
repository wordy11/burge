import CreateForm from '@/app/ui/dashboard/admin/wallets/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  // const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admin', href: '/dashboard/admin' },
          {
            label: 'Add wallet',
            href: '/dashboard/admin/wallets/create',
            active: true,
          },
        ]}
      />
      <CreateForm />
    </main>
  );
}