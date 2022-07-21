import express,{Request,Response} from "express";
import { homeDetail ,mondayDetail} from "../controllers/homeDetails";
const router=express.Router();
const app=express();
router.get('/home',homeDetail);
router.get('/Monday',mondayDetail);
router.get('/Tuesday',mondayDetail);
router.get('/Wednesday',mondayDetail);
router.get('/Thursday',mondayDetail);
router.get('/Friday',mondayDetail);


router.get('/Saturday',mondayDetail);
router.get('/Sunday',mondayDetail);


export{
    router
}