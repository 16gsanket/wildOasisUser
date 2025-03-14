'use client'
const { createContext, useContext, useState } = require("react");

const ReservationContext = createContext();

const initialState = {
    from: undefined, to: undefined
}

function ReservationProvider({children}){

     const[range , setRange] = useState(initialState)

    function resetRange(){
        setRange(initialState)
    }

     return(
        <ReservationContext.Provider value={{range , setRange, resetRange}  }>
            {children}
        </ReservationContext.Provider>
     )
}

function useReservation(){
    const context = useContext(ReservationContext)
    if(context === null){
        throw new Error('ReservationConsumer must be used within a ReservationProvider')

    }
    return context

}

export {ReservationProvider , useReservation}