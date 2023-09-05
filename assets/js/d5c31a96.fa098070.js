"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),y=a,h=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Setup GPG Key"},i=void 0,s={unversionedId:"contributing/reference/setup_gpg",id:"contributing/reference/setup_gpg",title:"Setup GPG Key",description:"This section is a brief from the Cryptography with OpenPGP guideline.",source:"@site/docs/contributing/reference/setup_gpg.md",sourceDirName:"contributing/reference",slug:"/contributing/reference/setup_gpg",permalink:"/docs/contributing/reference/setup_gpg",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/contributing/reference/setup_gpg.md",tags:[],version:"current",lastUpdatedBy:"John Bampton",lastUpdatedAt:1693927966,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{title:"Setup GPG Key"},sidebar:"docs",previous:{title:"Generate Release Note",permalink:"/docs/contributing/reference/generate_release_note"}},l={},p=[{value:"Install GPG",id:"install-gpg",level:2},{value:"Generate GPG Key",id:"generate-gpg-key",level:2},{value:"Upload your key to public GPG keyserver",id:"upload-your-key-to-public-gpg-keyserver",level:2},{value:"Check whether the key is created successfully",id:"check-whether-the-key-is-created-successfully",level:2},{value:"Add your GPG public key to the KEYS document",id:"add-your-gpg-public-key-to-the-keys-document",level:2},{value:"Upload the GPG public key to your GitHub account",id:"upload-the-gpg-public-key-to-your-github-account",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section is a brief from the ",(0,a.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html"},"Cryptography with OpenPGP")," guideline.")),(0,a.kt)("h2",{id:"install-gpg"},"Install GPG"),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"GPG official website"),". Here shows one approach to install GPG with ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install gnupg2\n")),(0,a.kt)("h2",{id:"generate-gpg-key"},"Generate GPG Key"),(0,a.kt)("p",null,"Attentions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name is best to keep consistent with your full name of Apache ID;"),(0,a.kt)("li",{parentName:"ul"},"Email should be the Apache email;"),(0,a.kt)("li",{parentName:"ul"},"Name is best to only use English to avoid garbled.")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"gpg --full-gen-key")," and complete the generation interactively:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # input 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # input 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # input 0\nKey does not expire at all\nIs this correct? (y/N) y # input y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Hulk Lin               # input your name\nEmail address: hulk@apache.org    # input your email\nComment:                          # input some annotations, optional\nYou selected this USER-ID:\n    \"Hulk <hulk@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# Input the security key\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n# key generation will be done after your inputting the key with the following output\ngpg: key E49B00F626B marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/hulk/.gnupg/openpgp-revocs.d/F77B887A4F25A9468C513E9AA3008E49B00F626B.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2022-07-12 [SC]\n      F77B887A4F25A9468C513E9AA3008E49B00F626B\nuid           [ultimate] hulk <hulk@apache.org>\nsub   rsa4096 2022-07-12 [E]\n")),(0,a.kt)("h2",{id:"upload-your-key-to-public-gpg-keyserver"},"Upload your key to public GPG keyserver"),(0,a.kt)("p",null,"Firstly, list your key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --list-keys\n")),(0,a.kt)("p",null,"The output is like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-------------------------------\npub   rsa4096 2022-07-12 [SC]\n      F77B887A4F25A9468C513E9AA3008E49B00F626B\nuid           [ultimate] hulk <hulk@apache.org>\nsub   rsa4096 2022-07-12 [E]\n")),(0,a.kt)("p",null,"Then, send your key id to key server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --keyserver keys.openpgp.org --send-key <key-id> # e.g., F77B887A4F25A9468C513E9AA3008E49B00F626B\n")),(0,a.kt)("p",null,"Among them, ",(0,a.kt)("inlineCode",{parentName:"p"},"keys.openpgp.org")," is a randomly selected keyserver, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"keyserver.ubuntu.com")," or any other full-featured keyserver."),(0,a.kt)("h2",{id:"check-whether-the-key-is-created-successfully"},"Check whether the key is created successfully"),(0,a.kt)("p",null,"Uploading takes about one minute; after that, you can check by your email at the corresponding keyserver."),(0,a.kt)("p",null,"Uploading keys to the keyserver is mainly for joining a ",(0,a.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-signing.html#web-of-trust"},"Web of Trust"),"."),(0,a.kt)("h2",{id:"add-your-gpg-public-key-to-the-keys-document"},"Add your GPG public key to the KEYS document"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"SVN")," is required for this step.")),(0,a.kt)("p",null,"The svn repository of the release branch is: ",(0,a.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/incubator/opendal"},"https://dist.apache.org/repos/dist/release/incubator/opendal")),(0,a.kt)("p",null,"Please always add the public key to KEYS in the release branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'svn co https://dist.apache.org/repos/dist/release/incubator/opendal opendal-dist\n# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\ncd opendal-dist\n(gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file\nsvn add .   # It is not needed if the KEYS document exists before.\nsvn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n')),(0,a.kt)("h2",{id:"upload-the-gpg-public-key-to-your-github-account"},"Upload the GPG public key to your GitHub account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/settings/keys"},"https://github.com/settings/keys")," to add your GPG key."),(0,a.kt)("li",{parentName:"ul"},"Please remember to bind the email address used in the GPG key to your GitHub account (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/settings/emails"},"https://github.com/settings/emails"),') if you find "unverified" after adding it.')))}d.isMDXComponent=!0}}]);