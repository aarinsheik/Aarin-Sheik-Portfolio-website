
const Cards = ({ image , title , subtitle , link}) => {
  return (
    <a href={link} target="_blank" className="m-4 block max-w-sm overflow-hidden rounded-lg hover:bg-gray-900 transition duration-100">
        <div>
            <div className="rounded-md m-3 overflow-hidden"><img className="object-fill h-96" src={image} alt={title}/></div>
            <div className="flex flex-col justify-between p-4 text-white">
                <h2 className="mb-3 text-2xl font-bold">{title}</h2>
                <p className="mb-4 text-sm font-medium">{subtitle}</p>
            </div>
        </div>
    </a>
  )
}

export default Cards
