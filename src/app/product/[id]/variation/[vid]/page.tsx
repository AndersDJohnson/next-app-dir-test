import { Counter } from "./Counter";

export default function Variation({ params }: any) {
  console.log("*** Variation params", params);
  return (
    <div>
      Variation {params.vid}
      <Counter />
    </div>
  );
}
