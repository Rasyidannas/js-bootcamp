//"This" dapat mengakses object didalamnya
let restaurant = {
    name : 'AS8',
    guestCapacity : 75,
    guestCount : 0,
    checkAvailability :function(partySize){
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft;
        
    },
    seatParty : function(partySize){
        this.guestCount = this.guestCount + partySize
        return
    },
    removeParty : function(partySize){
        this.guestCount = this.guestCount - partySize
        return
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));