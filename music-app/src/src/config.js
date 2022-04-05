export const SIMP_STORAGE_ADDRESS = "0x7cA2632985800b4ed0c2882995036688f31b68D1"
export const SIMP_STORAGE_ABI = [
  {
    "inputs": [],
    "statemutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artist_likes",
    "outputs": [
      {
        "internaltype": "string",
        "name": "artistname",
        "type": "string"
      },
      {
        "internaltype": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "",
        "type": "string"
      },
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artist_song_mapping",
    "outputs": [
      {
        "internaltype": "string",
        "name": "songtitle",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "songproducer",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "songartist",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "songdate",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "genre",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "albumname",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "hash_",
        "type": "string"
      },
      {
        "internaltype": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artists",
    "outputs": [
      {
        "internaltype": "string",
        "name": "",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bestsongs",
    "outputs": [
      {
        "internaltype": "string",
        "name": "",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "",
        "type": "string"
      },
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "genre_song_mapping",
    "outputs": [
      {
        "internaltype": "string",
        "name": "songtitle",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "songproducer",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "songartist",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "songdate",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "genre",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "albumname",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "hash_",
        "type": "string"
      },
      {
        "internaltype": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listener_count",
    "outputs": [
      {
        "internaltype": "address",
        "name": "listener",
        "type": "address"
      },
      {
        "internaltype": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "songhashes",
    "outputs": [
      {
        "internaltype": "string",
        "name": "",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "songtitles",
    "outputs": [
      {
        "internaltype": "string",
        "name": "",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "song_likes",
    "outputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      },
      {
        "internaltype": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getallartists",
    "outputs": [
      {
        "internaltype": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getallsongs",
    "outputs": [
      {
        "internaltype": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "artistname",
        "type": "string"
      }
    ],
    "name": "getartistsongs",
    "outputs": [
      {
        "internaltype": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      }
    ],
    "name": "getsongsartist",
    "outputs": [
      {
        "internaltype": "string",
        "name": "artistname",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      }
    ],
    "name": "getsongsproducer",
    "outputs": [
      {
        "internaltype": "string",
        "name": "producer",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      }
    ],
    "name": "getsongsgenre",
    "outputs": [
      {
        "internaltype": "string",
        "name": "genre",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      }
    ],
    "name": "getsongsalbumname",
    "outputs": [
      {
        "internaltype": "string",
        "name": "aname",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      }
    ],
    "name": "getsongslikes",
    "outputs": [
      {
        "internaltype": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      }
    ],
    "name": "getsongsdate",
    "outputs": [
      {
        "internaltype": "string",
        "name": "date_val",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "_genre",
        "type": "string"
      }
    ],
    "name": "getgenresongs",
    "outputs": [
      {
        "components": [
          {
            "internaltype": "string",
            "name": "songtitle",
            "type": "string"
          },
          {
            "internaltype": "string",
            "name": "songproducer",
            "type": "string"
          },
          {
            "internaltype": "string",
            "name": "songartist",
            "type": "string"
          },
          {
            "internaltype": "string",
            "name": "songdate",
            "type": "string"
          },
          {
            "internaltype": "string",
            "name": "genre",
            "type": "string"
          },
          {
            "internaltype": "string",
            "name": "albumname",
            "type": "string"
          },
          {
            "internaltype": "string",
            "name": "hash_",
            "type": "string"
          },
          {
            "internaltype": "uint256",
            "name": "likes",
            "type": "uint256"
          },
          {
            "internaltype": "address[]",
            "name": "likedby",
            "type": "address[]"
          }
        ],
        "internaltype": "struct music.music_data[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "_artist",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "_song",
        "type": "string"
      }
    ],
    "name": "likesong",
    "outputs": [],
    "statemutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "gettopksongs",
    "outputs": [
      {
        "components": [
          {
            "internaltype": "string",
            "name": "songname",
            "type": "string"
          },
          {
            "internaltype": "uint256",
            "name": "likes",
            "type": "uint256"
          }
        ],
        "internaltype": "struct music.songlikes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "gettopartists",
    "outputs": [
      {
        "components": [
          {
            "internaltype": "string",
            "name": "artistname",
            "type": "string"
          },
          {
            "internaltype": "uint256",
            "name": "likes",
            "type": "uint256"
          }
        ],
        "internaltype": "struct music.artistlikes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "listentosong",
    "outputs": [],
    "statemutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internaltype": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "gettoplisteners",
    "outputs": [
      {
        "components": [
          {
            "internaltype": "address",
            "name": "listener",
            "type": "address"
          },
          {
            "internaltype": "uint256",
            "name": "count",
            "type": "uint256"
          }
        ],
        "internaltype": "struct music.listenercount[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "_songtitle",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "_songproducer",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "_songartist",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "_songdate",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "_genre",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "_albumname",
        "type": "string"
      },
      {
        "internaltype": "string",
        "name": "_hash_",
        "type": "string"
      }
    ],
    "name": "addmusiccontent",
    "outputs": [],
    "statemutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internaltype": "string",
        "name": "songname",
        "type": "string"
      }
    ],
    "name": "geturlofsong",
    "outputs": [
      {
        "internaltype": "string",
        "name": "",
        "type": "string"
      }
    ],
    "statemutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artist_likes",
    "outputs": [
      {
        "internalType": "string",
        "name": "artistName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artist_song_mapping",
    "outputs": [
      {
        "internalType": "string",
        "name": "songTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songProducer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songArtist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "genre",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "albumName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hash_",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "artists",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bestSongs",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "genre_song_mapping",
    "outputs": [
      {
        "internalType": "string",
        "name": "songTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songProducer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songArtist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "songDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "genre",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "albumName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hash_",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listener_count",
    "outputs": [
      {
        "internalType": "address",
        "name": "listener",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "songHashes",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "songTitles",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "song_likes",
    "outputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllArtists",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllSongs",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "artistName",
        "type": "string"
      }
    ],
    "name": "getArtistSongs",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsArtist",
    "outputs": [
      {
        "internalType": "string",
        "name": "artistName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsProducer",
    "outputs": [
      {
        "internalType": "string",
        "name": "producer",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsGenre",
    "outputs": [
      {
        "internalType": "string",
        "name": "genre",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsAlbumName",
    "outputs": [
      {
        "internalType": "string",
        "name": "aname",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsLikes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getSongsDate",
    "outputs": [
      {
        "internalType": "string",
        "name": "date_val",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_genre",
        "type": "string"
      }
    ],
    "name": "getGenreSongs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "songTitle",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "songProducer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "songArtist",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "songDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "genre",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "albumName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hash_",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "likes",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "likedBy",
            "type": "address[]"
          }
        ],
        "internalType": "struct Music.Music_data[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_artist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_song",
        "type": "string"
      }
    ],
    "name": "likeSong",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "getTopKSongs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "songName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "likes",
            "type": "uint256"
          }
        ],
        "internalType": "struct Music.songLikes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "getTopArtists",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "artistName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "likes",
            "type": "uint256"
          }
        ],
        "internalType": "struct Music.artistLikes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "listenToSong",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "k",
        "type": "uint256"
      }
    ],
    "name": "getTopListeners",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "listener",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "count",
            "type": "uint256"
          }
        ],
        "internalType": "struct Music.listenerCount[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_songTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_songProducer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_songArtist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_songDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_genre",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_albumName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hash_",
        "type": "string"
      }
    ],
    "name": "addMusicContent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "songName",
        "type": "string"
      }
    ],
    "name": "getURLofSong",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]