import { db } from "@vercel/postgres";

const client = await db.connect();

async function listInvoices() {
	const data = await client.sql`
        CREATE TABLE IF NOT EXISTS WalletAddress (
        id UUID PRIMARY KEY,
        network VARCHAR(255),
        address VARCHAR(255),
        name VARCHAR(255)
        );`;

	return data;
}

export async function GET() {
  try {
  	return Response.json(await listInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}

// export type WalletAddress = {
//     id: string;
//     network: string;
//     address: string;
//     name: string;
//   }