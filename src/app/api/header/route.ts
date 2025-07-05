import headerData from '../../mocks/header';

export async function GET() {
  return Response.json(headerData);
}
