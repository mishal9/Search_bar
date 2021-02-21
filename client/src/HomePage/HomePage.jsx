import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function HomePage()  {

    const [artist, setArtist] = useState('')
    const [pager, setPager] = useState({})
    const [pageOfItems, setPageOfItems] = useState([])

    function changeHandler(event) {
        setArtist(event.target.value)
    };

    async function submitHandler() {        
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1;
        if(artist.trim().length > 0){
            const response = await fetch(`https://search-flask-app.herokuapp.com/api/query?artist=${artist.trim()}&page=${page}`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });

            if(response.status === 200){
                const data = await response.json();
                setPageOfItems(data.pageOfItems);
                setPager(data.pager);
            }
        }
    };

    return (     
        <div>    
            
        <div className="card text-center m-3">
        
            <div className="card-body">
            
            <input id="name" 
                    type="text" 
                    autoComplete="off"
                    placeholder="Search an artist" 
                    onChange={changeHandler} 
                    name="artist" 
                    required>
            </input>
                    
            <button type="submit" onClick={submitHandler}>SEARCH</button>
            
                <br/>
                <br/>
                {pageOfItems && pageOfItems.map(item =>
                    <div key={item.id}>{item.artistName}
                    </div>
                )}
            </div>
            <div className="card-footer pb-0 pt-3">
                {pager.pages && pager.pages.length === 0 &&
                    <p>No results found</p>
                }     
                {pager.pages && pager.pages.length > 0 &&
                    <ul className="pagination">
                        <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                            <Link onDoubleClick={submitHandler} to={{ search: `?page=1` }} className="page-link">First</Link>
                        </li>
                        <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                            <Link onDoubleClick={submitHandler} to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link">Previous</Link>
                        </li>
                        {pager.pages.map(page =>
                            <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                                <Link onDoubleClick={submitHandler} to={{ search: `?page=${page}` }} className="page-link">{page}</Link>
                            </li>
                        )}
                        <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                            <Link onDoubleClick={submitHandler} to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link">Next</Link>
                        </li>
                        <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                            <Link onDoubleClick={submitHandler} to={{ search: `?page=${pager.totalPages}` }} className="page-link">Last</Link>
                        </li>
                    </ul>
                }                    
            </div>
        </div>
        </div>
    );
}

export { HomePage };