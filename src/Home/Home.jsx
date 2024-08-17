import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";





const Home = () => {

    // const [data, setData] = useState([])
    const [search, setSearch] = useState('')


   

    const { data: products = [] ,refetch } = useQuery({
        queryKey: ['product',search],
        queryFn:async() =>{
         const {data} =await axios.get(`http://localhost:3000/products?search=${search}`)
         return data
        }
    }
    )




    const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.search.value
        setSearch(searchText)
        console.log(searchText)
        refetch ()


    }

    return (
        <div>
            <Navbar></Navbar>

            <form className="flex justify-center items-center m-6 space-x-4" onSubmit={handleSearch} action="">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">

                {products.map((product, idx) => (<Card key={idx} product={product} />)

                )}
            </div>
        </div>
    );
};

export default Home;