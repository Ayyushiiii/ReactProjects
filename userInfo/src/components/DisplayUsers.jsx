import React from 'react'
import styled from 'styled-components'
import {useSelector,  useDispatch} from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import {removeUser} from '../store/slices/userSlice'

const DisplayUsers = () => {
    const data = useSelector((state)=>{
        return state.users
    })
    const dispatch = useDispatch();

    const deleteUser = (id) =>{
      dispatch(removeUser(id))
    }
    // console.log(data)
  return (
    <Wrapper>
    {data.map((user, id)=>{
       return <li key={id}>
        {user}
        <button className='btn btn-delete'>
          <MdDeleteForever className='delete-icon' onClick= {()=>deleteUser(id)}/>
        </button>
       </li>
    })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
li{
width:100%;
display:flex;
align-items:center;
justify-content: space-between;
padding:1rem;
border-bottom: 1px solid #eee

&:first-child{
border-top: 1px solid #eee
}

$delete-red: red;

body {
  margin: 32px;
}

.btn {
  display: flex;
  align-items: center;
  background: none;
  border:none;
  height: 48px;
  padding: 0 24px 0 16px;
  letter-spacing: .25px;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  
  .mdi {
    margin-right: 8px;
  }
}

.btn-delete {
  font-size: 16px;
  height: 12px
  color: red;
  
  >.mdi-delete-empty {
    display: none;
  }
  
  &:hover {
    background-color: lighten(red, 48%);
    
    >.mdi-delete {
      display: none;
    }
  }
  
  &:focus {
    box-shadow: 0 0 0 4px lighten(red, 40%);
  }
}
}

`

export default DisplayUsers