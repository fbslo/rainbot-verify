Registration:

- user requests registration link from the rainbot using /registration_help command. They receive link in this format: https://fbslo.github.io/rainbot-verify/?id=1075644908&address=0x9C1915f821912f5BbcbBD07EF92CEe9cF28068d4
- user signs a message using `personal_sign` method. Signed data should be `telegramUserId-0xuseraddressLowerCase`.
- user sends this message to rainbot using a command: /register 0xuseraddress 0xsignature

Deposit:
- user approve deposit contract to spend the token (e.g. https://contract.mph.am/?abi=[]&address=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&func=approve&args.spender=0x0A3fFfAa158786015b874aFcEcAab1dcE0892A61&args.amount=10e18&network=56)
- user calls the `deposit(telegramId, amount, tokenAddress)` function on RainbotDeposit contract (https://bscscan.com/address/0x0A3fFfAa158786015b874aFcEcAab1dcE0892A61)
(e.g. https://contract.mph.am/?abi=[]&address=0x0A3fFfAa158786015b874aFcEcAab1dcE0892A61&func=deposit&args.user=1075644908&args.amount=0.1e18&args.token=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&network=56)
