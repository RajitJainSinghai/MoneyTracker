import React, { useState } from 'react';
import income from '../assets/img/income.png';
import card from '../assets/img/card.png';
import summary from '../assets/img/summary.png';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import Sidebar1 from '../components/Common/Sidebar1';
import { signOut } from '../reducks/users/operations';

const Home = () => {
    const dispatch = useDispatch();
    const key = localStorage.getItem('BUDGET_NOTEBOOK_LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };
    return (
        <div>
            {key ? (
                <button class="signup" onClick={signOutButton}>
                    Logout
                </button>
            ) : (
                <button class="signup">
                    {' '}
                    <span id="sign" onClick={() => dispatch(push('/signin'))}>
                        Sign in
                    </span>{' '}
                    | <span onClick={() => dispatch(push('/signup'))}>Sign up</span>{' '}
                </button>
            )}

            <Sidebar1 />
            <ul class="container">
                <li class="menu">
                    <div class="paragraphs">
                        <h1 class="welcome">Welcome</h1>
                        <p class="paragraph1">
                            Sign up and Manage <br />
                            Your Budget
                        </p>

                        <p class="paragraph2">
                            Note down your expenditure and income, <br />
                            then check your balance everyday
                        </p>
                    </div>

                    <img class="income" src={income} alt="" />
                    <div class="rightcards">
                        <img class="card" src={card} alt="" />
                        <img class="summary" src={summary} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Home;
