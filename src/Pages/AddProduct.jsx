import { useState } from "react";

export default function AddProduct() {
    const [category, setCategory] = useState();
    const items = [
        { value: "men", label: "Men ware" },
        { value: "woman", label: "Woman ware" },
        { value: "child", label: "Child ware" },
        { value: "top", label: "Top Rated" },
    ];

    const handleNewProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const newProduct = {
            name,
            brand_name,
            description,
            rating,
            photo,
            price,
            category,
        };
        console.log(newProduct);
    };
    return (
        <div className="bg-[#f4f3f0] md:p-20 p-8 container mx-auto">
            <h1 className="text-3xl mb-4 font-extrabold text-center uppercase">
                Add Product
            </h1>
            <form onSubmit={handleNewProduct}>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="name"
                                name="name"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter product brand name"
                                name="brand_name"
                                required
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Description"
                                name="description"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Rating"
                                name="rating"
                                type="number"
                                required
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Price"
                                name="price"
                                required
                            />
                        </label>
                    </div>{" "}
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Photo URL"
                                name="photo"
                                required
                            />
                        </label>
                    </div>
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                required
                                type="radio"
                                id={item.value}
                                name="category"
                                value={item.value}
                                checked={category === item.value}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label htmlFor={item.value}>{item.label}</label>
                            <br />
                        </div>
                    ))}
                </div>

                <input
                    type="submit"
                    className="btn bg-[#D2B48C] w-full mt-4"
                    value="Add Product"
                />
            </form>
        </div>
    );
}
