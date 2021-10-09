import * as studentCRUD from './student-crud';


/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();


/**
 * App Variables
 */

if (!process.env.PORT) {
   process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());


/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => res.send('Welcome to Students App using typescript'));

app.get('/students', studentCRUD.getStudentList);

app.post('/students', studentCRUD.createStudent);

app.patch('/updatestudent', studentCRUD.updateStudent);

app.delete('/deletestudent', studentCRUD.deleteStudent);