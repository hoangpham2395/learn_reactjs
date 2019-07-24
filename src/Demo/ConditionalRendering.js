import React from 'react';
import '../App.css';

// =======================================================
// Điều kiện if

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        // C1
        if (isLoggedIn) {
            button = <LogoutButton onClick={()=> {this.setState({isLoggedIn: false})}} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <h1>Demo conditional rendering</h1>
                <Greeting isLoggedIn={isLoggedIn} />
                {/* C1 */}
                {/*{button}*/}

                {/* C2: Viết điều kiện if else trong 1 dòng */}
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick}/>
                ) : (
                    <LoginButton onClick={this.handleLoginClick}/>
                )}
            </div>
        );
    }
}

// =======================================================
// Ex: Điều kiện if trong cùng 1 dòng

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Demo conditional rendering</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}

// =======================================================
// Preventing Component from Rendering

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick()
    {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <h1>Demo conditional rendering</h1>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

// =======================================================
class ConditionalRendering extends React.Component {
    render() {
        return <LoginControl />;

        // const messages = ['React', 'Re: React', 'Re:Re: React'];
        // return (
        //     <div>
        //         <Mailbox unreadMessages={messages}/>
        //     </div>
        // );

        // return <Page />
    }
}

export default ConditionalRendering;