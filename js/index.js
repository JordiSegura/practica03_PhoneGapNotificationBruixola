/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        $("#btn-ej1").click(ejercicio1);
        $("#btn-ej2").click(ejercicio2);
        $("#btn-ej3").click(ejercicio3);
        $("#btn-ej4").click(ejercicio4);
        $("#btn-ej5").click(ejercicio5);
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


function ejercicio1() {
    var num = $("#numBeeps").val();
    num = parseInt(num);
    navigator.notification.beep(num);
}

function ejercicio2() {
    var num = $("#numBrr").val();
    num = parseInt(num);
    navigator.vibrate(num);
}

function ejercicio3() {
    function onSuccess(heading) {
        $("#desviacio").html("NORT: " + heading.magneticHeading);
    }
    ;

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }
    ;
    var options = {
        frequency: 3000
    }; // Update every 3 seconds

     var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
  var headingActual;
function ejercicio4() {
    function onSuccess(heading) {
        headingActual=heading.magneticHeading;
        headingActual = 360-headingActual;
        $("#br").css("transform", "rotate("+headingActual+"deg)");
        $("#br").css("-ms-transform", "rotate("+headingActual+"deg)");
        $("#br").css("-webkit-transform", "rotate("+headingActual+"deg)");
        
        headingActual = Math.floor(headingActual);
        if(headingActual === headingGuardat){
            navigator.vibrate(3000);
        }
    }
    ;

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }
    ;
    var options = {
        frequency: 3000
    }; // Update every 3 seconds

     var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
var headingGuardat;
function ejercicio5() {
    headingGuardat = Math.floor(headingActual);
   $("#ej5").val(headingGuardat); 
}