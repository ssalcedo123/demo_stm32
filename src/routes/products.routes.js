import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.post('/', [authJwt.verifyToken, authJwt.isModerator && authJwt.isAdmin],productsCtrl.createProduct);

router.get('/', productsCtrl.getProducts);

router.get('/:productId', productsCtrl.getProductById);

router.put('/:productId', [authJwt.verifyToken, authJwt.isModerator && authJwt.isAdmin] ,productsCtrl.updateProductById);

router.delete('/:productId',[authJwt.verifyToken, authJwt.isAdmin] ,productsCtrl.deletProductById);


export default router;