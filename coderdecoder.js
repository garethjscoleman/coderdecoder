var coderdecoder = angular.module('coderdecoder', ['ngMaterial']);




coderdecoder.controller('coderDecoderCtrl', ['$scope', '$filter', '$http', '$mdDialog', '$mdMedia', function($scope, $filter, $http, $mdDialog, $mdMedia) {

    var thecoderdecoder = this;

    
    this.theMessage = 'Hello World';
    this.title = 'Coder Decoder'; 
    
    

    
    
    
    $scope.$watch('thecoderdecoder.theMessage', function(newVal) {
        thecoderdecoder.possibleMessages=decode(newVal);
    });
    function decodeChar(ciphertype,character)
    {
       var ascii =0;
       ascii=((character.charCodeAt(0)-'a'.charCodeAt(0)+ciphertype) % 26)+'a'.charCodeAt(0);
       if (character.charCodeAt(0)>='z'.charCodeAt(0) || character.charCodeAt(0)<='a'.charCodeAt(0) )
       {
           ascii=character.charCodeAt(0);
       }
          
       var decodedcharacter = String.fromCharCode( ascii);
       return decodedcharacter;
    }
    function decodeMessage(ciphertype,message)
    {
       var iloop=message.length-1;
       var decodedmessage='';
       while(iloop>-1)
       {
          var decodedcharacter = decodeChar(ciphertype,message[iloop]);
          decodedmessage=decodedmessage+decodedcharacter;
          iloop=iloop-1;
       }
       return decodedmessage;

    }
    function decode(message){
        var possibleMessages=[];
        var ciphertype=0;
        while(ciphertype<26)
        {
          var decodedMessage = decodeMessage(ciphertype,message.toLowerCase());

            possibleMessages.push(decodedMessage);
            ciphertype=ciphertype+1;
            }
    return possibleMessages;
    }
    
    
        

   // handleClientLoad()
    
   
    
    return this;
}]);
