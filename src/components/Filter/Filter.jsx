import React from 'react';
import './Filter.css';
import Flag from '../Flag/Flag'

export default function Filter(props) {
    return(
        <div className="filter">
            <div className="filter-name">
                <h1 onClick={() => window.location.reload(false)}>THE EXHIBIT</h1>
            </div>
            <div className="filter-search">
                <form autoComplete='off'  onSubmit={props.filterByTag}>
                    <input onChange={props.handleChange} name="currentTag" className='filter-search-bar' type="text" />
                    <button onSubmit={props.filterByTag} type='submit'><svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1564 0.751591C13.9855 0.754228 8.18888 3.71077 4.56396 8.70403C0.938634 13.6978 -0.0775976 20.1247 1.83052 25.9922C3.73918 31.8605 8.34064 36.4609 14.2099 38.3674C20.0787 40.2734 26.5053 39.255 31.4981 35.6281L41.1002 45.2303C41.8644 45.9945 42.9788 46.293 44.0229 46.0135C45.0672 45.7334 45.8825 44.9181 46.1626 43.8738C46.4421 42.8296 46.1436 41.7152 45.3794 40.9511L35.7773 31.3489C38.5819 27.4942 39.8572 22.7367 39.3578 17.996C38.8578 13.2554 36.6185 8.86859 33.0718 5.68313C29.5256 2.49767 24.9236 0.740493 20.1571 0.751024L20.1564 0.751591ZM20.1564 33.2623C16.6472 33.2623 13.2819 31.8685 10.8005 29.3871C8.31917 26.9057 6.92531 23.5404 6.92531 20.0312C6.92531 16.522 8.31917 13.1567 10.8005 10.6753C13.2819 8.19396 16.6472 6.8001 20.1564 6.8001C23.6656 6.8001 27.0309 8.19396 29.5123 10.6753C31.9937 13.1567 33.3875 16.522 33.3875 20.0312C33.3833 23.5388 31.9884 26.9021 29.5076 29.3824C27.0273 31.8632 23.6642 33.2582 20.1564 33.2623Z" fill="#565656"/></svg></button>
                </form>
            </div>
            <div className='filter-flags'>
                <div className='filter-flags-container'>
                    {props.flags.map(f => 
                        <Flag filterByFlag={props.filterByFlag} currentFlag={props.currentFlag} key={f} flag={f} />
                    )}
                    <select onChange={props.filterSort} className='filter-flags-filter' name='sort'>
                        <option value="all">Filter</option>
                        <option value="alphabetical">Alphabetical A - Z</option>
                        <option value="alpha">Alphabetical Z - A</option>
                        <option value="recent">Most Recent</option>
                        <option value="view">Most Viewed</option>
                        <option value="like">Most Liked</option>
                        <option value="comment">Most Comments</option>
                    </select>
                </div>
            </div>
        </div>
    )
}