import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
  WalletAddress,
} from './definitions';
import { formatCurrency } from './utils';
import { Host } from './common';
import {redirect} from 'next/navigation'

export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  const apiUrl = `http://localhost:8000/api/invoices/${id}`;

  try {
    // Make the fetch request to the backend API
    const response = await fetch(apiUrl);

    // Check if the response is OK (status code 2xx)
    if (!response.ok) {
      throw new Error('Failed to fetch invoice.');
    }

    // Parse the JSON response
    const data = await response.json();

    // Convert amount from cents to dollars
    const invoice = {
      ...data,
      amount: data.amount / 100, // Convert amount to dollars
    };

    return invoice;
  } catch (error) {
    console.error('Request Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}


export async function fetchCustomers() {
  const apiUrl = 'http://localhost:8000/api/customers';

  try {
    // Make the fetch request to the backend API
    const response = await fetch(apiUrl);

    // Check if the response is OK (status code 2xx)
    if (!response.ok) {
      throw new Error('Failed to fetch customers.');
    }

    // Parse the JSON response
    const data = await response.json();

    // Assuming the response contains the customers array
    return data.rows;
  } catch (error) {
    console.error('Request Error:', error);
    throw new Error('Failed to fetch all customers.');
  }
}


export async function fetchFilteredCustomers(query: string) {
  const apiUrl = `http://localhost:8000/api/customers?query=${encodeURIComponent(query)}`;

  try {
    // Make the fetch request to the backend API
    const response = await fetch(apiUrl);

    // Check if the response is OK (status code 2xx)
    if (!response.ok) {
      throw new Error('Failed to fetch customers.');
    }

    // Parse the JSON response
    const data = await response.json();

    // Assuming the response contains the filtered customer data
    const customers = data.rows.map((customer: any) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (error) {
    console.error('Request Error:', error);
    throw new Error('Failed to fetch customer table.');
  }
}


export async function fetchWallets() {
  const apiUrl = `${Host}/api/wallets/`;

  try {
    // Make the fetch request to the backend API
    const response = await fetch(apiUrl);

    // Check if the response is OK (status code 2xx)
    if (!response.ok) {
      throw new Error('Failed to fetch wallets.');
    }

    // Parse the JSON response
    const responseObject = await response.text();  // You could use .text() or .blob() depending on what format you need
   // See the raw response (stringified)

    // If you want to parse the response to a JavaScript object manually:
    const data = JSON.parse(responseObject); // If it's JSON-formatted
    return data;
  } catch (error) {
    console.error('Request Error:', error);
    throw new Error('Failed to fetch wallets.');
  }
}

export async function fetchPlans() {
  const apiUrl = `${Host}/api/plans/`;

  try {
    // Make the fetch request to the backend API
    const response = await fetch(apiUrl);

    // Check if the response is OK (status code 2xx)
    if (!response.ok) {
      throw new Error('Failed to fetch wallets.');
    }

    // Parse the JSON response
    const responseObject = await response.text();  // You could use .text() or .blob() depending on what format you need
     // See the raw response (stringified)

    // If you want to parse the response to a JavaScript object manually:
    const data = JSON.parse(responseObject); // If it's JSON-formatted
    return data;
  } catch (error) {
    console.error('Request Error:', error);
    throw new Error('Failed to fetch wallets.');
  }
}

export async function fetchUser(token: string) {
  const apiUrl = `${Host}/user-details/`;

  try {
      // Make the fetch request to the backend API with Authorization header
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Add the JWT token to the Authorization header
        },
      });

      if (response.status != 200) {
        return null;
      }

    // Parse the JSON response
    const responseObject = await response.text();  // You could use .text() or .blob() depending on what format you need // See the raw response (stringified)

    // If you want to parse the response to a JavaScript object manually:
    const data = JSON.parse(responseObject); // If it's JSON-formatted
    return data;
  } catch (error) {
    // if (response.status !== 200) {
    //   redirect('/user/login');
    // }
    console.error('Request Error:', error);
    throw new Error('Failed to fetch wallets.');
  }
}


