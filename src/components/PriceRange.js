import { Range, getTrackBackground } from "react-range";

const PriceRange = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (values) => {
    const newPriceRange = [...priceRange];
    newPriceRange[0] = values[0];
    newPriceRange[1] = values[1];
    setPriceRange(newPriceRange);
  };

  const values = priceRange;
  console.log(priceRange);

  return (
    <div>
      <Range
        step={5}
        min={10}
        max={500}
        values={priceRange}
        onChange={(values) => {
          handlePriceChange(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#cccccc",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: priceRange[0],
                  max: priceRange[1],
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              backgroundColor: "#007580",
            }}
          />
        )}
      />
    </div>
  );
};

export default PriceRange;
