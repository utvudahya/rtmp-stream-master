
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
{`### ForeMedia START ###
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

... and many more authorized sellers`}
                    </pre>
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
