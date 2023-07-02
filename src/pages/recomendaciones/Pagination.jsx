import { useState } from "react"

function Pagination({servicesPerPage, currentPage, setCurrentPage, totalServices}) {

    const pageNumbers = []

    const pages = Math.ceil(totalServices / servicesPerPage)

    //definir a PageNumbers la cantidad de paginas a mostrar
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (nro) => {
        setCurrentPage(nro)
    }

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <div className="card-footer">
        <nav aria-label="Contacts Page Navigation">
            <ul className="pagination justify-content-center m-0">
            <li 
                className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={onPreviusPage}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: isHovered ? 'pointer' : 'default' }}
            >
                <a className="page-link">Atras</a>
            </li>
            
            {pageNumbers.map(nroPage => (
                <li 
                    className={`page-item ${nroPage === currentPage ? 'active' : ''}`} key={nroPage}
                    onClick={() => onSpecificPage(nroPage)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: isHovered ? 'pointer' : 'default' }}
                >
                    <a className="page-link">
                        {nroPage}
                    </a>
                </li>
            ))}

            <li 
                className={`page-item ${currentPage >= pageNumbers.length ? 'disabled' : ''}`} onClick={onNextPage}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: isHovered ? 'pointer' : 'default' }}
            >
                <a className="page-link">Siguiente</a>
            </li>
            </ul>
        </nav>
        </div>
    )
}

export default Pagination