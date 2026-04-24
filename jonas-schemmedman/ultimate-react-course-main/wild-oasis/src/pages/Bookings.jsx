import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getBookings } from "../services/apiBookings";

function Bookings() {
  useEffect(() => {
    console.log("this is from booking api");

    getBookings().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Bookings;
