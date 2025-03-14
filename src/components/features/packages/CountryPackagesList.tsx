"use client";

import countryImg from "@/_assets/images/countryImg.png";
import greenStar from "@/_assets/svgs/greenStar.svg";
import CheckCompatibilityModal from "@/components/my-components/modals/CheckCompatibilityModal";
import PagesMeta from "@/components/my-components/shared/PagesMeta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { addItem, getTotalCartItems } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";
import { ArrowUpLeft, ListFilter, Plane } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import IncDecButtons from "../cart/IncDecButtons";
import CountryPackageCard from "./CountryPackageCard";
import DataVoicePackageCard from "./DataVoicePackageCard";
import CartSheet from "../cart/CartSheet";
import OutOfStockMessage from "./OutOfStockMessage";

function CountryPackagesList({ packages }: { packages: PackagesData }) {
  const [selectedPackageId, setSelectedPackageId] = useState("");
  const [isUnlimited, setIsUnlimited] = useState(false);
  const { name, image_url } = packages.data;
  const [cartQuantity, setCartQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useAppDispatch();
  const totalCartQuantity = useAppSelector((state) =>
    getTotalCartItems(state.cart),
  );

  const limitedPackages = packages.data.packages.filter(
    (item) => !item.unlimited,
  );

  const unlimitedPackages = packages.data.packages.filter(
    (item) => item.unlimited,
  );

  function handleValueChange(packageId: string) {
    setSelectedPackageId(packageId);
    setCartQuantity(1);
  }

  function handleCheckChange(check: boolean) {
    setCartQuantity(1);
    setIsUnlimited(() => check);
  }

  function handleAddToCart() {
    if (totalCartQuantity >= 5) {
      toast.error("You can only add up to 5 eSIM packages to your cart.");
      setShowCart(true);
      return;
    }

    if (selectedPackageId) {
      const searchedPackage = packages.data.packages.find(
        (item) => item.id === selectedPackageId,
      );

      if (searchedPackage) {
        const cartItem = {
          ...searchedPackage,
          quantity: cartQuantity,
          image_url: packages.data.image_url,
        };
        dispatch(addItem(cartItem));
        toast.success("Your package has been added to the cart successfully!");
        setShowCart(true);
        setCartQuantity(1);
      }
    }
  }

  const isUnlimitedPackages = packages.data.packages.find(
    (item) => item.unlimited === true,
  );

  useEffect(() => {
    if (isUnlimited && unlimitedPackages.length > 0) {
      setSelectedPackageId(unlimitedPackages[0].id);
    } else if (!isUnlimited && limitedPackages.length > 0) {
      setSelectedPackageId(limitedPackages[0].id);
    } else {
      setSelectedPackageId("");
    }
  }, [isUnlimited]);

  return (
    <div className="grid gap-x-10 gap-y-10 xl:grid-cols-2">
      {/* Hero image  */}
      <div>
        <div>
          <Card className="flex flex-col gap-4 rounded-[2.5rem] p-4 xl:rounded-b-none xl:rounded-t-[2.5rem]">
            <h1 className="flex flex-col items-center gap-2 xl:items-start">
              <span className="flex items-center gap-1 text-body-base font-500 text-muted-foreground">
                <span>Prepaid Travel</span>
                <Plane />
              </span>
              <span className="flex items-center gap-2">
                <div className="relative h-[40px] w-[40px]">
                  <Image
                    src={image_url}
                    alt={`${name} flag`}
                    fill
                    sizes="auto"
                    className="rounded-full object-cover shadow-md"
                    priority
                  />
                </div>
                <span className="font-montserrat text-h1-base font-700 md:text-h1-md">
                  eSIM For {name}
                </span>
              </span>
            </h1>
            <p className="text-body-sm md:text-body-base xl:hidden">
              Get the best eSIM for {name} travel from eSIMCard. Enjoy seamless
              connectivity and affordable unlimited data plans. Stay connected
              wherever you go.
            </p>
          </Card>

          <div className="relative hidden w-full xl:flex xl:h-[655px]">
            <Image
              src={countryImg}
              fill
              sizes="auto"
              alt="country image"
              priority
              quality={70}
            />

            <div className="z-20 flex items-center justify-center xl:absolute xl:bottom-6 xl:text-background xl:opacity-95">
              <p className="mx-4 text-center text-body-md">
                Get the best eSIM for {name} travel from eSIMCard. Enjoy
                seamless connectivity and affordable unlimited data plans. Stay
                connected wherever you go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Package side  */}
      <div className="flex flex-col gap-[1.5rem]">
        <p className="flex items-center justify-center gap-4 text-xs xl:justify-start">
          <span className="font-700">Excellent</span>
          <span>
            <span className="font-700">4.8</span> out of 5
          </span>
          <span className="flex items-center gap-1 font-700">
            <Image
              src={greenStar}
              alt="Trustpilot Rating"
              height={14}
              width={13}
              sizes="auto"
            />
            Trustpilot
          </span>
        </p>

        <h2 className="text-center font-montserrat text-lg font-600 md:text-[1.25rem] xl:text-start">
          Pick the Best eSIM Plans for {name} Travel
        </h2>

        {/* Package switch  */}
        {isUnlimitedPackages && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-body-sm font-500">
              <p
                className={`${isUnlimited ? "text-muted-foreground" : "text-foreground opacity-80"}`}
              >
                Standard Plan
              </p>
              <Switch
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
                checked={isUnlimited}
                onCheckedChange={handleCheckChange}
              />
              <p
                className={`${isUnlimited ? "text-foreground" : "text-muted-foreground opacity-80"}`}
              >
                Unlimited Data
              </p>
            </div>
            <ListFilter size={24} />
          </div>
        )}

        {/* Pricing cards  */}
        <div>
          {limitedPackages.length > 0 ? (
            <RadioGroup
              value={selectedPackageId}
              onValueChange={handleValueChange}
              defaultValue={`${limitedPackages[0].id}`}
              className={`barMini mt-4 max-h-[490px] min-h-[450px] grid-cols-2 gap-x-2 gap-y-4 overflow-auto pe-2 pt-8 sm:gap-x-4 sm:gap-y-6 md:grid-cols-3 ${isUnlimited && "hidden"} pb-8`}
            >
              {limitedPackages.map((item, index) =>
                item.package_type !== "DATA-VOICE-SMS" ? (
                  <CountryPackageCard
                    key={index}
                    packageDetail={item}
                    index={index}
                    setSelectedPackageId={setSelectedPackageId}
                    selectedPackageId={selectedPackageId}
                    countryInfoAndPackages={packages.data}
                  />
                ) : (
                  <DataVoicePackageCard
                    selectedPackageId={selectedPackageId}
                    setSelectedPackageId={setSelectedPackageId}
                    index={index}
                    packageDetail={item}
                    key={index}
                    countryInfoAndPackages={packages.data}
                  />
                ),
              )}
            </RadioGroup>
          ) : (
            <OutOfStockMessage className={`${isUnlimited && "!hidden"}`} />
          )}

          {unlimitedPackages.length > 0 ? (
            <RadioGroup
              value={selectedPackageId}
              defaultValue={`${unlimitedPackages[0].id}`}
              onValueChange={handleValueChange}
              className={`barMini mt-4 max-h-[490px] min-h-[450px] grid-cols-2 gap-x-2 gap-y-4 overflow-auto pe-2 pt-8 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 ${!isUnlimited && "hidden"} pb-8`}
            >
              {unlimitedPackages.map((item, index) =>
                item.package_type !== "DATA-VOICE-SMS" ? (
                  <CountryPackageCard
                    key={index}
                    packageDetail={item}
                    index={index}
                    setSelectedPackageId={setSelectedPackageId}
                    selectedPackageId={selectedPackageId}
                    countryInfoAndPackages={packages.data}
                  />
                ) : (
                  <DataVoicePackageCard
                    selectedPackageId={selectedPackageId}
                    setSelectedPackageId={setSelectedPackageId}
                    index={index}
                    packageDetail={item}
                    key={index}
                    countryInfoAndPackages={packages.data}
                  />
                ),
              )}
            </RadioGroup>
          ) : (
            <OutOfStockMessage className={`${!isUnlimited && "!hidden"}`} />
          )}
        </div>

        {/* Increament decreament buttons  */}
        <div className="flex items-center justify-between gap-4 xl:gap-6">
          <IncDecButtons
            cartQuantity={cartQuantity}
            setCartQuantity={setCartQuantity}
          />

          <div className="h-full w-full">
            <Button
              className={`group flex h-full w-full items-center gap-3 text-sm`}
              onClick={handleAddToCart}
            >
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-foreground"
                size={20}
              />
              Add To Cart
            </Button>
          </div>
        </div>

        {/* Check compatibility  */}
        <CheckCompatibilityModal />

        {/* Tabs  */}
        {packages.page_features && <PagesMeta packages={packages} />}
      </div>

      <CartSheet setShowCart={setShowCart} showCart={showCart} />
    </div>
  );
}

export default CountryPackagesList;
