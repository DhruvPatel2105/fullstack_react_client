const URI = "http://localhost:4000/graphql";
const Fetchdata = (query) =>
  fetch(URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

export default Fetchdata;
