import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card,CardBody,CardTitle,Button,CardText} from 'reactstrap';

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books/get").then((res) => {
      const data = res.data.data;
      setData(data);
      console.log(data);
    });
  }, []);

  const deleteBooks = axios({
      method:'DELETE',
      url:'http://localhost:8080/books/delete/:booksId',
      data:{
          bookTitle: data.bookTitle,
          years:data.years,
          bookNumber:data.bookNumber,
          status:data.status
      }
  })

  const viewData = data.map((item, index) => (
    <div key={index}>
      <p>Title Book : {item.bookTitle}</p>
      <Card>
        <CardBody>
          <CardTitle>Release Year: {item.years}</CardTitle>
          <CardTitle>No Books : {item.bookNumber}</CardTitle>
          <CardTitle>Book Status : {item.status}</CardTitle>
          <CardText></CardText>
        </CardBody>
        <Button color="primary" onClick={deleteBooks}>Hapus</Button>
      </Card>
      <br/>
    </div>
  ));
  return <div>{viewData}</div>;
};

export default Index;
