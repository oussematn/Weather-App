class Storage{

    setLocation(city){
        localStorage.setItem('city',city);
    }

    getLocation(){
        if(localStorage.getItem('city') === null)
        return ('nabeul');
        else{
            return localStorage.getItem('city');
        }
    }
}