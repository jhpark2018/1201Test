import React from 'react'
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md'
const ExpenseList = ({initialExpenses,handleDelete,handleEdit,clearItems})=>{    
    return (
        <>
        <ul className='list'>
            {/* <ExpenseItem /> */}
            {initialExpenses.map(expense=>{
              return (
                <ExpenseItem 
                expense={expense}
                key={expense.id}
                handleDelete={handleDelete}
                handleEdit = {handleEdit}
                />
                )
            })}            
           
        </ul>
        {ExpenseList.length > 0 && (
        <button className='btn' onClick={clearItems}>
            목록지우기
            <MdDelete className="btn-icon" />
        </button>
        )}
        </>
    )
 
}

export default ExpenseList