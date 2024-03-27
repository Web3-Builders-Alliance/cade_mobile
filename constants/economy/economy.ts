export type Newamm = {
    "version": "0.1.0",
    "name": "newamm",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user2",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "vaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultY",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "newAuth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      },
      {
        "name": "lpInitialize",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      },
      {
        "name": "mintLp",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "swap",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user2",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultY",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "newAuth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "expiration",
            "type": "i64"
          }
        ]
      },
      {
        "name": "pay",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "gamer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "gamerVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "claimUsdcForCade",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user2",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "gamer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultY",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "gamerVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "gamerVaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "newAuth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "config",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "seed",
              "type": "u64"
            },
            {
              "name": "authority",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "mintX",
              "type": "publicKey"
            },
            {
              "name": "authBump",
              "type": "u8"
            },
            {
              "name": "newAuthBump",
              "type": "u8"
            },
            {
              "name": "configBump",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "lpConfig",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "seed",
              "type": "u64"
            },
            {
              "name": "authority",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "mintLp",
              "type": "publicKey"
            },
            {
              "name": "lpBump",
              "type": "u8"
            },
            {
              "name": "lpConfigBump",
              "type": "u8"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "DefaultError",
        "msg": "DefaultError"
      },
      {
        "code": 6001,
        "name": "OfferExpired",
        "msg": "Offer expired."
      },
      {
        "code": 6002,
        "name": "PoolLocked",
        "msg": "This pool is locked."
      },
      {
        "code": 6003,
        "name": "SlippageExceeded",
        "msg": "Slippage exceeded."
      },
      {
        "code": 6004,
        "name": "Overflow",
        "msg": "Overflow detected."
      },
      {
        "code": 6005,
        "name": "Underflow",
        "msg": "Underflow detected."
      },
      {
        "code": 6006,
        "name": "InvalidToken",
        "msg": "Invalid token."
      },
      {
        "code": 6007,
        "name": "LiquidityLessThanMinimum",
        "msg": "Actual liquidity is less than minimum."
      },
      {
        "code": 6008,
        "name": "NoLiquidityInPool",
        "msg": "No liquidity in pool."
      },
      {
        "code": 6009,
        "name": "BumpError",
        "msg": "Bump error."
      },
      {
        "code": 6010,
        "name": "CurveError",
        "msg": "Curve error."
      },
      {
        "code": 6011,
        "name": "InvalidFee",
        "msg": "Fee is greater than 100%. This is not a very good deal."
      },
      {
        "code": 6012,
        "name": "InvalidAuthority",
        "msg": "Invalid update authority."
      },
      {
        "code": 6013,
        "name": "NoAuthoritySet",
        "msg": "No update authority set."
      },
      {
        "code": 6014,
        "name": "InvalidAmount",
        "msg": "Invalid amount."
      },
      {
        "code": 6015,
        "name": "InvalidPrecision",
        "msg": "Invalid precision."
      },
      {
        "code": 6016,
        "name": "InsufficientBalance",
        "msg": "Insufficient balance."
      },
      {
        "code": 6017,
        "name": "ZeroBalance",
        "msg": "Zero balance."
      }
    ]
  };
  
  export const IDL: Newamm = {
    "version": "0.1.0",
    "name": "newamm",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user2",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "vaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultY",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "newAuth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      },
      {
        "name": "lpInitialize",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      },
      {
        "name": "mintLp",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "swap",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user2",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultY",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "newAuth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "expiration",
            "type": "i64"
          }
        ]
      },
      {
        "name": "pay",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "gamer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "gamerVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "claimUsdcForCade",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "user2",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "gamer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "mintX",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultY",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "gamerVaultLp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "gamerVaultX",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "auth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "newAuth",
            "isMut": false,
            "isSigner": false,
            "docs": [
              "CHECKED: This is not dangerous. It's just used for signing."
            ]
          },
          {
            "name": "config",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "lpConfig",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "config",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "seed",
              "type": "u64"
            },
            {
              "name": "authority",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "mintX",
              "type": "publicKey"
            },
            {
              "name": "authBump",
              "type": "u8"
            },
            {
              "name": "newAuthBump",
              "type": "u8"
            },
            {
              "name": "configBump",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "lpConfig",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "seed",
              "type": "u64"
            },
            {
              "name": "authority",
              "type": {
                "option": "publicKey"
              }
            },
            {
              "name": "mintLp",
              "type": "publicKey"
            },
            {
              "name": "lpBump",
              "type": "u8"
            },
            {
              "name": "lpConfigBump",
              "type": "u8"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "DefaultError",
        "msg": "DefaultError"
      },
      {
        "code": 6001,
        "name": "OfferExpired",
        "msg": "Offer expired."
      },
      {
        "code": 6002,
        "name": "PoolLocked",
        "msg": "This pool is locked."
      },
      {
        "code": 6003,
        "name": "SlippageExceeded",
        "msg": "Slippage exceeded."
      },
      {
        "code": 6004,
        "name": "Overflow",
        "msg": "Overflow detected."
      },
      {
        "code": 6005,
        "name": "Underflow",
        "msg": "Underflow detected."
      },
      {
        "code": 6006,
        "name": "InvalidToken",
        "msg": "Invalid token."
      },
      {
        "code": 6007,
        "name": "LiquidityLessThanMinimum",
        "msg": "Actual liquidity is less than minimum."
      },
      {
        "code": 6008,
        "name": "NoLiquidityInPool",
        "msg": "No liquidity in pool."
      },
      {
        "code": 6009,
        "name": "BumpError",
        "msg": "Bump error."
      },
      {
        "code": 6010,
        "name": "CurveError",
        "msg": "Curve error."
      },
      {
        "code": 6011,
        "name": "InvalidFee",
        "msg": "Fee is greater than 100%. This is not a very good deal."
      },
      {
        "code": 6012,
        "name": "InvalidAuthority",
        "msg": "Invalid update authority."
      },
      {
        "code": 6013,
        "name": "NoAuthoritySet",
        "msg": "No update authority set."
      },
      {
        "code": 6014,
        "name": "InvalidAmount",
        "msg": "Invalid amount."
      },
      {
        "code": 6015,
        "name": "InvalidPrecision",
        "msg": "Invalid precision."
      },
      {
        "code": 6016,
        "name": "InsufficientBalance",
        "msg": "Insufficient balance."
      },
      {
        "code": 6017,
        "name": "ZeroBalance",
        "msg": "Zero balance."
      }
    ]
  };
  