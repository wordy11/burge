'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
 
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
