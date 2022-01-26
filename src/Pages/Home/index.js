import React from 'react'
import './Home.css'
import Topfold from '../../components/Topfold'
import ExpenseList from '../../components/expense-list'
function Home() {
    return (
        <div className="home">
        <Topfold />
        <ExpenseList/>
        </div>
    )
}

export default Home
