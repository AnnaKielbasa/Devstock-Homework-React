import { useEffect, useState } from "react";
// UseEffect 4
export default function CurrentTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <>
      <p>Current time: {time.toLocaleString({ timeZone: "Europe/Warsaw" })}</p>
    </>
  );
}
