import React from 'react';

export default function SearchBar({search, setSearch}) {
    return(
    <input autoComplete="off" name="search" type="text"
        value={search}
        onChange={e => setSearch(e)} 
        placeholder="Search.." />  
    )
}