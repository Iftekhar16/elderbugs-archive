export interface Game {
  id: string
  name: string
  description?: string
  price?: number
  discount?: number
  discountedPrice?: number
  tags: string[]
  wishlist: boolean
  developer: string
  publisher?: string
  releaseDate?: string
  rating?: number
  platform: string[]
  images: images
}

export interface images {
  logo?: string
  bannerLandscape?: string
  bannerPortrait?: string
  bannerSquare?: string
  screenshot?: screenshot
}

export interface screenshot {
  screenshot1?: string
  screenshot2?: string
  screenshot3?: string
  screenshot4?: string
  screenshot5?: string
}

export interface GetGamesResponse {
  games: Game[];
}

// games {
//   id
//   name
//   description
//   price
//   discount
//   discountedPrice
//   tags
//   wishlist
//   developer
//   publisher
//   releaseDate
//   rating
//   platform
//   images {
//     logo
//     bannerLandscape
//     bannerPortrait
//     bannerSquare
//     screenshot {
//       screenshot1
//       screenshot2
//       screenshot3
//       screenshot4
//       screenshot5
//     }
//   }
// }