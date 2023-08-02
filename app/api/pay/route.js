import { Client } from 'square';
import { randomUUID } from 'crypto';

(BigInt.prototype).toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: 'sandbox'
});

export  async function POST(request) {
  try {
  const req = await request.json()
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: 100
      }
    })
    return new Response(JSON.stringify(result), { status: 200});
  } catch (error) {
    console.log(error, "ERROR")
    return new Response(JSON.stringify(error), { status: 500});
  }

}