// Getters and Setters
const data = {
    locations: [],
    //this location is not define key
    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

//code that uses  the data object and create new key for data
data.location = '      Indonesia      '
data.location = 'Surabaya'
console.log(data);//ini untuk melihat isi dari getter and setter