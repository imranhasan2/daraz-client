import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";





const Home = () => {

    // const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const [sortPrice, setSortPrice] = useState("priceLowToHigh")


    const url = `http://localhost:3000/products?search=${search}&sortPrice=${sortPrice}`

    const { data: products = [], refetch } = useQuery({
        queryKey: ['product', search,sortPrice],
        queryFn: async () => {
            const { data } = await axios.get(url)
            return data
        }
    }
    )


    // sort
    const handleSort = e => {
        setSortPrice(e.target.value)
        refetch()
    }


    // search

    const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.search.value
        setSearch(searchText)
        console.log(searchText)
        refetch()

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="flex justify-around items-center m-6">
                <div>
                    <form className=" m-6 space-x-4" onSubmit={handleSearch} action="">
                        <input
                            className="border border-gray-300 rounded-lg p-2 w-64"
                            type="text"
                            name="search"
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div>


                    <h2 className="text-xl font-semibold mb-4">Sort By</h2>
                    <select
                        onChange={handleSort}
                        value={sortPrice}

                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm">
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="dateNewest">Date Added: Newest First</option>
                    </select>

                </div>
            </div>
            <div>
                <h2> Filter Products</h2>
                <select name="" >
                    <option value="category">category</option>
                    <option value="price">price</option>
                    <option value="brand">brand</option>
                </select>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">

                {products.map((product, idx) => (<Card key={idx} product={product} />)

                )}
            </div>
        </div>
    );
};

export default Home;