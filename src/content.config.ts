import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kurse = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/kurse' }),
  schema: z.object({
    titel: z.string(),
    kategorie: z.string(),
    datum: z.string().optional(),
    ort: z.string().optional(),
    dauer: z.string().optional(),
    preis: z.number().optional(),
    plaetze: z.number().optional(),
    titelbild: z.string().optional(),
    buchungslink: z.string().optional(),
    aktiv: z.boolean().default(true),
  }),
});

const projekte = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projekte' }),
  schema: z.object({
    titel: z.string(),
    ort: z.string().optional(),
    jahr: z.number().optional(),
    kategorie: z.string(),
    titelbild: z.string().optional(),
    bilder: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const termine = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/termine' }),
  schema: z.object({
    titel: z.string(),
    datum: z.string(),
    uhrzeit: z.string().optional(),
    ort: z.string(),
    typ: z.string(),
    plaetze: z.number().optional(),
    preis: z.number().optional(),
    buchungslink: z.string().optional(),
    aktiv: z.boolean().default(true),
  }),
});

export const collections = { kurse, projekte, termine };
