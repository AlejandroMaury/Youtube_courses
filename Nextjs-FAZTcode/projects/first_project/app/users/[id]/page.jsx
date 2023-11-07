/* eslint-disable @next/next/no-img-element */

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div className="bg-amber-900  h-80 p-10  rounded-md">
      <img
        src={user.avatar}
        alt="tarjeta de usuario"
        className="m-auto my-5 rounded-full"
      />
      <h3 className="text-3xl font-bold text-green-400">
        {user.id} {user.first_name} {user.last_name}
      </h3>
      <p>{user.email}</p>
    </div>
  );
}
export default UserPage;
