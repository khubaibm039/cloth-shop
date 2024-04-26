import { useLoaderData } from "react-router-dom";

export default function Users() {
    const loadedUser = useLoaderData();

    return (
        <div>
            {loadedUser.map((user) => (
                <p key={user._id}>
                    {user.name} : {user.email}
                </p>
            ))}
        </div>
    );
}
