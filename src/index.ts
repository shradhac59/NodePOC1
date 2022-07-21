import express, {Request,Response,NextFunction} from "express";
import { router } from "./routes/routes";
const app = express();
// app.use((req:Request,res:Response,next:NextFunction)=>{
//     console.log("Inside middleware");
//     var currentdate = new Date(); 
//     var datetime = "Welcome : " + currentdate.getDate() + "/"
//                     + (currentdate.getMonth()+1)  + "/" 
//                     + currentdate.getFullYear() + " @ "  
//                     + currentdate.getHours() + ":"  
//                     + currentdate.getMinutes() + ":" 
//                     + currentdate.getSeconds();    
//         console.log(datetime);
//         req.
//   next();
// });


    

const port = 4000
app.get('/home',router);
app.get('/Monday',router);
app.get('/Tuesday',router);
app.get('/Wednesday',router);
app.get('/Thursday',router);
app.get('/Friday',router);
app.get('/Saturday',router);
app.get('/Sunday',router);







app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log("Inside index");