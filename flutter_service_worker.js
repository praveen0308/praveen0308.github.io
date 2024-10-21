'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "463cb3f912ed602e921ec30c0d4a4f04",
".git/config": "d4819c616679819be72326182101bd9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d6cf2ffbf8000c62192cbc78a42e78d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f085734e4b6b77220691384c31b7206",
".git/logs/refs/heads/main": "fa94b554f679566ee8eedcd522b7088d",
".git/logs/refs/remotes/origin/main": "d92bf5632bf7bb670fad08f122b0f580",
".git/objects/03/77dcef8ddd1c26c6a9956f763ee1ca2a012af6": "a1376f73d81471ad39bd8488e143a9c9",
".git/objects/05/43235480f41067e04c93acf2847191017667cb": "efb3d25c4eab5fe8ddc29a200bfcf68e",
".git/objects/08/3c7dc5b3a8bacf2ff01982444cd33401d00016": "b6a6684b3bab5d5c01408c7627dc1c5a",
".git/objects/0b/1ae1bde6a6758926895c8e0d38612c7af83278": "c5a8c165159c3faf99e04dd5c20bee96",
".git/objects/0c/22c192dd21d62a873bcaa3f8b313415eadc175": "40a043681cdd18ee32b4a1128e792bca",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/0583367f4cd3f67f876b711840e4ee8a94996c": "52d9916a5ccd38a0f859c8675dd161b3",
".git/objects/12/79248deeb32c5b95d67650c5f308ee1fa958cb": "010f16d63e7610c8b9bd766e3a6915f1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/c2535c16ab1dd311f5fd71bde0d945338e1617": "5700a909df42fc41d05b5ef92b95d5a1",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/0974e62ebe639f930a0a70a795e8163556c257": "dbae85a79d9e0ec3c8354640420a353b",
".git/objects/23/e7d6f531b1bcfb3cf9c2bd2cc06bfaf0eb3d49": "1c5d844d0217e0587836222a6a713cc1",
".git/objects/2f/26ad06861c0de17f1b1b2f4808d61ec11849f5": "5db28f0b3734b0ca0cee3c5a315e2907",
".git/objects/30/0ae7b6fe45665ea1e2d06488455cbbcc28ac5c": "49c66396749bbcf7a9bb3f7def1c0d1a",
".git/objects/36/fb31887d61444bf437ceff24cea9369fe8c6a8": "89bbe3c59c76eab5e73ca2679bbbacfc",
".git/objects/3a/27d0d2e029414cdccfda693726e389f6e73ca0": "edcc6749529e8e2bb71fa67f113a086f",
".git/objects/3e/ff13215f3bae5d349fd212912aaa8a96b6c8b3": "b20eac22f9d9fdf23bca8f008a5e47a2",
".git/objects/46/08c4dcdb90683e5ad1a2427c82725c0c167e65": "f4452d152c55f5ebb5bee60fd9c70c09",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/2562238333ea607c51804e053e47a08aecfb4a": "53756105e846252b9a599307a4762109",
".git/objects/4b/19629fbbd1238f34f40a4705ef7eab9723b02d": "99f62c0c162cf4890270136bcd328fa7",
".git/objects/4d/5b9981a30571e16455d106f58b034c536666fa": "f4620c84c11943419a61b813fb440a90",
".git/objects/4f/2e7ac59a737c88ec302c2f8fa78de5124402f7": "e23b6ee3f347918c7d8e8fcdd8919813",
".git/objects/57/96f3f66458d7bf603767bc83aac382b415ff35": "e127f1f24ca773bf02b68f39ef2d3711",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/5a79f90fe132d7d572374d1392db09925c54db": "a993bfd512a721e1a5f11b48ae12a3bf",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/61/9facc3b1d2666aa6476767d9a812e418d09fcf": "b6358ce2415156e279aa29aa9e4c6a16",
".git/objects/62/4b6ad15b019d4115a5d7b3bae16c6cc504b703": "15dc4f22eb824d8ad90e0c2cddd9112a",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/78ee66ae76e314d08e73c032ea60883541abb5": "89d609eadc3e2420c3bd68afe1c14f0f",
".git/objects/6c/22bead5cee50f2302dd0e6b26069730adf6101": "f2b2b656269b7ce57b8cc8255b6dc34f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/94c26246398e0b7542dc2a2d4d33bb5b9663b3": "e4b80e527467df17cacaf6d61975c86a",
".git/objects/7a/6245d8c26cf7b4200b686a5b32fbfa018a2a9c": "61ed3b5a0f92d0819bea4f020bd967db",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/26a9b3afaf212b3da141bce1d91e871d3af817": "590d86bebb48db799bfc74e2fe90ddbe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/91f3409c6867775af6d8d3885f9863220c156d": "d1d4ac47a23d6c2d1bfd9b70d5ce77b5",
".git/objects/8f/83f03baad06b928bfee7ef6603a16c01f39ea1": "e9bde2cfb57c89a8997266810e641f56",
".git/objects/92/e3965fbab1367ba137ec14ec837de6e8739b6f": "f592301aeae29e8d50e1bd842f5d1de7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/9b/9a6bf3bd7a8a1bfe61c5d7ac197431f2ffc29d": "cb2d67377c12b23b206ca2d7ff968536",
".git/objects/9b/c63de6baa6baa4e2570711a113d8a5b2bdd965": "683e04e201e4ba593ac9feeeeb915525",
".git/objects/9c/14a46fe0d1d7d9c0b1a381feb2465091d71fb6": "0b1de5cd06d31ad2c5e83301bf7f6ba4",
".git/objects/a3/92abace1e38e36b79b1dd42a0d3a9ca37ee7bb": "d2681d35ca8da5dac0d177aaaee6fccd",
".git/objects/a6/a8913d8215aba28f1d7154a580481c6becb172": "2245ed0848b0dd7cca8423eec6266c7e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d140c78d52c69de067cad31c57111efa8ef526": "02c037570faa852d32512d38507703f1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/23ffd3ced1fa889c9a71299a524ecacacc9fb2": "5b3c84b51db0c0615c6547716cbb3b5a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/97e46b45c1dd95e74369a961439012bbea86f0": "b9a4a2009de4012126b4179ee69c7c06",
".git/objects/c0/08e8c40e80ccb5688e91b92d4787226bf8cf22": "375bbc395686d13d71de6c231ee0711e",
".git/objects/c1/cb3c33524c5162052cdd40ee17c8691552ba5c": "f9215a3d88716a39cd0af41b4b6278ae",
".git/objects/c4/be2f5630515ef2079687808049d54d01f1e1b9": "398b9f77fd86f1851013fb819cc9a3e9",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/caf83744d9421ea16ff17c0278ad84eab0a69e": "7df573fd674affc91fc601352a72ea5e",
".git/objects/cb/2904f805d98fe9a0cc7ef7034c0a5a31f84a91": "f100aaeb35f2ea85c1cc13400f7633d6",
".git/objects/d0/91c28f04211f6ea515ecdd907ecf6e16ed0d85": "f9f4b973fcb52d2080a3abfd4b71e50a",
".git/objects/d1/040741ac74a85ee9b8980b50337d3f0207c177": "ceb2b3ec044582185be6c434239e99d7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/350768dc619b65900ea2e7460ac91785af4730": "02e212dd95dee920f7f77188a76ad137",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/9102d09a30e65c8c9f7919ee6fe0cbb48baa21": "79c27bed856ed03817efea5415906f0f",
".git/objects/d5/e278102d8702f0a8c56ce743836bb23eb88300": "4d5b2dc9109eae225aec51b62dd27169",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/d0c5a58e6e970e750d4cdd4c981167377fdbfe": "9376dcb55f8a3b2469d25d5c526454b8",
".git/objects/de/db81fe83b21fdf301a656c8d363fa494b7d771": "809ed426297227d504eeae2811201d71",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e4/50e7995ae5df57deb17a4a05d16aa7351de578": "96fb582ef608c0b4a2628068d1ad5681",
".git/objects/e4/859f0a18b08e689c0866e3fda477b4f5d38027": "df762c8596ce394464b16a82469d060e",
".git/objects/e5/57550434d1d61206a880cd14c677f6de267855": "3e88ac582cd2de0d2c13fef3b095f5c4",
".git/objects/e5/87a6ebcb17b210174217322b12895fbc3ae1fd": "d2d1da0f82e81dde4884ee856031a743",
".git/objects/e5/b5447f4dc1148307683c9c2993b72144a18bb0": "c5a7e137b927f51ce8bc0b2299ecf163",
".git/objects/e6/49b4262980c197321642c4c2ba62c47197da02": "4d1e8d6f5396cd62622b2b5316234d67",
".git/objects/e6/fe0ca2c903e5359f167a7ed4241304d3966e25": "48d7781882f95b8072bc6515e4e2d6f8",
".git/objects/ea/f0221c3dbc71c2dedde522593ed9b4f0d98adc": "a0780bba8e2eaaa2e6b146489429866e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/04b1af262d4e76a37f9ad54384d1201c830085": "8ffa3eb0c57ecaa176bd460d7d765526",
".git/objects/ee/d2c571204201cecc890f7e03b49d214cac9f32": "0e60d64fb5334709149e08c35c7bf948",
".git/objects/ee/f775fcc50d420e09923a4cc8aa0d0317c70e93": "e709c9d00544fda0e892e05a978e06df",
".git/objects/f1/3ffbcb8c0ddef6447cb3f8626a078beea19fbb": "c7d8ee4768a9458c8b230fa13cca9832",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/5142556f92590ef7edb1bfed0c78005a873133": "f0263fbb05bcea22b6ab733df2e19d9a",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "1ef5a95b414b8c6b5f3c6e581c7878a3",
".git/refs/remotes/origin/main": "1ef5a95b414b8c6b5f3c6e581c7878a3",
"assets/AssetManifest.bin": "8c6c5e8b7cede567960781b3908797a7",
"assets/AssetManifest.bin.json": "4004422841e4d1db873ad55fba283a1f",
"assets/AssetManifest.json": "fead0be8efd4493844554ebe29560b97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9dc574da76f1d48670ab5691456337a2",
"assets/images/android.png": "411cc70c2650c1dd6f7c65be58cbb5ef",
"assets/images/aws.png": "3ad922c253af04867a6982d6da7b69a6",
"assets/images/bg_about.png": "79ba7c3e3a1294d575286d1d262a595c",
"assets/images/ci-cd.png": "624378c84a1302f42d2802895a4b01eb",
"assets/images/dart.png": "8cdd163d41b221bcee0dcba2dc90fd35",
"assets/images/docker.png": "8aafc9c1a92997ce5da4b4bc21276fb9",
"assets/images/fast-api.png": "6e0178c894aecbb45d3d427aa173fbf9",
"assets/images/favicon.png": "58e06aad8bf2ff8a69fe5f90357069f5",
"assets/images/firebase.png": "bede1e89d63e4f2a7f222e25704e2bac",
"assets/images/flutter.png": "9d7954530b20629aadff68079bb93d96",
"assets/images/gcp.png": "e7e6c38f600b0e998d5f374054f20599",
"assets/images/git-actions.png": "5ff5e8f5f4dfe6454844af4beb80945c",
"assets/images/ic_dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/images/ic_java.png": "17130f5cac127465a8d754ae0636eb6a",
"assets/images/img_avatar.png": "f2883c98731d0c4b6944bd2d32a36f70",
"assets/images/img_dummy_project.png": "78dc568944bcdc11c434527da4253348",
"assets/images/img_profile.png": "4e65fccfe11db944c5cf7174dc89d755",
"assets/images/java.png": "46269f4f29e5b3376d55f7d56b942074",
"assets/images/javascript.png": "7fb164d1f7534671fa3f94fd490cc458",
"assets/images/kafka.png": "e2fee2bef2046178b7fd2ee388c96b54",
"assets/images/kotlin.png": "215732258d25edf8a6c96e4bb29d4ab1",
"assets/images/kubernetes.png": "bf1bc95ce2ca388a56281b71bf83f0cd",
"assets/images/mongodb.png": "3b7072bb538b209e01785e07440dd828",
"assets/images/mysql.png": "2e61103b54fc058ed78bac70fb472f1b",
"assets/images/node.png": "70da7cd7e92a9f417aa8cff5249f216a",
"assets/images/postgres.png": "6e79d48522c0f211e67838881ef412cb",
"assets/images/react.png": "b7c0a91cec1611d45d2be27bb2883cc1",
"assets/images/spring-boot.png": "7e4b1f1cccf0ba7252c5d98c283f5b3c",
"assets/images/spring.png": "e697146d98d03652ceebcd3ef5f0d9da",
"assets/NOTICES": "0e5bcc03f117881a0a5792f9c28b6fa5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/raw/portfolio_data.json": "6e1c1801ca9e088cb80bd7dd9c967955",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3fab915c0d354dbd4913f28a1b692d87",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "fbe9fcb1e82b9f83228164ff0cd729bc",
"icons/Icon-192.png": "a0d2618c0b7fb0fa9e7165407651b2ec",
"icons/Icon-512.png": "fadd998a1a311491b1c25dc5b8841637",
"icons/Icon-maskable-192.png": "a0d2618c0b7fb0fa9e7165407651b2ec",
"icons/Icon-maskable-512.png": "fadd998a1a311491b1c25dc5b8841637",
"index.html": "e00f26d155ca465621a7945d6da7ec9e",
"/": "e00f26d155ca465621a7945d6da7ec9e",
"main.dart.js": "043efe8ee4f49b0f1998d0122af39459",
"manifest.json": "fd99ac62c2814607836020aa3cafc200",
"version.json": "304c060da638f78d0869eebeb274b3ca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
