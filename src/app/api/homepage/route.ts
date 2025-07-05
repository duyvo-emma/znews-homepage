import homepageData from '../../mocks/homepage';

export async function GET() {
  return Response.json(homepageData);
}
