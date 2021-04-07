import axios from "axios"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

const AddProduct = () => {
    const { register, handleSubmit } = useForm()
    const [imageURL, setImageURL] = useState(null)
    const [imageUploaded, setImageUploaded] = useState(false)

    const onSubmit = (data) => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL,
        }
        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(productData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set("key", "8768f8c2ea66c07b958a93a038d4067a")
        imageData.append("image", event.target.files[0])

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url)
                setImageUploaded(true)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h1>Add Book</h1>
                    <form
                        name="form"
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Book Name"
                            className="form-control"
                            {...register("name")}
                        />
                        <br />
                        <input
                            type="text"
                            name="price"
                            placeholder="Book Price"
                            className="form-control"
                            {...register("price")}
                        />
                        <br />
                        <input type="file" onChange={handleImageUpload} />
                        {imageUploaded ? (
                            <input type="submit" value="Submit" />
                        ) : (
                            <p>Uploading ....</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
