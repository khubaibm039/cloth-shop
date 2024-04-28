import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";

export default function Users() {
    const { delUser } = useContext(AuthContext);
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                delUser()
                    .then()
                    .catch((err) => console.log(err));
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = users.filter(
                                (user) => user._id !== _id
                            );
                            setUsers(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div>
                <div className="overflow-x-auto mt-20">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                {" "}
                                <th>image</th>
                                <th>name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Login</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td className="text-4xl ">
                                        <CgProfile />
                                    </td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.creationTime}</td>
                                    <td>{user?.lastLoggedAt}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDeleteUser(user._id)
                                            }
                                            className="text-3xl"
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
