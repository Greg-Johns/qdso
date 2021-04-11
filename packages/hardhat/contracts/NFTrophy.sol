pragma solidity >=0.6.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol
import "hardhat/console.sol";

contract NFTrophy is ERC721 {
  constructor() ERC721("NFTrophy", "NFTrophy") public {
    }

    function mint(address _to, string memory _tokenURI) public returns(bool) {
       uint _tokenId = totalSupply().add(1);
       _mint(_to, _tokenId);
       _setTokenURI(_tokenId, _tokenURI);
       return true;
    }
}

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// // GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

// contract YourCollectible is ERC721, Ownable {

//   using Counters for Counters.Counter;
//   Counters.Counter private _tokenIds;

//   constructor() public ERC721("YourCollectible", "YCB") {
//     _setBaseURI("https://ipfs.io/ipfs/");
//   }

//   function mintItem(address to, string memory tokenURI)
//       public
//       onlyOwner
//       returns (uint256)
//   {
//       _tokenIds.increment();

//       uint256 id = _tokenIds.current();
//       _mint(to, id);
//       _setTokenURI(id, tokenURI);

//       return id;
//   }
// }