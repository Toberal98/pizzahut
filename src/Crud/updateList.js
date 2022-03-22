import axios from "axios";
import swal from 'sweetalert';

async function updateList(information) {
  await axios
    .post("http://localhost:8080/list/updateList", information)
    .then((response) => {
      console.log(response.data);
      swal("Good job!", "data was updating", "success");
      return response;
    });
}

export default updateList;
