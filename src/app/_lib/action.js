"use server"

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";


export async function updateGuest(formData){
    function testNationality(nationality) {
        const regex = /^[a-zA-Z]{6,12}$/;
        return regex.test(nationality);
      }
    const session  = await auth()

    if(!session){throw new Error("You must be logged in to update your profile")}

    const nationalID = formData.get("nationalID")

    const [nationality , countryFlag] = formData.get("nationality").split('%')

    // if(!testNationality(nationality)){
    //     throw new Error('the nationalID should be either 6 to 12 charecters long')
    // }
    
    const updatedData = {nationalID ,  nationality , countryFlag}

      const { data, error } = await supabase
        .from('guests')
        .update(updatedData)
        .eq('id', session.user.guestId)
    
      if (error) {
        console.error(error);
        throw new Error('Guest could not be updated');
      }

   revalidatePath('/account/profile')
 

}  

export async function createBooking(bookingData , formData){
  const session = await auth();
  const newBooking = {
    ...bookingData , 
    guestId : session.user.guestId,
    numGuests : Number(formData.get('numGuests')),
    observations : String(formData.get('observations').slice(0,1000)),
    extraPrice : 0,
    totalPrice : bookingData.cabinPrice,
    isPaid : false,
    hasBreakfast : false,
    status : 'unconfirmed'
  }

  console.log(newBooking)

  const { error } = await supabase
    .from('bookings')
    .insert([newBooking])
    // So that the newly created object gets returned!
    
    if(error){
      console.error(error);
      throw new Error('Booking could not be created');
    }

    revalidatePath(`/cabins/${bookingData.cabinId}`)
}

export async function deleteReservation(bookingId){

  const session = await auth()

  if(!session) throw new Error('You must be logged in to delete your reservation')

    const guestBookings = await getBookings(session.user.guestId)

    const guestBookingIds = guestBookings.map(booking => booking.id)

    if(!guestBookingIds.includes(bookingId)) throw new Error('You can only delete your own reservation')

  const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
   revalidatePath('/account/reservations')

}

export async function updateBooking(formData){

  const session = await auth()

  if(!session) throw new Error('You must be logged in to delete your reservation')


  console.log(formData)

  const updateData = {
    numGuests : Number(formData.get('numGuests')),
    observations : String(formData.get('observations').slice(0,1000))

  }

  const bookingId = Number(formData.get('bookingId'))

  const {  error } = await supabase
  .from('bookings')
  .update(updateData)
  .eq('id', bookingId)
  .select()
  .single();

if (error) {
  throw new Error('Booking could not be updated');
}
redirect ('/account/reservations')


}
    

export async function signInAction(){
    await signIn(
        "google",
        {
            redirectTo:'/account'
        }
    )
}

export async function signOutAction(){
    await signOut({redirect:'/'})
}