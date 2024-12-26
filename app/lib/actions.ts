'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Host } from './common';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
      invalid_type_error: "Please select a customer"
    }),
  amount: z.coerce.number().gt(0, {
    message: "Amount must be a number",
  }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: "Status must be 'pending' or 'paid'",
  }),
  date: z.string({
    invalid_type_error: "Date must be a string",
  }),
});

// export type WalletAddress = {
//     id: string;
//     network: string;
//     address: string;
//     name: string;
//   }
const AddWalletFormSchema = z.object({
  id: z.string(),
  network: z.string({
    invalid_type_error: "Network must be a string",
  }),
  address: z.string({
    invalid_type_error: "Address must be a string",
  }),
  name: z.string({
    invalid_type_error: "Name must be a string",
  }),
})

const AddPlanFormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Name must be a string",
  }),
  description: z.string({
    invalid_type_error: "Description must be a string",
  }),
  price: z.coerce.number().gt(0, {
    message: "Price must be a number",
  }),
  duration_in_months: z.coerce.number().gt(0, {
    message: "Duration must be a number",
  }),
})

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const AddWallet = AddWalletFormSchema.omit({ id: true });
export async function addWallet(previousState: State, formData: FormData) {
  const validatedFields = AddWallet.safeParse({
    network: formData.get('network'),
    address: formData.get('address'),
    name: formData.get('name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Add Wallet.',
    };
  }

  const { network, address, name } = validatedFields.data;
  const response = await fetch(`${Host}/api/wallets/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify JSON content
    },
    body: JSON.stringify({
      network: formData.get('network'),
      address: formData.get('address'),
      name: formData.get('name'),
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error(result.error); // Handle errors
  }

  revalidatePath('/dashboard/admin');
  redirect('/dashboard/admin');
}

const AddPlan = AddPlanFormSchema.omit({ id: true });
export async function addPlan(previousState: State, formData: FormData) {
  // Validate form fields
  const validatedFields = AddPlan.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: parseFloat(formData.get('price') as string),
    duration_in_months: parseInt(formData.get('duration_in_months') as string, 10),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields or Invalid Data. Failed to Add Plan.',
    };
  }

  const { name, description, price, duration_in_months } = validatedFields.data;

  // Send a request to create the plan
  const response = await fetch(`${Host}/api/plans/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify JSON content
    },
    body: JSON.stringify({
      name,
      description,
      price,
      duration_in_months,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error(result.error); // Handle errors
    return { errors: result.error, message: 'Failed to add the plan.' };
  }

  // Revalidate path after successful plan creation
  revalidatePath('/dashboard/admin');
  redirect('/dashboard/admin');
}


const UpdateWallet = AddWalletFormSchema.omit({ id: true });
export async function updateWallet(id: string, prevState: State, formData: FormData) {
  const validatedFields = UpdateWallet.safeParse({
    network: formData.get('network'),
    address: formData.get('address'),
    name: formData.get('name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Wallet.',
    };
  }

  const { network, address, name } = validatedFields.data;
  try {
    // const client = createClient({
    //   query_timeout: 10000,
    // });
    // await client.connect();
    // await client.query(`
    //   UPDATE WalletAddress
    //   SET network = ${network}, address = ${address}, name = ${name}
    //   WHERE id = ${id}
    // `);
    await sql`
      UPDATE WalletAddress
      SET network = ${network}, address = ${address}, name = ${name}
      WHERE id = ${id}
    `;
    revalidatePath('/dashboard/admin');
    redirect('/dashboard/admin');
  } catch (error: any) {
    return { message: error.message };
  }
}

const DeleteWallet = AddWalletFormSchema.omit({ id: true });
export async function deleteWallet(id: string) {
  try {
    // const client = createClient({
    //   query_timeout: 10000,
    // });
    // await client.connect();
    // await client.query(`DELETE FROM WalletAddress WHERE id = ${id}`);
    await sql`DELETE FROM WalletAddress WHERE id = ${id}`;
    revalidatePath('/dashboard/admin');
  } catch (error) {
    console.log(error);
  }
}

const CreateInvoice = FormSchema.omit({ id: true, date: true });
export async function createInvoice(previousState: State, formData: FormData) {
    const validatedFields = CreateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }

    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
      // const client = createClient({
      //   query_timeout: 10000,
      // });
      // await client.connect();
      // await client.query(`
      //   INSERT INTO invoices (customer_id, amount, status, date)
      //   VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      // `);
      await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
    } catch (error) {console.log(error);}

    revalidatePath('/dashboard/admin');
    redirect('/dashboard/admin');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });
export async function updateInvoice(id: string, prevState: State, formData: FormData) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Edit Invoice.',
    };
  }

  const {customerId, amount, status} = validatedFields.data;
  const amountInCents = amount * 100;
 
  try {
    // const client = createClient({
    //   query_timeout: 10000,
    // });
    // await client.connect();
    // await client.query(`
    //     UPDATE invoices
    //     SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    //     WHERE id = ${id}
    //   `);

    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    console.log(error);
  }
 
  revalidatePath('/dashboard/admin');
  redirect('/dashboard/admin');
}

export async function deleteInvoice(id: string) {
  try {
    // const client = createClient({
    //   query_timeout: 10000,
    // });
    // await client.connect();
    // await client.query(`DELETE FROM invoices WHERE id = ${id}`);
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/admin');
  } catch (error) {
    console.log(error);
  }
}
