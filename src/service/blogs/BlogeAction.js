export default async function getAllbloge() {
  const response = fetch(`https://blog-api.automatex.dev/blogs`).then((res) =>
    res.json()
  );
  const data = await response;
  console.log("Data", data.blogs);
  return data?.blogs;
}

export async function getSingleBloge(id) {
  try {
    // method fetch
    const response = fetch(`${BASE_URL}blogs/${id}`).then((res) => res.json());
    const data = await response;
    // console.log("data in function", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
