export default async function getAllbloge() {
  const response = fetch(`https://blog-api.automatex.dev/blogs`).then((res) =>
    res.json()
  );
  const data = await response;
  //   console.log("DAta", data.blogs);
  return data?.blogs;
}
