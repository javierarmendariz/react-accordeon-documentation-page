import React, { PropTypes } from 'react';
const AnotherReactComponentContentTwo = (props) => {
  const { expanded, toggle } = props;
  return (
    <div className="row collapse">
      <div className="small-12">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/juddO3i58Gs" frameBorder="0" allowFullScreen></iframe>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be sure
             there isn't anything embarrassing hidden in the middle of text.
             All the Lorem Ipsum generators on the Internet tend to repeat.
          </p>
      </div>
    </div>
  );
};

AnotherReactComponentContentTwo.propTypes = {
  toggle: PropTypes.func,
  expanded: PropTypes.bool,
};

export default AnotherReactComponentContentTwo;
