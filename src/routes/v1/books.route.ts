import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json([
    {
      "id": "abc123",
      "title": "Some title",
      "author": "Some Author",
    },
  ]);
});

export default router;
