function CreateTransactionButton(props) {
  return (
    <div className="my-3">
      <button className="btn btn-outline-warning w-100" onClick={props.onClick}>
        Click here to create new transaction
      </button>
    </div>
  );
}

export default CreateTransactionButton;
