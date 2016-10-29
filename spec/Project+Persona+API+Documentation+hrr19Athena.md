# Project Persona API Documentation
> **TEAM NAME: HRR19-Athena**

> **Members: Nam Huynh, Vi Vo, Natasha Che, Michael Oliver**

The PERSONA API defines the messaging API between the server and client; and server and 3rd-party API services

## * **Client API Reference**


## * **Server API Reference**
This API refers to consuming and interacting with the Profile Analysis Data

## User Usage

Require Exports Controller

```
var User = require('./user/userController.js');
```


### **Find All Users**

request all users | type | description
--- | --- | ---
allUsers | GET | Returns all the DB users

Actions

> <mark>**GET**</mark> /api/allUsers

POST Example

``` javascript
GET /api/allUsers
{
	"userID" : "83080832582303"
}
```

Response Example

``` javascript
HTTP/1.1 201 OK
Content-Type: application/json
[
 {
  "status": "success"
 }
]
```

### **Find A User**

get one user | type | description
--- | --- | ---
< PATH > | POST | Returns only the provided DB user

Actions

> <mark>**POST**</mark> / < PATH >

POST Example

``` javascript
POST / < PATH >
{
	KEY: VALUE
}
```

Response Example

``` javascript
HTTP/1.1 201 OK
Content-Type: application/json
[
 {
  "status": "success"
 }
]

```

### **Add User**
**see profile analysis

add one user | type | description
--- | --- | ---
< path > | POST | inser new DB user

Actions

> <mark>**POST**</mark> / < path >

POST Example

``` javascript
POST / < path >
{
	KEY: VALUE
}
```

Response Example

``` javascript
HTTP/1.1 201 OK
Content-Type: application/json
[
 {
  "status": "success"
 }
]

```


## Profile Analysis (example)

### **Generate Twitter Analysis** (example)

begin analysis | type | description
--- | --- | ---
genAnalysis | POST | initiate AI analysis

Actions

> <mark>**POST**</mark> /api/user/analysis

POST Example

``` javascript
POST /api/user/analysis
{
	"user" : "twitterUser",
	"socialType" : "twitter",

}
```

Response Example

``` javascript
HTTP/1.1 200 OK
Content-Type: application/json
{"personalityScores":{"_id":"58128a1706905f32caecea1a","userId":"VictoriasSecret","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9593268328268352,"raw_score":0.8042978562029528,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.736080680561548,"raw_score":0.527270828457082},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.8621172024125769,"raw_score":0.7204981947934177},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.43099944858166195,"raw_score":0.6411082198980798},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.5488819453227549,"raw_score":0.7409600830632047},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8459043442727547,"raw_score":0.6544146298026056},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.8577837529280956,"raw_score":0.5701423518281533}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.21996860986369154,"raw_score":0.5920303104789135,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.5518548774471103,"raw_score":0.6952997160624715},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.34014755663013385,"raw_score":0.4664621467073739},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.05532004667309792,"raw_score":0.6198315422438281},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.7419611944161886,"raw_score":0.5154277483043126},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.581554371688625,"raw_score":0.5804604249481325},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7669842199771184,"raw_score":0.778735623989381}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.9677293111646503,"raw_score":0.633489325476319,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.7170035004712384,"raw_score":0.5697483009959201},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.5171361880659339,"raw_score":0.6462067116398654},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.18753053820347543,"raw_score":0.5883702580653614},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.35961457895696014,"raw_score":0.5883619461950217},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.498910618486993,"raw_score":0.5603516825559564},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.2227726876583369,"raw_score":0.41412430572001524}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.5051441836509466,"raw_score":0.7427110652820806,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.15555061541922016,"raw_score":0.6695557276151682},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.5397182996267992,"raw_score":0.5853972378268448},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.038543282480076047,"raw_score":0.355092393057523},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.3594330793590088,"raw_score":0.6088258399443284},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.3484583801315462,"raw_score":0.648605903103546},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.3926188222749327,"raw_score":0.5745755601369619}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.39040613354808223,"raw_score":0.4516797531216181,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8896963937844775,"raw_score":0.6027008888375601},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.6583466188324382,"raw_score":0.6219332142832508},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.5264924102496971,"raw_score":0.4526480356596926},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.04333893569089303,"raw_score":0.43474673246367734},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.3528395236481732,"raw_score":0.5268420105206859},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.591576689961656,"raw_score":0.48237752112666576}]}],"personaGroup":"Extraversion","__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}},"similarGroup":[{"_id":"5812900605c4353392e7fb27","userId":"xoBetseyJohnson","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9132371202950289,"raw_score":0.7921029232285559,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.5845441631187335,"raw_score":0.512412140574993},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.9661273015859321,"raw_score":0.7577982904491817},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.4158334731560176,"raw_score":0.6395290847224081},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.9266294724474047,"raw_score":0.8069373669111009},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.6534192190337943,"raw_score":0.625510500709318},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.9092584587077968,"raw_score":0.5835291505335274}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.25499534055542117,"raw_score":0.5973215765692588,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.30417290323341883,"raw_score":0.6612677985096047},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.19459572948623927,"raw_score":0.4381173017754853},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.02321374119055325,"raw_score":0.6101296523110928},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.6274864677643897,"raw_score":0.5048083015509244},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.2628768674434781,"raw_score":0.5404282043966655},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.629575745101021,"raw_score":0.7647308967601522}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.9196767774940933,"raw_score":0.6136085912210645,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.7194088679417876,"raw_score":0.5701128063522307},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.15645682845678865,"raw_score":0.5936122372750124},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.12057566611179199,"raw_score":0.5788031917059315},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.7087546315529829,"raw_score":0.6269137867873595},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.15505719914942062,"raw_score":0.5095816471694006},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.16329557397229116,"raw_score":0.40290957630590707}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.3470351751712236,"raw_score":0.7265614814234025,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.04866611862932313,"raw_score":0.6469281898312529},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.2877593197047696,"raw_score":0.5456538808699926},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.038269925713423414,"raw_score":0.3549193778449936},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.13485439111717756,"raw_score":0.5737322592279326},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.24482768086682005,"raw_score":0.6370982184406168},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.3182039334392731,"raw_score":0.5663267582365981}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.13099160527593545,"raw_score":0.4041327061919881,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.953172412144354,"raw_score":0.6273919728275233},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.9380574160721755,"raw_score":0.6990445912898182},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.7880530490900337,"raw_score":0.499089313031848},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.1227772002672397,"raw_score":0.45596152650284966},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.8343149916214025,"raw_score":0.5978268446103172},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.9152390594606103,"raw_score":0.5551446345199862}]}],"__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}}]}
```
### **Analyzing Watson Results for Group of users with similar personality analysis** (example)
Reqeust Example

``` javascript
GET /api/user/similarGroup
```

Response Example

``` javascript
HTTP/1.1 200 OK
Content-Type: application/json
[{"_id":"58128a1706905f32caecea1a","userId":"VictoriasSecret","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9593268328268352,"raw_score":0.8042978562029528,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.736080680561548,"raw_score":0.527270828457082},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.8621172024125769,"raw_score":0.7204981947934177},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.43099944858166195,"raw_score":0.6411082198980798},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.5488819453227549,"raw_score":0.7409600830632047},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8459043442727547,"raw_score":0.6544146298026056},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.8577837529280956,"raw_score":0.5701423518281533}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.21996860986369154,"raw_score":0.5920303104789135,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.5518548774471103,"raw_score":0.6952997160624715},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.34014755663013385,"raw_score":0.4664621467073739},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.05532004667309792,"raw_score":0.6198315422438281},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.7419611944161886,"raw_score":0.5154277483043126},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.581554371688625,"raw_score":0.5804604249481325},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7669842199771184,"raw_score":0.778735623989381}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.9677293111646503,"raw_score":0.633489325476319,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.7170035004712384,"raw_score":0.5697483009959201},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.5171361880659339,"raw_score":0.6462067116398654},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.18753053820347543,"raw_score":0.5883702580653614},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.35961457895696014,"raw_score":0.5883619461950217},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.498910618486993,"raw_score":0.5603516825559564},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.2227726876583369,"raw_score":0.41412430572001524}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.5051441836509466,"raw_score":0.7427110652820806,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.15555061541922016,"raw_score":0.6695557276151682},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.5397182996267992,"raw_score":0.5853972378268448},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.038543282480076047,"raw_score":0.355092393057523},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.3594330793590088,"raw_score":0.6088258399443284},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.3484583801315462,"raw_score":0.648605903103546},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.3926188222749327,"raw_score":0.5745755601369619}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.39040613354808223,"raw_score":0.4516797531216181,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8896963937844775,"raw_score":0.6027008888375601},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.6583466188324382,"raw_score":0.6219332142832508},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.5264924102496971,"raw_score":0.4526480356596926},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.04333893569089303,"raw_score":0.43474673246367734},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.3528395236481732,"raw_score":0.5268420105206859},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.591576689961656,"raw_score":0.48237752112666576}]}],"personaGroup":"Extraversion","__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}},{"_id":"5812919505c4353392e7fb28","userId":"x","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9769180207696486,"raw_score":0.8123103308107289,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.7657485834304267,"raw_score":0.5306001170713416},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.9533073578448895,"raw_score":0.7502608654897124},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.3287450640334967,"raw_score":0.6301189574666729},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.8133875353698321,"raw_score":0.7790876531239745},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.9430087156235808,"raw_score":0.6804055616720242},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.9914032500118161,"raw_score":0.6362297506232018}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.08617424507980725,"raw_score":0.5644004017852638,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.36420331013789287,"raw_score":0.6700137086852871},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.26767636658406424,"raw_score":0.45334497497467097},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.019196703298136664,"raw_score":0.6081914510237906},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.5652924863431928,"raw_score":0.4995410976501514},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.2954258716591319,"raw_score":0.5450441164599686},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.6780621913915064,"raw_score":0.7693575194477354}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.9139881538693069,"raw_score":0.611949905186465,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.6342335744474927,"raw_score":0.5579346602050875},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.3265172588896672,"raw_score":0.6215856151682788},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.05801215999144471,"raw_score":0.5653940294787236},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.41178758358193207,"raw_score":0.5941512624834892},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.257032967347538,"raw_score":0.5277611460610389},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.05546584092582507,"raw_score":0.3713940851764157}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.25231747418900163,"raw_score":0.7156736038519034,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.03492642889407643,"raw_score":0.641492889472783},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.39162112639205754,"raw_score":0.5628151946334539},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.006228124715715766,"raw_score":0.31651461102163236},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.1079595811448778,"raw_score":0.5674228514336537},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.2656228606944457,"raw_score":0.6395707185094485},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.4479205421990157,"raw_score":0.5804083878985141}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.2798127232891018,"raw_score":0.43447863355618765,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.9370597658175,"raw_score":0.61941479029516},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.8225075940344977,"raw_score":0.6571916957975321},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.7243544165321306,"raw_score":0.48617736952183777},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.12640372493586516,"raw_score":0.4566402136420807},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.7186474457543247,"raw_score":0.5771721533081815},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.7429459938043216,"raw_score":0.5091905195461104}]}],"__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}},{"_id":"581294b2b6e00e33bdcac7da","userId":"liamneeson_","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.893419429583374,"raw_score":0.7883980809758019,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.6262166952455649,"raw_score":0.5162645634686939},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.9328710037418468,"raw_score":0.7411342619663375},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.4853050342638679,"raw_score":0.6466930170038286},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.9647862394122828,"raw_score":0.8247199501919166},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8155790019521432,"raw_score":0.6488426184178369},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.9389915629953403,"raw_score":0.5941142216771602}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.06404164769861681,"raw_score":0.5570774394711673,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.27196899086837145,"raw_score":0.6562681116463982},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.08895592692371379,"raw_score":0.40743027403011134},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.028030244304967034,"raw_score":0.6121113738880161},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.4482675957410649,"raw_score":0.48989643037685887},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.1956259475912248,"raw_score":0.5298125594193223},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7100364384358796,"raw_score":0.7725650116451974}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.7195938412860216,"raw_score":0.576960794042132,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.37411879042274765,"raw_score":0.5239559047468535},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.23435908191148708,"raw_score":0.6078375104652104},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.11849775228945603,"raw_score":0.5784536391496207},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.791240095017355,"raw_score":0.63797942626234},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.1806962494108179,"raw_score":0.5147109114688896},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.03224500007366082,"raw_score":0.3582968554499209}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.3803902635700284,"raw_score":0.7300949204536429,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.08148349612183836,"raw_score":0.6561461788000118},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.24808255787282002,"raw_score":0.5383884065766578},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.01816666284672175,"raw_score":0.3379257784790143},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.05860608436749143,"raw_score":0.5518931226252131},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.2985783568060445,"raw_score":0.6432979695516998},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.3318780863526244,"raw_score":0.5678920064981753}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.07227988100506194,"raw_score":0.3851183246232971,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.975035464895596,"raw_score":0.6429307630289551},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.9398851957100889,"raw_score":0.7000772142422889},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.7968983335529729,"raw_score":0.5010470578979286},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.1387353931605071,"raw_score":0.4588516685193712},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.8949416570800572,"raw_score":0.6126595533213492},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.8298340264400963,"raw_score":0.5283711165016991}]}],"__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"location":"hollywood","img":"someImage","commonFriends":[],"posts":[]}},{"_id":"58129a6675b7da35241af5a8","userId":"MarthaStewart","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9008518206742164,"raw_score":0.7897230566877553,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.653434957732459,"raw_score":0.5188523993496685},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.8976652741213698,"raw_score":0.7295334025166575},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.2752154445206604,"raw_score":0.6238514282268489},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.5486154253280472,"raw_score":0.7409266500250729},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.7555183070255331,"raw_score":0.6392757660702416},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.938580017442715,"raw_score":0.5939429208508935}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.24763769870786567,"raw_score":0.5962446318929306,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.6111402453742033,"raw_score":0.7033442593603283},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.4242876830777294,"raw_score":0.48042069503020335},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.04917745908459642,"raw_score":0.6184219410141615},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.691661995977025,"raw_score":0.5105524770838374},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.6065045855506,"raw_score":0.5835257561265796},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7547640735805341,"raw_score":0.7773502570225694}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.8906997197948594,"raw_score":0.6059046491183092,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.8611775078015831,"raw_score":0.5959294729905209},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.4595914414591503,"raw_score":0.6389866019593453},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.09311469156463253,"raw_score":0.5737793129968278},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.40963719764728257,"raw_score":0.593916819800639},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.39684168974625594,"raw_score":0.54737142849825},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.21690115846299457,"raw_score":0.41310436533172934}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.3205809047667738,"raw_score":0.7236698269617702,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.09057660901620551,"raw_score":0.6581790843104032},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.44281651984366216,"raw_score":0.570723552288998},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.03798927730495716,"raw_score":0.35474069599765784},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.20827442441198568,"raw_score":0.5874774668120651},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.3002148156241774,"raw_score":0.6434778535429713},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.5754447510242227,"raw_score":0.5936397095947414}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.2359895345013695,"raw_score":0.4268196996858311,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8105472437964212,"raw_score":0.5838342979774794},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.7754525173384665,"raw_score":0.6457319320978387},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.3989380299396268,"raw_score":0.4322181926188803},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.10177292619497746,"raw_score":0.4517222516449636},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.5513463677985848,"raw_score":0.5535058073849838},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.6400963722812592,"raw_score":0.4904760958185947}]}],"__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"location":"newyork","img":"imageofmartha","commonFriends":[],"posts":[]}},{"_id":"5813d805ff0bcd3ac61f03a2","userId":"HackReactor","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9041491706715112,"raw_score":0.79033417436884,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.9324354388376213,"raw_score":0.5579597450276439},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.8001392917466674,"raw_score":0.7079556434271443},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.11142038965382856,"raw_score":0.5984975443247191},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.7842424300973003,"raw_score":0.7739295196005183},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.9633329630221412,"raw_score":0.6901351982956689},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.9710094149709199,"raw_score":0.6117161801379185}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.17536125985605983,"raw_score":0.5845262861219388,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.7013251601571251,"raw_score":0.7163645461463354},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.3713231332525031,"raw_score":0.47174634094294876},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.023688661907778963,"raw_score":0.6103396404244747},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.44501472938000713,"raw_score":0.4896269331710734},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.6712396855799767,"raw_score":0.5917724821763641},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.9215985046827064,"raw_score":0.8028946014810195}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.7452824726316717,"raw_score":0.5804451037110724,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.9509043280864977,"raw_score":0.624996513640663},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.7721926886876422,"raw_score":0.6813558698677307},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.05094608815985813,"raw_score":0.5632440032731084},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.6370173436965311,"raw_score":0.6184654563797132},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.37999378353230934,"raw_score":0.5451662616283591},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.1359528078927814,"raw_score":0.39685950871903775}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.1069717511371262,"raw_score":0.6927916785930796,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.09349025375376346,"raw_score":0.6587982012692817},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.3497460174677256,"raw_score":0.5561331312486886},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.0035050245638367783,"raw_score":0.3060975143368469},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.11808400846229133,"raw_score":0.5699157361654505},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.3532807901733793,"raw_score":0.6491026017573149},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.7791824322399971,"raw_score":0.617500370208758}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.3962074541663122,"raw_score":0.4525301006550882,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8126644641590839,"raw_score":0.5842632001505964},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.605705756959548,"raw_score":0.6123985173260188},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.5280361502788959,"raw_score":0.45289370161376363},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.017500932343947395,"raw_score":0.4195594198097853},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.5909306386390647,"raw_score":0.5588138383507797},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.5008275489803661,"raw_score":0.4677539827839129}]}],"__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}},{"_id":"5813d985ff0bcd3ac61f03a3","userId":"OurNameIsFun","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.841219117564078,"raw_score":0.7805619954184028,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.5278868666934553,"raw_score":0.5073057892455994},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.8521163590539221,"raw_score":0.7182541844718906},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.2750980201105306,"raw_score":0.6238370850707932},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.7499063627301216,"raw_score":0.7683462479170011},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8360761954544081,"raw_score":0.6525369540676477},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.9467821478472924,"raw_score":0.5975421599038389}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.2504024195711616,"raw_score":0.5966512669784687,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.3957210782017048,"raw_score":0.6743979072195486},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.5203650211528011,"raw_score":0.4956974423898041},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.06636972429810517,"raw_score":0.6220830289908823},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.5840970733119396,"raw_score":0.5011128707423251},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.4762646743797162,"raw_score":0.5678176501029725},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.6213010754406697,"raw_score":0.76396316634858}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.5028695142416483,"raw_score":0.551327115678542,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.627343494985322,"raw_score":0.5570002381050956},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.22031340561682833,"raw_score":0.6055095181329349},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.015921541178166465,"raw_score":0.5461078301042965},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.45232522224879823,"raw_score":0.5985252665453982},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.08875714596687345,"raw_score":0.49285646676788364},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.024168403998365562,"raw_score":0.35183875656947383}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.27645953925899813,"raw_score":0.7186084102309793,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.04429817660313501,"raw_score":0.6453522901594254},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.4239221084134561,"raw_score":0.5678293969564179},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.08389033698364634,"raw_score":0.37559098854772843},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.18372697655712072,"raw_score":0.5832861254166046},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.30399141796009077,"raw_score":0.6438913080834452},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.34804397028448153,"raw_score":0.5697098890774037}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.2646643110785262,"raw_score":0.43190620626541143,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8873139800807195,"raw_score":0.6020146712586432},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.9065083152136083,"raw_score":0.6841017244828143},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.7717449391632245,"raw_score":0.4956007594098133},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.025721333917824385,"raw_score":0.4257307758201777},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.8941736068827756,"raw_score":0.6124379702295242},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.8080267986446847,"raw_score":0.5230918986470731}]}],"__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}},{"_id":"5813db0799d3a83aee90d16e","userId":"loft","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9464499015424139,"raw_score":0.800097495472915,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.7470343030167471,"raw_score":0.528475717434034},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.873400826165487,"raw_score":0.723167786506406},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.3764271681185443,"raw_score":0.6353578748952265},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.5757051654407457,"raw_score":0.7443416990320595},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8428063386617681,"raw_score":0.653814482246209},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.924723412112175,"raw_score":0.5886351998862936}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.2439210353626342,"raw_score":0.5956941416595289,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.5518525236250916,"raw_score":0.695299401016851},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.36447563922902937,"raw_score":0.4705993596408933},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.0600187574727184,"raw_score":0.6208284301154667},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.6776144129275695,"raw_score":0.5092576841115743},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.577696396202282,"raw_score":0.5799903616983029},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7626484449013418,"raw_score":0.7782396344503942}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.9591974655090905,"raw_score":0.6287157842904532,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.817633280817548,"raw_score":0.58675784221066},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.47381950069059714,"raw_score":0.6407758084731401},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.10870248537380334,"raw_score":0.5767445392299764},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.40189884811140764,"raw_score":0.5930706465262399},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.4734084735701219,"raw_score":0.5571430392333341},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.231167549940913,"raw_score":0.41555636316077516}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.4506891143743956,"raw_score":0.7372720291634716,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.11156122117612277,"raw_score":0.6623517817892601},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.5437912631329141,"raw_score":0.5860157239055652},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.029108988472070607,"raw_score":0.3484329020176024},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.22900497154502558,"raw_score":0.5907942926550973},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.3394891338591266,"raw_score":0.6476752760277814},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.5595549366420466,"raw_score":0.5919748243904877}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.32391786341661943,"raw_score":0.44161682047666706,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8761986291014345,"raw_score":0.5989427028059157},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.7855628438891955,"raw_score":0.648063910100089},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.5610965700155178,"raw_score":0.45817710021837},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.07269810464596776,"raw_score":0.4446321310953687},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.44835477371312105,"raw_score":0.5398835467542248},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.6599346362950611,"raw_score":0.4938890022731256}]}],"personaGroup":"Extraversion","__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}},{"_id":"5814dbbef4c46c3f3367506b","userId":"790705006966022144","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9263661960488747,"raw_score":0.7949217024038786,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.9061564342452479,"raw_score":0.5516742908727311},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.8958025884637908,"raw_score":0.7290085196868585},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.2307802642251442,"raw_score":0.6181778362483688},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.8853509489788296,"raw_score":0.7945709073847989},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.9594876820549758,"raw_score":0.6880071895056752},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.961297020210668,"raw_score":0.6051735369694504}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.3081924579453076,"raw_score":0.604684851870344,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.3818789267449494,"raw_score":0.6724860090440519},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.397945009020165,"raw_score":0.4761449985662902},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.030393122923385085,"raw_score":0.6129811974271727},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.6279491208638799,"raw_score":0.5048483592199946},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.5528496317656375,"raw_score":0.5769826306944048},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7217860827498243,"raw_score":0.7737840986134332}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.6516398257777274,"raw_score":0.5683982475823414,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.7485126278777857,"raw_score":0.5746530306033507},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.3833740172688834,"raw_score":0.6292300921008558},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.020748154833962196,"raw_score":0.5497267937220768},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.6151289398418084,"raw_score":0.6160153521533239},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.13277795031282102,"raw_score":0.5046476841767886},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.028916431109785923,"raw_score":0.35581961022554787}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.2814574101439863,"raw_score":0.7191997273702091,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.05064322538976823,"raw_score":0.6476044822129803},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.41904095637245775,"raw_score":0.567077640053413},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.009389323899558322,"raw_score":0.32437958839946784},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.08319173556703446,"raw_score":0.5605119937721171},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.2571109161989171,"raw_score":0.6385713371324807},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.5646105486623914,"raw_score":0.5925033136473445}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.23249306339089543,"raw_score":0.42617714737310025,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8783439167958318,"raw_score":0.599519978017754},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.8351080690588664,"raw_score":0.6605732929986473},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.7054862722964204,"raw_score":0.48265700494899544},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.01599061043200395,"raw_score":0.4181639249325488},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.8600632098829009,"raw_score":0.6035752704590436},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.6756729155312914,"raw_score":0.49665075094693284}]}],"personaGroup":"Openness","__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"name":"Vi","screen_name":"Athena_Persona","img":"https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png","commonFriends":[],"posts":[]}}]
```

### **Analyzing Watson Results for Group of users with same dominant trait** (example)
Reqeust Example

``` javascript
GET /api/user/dominantTraitGroup?group=Extraversion

```

Response Example

``` javascript
HTTP/1.1 200 OK
Content-Type: application/json
[{"_id":"58128a1706905f32caecea1a","userId":"VictoriasSecret","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9593268328268352,"raw_score":0.8042978562029528,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.736080680561548,"raw_score":0.527270828457082},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.8621172024125769,"raw_score":0.7204981947934177},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.43099944858166195,"raw_score":0.6411082198980798},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.5488819453227549,"raw_score":0.7409600830632047},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8459043442727547,"raw_score":0.6544146298026056},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.8577837529280956,"raw_score":0.5701423518281533}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.21996860986369154,"raw_score":0.5920303104789135,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.5518548774471103,"raw_score":0.6952997160624715},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.34014755663013385,"raw_score":0.4664621467073739},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.05532004667309792,"raw_score":0.6198315422438281},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.7419611944161886,"raw_score":0.5154277483043126},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.581554371688625,"raw_score":0.5804604249481325},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7669842199771184,"raw_score":0.778735623989381}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.9677293111646503,"raw_score":0.633489325476319,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.7170035004712384,"raw_score":0.5697483009959201},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.5171361880659339,"raw_score":0.6462067116398654},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.18753053820347543,"raw_score":0.5883702580653614},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.35961457895696014,"raw_score":0.5883619461950217},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.498910618486993,"raw_score":0.5603516825559564},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.2227726876583369,"raw_score":0.41412430572001524}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.5051441836509466,"raw_score":0.7427110652820806,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.15555061541922016,"raw_score":0.6695557276151682},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.5397182996267992,"raw_score":0.5853972378268448},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.038543282480076047,"raw_score":0.355092393057523},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.3594330793590088,"raw_score":0.6088258399443284},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.3484583801315462,"raw_score":0.648605903103546},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.3926188222749327,"raw_score":0.5745755601369619}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.39040613354808223,"raw_score":0.4516797531216181,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8896963937844775,"raw_score":0.6027008888375601},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.6583466188324382,"raw_score":0.6219332142832508},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.5264924102496971,"raw_score":0.4526480356596926},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.04333893569089303,"raw_score":0.43474673246367734},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.3528395236481732,"raw_score":0.5268420105206859},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.591576689961656,"raw_score":0.48237752112666576}]}],"personaGroup":"Extraversion","__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}},{"_id":"5813db0799d3a83aee90d16e","userId":"loft","persona":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.9464499015424139,"raw_score":0.800097495472915,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.7470343030167471,"raw_score":0.528475717434034},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.873400826165487,"raw_score":0.723167786506406},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.3764271681185443,"raw_score":0.6353578748952265},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.5757051654407457,"raw_score":0.7443416990320595},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8428063386617681,"raw_score":0.653814482246209},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.924723412112175,"raw_score":0.5886351998862936}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.2439210353626342,"raw_score":0.5956941416595289,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.5518525236250916,"raw_score":0.695299401016851},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.36447563922902937,"raw_score":0.4705993596408933},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.0600187574727184,"raw_score":0.6208284301154667},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.6776144129275695,"raw_score":0.5092576841115743},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.577696396202282,"raw_score":0.5799903616983029},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7626484449013418,"raw_score":0.7782396344503942}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.9591974655090905,"raw_score":0.6287157842904532,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.817633280817548,"raw_score":0.58675784221066},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.47381950069059714,"raw_score":0.6407758084731401},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.10870248537380334,"raw_score":0.5767445392299764},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.40189884811140764,"raw_score":0.5930706465262399},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.4734084735701219,"raw_score":0.5571430392333341},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.231167549940913,"raw_score":0.41555636316077516}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.4506891143743956,"raw_score":0.7372720291634716,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.11156122117612277,"raw_score":0.6623517817892601},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.5437912631329141,"raw_score":0.5860157239055652},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.029108988472070607,"raw_score":0.3484329020176024},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.22900497154502558,"raw_score":0.5907942926550973},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.3394891338591266,"raw_score":0.6476752760277814},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.5595549366420466,"raw_score":0.5919748243904877}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.32391786341661943,"raw_score":0.44161682047666706,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.8761986291014345,"raw_score":0.5989427028059157},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.7855628438891955,"raw_score":0.648063910100089},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.5610965700155178,"raw_score":0.45817710021837},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.07269810464596776,"raw_score":0.4446321310953687},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.44835477371312105,"raw_score":0.5398835467542248},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.6599346362950611,"raw_score":0.4938890022731256}]}],"personaGroup":"Extraversion","__v":0,"watson":{"results":[]},"facebook":{"posts":[]},"twitter":{"commonFriends":[],"posts":[]}}]
```

### **Twitter Anayzed Profile Results** (example)

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

analyze results | type | description
--- | --- | ---
personality_insights.profiler(params, callback) | API | Retrieves the analyzed profile
Actions

> <mark>**API**</mark>

Request Example

``` javascript
personality_insights.profile(params, function(error, response) {
  if(error) {
    console.log('error: ', error);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});

```

Response Example

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

## Twitter API
This gives access to the Twitter API

twitter results | type | description
--- | --- | ---
personality_insights.profiler(params, callback) | API | Retrieves Twitter Data
Actions

> <mark>**API**</mark>

Request Example

``` javascript
NEED API DETAILS

```

Response Example


``` javascript


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







## * **User Authentication**

## Auth0

### **Token Exchange** (template)

begin analysis | type | description
--- | --- | ---
< PATH > | POST | initiate user crendials

Actions

> <mark>**POST**</mark> / < PATH >

POST Example

``` javascript
POST / < PATH >
{
	"userId" : "< USERID >",
	"socialType" : "twitter",

}
```

Response Example

``` javascript
HTTP/1.1 201 OK
Content-Type: application/json
[
 {
  "someKey: "theKey",
  "status": "success"
 }
]
```

