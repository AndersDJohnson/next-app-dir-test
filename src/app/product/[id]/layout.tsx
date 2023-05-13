import Link from "next/link";

export default function ProductLayout(props: any) {
  const { params } = props;

  console.log("*** Product layout props", props);

  return (
    <div>
      <h2>Product layout (for product {props.params.id})</h2>

      <ul>
        <li>
          <Link href={`/product/${params.id}/variation/a`}>Variation a</Link>
        </li>
        <li>
          {" "}
          <Link href={`/product/${params.id}/variation/b`}>Variation b</Link>
        </li>
      </ul>
      <hr />

      <div>{props.children}</div>
    </div>
  );
}
