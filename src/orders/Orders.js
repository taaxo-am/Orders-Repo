import React from 'react';
import img from './img.png'
import avatar from './avatar.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import card from './card.png'

const data = [
    {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    },
    {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    },
    {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    },
    {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    },
    {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
        'action': '...',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
    }, {
        'id': 9,
        'number': '#214234',
        'name': 'Yasir Yare',
        'Address': 'Xero Awr',
        'status': 'Pending',
    },
]

const Orders = () => {
    return (
        <div className='container-fluid bg-light p-0'>

            {/* CENTER */}
            <div className='w-100 vh-100 m-0 p-0'>

                {/* NAVBAR */}
                <nav className='navbar bg-white shadow-sm'>
                    <p className='navbar-brand m-2 ml-4'><i className='mr-4 fa fa-shopping-cart'/>Orders Dashboard
                    </p>
                    <div className='d-flex flex-grow-1 justify-content-end align-items-center mr-2'>
                        <div className='d-md-flex align-items-center d-none'>
                            <span className='username'>Nuradiin</span>
                        </div>

                        <div className='dropdown dropleft'>
                            <i id='dropdownMenuButton' className='more lightHover fa fa-chevron-down mr-4 ml-4'
                               data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a href='#' className="dropdown-item" type="button">Logout</a>
                            </div>
                        </div>

                        <img className='border h-50 border-primary rounded-circle' src={avatar} alt=""/>
                    </div>
                </nav>

                {/* CONTENT */}

                <d-flex className="flex-column justify-content-center m-0 p-0">
                    <h4 className='m-4'>Order Details</h4>

                    <div className='row m-0 mb-4 pl-4 pr-4'>
                        <div className='col-4 p-0'>
                            <div className='bg-white d-flex align-items-center border shadow-sm rounded p-3'>
                                <img src={card} alt=""/>
                                <div className='ml-4'>
                                    <h3 className='text-danger m-0'>32</h3>
                                    <p className='m-0'>New Orders</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 p-0'>
                            <div className='d-flex bg-white align-items-center border shadow-sm rounded ml-4 p-3'>
                                <img src={card} alt=""/>
                                <div className='ml-4'>
                                    <h3 className='text-danger m-0'>12</h3>
                                    <p className='m-0'>Total Processing Orders</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 p-0'>
                            <div className='bg-white d-flex align-items-center border shadow-sm rounded ml-4 p-3'>
                                <img src={card} alt=""/>
                                <div className='ml-4'>
                                    <h3 className='text-danger m-0'>5</h3>
                                    <p className='m-0'>Total Completed Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row m-0 pl-4 pr-4'>

                        <div className='card col-8 p-0'>
                            <table className='table table-borderless table-hover'>
                                <thead className='card-header text-center'>
                                {
                                    ['Order No#', 'Order Name', 'Address', 'Status', 'Actions'].map(col => {
                                        return (
                                            <th>{col}</th>
                                        )
                                    })
                                }
                                </thead>
                                <tbody>
                                {
                                    data.map(obj => {
                                        const keys = Object.keys(obj)
                                        return (
                                            <tr key={obj.id}>
                                                {
                                                    keys.map(key => {
                                                        if (key !== keys[0])
                                                            return (
                                                                <td key={key} className='border'>
                                                                    <p className='text-center'>{obj[key]}</p>
                                                                </td>
                                                            )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })

                                }
                                </tbody>
                            </table>
                        </div>

                        <div className='col-4 p-0'>
                            <div className='ml-4 card'>
                                <div className='card-header text-center'>
                                    <i className='fa fa-chevron-left'/>
                                    <span className='m-5'>December 2020</span>
                                    <i className='fa fa-chevron-right'/>
                                </div>
                                <div className='card-body bg-white'>
                                    <table className='table table-borderless bg-light m-0'>
                                        <thead className='bg-white'>
                                        <td>Sat</td>
                                        <td>Sun</td>
                                        <td>Mon</td>
                                        <td>Tue</td>
                                        <td>Wed</td>
                                        <td>Thur</td>
                                        <td>Fri</td>
                                        </thead>
                                        <tbody className='bg-white'>
                                        <tr>
                                            <td className='text-muted'>29</td>
                                            <td className='text-muted'>30</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                        </tr>
                                        <tr>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td>27</td>
                                            <td>28</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </d-flex>
            </div>
        </div>
    );
};

export default Orders;
