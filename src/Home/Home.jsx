import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";





const Home = () => {


    const [search, setSearch] = useState('')

    const [sortPrice, setSortPrice] = useState("priceLowToHigh")

    const [currentPage, setCurrentPage] = useState(1)
    const [postParPage, setPostParPage] = useState(5)







    const url = `http://localhost:3000/products?search=${search}&sortPrice=${sortPrice}&limit=${postParPage}&page=${currentPage}`

    const { data, refetch } = useQuery({
        queryKey: ['product', search, sortPrice, currentPage],
        queryFn: async () => {
            const data = await axios.get(url)
            return data.data

        }
    }
    )


    // pagination..
    const products = data?.result || [];
    const totalCount = data?.totalCount;

    const totalPage = Math.ceil(totalCount / postParPage)

    let number = []

    for (let i = 1; i <= totalPage; i++) {
        number.push(i)

    }

    const handlePaginate = (page) => {
        setCurrentPage(page)
        refetch()
    }


    // sort
    const handleSort = e => {
        setSortPrice(e.target.value)
        setCurrentPage(1);
        refetch()
    }


    // search

    const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.search.value
        setSearch(searchText)
        setCurrentPage(1);
        console.log(searchText)
        refetch()

    }


    // filter product....

    const handleBrandChange = (e) => {

    }
    const handleCategoryChange = (e) => {

    }
    const handlePriceRangeChange = (e) => {

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
                            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 m-2"
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
            {/* filter */}
            <div className="flex justify-center sm:gap-2 gap-5">
                <h2 className=""> Filter Products</h2>
                <div>
                    <label>Brand:</label>
                    <select onChange={handleBrandChange}>
                        <option value="">All</option>
                        <option value="Apple">Apple</option>
                        <option value="Sony">Sony</option>
                        <option value="Philips">Philips</option>
                    </select>
                </div>

                <div>
                    <label>Category:</label>
                    <select onChange={handleCategoryChange}>
                        <option value="">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Home Appliances">Home Appliances</option>
                    </select>
                </div>

                <div>
                    <label>Price Range:</label>
                    <select onChange={handlePriceRangeChange}>
                        <option value="">All</option>
                        <option value="0-50">0 - 50</option>
                        <option value="51-100">51 - 400</option>
                        <option value="101-200">401 - 2000</option>
                    </select>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">

                {products?.map((product, idx) => (<Card key={idx} product={product} setCurrentPage={setCurrentPage} handlePaginate={handlePaginate} currentPage={currentPage} />)

                )}
            </div>
            <div className="flex justify-center items-center space-x-2 mt-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePaginate(currentPage - 1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>

                {number.map((pageNum) => (
                    <button
                        key={pageNum}
                        className={`px-4 py-2 rounded-lg ${currentPage === pageNum
                                ? 'bg-blue-500 text-white font-bold'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                            }`}
                        onClick={() => handlePaginate(pageNum)}
                    >
                        {pageNum}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPage}
                    onClick={() => handlePaginate(currentPage + 1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;