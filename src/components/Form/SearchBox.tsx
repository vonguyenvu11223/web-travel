import { ChangeEvent, Fragment } from "react";
import { FunctionComponent } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import { Combobox, Transition } from "@headlessui/react";
import { IconCheck, IconMapPin, IconMark, IconSearch } from "../icons";

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null,
  ) => void;
  defaultValue: string;
  error?: boolean;
}

const libraries: Libraries = ["places"];

export function SearchBox({
  onSelectAddress,
  defaultValue,
  error,
}: ISearchBoxProps) {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: "AIzaSyCdyvCZl7-evY6kG8KpAoahUv1rurK7_zk",
    libraries,
  });

  if (!isLoaded) return null;
  if (loadError) return <div>Error loading</div>;

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
      error={error}
    />
  );
}

function ReadySearchBox({
  onSelectAddress,
  defaultValue,
  error,
}: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },

    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // types: ['(cities)'],
      componentRestrictions: { country: "VN" },
    },
    debounce: 500,
    defaultValue,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      onSelectAddress("", null, null);
    }
  };

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      onSelectAddress(address, lat, lng);
    } catch (error) {
      console.error(`😱 Error:`, error);
    }
  };

  return (
    <div
      className={`relative flex w-full border-b-[1px] border-slate-200 bg-white  text-text1  lg:rounded-full lg:border-b-0 `}
    >
      <div
        className={`relative z-10 flex flex-1  flex-shrink-0 cursor-pointer items-center space-x-3 text-left focus:outline-none `}
      >
        <div className="flex-grow">
          <Combobox value={value || ""} onChange={handleSelect}>
            <Combobox.Input
              id="search"
              value={value}
              onChange={handleChange}
              // disabled={!ready}
              className={`placeholder-color  h-11 w-full rounded-md border border-input bg-background px-3 pl-2 pr-12 text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${error ? "!border-destructive" : ""}`}
              placeholder={"Search location"}
              autoComplete="off"
            />
            {!!value ? (
              <div
                className="absolute top-0 right-0 flex items-center justify-center w-12 h-full"
                onClick={() => {
                  setValue("");
                  onSelectAddress("", null, null);
                }}
              >
                <IconMark className="w-4 h-4 fill-secondary" />
              </div>
            ) : (
              <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-full">
                <IconSearch className="w-4 h-4 fill-black" />
              </div>
            )}

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute mt-1 max-h-96 w-full !list-none overflow-auto rounded-md bg-white !p-0 text-base  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {status === "OK" &&
                  data.map(({ place_id, description }) => (
                    <Combobox.Option
                      key={`${place_id}`}
                      className={({ active }) =>
                        `relative cursor-pointer select-none px-4 py-3 ${
                          active ? "bg-slate-100 text-text1" : " text-text1"
                        }`
                      }
                      value={description}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center gap-5">
                            <span>
                              <IconMapPin className="fill-secondary" />
                            </span>
                            <span className={`block  font-bold`}>
                              {description}
                            </span>
                          </div>
                        </>
                      )}
                    </Combobox.Option>
                  ))}
              </Combobox.Options>
            </Transition>
          </Combobox>
        </div>
      </div>
    </div>
  );
}
