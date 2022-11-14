import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwitchButton = ({ switchButton, setSwichButton }) => {
  const handleChange = () => {
    if (switchButton) {
      setSwichButton(false);
    } else {
      setSwichButton(true);
    }
  };

  return (
    <label>
      <span>
        <Switch
          onChange={() => {
            handleChange();
          }}
          checked={switchButton}
          offColor={"#007580"}
          onColor={"#007580"}
          height={20}
          width={40}
          uncheckedIcon={false}
          checkedIcon={false}
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
              }}
            >
              <FontAwesomeIcon icon="arrow-up" />
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
              }}
            >
              <FontAwesomeIcon icon="arrow-down" />
            </div>
          }
        />
      </span>
    </label>
  );
};

export default SwitchButton;
