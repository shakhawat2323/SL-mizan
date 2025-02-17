import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import {
  FaDollarSign,
  FaHouseMedicalCircleXmark,
  FaUsers,
} from "react-icons/fa6";

const AdminDeshborde = () => {
  const { user } = useAuth();
  const axiosSecore = useAxios();
  const { data: state = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecore.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <div>
        <span className="mr-3">Hi Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </div>
      <div>
        <div className="stats shadow ">
          <div className="stat">
            <div className="stat-figure text-secondary ">
              <FaUsers className="text-4xl font-bold" />
            </div>
            <div className="stat-title">users</div>
            <div className="stat-value">{state.users}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Items</div>
            <div className="stat-value">{state.menu}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-5xl font-bold" />
            </div>
            <div className="stat-title">Order</div>
            <div className="stat-value">{state.revenue}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">{state.revenew}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDeshborde;
