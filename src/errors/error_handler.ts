import { NextFunction, Request, Response } from "express";
import ApiError from "./api_error";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ApiError) {
    res.status(err.httpStatusCode).json({
      reason: err.reason,
      message: err.message
    });
  }
  else {
    res.status(500).json({
      reason: err.constructor.name,
      message: err.message
    });
  }
}