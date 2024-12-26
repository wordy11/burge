import CreateForm from '@/app/ui/dashboard/admin/plans/create';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
 
export default async function Page() {
  // const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admin', href: '/dashboard/admin' },
          {
            label: 'Add plan',
            href: '/dashboard/admin/plans/create',
            active: true,
          },
        ]}
      />
      <CreateForm />
    </main>
  );
}