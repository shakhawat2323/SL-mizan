import React from "react";
import useAuth from "../../Hooks/useAuth";

const UserDashborde = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <span className="mr-3">Hi Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </div>
    </div>
  );
};

export default UserDashborde;
