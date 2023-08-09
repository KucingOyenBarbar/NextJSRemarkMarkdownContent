import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getSortedPostsData() {
  // Directory
  const postsDirectory: string = path.join(process.cwd(), "blogposts");
  // Get fileName
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData: BlogPost[] = fileNames.map((fileName) => {
    const id: string = fileName.replace(/\.md$/, "");

    // Markdown file to string
    const fullPath: string = path.join(postsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, "utf-8");
    const matterResult: matter.GrayMatterFile<string> = matter(fileContents);
    const blogPosts: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    return blogPosts;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
