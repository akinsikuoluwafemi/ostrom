

/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from './items/items.router';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';


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
app.use("/api/student/items", itemsRouter);

// swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Code Clean Api',
      version: '1.0.0',
      description: 'A simple students crud api'
    },
    servers: [
      {
        url: "http://localhost:7000/"
      }
    ]
  },
  // apis: ["./items/items.router.ts"]
  apis: ["**/*.ts"]

}

const swaggerSpec = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))

/**
 * Server Activation
 */


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => res.send('Welcome to Students App using typescript'));

