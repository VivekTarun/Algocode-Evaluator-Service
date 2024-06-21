import { Request, Response, Router } from 'express';
import { CreateSubmissionDto } from '../dtos/CreateSubmissionDto';
import { createSubmissionSchema } from '../validators/submissionSchema';
import { validate } from '../validators/zodValidator';

export function addSubmission(req: Request, res: Response) {
    const submissionDto = req.body as CreateSubmissionDto;
    console.log(submissionDto);

    return res.status(201).json({
        success: true,
        error: {},
        message: 'Successfully collected the submission',
        data: submissionDto
    });
}

// Create a router to use the validate middleware
const router = Router();

// Use the validate middleware before the addSubmission function
router.post('/add-submission', validate(createSubmissionSchema), addSubmission);

export default router;
