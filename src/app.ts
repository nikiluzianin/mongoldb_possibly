// const express = require('express');
import express, { Request, Response, NextFunction } from "express"
import todoRoutes from "./routes/todo"
import { json, urlencoded } from "body-parser";
import db from "mongoose";


const app = express();
app.use(json());

app.use(urlencoded({ extended: true }));

app.listen(3002);
app.use('/todos', todoRoutes);


console.log("asd");


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});



db.connect('mongodb://127.0.0.1:27017/todo_test2');