const ViewMoreButton = ({ viewMore, setViewMore, viewMoreDisplayed }) => {
  const handleClick = (event) => {
    setViewMore(viewMore + 1);
  };

  return viewMoreDisplayed ? (
    <div className="container view-more-button-container">
      <button
        className="view-more-button"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Voir plus
      </button>
    </div>
  ) : null;
};

export default ViewMoreButton;
