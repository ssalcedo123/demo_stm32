import { Router } from "express";
const router = Router();

import * as UserCtrl from "../controllers/user.controller";
import {authJwt, verifySignup} from "../middlewares";
router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
],UserCtrl.createUser);

export default router;