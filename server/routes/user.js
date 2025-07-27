import express from 'express';
import { googleSignIn, updateProfile, getProfile  } from '../controllers/person.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/signin',googleSignIn);
router.patch('/profile/update',auth,updateProfile);
router.get('/profile/fetch',auth,getProfile);


export default router;