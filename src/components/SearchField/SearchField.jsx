import { Field, Formik } from "formik";
import { Form } from "react-router-dom";


export default function SearchField() {


    function handleSearch(values,actions) {
        if (values.query.trim() === "") return
        onSearch(values.query);
    actions.resetForm();
    }



    return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
      <Form >
        <Field
          
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}