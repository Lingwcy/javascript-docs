import { useLoaderData } from "react-router";

export default function Project() {
    const data = useLoaderData();
    return (
        <p>Project Name: {data.name}</p>
    )
  }