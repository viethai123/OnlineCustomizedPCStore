import * as React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, Button } from 'reactstrap';
import Cookies from 'js-cookie'

const UserProfile = (props : any) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleLogOutClick = () => {
        props.handleLogOut();
    }
    const user = Cookies.get('user')
    const name = Cookies.get('name')
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
            >
                {
                    user ? user : null
                }
      </DropdownToggle>
            <DropdownMenu>
                <h6>Welcome, {
                    name ? name : null
                }</h6>
                <div onClick={toggle}><Button onClick={() => handleLogOutClick()}>Log Out</Button></div>
            </DropdownMenu>
        </Dropdown>
    );
}

export default UserProfile;