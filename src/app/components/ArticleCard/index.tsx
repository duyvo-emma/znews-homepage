'use client';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ArticleCard({ data }) {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(`/${data.id}`)} sx={{ cursor: 'pointer', mb: 2 }}>
      <CardMedia component="img" height="200" image={data.image} alt={data.title} />
      <CardContent>
        <Typography variant="h6">{data.title}</Typography>
      </CardContent>
    </Card>
  );
}
