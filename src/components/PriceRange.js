import { Range, getTrackBackground } from "react-range";

const PriceRange = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (values) => {
    const newPriceRange = [...priceRange];
    newPriceRange[0] = values[0];
    newPriceRange[1] = values[1];
    setPriceRange(newPriceRange);
  };

  let values = priceRange;
  // console.log(priceRange);

  return (
    <>
      <span>Prix entre : </span>

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
            // onMouseDown={props.onMouseDown}
            // onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "50%",
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
                  colors: ["#ccc", "#007580", "#ccc"],
                  min: 10,
                  max: 500,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              backgroundColor: "#007580",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",

                fontSize: "12px",
                fontFamily: "Roboto,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#007580",
              }}
            >
              {values[index].toFixed(0)}€
            </div>
            <div
              style={
                {
                  // height: "16px",
                  // width: "5px",
                  // backgroundColor: isDragged ? "#007580" : "#007580",
                }
              }
            />
          </div>
        )}
      />
    </>
  );
};

export default PriceRange;
