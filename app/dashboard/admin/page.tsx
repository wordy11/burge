import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import WalletTable from  '@/app/ui/dashboard/admin/wallets/table';
import PlanTable from '@/app/ui/dashboard/admin/plans/table';
import { CreateInvoice, CreatePlan, CreateWallet } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages, fetchWallets, fetchPlans } from '@/app/lib/data';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchInvoicesPages(query);
  const wallets = await fetchWallets();
  const plans = await fetchPlans();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      {/* Invoices Section */}
      <div className="flex w-full items-center justify-between mt-4 md:mt-8">
        <h1 className={`${lusitana.className} text-2xl sm:text-3xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center"></div>

      {/* Wallets Section */}
      <div className="flex w-full items-center justify-between mt-8">
        <h1 className={`${lusitana.className} text-2xl sm:text-3xl`}>Wallets</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search wallets..." />
        <CreateWallet />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <WalletTable wallets={wallets} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center"></div>

      {/* Plans Section */}
      <div className="flex w-full items-center justify-between mt-8">
        <h1 className={`${lusitana.className} text-2xl sm:text-3xl`}>Plans</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search plans..." />
        <CreatePlan />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <PlanTable Plans={plans} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center"></div>
    </div>
  );
}
