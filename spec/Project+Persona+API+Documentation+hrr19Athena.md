# Project Persona API Documentation
> **TEAM NAME: HRR19-Athena**

> **Members: Nam Huynh, Vi Vo, Natasha Che, Michael Oliver**

The PERSONA API defines the messaging API between the server and client; and server and 3rd-party API services

## * **Client API Reference**


## * **Server API Reference**
This API refers to consuming and interacting with the Profile Analysis Data
## Profile Analysis

### **Generate Twitter Analysis**

begin analysis | type | description
--- | --- | ---
genAnalysis | POST | initiate AI analysis

Actions

> <mark>**POST**</mark> /genAnalysis

POST Example

``` javascript
POST /genAnalysis
{
	"user" : "twitterUser",
	"socialType" : "twitter",
	
}
```

Response Example

``` javascript
HTTP/1.1 200 OK
Content-Type: application/json
[
 {
  "status": "success"
 }
]
```


### **Twitter Anayzed Profile Results**

analyze results | type | description
--- | --- | ---
analysis/twitter | GET | Retrieves the analyzed profile

Actions

> <mark>**GET**</mark> /analysis/twitter

Reqeust Example

``` javascript
GET /analysis/twitter

```

Response Example

``` javascript
HTTP/1.1 200 OK
Content-Type: application/json
[
 {
  'profile':'abcdefabcdef',
  'type': 'twitter'
 }
]
```


## * **Services 3rd-Party API Reference**

## Watson API
Reqeust Example

``` javascript
POST:
personality_insights.profile(params, function(error, response) {
  if(error) {
    console.log('error: ', error);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});

```

Response Example:

Note: This resp has been shortened to include only the big5 portion of the personality analysis. Only 2 of the 5 are shown, and of those, only 2 of the subcategories are shown.

``` javascript
{
  "word_count": 15223,
  "processed_language": "en",
  "personality": [
    {
      "trait_id": "big5_openness",
      "name": "Openness",
      "category": "personality",
      "percentile": 0.8011555009552956,
      "raw_score": 0.7756540425503803,
      "children": [
        {
          "trait_id": "facet_adventurousness",
          "name": "Adventurousness",
          "category": "personality",
          "percentile": 0.8975586904731889,
          "raw_score": 0.5499070403121904
        },
        {
          "trait_id": "facet_liberalism",
          "name": "Authority-challenging",
          "category": "personality",
          "percentile": 0.6405414845731194,
          "raw_score": 0.5343564751353819
        }
      ]
    },
    {
      "trait_id": "big5_conscientiousness",
      "name": "Conscientiousness",
      "category": "personality",
      "percentile": 0.8100175318417588,
      "raw_score": 0.6689998488881546,
      "children": [
        {
          "trait_id": "facet_achievement_striving",
          "name": "Achievement striving",
          "category": "personality",
          "percentile": 0.8461329922662831,
          "raw_score": 0.7424011845488805
        },
        {
          "trait_id": "facet_cautiousness",
          "name": "Cautiousness",
          "category": "personality",
          "percentile": 0.7220362727004178,
          "raw_score": 0.5296482988959449
        }
      ]
    }
  ],


```



## FaceBook API

## * **DATABASE**
Tech Stack: Mongo + Mongoose
## Model Schema

```
// without Auth0
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    twitter: {
        posts: [String]
        commonFriends: [String]
    },
    facebook: {
        posts: [String]
    }
    watson: {
        results: [String] //May need to convert toSchema.Types.Mixed
    }
});

// with Auth0
var userSchema = mongoose.Schema({
    userId: String,
    twitter: {
        posts: [String]
        commonFriends: [String]
    },
    facebook: {
        posts: [String]
    }
    watson: {
        results: [String] //May need to convert toSchema.Types.Mixed
    }
});

//export
module.exports = mongoose.model('User', userSchema);
```

## User Usage

Require

```
var User = require('./user/userController.js');
```

Find All Users

```
app.get() // need to define for each

```

Find a User

```

```

Add User

```

```





## * **User Authentication**

## Auth0