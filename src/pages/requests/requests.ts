import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
@Component({
 	selector: 'page-requests',
  	templateUrl: 'requests.html'
})

export class RequestsPage {
    data:any = {};

    constructor(public navCtrl: NavController, public http: Http) {
        this.data.username = '';
        this.data.response = '';

        this.http = http;
 	}

	 submit() {
        var link = 'https://gardrop-api.herokuapp.com/deneme';
        var myData = {"username": this.data.username}; //myData json
        //var headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
        console.log(myData)
        console.log("mydata")
        //JSON.parse(myData)
        debugger;
        var that = this;
        this.http.post(link,myData)
        .subscribe(data => {
        	that.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, error => {
            console.log("Oooops!");
        });
    }
    getapi() {
        this.http.get('https://gardrop-api.herokuapp.com/')
        .map(res => res.json())
		.subscribe(
			data => {
				this.data.response = data["content"];
			},
			err => {
				alert(err);
			}
		)
    }
}
