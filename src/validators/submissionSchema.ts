// validators/submissionSchema.ts
import { z } from 'zod';

export const createSubmissionSchema = z.object({
    // Define the fields based on CreateSubmissionDto
    // For example, if CreateSubmissionDto has a field called 'name' of type string:
    name: z.string(),
    email: z.string().email(),
    age: z.number().int().positive(),
    // Add other fields as needed
});