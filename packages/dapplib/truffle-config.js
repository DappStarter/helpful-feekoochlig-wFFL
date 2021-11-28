require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth office protect hidden kiwi sugar spare'; 
let testAccounts = [
"0xe06aa2655659a00a6089650ef808db26020d69c75b45f5ebdbd784a17e5e9c8f",
"0x04ff8e3c8f7284782f4d55cf45f7470a8b1b3c165e9061e959266b3f38b11846",
"0x1fe4870cbdc4aa167370539cadce737461669ac798016bee1b6f948ebfecb939",
"0xc39518373fe86444332ffc584c35d0f432bf0c73b3ea486207f4f0c587cbe077",
"0x401016bcc32ff61d71c251f4d1cddcb65431cda8529d106e975e2165b76ff16e",
"0xfb308a244d2cde08edf2267c539e40eb8b7d2229b137a728a01da8ac3e481ce2",
"0x620af5f1a9df9b8c96128cd291229a68fe80c698f632a7458460bf5e309e1a13",
"0xf275679859811e554973cde4aed2fe36c8feeb3f01177b135492671fd422fcba",
"0x2e5cf7296f2a6acd670f2979a0fe7007ba569319d8902284a8455b41aeeb45ee",
"0x8e3c9ec31c6001923a964de09c58316b16213806d39f1e5246d55ec912270a60"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


