import React from 'react';
const cap = (word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};
function Alert(props) {
  return (
    props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {cap(props.alert.type)}:{props.alert.msgs}
      </div>
    )
  );
}

export default Alert;
