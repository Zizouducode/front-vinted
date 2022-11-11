import { Range } from "react-range";

const PriceRange = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (values) => {
    const newPriceRange = [...priceRange];
    newPriceRange[0] = values[0];
    newPriceRange[1] = values[1];
    setPriceRange(newPriceRange);
  };

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
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              backgroundColor: "#999",
            }}
          />
        )}
      />
    </div>
  );
};

export default PriceRange;
