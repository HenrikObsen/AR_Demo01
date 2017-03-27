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
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        this.architectView = (ArchitectView)this.findViewById(R.id.architectView);
        final ArchitectStartupConfiguration config = new ArchitectStartupConfiguration();
        config.setLicenseKey("4WvCPUjJl3edLbo+8AbIH6vMigL7Bh4aNR+1/r+rzzjklxjWfmGYWNvdQ24XIvt7vsVFJLK+zrsS61aTKdeQnnq0/rnfRixuZxd4y/+UQKr26p+iHKRnrGtsYFKdudCj261WK6NKSauoRwpd/ysOWe7lFFqP1eEyHRBveYsOT2VTYWx0ZWRfX86l4vFOeFFePm4Pola+cQ0A9kjaw53Zk/LUhY1NSFFbznGuG6kbsBDOIfH+fwQx9rSCDQ7Z53ZorhFFuUfYYorl1O+eP1KfTUMMAJzbV9VaElU028+oI4QOHuffp32IcN6OLqwnjMXXJdBXb+9/IFQJqiwgT7SOQ1dTnzmUxzimPTFyojAM3Wm3riACXeWxPBYGdPfNOjdqUfSbONQMBINRz+ERfBRL/K6bNxXLbHdkzdpEXzqWuNsgwKdMoKO4o2fYgaafhF3qGvqvO2ZJkZNArU9mYCABuClpJzgVH2Qntyc6Vh93wIc+2XQyUJ7S2hb+f/oUHmYCAlVcB9fr96lOJgwjujMfjS56Z//CoMtc4M1XoYm4FKzWZ2hdq04W8g8Twjjxg/y9BEdpV9IUNolw9EwZta+zh2xrw3cEdEMC/H6fTLtUC0yqObkYvt+9h78JSd+ZI0c9AKQn8slaYO+MSsUL/HG1dQ==");
        this.architectView.onCreate(config);
        app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
        var launchDemoButton = document.getElementById('launch-demo');
        launchDemoButton.onclick = function() {
            app.loadARchitectWorld();
        }
    },
    loadARchitectWorld: function() {
        app.wikitudePlugin.isDeviceSupported(function() {
            app.wikitudePlugin.loadARchitectWorld(function successFn(loadedURL) {
                }, function errorFn(error) {
                    alert('Loading AR web view failed: ' + error);
                },
                cordova.file.dataDirectory + 'www/pgday/index.html', [ '2d_tracking' ], { camera_position: 'back' }
            );
        }, function(errorMessage) {
            alert(errorMessage);
        },
        [ '2d_tracking' ]
        );
    }
};
