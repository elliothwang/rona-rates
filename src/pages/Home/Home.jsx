import React  from 'react';
import * as userService from '../../utilities/users-service';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <React.Fragment>
      <h1>Home!</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </React.Fragment>
  );
}