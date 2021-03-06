var mongoose = require('mongoose');
var q = require('q');

//defining schema for places table
var placesSchema = new mongoose.Schema({
	  location: { type: {}, required: true }, 
	  id: { type: String, required: true }, 
	  name: { type: String, required: true }
});

var Places = mongoose.model('places', placesSchema);

//Initlizing interface object of this model.
var placesModel = {};

//function responsible for places listing
placesModel.get = function(){
	var results = q.defer();

	Places.find({}, {'_id':0}, function(err, dbplaces) {
	  if (err){
	  	results.reject(err);
	  } 
	  results.resolve(dbplaces);
	});

	return results.promise;
}


//function responsible for seeding places
placesModel.seed = function(){
	var dataToInsert = [
        {
            "location": {
                "lat": 35.7090259,
                "lng": 139.7319925
            },
            "id": "45c0b5209973fcec652817e16e20f1d0b4ecb602",
            "name": "Tokyo"
        },
        {
            "location": {
                "lat": 35.776904,
                "lng": 139.7222837
            },
            "id": "83489d15abb8214530f554d5731b902bf4de9d08",
            "name": "Hotel Mid In Akabane Ekimae"
        },
        {
            "location": {
                "lat": 35.89641599999999,
                "lng": 139.632189
            },
            "id": "133d09371c89ada803fd39fe4ddcbd777ff01a8a",
            "name": "東横INNさいたま新都心"
        },
        {
            "location": {
                "lat": 35.76255449999999,
                "lng": 139.7271452
            },
            "id": "19dcefa40f6a392bd2fa5227c49e426f0986b7a2",
            "name": "Flexstay Inn Higashi Jujo"
        },
        {
            "location": {
                "lat": 35.7445605,
                "lng": 139.7192485
            },
            "id": "12c7e040c02a516c3e2163e31f1c08a1b09072ce",
            "name": "APA Hotel Tokyo Itabashi Station"
        },
        {
            "location": {
                "lat": 35.85719369999999,
                "lng": 139.6548343
            },
            "id": "63d3e547309d6ab5b521dfead2b99a483f364fe4",
            "name": "Urawa Washington Hotel"
        },
        {
            "location": {
                "lat": 35.90867799999999,
                "lng": 139.626673
            },
            "id": "12a985e087d1ab55ba1bc859e2deb46c312ffed2",
            "name": "監獄レストラン ザ・ロックアップ 大宮店"
        },
        {
            "location": {
                "lat": 35.7871378,
                "lng": 139.6129926
            },
            "id": "e3b27db19edb6ac1d9005a8c785558be21659bf5",
            "name": "東横INN和光市駅前"
        },
        {
            "location": {
                "lat": 35.9060704,
                "lng": 139.6237181
            },
            "id": "0b7f5acaae28d26885ded261ecdfab7de69a65a4",
            "name": "サブリエ ルミネ大宮店"
        },
        {
            "location": {
                "lat": 35.7891699,
                "lng": 139.704403
            },
            "id": "52935ac5a36ca29c8145c6d1032f09c1fa4fbad3",
            "name": "Ofu Jyoshi Kaikan"
        },
        {
            "location": {
                "lat": 35.7907152,
                "lng": 139.6552876
            },
            "id": "895bda68a2ff8582ae272451e380b3ebaddc18cc",
            "name": "あぺたいと 本店高島平店"
        },
        {
            "location": {
                "lat": 35.8057882,
                "lng": 139.6962718
            },
            "id": "33e5f1690a1a216f4ce43faf2cb9e4a38144fa10",
            "name": "七福の湯戸田店"
        },
        {
            "location": {
                "lat": 35.8480344,
                "lng": 139.7657269
            },
            "id": "f88f6eb954eaa961890102b1d2c32a8e1c75cd18",
            "name": "道の駅川口・あんぎょう"
        },
        {
            "location": {
                "lat": 35.805322,
                "lng": 139.6984081
            },
            "id": "f9cc6c485dfd6e65eaabbf18362ecf696789527f",
            "name": "はま寿司 ララガーデン川口店"
        },
        {
            "location": {
                "lat": 35.763484,
                "lng": 139.665128
            },
            "id": "27e6b94b03c4dd12793b8ebc6820b9c934d2f215",
            "name": "Kappa Sushi Nerima"
        },
        {
            "location": {
                "lat": 35.7834249,
                "lng": 139.7199584
            },
            "id": "261e9f10a66a2aa76fa2ee2aa615d510ac1b87f1",
            "name": "Toyoko INN Akabane Station east exit Ichibangai"
        },
        {
            "location": {
                "lat": 35.77757860000001,
                "lng": 139.7225195
            },
            "id": "fbb93577b006ed0983f9a4b0b7cb4bd80d88ee6b",
            "name": "Daiwa Roynet Hotel Tokyo Akabane"
        },
        {
            "location": {
                "lat": 35.908423,
                "lng": 139.625954
            },
            "id": "11fbce32a0feb4ba27a90ce994e28a163c1751d9",
            "name": "アラビアンロック大宮店"
        },
        {
            "location": {
                "lat": 35.7574465,
                "lng": 139.6833125
            },
            "id": "0fc60c25b4d4ea306e9c410005989836f445d72c",
            "name": "Kappa Sushi Itabashi"
        },
        {
            "location": {
                "lat": 35.7756644,
                "lng": 139.8044788
            },
            "id": "74685d06265bc4d3a828f559ef6269b7c28bf1b7",
            "name": "Adachi"
        }
    ];
	

	
	
	Places.collection.insert(dataToInsert, function(err, dbplaces) {
		if(err){
			console.log('error occured in populating database');	
			console.log(err);	
		} 
		else{
			console.log(dbplaces.insertedCount+' places inserted in db.');	
		}	
	});
}

module.exports = placesModel;