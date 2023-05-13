import Link from "next/link";

export default function Product(props: any) {
  console.log("*** Product props", props);

  const { params } = props;

  return (
    <div>
      <p>Welcome to product {params.id}!</p>

      {props.children}
    </div>
  );
}
