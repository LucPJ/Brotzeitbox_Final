import express from "express";
import {lebensmittelRouter} from "./routing/lebensmittelRouter.js";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/lebensmittel', lebensmittelRouter);

app.listen(port, ()=>console.log(`app listen at the port ${port}`));