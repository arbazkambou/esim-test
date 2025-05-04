"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function BlogSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(window.location.search);

    if (query.trim()) {
      params.set("search", query.trim());
      params.delete("page");
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative max-w-[478px]">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your blog"
        className="w-full rounded-[1.4375rem] bg-background text-muted-foreground shadow focus-within:shadow-xl"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-primary"
        onClick={handleSearch}
      />
    </div>
  );
}

export default BlogSearch;
