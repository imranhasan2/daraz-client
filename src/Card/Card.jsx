

const Card = ({ product,handlePaginate,setCurrentPage,currentPage }) => {
    const { name, image, description, price, category, ratings, createdAt, brand } = product


    return (
        <div className="w-96 bg-base-100 shadow-lg rounded-lg overflow-hidden mx-auto">
            <figure className="relative">
                <img
                    className="w-full h-40 object-cover"
                    src={image}
                    alt={name}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-2">
                    <div className="text-lg font-semibold">{price}</div>
                </div>
            </figure>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-700 text-sm mb-2">{description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{brand}</div>
                    <div className="badge badge-outline">{ratings}</div>
                </div>
                <div className="text-xs text-gray-500">{createdAt}</div>
            </div>
        </div>
    );
};

export default Card;