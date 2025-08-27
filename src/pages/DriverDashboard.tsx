import { useState } from 'react'
import { Car, DollarSign, Clock, MapPin, ToggleLeft, ToggleRight, Star, TrendingUp } from 'lucide-react'
import { useGetRidesQuery, useAcceptRideMutation, useUpdateRideStatusMutation } from '../../store/api/ridesApi'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Switch } from '../ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Progress } from '../ui/progress'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { toast } from "sonner@2.0.3"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const DriverDashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const { data: rides, isLoading: ridesLoading } = useGetRidesQuery({ 
    userId: user?.id, 
    role: 'driver' 
  })
  const [acceptRide] = useAcceptRideMutation()
  const [updateRideStatus] = useUpdateRideStatusMutation()
  
  const [isOnline, setIsOnline] = useState(true)
  
  // Mock data for charts
  const weeklyEarnings = [
    { day: 'Mon', earnings: 85 },
    { day: 'Tue', earnings: 120 },
    { day: 'Wed', earnings: 95 },
    { day: 'Thu', earnings: 140 },
    { day: 'Fri', earnings: 180 },
    { day: 'Sat', earnings: 220 },
    { day: 'Sun', earnings: 160 },
  ]

  const handleAcceptRide = async (rideId: string) => {
    try {
      await acceptRide(rideId).unwrap()
      toast.success('Ride accepted successfully!')
    } catch (error) {
      toast.error('Failed to accept ride')
    }
  }

  const handleUpdateStatus = async (rideId: string, status: 'in_progress' | 'completed') => {
    try {
      await updateRideStatus({ rideId, status }).unwrap()
      toast.success(`Ride ${status === 'in_progress' ? 'started' : 'completed'} successfully!`)
    } catch (error) {
      toast.error('Failed to update ride status')
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      requested: 'default',
      accepted: 'secondary',
      in_progress: 'default',
      completed: 'outline',
      cancelled: 'destructive'
    } as const

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'default'}>
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    )
  }

  const pendingRides = rides?.filter(ride => ride.status === 'requested') || []
  const activeRide = rides?.find(ride => ride.status === 'accepted' || ride.status === 'in_progress')
  const completedRides = rides?.filter(ride => ride.status === 'completed') || []
  const totalEarnings = completedRides.reduce((sum, ride) => sum + ride.fare, 0)

  if (ridesLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Driver Dashboard</h1>
            <p className="text-gray-600">Manage your rides and track earnings</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                {isOnline ? 'Online' : 'Offline'}
              </span>
              <Switch
                checked={isOnline}
                onCheckedChange={setIsOnline}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Today's Earnings</p>
              <p className="text-2xl text-gray-900">${(totalEarnings * 0.3).toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Rides Today</p>
              <p className="text-2xl text-gray-900">{Math.floor(completedRides.length * 0.4)}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mr-4">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Online Hours</p>
              <p className="text-2xl text-gray-900">6.5h</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-2xl text-gray-900">4.9</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Ride */}
          {activeRide && (
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Active Ride
                  </CardTitle>
                  {getStatusBadge(activeRide.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-start gap-3 mb-3">
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
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-600">Rider</p>
                        <p>{activeRide.riderName}</p>
                      </div>
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
                  
                  <div className="flex gap-3">
                    {activeRide.status === 'accepted' && (
                      <Button 
                        onClick={() => handleUpdateStatus(activeRide.id, 'in_progress')}
                        className="flex-1"
                      >
                        Start Ride
                      </Button>
                    )}
                    {activeRide.status === 'in_progress' && (
                      <Button 
                        onClick={() => handleUpdateStatus(activeRide.id, 'completed')}
                        className="flex-1"
                      >
                        Complete Ride
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Ride Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Available Rides</CardTitle>
              <CardDescription>
                {pendingRides.length} ride{pendingRides.length !== 1 ? 's' : ''} waiting for drivers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pendingRides.length > 0 ? (
                <div className="space-y-4">
                  {pendingRides.map((ride) => (
                    <div key={ride.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">
                            {ride.distance} mi • {ride.duration} min
                          </span>
                        </div>
                        <span className="text-lg text-green-600">${ride.fare}</span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span>{ride.pickup.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-red-600" />
                          <span>{ride.destination.address}</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => handleAcceptRide(ride.id)}
                        disabled={!!activeRide || !isOnline}
                        className="w-full"
                      >
                        Accept Ride
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {isOnline ? 'No ride requests available' : 'Go online to see ride requests'}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Earnings Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Weekly Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="text-xl">$1,000</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-sm text-gray-500">
                  75% of weekly goal ($1,333)
                </p>
              </div>
              
              <div className="mt-6 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyEarnings}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="earnings" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Driver Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Driver Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Rides</span>
                <span>{completedRides.length}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Earnings</span>
                <span>${totalEarnings.toFixed(2)}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Acceptance Rate</span>
                <span>95%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Avg Rating</span>
                <span>4.9 ⭐</span>
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
          <Tabs defaultValue="completed">
            <TabsList>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Rides</TabsTrigger>
            </TabsList>
            
            <TabsContent value="completed" className="space-y-4">
              {completedRides.length > 0 ? (
                completedRides.map((ride) => (
                  <div key={ride.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {new Date(ride.requestedAt).toLocaleDateString()}
                        </span>
                        {getStatusBadge(ride.status)}
                      </div>
                      <span className="text-lg text-green-600">${ride.fare}</span>
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
                    
                    <div className="mt-2 text-sm text-gray-600">
                      Rider: {ride.riderName} • {ride.distance} mi • {ride.duration} min
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">
                  No completed rides yet. Accept your first ride above!
                </p>
              )}
            </TabsContent>
            
            <TabsContent value="all">
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
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">
                  No rides found.
                </p>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDashboard