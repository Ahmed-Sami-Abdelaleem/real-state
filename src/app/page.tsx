import PropertyCard from "@/components/card";
import FilterButton from "@/components/FilterButton";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import MapLibreMap from "@/components/Map";
import SearchBar from "@/components/searchFilter";

function Page() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Search and Filters */}
          <div className="lg:col-span-1 space-y-4">
            <SearchBar />

            {/* Filter Buttons Row */}
            <div className="flex space-x-4">
              <FilterButton />
              <FilterButton />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <PropertyCard
                images={[
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoftPpAd1jnkYdh6nkPFj4mlHQIfmGSKjoEbIrGt8B9HE_keZT8LiKQKB01IwMxmx0og&usqp=CAU",
                  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
                ]}
                price={"400$"}
                location={"maadi, cairo"}
                rooms={3}
                floor={2}
                area={"80"}
              />
              <PropertyCard
                images={[
                  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoftPpAd1jnkYdh6nkPFj4mlHQIfmGSKjoEbIrGt8B9HE_keZT8LiKQKB01IwMxmx0og&usqp=CAU",
                ]}
                price={"400$"}
                location={"maadi, cairo"}
                rooms={3}
                floor={2}
                area={"80"}
              />
              <PropertyCard
                images={[
                  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoftPpAd1jnkYdh6nkPFj4mlHQIfmGSKjoEbIrGt8B9HE_keZT8LiKQKB01IwMxmx0og&usqp=CAU",
                ]}
                price={"400$"}
                location={"maadi, cairo"}
                rooms={3}
                floor={2}
                area={"80"}
              />
              <PropertyCard
                images={[
                  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoftPpAd1jnkYdh6nkPFj4mlHQIfmGSKjoEbIrGt8B9HE_keZT8LiKQKB01IwMxmx0og&usqp=CAU",
                ]}
                price={"400$"}
                location={"maadi, cairo"}
                rooms={3}
                floor={2}
                area={"80"}
              />
            </div>
          </div>

          {/* Right Column: Map (Hidden on small screens) */}
          <MapLibreMap />
        </div>
      </div>
      <Footer/>
    </>
  );  
}

export default Page;
