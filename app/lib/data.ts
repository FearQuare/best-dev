'use server';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchValidNames(): Promise<string[]> {
    noStore();
    try {
        const result = await sql`SELECT name FROM validnames`;

        const names = result.rows.map(row => row.name);

        return names;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch valid name data.');
    }
}
