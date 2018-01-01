var coderdecoder = angular.module('coderdecoder', ['ngMaterial']);




coderdecoder.controller('coderDecoderCtrl', ['$scope', '$filter', '$http', '$mdDialog', '$mdMedia', function($scope, $filter, $http, $mdDialog, $mdMedia) {

    var thecoderdecoder = this;

    
    this.theMessage = 'Hello World';
    this.title = 'Coder Decoder'; 
    this.cipherOptions=[
        {'label':'Ceasar','value':1},
        {'label':'Ceasar Reverse','value':2}
        ];
    

    
    
    
    $scope.$watch('thecoderdecoder.theMessage', function(newVal) {
        thecoderdecoder.possibleMessages=decode(newVal);
    });
    function decodeChar(characterpos, ciphershift,ciphertype,character)
    {
       if (ciphertype==0 || ciphertype==1)
       {
         var ascii =0;
         ascii=((character.charCodeAt(0)-'a'.charCodeAt(0)+ciphershift) % 26)+'a'.charCodeAt(0);
         if (character.charCodeAt(0)>='z'.charCodeAt(0) || character.charCodeAt(0)<='a'.charCodeAt(0) )
         {
           ascii=character.charCodeAt(0);
         }
          
         var decodedcharacter = String.fromCharCode( ascii);
         return decodedcharacter;
       }
    }
    function decodeMessage(ciphertype, ciphershift, message)
    {
       var iloop=message.length-1;
       var decodedmessage='';
       while(iloop>-1)
       {
          var decodedcharacter = decodeChar(iloop,ciphershift, ciphertype, message[iloop]);
          if (ciphertype==0){
             decodedmessage= decodedcharacter + decodedmessage;
          } 
           else
          {
              decodedmessage= decodedmessage + decodedcharacter;
          }
          iloop=iloop-1;
       }
       return decodedmessage;

    }
    function decode(message){
        var possibleMessages=[];
        var ciphershift=0;
        while(ciphershift<26)
        {
          var decodedMessage = decodeMessage(0, ciphershift,message.toLowerCase());

            possibleMessages.push(decodedMessage);
            ciphershift=ciphershift+1;
            }
    return possibleMessages;
    }
    
    
        

   // handleClientLoad()
    
   
    
    return this;
}]);
