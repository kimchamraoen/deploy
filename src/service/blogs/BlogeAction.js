export default async function getAllBlogs() {
  try {
    const response = await fetch(`https://blog-api.automatex.dev/blogs`);
    const data = await response.json();
    console.log("Data", data.blogs);
    return data?.blogs;
  } catch (error) {
    console.log("Error fetching all blogs", error);
  }
}

export async function getSingleBlog(id) {
  try {
    const response = await fetch(`https://blog-api.automatex.dev/blogs/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching single blog", error);
  }
}
