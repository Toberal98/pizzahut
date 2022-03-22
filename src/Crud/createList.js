import axios from "axios";
import swal from 'sweetalert';

async function createList(information) {
  return await axios
    .post("http://localhost:8080/list/newList", information)
    .then((response) =>{
      console.log(response.data);
      swal("Good job!", "Data Save it!", "success");
      return response;
    })
}

export default createList;
