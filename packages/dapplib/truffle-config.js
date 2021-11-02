require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain unfold imitate prize flip spoon'; 
let testAccounts = [
"0x6c3ac84f3656d7e0afffb6a17b977293e3f2604ed3a547ba3cf3ecf7730050ab",
"0xac5551c258035ba561e3cae322992556ed3b3827acd0a3619c9cfbaa35aca4e3",
"0xf5ab899cf2f152883f5b8202f3ecc5ddf1f43055f9c79866c7072462109eb6b1",
"0x64ee768c8214b3e297e9471bbad53990e36760cc722b7a38f3286ded7069dc42",
"0xf5a23ef947e2fa63a2de90a8d8f8b4057979de01030bb0b53415be930bb2bd02",
"0xc241a2b1e7d40ae26247544edde7403b35b394a2938671b5f6394c00dc9ca438",
"0x72c5a47386f52280991d0a46a7b08056148599657ec958daaf577594627a416e",
"0x1f2fe7b24ccc0b215b8b9a036ade482e2863db0ca1ab73775ccb9083e46ec0d1",
"0xe710af89b15d8905376fe0e3cdd7aec118f1098d7220244b6120a8367788b57a",
"0x66bac916a2e075e9cf06ae0bed4f8b545b31896fa017492addd64f5d58d4314b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

