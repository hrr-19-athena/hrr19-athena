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

## FaceBook API

## * **DATABASE**


## * **User Authentication**

## Auth0
