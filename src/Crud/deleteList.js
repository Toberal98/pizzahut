import axios from "axios";
import swal from 'sweetalert';

async function deleteList(information) {
  await axios
    .post("http://localhost:8080/list/deleteList", information)
    .then((response) => {
      console.log(response.data);
      swal("Good job!", "data was eliminated", "success");
      return response;
    });
}

export default deleteList;
