
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdsTxt = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800">
                Ads.txt File
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Authorized Digital Sellers Declaration
              </CardDescription>
              <Badge variant="secondary" className="w-fit mx-auto">
                IAB Tech Lab Standard
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What is ads.txt?</h3>
                  <p className="text-gray-700">
                    The ads.txt file is an initiative by the Interactive Advertising Bureau (IAB) 
                    to increase transparency in programmatic advertising. It allows publishers to 
                    declare which companies are authorized to sell their digital inventory.
                  </p>
                </div>
                
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">File Contents:</h3>
                  <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
### ForeMedia START ###
google.com, pub-1444749628606253, DIRECT, f08c47fec0942fa0
google.com, pub-7011958834410891, DIRECT, f08c47fec0942fa0
google.com, pub-9038930875509700, DIRECT, f08c47fec0942fa0
google.com, pub-1352013179261471, DIRECT, f08c47fec0942fa0
google.com, pub-2949157747658827, DIRECT, f08c47fec0942fa0
google.com, pub-1636075443907055, DIRECT, f08c47fec0942fa0
google.com, pub-3565385483761681, DIRECT, f08c47fec0942fa0
#diDNA adsense
google.com, pub-2829411399762487, DIRECT, f08c47fec0942fa0
#diDNA appnexus
appnexus.com, 8219, DIRECT, f5ab79cb980f11d1
#diDNA indexexchange
indexexchange.com, 186905, DIRECT, 50b1c356f2c5c8fc
#diDNA openx
openx.com, 540254809, RESELLER, 6a698e2ec38604c6
openx.com, 540717738, DIRECT, 6a698e2ec38604c6
#diDNA rubicon
rubiconproject.com, 20100, DIRECT, 0bfd66d529a55807
rubiconproject.com, 20102, DIRECT, 0bfd66d529a55807
#diDNA rtkrubicon
rtk.io, 891, DIRECT
appnexus.com, 2530, RESELLER, f5ab79cb980f11d1
conversantmedia.com, 40790, RESELLER, 03113cd04947736d
gumgum.com, 13504, RESELLER, ffdef49475d318a9
openx.com, 537127577, RESELLER, 6a698e2ec38604c6
pubmatic.com, 79136, RESELLER, 5d62403b186f2ace
rhythmone.com, 1114124056, RESELLER, a670c89d4a324e47
rubiconproject.com, 17790, RESELLER, 0bfd66d529a55807
#contact diDNA
contact=ops@diDNA.io
contact=httpdiDNA.iocontact
#hindsight sovrn
sovrn.com, 273777, DIRECT, fafdf38b16bf6b2b
lijit.com, 273777, DIRECT, fafdf38b16bf6b2b
lijit.com, 273777-eb, DIRECT, fafdf38b16bf6b2b
appnexus.com, 1360, RESELLER, f5ab79cb980f11d1
gumgum.com, 11645, RESELLER, ffdef49475d318a9
openx.com, 538959099, RESELLER, 6a698e2ec38604c6
openx.com, 539924617, RESELLER, 6a698e2ec38604c6
pubmatic.com, 137711, RESELLER, 5d62403b186f2ace
pubmatic.com, 156212, RESELLER, 5d62403b186f2ace
pubmatic.com, 156700, RESELLER, 5d62403b186f2ace
rubiconproject.com, 17960, RESELLER, 0bfd66d529a55807
#hindsight pubmatic
pubmatic.com, 158734, RESELLER, 5d62403b186f2ace
#hindsight index
indexexchange.com, 191060, RESELLER, 50b1c356f2c5c8fc
### ForeMedia START ###

### RITRIBE START ###
google.com, pub-4801279183315751, DIRECT, f08c47fec0942fa0 #RitribesAdsense
google.com, pub-1317319155270959, DIRECT, f08c47fec0942fa0 #RitribesAdx
google.com, pub-5278973888786334, DIRECT, f08c47fec0942fa0 #RitribesMzMAdx
google.com, pub-1956856209985681, DIRECT, f08c47fec0942fa0 #AdX
indexexchange.com, 188838, RESELLER, 50b1c356f2c5c8fc
openx.com, 540447746, RESELLER, 6a698e2ec38604c6
spotxchange.com, 82069, RESELLER, 7842df1d2fe2db34
spotx.tv, 82069, RESELLER, 7842df1d2fe2db34
undertone.com, 3231, RESELLER
appnexus.com, 2234, RESELLER, f5ab79cb980f11d1
openx.com, 537153564, RESELLER, 6a698e2ec38604c6
undertone.com, 3802, RESELLER
adtech.com, 11574, RESELLER
pubmatic.com, 156078, RESELLER, 5d62403b186f2ace
sovrn.com, 264726, RESELLER, fafdf38b16bf6b2b
lijit.com, 264726, RESELLER, fafdf38b16bf6b2b
media.net, 8CU713ZQC, RESELLER
media.net, 8CU6YC6OW, RESELLER
rhythmone.com, 203808374, RESELLER, a670c89d4a324e47
yieldmo.com, 2230484298816456318, RESELLER
telaria.com, 32jid-ohl8i, RESELLER, 1a4e959a1b50034a
tremorhub.com, 32jid-ohl8i, RESELLER, 1a4e959a1b50034a
pubmatic.com, 158541, RESELLER, 5d62403b186f2ace
vdopia.com, 14546, RESELLER, 49a66ce31a704197 #video
chocolateplatform.com, 14546, RESELLER, 49a66ce31a704197 #video
adtech.com, 11574, RESELLER #EBDA
advertising.com, 28488, RESELLER #EBDA
emxdgt.com, 1369, RESELLER, 1e1d41537f7cad7f #TESTING
openx.com, 540780517, RESELLER, 6a698e2ec38604c6
improvedigital.com, 1530, RESELLER #EBDA
indexexchange.com, 184533, RESELLER, 50b1c356f2c5c8fc
google.com, pub-5717092533913515, RESELLER, f08c47fec0942fa0
spotx.tv, 108706, RESELLER, 7842df1d2fe2db34
spotxchange.com,108706, RESELLER, 7842df1d2fe2db34
tremorhub.com, ag0sk, RESELLER, 1a4e959a1b50034a
tremorhub.com, jrkl5-0ac26, RESELLER, 1a4e959a1b50034a
pubmatic.com, 157904, RESELLER, 5d62403b186f2ace
google.com, pub-4801279183315751, DIRECT, f08c47fec0942fa0
### RITRIBE END ###

### THE MONEYTIZER START ###
themoneytizer.com,40783,DIRECT
smartadserver.com,1097,DIRECT
contextweb.com,560288,RESELLER,89ff185a4c4e857c
pubmatic.com,156439,RESELLER
pubmatic.com,154037,RESELLER
rubiconproject.com,16114,RESELLER,0bfd66d529a55807
openx.com,537149888,RESELLER,6a698e2ec38604c6
appnexus.com,3703,RESELLER,f5ab79cb980f11d1
districtm.io,101760,RESELLER,3fd707be9c4527c3
loopme.com,s-2411,RESELLER,6c8d5f95897a5a3b
loopme.com,5679,RESELLER,6c8d5f95897a5a3b
xad.com,958,RESELLER,81cbf0a75a5e0e9a
rubiconproject.com,11740,RESELLER,0bfd66d529a55807
rubiconproject.com,22014,RESELLER,0bfd66d529a55807
appnexus.com,3605,RESELLER,f5ab79cb980f11d1
appnexus.com,11610,RESELLER,f5ab79cb980f11d1
improvedigital.com,1033,RESELLER
appnexus.com,2579,RESELLER
improvedigital.com,1220,RESELLER
quantum-advertising.com,4758,RESELLER
improvedigital.com,1602,RESELLER
google.com,pub-8376169300140203,RESELLER,f08c47fec0942fa0
indexexchange.com,186329,RESELLER
openx.com,540860183,DIRECT,6a698e2ec38604c6
openx.com,540952727,DIRECT,6a698e2ec38604c6
appnexus.com,3153,RESELLER,f5ab79cb980f11d1
adtech.com,12069,RESELLER
connectad.io,73,DIRECT
districtm.io,100750,DIRECT
appnexus.com,1908,RESELLER,f5ab79cb980f11d1
google.com,pub-3960095709930134,RESELLER,f08c47fec0942fa0
google.com,pub-8278416939377896,DIRECT,f08c47fec0942fa0
pubmatic.com,156077,RESELLER,5d62403b186f2ace
openx.com,537145117,RESELLER,6a698e2ec38604c6
adform.com,768,RESELLER
contextweb.com,560489,RESELLER,89ff185a4c4e857c
152media.info,152M11,RESELLER
districtm.io,101639,DIRECT,3fd707be9c4527c3
smartadserver.com,1827,RESELLER
improvedigital.com,335,RESELLER
appnexus.com,3538,RESELLER
appnexus.com,3539,RESELLER
appnexus.com,3540,RESELLER
sublime.xyz,825,DIRECT
freewheel.tv,468625,RESELLER
criteo.com,B-062032,RESELLER,9fac4a4a87c2a44f
criteo.com,B-062033,RESELLER,9fac4a4a87c2a44f
criteo.com,B-062035,RESELLER,9fac4a4a87c2a44f
criteo.com,B-062031,RESELLER,9fac4a4a87c2a44f
quantum-advertising.com,6228,RESELLER
quantum-advertising.com,6197,RESELLER
onetag.com,2a897e3f18e6769,DIRECT
advertising.com,28246,RESELLER
rubiconproject.com,11006,RESELLER,0bfd66d529a55807
google.com,pub-3769010358500643,RESELLER,f08c47fec0942fa0
freewheel.tv,20393,RESELLER
freewheel.tv,24377,RESELLER
yahoo.com,58905,RESELLER,e1a5b5b6e3255540
aol.com,58905,RESELLER,e1a5b5b6e3255540
rhythmone.com,3184058373,DIRECT,a670c89d4a324e47
outbrain.com,01bdd99e5496b7573e1f9de24f6e961107,RESELLER
appnexus.com,7597,RESELLER,f5ab79cb980f11d1
tremorhub.com,q017o-78mlk,RESELLER,1a4e959a1b50034a
advertising.com,12624,RESELLER
fyber.com,f2a848067b5fe77e73205e8024940cbf,RESELLER
freewheel.tv,484721,RESELLER
outbrain.com,0059852b724f4abd5a71eba4b4391d9eea,RESELLER
teads.tv,15429,RESELLER,15a9c44f6d26cbe1
advertising.com,26154,RESELLER
spotxchange.com,225721,RESELLER
Freewheel.tv,741650,RESELLER
rubiconproject.com,17130,RESELLER,0bfd66d529a55807
teads.tv,11398,DIRECT,15a9c44f6d26cbe1
teads.tv,9764,DIRECT,15a9c44f6d26cbe1
teads.tv,11392,DIRECT,15a9c44f6d26cbe1
contextweb.com,558158,RESELLER,89ff185a4c4e857c
betweendigital.com,41430,DIRECT
google.com,pub-5289985627731322,RESELLER,f08c47fec0942fa0
rubiconproject.com,19724,RESELLER,0bfd66d529a55807
chocolateplatform.com,14630,RESELLER,49a66ce31a704197
vdopia.com,14630,RESELLER,49a66ce31a704197
rhythmone.com,3880497124,RESELLER,a670c89d4a324e47
sovrn.com,273644,RESELLER,fafdf38b16bf6b2b
lijit.com,273644,RESELLER,fafdf38b16bf6b2b
lijit.com,273644-eb,RESELLER,fafdf38b16bf6b2b
appnexus.com,1360,RESELLER,f5ab79cb980f11d1
gumgum.com,11645,RESELLER,ffdef49475d318a9
openx.com,538959099,RESELLER,6a698e2ec38604c6
openx.com,539924617,RESELLER,6a698e2ec38604c6
pubmatic.com,137711,RESELLER,5d62403b186f2ace
pubmatic.com,156212,RESELLER,5d62403b186f2ace
pubmatic.com,156700,RESELLER,5d62403b186f2ace
rubiconproject.com,17960,RESELLER,0bfd66d529a55807
openx.com,541177349,RESELLER,6a698e2ec38604c6
openx.com,540298543,RESELLER,6a698e2ec38604c6
pubmatic.com,159668,RESELLER,5d62403b186f2ace
pubmatic.com,158154,RESELLER,5d62403b186f2ace
rubiconproject.com,20744,RESELLER,0bfd66d529a55807
onetag.com,5d1628750185ace,RESELLER
loopme.com,11278,RESELLER,6c8d5f95897a5a3b
improvedigital.com,1532,RESELLER
lockerdome.com,11168851228615936,DIRECT
adagio.io,1015,DIRECT
rubiconproject.com,19116,RESELLER,0bfd66d529a55807
improvedigital.com,1790,DIRECT
pubmatic.com,159110,RESELLER,5d62403b186f2ace
onetag.com,6b859b96c564fbe,RESELLER
indexexchange.com,194558,RESELLER
pubwise.io,68867843,RESELLER,c327c91a93a7cdd3
richaudience.com,1BTOoaD22a,DIRECT
33across.com,0015a00002oUk4aAAC,DIRECT,bbea06d9c4d2853c
appnexus.com,13099,RESELLER
smartadserver.com,4111,RESELLER
yahoo.com,57289,RESELLER,e1a5b5b6e3255540
appnexus.com,10239,RESELLER,f5ab79cb980f11d1
rubiconproject.com,16414,RESELLER,0bfd66d529a55807
sovrn.com,246013,DIRECT,fafdf38b16bf6b2b
lijit.com,246013,DIRECT,fafdf38b16bf6b2b
lijit.com,246013-eb,DIRECT,fafdf38b16bf6b2b
EMXDGT.com,219,DIRECT,1e1d41537f7cad7f
Appnexus.com,1356,RESELLER,f5ab79cb980f11d1
Google.com,pub-5995202563537249,RESELLER,f08c47fec0942fa0
openx.com,540433242,RESELLER,6a698e2ec38604c6
appnexus.com,7118,RESELLER
spotx.tv,108933,RESELLER,7842df1d2fe2db34
spotxchange.com,108933,RESELLER,7842df1d2fe2db34
improvedigital.com,185,RESELLER
adform.com,183,RESELLER
freewheel.tv,33081,RESELLER
freewheel.tv,33601,RESELLER
google.com,pub-8172268348509349,RESELLER,f08c47fec0942fa0
justpremium.com,2976,DIRECT
rhythmone.com,4116102010,RESELLER,a670c89d4a324e47
video.unrulymedia.com,4116102010,RESELLER
adyoulike.com,74d964d64622eda353dbb95047d88f16,DIRECT
spotxchange.com,230037,RESELLER,7842df1d2fe2db34
spotx.tv,230037,RESELLER,7842df1d2fe2db34
freewheel.tv,745362,RESELLER
freewheel.tv,745378,RESELLER
tremorhub.com,ewut4-b6zwq,RESELLER,1a4e959a1b50034a
rubiconproject.com,20736,RESELLER,0bfd66d529a55807
adyoulike.com,aab3b5904a4f1c27f53084dbb14945a1,RESELLER
adyoulike.com,f15f921e8523dda73e32ff2a6069788f,RESELLER
adyoulike.com,6342bc3d028645c3f3b661ab3270729a,RESELLER
adyoulike.com,f963243b8472aa9474d37bb6173c4f18,RESELLER
adform.com,1226,RESELLER
adform.com,1819,RESELLER,9f5210a2f0999e32
adform.com,1943,RESELLER
adform.com,2110,RESELLER
adform.com,2112,RESELLER
adform.com,2727,RESELLER,9f5210a2f0999e32
adform.com,2783,RESELLER,9f5210a2f0999e32
adform.com,622,RESELLER
adtech.com,4687,RESELLER
advertising.com,29036,RESELLER,e1a5b5b6e3255540
advertising.com,7574,RESELLER
aol.com,27093,RESELLER
aol.com,46658,RESELLER
aolcloud.net,4687,RESELLER
appnexus.com,11487,RESELLER,f5ab79cb980f11d1
appnexus.com,1504,RESELLER,f5ab79cb980f11d1
appnexus.com,1785,RESELLER,f5ab79cb980f11d1
appnexus.com,2928,RESELLER
appnexus.com,8233,RESELLER
appnexus.com,9986,RESELLER,f5ab79cb980f11d1
aps.amazon.com,5044,DIRECT
freewheel.tv,1134593,RESELLER
freewheel.tv,1134609,RESELLER
freewheel.tv,13755,RESELLER
freewheel.tv,13945,RESELLER
freewheel.tv,328705,RESELLER
freewheel.tv,328721,RESELLER
google.com,pub-7538555282033458,RESELLER,f08c47fec0942fa0
improvedigital.com,1057,RESELLER
improvedigital.com,907,RESELLER
lijit.com,215294-eb,RESELLER,fafdf38b16bf6b2b
lijit.com,215294,RESELLER,fafdf38b16bf6b2b
loopme.com,11343,RESELLER,6c8d5f95897a5a3b
onetag.com,38980b46b0,RESELLER
openx.com,540022851,RESELLER,6a698e2ec38604c6
pubmatic.com,120391,RESELLER,5d62403b186f2ace
pubmatic.com,156962,RESELLER,5d62403b186f2ace
rhythmone.com,609241817,RESELLER,a670c89d4a324e47
richaudience.com,Ua8BIWjxkR,RESELLER
rubiconproject.com,16568,RESELLER,0bfd66d529a55807
smartadserver.com,2058,RESELLER
smartadserver.com,3668,RESELLER
sovrn.com,257611,RESELLER,fafdf38b16bf6b2b
spotx.tv,146631,RESELLER,7842df1d2fe2db34
spotx.tv,244525,RESELLER,7842df1d2fe2db34
spotxchange.com,146631,RESELLER,7842df1d2fe2db34
spotxchange.com,244525,RESELLER,7842df1d2fe2db34
video.unrulymedia.com,609241817,RESELLER
viralize.com,5193,DIRECT
google.com,pub-8241049497608997,RESELLER,f08c47fec0942fa0
yahoo.com,1832200,DIRECT,e1a5b5b6e3255540
smartadserver.com,4144,DIRECT
smartadserver.com,4016,DIRECT
smartadserver.com,4012,DIRECT
smartadserver.com,4071,DIRECT
smartadserver.com,4073,DIRECT
smartadserver.com,4074,DIRECT
google.com,pub-8933329999391104,RESELLER,f08c47fec0942fa0
google.com,pub-1325340429823502,RESELLER,f08c47fec0942fa0
google.com,pub-6110672335579159,RESELLER,f08c47fec0942fa0
adpushup.com,cfcb90bc3d34a71413ca5d041db539a8,DIRECT,b0b8ff8485794fdd
pubmatic.com,160925,RESELLER,5d62403b186f2ace
rubiconproject.com,15636,RESELLER,0bfd66d529a55807
otm-r.com,23,RESELLER
taboola.com,1196805,DIRECT,c228e6794e811952
spotx.tv,71451,RESELLER
spotxchange.com,71451,RESELLER
advertising.com,8603,RESELLER
pubmatic.com,156307,RESELLER,5d62403b186f2ace
appnexus.com,3364,RESELLER
Indexexchange.com,183756,RESELLER
contextweb.com,560382,RESELLER
openx.com,539154393,RESELLER
tremorhub.com,z87wm,RESELLER,1a4e959a1b50034a
rubiconproject.com,16698,RESELLER,0bfd66d529a55807
freewheel.tv,799841,RESELLER
freewheel.tv,799921,RESELLER
aol.com,53392,RESELLER
rhythmone.com,1166984029,RESELLER,a670c89d4a324e47
richaudience.com,mA6M9Pbvib,DIRECT
adform.com,1942,DIRECT
adform.com,1941,DIRECT
advertising.com,7574,DIRECT
aerserv.com,2750,RESELLER,2ce496b9f80eb9fa
appnexus.com,2928,DIRECT
appnexus.com,8233,DIRECT
contextweb.com,560520,RESELLER
google.com,pub-9115524111147081,RESELLER,f08c47fec0942fa0
google.com,pub-4673227357197067,RESELLER,f08c47fec0942fa0
indexexchange.com,179394,RESELLER
lijit.com,249425,RESELLER
mobfox.com,74240,RESELLER
mobfox.com,45499,RESELLER
openx.com,539625136,RESELLER
pubmatic.com,81564,DIRECT,5d62403b186f2ace
pubmatic.com,156538,DIRECT,5d62403b186f2ace
rubiconproject.com,13510,DIRECT
smaato.com,1100037086,RESELLER
smaato.com,1100000579,RESELLER
smartadserver.com,2640,RESELLER
smartadserver.com,2441,RESELLER
sovrn.com,249425,RESELLER
spotx.tv,173175,DIRECT
spotx.tv,173177,DIRECT
spotxchange.com,173177,DIRECT
spotxchange.com,173175,DIRECT
yahoo.com,57857,RESELLER,e1a5b5b6e3255540
smartadserver.com,2161,DIRECT
pubmatic.com,156439,RESELLER,5d62403b186f2ace
pubmatic.com,154037,RESELLER,5d62403b186f2ace
rhythmone.com,2564526802,RESELLER,a670c89d4a324e47
adyoulike.com,b4bf4fdd9b0b915f746f6747ff432bde,RESELLER
smartadserver.com,3668,DIRECT
rubiconproject.com,18194,DIRECT,0bfd66d529a55807
spotx.tv,202009,DIRECT,7842df1d2fe2db34
spotxchange.com,202009,RESELLER,7842df1d2fe2db34
yieldlab.net,6378054,DIRECT
freewheel.tv,1076049,DIRECT
freewheel.tv,1076065,RESELLER
appnexus.com,8833,DIRECT,f5ab79cb980f11d1
appnexus.com,8833,RESELLER,f5ab79cb980f11d1
freewheel.tv,228,RESELLER
smartstream.tv,6459,RESELLER
appnexus.com,3368,RESELLER
yieldlab.net,2172218,RESELLER
google.com,pub-9829476400767085,DIRECT,f08c47fec0942fa0
freewheel.tv,1131585,RESELLER
piximedia.com,21168,DIRECT
adtech.com,4803,RESELLER
freewheel.tv,282482,RESELLER
freewheel.tv,283026,RESELLER
pubmatic.com,156492,RESELLER,5d62403b186f2ace
smartadserver.com,3347,DIRECT
pubmatic.com,156030,RESELLER,5d62403b186f2ace
rubiconproject.com,13132,RESELLER,0bfd66d529a55807
groundtruth.com,107,RESELLER,81cbf0a75a5e0e9a
appnexus.com,2579,DIRECT
appnexus.com,884,DIRECT
improvedigital.com,1220,DIRECT
google.com,pub-1313834454494130,RESELLER,f08c47fec0942fa0
google.com,pub-8536066741654249,RESELLER,f08c47fec0942fa0
triplelift.com,4338,DIRECT,6c33edb13117fd86
appnexus.com,1314,RESELLER
adform.com,2623,DIRECT,9f5210a2f0999e32
nobid.io,21968366300,DIRECT
google.com,pub-1051504991213440,DIRECT,f08c47fec0942fa0
google.com,pub-1835489473992347,DIRECT,f08c47fec0942fa0
google.com,pub-1789253751882305,DIRECT,f08c47fec0942fa0
google.com,pub-1950215063958302,DIRECT,f08c47fec0942fa0
appnexus.com,11429,DIRECT
gumgum.com,13926,DIRECT,ffdef49475d318a9
33across.com,0010b00002Mq2FYAAZ,DIRECT,bbea06d9c4d2853c
sovrn.com,273657,DIRECT,fafdf38b16bf6b2b
lijit.com,273657,DIRECT,fafdf38b16bf6b2b
lijit.com,273657-eb,DIRECT,fafdf38b16bf6b2b
revcontent.com,124709,DIRECT
appnexus.com,7666,RESELLER,f5ab79cb980f11d1
rubiconproject.com,156042,RESELLER,0bfd66d529a55807
my6sense.com,9732,RESELLER
criteo.com,7822,RESELLER
pubmatic.com,156423,RESELLER,5d62403b186f2ace
appnexus.com,1001,RESELLER,f5ab79cb980f11d1
appnexus.com,3135,RESELLER,f5ab79cb980f11d1
openx.com,537120563,RESELLER,6a698e2ec38604c6
openx.com,539392223,RESELLER,6a698e2ec38604c6
rhythmone.com,2439829435,RESELLER,a670c89d4a324e47
emxdgt.com,326,RESELLER,1e1d41537f7cad7f
gumgum.com,13318,RESELLER,ffdef49475d318a9
google.com,pub-9557089510405422,RESELLER,f08c47fec0942fa0
adtech.com,9993,RESELLER
adtech.com,12094,RESELLER
advangelists.com,8d3bba7425e7c98c50f52ca1b52d3735,RESELLER,60d26397ec060f98
rubiconproject.com,13702,DIRECT
pubmatic.com,157898,DIRECT,5d62403b186f2ace
adtech.com,10109,DIRECT
aolcloud.net,10109,DIRECT
openx.com,540650310,DIRECT,6a698e2ec38604c6
sonobi.com,bc2afab5f7,DIRECT,d1a215d9eb5aee9e
appnexus.com,9538,DIRECT
triplelift.com,9789,DIRECT,6c33edb13117fd86
pubmatic.com,159302,DIRECT,5d62403b186f2ace
decenterads.com,933,DIRECT
onetag.com,694e68b73971b58,DIRECT
sonobi.com,7ad1b9f952,RESELLER,d1a215d9eb5aee9e
nativo.com,5677,DIRECT
google.com,pub-1835489473992347,RESELLER,f08c47fec0942fa0
durationmedia.net,21968366300,DIRECT
yahoo.com,57872,DIRECT
smartadserver.com,3447,DIRECT
xandr.com,11429,RESELLER,f5ab79cb980f11d1
xandr.com,12701,RESELLER,f5ab79cb980f11d1
rubiconproject.com,13702,DIRECT,0bfd66d529a55807
video.unrulymedia.com,3736557092,RESELLER
rhythmone.com,3736557092,RESELLER,a670c89d4a324e47
admanmedia.com,812,DIRECT
rhythmone.com,1059622079,RESELLER,a670c89d4a324e47
contextweb.com,560606,RESELLER,89ff185a4c4e857c
amxrtb.com,105199579,DIRECT
appnexus.com,12290,RESELLER,f5ab79cb980f11d1
indexexchange.com,191503,RESELLER,50b1c356f2c5c8fc
pubmatic.com,158355,RESELLER,5d62403b186f2ace
indexexchange.com,195491,RESELLER,50b1c356f2c5c8fc
opera.com,pub5688296365760,DIRECT,55a0c5fd61378de3
indexexchange.com,192806,RESELLER,50b1c356f2c5c8fc
Pubmatic.com,158565,RESELLER,5d62403b186f2ace
smaato.com,1100042823,DIRECT,07bcf65f187117b4
rubiconproject.com,17608,RESELLER,0bfd66d529a55807
triplelift.com,10522,RESELLER,6c33edb13117fd86
smartadserver.com,4140,RESELLER
appnexus.com,2081,RESELLER,f5ab79cb980f11d1
admixer.net,5e14a984-b5c9-4ffb-87e9-d8edba8492d3,DIRECT
sovrn.com,268876,RESELLER,fafdf38b16bf6b2b
lijit.com,268876,RESELLER,fafdf38b16bf6b2b
openx.com,541031350,RESELLER,6a698e2ec38604c6
improvedigital.com,1556,RESELLER
axonix.com,56222,RESELLER
Contextweb.com,562309,RESELLER,89ff185a4c4e857c
conversantmedia.com,100066,RESELLER,03113cd04947736d
rubiconproject.com,12186,RESELLER,0bfd66d529a55807
onetag.com,72686cdf31f128b,RESELLER
lemmatechnologies.com,552,RESELLER,7829010c5bebd1fb
lemmatechnologies.com,144,RESELLER,7829010c5bebd1fb
altitude-arena.com,FIRD0F0P6T2MLDMG7GCJFTBAI8,RESELLER
leanback.digital,ESS-D666,RESELLER,b1d30350acaf0176
pubmatic.com,156494,RESELLER,5d62403b186f2ace
smartadserver.com,3564,RESELLER
admatic.com.tr,adm-pub-185375301865,RESELLER
improvedigital.com,912,RESELLER
pubmatic.com,159078,RESELLER,5d62403b186f2ace
adform.com,2600,RESELLER
stroeer.com,17938,RESELLER
sovrn.com,380632,RESELLER,fafdf38b16bf6b2b
lijit.com,380632,RESELLER,fafdf38b16bf6b2b
lijit.com,380632-eb,DIRECT,fafdf38b16bf6b2b
uis.mobfox.com,1424,RESELLER,5529a3d1f59865be
openx.com,539249210,RESELLER,6a698e2ec38604c6
impactify.io,1146,DIRECT
improvedigital.com,1058,RESELLER
google.com,pub-1343218370015870,RESELLER,f08c47fec0942fa0
google.com,pub-4301669675472368,RESELLER,f08c47fec0942fa0
spotxchange.com,176703,RESELLER,7842df1d2fe2db34
spotx.tv,176703,RESELLER,7842df1d2fe2db34
appnexus.com,11197,RESELLER,f5ab79cb980f11d1
freewheel.tv,282594,RESELLER
freewheel.tv,282786,RESELLER
freewheel.tv,282802,RESELLER
freewheel.tv,282818,RESELLER
freewheel.tv,282850,RESELLER
yahoo.com,1761548,RESELLER
rubiconproject.com,19688,RESELLER,0bfd66d529a55807
advertising.com,9516,RESELLER
smartadserver.com,2974,RESELLER
google.com,pub-7019376976432612,RESELLER
google.com,pub-5373693997956134,RESELLER,f08c47fec0942fa0
google.com,pub-4177862836555934,RESELLER,f08c47fec0942fa0
google.com,pub-1071602463683652,RESELLER,f08c47fec0942fa0
connectad.io,147,DIRECT
pubmatic.com,55990,RESELLER,5d62403b186f2ace
indexexchange.com,190906,DIRECT,50b1c356f2c5c8fc
appnexus.com,8738,RESELLER,f5ab79cb980f11d1
EMXDGT.com,1138,DIRECT,1e1d41537f7cad7f
sovrn.com,244287,DIRECT,fafdf38b16bf6b2b
lijit.com,244287,DIRECT,fafdf38b16bf6b2b
lijit.com,244287-eb,DIRECT,fafdf38b16bf6b2b
yahoo.com,55248,DIRECT
rubiconproject.com,17250,RESELLER,0bfd66d529a55807
xad.com,240,RESELLER,81cbf0a75a5e0e9a
onetag.com,5d4e109247a89f6,DIRECT
RTBHOUSE.COM,ofNe4Md3yOLt0qckkfER,DIRECT
adpone.com,59e252f6de67f6c8d1f8,DIRECT
connectad.io,50,DIRECT,85ac85a30c93b3e5
indexexchange.com,196713,DIRECT
criteo.com,B-060278,DIRECT,9fac4a4a87c2a44f
richaudience.com,06ehcbcfzk,DIRECT
betweendigital.com,42666,DIRECT
adform.com,2474,DIRECT,9f5210a2f0999e32
lijit.com,257429,RESELLER,fafdf38b16bf6b2b
sovrn.com,257429,RESELLER,fafdf38b16bf6b2b
openx.com,540603695,RESELLER,6a698e2ec38604c6
openx.com,539966405,DIRECT,6a698e2ec38604c6
pubmatic.com,157841,RESELLER,5d62403b186f2ace
pubmatic.com,156383,RESELLER,5d62403b186f2ace
smartadserver.com,1743,RESELLER,060d053dcf45cbf3
indexexchange.com,192450,DIRECT,50b1c356f2c5c8fc
appnexus.com,10264,RESELLER,f5ab79cb980f11d1
appnexus.com,10264,DIRECT,f5ab79cb980f11d1
rubiconproject.com,20266,RESELLER,0bfd66d529a55807
rubiconproject.com,17210,RESELLER,0bfd66d529a55807
google.com,pub-2128757167812663,RESELLER,f08c47fec0942fa0
adtelligent.com,315476,DIRECT
33across.com,0010b00002T3JniAAF,RESELLER,bbea06d9c4d2853c
bidtellect.com,1407,RESELLER,1c34aa2d85d45e93
contextweb.com,558355,RESELLER
EMXDGT.com,1284,RESELLER,1e1d41537f7cad7f
gumgum.com,13579,RESELLER,ffdef49475d318a9
improvedigital.com,1628,RESELLER
lijit.com,310770,RESELLER,fafdf38b16bf6b2b
onetag.com,59a18369e249bfb,RESELLER
openx.com,541177116,RESELLER,6a698e2ec38604c6
pubmatic.com,157897,RESELLER,5d62403b186f2ace
rhythmone.com,78519861,RESELLER,a670c89d4a324e47
sovrn.com,310770,RESELLER,fafdf38b16bf6b2b
synacor.com,82151,RESELLER,e108f11b2cdf7d5b
adform.com,2600,DIRECT
admatic.com.tr,adm-pub-185375301865,DIRECT
adyoulike.com,438e40b69c9e19f81b51401dce6e8be4,DIRECT,4ad745ead2958bf7
appnexus.com,11924,RESELLER,f5ab79cb980f11d1
appnexus.com,9733,RESELLER,f5ab79cb980f11d1
contextweb.com,558355,RESELLER,89ff185a4c4e857c
e-planning.net,835fbafe26d231b1,DIRECT,c1ba615865ed87b2
gumgum.com,13579,DIRECT,ffdef49475d318a9
indexexchange.com,189529,DIRECT,50b1c356f2c5c8fc
indexexchange.com,191973,RESELLER,50b1c356f2c5c8fc
lijit.com,310770,DIRECT,fafdf38b16bf6b2b
loopme.com,11378,RESELLER,6c8d5f95897a5a3b
onetag.com,59a18369e249bfb,DIRECT
pubmatic.com,156631,RESELLER,5d62403b186f2ace
pubmatic.com,156813,DIRECT,5d62403b186f2ace
pubmatic.com,159078,DIRECT,5d62403b186f2ace
rhythmone.com,1767353092,RESELLER,a670c89d4a324e47
rubiconproject.com,12398,RESELLER,0bfd66d529a55807
rubiconproject.com,17184,DIRECT,0bfd66d529a55807
rubiconproject.com,21642,RESELLER,0bfd66d529a55807
sovrn.com,310770,DIRECT,fafdf38b16bf6b2b
spotim.market,4446666,DIRECT,077e5f709d15bdbb
stroeer.com,17938,DIRECT
152media.info,152M10,RESELLER
rhythmone.com,3139274702404301777,DIRECT,a670c89d4a324e47
video.unrulymedia.com,3139274702404301777,DIRECT
indexexchange.com,182257,RESELLER,50b1c356f2c5c8fc
appnexus.com,6849,RESELLER,f5ab79cb980f11d1
rubiconproject.com,15268,RESELLER,0bfd66d529a55807
pubmatic.com,159277,RESELLER,5d62403b186f2ace
advertising.com,28605,RESELLER
openx.com,543878511,RESELLER,6a698e2ec38604c6
improvedigital.com,1699,RESELLER
pubmatic.com,161562,RESELLER,5d62403b186f2ace
vidoomy.com,2252369,DIRECT
Qwarry.com,12,DIRECT,bf16059e4b3fb977
themediagrid.com,IH9PA4,DIRECT,35d5010d7789b49d
criteo.com,B-059164,DIRECT,9fac4a4a87c2a44f
themediagrid.com,7WYFHG,DIRECT,35d5010d7789b49d
amxrtb.com,105199542,DIRECT
appnexus.com,11786,RESELLER,f5ab79cb980f11d1
lijit.com,260380,RESELLER,fafdf38b16bf6b2b
sovrn.com,260380,RESELLER,fafdf38b16bf6b2b
appnexus.com,9393,RESELLER,f5ab79cb980f11d1
advertising.com,28305,RESELLER
adform.com,2865,RESELLER
smartadserver.com,3056,DIRECT
viralize.com,4720,DIRECT
adform.com,2688,RESELLER,9f5210a2f0999e32
adform.com,2437,RESELLER,9f5210a2f0999e32
freewheel.tv,1003361,DIRECT
freewheel.tv,1003377,RESELLER
freewheel.tv,939745,DIRECT
freewheel.tv,941377,RESELLER
pubmatic.com,156695,DIRECT,5d62403b186f2ace
pubmatic.com,160405,RESELLER,5d62403b186f2ace
improvedigital.com,1227,RESELLER
spotxchange.com,241914,RESELLER,7842df1d2fe2db34
spotx.tv,241914,RESELLER,7842df1d2fe2db34
conversantmedia.com,100098,RESELLER,03113cd04947736d
appnexus.com,4052,RESELLER
contextweb.com,561998,RESELLER,89ff185a4c4e857c
openx.com,540031703,RESELLER,6a698e2ec38604c6
pubmatic.com,158100,RESELLER,5d62403b186f2ace
yahoo.com,55771,RESELLER,e1a5b5b6e3255540
loopme.com,11230,RESELLER,6c8d5f95897a5a3b
freewheel.tv,1137761,RESELLER
freewheel.tv,1138529,RESELLER
freewheel.tv,962145,RESELLER
freewheel.tv,962209,RESELLER
improvedigital.com,1175,RESELLER
freewheel.tv,1174465,RESELLER
freewheel.tv,1174481,RESELLER
undertone.com,3393,RESELLER
appnexus.com,2234,RESELLER
openx.com,537153564,RESELLER,6a698e2ec38604c6
ogury.com,f00b15ea-6210-4e34-bb76-384d7003d8e8,DIRECT
appnexus.com,11470,RESELLER
avantisvideo.com,8798,DIRECT
Advertising.com,23598,DIRECT
advertising.com,28918,DIRECT
Appnexus.com,10062,DIRECT,f5ab79cb980f11d1
EMXDGT.com,1745,DIRECT,1e1d41537f7cad7f
google.com,pub-2024690810381654,RESELLER,f08c47fec0942fa0
indexexchange.com,192106,DIRECT
indexexchange.com,193375,RESELLER
Pubmatic.com,159970,RESELLER,5d62403b186f2ace
Pubmatic.com,160454,RESELLER,5d62403b186f2ace
Pubmatic.com,160265,RESELLER,5d62403b186f2ace
Contextweb.com,562357,DIRECT,89ff185a4c4e857c
spotxchange.com,165877,RESELLER,7842df1d2fe2db34
spotx.tv,165877,RESELLER,7842df1d2fe2db34
rhythmone.com,871930104,DIRECT,a670c89d4a324e47
video.unrulymedia.com,871930104,DIRECT
google.com,pub-5717092533913515,RESELLER,f08c47fec0942fa0
indexexchange.com,185192,DIRECT
rhythmone.com,1149317856,DIRECT,a670c89d4a324e47
rubiconproject.com,17346,DIRECT,0bfd66d529a55807
pubmatic.com,157904,DIRECT,5d62403b186f2ace
sharethrough.com,8a03a67b,DIRECT,d53b998a7bd4ecd2
indexexchange.com,186046,RESELLER,50b1c356f2c5c8fc
spotxchange.com,212457,RESELLER
spotx.tv,212457,RESELLER,7842df1d2fe2db34
pubmatic.com,156557,RESELLER
pubmatic.com,158723,RESELLER,5d62403b186f2ace
rubiconproject.com,18694,RESELLER,0bfd66d529a55807
openx.com,540274407,RESELLER,6a698e2ec38604c6
33across.com,0013300001kQj2HAAS,RESELLER,bbea06d9c4d2853c
smaato.com,1100047713,RESELLER,07bcf65f187117b4
appnexus.com,9027,DIRECT
aax.media,AAX23QE99,DIRECT
Media.net,8CUOMF1PP,DIRECT
pubmatic.com,158984,RESELLER,5d62403b186f2ace
openx.com,543731411,RESELLER,6a698e2ec38604c6
indexexchange.com,192393,RESELLER
districtm.io,100600,RESELLER
sonobi.com,83729e979b,RESELLER
onetag.com,66d66dec41ef0cc,RESELLER
appnexus.com,10273,RESELLER,f5ab79cb980f11d1
indexexchange.com,192922,RESELLER,50b1c356f2c5c8fc
onetag.com,5adb88524e24e50,RESELLER
engagebdr.com,10427,RESELLER
google.com,pub-9945624415527048,DIRECT,f08c47fec0942fa0
Media.net,8PR6YK195,DIRECT
EMXDGT.com,1759,RESELLER,1e1d41537f7cad7f
google.com,pub-7310785613215102,DIRECT,f08c47fec0942fa0
google.com,pub-8600492219386651,DIRECT,f08c47fec0942fa0
e-planning.net,d6e04fe7533a7d3b,DIRECT,c1ba615865ed87b2
indexexchange.com,190243,DIRECT
richaudience.com,25BiP9IMgN,DIRECT
aol.com,57992,RESELLER,e1a5b5b6e3255540
Yahoo.com,57992,RESELLER,e1a5b5b6e3255540
sonobi.com,8efb591506,DIRECT,d1a215d9eb5aee9e
sonobi.com,4d443a3ea2,RESELLER,d1a215d9eb5aee9e
adriver.ru,187150,DIRECT
smartadserver.com,2491,RESELLER
advertising.com,21483,DIRECT,e1a5b5b6e3255540
improvedigital.com,1010,RESELLER
indexexchange.com,193216,RESELLER
admanmedia.com,722,DIRECT
video.unrulymedia.com,3948367200,RESELLER
rhythmone.com,3948367200,RESELLER,a670c89d4a324e47
appnexus.com,8804,RESELLER,f5ab79cb980f11d1
smartadserver.com,3713,RESELLER
improvedigital.com,1668,RESELLER
indexexchange.com,191497,RESELLER
openx.com,540866936,RESELLER,6a698e2ec38604c6
appnexus.com,10040,RESELLER
rubiconproject.com,19814,RESELLER,0bfd66d529a55807
spotxchange.com,178357,RESELLER,7842df1d2fe2db34
spotx.tv,178357,RESELLER,7842df1d2fe2db34
pubmatic.com,158810,RESELLER,5d62403b186f2ace
pubmatic.com,158481,DIRECT,5d62403b186f2ace
spotx.tv,238936,RESELLER,7842df1d2fe2db34
rubiconproject.com,19668,RESELLER,0bfd66d529a55807
indexexchange.com,190856,RESELLER,50b1c356f2c5c8fc
pubmatic.com,158615,RESELLER,5d62403b186f2ace
indexexchange.com,183965,RESELLER,50b1c356f2c5c8fc
pubmatic.com,156458,RESELLER,5d62403b186f2ace
pubmatic.com,156325,RESELLER,5d62403b186f2ace
pubmatic.com,156674,RESELLER,5d62403b186f2ace
rubiconproject.com,18222,RESELLER,0bfd66d529a55807
rubiconproject.com,16114,DIRECT
azeriondigital.com,43710415,DIRECT
appnexus.com,12223,RESELLER,f5ab79cb980f11d1
improvedigital.com,1210,RESELLER
improvedigital.com,1221,RESELLER
pubmatic.com,150561,RESELLER,5d62403b186f2ace
EMXDGT.com,1836,DIRECT,1e1d41537f7cad7f
EMXDGT.com,1289,DIRECT,1e1d41537f7cad7f
advertising.com,28335,DIRECT,e1a5b5b6e3255540
smilewanted.com,1362,DIRECT
adyoulike.com,b3e21aeb2e950aa59e5e8cc1b6dd6f8e,DIRECT,4ad745ead2958bf7
loopme.com,11013,DIRECT,6c8d5f95897a5a3b
connectad.io,204,DIRECT,85ac85a30c93b3e5
EMXDGT.com,1701,DIRECT,1e1d41537f7cad7f
quantum-advertising.com,6222,RESELLER
themediagrid.com,BG415O,DIRECT,35d5010d7789b49d
smartadserver.com,3392,DIRECT
appnexus.com,10212,RESELLER
improvedigital.com,1633,RESELLER
yahoo.com,58977,RESELLER,e1a5b5b6e3255540
onetag.com,75779831fd8c740,DIRECT
adyoulike.com,22e5955a10a7f98b037f13dd297cdd74,DIRECT,4ad745ead2958bf7
freewheel.tv,1089937,DIRECT
freewheel.tv,1099761,RESELLER
bliink.io,cfe6f06e-2ff0-11eb-8d68-7aaa96b266b5,DIRECT
gothamads.com,1750,DIRECT,d9c86e5dec870222
connectad.io,190,DIRECT,85ac85a30c93b3e5
improvedigital.com,1937,RESELLER
e-planning.net,54275499d4eb431b,DIRECT,c1ba615865ed87b2
trmqb.com,4512,DIRECT
ssp.logan.ai,LG9,RESELLER
opera.com,pub6060502141568,DIRECT,55a0c5fd61378de3
openx.com,544015448,RESELLER,6a698e2ec38604c6
synacor.com,82460,DIRECT,e108f11b2cdf7d5b
video.unrulymedia.com,123476257,RESELLER
bizzclick.com,30,RESELLER,7e936b1feafdaa61
betweendigital.com,43818,RESELLER
smaato.com,1100042823,RESELLER,07bcf65f187117b4
mobilefuse.com,3719,RESELLER,71e88b065d69c021
conversantmedia.com,100269,RESELLER,03113cd04947736d
outbrain.com,002d7f7ba0bd74452f2b155d0dfb5cd6c8,RESELLER
yahoo.com,58935,RESELLER,e1a5b5b6e3255540
inmobi.com,f58140d7af1a4fcb83deb5b1c76f0c04,RESELLER,83e75a7ae333ca9d
tpmn.io,472,RESELLER
seedtag.com,619f620afe426c0700a5c30d,DIRECT
seedtag.com,61a78375e0fb8f0800ec50fb,DIRECT
seedtag.com,61a783c8517244070096f118,DIRECT
seedtag.com,61a783f0e0fb8f0800ec50fc,DIRECT
seedtag.com,61a7804cfe829e0700f0db81,DIRECT
seedtag.com,61a7849ac342880700fc6da2,DIRECT
seedtag.com,61a784f8fe829e0700f0dbba,DIRECT
seedtag.com,61a78466517244070096f119,DIRECT
seedtag.com,61a78446c342880700fc6da1,DIRECT
pubmatic.com,157743,DIRECT,5d62403b186f2ace
spotxchange.com,249286,DIRECT,7842df1d2fe2db34
spotx.tv,249286,DIRECT,7842df1d2fe2db34
rubiconproject.com,17280,DIRECT,0bfd66d529a55807
33across.com,0010b00002MptHCAAZ,DIRECT,bbea06d9c4d2853c
indexexchange.com,191730,RESELLER
improvedigital.com,1680,RESELLER
smartadserver.com,3050,DIRECT
contextweb.com,560288,DIRECT,89ff185a4c4e857c
openx.com,537149888,DIRECT,6a698e2ec38604c6
districtm.io,101760,DIRECT,3fd707be9c4527c3
xandr.com,4009,DIRECT
richaudience.com,ns9qrKJLKD,DIRECT
aerserv.com,2750,DIRECT,2ce496b9f80eb9fa
aolcloud.net,4687,DIRECT
mobfox.com,74240,DIRECT
openx.com,539625136,DIRECT
smaato.com,1100037086,DIRECT
adyoulike.com,83d15ef72d387a1e60e5a1399a2b0c03,DIRECT
yahoo.com,58578,DIRECT,e1a5b5b6e3255540
aol.com,58578,DIRECT,e1a5b5b6e3255540
advertising.com,29034,DIRECT
adform.com,1889,RESELLER,9f5210a2f0999e32
condigolabs.com,c6blkn6kv5dumh3tsfj0,RESELLER
33across.com,0015a00002vNEdMAAW,DIRECT,bbea06d9c4d2853c
conversantmedia.com,100141,DIRECT
gumgum.com,15500,RESELLER,ffdef49475d318a9
justpremium.com,2976,RESELLER
appnexus.com,2758,RESELLER,f5ab79cb980f11d1
rubiconproject.com,23434,RESELLER,0bfd66d529a55807
openx.com,537149485,RESELLER,6a698e2ec38604c6
admanmedia.com,799,RESELLER
smartadserver.com,4005,RESELLER
33across.com,0013300001r0t9mAAA,RESELLER,bbea06d9c4d2853c
vidoomy.com,62496,DIRECT
google.com,pub-2831120411392012,RESELLER,f08c47fec0942fa0
tremorhub.com,4cywq-a04wk,RESELLER,1a4e959a1b50034a
yieldmo.com,2731991718797714293,DIRECT
adform.com,2742,RESELLER
advertising.com,22762,RESELLER
aol.com,22762,RESELLER
adtech.com,11303,RESELLER
advertising.com,26631,RESELLER
appnexus.com,12475,RESELLER,f5ab79cb980f11d1
pubmatic.com,156498,RESELLER,5d62403b186f2ace
freewheel.tv,872257,RESELLER
freewheel.tv,894193,RESELLER
openx.com,540804929,RESELLER,6a698e2ec38604c6
lkqd.net,430,RESELLER,59c49fa9598a0117
lkqd.com,430,RESELLER,59c49fa9598a0117
districtm.io,101540,RESELLER,3fd707be9c4527c3
spotxchange.com,218443,RESELLER,7842df1d2fe2db34
spotx.tv,218443,RESELLER,7842df1d2fe2db34
emxdgt.com,1495,RESELLER,1e1d41537f7cad7f
beachfront.com,6547,RESELLER
smartadserver.com,3136,RESELLER
smartadserver.com,1963,RESELLER
smartadserver.com,3276,RESELLER
improvedigital.com,1738,RESELLER
conversantmedia.com,100112,DIRECT,03113cd04947736d
appnexus.com,4052,RESELLER,f5ab79cb980f11d1
aol.com,55011,RESELLER,e1a5b5b6e3255540
indexexchange.com,192311,RESELLER
indexexchange.com,193069,RESELLER
loopme.com,11058,RESELLER,6c8d5f95897a5a3b
google.com,pub-7995104076770938,DIRECT,f08c47fec0942fa0
appnexus.com,8790,RESELLER,f5ab79cb980f11d1
indexexchange.com,187924,DIRECT
indexexchange.com,189458,DIRECT
openx.com,540322758,RESELLER,6a698e2ec38604c6
pubmatic.com,157102,RESELLER,5d62403b186f2ace
pubmatic.com,157163,RESELLER,5d62403b186f2ace
pubmatic.com,157752,RESELLER,5d62403b186f2ace
rubiconproject.com,13894,RESELLER,0bfd66d529a55807
rubiconproject.com,18008,RESELLER,0bfd66d529a55807
yahoo.com,56860,RESELLER,e1a5b5b6e3255540
aol.com,56860,RESELLER,e1a5b5b6e3255540
rhythmone.com,274200170,RESELLER,a670c89d4a324e47
video.unrulymedia.com,274200170,RESELLER,a670c89d4a324e47
yahoo.com,59652,RESELLER,e1a5b5b6e3255540
appnexus.com,1868,RESELLER
appnexus.com,11664,RESELLER
EMXDGT.com,273,RESELLER,1e1d41537f7cad7f
indexexchange.com,184110,RESELLER,50b1c356f2c5c8fc
indexexchange.com,184349,RESELLER,50b1c356f2c5c8fc
indexexchange.com,195924,DIRECT
indexexchange.com,183875,RESELLER,50b1c356f2c5c8fc
indexexchange.com,184626,RESELLER,50b1c356f2c5c8fc
openx.com,544096208,RESELLER,6a698e2ec38604c6
pubmatic.com,156971,RESELLER,5d62403b186f2ace
pubmatic.com,133799,RESELLER,5d62403b186f2ace
pubmatic.com,156078,RESELLER,5d62403b186f2ace
pubmatic.com,157840,RESELLER,5d62403b186f2ace
pubmatic.com,155967,RESELLER,5d62403b186f2ace
pubmatic.com,160048,RESELLER,5d62403b186f2ace
pubmatic.com,156084,RESELLER,5d62403b186f2ace
contextweb.com,562258,RESELLER,89ff185a4c4e857c
telaria.com,4jdlm-4qsx6,RESELLER,1a4e959a1b50034a
tremorhub.com,4jdlm-4qsx6,RESELLER,1a4e959a1b50034a
triplelift.com,9979,RESELLER,6c33edb13117fd86
media.net,8CUIHQJ4B,RESELLER
indexexchange.com,196845,RESELLER,50b1c356f2c5c8fc
sovrn.com,378732,RESELLER,fafdf38b16bf6b2b
lijit.com,378732,RESELLER,fafdf38b16bf6b2b
33across.com,0010b00002EdWnZAAV,RESELLER,bbea06d9c4d2853c
pubmatic.com,161784,RESELLER,5d62403b186f2ace
pubmatic.com,161593,RESELLER,5d62403b186f2ace
improvedigital.com,1790,RESELLER
smartadserver.com,3554,RESELLER
33across.com,0015a00002oUk4aAAC,RESELLER,bbea06d9c4d2853c
richaudience.com,1BTOoaD22a,RESELLER
pubmatic.com,81564,RESELLER,5d62403b186f2ace
rubiconproject.com,13510,RESELLER
yahoo.com,49648,RESELLER
rubiconproject.com,24298,RESELLER,0bfd66d529a55807
inmobi.com,8f261ace12c3486ba2e0d2011cd97976,DIRECT,83e75a7ae333ca9d
adform.com,2736,RESELLER,9f5210a2f0999e32
pubmatic.com,160987,RESELLER,5d62403b186f2ace
pubmatic.com,160998,RESELLER,5d62403b186f2ace
google.com,pub-7019376976432612,RESELLER,f08c47fec0942fa0
yahoo.com,59133,RESELLER,e1a5b5b6e3255540
yahoo.com,59356,RESELLER,e1a5b5b6e3255540
EMXDGT.com,1966,RESELLER,1e1d41537f7cad7f
smartadserver.com,3056,RESELLER
pubmatic.com,161527,RESELLER,5d62403b186f2ace
rubiconproject.com,23844,DIRECT,0bfd66d529a55807
yahoo.com,59531,RESELLER,e1a5b5b6e3255540
smartadserver.com,4071,RESELLER
152media.info,152M1,RESELLER
indexexchange.com,189372,RESELLER,50b1c356f2c5c8fc
consumable.com,2001326,RESELLER,aefcd3d2f45b5070
Media.net,8PR6YK195,RESELLER
rubiconproject.com,23280,RESELLER,0bfd66d529a55807
smartadserver.com,4102,RESELLER
vidoomy.com,57205,RESELLER
EMXDGT.com,2007,DIRECT,1e1d41537f7cad7f
uis.mobfox.com,1263,RESELLER,5529a3d1f59865be
loopme.com,11470,RESELLER,6c8d5f95897a5a3b
onetag.com,5927d926323dc2c,DIRECT
yandex.com,97790217,DIRECT
openx.com,557083110,RESELLER,6a698e2ec38604c6
yahoo.com,59702,DIRECT,e1a5b5b6e3255540
loopme.com,11468,RESELLER,6c8d5f95897a5a3b
contextweb.com,562499,RESELLER,89ff185a4c4e857c
indexexchange.com,194730,RESELLER
outbrain.com,00fe7cdd9f63b40ea93c0c4ae346bf4541,DIRECT
vi.ai,987349031605160,DIRECT
xandr.com,10736,RESELLER
freewheel.tv,1220655,RESELLER
indexexchange.com,193091,RESELLER,50b1c356f2c5c8fc
improvedigital.com,1863,RESELLER
loopme.com,11314,RESELLER,6c8d5f95897a5a3b
triplelift.com,11656,RESELLER,6c33edb13117fd86
appnexus.com,13227,RESELLER
yandex.com,95746987,RESELLER
rubiconproject.com,24386,RESELLER,0bfd66d529a55807
### THE MONEYTIZER END ###

### Sovrn ###
sovrn.com, 306258, DIRECT, fafdf38b16bf6b2b
lijit.com, 306258, DIRECT, fafdf38b16bf6b2b
lijit.com, 306258-eb, DIRECT, fafdf38b16bf6b2b
### Sovrn END ###

### Revcontent ###
revcontent.com, 92656, DIRECT
engagebdr.com, 10304, RESELLER
synacor.com, 82291, RESELLER, e108f11b2cdf7d5b
indexexchange.com, 192143, RESELLER, 50b1c356f2c5c8fc
### Revcontent END ###

### 33Across ###
33across.com, 0010b00002cnuc6AAA, DIRECT, bbea06d9c4d2853c
rubiconproject.com, 21642, RESELLER, 0bfd66d529a55807
rubiconproject.com, 21434, RESELLER, 0bfd66d529a55807
rubiconproject.com, 21720, RESELLER, 0bfd66d529a55807
pubmatic.com, 158569, RESELLER, 5d62403b186f2ace
openx.com, 540995201, RESELLER, 6a698e2ec38604c6
aol.com, 47594, RESELLER, e1a5b5b6e3255540
yahoo.com, 55188, DIRECT, e1a5b5b6e3255540
sonobi.com, a416546bb7, RESELLER, d1a215d9eb5aee9e
indexexchange.com, 190966, RESELLER, 50b1c356f2c5c8fc
indexexchange.com, 191973, RESELLER, 50b1c356f2c5c8fc
aps.amazon.com, 2840f06c-5d89-4853-a03e-3bfa567dd33c, DIRECT
### 33Across END ###

###Unruly Start###
video.unrulymedia.com, 698176785, DIRECT
rhythmone.com, 698176785, DIRECT, a670c89d4a324e47
indexexchange.com, 182257, RESELLER, 50b1c356f2c5c8fc
appnexus.com, 6849, RESELLER, f5ab79cb980f11d1
rubiconproject.com, 15268, RESELLER, 0bfd66d529a55807
spotxchange.com, 285547, RESELLER, 7842df1d2fe2db34
spotx.tv, 285547, RESELLER, 7842df1d2fe2db34
pubmatic.com, 159277, RESELLER, 5d62403b186f2ace
advertising.com, 28605, RESELLER
improvedigital.com, 1699, RESELLER
###Unruly END###

###SeedTag Start###
seedtag.com, 4105-7529-01, DIRECT
seedtag.com, 4175-5984-01, DIRECT
seedtag.com, 5f8d657ba574090600bb99dc, DIRECT
adyoulike.com, 83d15ef72d387a1e60e5a1399a2b0c03, DIRECT, 4ad745ead2958bf7
yahoo.com, 58578, DIRECT, e1a5b5b6e3255540
aol.com, 58578, DIRECT, e1a5b5b6e3255540
adform.com, 1889, RESELLER, 9f5210a2f0999e32
advertising.com, 29034, DIRECT
pubmatic.com, 157743, DIRECT, 5d62403b186f2ace
spotxchange.com, 249286, DIRECT, 7842df1d2fe2db34
spotx.tv, 249286, DIRECT, 7842df1d2fe2db34
rubiconproject.com, 17280, DIRECT, 0bfd66d529a55807
33across.com, 0010b00002MptHCAAZ, DIRECT, bbea06d9c4d2853c
indexexchange.com, 191730, DIRECT, 50b1c356f2c5c8fc
improvedigital.com, 1680, RESELLER
smartadserver.com, 3050, DIRECT
contextweb.com, 560288, DIRECT, 89ff185a4c4e857c
openx.com, 537149888, DIRECT, 6a698e2ec38604c6
districtm.io, 101760, DIRECT, 3fd707be9c4527c3
appnexus.com, 4009, DIRECT, f5ab79cb980f11d1
richaudience.com, ns9qrKJLKD, DIRECT
aerserv.com, 2750, DIRECT, 2ce496b9f80eb9fa
aolcloud.net, 4687, DIRECT
mobfox.com, 74240, DIRECT
openx.com, 539625136, DIRECT, 6a698e2ec38604c6
smaato.com, 1100037086, DIRECT
tremorhub.com, s2t3y-r3ofd, DIRECT, 1a4e959a1b50034a
smartadserver.com, 2938, DIRECT
###SeedTag End###

###McCANN Start###
sekindo.com, 30305, DIRECT, b6b21d256ef43532
spotxchange.com, 84294, RESELLER, 7842df1d2fe2db34
spotx.tv, 84294, RESELLER, 7842df1d2fe2db34
advertising.com, 7372, RESELLER
advertising.com, 24410, RESELLER
pubmatic.com, 156595, RESELLER, 5d62403b186f2ace
google.com, pub-1320774679920841, RESELLER, f08c47fec0942fa0
openx.com, 540258065, RESELLER, 6a698e2ec38604c6
rubiconproject.com, 20130, RESELLER, 0bfd66d529a55807
freewheel.tv, 19129, RESELLER
freewheel.tv, 19133, RESELLER
tremorhub.com, mb9eo-oqsbf, RESELLER, 1a4e959a1b50034a
telaria.com, mb9eo-oqsbf, RESELLER, 1a4e959a1b50034a
smartadserver.com, 3436, RESELLER
rhythmone.com, 2338962694, RESELLER, a670c89d4a324e47
video.unrulymedia.com, 2338962694, RESELLER
indexexchange.com, 191923, RESELLER, 50b1c356f2c5c8fc
###McCANN End###

###LuponMedia Start###
google.com, pub-5016155138623826, DIRECT, f08c47fec0942fa0
luponmedia.com, 1994479, DIRECT
pubmatic.com, 159760, RESELLER, 5d62403b186f2ace
rubiconproject.com, 12398, DIRECT, 0bfd66d529a55807
adform.com, 1985, DIRECT, 9f5210a2f0999e32
connectad.io, 151, DIRECT
###LuponMedia End###

###Rhythmone Start###
rhythmone.com, 2005391506, DIRECT, a670c89d4a324e47
video.unrulymedia.com, 2005391506, DIRECT
###Rhythmone End###

###Adipolo-APL Start###
google.com, pub-2930805104418204, RESELLER, f08c47fec0942fa0
google.com, pub-4903453974745530, RESELLER, f08c47fec0942fa0
video.unrulymedia.com, 2745492395, DIRECT
rhythmone.com, 2745492395, DIRECT, a670c89d4a324e47
openx.com, 541073624, RESELLER, 6a698e2ec38604c6
openx.com, 541180797, RESELLER, 6a698e2ec38604c6
###Adipolo-APL End###

###HindSight Start###
#Teads
teads.tv, 21214, DIRECT, 15a9c44f6d26cbe1
#Pubmatic
pubmatic.com, 159744, DIRECT, 5d62403b186f2ace
pubmatic.com, 159745, DIRECT, 5d62403b186f2ace
#Sharethrough
sharethrough.com, 3232726a, DIRECT, d53b998a7bd4ecd2
spotxchange.com, 212457, RESELLER, 7842df1d2fe2db34
spotx.tv, 212457, RESELLER, 7842df1d2fe2db34
pubmatic.com, 158723, RESELLER, 5d62403b186f2ace
33across.com, 0013300001kQj2HAAS, RESELLER, bbea06d9c4d2853c
###HindSight End###

###Teads Start###
teads.tv, 21388, DIRECT, 15a9c44f6d26cbe1
###Teads End###

###Project-Limelight Start###
exchange.project-limelight.com, 321739, RESELLER
###Project-Limelight End###

###Minute Media Start###
google.com, pub-1956856209985681, DIRECT, f08c47fec0942fa0
rhythmone.com,203808374,DIRECT,a670c89d4a324e47 
video.unrulymedia.com, 203808374, DIRECT
indexexchange.com, 188838, DIRECT, 50b1c356f2c5c8fc
advertising.com,28488,DIRECT 
triplelift.com, 6030-EB, DIRECT, 6c33edb13117fd86
pubmatic.com,158541,DIRECT,5d62403b186f2ace 
media.net, 8CU713ZQC, DIRECT
openx.com,540447746,DIRECT,6a698e2ec38604c6 
sonobi.com,f22036b5f1,DIRECT,d1a215d9eb5aee9e 
sovrn.com, 264726, DIRECT, fafdf38b16bf6b2b
lijit.com, 264726-eb, DIRECT, fafdf38b16bf6b2b
yieldmo.com,2230484298816456318,DIRECT 
undertone.com, 3802, DIRECT
undertone.com, 3231, DIRECT
improvedigital.com,1530,DIRECT 
chocolateplatform.com,14546,DIRECT,49a66ce31a704197 
vdopia.com, 14546,DIRECT,49a66ce31a704197 
indexexchange.com, 185192, RESELLER, 50b1c356f2c5c8fc
telaria.com, jrkl5-0ac26, RESELLER, 1a4e959a1b50034a
rubiconproject.com, 17346, RESELLER, 0bfd66d529a55807
openx.com, 538929384, RESELLER, 6a698e2ec38604c6
###Minute Media End###

###Adwmg Start###
adwmg.com, 97111, DIRECT
pubmatic.com, 159455, DIRECT, 5d62403b186f2ace
appnexus.com, 8950, DIRECT, f5ab79cb980f11d1
gothamads.com, 915, DIRECT, d9c86e5dec870222
criteo.com, 180031, DIRECT
lunamedia.io, 390, RESELLER
onetag.com, 5e1ebfccf66d7c0, DIRECT
peak226.com, 12401, DIRECT
aralego.com, par-2737DD2B762B77230D39622E2E98667, RESELLER
ucfunnel.com, par-2737DD2B762B77230D39622E2E98667, RESELLER
cmcm.com,154, RESELLER
telaria.com, qc8tl-ehp3i, RESELLER, 1a4e959a1b50034a
tremorhub.com, qc8tl-ehp3i, RESELLER, 1a4e959a1b50034a
smartadserver.com, 1894, RESELLER
smartadserver.com, 3445, RESELLER
supply.colossusssp.com, 211, DIRECT, 6c5b49d96ec1b458
improvedigital.com, 1202, RESELLER
onetag.com, 6077311f46497b0, DIRECT
###Adwmg End###

###E-planning Start###
e-planning.net,21facf346cd608e5,DIRECT,c1ba615865ed87b2
sonobi.com,8efb591506,DIRECT,d1a215d9eb5aee9e
aol.com,57992,RESELLER,e1a5b5b6e3255540
yahoo.com,57992,RESELLER,e1a5b5b6e3255540
###E-planning End###

###Media.net Start###
media.net, 8CU7J60BS, DIRECT
media.net, 8CUR29EE1, DIRECT
media.net, 8CU87RRS4, DIRECT
sharethrough.com, 0d60edd5, RESELLER
openx.com, 537100188, RESELLER, 6a698e2ec38604c6
sonobi.com, 83729e979b, RESELLER
emxdgt.com, 1759, RESELLER, 1e1d41537f7cad7f
google.com, pub-7439041255533808, RESELLER, f08c47fec0942fa0
onetag.com, 5d49f482552c9b6, RESELLER
rhythmone.com, 3611299104, RESELLER, a670c89d4a324e47
pubmatic.com, 159463, RESELLER, 5d62403b186f2ace
rubiconproject.com, 19396, RESELLER, 0bfd66d529a55807
33across.com, 0010b00002cGp2AAAS, RESELLER, bbea06d9c4d2853c
lemmatechnologies.com, 399, RESELLER, 7829010c5bebd1fb #LEMMA
###Media.net End###

###Outbrain Start###
outbrain.com, 00beb3a7bef5e4c8178366395afff0525a, DIRECT
tremorhub.com, q017o-78mlk, RESELLER, 1a4e959a1b50034a # Premium video demand aka Telaria
teads.tv, 15429, RESELLER, 15a9c44f6d26cbe1 # premium video demand
advertising.com, 26154, RESELLER # Premium video demand
freewheel.tv, 741650, RESELLER # premium video demand
rubiconproject.com, 17130, RESELLER, 0bfd66d529a55807 # Premium video demand
lkqd.net, 450, RESELLER, 59c49fa9598a0117 # Premium video demand
openx.com, 540393169, RESELLER, 6a698e2ec38604c6 # Premium video demand
spotx.tv, 238936, RESELLER, 7842df1d2fe2db34 # Premium video demand
advertising.com, 28038, RESELLER # Premium Video Demand
rubiconproject.com, 19668, RESELLER, 0bfd66d529a55807
indexexchange.com, 190856, RESELLER, 50b1c356f2c5c8fc # Premium Video Demand
pubmatic.com, 158615, RESELLER, 5d62403b186f2ace # Premium video & display demand
vidazoo.com, 1773068026, RESELLER, b6ada874b4d7d0b2 # Premium Video Demand
indexexchange.com, 193091, RESELLER, 50b1c356f2c5c8fc # Premium video demand from Outbrain
pubmatic.com, 160065, RESELLER, 5d62403b186f2ace # Premium video demand from Outbrain
improvedigital.com, 1863, RESELLER # Premium video demand from Outbrain
freewheel.tv, 1220655, RESELLER # Premium video demand from Outbrain
yahoo.com, 59052, RESELLER # Premium Video Demand
beachfront.com, 14027, RESELLER, e2541279e8e2ca4d # Premium Video Demand
smartadserver.com, 3820, RESELLER # Premium Video Demand
video.unrulymedia.com, 367782854, RESELLER # Premium video demand from Outbrain
synacor.com, 82423, RESELLER, e108f11b2cdf7d5b # Premium video demand from Outbrain
smaato.com, 1100048704, RESELLER, 07bcf65f187117b4 # Premium video demand from Outbrain
contextweb.com, 562145, RESELLER, 89ff185a4c4e857c # Premium video demand from Outbrain
risecodes.com,6022acddc8b2f90001767980, RESELLER
yahoo.com, 59040, RESELLER, e1a5b5b6e3255540
emxdgt.com, 2014, RESELLER, 1e1d41537f7cad7f
vi.ai, g-00787d06f1cd8bb813741bb6ec006517e4, DIRECT #instream video by outbrain
google.com, pub-5617098146054077, RESELLER, f08c47fec0942fa0 #instream video by outbrain
pubmatic.com, 158055, RESELLER, 5d62403b186f2ace #instream video by outbrain
xandr.com, 10736, RESELLER #instream video by outbrain
rubiconproject.com, 21506, RESELLER, 0bfd66d529a55807 #instream video by outbrain
rhythmone.com, 1014191143, RESELLER, a670c89d4a324e47 #instream video by outbrain
video.unrulymedia.com, 1014191143, RESELLER #instream video by outbrain
Indexexchange.com, 190500, RESELLER #instream video by outbrain
smartadserver.com,2776,RESELLER #instream video by outbrain
openx.com, 540362347, RESELLER, 6a698e2ec38604c6 #instream video by outbrain
spotxchange.com, 304237, RESELLER, 7842df1d2fe2db34 #instream video by outbrain
spotx.tv, 304237, RESELLER, 7842df1d2fe2db34 #instream video by outbrain
yahoo.com, 59658, RESELLER #instream video by outbrain
media.net, 8CUIH830U, RESELLER #instream video by outbrain
triplelift.com, 11547, RESELLER, 6c33edb13117fd86 #instream video by outbrain
improvedigital.com, 1552, Reseller #instream video by outbrain
contextweb.com, 562709, RESELLER, 89ff185a4c4e857c
aps.amazon.com, 3965, RESELLER #instream video by outbrain
imds.tv, 82423, RESELLER, ae6c32151e71f19d # Premium video demand from Outbrain
freewheel.tv, 1220559, RESELLER # Premium video demand from Outbrain
freewheel.tv, 1133073, RESELLER #instream video by outbrain
smaato.com, 1100054606, RESELLER, 07bcf65f187117b4 # Premium video demand from Outbrain
###Outbrain End###

###TrueVid Start###
truvid.com, 1372, DIRECT
truvidplayer.com, 1372, DIRECT
google.com, pub-6322541192886560, RESELLER, f08c47fec0942fa0
google.com, pub-8787923930478618, RESELLER, f08c47fec0942fa0
yahoo.com, 59355, RESELLER, e1a5b5b6e3255540
yahoo.com, 59122, RESELLER, e1a5b5b6e3255540
yahoo.com, 7039, RESELLER, e1a5b5b6e3255540
advertising.com, 7039, RESELLER
advertising.com, 28245, RESELLER
advertising.com, 28377, RESELLER
advertising.com, 29027, RESELLER
rubiconproject.com, 17412, RESELLER, 0bfd66d529a55807
pubmatic.com, 159625, RESELLER, 5d62403b186f2ace
pubmatic.com, 160851, RESELLER, 5d62403b186f2ace
pubmatic.com, 161193, RESELLER, 5d62403b186f2ace
appnexus.com, 12700, RESELLER, f5ab79cb980f11d1
smartadserver.com, 3356, RESELLER
smartclip.net, 11185, RESELLER
indexexchange.com, 195373, RESELLER, 50b1c356f2c5c8fc
smartclip.net, 11185, DIRECT
appnexus.com, 1024, RESELLER, f5ab79cb980f11d1
emxdgt.com, 1849, DIRECT, 1e1d41537f7cad7f
emxdgt.com, 1857, DIRECT, 1e1d41537f7cad7f
rhythmone.com, 2035178308, DIRECT, a670c89d4a324e47
video.unrulymedia.com, 2035178308, DIRECT
contextweb.com, 562049, DIRECT, 89ff185a4c4e857c
gammassp.com, 1536546411, DIRECT
triplelift.com, 2792, RESELLER, 6c33edb13117fd86
pubmatic.com, 160048, RESELLER, 5d62403b186f2ace
pubmatic.com, 157840, RESELLER, 5d62403b186f2ace
pubmatic.com, 156971, RESELLER, 5d62403b186f2ace
pubmatic.com, 133799, RESELLER, 5d62403b186f2ace
openx.com, 544096208, RESELLER, 6a698e2ec38604c6
indexexchange.com, 184626, RESELLER, 50b1c356f2c5c8fc
indexexchange.com, 184349, RESELLER, 50b1c356f2c5c8fc
indexexchange.com, 183875, RESELLER, 50b1c356f2c5c8fc
emxdgt.com, 273, RESELLER, 1e1d41537f7cad7f
contextweb.com, 562258, RESELLER, 89ff185a4c4e857c
appnexus.com, 11664, RESELLER, f5ab79cb980f11d1
###TrueVid End###

### UDM START ###
udmserve.net, 3462, DIRECT, 0cf60ed62b5f3e40
advertising.com, 28251, RESELLER, e1a5b5b6e3255540
amxrtb.com, dW5kZXJkb2dtZWRpYS5jb20, RESELLER
appnexus.com, 12290, RESELLER, f5ab79cb980f11d1
appnexus.com, 1610, RESELLER, f5ab79cb980f11d1
appnexus.com, 7874, RESELLER, f5ab79cb980f11d1
aralego.com, par-488A3E6BD8D997D0ED8B3BD34D8BA4B, RESELLER
contextweb.com, 508738, RESELLER, 89ff185a4c4e857c
contextweb.com, 560606, RESELLER, 89ff185a4c4e857c
criteo.com, B-061296, DIRECT, 9fac4a4a87c2a44f
emxdgt.com, 993, RESELLER, 1e1d41537f7cad7f
indexexchange.com, 194564, RESELLER, 50b1c356f2c5c8fc
openx.com, 537124574, RESELLER, 6a698e2ec38604c6
pubmatic.com, 156505, RESELLER, 5d62403b186f2ace
pubmatic.com, 158355, RESELLER, 5d62403b186f2ace
pubmatic.com, 159955, RESELLER, 5d62403b186f2ace
rhythmone.com, 1059622079, RESELLER, a670c89d4a324e47
rhythmone.com, 905992537, RESELLER, a670c89d4a324e47
rubiconproject.com, 24042, RESELLER, 0bfd66d529a55807
sonobi.com, 5fa6044d8d, RESELLER, d1a215d9eb5aee9e
spotx.tv, 238463, RESELLER, 7842df1d2fe2db34
spotxchange.com, 238463, RESELLER, 7842df1d2fe2db34
synacor.com, 82078, RESELLER
ucfunnel.com, par-488A3E6BD8D997D0ED8B3BD34D8BA4B, RESELLER
video.unrulymedia.com, 905992537, RESELLER, a670c89d4a324e47
yahoo.com, 55317, RESELLER, e1a5b5b6e3255540
yahoo.com, 56692, RESELLER
### UDM END ###

###OneTag Start###
onetag.com, 7a15b1f1f8479b0, DIRECT
onetag.com, 7a15b1f1f8479b0-OB, DIRECT
appnexus.com, 13099, RESELLER, f5ab79cb980f11d1
yahoo.com, 58905, RESELLER, e1a5b5b6e3255540
pubmatic.com, 161593, RESELLER, 5d62403b186f2ace
smartadserver.com, 4111, RESELLER
###OneTag END###

###Magnite Start###
rubiconproject.com, 22884, DIRECT, 0bfd66d529a55807 
###Magnite End###

###Smart Start###
smartadserver.com, 4194, DIRECT
###Smart End###

###Smaato Start###
smaato.com, 1100052992, DIRECT, 07bcf65f187117b4
adcolony.com, 496220845654deec, RESELLER, 1ad675c9de6b5176
admanmedia.com, 552, RESELLER
bidmachine.io, 36, RESELLER
bidmachine.io, 60, RESELLER
engagebdr.com, 16, RESELLER
indexexchange.com, 184270, RESELLER, 50b1c356f2c5c8fc
mobilefuse.com, 2281, RESELLER, 71e88b065d69c021
openx.com, 540421297, RESELLER, 6a698e2ec38604c6
###Smaato End###

###Sonobi Start###
sonobi.com, faed062399, DIRECT, d1a215d9eb5aee9e
contextweb.com, 560606, RESELLER, 89ff185a4c4e857c
###Sonobi End###

###Fluct Start###
adingo.jp, 28135, RESELLER
###Fluct End###                    </pre>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Note:</strong> This file contains 1283+ lines of authorized digital sellers. 
                    The complete file can be accessed at <code>/ads.txt</code>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Direct Sellers</h4>
                    <p className="text-blue-700 text-sm">
                      Companies marked as "DIRECT" have a direct relationship with this website 
                      and are authorized to sell our inventory.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Resellers</h4>
                    <p className="text-green-700 text-sm">
                      Companies marked as "RESELLER" are authorized through our direct partners 
                      to resell our advertising inventory.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notice</h4>
                  <p className="text-yellow-700 text-sm">
                    This ads.txt file is quite extensive (1283+ lines). Consider reviewing and 
                    optimizing it to include only active, necessary advertising partners to 
                    improve management and compliance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdsTxt;
