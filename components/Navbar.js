import React,{useRef} from 'react'
import Link from 'next/link'

const Navbar = () => {

    const list = useRef()
    const openMenu = () => {
        list.current.classList.toggle('open')
    }

    return (
        <nav>
            <button className="icon" onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul ref={list}>
                <li>
                    <Link href="">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>Cart</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>Invoice</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        <style jsx>{`
            nav{
                height:60px;
                background-color:#000;
                padding:10px;
                position:fixed;
                left:0;
                right:0;
                top:0;
                z-index:99;
            }
            ul{
                height:40px;
                display:flex;
                justify-content:space-evenly;
                align-items:center;
            }
            a{
                text-decoration:none;
                color:#fff;
            }
            .icon{
                display:none;
            }
            @media only screen and (max-width:768px){
            .icon{
                width:40px;
                height:40px;
                padding:7px;
                background-color:transparent;
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
                border:1px solid #fff;
                outline:none;
                border-radius:5px;
                position:absolute;
                right:10px;
                top:10px;
                z-index:100;
            }
            .icon span{
                width:80%;
                border-bottom:2px solid #fff;
            }
            ul{
                position:fixed;
                right:-100%;
                top:0;
                bottom:0;
                width:100%;
                height:100vh;
                background-color:#000;
            }
            ul.open{
                right:0;
                flex-direction:column;
            }
        }
        `}</style>
        </nav>
    )
}

export default Navbar;
