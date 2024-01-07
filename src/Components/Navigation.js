import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../utils/menuItems';
import { signout } from '../utils/icons';
import avatar from '../img/avatar.png'


function Navigation({active,setActive}) {
  return (
    <NavStyled>
      <div className='user-con'>
        <img src={avatar} alt="" />
        <div className='text'>
            <h2>Adhiraj</h2>
            <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item)=>{
            return  <li
              key={item.id}
              onClick={()=> setActive(item.id)}
              className={active === item.id ? 'active':''}
            >
                {item.icon}<span>{item.title}</span>
            </li>
        })}
      </ul>
      <div className='bottom-nav'>
        <li>
            {signout} Sign Out
        </li>
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height:100%;
    background: rgba(40, 40, 40, 0.8);
    border: 3px solid rgb(240, 240, 225);
    border-radius: 32px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .user-con img {
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid rgb(240, 240, 225);
      padding: .2rem;
      box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
    }
    h2{
      color: rgb(240, 240, 225, 1)
    }
    p{
      color: rgb(240, 240, 225, 0.6)
    }

    .menu-items{
      flex:1;
      display: flex;
      flex-direction: column;
      li{
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center; // Vertically align grid items
        cursor:pointer;
        margin: 1.5rem 0;
        transition: all .4s ease-in-out;
        padding-left: 1rem;
        position: relative;
        padding-top: 1rem;    // Add padding on top
        padding-bottom: 1rem; // Add padding on bottom
        line-height: 1.6;
        border-radius: 20px;
        i{
          color: rgba(240, 240, 225,1);
          font-size: 1.4rem;
          transition: all .4s ease-in-out;
          display: flex;
          justify-content: center; // Horizontally center the icon
          align-items: center; // Vertically center the icon
        }
        &:hover {
          background-color: rgba(21, 139, 216,0.7) 
        }
      }
      span {
        display: flex;
        align-items: center; // Vertically center the text
        margin-left: 0.5rem; // Add some margin if needed for better spacing
        color: rgba(240, 240, 225,0.6);
      }
    }
    .active{
      background-color: rgba(21, 139, 216,0.7);
      color: rgba(240, 240, 225,1) !important ;
      span{
        color: rgba(240, 240, 225,1); !important;
      }
      i{
        color: rgba(240, 240, 225,1); !important;
      }
      &::before{
        content:"",
        position:absolute;
        left:0;
        top:0;
        width:4px;
        height:100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
      }
    }
`;

export default Navigation
