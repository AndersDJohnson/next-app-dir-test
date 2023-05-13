import Link from "next/link";

export default function Product(props: any) {
  console.log("*** Product props", props);

  const { params } = props;

  return (
    <div>
      Welcome to product!
      <Link href={`/product/${params.id}/variation/1`}>Variation 1</Link>
      <Link href={`/product/${params.id}/variation/2`}>Variation 2</Link>
    </div>
  );
}
