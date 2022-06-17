import data from "../../../data/homeHeader.json";
import { CardHomeHeader } from "../../molecules";
export default function HomeHeader() {
  return (
    <div>
      <CardHomeHeader data={data} />
    </div>
  );
}
