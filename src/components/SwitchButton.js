import Switch from "react-switch";

const SwitchButton = ({ switchButton, setSwichButton }) => {
  const handleChange = () => {
    if (switchButton) {
      setSwichButton(false);
    } else {
      setSwichButton(true);
    }
  };

  return (
    <div className="filter-switch-button">
      <label>
        <span>Trier par prix</span>
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
        />
      </label>
    </div>
  );
};

export default SwitchButton;
