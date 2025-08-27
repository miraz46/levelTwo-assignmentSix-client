import React, { useState } from "react";
import { useGetAllStatsQuery, useUpdateUserMutation } from "@/redux/features/admin/admin.api";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Input, Button } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useGetAllStatsQuery();
  const [updateUser] = useUpdateUserMutation();

  const [userSearch, setUserSearch] = useState("");
  const [rideFilter, setRideFilter] = useState({ status: "", driver: "", rider: "", date: "" });

  if (isLoading) return <p>Loading...</p>;

  const filteredUsers = stats?.users.filter((u: any) =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  const handleUserAction = async (userId: string, action: string) => {
    await updateUser({ userId, action });
  };

  const filteredRides = stats?.rides.filter((ride: any) =>
    (rideFilter.status ? ride.status === rideFilter.status : true) &&
    (rideFilter.driver ? ride.driver.name.includes(rideFilter.driver) : true) &&
    (rideFilter.rider ? ride.rider.name.includes(rideFilter.rider) : true) &&
    (rideFilter.date ? new Date(ride.date).toDateString() === new Date(rideFilter.date).toDateString() : true)
  );

  const monthlyData = stats?.monthlyStats || [
    { month: "Jan", rides: stats.totalRides, revenue: stats.totalRevenue },
  ];

  const userRoleDistribution = [
    { name: "Riders", value: stats.activeRiders, color: "#3b82f6" },
    { name: "Drivers", value: stats.activeDrivers, color: "#10b981" },
  ];

  return (
    <div className="p-6 space-y-8">

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Ride & Revenue</CardTitle>
            <CardDescription>Ride volume & revenue trends</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rides" stroke="#3b82f6" />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
            <CardDescription>Riders vs Drivers</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={userRoleDistribution} dataKey="value" cx="50%" cy="50%" outerRadius={60} label>
                  {userRoleDistribution.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* User Management */}
      <div>
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <Input placeholder="Search users" value={userSearch} onChange={e => setUserSearch(e.target.value)} className="mb-4"/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers?.map((user: any) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUserAction(user._id, user.blockedStatus === "BLOCKED" ? "unblock" : "block")}>
                    {user.blockedStatus === "BLOCKED" ? "Unblock" : "Block"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Ride Oversight */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Ride Oversight</h2>
        <div className="flex gap-2 mb-4">
          <Input placeholder="Status" value={rideFilter.status} onChange={e => setRideFilter({...rideFilter, status: e.target.value})}/>
          <Input placeholder="Driver" value={rideFilter.driver} onChange={e => setRideFilter({...rideFilter, driver: e.target.value})}/>
          <Input placeholder="Rider" value={rideFilter.rider} onChange={e => setRideFilter({...rideFilter, rider: e.target.value})}/>
          <Input type="date" value={rideFilter.date} onChange={e => setRideFilter({...rideFilter, date: e.target.value})}/>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rider</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Fare</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRides?.map((ride: any) => (
              <TableRow key={ride._id}>
                <TableCell>{ride.rider.name}</TableCell>
                <TableCell>{ride.driver.name}</TableCell>
                <TableCell>{ride.status}</TableCell>
                <TableCell>{ride.fare}</TableCell>
                <TableCell>{new Date(ride.date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
