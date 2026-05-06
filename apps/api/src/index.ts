import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const app = express();
const port = Number(process.env.API_PORT ?? 4000);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'ml-api' });
});

app.get('/api/products', (_req, res) => {
  res.json({
    data: [
      {
        id: '1',
        title: 'Laptop ultraligera 14 pulgadas',
        price: 18499,
        currency: 'MXN',
        stock: 8,
        sellerId: 'seller-demo'
      },
      {
        id: '2',
        title: 'Audífonos inalámbricos con cancelación',
        price: 1299,
        currency: 'MXN',
        stock: 25,
        sellerId: 'seller-demo'
      }
    ]
  });
});

app.listen(port, () => {
  console.log(`ML API running on http://localhost:${port}`);
});
