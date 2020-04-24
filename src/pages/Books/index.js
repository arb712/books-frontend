import React from "react";
import {Formik} from 'formik';
import axios from "axios";
import { Button, Card,CardBody } from "reactstrap";
import '../../components/css/components.css';

const tambahForm = () => {
  return (
    <>
    <div>
      <Formik
        initialValues={{
          bookTitle: "",
          years: "",
          bookNumber: "",
          status: "",
        }}
        onSubmit={(values, actions) => {
          axios({
            method: "POST",
            url: "http://localhost:8080/books/post",
            data: values,
          });
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            window.location.reload();
          });
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="formAdd">
            <Card style={{ width: "60vh", border: "3px solid black" }}>
              <CardBody style={{ color: "black" }}>
                <label>Book Title</label>
                <input
                  name="bookTitle"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bookTitle}
                  placeholder="Title"
                />
                <br/>
                <label>Years</label>
                <input
                  name="years"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.years}
                  placeholder="Years"
                />
                <label>Book Number</label>
                <input
                  name="bookNumber"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.bookNumber}
                  placeholder="Book Number"
                />
                <br/>
                <label>Status</label>
                <input
                  name="status"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.status}
                  placeholder="Status"
                />
                <br />
                <Button
                  color="primary"
                  type="submit"
                  id="simpanHeroes"
                  style={{ marginTop: "20px" }}
                >
                  Submit
                </Button>
              </CardBody>
            </Card>
          </form>
        )}
      </Formik>
    </div>
    </>
  )
};
export default tambahForm;
