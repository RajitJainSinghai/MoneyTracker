import React from 'react';
import Profilebar from '../components/Common/Profilebar';
import Sidebar1 from '../components/Common/Sidebar1';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import transactionpopup from '../components/Common/transactionpopup';

function Addtransaction() {
    const dispatch = useDispatch();
    return (
        <>
            <Sidebar1 />
            <transactionpopup />
            <p class="welcomeback">
                Welcome back: <span id="username">Mike Tyson</span>{' '}
            </p>
            <ul class="container">
                <li class="menu">
                    <div class="dasboardheading">
                        <p class="dashboardpara">Dashboard</p>
                        <p class="calculatebudget">
                            Calculate your first budget by providing <br />
                            Your income and expense details
                        </p>
                        <button class="transactionbutton" onClick={() => dispatch(push('/Transaction'))}>
                            ADD TRANSACTIONS
                        </button>
                    </div>
                </li>
            </ul>

            <Profilebar />
        </>
    );
}

export default Addtransaction;
