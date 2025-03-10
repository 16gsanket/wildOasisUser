import { auth } from '../_lib/auth'
import { getBookedDatesByCabinId, getCabin, getSettings } from '../_lib/data-service'
import DateSelector from './DateSelector'
import LoginMessage from './LoginMessage'
import ReservationForm from './ReservationForm'

async function  Reservations({cabin}) {
    const[cabinInfo ,settings, bookedDates] = await Promise.all([getCabin(cabin.id), getSettings(), getBookedDatesByCabinId(cabin.id)])

    const session = await auth()
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
        <DateSelector settings={settings} bookedDates = {bookedDates} cabin={cabinInfo}/>
        {session?.user?
        <ReservationForm cabin={cabinInfo} user={session.user}/> : <LoginMessage />}
      </div>
  )
}

export default Reservations