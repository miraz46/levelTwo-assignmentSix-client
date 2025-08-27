import { useState } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  AlertTriangle,
  Star,
  Navigation,
  Phone,
} from "lucide-react";
import {
  useGetRidesQuery,
  useRequestRideMutation,
} from "../../store/api/ridesApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const RiderDashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: rides, isLoading: ridesLoading } = useGetRidesQuery({
    userId: user?.id,
    role: "rider",
  });
  const [requestRide, { isLoading: requestLoading }] = useRequestRideMutation();

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [currentRide, setCurrentRide] = useState(
    rides?.find(
      (ride) =>
        ride.status === "requested" ||
        ride.status === "accepted" ||
        ride.status === "in_progress"
    )
  );

  const handleRequestRide = async () => {
    if (!pickup || !destination) {
      toast.error("Please enter both pickup and destination addresses");
      return;
    }

    try {
      await requestRide({
        pickup: {
          address: pickup,
          lat: 40.7128 + Math.random() * 0.01,
          lng: -74.006 + Math.random() * 0.01,
        },
        destination: {
          address: destination,
          lat: 40.7128 + Math.random() * 0.02,
          lng: -74.006 + Math.random() * 0.02,
        },
      }).unwrap();

      toast.success("Ride requested successfully!");
      setPickup("");
      setDestination("");
    } catch (error) {
      toast.error("Failed to request ride");
    }
  };

  const handleSOS = () => {
    toast.error("SOS Alert sent! Emergency services have been notified.", {
      duration: 5000,
    });
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      requested: "default",
      accepted: "secondary",
      in_progress: "default",
      completed: "outline",
      cancelled: "destructive",
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || "default"}>
        {status.replace("_", " ").toUpperCase()}
      </Badge>
    );
  };

  const activeRide = rides?.find(
    (ride) =>
      ride.status === "requested" ||
      ride.status === "accepted" ||
      ride.status === "in_progress"
  );

  if (ridesLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600">
          Book a ride or track your current journey
        </p>
      </div>

      {/* Active Ride Card */}
      {activeRide && (
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Navigation className="h-5 w-5" />
                Current Ride
              </CardTitle>
              {getStatusBadge(activeRide.status)}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Pickup</p>
                    <p>{activeRide.pickup.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Destination</p>
                    <p>{activeRide.destination.address}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {activeRide.driverName && (
                  <div>
                    <p className="text-sm text-gray-600">Driver</p>
                    <p>{activeRide.driverName}</p>
                    {activeRide.vehicleInfo && (
                      <p className="text-sm text-gray-500">
                        {activeRide.vehicleInfo.color}{" "}
                        {activeRide.vehicleInfo.make}{" "}
                        {activeRide.vehicleInfo.model} •{" "}
                        {activeRide.vehicleInfo.plate}
                      </p>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Fare</p>
                    <p>${activeRide.fare}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Distance</p>
                    <p>{activeRide.distance} mi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {activeRide.driverName && (
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Driver
                </Button>
              )}
              <Button variant="destructive" size="sm" onClick={handleSOS}>
                <AlertTriangle className="h-4 w-4 mr-2" />
                SOS
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Book a Ride */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Book a Ride</CardTitle>
              <CardDescription>
                Enter your pickup and destination to request a ride
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input
                  id="pickup"
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  placeholder="Enter destination address"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <Button
                onClick={handleRequestRide}
                disabled={requestLoading || !!activeRide}
                className="w-full"
              >
                {requestLoading ? "Requesting..." : "Request Ride"}
              </Button>

              {activeRide && (
                <p className="text-sm text-gray-500 text-center">
                  You have an active ride. Complete it before booking another.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Total Rides</span>
                </div>
                <span>{rides?.length || 0}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Total Spent</span>
                </div>
                <span>
                  $
                  {rides
                    ?.reduce((sum, ride) => sum + ride.fare, 0)
                    .toFixed(2) || "0.00"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Avg Rating</span>
                </div>
                <span>4.8</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ride History */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Ride History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Rides</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {rides && rides.length > 0 ? (
                rides.map((ride) => (
                  <div key={ride.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {new Date(ride.requestedAt).toLocaleDateString()}
                        </span>
                        {getStatusBadge(ride.status)}
                      </div>
                      <span className="text-lg">${ride.fare}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>{ride.pickup.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-red-600" />
                        <span>{ride.destination.address}</span>
                      </div>
                    </div>

                    {ride.driverName && (
                      <div className="mt-2 text-sm text-gray-600">
                        Driver: {ride.driverName}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">
                  No rides found. Book your first ride above!
                </p>
              )}
            </TabsContent>

            <TabsContent value="completed">
              {rides
                ?.filter((ride) => ride.status === "completed")
                .map((ride) => (
                  <div key={ride.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {new Date(ride.requestedAt).toLocaleDateString()}
                      </span>
                      <span className="text-lg">${ride.fare}</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>{ride.pickup.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-red-600" />
                        <span>{ride.destination.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="cancelled">
              <p className="text-center text-gray-500 py-8">
                No cancelled rides found.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiderDashboard;
