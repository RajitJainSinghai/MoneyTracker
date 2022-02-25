import React, { useState } from 'react';
import Sidebar1 from '../components/Common/Sidebar1';
import searchicon from '../assets/img/searchicon.png';
import invoice from '../assets/img/invoice 1.png';
import Profilebar from '../components/Common/Profilebar';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import Transactionpopup from '../components/Common/Transactionpopup';

function Transaction() {
    const dispatch = useDispatch();
    const [, setShowNewinvoice] = useState(false);

    const clickNewinvoice = () => {
        setShowNewinvoice(true);
    };

    return (
        <>
            <div class="welcomeback!">
                Welcome Back! <span id="Mike">MikeTyson</span>
            </div>

            <Sidebar1 />
            <ul class="container">
                <li class="menu">
                    <div class="transactionlistheadings">
                        <p class="paratransaction">
                            Transaction List <br />
                            <span id="lorem">Lorem ipsum dolor</span>
                        </p>

                        <input class="searchbar" type="text" placeholder="Search here" />
                        <img class="searchicon" src={searchicon} alt="" />
                        <button class="invoicebutton" onClick={clickNewinvoice}>
                            <img class="invoice" src={invoice} alt="" />
                            <span class="newInvoices"> + new invoices </span>
                        </button>
                    </div>

                    <table>
                        <tr>
                            <th>Categories</th>
                            <th>name</th>
                            <th>Date</th>
                            <th>Cost</th>
                        </tr>
                        <tr>
                            <td>Income/Expanses</td>
                            <td>Food</td>
                            <td>14/02/2022</td>
                            <td>
                                $2000
                                <img class="dotsimg" src="./images/dots.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>Income/Expanses</td>
                            <td>Food</td>
                            <td>14/02/2022</td>
                            <td>
                                $200
                                <img class="dotsimg" src="./images/dots.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>Income/Expanses</td>
                            <td>Food</td>
                            <td>14/02/2022</td>
                            <td>
                                $2000
                                <img class="dotsimg" src="./images/dots.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>Income/Expanses</td>
                            <td>Food</td>
                            <td>14/02/2022</td>
                            <td>
                                $2000
                                <img class="dotsimg" src="./images/dots.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>Income/Expanses</td>
                            <td>Food</td>
                            <td>14/02/2022</td>
                            <td>
                                $2000
                                <img class="dotsimg" src="./images/dots.png" alt="" />
                            </td>
                        </tr>
                    </table>
                </li>
            </ul>
            <Profilebar />
        </>
    );
}

export default Transaction;
