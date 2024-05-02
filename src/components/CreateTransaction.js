import { useState } from "react";
import CreateTransactionButton from "./CreateTransactionButton";
import CreateTransactionForm from "./CreateTransactionForm";

function CreateTransaction(props) {
  const [isShowCreateForm, setIsShowCreateForm] = useState(false);
  return (
    <>
      {!isShowCreateForm ? (
        <CreateTransactionButton onClick={() => setIsShowCreateForm(true)} />
      ) : (
        <CreateTransactionForm
          onCloseForm={() => setIsShowCreateForm(false)}
          createTransaction={props.createTransaction}
        />
      )}
    </>
  );
}

export default CreateTransaction;
