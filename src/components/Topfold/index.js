import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './topfold.css'
import {useDispatch} from "react-redux";
import { searchExpense } from '../../redux/actions/expenses';

function Topfold() {
    const dispatch = useDispatch();
    const[query, setQuery] = useState("");
   const handlequery=(e)=>{
setQuery(e.target.value);
dispatch(searchExpense(e.target.value));
   }
    return (
        <div className="topfold">
        {window.location.pathname=== '/' ? (

            <div className="home-topfold">
            <div className="searchbar">
            <i className="fi fi-rr-search"></i>
            <input placeholder="Search for expenses" value={query}
            onChange={(e)=>handlequery(e)}/>
            </div>
            <Link to="/add-expense">
            <div className="add-button">
            <i className="fi fi-rr-add"></i>Add
            </div>
            </Link>
            </div>
            ) : (
                <div className="add-topfold">
                <Link to ='/'>
                <div className="add-topfold-button">
                <i className="fi fi-rr-angle-left"></i>
                <label>Back</label>
                </div>
                </Link>
                <Link to='/'>
                <div className="add-topfold-button">
                <i className="fi fi-rr-cross-circle"></i>
                <label>Cancel</label>
                </div>
                </Link>
                </div>
            )}
        </div>
    );
}

export default Topfold
