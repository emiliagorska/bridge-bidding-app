import Button from "react-bootstrap/Button";

function VariantsExample() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: rgba(217, 217, 217, 0.50);
    }
    `}
      </style>

      <Button variant="flat"></Button>
    </>
  );
}

export default VariantsExample;
