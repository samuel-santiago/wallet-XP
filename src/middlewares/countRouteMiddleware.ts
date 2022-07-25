import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { prismaClient } from "../database/prismaClient";
import StyledError from "../helpers/Error";
import { schemaClient } from "../utils/joi/schemaClient";

    export const depositAndWithDrawValidation = (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password, balance } = req.body;
      console.log('middlware');
      const {error} = schemaClient.validate(req.body)
      if (error) throw new StyledError(400, error.message);
    next()
  }
 