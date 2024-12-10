import FilterButton from "@/components/FilterButton";
import SearchBar from "@/components/searchFilter";

function Page() {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Search and Filters */}
        <div className="lg:col-span-1 space-y-4">
          <SearchBar />

          {/* Filter Buttons Row */}
          <div className="flex space-x-4">
            <FilterButton />
            <FilterButton />
          </div>
        </div>

        {/* Right Column: Map (Hidden on small screens) */}
        <div className="hidden lg:block lg:col-span-2">map</div>
      </div>

      {/* Mobile Filter Buttons Row (Visible only on small screens) */}
      <div className="lg:hidden mt-4 flex space-x-4">
        <FilterButton />
        <FilterButton />
      </div>
    </div>
  );
}

export default Page;
