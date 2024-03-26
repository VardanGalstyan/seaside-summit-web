export default function Event({ params }: { params: { slug: string } }) {
  return <main>{params.slug}</main>;
}
