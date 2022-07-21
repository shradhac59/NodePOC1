import  express ,{Request,Response} from "express";
// import { parse } from "path";

const homeDetail=async (req:Request,res:Response)=>{
    res.send('<h1>Hello, User!</h1> <h3> Welcome Home</h3><p><a href="\Monday">Monday</a></p><p><a href="\Tuesday">Tuesday</a></p><p><a href="\Wednesday">Wednesday</a><p><a href="\Thursday">Thursday</a></p><p><a href="\Friday">Friday</a><p><a href="\Saturday">Saturday</a><p><a href="\Sunday">Sunday</a>\n')
}
const mondayDetail=async (req:Request,res:Response)=>{
    console.log(req);
    var currentdate = new Date(); 
    var datetime = "Welcome : " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();    
        console.log(datetime);
    res.send(datetime);
}
export{
    homeDetail,
    mondayDetail
}