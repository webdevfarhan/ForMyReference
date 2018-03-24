var carFactory = function(){
    var service = {};
    service.getMessage = function(car){
        var message = 'No car selected';
        switch(car){
            case "G37": message="This car is infinity"; break;
            case "Jetta": message="This car is VW"; break;
            default: message="Car Not found on Factory"; break;
        };
        return message;
    }
    return service;
};

app.factory("carFactory", carFactory);
