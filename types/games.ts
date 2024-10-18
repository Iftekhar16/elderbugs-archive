export interface Game {
  id: string
  name: string
  descriptions?: description[]
  price?: number
  discount?: number
  discountedPrice?: number
  tags: string[]
  isWishlisted?: boolean
  isAddedToCart?: boolean
  wishlistCount?: number
  isFeatured?: boolean
  isTrending?: boolean
  isFeaturedFranchise?: boolean
  developer: string
  publisher?: string
  releaseDate?: string
  rating?: number | null
  platform: string[]
  reviews: review[]
  images: images
}

export interface description {
  title: string
  content: string
}

export interface review {
  reviewerName : string
  reviewDescription : string
  reviewRating : number | null
}

export interface images {
  logo?: string
  bannerLandscape?: string
  bannerPortrait?: string
  bannerSquare?: string
  screenshots?: screenshots
}

export interface screenshots {
  screenshot1?: string
  screenshot2?: string
  screenshot3?: string
  screenshot4?: string
  screenshot5?: string
}

export interface GetGamesResponse {
  games: Game[]
  game: Game
}