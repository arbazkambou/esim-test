"use client";

import countryImage from "@/_assets/images/countryImg.png";
import Reveal from "@/components/animations/Reveal";
import CheckCompatibilityModal from "@/components/my-ui/modals/CheckCompatibilityModal";
import PagesMeta from "@/components/my-ui/shared/PagesMeta";
import TrustpilotWidget from "@/components/my-ui/shared/TrustpilotWidget";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { cardVariantPrimary } from "@/lib/animations";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addItem, getTotalCartItems } from "@/redux/slices/cartSlice";
import { PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";
import { ArrowUpLeft, ListFilter, Plane } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CartSheet from "../cart/CartSheet";
import IncDecButtons from "../cart/IncDecButtons";
import CountryPackageCard from "./CountryPackageCard";
import DataVoicePackageCard from "./DataVoicePackageCard";
import InfoMessage from "./InfoMessage";
import { sendGTMEvent } from "@next/third-parties/google";

function CountryPackagesList({
  packages,
  isGlobalPage = false,
}: {
  packages: PackagesData;
  isGlobalPage?: boolean;
}) {
  const [selectedPackageId, setSelectedPackageId] = useState("");

  const { name, image_url, cover_image } = packages.data;
  const [cartQuantity, setCartQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useAppDispatch();
  const totalCartQuantity = useAppSelector((state) =>
    getTotalCartItems(state.cart),
  );
  const pathName = usePathname();

  const isDataVoice = pathName.endsWith("esim/");

  const limitedPackages = packages.data.packages.filter(
    (item) => !item.unlimited,
  );
  const unlimitedPackages = packages.data.packages.filter(
    (item) => item.unlimited,
  );

  const isLimitedPackages = limitedPackages.length > 0;

  const isUnlimitedPackages = unlimitedPackages.length > 0;

  const [isUnlimited, setIsUnlimited] = useState(
    isLimitedPackages ? false : true,
  );

  let isSelectedPackageFromVodafoneOrO2;

  //To show a info text if selected package is from vodafone or o2
  if (selectedPackageId) {
    const selectedPackage = packages.data.packages.find(
      (pkg) => pkg.id === selectedPackageId,
    );

    if (selectedPackage) {
      isSelectedPackageFromVodafoneOrO2 = ["Vodafone", "O2"].includes(
        selectedPackage.provider,
      );
    }
  }

  //this function is used to track which package is currently selected
  function handleValueChange(packageId: string) {
    setSelectedPackageId(packageId);
    setCartQuantity(1);
  }

  //this function is used to toggle between limited and unlimited packages
  function handleCheckChange(check: boolean) {
    setCartQuantity(1);
    setIsUnlimited(() => check);
  }

  //this function is used to hanlde add to cart logic
  function handleAddToCart() {
    //check to prevent adding of more than 5 items in the cart
    if (totalCartQuantity >= 5) {
      toast.error("You can only add up to 5 eSIM packages to your cart.");
      setShowCart(true);
      return;
    }

    //get the id of package from the state and then find the details of the package from the packages array and put in the cart
    if (selectedPackageId) {
      const searchedPackage = packages.data.packages.find(
        (item) => item.id === selectedPackageId,
      );

      if (searchedPackage) {
        const { id, name, price, provider, package_type } = searchedPackage;

        sendGTMEvent({
          event: "add_to_cart",
          ecommerce: {
            currency: "USD",
            value: cartQuantity * price,
            items: [
              {
                item_id: id,
                item_name: name,
                price: price,
                quantity: cartQuantity,
                affiliation: "eSIM Card Web",
                item_brand: provider,
                item_category: package_type,
              },
            ],
          },
        });

        const cartItem = {
          ...searchedPackage,
          quantity: cartQuantity,
          image_url: packages.data.image_url,
          recurring: 0,
          can_renew: searchedPackage.can_renew ? true : false,
        };
        dispatch(addItem(cartItem));
        toast.success("Your package has been added to the cart successfully!");
        setShowCart(true);
        setCartQuantity(1);
      }
    }
  }

  //1. if user select unlimited packages then it will select first item in unlimited packages array
  //2. if user select limited packages then it will select first item in limited packages array
  useEffect(() => {
    if (isUnlimited && unlimitedPackages.length > 0) {
      setSelectedPackageId(unlimitedPackages[0].id);
    } else if (!isUnlimited && limitedPackages.length > 0) {
      setSelectedPackageId(limitedPackages[0].id);
    } else {
      setSelectedPackageId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUnlimited]);

  useEffect(() => {
    if (packages.data.packages.length !== 0) {
      const item = packages.data.packages[0];
      const { name, price, provider, package_type, id } = item;

      const viewedItems = [
        {
          item_id: id,
          item_name: name,
          price: price,
          quantity: 1,
          affiliation: "eSIM Card Web",
          item_brand: provider,
          item_category: package_type,
        },
      ];

      sendGTMEvent({
        event: "view_item",
        ecommerce: {
          currency: "USD",
          value: price,
          items: viewedItems,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="grid gap-x-10 gap-y-10 xl:grid-cols-2">
        <div>
          {/* country flag and text  */}
          <Card className="flex flex-col gap-4 rounded-[2.5rem] p-4 xl:rounded-b-none xl:rounded-t-[2.5rem]">
            {!isGlobalPage ? (
              <h1 className="flex flex-col items-center gap-2 xl:items-start">
                {isDataVoice ? (
                  <>
                    <span className="flex items-center gap-1 text-body-base font-500 text-muted-foreground">
                      <span>Travel eSIM </span>
                      <Plane />
                    </span>
                    <span className="flex gap-2">
                      <span className="relative inline-block h-[40px] w-[40px] shrink-0">
                        <Image
                          src={image_url}
                          alt={`${name} flag`}
                          fill
                          sizes="auto"
                          className="shrink-0 rounded-full object-cover shadow-md"
                          priority
                        />
                      </span>

                      <span className="font-montserrat text-h1-base font-700 md:text-h1-md">
                        For {name} with Data & Calls
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex items-center gap-1 text-body-base font-500 text-muted-foreground">
                      <span>Prepaid Travel </span>
                      <Plane />
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="relative inline-block h-[40px] w-[40px]">
                        <Image
                          src={image_url}
                          alt={`${name} flag`}
                          fill
                          sizes="auto"
                          className="rounded-full object-cover shadow-md"
                          priority
                        />
                      </span>

                      <span className="font-montserrat text-h1-base font-700 md:text-h1-md">
                        eSIM For {name}
                      </span>
                    </span>
                  </>
                )}
              </h1>
            ) : (
              <p className="flex flex-col items-center gap-2 xl:items-start">
                <span className="flex items-center gap-1 text-body-base font-500 text-muted-foreground">
                  <span>Prepaid Travel </span>
                  <Plane />
                </span>

                <span className="flex items-center gap-2">
                  <span className="relative inline-block h-[40px] w-[40px]">
                    <Image
                      src={image_url}
                      alt={`${name} flag`}
                      fill
                      sizes="auto"
                      className="rounded-full object-cover shadow-md"
                      priority
                    />
                  </span>

                  <span className="font-montserrat text-h1-base font-700 md:text-h1-md">
                    eSIM For {name}
                  </span>
                </span>
              </p>
            )}

            <p className="text-body-sm md:text-body-base xl:hidden">
              {isDataVoice
                ? `Get the best eSIM data plans with unlimited voice for ${name} travel. Enjoy a UK number with eSIM for calls and incoming SMS. Stay connected anywhere`
                : `Get the best eSIM for ${name} travel from eSIMCard. Enjoy seamless
              connectivity and affordable unlimited data plans. Stay connected
              wherever you go.`}
            </p>
          </Card>

          {/* country image  */}
          <div className="relative hidden w-full xl:flex xl:h-[655px]">
            <Image
              src={cover_image?.startsWith("http") ? cover_image : countryImage}
              fill
              sizes="auto"
              alt={`${name} image`}
              priority
              quality={70}
              className="rounded-b-[2.5rem] object-cover"
            />
            <div className="absolute inset-0 z-10 rounded-b-[2.5rem] bg-country-image-overlay"></div>

            <div className="z-20 flex items-center justify-center xl:absolute xl:bottom-6 xl:text-background xl:opacity-95">
              <p className="mx-4 text-center text-body-md">
                {isDataVoice
                  ? `Get the best eSIM data plans with unlimited voice for ${name} travel. Enjoy a UK number with eSIM for calls and incoming SMS. Stay connected anywhere`
                  : `Get the best eSIM for ${name} travel from eSIMCard. Enjoy seamless
              connectivity and affordable unlimited data plans. Stay connected
              wherever you go.`}
              </p>
            </div>
          </div>
        </div>

        {/* Country packages  */}
        <div className="flex flex-col gap-[1.5rem]">
          <TrustpilotWidget className="md:hidden" />
          <h2 className="text-center font-montserrat text-lg font-600 md:text-[1.25rem] xl:text-start">
            Pick the Best eSIM Plans for {name} Travel
          </h2>

          {/* Limited and Unlimited packages filter  */}
          <div className="flex items-center justify-between">
            {isUnlimitedPackages && isLimitedPackages && (
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
            )}

            <TrustpilotWidget className="hidden md:block" />
            <ListFilter size={24} />
          </div>

          {/* COuntry packages card   */}
          <div>
            {isLimitedPackages && (
              <RadioGroup
                value={selectedPackageId}
                onValueChange={handleValueChange}
                defaultValue={`${limitedPackages[0].id}`}
                className={`barMini mt-4 max-h-[490px] min-h-[450px] grid-cols-2 gap-x-2 gap-y-4 overflow-auto pe-2 pt-8 sm:gap-x-4 sm:gap-y-6 md:grid-cols-3 ${isUnlimited && "hidden"} pb-8`}
              >
                {limitedPackages.map((item, index) =>
                  item.package_type !== "DATA-VOICE-SMS" ? (
                    <Reveal
                      key={index}
                      variants={cardVariantPrimary}
                      custom={index}
                      once={false}
                    >
                      <CountryPackageCard
                        key={index}
                        packageDetail={item}
                        index={index}
                        setSelectedPackageId={setSelectedPackageId}
                        selectedPackageId={selectedPackageId}
                        countryInfoAndPackages={packages.data}
                      />
                    </Reveal>
                  ) : (
                    <Reveal
                      key={index}
                      variants={cardVariantPrimary}
                      custom={index}
                      once={false}
                    >
                      <DataVoicePackageCard
                        selectedPackageId={selectedPackageId}
                        setSelectedPackageId={setSelectedPackageId}
                        index={index}
                        packageDetail={item}
                        key={index}
                        countryInfoAndPackages={packages.data}
                      />
                    </Reveal>
                  ),
                )}
              </RadioGroup>
            )}

            {isUnlimitedPackages && (
              <RadioGroup
                value={selectedPackageId}
                defaultValue={`${unlimitedPackages[0].id}`}
                onValueChange={handleValueChange}
                className={`barMini mt-4 max-h-[490px] min-h-[450px] grid-cols-2 gap-x-2 gap-y-4 overflow-auto pe-2 pt-8 sm:gap-x-4 sm:gap-y-6 md:grid-cols-3 ${!isUnlimited && "hidden"} pb-8`}
              >
                {unlimitedPackages.map((item, index) =>
                  item.package_type !== "DATA-VOICE-SMS" ? (
                    <Reveal
                      key={index}
                      variants={cardVariantPrimary}
                      custom={index}
                      once={false}
                    >
                      <CountryPackageCard
                        key={index}
                        packageDetail={item}
                        index={index}
                        setSelectedPackageId={setSelectedPackageId}
                        selectedPackageId={selectedPackageId}
                        countryInfoAndPackages={packages.data}
                      />
                    </Reveal>
                  ) : (
                    <Reveal
                      key={index}
                      custom={index}
                      variants={cardVariantPrimary}
                      once={false}
                    >
                      <DataVoicePackageCard
                        selectedPackageId={selectedPackageId}
                        setSelectedPackageId={setSelectedPackageId}
                        index={index}
                        packageDetail={item}
                        key={index}
                        countryInfoAndPackages={packages.data}
                      />
                    </Reveal>
                  ),
                )}
              </RadioGroup>
            )}

            {!isLimitedPackages && !isUnlimitedPackages && <InfoMessage />}
          </div>

          {/* Increament decreament and add to cart buttons  */}
          {(isLimitedPackages || isUnlimitedPackages) && (
            <div
              className="flex items-center justify-between gap-4 xl:gap-6"
              id="addToCart"
            >
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
          )}

          {isSelectedPackageFromVodafoneOrO2 && (
            <InfoMessage
              message="Usage outside the supported regions may result in the full consumption of your plan’s allowances. Calls are only permitted within the country you are traveling in."
              className="min-h-max text-sm"
            />
          )}

          {/* Check compatibility modal */}
          <CheckCompatibilityModal />

          {/* Country meta tabs  */}
          {packages.page_features && <PagesMeta packages={packages} />}
        </div>
      </div>

      {/* Add to cart side panel  or sheet */}
      <CartSheet setShowCart={setShowCart} showCart={showCart} />
    </>
  );
}

export default CountryPackagesList;
