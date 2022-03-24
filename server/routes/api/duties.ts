import express from 'express';
import { Duty } from '../../models/Duty';
import { dev } from '../../config/keys';

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) =>{
	try {
		const duties = await Duty.find({});
		res
			.status(200)
			.json({
				success: true,
				duties
			});
	} catch (err) {
		const error = err as Error;
		res
			.status(400)
			.json({ 
				success: false, 
				error: dev ? error.message : "An error has occurred"
			});
	}
});

export { router as duties };