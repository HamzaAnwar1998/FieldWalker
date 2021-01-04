import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'


export const Home = () => {
    return (
        <div className='home-box'>
            <div className='field-walker-box'>
                {/* navbar */}
                <div className='navbar'>
                    <div className='toggler-icon'>
                        <span><Icon icon={menu} size={32} /></span>
                    </div>
                    <div className='heading'>Field Walker For Disables</div>
                    <div className='signup-login-links'>
                        <span><Link to='signup' className='link2'>Signup</Link></span>
                        <span><Link to='/' className='link2'>Login</Link></span>
                    </div>
                </div>
                {/* table */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Categories of job</th>
                            <th scope="col">Available jobs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Audit</th>
                            <td>50</td>
                        </tr>
                        <tr>
                            <th scope="row">General</th>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row">Mystery Shop</th>
                            <td>60</td>
                        </tr>
                        <tr>
                            <th scope="row">Survey</th>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-box'>
                On the very first page, we will enable signup login and job categories along
                with the no of jobs in per category and a combo box.
            </div>
        </div>
    )
}
