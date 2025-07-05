export async function getHomePageData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage`, {
    cache: 'no-store',
  });
  return res.json();
}

export async function getHeaderData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/header`, {
    cache: 'no-store',
  });
  return res.json();
}
