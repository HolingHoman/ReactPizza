import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = () => (
   <ContentLoader
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
   >
      <circle cx="135" cy="135" r="135" />
      <rect x="9" y="282" rx="0" ry="0" width="260" height="24" />
      <rect x="0" y="319" rx="18" ry="18" width="280" height="84" />
      <rect x="141" y="411" rx="19" ry="19" width="137" height="44" />
      <rect x="0" y="421" rx="0" ry="0" width="103" height="27" />
   </ContentLoader>
)

export default PizzaLoader