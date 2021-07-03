import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const { name } = user;
  return (
    <div>
      <div style={{display: 'flex'}}>
          <p style={{fontFamily: 'Arial', textAlign: 'center'}}>
                  {name}
          </p>
          {/* {JSON.stringify(user.sub, null, 2)} */}
      </div>
      <Button 
          variant="contained" 
          size="small"
          style={{marginTop: '5px', maxWidth: '100px', maxHeight: '40px', minWidth: '50px', minHeight: '20px'}}
          onClick={() => logout({ returnTo: window.location.origin })}
          >
      Log Out
      </Button>
    </div>
  );
};

export default LogoutButton;