import Users from "@/components/Users";

async function fetchUser() {
  const res = await fetch(`https://reqres.in/api/users`);
  const data = await res.json();
  //   console.log(data);
  return data.data;
}

async function homePage() {
  const users = await fetchUser();

  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default homePage;
