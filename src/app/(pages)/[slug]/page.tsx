export default function ArticlePage({ params }) {
  return (
    <div>
      <h1>Article Detail: {params.slug}</h1>
    </div>
  );
}
