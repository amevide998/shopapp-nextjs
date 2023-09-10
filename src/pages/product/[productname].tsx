import { useRouter } from "next/router"

const DetailProduct = () => {
    const route = useRouter()
    console.log(route)
    return (
        <div>
            <h1>Detail Product</h1>
            <h2>Product Name : {route.query.productname}</h2>
        </div>
    )
}

export default DetailProduct