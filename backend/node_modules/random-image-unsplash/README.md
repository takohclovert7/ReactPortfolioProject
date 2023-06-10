# random-image-unsplash
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.5-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/uzairkhan01/node-chat-stream" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>  
A javascript package for random image url. Fetched images from unsplash. It can be use in any javascript framework (both frontend and backend).

## Getting Started
1-Run
`npm i random-image-unsplash`  
or  
`yarn add random-image-unsplash`  
2-Add in js   
`import { FetchImage } from 'random-image-unsplash';` or `const { FetchImage } = require('random-image-unsplash')` 





`FetchImage({ type: 'user', width: 400, height: 400 }).then((image)=>{`  
` let randomImage = image; //return image url  `
`})` 


You can change width, height and type.  
type is collection from `https://unsplash.com/collections`  

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/uzairkhan01/node-chat-stream/issues). 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Show your support

Give a ⭐️ if this project helped you!  
