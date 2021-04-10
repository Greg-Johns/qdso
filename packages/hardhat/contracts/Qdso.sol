pragma solidity >=0.6.0 <0.7.0;

import "hardhat/console.sol";

contract Qdso {

  uint public count;

  // Function to get the current count
  function get() public view returns (uint) {
      return count;
  }

  // Function to increment count by 1
  function inc() public {
      count += 1;
  }

  // Function to decrement count by 1
  function dec() public {
      count -= 1;
  }

  // Collect funds in a anteup() function

  // Collect funds in a payable `stake()` function and track individual `balances` with a mapping:
  // (make sure to add a `Stake(address,uint256)` event and emit it for the frontend <List/> display)

  // After some `deadline` allow anyone to call an `execute()` function
  //  It should either call `exampleExternalContract.complete{value: address(this).balance}()` to send all the value

  // if the `threshold` was not met, allow everyone to call a `withdraw()` function

  // Add a `timeLeft()` view function that returns the time left before the deadline for the frontend

}
