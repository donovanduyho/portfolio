import { db } from "~/server/db";
import { postsTable, usersTable } from "~/server/db/schema";

export default async function HomePage() {
  const post = await db.query.postsTable.findMany();

  return (
    <>
      <form
        action={async () => {
          "use server";
          await db.insert(usersTable).values({
            name: "Test",
            age: 20,
            email: "test@test.com",
            id: 1,
          });

          await db.insert(postsTable).values({
            title: "Test",
            content: "This is a test.",
            userId: 1,
          });
        }}
      >
        <button>Submit</button>
      </form>

      {post.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}
