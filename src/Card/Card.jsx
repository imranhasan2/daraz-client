

const Card = ({ product }) => {
    const { name, image, description, price, category, ratings, createdAt, brand } = product


    return (
        <div>

            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        className="w-64 h-64"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{price}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                        <div>
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">{ratings}</div>
                        </div>
                        <div>
                        <div className="badge badge-outline">{createdAt}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;