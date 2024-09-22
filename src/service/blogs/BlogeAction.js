export default async function getAllBlogs() {
  try {
    const response = await fetch(`https://blog-api.automatex.dev/blogs`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data ", data);
    return data; // Return the data directly
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Rethrow the error for further handling
  }
}
