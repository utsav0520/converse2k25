import express from 'express';
import { addedOneEvent, addedTeamEvent, fetchEmails } from '../controllers/register.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.patch('/eventOne',auth,addedOneEvent);
router.patch('/eventTeam',auth,addedTeamEvent);
router.get('/email/fetch',auth,fetchEmails);

export default router;