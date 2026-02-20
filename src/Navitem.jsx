import { Link } from 'react-router-dom'


const Navitem = ({ to, label, icons, showLabel }) => {
    return (
        <>
            <div>
                <Link
                    to={to}
                    className={`max-sm:text-lg max-sm:gap-3 max-sm:flex max-sm:my-3 max-sm:border-b max-sm:border-b-gray-500 max-sm:leading-8 lg:text-lg lg:font-semibold lg:flex lg:gap-3 lg:mb-5 lg:mx-4 ${showLabel ? "transition hover:scale-115 hover:translate-x-3 duration-400" : ""}`}>
                    {icons && <span>{icons}</span>}
                    {label && (
                        <span
                            className={` text-nowrap transition-all delay-80 duration-100 ${showLabel ? "opacity-100" : "opacity-0"
                                }`}>
                            {label}
                        </span>
                    )}
                </Link>
            </div>
        </>
    )
}

export default Navitem