import { footerData } from '../../mocks/footer';

export async function GET() {
  return Response.json(footerData);
}
