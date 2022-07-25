import { NextFunction, Request, Response } from "express"; 
import StyledError from "../helpers/Error";


export default (err:StyledError, _req: Request, res:Response, _next:NextFunction) => {
  if (err.message === 'jwt malformed') {
  return res.status(401)
    .json({ message: 'Expired or invalid token' }); 
}
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};