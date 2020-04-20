function main () {

    const baseUrl = "https://dev.farizdotid.com/api/instansi/daftar_instansi";

    // const getData = async () => {
    //     try {
    //       const response = await fetch(`${baseUrl}/bandung`);
    //       const responseJson = await response.json();
    //       if(responseJson.error) {
    //          showResponseMessage(responseJson.message);
    //       } else {
    //          renderAlldata(responseJson.daftar_instansi);
    //       }
    //     } catch(error) {
    //        showResponseMessage(error);
    //     }
    // }

    const getData = () => {
           fetch(`${baseUrl}/bandung`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                   console.log("Data masuk");
                   renderAlldata(responseJson.daftar_instansi);
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })
       };

       const showResponseMessage = (message = "Check your internet connection") => {
           alert(message);
       };

       const renderAlldata = (daftar_instansi) => {
           const listdataElement = document.querySelector("#listdata");
           listdataElement.innerHTML = "";
        
           daftar.forEach(daftar_instansi => {
               listdataElement.innerHTML += `
                   <div>
                               <h5>${daftar_instansi.nama_instansi} (${daftar_instansi.nomor_instansi})</h5>
                               <p>${daftar_instansi.alamat_instansi}</p>
                   </div>
               `;
           });
        
    };
    
    getData();

}

export default main;
